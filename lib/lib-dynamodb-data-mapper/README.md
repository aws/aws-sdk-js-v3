# Amazon DynamoDB DataMapper Library

[![Apache 2 License](@TBD)](http://aws.amazon.com/apache-2-0/)

This library provides a DataMapper class that enables seamless mapping between your application’s domain models and their persisted representation in DynamoDB. Define your schema once—using decorators or metadata—and interact with DynamoDB using object-oriented methods like put, get, query, and scan.

Built for modern async/await workflows and powered by a custom marshalling engine, this library brings clarity and type safety to your data access layer.

## Getting started

> Work in progress! The types and interface are subject to change as implementation and review progress.

### Installation

```bash
npm install @aws-sdk/lib-dynamodb-data-mapper
```

> Other dependencies:

```bash
npm install @aws-sdk/client-dynamodb
```

### DataMapper public interface

> Subject to change due to review and implementation in progress

```typescript
/**
 * Configuration options for initializing a {@link DataMapper}.
 *
 * @public
 */
export interface DataMapperConfig {
  /**
   * The underlying DynamoDB client instance used to execute operations.
   */
  client: DynamoDBClient;

  /**
   * Optional configuration for customizing how data is marshalled into
   * DynamoDB AttributeValue format.
   *
   * See {@link marshallOptions} for supported options such as:
   * - `convertEmptyValues`: Convert empty strings, blobs, and sets to `null`
   * - `removeUndefinedValues`: Exclude undefined values from the marshalled output
   */
  translateConfig?: marshallOptions;
}

/**
 * @public
 * Interface for a schema-aware DataMapper supporting both low-level and high-level operations.
 *
 * High-level methods operate on domain objects with schema metadata (via decorators or static symbols).
 * Low-level methods accept raw AWS SDK command inputs for advanced use cases.
 */
export class DataMapper {
  /**
   * Save a domain model object to DynamoDB using its schema metadata.
   *
   * @param item - The model instance with schema/table metadata.
   * @param criteria - Optional conditions to apply to the put operation (excluding TableName).
   * @param options - Optional HTTP handler options.
   * (e.g., timeouts, retries, abort signals). See {@link HttpHandlerOptions}.
   * @returns The saved item.
   */
  put<T extends object>(
    item: T,
    criteria?: Omit<Partial<PutItemCommandInput>, "TableName" | "Item">,
    options?: HttpHandlerOptions
  ): Promise<T>;

  /**
   * Retrieve and hydrate a domain object using schema metadata.
   *
   * @param key - The primary key of the item.
   * @param modelCtor - The model class constructor.
   * @param options - Optional HTTP handler options.
   * (e.g., timeouts, retries, abort signals). See {@link HttpHandlerOptions}.
   * @returns A hydrated instance of the model.
   */
  get<T extends object>(key: Partial<T>, modelCtor: new () => T, options?: HttpHandlerOptions): Promise<T | undefined>;

  /**
   * Delete a domain object by key using schema metadata.
   *
   * @param key - The key of the item to delete.
   * @param modelCtor - The model class constructor.
   * @param criteria - Optional conditions to apply to the delete operation (excluding TableName).
   * @param options - Optional HTTP handler options.
   * (e.g., timeouts, retries, abort signals). See {@link HttpHandlerOptions}.
   * @returns The deleted item, if it existed.
   */
  delete<T extends object>(
    key: Partial<T>,
    modelCtor: new () => T,
    criteria?: Omit<Partial<DeleteItemCommandInput>, "TableName" | "Key">,
    options?: HttpHandlerOptions
  ): Promise<T>;

  /**
   * Query domain objects using a model constructor and key conditions.
   *
   * @param modelCtor - The model class constructor.
   * @param criteria - Conditions to apply to the query operation (excluding TableName).
   * @param options - Optional HTTP handler options.
   * (e.g., timeouts, retries, abort signals). See {@link HttpHandlerOptions}.
   * @returns An async iterable of hydrated model instances.
   */
  query<T extends object>(
    modelCtor: new () => T,
    criteria?: Omit<QueryCommandInput, "TableName">,
    options?: HttpHandlerOptions
  ): AsyncIterable<T>;

  /**
   * Scan a table using schema metadata and return hydrated objects.
   *
   * @param modelCtor - The model class constructor.
   * @param criteria - Conditions to apply to the scan operation (excluding TableName).
   * @param options - Optional HTTP handler options.
   * (e.g., timeouts, retries, abort signals). See {@link HttpHandlerOptions}.
   * @returns An async iterable of hydrated model instances.
   */
  scan<T extends object>(
    modelCtor: new () => T,
    criteria?: Omit<ScanCommandInput, "TableName">,
    options?: HttpHandlerOptions
  ): AsyncIterable<T>;
}
```

### Working with Decorated Models

> The current implementation does not yet include support for decorators. This is just a sample of how will work once decorator will be in place

```typescript
import { Table, hashKey, attribute, embedded } from "@aws-sdk/lib-dynamodb-data-mapper/decorators";

@Table("Address")
class Address {
  @attribute({ attributeName: "street_name" })
  street!: string;

  @attribute()
  city!: string;
}

@Table("Users")
class User {
  @hashKey()
  id!: string;

  @attribute({ defaultProvider: () => "Anonymous" })
  name!: string;

  @embedded(() => Address)
  address!: Address;
}
```

This example demonstrates how to save and retrieve a decorated User model using DataMapper.
Schema and table metadata are resolved automatically from the class, enabling clean object-oriented access to DynamoDB.

```typescript
import { DataMapper } from "@aws-sdk/lib-dynamodb-data-mapper";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { Table, attribute, embedded, hashKey } from "./decorators"; // your custom decorators

// Define embedded model
@Table("Users")
class Address {
  @attribute()
  street!: string;

  @attribute()
  city!: string;
}

// Define root model with schema metadata
@Table("Users")
class User {
  @hashKey()
  id!: string;

  @attribute()
  name?: string;

  @embedded(() => Address)
  address!: Address;
}

// Initialize AWS SDK client and your DataMapper
const client = new DynamoDBClient({});
const mapper = DataMapper.from(client);

// Save a user
const user = new User();
user.id = "u123";
user.name = "Alice";
user.address = new Address();
user.address.street = "123 Main St";
user.address.city = "Metropolis";

await mapper.put(user);

// Load the user
const result = await mapper.get({ id: "u123" }, User);

console.log(result);
// Outputs:
// User {
//   id: 'u123',
//   name: 'Alice',
//   address: Address { street: '123 Main St', city: 'Metropolis' }
// }
```

### Working with Metadata-Based Models

```typescript
iimport { DynamoDbSchema, DynamoDbTable } from '@aws-sdk/lib-dynamodb-data-mapper';

class MyDomainModel {
  id!: string;
  name?: string;

  static [DynamoDbSchema] = {
    id: { type: 'String', keyType: 'HASH' },
    name: { type: 'String' },
  };

  static [DynamoDbTable] = 'MyDomainTable';
}
```

The schema and table name may be declared as property accessors directly on the
class if the value should be determined dynamically:

```typescript
import { DynamoDbSchema, DynamoDbTable } from "@aws-sdk/lib-dynamodb-data-mapper";

class MyOtherDomainModel {
  orderId!: string;
  amount!: number;
  tenantId: string;

  constructor(tenantId: string) {
    this.tenantId = tenantId;
  }

  get [DynamoDbSchema]() {
    return {
      orderId: { type: "String", keyType: "HASH" },
      amount: { type: "Number" },
    };
  }

  get [DynamoDbTable]() {
    return `Tenant_${this.tenantId}_MyOtherDomainTable`;
  }
}
```

Next, create an instance of `DataMapper` and use the `MyDomainClass` constructor
defined above to save and load objects from DynamoDB:

```typescript
import { DataMapper } from "@your-org/lib-dynamodb-data-mapper";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDbSchema, DynamoDbTable } from "./schema/schemaMetadata";

class MyDomainModel {
  id!: string;
  name?: string;

  static [DynamoDbSchema] = {
    id: { type: "String", keyType: "HASH" },
    name: { type: "String" },
  };

  static [DynamoDbTable] = "MyDomainTable";
}

// Step 1: Create a low-level client
const client = new DynamoDBClient({});

// Step 2: Create the DataMapper
const mapper = DataMapper.from(client);

// Step 3: Save an object
const item = new MyDomainModel();
item.id = "123";
item.name = "Test Object";

await mapper.put(item);

// Step 4: Retrieve by key
const loaded = await mapper.get({ id: "123" }, MyDomainModel);

console.log(loaded); // MyDomainModel { id: '123', name: 'Test Object' }
```

## Supported operations

> This is a work in progress and will be updated as implementations are completed.

The following operations are either supported or planned for the `DataMapper` interface.

---

### `put`

Inserts or replaces an item in a DynamoDB table.

```ts
put<T>(
  item: T,
  criteria?: Omit<Partial<PutItemCommandInput>, 'TableName' | 'Item'>,
  options?: HttpHandlerOptions
): Promise<T>
```

- `item`: The domain model instance decorated with schema and table metadata.
- `criteria`: Optional conditions like `ReturnValues`, `ConditionExpression`, etc. (excluding `TableName` and `Item`).
- `options`: Optional HTTP options such as timeout, retries, or abort signals.

```ts
await mapper.put(user);
```

> [Future] Condition expressions are not yet implemented.

---

### `get`

Fetches an item by key from a DynamoDB table.

```ts
get<T>(
  key: Partial<T>,
  modelCtor: new () => T,
  options?: HttpHandlerOptions
): Promise<T | undefined>
```

- `key`: Partial object containing the partition (and optionally sort) key.
- `modelCtor`: The model class constructor used to extract schema metadata.
- `options`: Optional HTTP-level controls like timeouts and retries.

```ts
const user = await mapper.get({ id: "u123" }, User);
```

---

### `delete`

Deletes an item by key.

```ts
delete<T>(
  key: Partial<T>,
  modelCtor: new () => T,
  criteria?: Omit<Partial<DeleteItemCommandInput>, 'TableName' | 'Key'>,
  options?: HttpHandlerOptions
): Promise<T>
```

- `key`: Partial object containing the partition (and optionally sort) key.
- `modelCtor`: The model class constructor used to extract schema metadata.
- `criteria`: Optional delete parameters like `ConditionExpression` and `ReturnValues`.
- `options`: Optional HTTP handler options.

```ts
await mapper.delete({ id: "u123" }, User);
```

> ❗ Not yet implemented.

---

### `query`

Retrieves multiple items by partition key using `KeyConditionExpression`.

```ts
query<T>(
  modelCtor: new () => T,
  criteria?: Omit<QueryCommandInput, 'TableName'>,
  options?: HttpHandlerOptions
): AsyncIterable<T>
```

- `modelCtor`: The model class constructor with schema metadata.
- `criteria`: Query parameters (without `TableName`), including `KeyConditionExpression`, `IndexName`, etc.
- `options`: Optional HTTP request options.

```ts
for await (const user of mapper.query(User, {
  KeyConditionExpression: "id = :id",
  ExpressionAttributeValues: { ":id": { S: "u123" } },
})) {
  console.log(user);
}
```

> ❗ Expression building is not yet implemented.

---

### `scan`

Scans the entire table or applies a filter.

```ts
scan<T>(
  modelCtor: new () => T,
  criteria?: Omit<ScanCommandInput, 'TableName'>,
  options?: HttpHandlerOptions
): AsyncIterable<T>
```

- `modelCtor`: The model class constructor with schema metadata.
- `criteria`: Optional parameters like `FilterExpression`, `Limit`, `StartKey`, etc.
- `options`: Optional HTTP handler options.

```ts
for await (const user of mapper.scan(User)) {
  console.log(user);
}
```

> ❗ Expression building is not yet implemented.

---

### [Planned] `batchGet`

- Fetch up to 100 items per request across one or more tables
- Retries unprocessed keys
- Based on metadata (schema + table name)

> ❗ Not implemented

---

### [Planned] `batchPut`

- Write up to 25 items per batch
- Retries unprocessed writes
- Uses schema metadata to determine table and shape

> ❗ Not implemented

---

### [Planned] `batchWrite`

- General-purpose batch operation: supports both `put` and `delete`
- Useful for syncing large sets of records

> ❗ Not implemented
