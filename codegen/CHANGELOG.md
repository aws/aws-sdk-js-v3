# Smithy AWS Typescript Codegen Changelog

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
