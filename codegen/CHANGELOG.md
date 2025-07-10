# Smithy AWS Typescript Codegen Changelog

## 0.33.0 (2025-07-10)

### Features
- Upgraded to smithy-typescript 0.33.0 ([Release Notes](https://github.com/smithy-lang/smithy-typescript/blob/main/CHANGELOG.md#0330-2025-07-10))
- Upgraded smithy version to 1.60.3 ([#7170](https://github.com/aws/aws-sdk-js-v3/pull/7170))
- Updated codegen to get token from environment variable ([#7166](https://github.com/aws/aws-sdk-js-v3/pull/7166))
- Updated codegen to use Websocket in browser runtime for Bedrock Runtime ([#7175](https://github.com/aws/aws-sdk-js-v3/pull/7175))

### Bug Fixes
- Used model service instead of iterating services ([#7184](https://github.com/aws/aws-sdk-js-v3/pull/7184))
- Generated default endpoint provider for default regional AWS endpoints ([#7190](https://github.com/aws/aws-sdk-js-v3/pull/7190))

### Documentation

## 0.32.0 (2025-06-26)

## Features
- Upgraded to smithy-typescript 0.32.0 ([Release Notes](https://github.com/smithy-lang/smithy-typescript/blob/main/CHANGELOG.md#0320-2025-06-26))

## Bug Fixes
- Added default AWS regional endpoints for generated AWS clients ([#7151](https://github.com/aws/aws-sdk-js-v3/pull/7151))

## 0.31.1 (2025-06-23)

## Features
- Upgraded to smithy-typescript 0.31.1 ([Release Notes](https://github.com/smithy-lang/smithy-typescript/blob/main/CHANGELOG.md#0311-2025-06-23))

## Bug Fixes
- Updated codegen for endpoint configuration, event streams, and error classification ([#7143](https://github.com/aws/aws-sdk-js-v3/pull/7143))
- Fixed awsQueryCompat error structure for backwards compatibility ([#7133](https://github.com/aws/aws-sdk-js-v3/pull/7133))
- Allowed explicit undefined in EndpointParameters ([#7131](https://github.com/aws/aws-sdk-js-v3/pull/7131))

## 0.31.0 (2025-06-09)

## Features
- Upgraded to smithy 1.58.0 and smithy-typescript 0.31.0.

## Bug Fixes
- Fixed fallback behavior for SigV4A to SigV4 ([#7113](https://github.com/aws/aws-sdk-js-v3/pull/7113))

## 0.30.0 (2025-05-08)

## Features
- Upgraded to smithy 1.57.1 and smithy-typescript 0.30.0.

## Bug Fixes
- Allowed the `AwsSmithyRpcV2Cbor` generator to take priority over the base `SmithyRpcV2Cbor` generator. The
AWS extension enables AwsQueryCompatibility handling. ([#7058](https://github.com/aws/aws-sdk-js-v3/pull/7058))

## 0.29.1 (2025-04-24)

## Features
- Upgraded to smithy-typescript 0.29.1 ([Release Notes](https://github.com/smithy-lang/smithy-typescript/blob/main/CHANGELOG.md#0291-2025-04-24))

## Bug Fixes
- Removed host prefix behaviour for S3 and S3Control ([#7025](https://github.com/aws/aws-sdk-js-v3/pull/7025))

## 0.29.0 (2025-04-11)

## Features
- Upgraded to smithy-typescript 0.29.0 ([Release Notes](https://github.com/smithy-lang/smithy-typescript/blob/main/CHANGELOG.md#0290-2025-04-11))
- Upgraded to smithy 1.55.0 ([#7005](https://github.com/aws/aws-sdk-js-v3/pull/7005))

## 0.28.0 (2025-04-01)

## Features
- Upgraded to smithy-typescript 0.28.0 ([Release Notes](https://github.com/smithy-lang/smithy-typescript/blob/main/CHANGELOG.md#0280-2025-04-01))
- Enforced singular config object for resolver stack ([#6969](https://github.com/aws/aws-sdk-js-v3/pull/6969))

## 0.27.0 (2025-03-04)

## Features
- Upgraded to smithy-typescript 0.27.0 ([Release Notes](https://github.com/smithy-lang/smithy-typescript/blob/main/CHANGELOG.md#0270-2025-03-04))
- Upgraded to smithy 1.54.0 ([#6913](https://github.com/aws/aws-sdk-js-v3/pull/6913))
- Upgraded to smithy 1.53.0 ([#6906](https://github.com/aws/aws-sdk-js-v3/pull/6906))

### Bug Fixes
- Fixed union member serialization in JSON ([#6892](https://github.com/aws/aws-sdk-js-v3/pull/6892))

## 0.26.0 (2025-01-22)

### Features
- Upgraded to 0.26.0 of smithy-typescript ([Release Notes](https://github.com/kuhe/smithy-typescript/blob/main/CHANGELOG.md#0260-2025-01-22))
- Enabled profile configuration for clients ([#6728](https://github.com/aws/aws-sdk-js-v3/pull/6728))
- Created nested clients for internal use ([#6791](https://github.com/aws/aws-sdk-js-v3/pull/6791))

## 0.25.0 (2024-11-18)

### Features
- Upgraded to 1.51.0 of Smithy ([Release Notes](https://github.com/smithy-lang/smithy/blob/main/CHANGELOG.md#1520-2024-10-16))
- Upgraded to 0.25.0 of smithy-typescript ([Release Notes](https://github.com/kuhe/smithy-typescript/blob/main/CHANGELOG.md#0250-2024-11-18))

## 0.24.0 (2024-09-30)

### Features

* Populates and resolves flexible checksums client config values ([#6471](https://github.com/aws/aws-sdk-js-v3/pull/6471))

### Bug Fixes

* Allow empty string field values for headers ([#6511](https://github.com/aws/aws-sdk-js-v3/pull/6511))
* Fix setting the defualt signing name ([#6487](https://github.com/aws/aws-sdk-js-v3/pull/6487))
* Fix how waiters are generated using error types when using `awsQuery` ([#6501](https://github.com/aws/aws-sdk-js-v3/pull/6501))

## 0.23.0 (2024-09-10)

### Features
* Added support for SigV4a and sigining region sets ([#6368](https://github.com/aws/aws-sdk-js-v3/pull/6368))
* Added support for Smithy RPCv2 CBOR protocol ([#6096](https://github.com/aws/aws-sdk-js-v3/pull/6096))


## 0.22.0 (2024-08-06)

### Features
* Added support for `AccountIdEndpointMode` when configuring client endpoint parameters ([#6036](https://github.com/aws/aws-sdk-js-v3/pull/6036))
* Enabled the new identity and auth behavior by default ([#1352](https://github.com/smithy-lang/smithy-typescript/pull/1352))


## 0.21.0 (2024-05-22)

### Bug Fixes
* Added dependencies required by default credential providers ([#6055](https://github.com/aws/aws-sdk-js-v3/pull/6055))
* Statically import credential-provider-node in clients used from credentials ([#6027](https://github.com/aws/aws-sdk-js-v3/pull/6027))
* Changed the logic to only add doc trait conditionally ([#6002](https://github.com/aws/aws-sdk-js-v3/pull/6002))

## 0.20.1 (2024-04-05)

### Features
* Add option to prevent md5 computation ([#5953](https://github.com/aws/aws-sdk-js-v3/pull/5953))
* Update Smithy to 1.47.0 ([#5956](https://github.com/aws/aws-sdk-js-v3/pull/5956))

## 0.20.0 (2024-03-27)

### Features
* Reduced code size for xml serde ([#5568](https://github.com/aws/aws-sdk-js-v3/pull/5568), [#5566](https://github.com/aws/aws-sdk-js-v3/pull/5566))
* Reduced generated code size for all clients with library serde helpers ([#5855](https://github.com/aws/aws-sdk-js-v3/pull/5855))
* Implemented lazy-loading of STS & SSO clients in credential providers ([#5681](https://github.com/aws/aws-sdk-js-v3/pull/5681))

### Bug Fixes
* Fixed an issue that could cause endpoint augmentations not to be applied in certain cases ([#5933](https://github.com/aws/aws-sdk-js-v3/pull/5933))
* Fixed an issue where the `_json` deser function wouldn't be imported ([#5837](https://github.com/aws/aws-sdk-js-v3/pull/5837))
* Added string fallback for S3 responses that contain the `Expires` timestamp instead of throwing an exception ([#5715](https://github.com/aws/aws-sdk-js-v3/pull/5715))

## 0.19.0 (2023-11-03)

### Features
* Created coercing serializers for awsQueryCompat ([#5440](https://github.com/aws/aws-sdk-js-v3/pull/5440))
* Migrated the `@aws-sdk/util-endpoints` package to use the newly added `@smithy/util-endpoints` package ([#5390](https://github.com/aws/aws-sdk-js-v3/pull/5390))
* Added Node.js 14.x version deprecation warning ([#5413](https://github.com/aws/aws-sdk-js-v3/pull/5413))
* Deprecated gamesparks ([#5386](https://github.com/aws/aws-sdk-js-v3/pull/5386))
* Changed codegen for JSON protocols to use `awsExpectUnion`, which ignores the `__type` field ([#5376](https://github.com/aws/aws-sdk-js-v3/pull/5376))
* Updated shapes with members targeting string and number enums (TypeScript unions) to be closed ([#5356](https://github.com/aws/aws-sdk-js-v3/pull/5356))
* Added e2e suite for lib-dynamodb ([#5306](https://github.com/aws/aws-sdk-js-v3/pull/5306))
* Added middleware for following region redirects ([#5185](https://github.com/aws/aws-sdk-js-v3/pull/5185))

### Bug Fixes
* Updated to use partial record for enum keyed types ([#5391](https://github.com/aws/aws-sdk-js-v3/pull/5391))

## 0.18.0 (2023-10-04)

### Features
* Refactor addImport usage ([#4986](https://github.com/aws/aws-sdk-js-v3/pull/4986))
* Remove defaults mode provider codegen ([#4993](https://github.com/aws/aws-sdk-js-v3/pull/4993))
* Temporarily disable unused codegen ([#4996](https://github.com/aws/aws-sdk-js-v3/pull/4996))
* Customize @aws.auth#sigv4 identity providers for the AWS SDK ([#5179](https://github.com/aws/aws-sdk-js-v3/pull/5179))
* Customize @httpBearerAuth identity providers for the AWS SDK ([#5169](https://github.com/aws/aws-sdk-js-v3/pull/5169))
* Add aws region runtime extension codegen ([#5157](https://github.com/aws/aws-sdk-js-v3/pull/5157))
* Add smithy-aws-endpoints dependency ([#5311](https://github.com/aws/aws-sdk-js-v3/pull/5311))
* Upgrade to Smithy 1.39.0 ([#5311](https://github.com/aws/aws-sdk-js-v3/pull/5311))

## 0.17.1 (2023-07-07)

## 0.17.0 (2023-07-06)

### Features

* Upgraded to Smithy 1.33.0 ([#4899](https://github.com/aws/aws-sdk-js-v3/pull/4899))

## 0.16.0 (2023-06-30)

### Features

* Updated code generator to use @smithy scoped npm packages ([#4873](https://github.com/aws/aws-sdk-js-v3/pull/4873))
* Updated code generator to use runtime-agnostic util-stream package ([#4861](https://github.com/aws/aws-sdk-js-v3/pull/4861))

## 0.15.0 (2023-05-10)

### Features

* Add Gradle composite build ([#4710](https://github.com/aws/aws-sdk-js-v3/pull/4710))
* Add factory for aggregated clients ([#4639](https://github.com/aws/aws-sdk-js-v3/pull/4639))
* Shorten serde code in protocols files ([#4625](https://github.com/aws/aws-sdk-js-v3/pull/4625), [#4714](https://github.com/aws/aws-sdk-js-v3/pull/4714))
* Reduce generated HTTP request header code ([#4594](https://github.com/aws/aws-sdk-js-v3/pull/4594))
* Add client api-extraction ([#4567](https://github.com/aws/aws-sdk-js-v3/pull/4567))
* Reduce XML deserialization code size ([#4565](https://github.com/aws/aws-sdk-js-v3/pull/4565))
* Add operations list to client README files ([#4478](https://github.com/aws/aws-sdk-js-v3/pull/4478))
* Use generic client runtime config ([#4427](https://github.com/aws/aws-sdk-js-v3/pull/4427))

### Bug Fixes

* Fix jsonName deserialization on complex shapes ([#4670](https://github.com/aws/aws-sdk-js-v3/pull/4670))
* Fix allowing idempotency token ([#4642](https://github.com/aws/aws-sdk-js-v3/pull/4642))
* Fix missing dashes in client README files ([#4480](https://github.com/aws/aws-sdk-js-v3/pull/4480))

## 0.14.0 (2023-02-09)

## 0.13.0 (2023-01-31)

### Features

* Upgrade to Java 17 ([#4096](https://github.com/aws/aws-sdk-js-v3/pull/4096))
* Upgrade to smithy 1.27.2 ([#4387](https://github.com/aws/aws-sdk-js-v3/pull/4387))
* Endpoints 2.0 package changes ([#3947](https://github.com/aws/aws-sdk-js-v3/pull/3947))
* Support awsQueryError trait ([#3998](https://github.com/aws/aws-sdk-js-v3/pull/3998))
* Add TokenAuthPlugin ([#4238](https://github.com/aws/aws-sdk-js-v3/pull/4238), [#4012](https://github.com/aws/aws-sdk-js-v3/pull/4012), [#3972](https://github.com/aws/aws-sdk-js-v3/pull/3972))
* Add RetryStrategyV2 ([#4248](https://github.com/aws/aws-sdk-js-v3/pull/4248))
* Replace Hash with Checksum ([#4346](https://github.com/aws/aws-sdk-js-v3/pull/4346))
* Use util-utf8 instead of platform dependencies ([#4353](https://github.com/aws/aws-sdk-js-v3/pull/4353))
* Reduce object copying in iterators ([#4194](https://github.com/aws/aws-sdk-js-v3/pull/4194))
* Support util functions to consume response streams ([#3977](https://github.com/aws/aws-sdk-js-v3/pull/3977))
* Update awsAuthPlugin to set default signing name ([#4259](https://github.com/aws/aws-sdk-js-v3/pull/4259))
* fix(codegen): safe access for error code location ([#4367](https://github.com/aws/aws-sdk-js-v3/pull/4367))

### Bug fixes

* Populate message field when parsing errors ([#3995](https://github.com/aws/aws-sdk-js-v3/pull/3995), [#3999](https://github.com/aws/aws-sdk-js-v3/pull/3999))
* Update message in Error key in case of XML protocol ([#4000](https://github.com/aws/aws-sdk-js-v3/pull/4000))
* Update aws-query protocol to distinguish explicit empty list ([#4003](https://github.com/aws/aws-sdk-js-v3/pull/4003))
* Update S3 default config.signingEscapePath to false ([#4013](https://github.com/aws/aws-sdk-js-v3/pull/4013))
* Use default no-op logger to preserve type safety ([#4171](https://github.com/aws/aws-sdk-js-v3/pull/4171))
* Fix S3 control to add prefix dedupe middleware ([#4286](https://github.com/aws/aws-sdk-js-v3/pull/4286))
* Fix restXml protocol test for timestampFormat targets ([#4364](https://github.com/aws/aws-sdk-js-v3/pull/4364))
* Fix endpoints 2.0 bugs ([#4043](https://github.com/aws/aws-sdk-js-v3/pull/4043), [#4051](https://github.com/aws/aws-sdk-js-v3/pull/4051), [#4059](https://github.com/aws/aws-sdk-js-v3/pull/4059), [#4132](https://github.com/aws/aws-sdk-js-v3/pull/4132), [#4164](https://github.com/aws/aws-sdk-js-v3/pull/4164), [#4285](https://github.com/aws/aws-sdk-js-v3/pull/4285))

## 0.12.0 (2022-09-19)

### Features

* Added support for endpoints v2. ([#3942](https://github.com/aws/aws-sdk-js-v3/pull/3942))
* Added support for multiple error headers. ([#3852](https://github.com/aws/aws-sdk-js-v3/pull/3852))
* Added support for customer middleware for STS client. ([#3887](https://github.com/aws/aws-sdk-js-v3/pull/3887))
* Added fallback to status code for unmodeled errors. ([#3752](https://github.com/aws/aws-sdk-js-v3/pull/3752))
* Removed unnecessary S3 Size modification from inte to long. ([#3664](https://github.com/aws/aws-sdk-js-v3/pull/3664))
* Removed deprecated S3 regional endpoints middleware. ([#3656](https://github.com/aws/aws-sdk-js-v3/pull/3656))
* Added support for recursion detection middleware in Lambda. ([#3654](https://github.com/aws/aws-sdk-js-v3/pull/3654))
* Used Record type instead of Object. ([#3659](https://github.com/aws/aws-sdk-js-v3/pull/3659))
* Added check for javascript property validity for property access. ([#3649](https://github.com/aws/aws-sdk-js-v3/pull/3649))
* Added codegen indicator comment to all generated files. ([#3592](https://github.com/aws/aws-sdk-js-v3/pull/3592))
* Updated HTTP2 handler to accept parameters from default config provider. ([#3580](https://github.com/aws/aws-sdk-js-v3/pull/3580), [#3810](https://github.com/aws/aws-sdk-js-v3/pull/3810))
* Enabled HTTP2 support based on protocol trait definition. ([#3577](https://github.com/aws/aws-sdk-js-v3/pull/3577))
* Added support for multi-region sigv4a signer. ([#3518](https://github.com/aws/aws-sdk-js-v3/pull/3518))

### Bug Fixes

* Fixed README generation to handle service documentation containing `${}`. ([#3834](https://github.com/aws/aws-sdk-js-v3/pull/3834))
* Fixed error code parsing when it is a number. ([#3371](https://github.com/aws/aws-sdk-js-v3/pull/3371))
* Fixed serialization of event stream payloads. ([#3655](https://github.com/aws/aws-sdk-js-v3/pull/3655))
* Fixed endpoints for S3's WriteGetObjectResponse. ([#3662](https://github.com/aws/aws-sdk-js-v3/pull/3662))
* Fixed handling of empty xml tags. ([#3623](https://github.com/aws/aws-sdk-js-v3/pull/3623))

## 0.11.0 (2022-04-04)

### Features

* Updated Smithy version to `1.19.x`. ([#3507](https://github.com/aws/aws-sdk-js-v3/pull/3507))

## 0.10.0 (2022-03-02)

### Features

* Added http checksum dependency integration. ([#3346](https://github.com/aws/aws-sdk-js-v3/pull/3346), [#3349](https://github.com/aws/aws-sdk-js-v3/pull/3349))

### Bug Fixes

* Disabled bucket endpoint plugin in WriteGetObjectResponseCommand. ([#3344](https://github.com/aws/aws-sdk-js-v3/pull/3344))
* Fixed set deserialization in SSDKs. ([#3322](https://github.com/aws/aws-sdk-js-v3/pull/3322))

## 0.9.0 (2022-02-14)

### Features

* Updated Smithy version to `1.17.0`. ([#3288](https://github.com/aws/aws-sdk-js-v3/pull/3288))
* Added support for `defaultsMode`. ([#3192](https://github.com/aws/aws-sdk-js-v3/pull/3192))

## 0.8.0 (2021-11-23)

### Features

* Updated EndpointGenerator to merge variants from partition defaults and service defaults using tags as unique key. ([#2989](https://github.com/aws/aws-sdk-js-v3/pull/2989), [#2990](https://github.com/aws/aws-sdk-js-v3/pull/2990), [#3044](https://github.com/aws/aws-sdk-js-v3/pull/3044))
* Centralized Smithy version for Smithy dependencies including Smithy CLI. ([#3011](https://github.com/aws/aws-sdk-js-v3/pull/3011), [#3054](https://github.com/aws/aws-sdk-js-v3/pull/3054))
* Updated Smithy version to `1.14.x`. ([#3053](https://github.com/aws/aws-sdk-js-v3/pull/3053))

## 0.7.1 (2021-11-04)

### Bug Fixes

* Fixed generator to not rely on unreleased features.

## 0.7.0 (2021-11-03)

### Features

* Updated set deserialization to reject duplicates. ([#2764](https://github.com/aws/aws-sdk-js-v3/pull/2764))
* Updated collection deserialization to reject null in non-sparse collections. ([#2771](https://github.com/aws/aws-sdk-js-v3/pull/2771))
* Moved source files to `src` folder. ([#2844](https://github.com/aws/aws-sdk-js-v3/pull/2844))
* packageInfo imports from user agent module are now automatically ignored. ([#2875](https://github.com/aws/aws-sdk-js-v3/pull/2875))
* Updated Smithy version to `1.12.0`. ([#2878](https://github.com/aws/aws-sdk-js-v3/pull/2878))

## 0.6.0 (2021-09-02)

### Features

* Added support for malformed request tests. ([#2695](https://github.com/aws/aws-sdk-js-v3/pull/2695))
* Made endpoints resolution modular. ([#2704](https://github.com/aws/aws-sdk-js-v3/pull/2704))
* Updated number parsing to be stricter. ([#2662](https://github.com/aws/aws-sdk-js-v3/pull/2662), [#2719](https://github.com/aws/aws-sdk-js-v3/pull/2719))
* Reintroduced CORS retry headers for supported services. ([#2658](https://github.com/aws/aws-sdk-js-v3/pull/2658))

### Bug Fixes

* Fixed double encoding of presigned url. ([#2711](https://github.com/aws/aws-sdk-js-v3/pull/2711))
* Only trim xml tag values which contain newline. ([#2653](https://github.com/aws/aws-sdk-js-v3/pull/2653))

### Other

* Updated `smithy-typescript-codegen` dependency to `0.6.0`.
* Updated `smithy` dependencies to `1.11.x`.

## 0.5.0 (2021-07-23)

### Features

* Updated `smithy-typescript-codegen` dependency to `0.5.0`.
