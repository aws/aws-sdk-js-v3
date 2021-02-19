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

To install the dependencies and link the library, run the following command:

```
yarn
```

To run all of the tests in the repository, still from the root package, run the following command:

```
yarn test:all
```

The above command will use Lerna to run the `test` script in every package in the `packages` directory.

To run the tests for a specific package, you can run `yarn test` from within the specified package folder, assuming the above steps have been run.

### Generating Service Clients

Please refer [sdk-codegen](./codegen/sdk-codegen/README.md)

[issues]: https://github.com/aws/aws-sdk-js-v3/issues
[pr]: https://github.com/aws/aws-sdk-js-v3/pulls
[license]: http://aws.amazon.com/apache2.0/
[cla]: http://en.wikipedia.org/wiki/Contributor_License_Agreement
[aws service models]: https://github.com/aws/aws-sdk-js-v3/tree/main/models
[conventional commits]: https://www.conventionalcommits.org/
