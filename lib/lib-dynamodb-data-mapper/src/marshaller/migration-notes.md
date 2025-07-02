# AWS SDK v2 to v3 DataMapper Compatibility: Missing Features

This document lists functionality available in AWS SDK for JavaScript v2's `@aws/dynamodb-auto-marshaller` and `@aws/dynamodb-data-mapper` that is **not directly present in SDK v3**, along with reasoning and current migration stance.

---

## 1. `BinarySet` and `NumberValueSet`

### ❌ Missing in v3

The classes `BinarySet` and `NumberValueSet` from v2 are not ported to v3.

### ✅ v2 Behavior

- Automatically filtered out invalid or empty values
- Ensured member types were correct (e.g., `number` in `NumberSet`)
- Provided validation, serialization helpers

### ✅ v3 Status

- v3 uses native `Set` objects
- No internal filtering/validation

### 🟢 Current Handling (in our v3-compatible mapper)

- Manual filtering of empty elements
- Marshalls using native Set via `Array.from()`
- Handles string → binary conversion using `TextEncoder`

```ts
const members = Array.from(values)
  .map((el) => ...)
  .filter((b) => !(options.convertEmptyValues && isEmpty(b)))
```

### Reason for Omission

- AWS SDK v3's philosophy is **leaner**, relies on user-side validation
- Encourages use of JS-native types and behaviors

---

## 2. `Marshaller` Class

### ❌ Missing in v3

The central `Marshaller` class from v2 is no longer used in v3.

### ✅ v2 Behavior

- Acted as a catch-all serializer/deserializer
- Controlled marshalling behavior using options like `onEmpty`, `onInvalid`, `unwrapNumbers`

### ✅ v3 Status

- V3 uses stateless utility functions: `marshall()` and `unmarshall()`
- Per-type marshallers must be written or managed manually

### 🟢 Our Implementation

- `marshallValue()` is broken into specific handlers by schema type
- All logic for options (`convertEmptyValues`, etc.) is explicitly written in per-type branches

### Reason for Omission

- V3 avoids complex class-based stateful marshallers
- Options are passed and interpreted inline

---

## 3. `onEmpty`, `onInvalid`, `unwrapNumbers` options

### ❌ Missing in v3 core SDK

These were part of `Marshaller`-based logic in v2, and have no v3 equivalent.

### 🟢 Current Handling

We do **not** implement `onEmpty`, `onInvalid`, or `unwrapNumbers`. We stick to the official v3 `marshallOptions` and `unmarshallOptions` types:

```ts
export interface marshallOptions {
  convertEmptyValues?: boolean;
  removeUndefinedValues?: boolean;
  convertClassInstanceToMap?: boolean;
}

export interface unmarshallOptions {
  wrapNumbers?: boolean | ((n: string) => any);
  convertWithoutMapWrapper?: boolean;
}
```

### Reason for Omission

- Not part of v3's official public API
- Not used by `@aws-sdk/util-dynamodb`

---

## 4. Auto-instantiation of `Set` types from arrays

### ✅ v2 Behavior

Automatically accepted and normalized array inputs to `Set` types:

```ts
new Set(["a", "b"]); // normalized internally
```

### 🟢 v3 Compatibility

We mimic this behavior using:

```ts
const values = input instanceof Set ? input : new Set(input);
```

### Reason for Inclusion

To preserve DX parity and avoid surprises during migration

---

## Summary

| Feature                        | v2 Support | v3 Native | v3 Custom Support   | Status             |
| ------------------------------ | ---------- | --------- | ------------------- | ------------------ |
| `BinarySet` / `NumberValueSet` | ✅ Yes     | ❌ No     | ✅ Manually handled | Supported manually |
| `Marshaller` class             | ✅ Yes     | ❌ No     | ✅ Split by type    | Fully supported    |
| `onEmpty` / `onInvalid`        | ✅ Yes     | ❌ No     | ❌ Not supported    | Not supported      |
| `unwrapNumbers`                | ✅ Yes     | ❌ No     | ❌ Not supported    | Not supported      |
| `Set` coercion from arrays     | ✅ Yes     | ✅ Yes    | ✅ Yes              | Fully supported    |

---

## Migration Note

This package aims to preserve the **observable runtime behavior** of AWS SDK v2 DataMapper, **without introducing legacy classes**. All features are rebuilt using idiomatic v3-compatible mechanisms.
