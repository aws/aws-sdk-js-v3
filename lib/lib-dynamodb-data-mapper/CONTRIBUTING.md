# Contributing to @aws-sdk/lib-dynamodb-data-mapper

Welcome! We're excited that you're interested in contributing to the DataMapper for AWS SDK JavaScript v3. This project aims to offer a clean, modular, and schema-aware abstraction over DynamoDB operations. Please follow the guidelines below to help us maintain quality and consistency.

---

## File Naming Conventions

This project follows naming conventions inspired by the AWS SDK for JavaScript v3.

### Commands

Use `PascalCaseCommand.ts` for all DataMapper commands.

Examples:

- `PutItemCommand.ts`
- `GetItemCommand.ts`
- `DeleteItemCommand.ts`

Each file should export:

- A command class (e.g., `PutItemCommand`)
- Input and output interfaces (e.g., `PutItemCommandInput`, `PutItemCommandOutput`)

---

### Middleware

Use `camelCaseMiddleware.ts` and export each middleware as a named function.

Examples:

- `marshallInputMiddleware.ts`
- `unmarshallOutputMiddleware.ts`
- `schemaValidationMiddleware.ts`

---

### Utilities & Helpers

Use `camelCase.ts` for reusable utility functions or internal helpers.

Examples:

- `marshallItem.ts`
- `validateSchema.ts`
- `convertToAttrMap.ts`

---

### Constants & Symbols

Use either `camelCase.ts` or `symbols.ts` for defining shared constants or symbols.

Examples:

- `schemaMetadata.ts`
- `constants.ts`
- `symbols.ts`

---

### Models & Types

Use PascalCase file names for shared type definitions.

Examples:

- `SchemaType.ts`
- `AttributeValue.ts`

Interfaces specific to a command can be defined in the same file as the command class.

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
