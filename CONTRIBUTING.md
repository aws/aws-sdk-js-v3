# Contributing to the AWS SDK for JavaScript

We work hard to provide a high-quality and useful SDK, and we greatly value
feedback and contributions from our community. Whether it's a bug report,
new feature, correction, or additional documentation, we welcome your issues
and pull requests. Please read through this document before submitting any
issues or pull requests to ensure we have all the necessary information to
effectively respond to your bug report or contribution.

## Filing Bug Reports

You can file bug reports against the SDK on the [GitHub issues][issues] page.

If you are filing a report for a bug or regression in the SDK, it's extremely
helpful to provide as much information as possible when opening the original
issue. This helps us reproduce and investigate the possible bug without having
to wait for this extra information to be provided. Please read the following
guidelines prior to filing a bug report.

1. Search through existing [issues][] to ensure that your specific issue has
   not yet been reported. If it is a common issue, it is likely there is
   already a bug report for your problem.

2. Ensure that you have tested the latest version of the SDK. Although you
   may have an issue against an older version of the SDK, we cannot provide
   bug fixes for old versions. It's also possible that the bug may have been
   fixed in the latest release.

3. Provide as much information about your environment, SDK version, and
   relevant dependencies as possible. For example, let us know what version
   of Node.js you are using, or if it's a browser issue, which browser you
   are using. If the issue only occurs with a specific dependency loaded,
   please provide that dependency name and version.

4. Provide a minimal test case that reproduces your issue or any error
   information you related to your problem. We can provide feedback much
   more quickly if we know what operations you are calling in the SDK. If
   you cannot provide a full test case, provide as much code as you can
   to help us diagnose the problem. Any relevant information should be provided
   as well, like whether this is a persistent issue, or if it only occurs
   some of the time.

## Submitting Pull Requests

We are always happy to receive code and documentation contributions to the SDK.
Please be aware of the following notes prior to opening a pull request:

1. The SDK is released under the [Apache license][license]. Any code you submit
   will be released under that license. For substantial contributions, we may
   ask you to sign a [Contributor License Agreement (CLA)][cla].

2. If you would like to implement support for a significant feature that is not
   yet available in the SDK, please talk to us beforehand to avoid any
   duplication of effort.

3. Wherever possible, pull requests should contain tests as appropriate.
   Bugfixes should contain tests that exercise the corrected behavior (i.e., the
   test should fail without the bugfix and pass with it), and new features
   should be accompanied by tests exercising the feature. Pull requests that
   contain failing tests will not be merged until the test failures are addressed.
   Pull requests that cause a significant drop in the SDK's test coverage
   percentage are unlikely to be merged until tests have been added.

4. Commit tile and message and pull request title and description must adhere to
   [conventional commits][conventional commits]. Title must begin with `feat(module): title`,
   `fix(module): title`, `docs(module): title`, `test(module): title`, `chore(module): title`.
   Title should be lowercase and not period at the end of it. If the commit includes
   a breaking change, the commit message must end with a single paragraph: `BREAKING CHANGE: a description of what broke`

5. After getting ready to open a pull request, make sure to run the `yarn update-clients`
   to re-generate all the service clients, and commit the change(if any) to a
   standalone commit following the guide above.

### Setup and Testing

This project uses a monorepo to manage all of the packages.
This allows us to easily test the effects of changes in one package to others.

Make sure you have [`yarn`](https://yarnpkg.com/en/) installed by:

```
yarn --version
```

If not, please refer to [yarn installation](https://yarnpkg.com/en/docs/install) to install `yarn`.

To install the dependencies and link the library, run the following command under project root:

```
yarn
```

To run all of the tests in the repository, still from the root package, run the following command
under project root:

```
yarn test:all
```

The above command will use Lerna to run the `test` script in every package of the monorepo.

#### Test a changed package

To run the tests for a specific package, you can run `yarn test` within the
specified package folder.

Alternatively, from the project root, you can run:

```
lerna run test --scope [package name]
```

If `lerna` is not available in your environment, you can install it globally with:

```
npm install -g lerna@3
```

If you have touched multiple packages and you want to make sure the package
you want to test has picked up all your latest changes in dependencies, you
can build them in one command:

```
lerna run build --scope [package name] --include-dependencies
```

You don't need to run this command if the dependency packages are not changed.

## Gradle Composite Build

The `aws-sdk-js-v3` repository uses Gradle as a build tool and has Gradle based dependencies such as `smithy` and `smithy-typescript`.
To improve development experience when making changes to the dependencies locally, we can
use the [Gradle composite build feature](https://docs.gradle.org/current/userguide/composite_builds.html),
which allows picking up any local changes from dependencies automatically and rebuilding them when `aws-sdk-js-v3` is rebuilt.

This also makes IDE integration more pleasant, as Intellij IDEA will open the included projects as modules when the Gradle build is imported.

In order to utilise this feature, create a file `local.properties` in the `codegen` directory with the following content:

```
smithy=/Volumes/workplace/smithy
smithy-typescript=/Volumes/workplace/smithy-typescript
```

## Experimental Features

`aws-sdk-js-v3 ` uses `smithy-typescript` to generate code. `smithy-typescript` is under heavy development and has
experimental features that can affect `aws-sdk-js-v3`. These features are enabled via opt-in settings in `sdk-codegen`.
Note that any contributions related to these features MUST be reviewed carefully for opt-in behavior via feature flags
as to not break any existing customers. Here are the experimental features that are currently under development:

| Experimental Feature | Flag                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identity & Auth      | `experimentalIdentityAndAuth` | Standardize identity and auth integrations to match the Smithy specification (see [Authentication Traits](https://smithy.io/2.0/spec/authentication-traits.html)). Newer capabilities include support for multiple auth schemes, `@optionalAuth`, and standardized identity interfaces for authentication schemes both in code generation and TypeScript packages. In `smithy-typescript`, `@httpApiKeyAuth` will be updated to use the new standardized interfaces. In `aws-sdk-js-v3` (`smithy-typescript`'s largest customer), this will affect `@aws.auth#sigv4` and `@httpBearerAuth` implementations, but is planned to be completely backwards-compatible. |

## Build caching

Build caching is optionally available via Turborepo. See `turbo.json`.
Codegen build caching is not supported, but you can use it to run the
basic `build`, `types`, and `docs` processes that have deterministic
outputs in the `dist-*` folders.

For usage and code, see [`./scripts/remote-cache`][build-cache].

## Generating Service Clients

If you made changes to either [AWS Smithy TypeScript generator](./codegen/smithy-aws-typescript-codegen)
or [Smithy TypeScript generator][smithy typescript repo], you should include
the generated code change to your PR. Here's how to generate clients:

1. Clone and checkout smithy-typescript repo

   ```
   git clone https://github.com/awslabs/smithy-typescript.git && cd smithy-typescript
   git checkout [working_branch]
   ```

1. Build the local branch and publish locally:

   ```
   ./gradlew clean build publishToMavenLocal
   ```

1. Generate all service clients in JavaScript SDK repo:

   ```
   yarn generate-clients
   ```

   `generate-clients` is a util script to facilitate the code generation. For more
   information, please refer [codegen](./codegen/README.md)

1. Generate a single client:
   ```
   # in the client package folder.
   clients/client-X> yarn generate:client
   ```

### CLI dispatch helpers

There are optional CLI helpers.
The CLI helpers assist in the dispatch of commands to package or subfolder contexts.

To activate the default aliases run:

```
. ./scripts/cli-dispatcher/set-alias.sh
```

This enables the command bin/exe

`b` and `r`.

#### General Syntax

```sh
b (package name query) - (npm script query)
```

```sh
r (workspace script query)
```

#### Syntax Examples:

Usage examples for `r`:

`r` depends on what files exist in your unversioned `workspace` directory at the repository root.
It will run the first matching `*.js`, `*.mjs`, or `*.ts` file.

```sh
r dyn test
```

```sh
npx esbuilder-runner ./workspace/dynamodb/test.ts # (if *.ts file)
node ./workspace/dynamodb/test.mjs # (if *.mjs file)
```

Usage examples for `b`:

```sh
b s3 - b
```

matches to: yarn **b**uild in clients/client-**s3**

```sh
b mar ent - doc
```

matches to: yarn build:**doc**s in clients/client-**mar**ketplace-**ent**itlement-service

```sh
b m sign - t
```

matches to: yarn **t**est in packages/**m**iddleware-**sign**ing

The package name query is used to find the package within clients, lib, or packages, and the npm script query is used to
find a command to execute from within `package.json` `scripts`.

In both queries, you can use space-separated substrings. They must occur in the matching package or command in linear order. Priority is given to whole-word matches, initial word matches, and shorter strings. If your instructions are ambiguous the first priority match will be executed. Use the dry-run or confirm options to check your command before execution.

Additional options:
--dry (dry run), --c (confirm before execution), --help

[issues]: https://github.com/aws/aws-sdk-js-v3/issues
[pr]: https://github.com/aws/aws-sdk-js-v3/pulls
[license]: http://aws.amazon.com/apache2.0/
[cla]: http://en.wikipedia.org/wiki/Contributor_License_Agreement
[aws service models]: https://github.com/aws/aws-sdk-js-v3/tree/main/models
[conventional commits]: https://www.conventionalcommits.org/
[smithy typescript repo]: https://github.com/awslabs/smithy-typescript
[build-cache]: https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/remote-cache
