# Smithy AWS Typescript Codegen Changelog

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
