# Draft - WIP

This is used for now to follow some lines

# Structure Based on @aws-sdk/lib-dynamodb

lib-dynamodb-datamapper/
├── src/
│ ├── baseCommands/ ← shared logic (optional: base class, marshalling utils)
│ ├── commands/ ← put, get, update, delete, etc.
│ ├── pagination/ ← support async iteration over scan/query
│ ├── decorators/ ← @table, @attribute, @embed
│ ├── DataMapper.ts ← the public-facing class
│ └── index.ts ← exports DataMapper and decorators

⸻

## baseCommands/

• Optional base class or shared logic reused across commands
• Good for things like schema marshalling/unmarshalling, base command input types

## commands/

• Contains individual implementations: PutCommand.ts, GetCommand.ts, etc.
• Each file encapsulates a single logical operation (like SDK Command classes)

## pagination/

• Will contain async iterator helpers for query and scan
• Example: paginateQuery.ts, paginateScan.ts

## decorators/

• @table, @attribute, @embed decorators and related metadata helpers
• Uses reflect-metadata to attach schema info to classes and properties

⸻

# Naming Consistency with lib-dynamodb

Existing lib-dynamodb folder Your equivalent

- commands/ commands/ for each operation
- baseCommand/ baseCommands/ for schema logic
- pagination/ pagination/ for async iterables
- marshall/ In your case, part of baseCommands
- middleware/ Not applicable yet (but possible in future)

## commands/

• Contains high-level, user-facing operations (e.g., PutCommand.ts, GetCommand.ts)
• Each file typically implements the full logic for a specific public method (e.g., how to handle put() on an object)
• Tied to concrete behaviors like:
• invoking DynamoDB
• validating inputs
• handling marshalling

> Think: “What the library does” (use case logic)

## baseCommands/

• Contains shared low-level logic or base classes that multiple commands rely on
• Examples include:
• abstract base classes
• shared marshalling/unmarshalling logic
• schema-to-DynamoDB conversions
• decorators → command metadata extraction

> Think: “How the library does it under the hood” (reusable building blocks)

👇 Example

```
commands/PutCommand.ts

import { buildPutInput } from "../baseCommands/buildPutInput";
import { PutCommand } from "@aws-sdk/lib-dynamodb";

export async function runPutCommand(...) {
const input = buildPutInput(...);
return client.send(new PutCommand(input));
}

baseCommands/buildPutInput.ts

export function buildPutInput(item: object, metadata: TableMetadata): PutCommandInput {
return {
TableName: metadata.tableName,
Item: item,
};
}

```

# Data Marshaller

## marshaller/

### 1. DataMarshaller.ts

• Role: Main engine for schema-driven marshalling/unmarshalling
• Responsibilities:
• Uses getSchema() to retrieve schema
• Uses sdkMarshall() / sdkUnmarshall() for low-level conversions
• Iterates over fields defined in schema
• Hydrates class instances via new model()

### 2. schema/Schema.ts

• Role: Defines your schema structure and supported types
• Key exports:
• Schema = { [fieldName]: SchemaType }
• SchemaType = discriminated union of supported types (String, Number, Date, Map, etc.)
• Each type includes optional metadata like attributeName, versionAttribute, etc.

### 3. schemaMetadata.ts

• Role: Provides symbol-based metadata lookup
• Key symbols:
• DYNAMODB_SCHEMA – symbol to store or retrieve schema
• DYNAMODB_TABLE – symbol for table name (optional)
• getSchema(item) – returns schema (via function or object)
• getTableName(item) – returns table name (via function or string)
• Usage: Mirrors v2’s approach, used internally by DataMarshaller

### Summary: Your marshalling stack is composed of

- Component Role
- DataMarshaller Core class to marshal/unmarshal based on schema
- SchemaType.ts Describes schema structure
- schemaMetadata.ts Gets schema at runtime via well-known symbols
