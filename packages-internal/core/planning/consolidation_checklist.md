# Consolidation checklist

## Source migration

- [ ] Copy source files (excluding barrel `index.ts`) into `core/src/submodules/<submodule>/<package>/`.
- [ ] Use explicit named exports in the submodule's canonical `index.ts` — no `export *`.
- [ ] Do not allow intermediate barrel `index.ts` files in sub-folders; export directly from source files.
- [ ] Cross-submodule imports must use `@smithy/core/<submodule>`, not relative paths (lint enforces this).
- [ ] If a dependency would create a cycle, inline the needed functions locally.
- [ ] Save `CHANGELOG.md` as contextual artifacts alongside the new source folder.
- [ ] Add consolidation notice to the top of each new changelog file.
- [ ] When merging platform-specific packages (e.g. `util-defaults-mode-browser` + `util-defaults-mode-node`), use
      `.browser.ts` and `.native.ts` variants in a single directory.

## Old package cleanup

- [ ] Delete all source files except a re-export index.ts file, and all test files in the original folder.
- [ ] Delete all dependencies and browser/react-native replacement metadata in package.json.
- [ ] Remove `typesVersions` metadata from package.json.
- [ ] Move no-longer-applicable NPM scripts into the new package location. Merge if it is a test grouping (vitest
      config). Remove scripts that no longer apply to the remaining re-export stub (e.g. `test`, `test:watch`,
      `extract:docs`, `build:types:downlevel`).
- [ ] Take a dependency on the package's new location.
- [ ] Re-export from that location: every symbol that was previously exported for backwards compatibility, including
      types.
  - The api.json snapshot can be used to determine what was exported previously.

## Dependency updates (TypeScript)

- [ ] Remove the old package from `dependencies` in all `*/package.json`.
- [ ] Add the new location as a dependency where not already present.
- [ ] Migrate dependencies of the original source code to the new package.
- [ ] Update all source imports (`from "@aws-sdk/old-package"` → `from "@aws-sdk/new-package"`).
- [ ] Update `vi.mock()` paths in test files to match the new import paths. This includes mocks of the old package
      name (e.g. `vi.mock("@aws-sdk/old-package")` → `vi.mock("@aws-sdk/<new-package>")`) and mocks of relative paths that
      changed due to file relocation.
- [ ] Add the old package names to the banned imports list in `.eslintrc.js`, one group per distinct new location.

## Browser/React-Native field updates

- [ ] If the original package had tests other than unit tests, e.g. alternate vitest files or test commands in
      package.json scripts. They should be merged with the same test group of the new location. If the group did not exist,
      create it.
  - The linter will take care of updating any `browser/reac-native` fields in the new location's package.json.

## Dependency updates (Java codegen)

- [ ] Move (don't delete) `AwsDependency` enum values in the deprecated group at the end of the enum.
- [ ] Update all calls to `add(Relative)?Import`, `add(Relative)?Typeimport`, and `addDependency` etc. involving the
      package to use the new location.
- [ ] Update `withConventions` calls to use `"@aws-sdk/new-package-location"` as the package name string.
- [ ] Add new submodule constants to `AwsSdkCoreSubmodules.java` (create if needed).
- [ ] `make jfmt` format Java code.

## Verification

- [ ] run `yarn` to update the lockfile and sort package.json files.
- [ ] `make tpk` - packages build and don't have cyclic deps.
- [ ] `yarn test` in the relevant packages (vitest).
- [ ] `yarn lint` in `packages-internal/core`
- [ ] `make api-snapshot` (after build).
- [ ] `node ./scripts/runtime-dependency-version-check/check-dependencies.js`
- [ ] `node ./scripts/runtime-dependency-version-check/runtime-dep-version-check.js`
