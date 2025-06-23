# Contributing to @aws-sdk/lib-dynamodb-data-mapper

Welcome! We're excited that you're interested in contributing to the DataMapper for AWS SDK JavaScript v3. This project aims to offer a clean, modular, and schema-aware abstraction over DynamoDB operations. Please follow the guidelines below to help us maintain quality and consistency.

---

## File Naming Conventions

This project follows naming conventions inspired by the AWS SDK for JavaScript v3.

### Factories & Classes

Use **PascalCase** for files that export a primary class or factory-centric class (e.g., with a static `.from()` method).

Examples:

- `DataMapper.ts` – exports `class DataMapper` with a `static from()` method
- `DataMarshaller.ts` – utility class with only static methods
- `User.ts` – domain model class
- `Address.ts` – embedded document class

These files may include:

- Static factory methods (e.g., `from()`, `create()`)
- Type or interface definitions related to the class
- Utility functions scoped to the class (if minimal)

> Avoid PascalCase for utility-only modules that do not define a class.

```ts
// ✅ OK
export class DataMapper {
  static from(...) { ... }
}
```

❌ Avoid using PascalCase when exporting only functions or constants
**Bad example** (file named DataMapper.ts but doesn’t export a class):

```ts
// ❌ File: DataMapper.ts
export function createMapper(config: Config): Mapper { ... } // no class
```

**Instead, use a camelCase name:**

```ts
// ✅ File: createMapper.ts
export function createMapper(config: Config): Mapper { ... }
```

### Commands

Use **PascalCase** for all DataMapper commands.

Examples:

- `PutItemCommand.ts`
- `GetItemCommand.ts`
- `DeleteItemCommand.ts`

Each file should export:

- A command class (e.g., `PutItemCommand`)
- Input and output interfaces (e.g., `PutItemCommandInput`, `PutItemCommandOutput`)

---

### Middleware

Use **camelCase** and export each middleware as a named function.

Examples:

- `marshallInputMiddleware.ts`
- `unmarshallOutputMiddleware.ts`
- `schemaValidationMiddleware.ts`

---

### Utilities & Helpers

Use **camelCase** for reusable utility functions or internal helpers.

Examples:

- `marshallItem.ts`
- `validateSchema.ts`
- `convertToAttrMap.ts`

---

### Constants & Symbols

Use either **camelCase** for defining shared constants or symbols.

Examples:

- `schemaMetadata.ts`
- `constants.ts`
- `symbols.ts`

---

### Models & Types

Use **PascalCase** file names **only** when the file exports a single, top-level `class` or `type alias` that matches the filename exactly.

Examples

- `SchemaType.ts` – if it only exports `type SchemaType = ...`
- `User.ts` – if it exports `class User`

---

Use **camelCase** file names when:

- The file exports **multiple types, interfaces, or utility functions**
- It is a shared schema or marshaller utility module

Examples:

- `schemaType.ts` – multiple schema-related types and helpers
- `keySchema.ts` – exports `KeySchema`, `KeyTypeMap`, etc.

Interfaces that are **specific to a command** can be defined in the same file as the command implementation.

---

### Tests

- Unit tests should live next to the implementation file.
- Use the `.spec.ts` suffix.

Example:

```

marshallItem.ts
marshallItem.spec.ts

```

Use the **AAA pattern**: Arrange, Act, Assert.
Use clear, descriptive names for `describe()` and `it()` blocks.

---

## Testing

- Tests are written in Jest.
- Place `.spec.ts` files adjacent to the implementation file.
- Mock AWS SDK clients as needed.
- Run tests locally with:

```bash
npx vitest run
```

---

## Code Style

- Use TypeScript with strict mode.
- Use named exports.
- Prefer immutable data and pure functions where possible.
- Keep each file focused on a single responsibility.
- Format code using Prettier (if configured).
- Lint with ESLint before committing.

---

## Commit Message Guidelines

Use [Conventional Commits](https://www.conventionalcommits.org/) for clarity and changelog generation:

---

## Thanks for Contributing!

Whether it's fixing a bug, improving documentation, or adding a new feature—your help is appreciated. Feel free to open issues, ask questions, or start discussions before submitting a pull request.
