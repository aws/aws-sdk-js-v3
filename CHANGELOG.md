# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.9](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.8...v1.0.0-rc.9) (2020-12-11)


### Bug Fixes

* **codegen:** import SENSITIVE_STRING only when used ([#1761](https://github.com/aws/aws-sdk-js-v3/issues/1761)) ([9296283](https://github.com/aws/aws-sdk-js-v3/commit/9296283623edecf95441e310200a17b61efe80e3))
* **middleware-sdk-sqs:** call next() exactly once in sendMessageMiddleware ([#1752](https://github.com/aws/aws-sdk-js-v3/issues/1752)) ([dc63e37](https://github.com/aws/aws-sdk-js-v3/commit/dc63e3755305d527e38f139be379a8ebb650be86))
* **shared-ini-file-loader:** ignore prohibited profile name ([#1764](https://github.com/aws/aws-sdk-js-v3/issues/1764)) ([a209082](https://github.com/aws/aws-sdk-js-v3/commit/a209082dff913939672bb069964b33aa4c5409a9))


### Features

* add service id config ([#1765](https://github.com/aws/aws-sdk-js-v3/issues/1765)) ([1ba5672](https://github.com/aws/aws-sdk-js-v3/commit/1ba5672ff75bf5401f02f65d20af61c7bee339ff))
* update clients as of 12/09/2020 ([#1755](https://github.com/aws/aws-sdk-js-v3/issues/1755)) ([de1a24d](https://github.com/aws/aws-sdk-js-v3/commit/de1a24de6324694d37167fc49c81dcdf435a9405))
* update clients as of 12/11/2020 ([#1767](https://github.com/aws/aws-sdk-js-v3/issues/1767)) ([21646e3](https://github.com/aws/aws-sdk-js-v3/commit/21646e3b449aa67b9fe97fd2935f88a8773d94e9))
* **util-waiter:** add waiter utilities package ([#1736](https://github.com/aws/aws-sdk-js-v3/issues/1736)) ([02ad0a4](https://github.com/aws/aws-sdk-js-v3/commit/02ad0a400446a3473b1311b5a8fba7042f9efb1f))





# [1.0.0-rc.8](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.7...v1.0.0-rc.8) (2020-12-05)


### Bug Fixes

* **client-s3:** fix union serialization ([#1730](https://github.com/aws/aws-sdk-js-v3/issues/1730)) ([6437e24](https://github.com/aws/aws-sdk-js-v3/commit/6437e242f3848499f591f3d56f6f13e47be78a4f))
* **client-sts:** disable auth for public assumeRole commands ([#1706](https://github.com/aws/aws-sdk-js-v3/issues/1706)) ([891eae2](https://github.com/aws/aws-sdk-js-v3/commit/891eae20324271138bf745b9e0fce0e21aa2f07c))
* **codegen:** checkstyle errors in AddBuiltinPlugins.java ([#1731](https://github.com/aws/aws-sdk-js-v3/issues/1731)) ([48c02f4](https://github.com/aws/aws-sdk-js-v3/commit/48c02f4846b41a188b27fcb6cd461f07e0a3fa0b))
* **middleware-sdk-sqs:** Fix MD5 verification on SendMessageBatch. ([#1666](https://github.com/aws/aws-sdk-js-v3/issues/1666)) ([049f45e](https://github.com/aws/aws-sdk-js-v3/commit/049f45e41cfb653a8a725a77316f7d7e3000f2e5))
* **s3-request-presigner:** skip hoisting SSE headers ([#1701](https://github.com/aws/aws-sdk-js-v3/issues/1701)) ([1ec70ff](https://github.com/aws/aws-sdk-js-v3/commit/1ec70ff02de372e5de53e8a5c42ad55b41558502))


### Features

* update clients as of 11/20/2020 ([#1711](https://github.com/aws/aws-sdk-js-v3/issues/1711)) ([e932876](https://github.com/aws/aws-sdk-js-v3/commit/e9328760105ca6ce6a22002989d30a015c5b29fa))
* update clients as of 11/30/2020 ([#1734](https://github.com/aws/aws-sdk-js-v3/issues/1734)) ([a1e8036](https://github.com/aws/aws-sdk-js-v3/commit/a1e8036a33dcb29f49a99e6f93e911cf7ba7e796))
* update clients as of 12/3/2020 ([#1741](https://github.com/aws/aws-sdk-js-v3/issues/1741)) ([58383dc](https://github.com/aws/aws-sdk-js-v3/commit/58383dce968f01500b6c3ef07fead897787ed569))
* **invalid-dependency:** add invalidAsyncFunction which rejects with an Error ([#1719](https://github.com/aws/aws-sdk-js-v3/issues/1719)) ([c4c046e](https://github.com/aws/aws-sdk-js-v3/commit/c4c046edf0e752560fded20255642e6aed559d2c))





# [1.0.0-rc.7](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.6...v1.0.0-rc.7) (2020-11-20)


### Bug Fixes

* **abort-controller:** make AbortSignal WHATWG Spec compliant ([#1699](https://github.com/aws/aws-sdk-js-v3/issues/1699)) ([723ec4d](https://github.com/aws/aws-sdk-js-v3/commit/723ec4dffdc8b5956cc3d72c263abb4ff9770904))
* **codegen:** add aws-iam-traits dependency ([#1686](https://github.com/aws/aws-sdk-js-v3/issues/1686)) ([d6fb1f6](https://github.com/aws/aws-sdk-js-v3/commit/d6fb1f61304f15a4949dcf19c9ba992e2e4457c6))
* **fetch-http-handler:** omit body for HEAD/GET methods ([#1698](https://github.com/aws/aws-sdk-js-v3/issues/1698)) ([778b305](https://github.com/aws/aws-sdk-js-v3/commit/778b3051b890d0fa907688dfb8064167f22cb316))
* **node-http-handler:** throw TimeoutError for Node.js timeouts ([#1693](https://github.com/aws/aws-sdk-js-v3/issues/1693)) ([96f61bb](https://github.com/aws/aws-sdk-js-v3/commit/96f61bbead0773384d0f63966eda3c5f80ba4c41))
* change paginators to export paginateOperationName ([#1692](https://github.com/aws/aws-sdk-js-v3/issues/1692)) ([6d02935](https://github.com/aws/aws-sdk-js-v3/commit/6d029356c03f52469975aecff32baf8cc5f293e8))


### Features

* update clients as of 11/18/2020  ([#1700](https://github.com/aws/aws-sdk-js-v3/issues/1700)) ([8adfed1](https://github.com/aws/aws-sdk-js-v3/commit/8adfed16c9d7cd041be928e8437ccc648bfc0d99))
* **api-reference:** add typedoc plugins for api reference ([#1694](https://github.com/aws/aws-sdk-js-v3/issues/1694)) ([2cb016f](https://github.com/aws/aws-sdk-js-v3/commit/2cb016f23608421224d8e6a54043edb797ca4a89))
* **ci:** add GitHub Action to test codegen ([#1684](https://github.com/aws/aws-sdk-js-v3/issues/1684)) ([41e9359](https://github.com/aws/aws-sdk-js-v3/commit/41e9359fb0387cf86260a2b130a8fab90316584b))
* **node-http-handler:** update timeout code and tests ([#1691](https://github.com/aws/aws-sdk-js-v3/issues/1691)) ([9e58bbb](https://github.com/aws/aws-sdk-js-v3/commit/9e58bbb94ad89ade79def2cb808510b8d02e23cb))
* **service-error-classification:** add 429 response as Throttling ([#1690](https://github.com/aws/aws-sdk-js-v3/issues/1690)) ([9a62c0a](https://github.com/aws/aws-sdk-js-v3/commit/9a62c0a17f7bafc029ca71db2ec6f8b8a98e6ca9))


### BREAKING CHANGES

* change paginators to export paginateOperationName to be consistent with verb nouns across AWS





# [1.0.0-rc.6](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.5...v1.0.0-rc.6) (2020-11-13)


### Bug Fixes

* **logger:** disable logging of raw HTTP request/response ([#1682](https://github.com/aws/aws-sdk-js-v3/issues/1682)) ([2f1975d](https://github.com/aws/aws-sdk-js-v3/commit/2f1975d8ec9a8134ceb03be8ca204b99856bd241))
* do not call next() twice ([#1680](https://github.com/aws/aws-sdk-js-v3/issues/1680)) ([0964faf](https://github.com/aws/aws-sdk-js-v3/commit/0964faf99bd854cde98f995f6e431d6c7178f427))
* **readme:** close comment in a code snippet ([#1679](https://github.com/aws/aws-sdk-js-v3/issues/1679)) ([eee41e8](https://github.com/aws/aws-sdk-js-v3/commit/eee41e80e0b1943f5cf62833d7291e839099c807))
* generated new yarn lock file ([#1672](https://github.com/aws/aws-sdk-js-v3/issues/1672)) ([b2d9794](https://github.com/aws/aws-sdk-js-v3/commit/b2d97941fc5900eb712dce625e55ebaa4a5fc4df))


### Features

* update clients as of 11/13 ([#1676](https://github.com/aws/aws-sdk-js-v3/issues/1676)) ([2d934c9](https://github.com/aws/aws-sdk-js-v3/commit/2d934c98f6e5bd936d5744c674bf65e4e798b3d0))
* **codegen:** add script to copy models from local directory ([#1675](https://github.com/aws/aws-sdk-js-v3/issues/1675)) ([028a362](https://github.com/aws/aws-sdk-js-v3/commit/028a3629c2d87d8526a8074842dc2ce03cdff6af))





# [1.0.0-rc.5](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.4...v1.0.0-rc.5) (2020-11-09)


### Bug Fixes

* codegen for paginator send commands ([#1667](https://github.com/aws/aws-sdk-js-v3/issues/1667)) ([13f3347](https://github.com/aws/aws-sdk-js-v3/commit/13f3347723e99b20c7ccd38cdd73d5ac981857a0))
* **node-http-handler:** set maxSockets above 0 in test ([#1660](https://github.com/aws/aws-sdk-js-v3/issues/1660)) ([706768d](https://github.com/aws/aws-sdk-js-v3/commit/706768d51366ffdfffcd09c29da414ff9fa93e2c))
* **package.json:** migrate @aws-sdk/types into devDependencies codegen ([#1658](https://github.com/aws/aws-sdk-js-v3/issues/1658)) ([eb50962](https://github.com/aws/aws-sdk-js-v3/commit/eb509629cd6eeb293bf762c201710acabe049a58))
* migrate dev types for packages and lib into package.json devDeps ([#1654](https://github.com/aws/aws-sdk-js-v3/issues/1654)) ([16d7030](https://github.com/aws/aws-sdk-js-v3/commit/16d7030a5976d6671c7346c7fb945fefb547ae0d))


### Features

* **client-s3:** throw errors with 200 status code ([#1657](https://github.com/aws/aws-sdk-js-v3/issues/1657)) ([abed452](https://github.com/aws/aws-sdk-js-v3/commit/abed452caf9eabcbdcaab5b2d4cfa11fe967e51e))
* **clients:** update clients as of 11/6 ([#1663](https://github.com/aws/aws-sdk-js-v3/issues/1663)) ([07ac6be](https://github.com/aws/aws-sdk-js-v3/commit/07ac6be17ddbd52f638f8ed4b92b093bf7c378d1))





# [1.0.0-rc.4](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.3...v1.0.0-rc.4) (2020-10-31)


### Bug Fixes

* log requestId, extendedRequestId, cfId in metadata ([#1640](https://github.com/aws/aws-sdk-js-v3/issues/1640)) ([3a2f617](https://github.com/aws/aws-sdk-js-v3/commit/3a2f617d15631da1616044d3ce5ef44178463475))
* **client-timestream-*:** use correct endpoint prefix ([#1643](https://github.com/aws/aws-sdk-js-v3/issues/1643)) ([f329821](https://github.com/aws/aws-sdk-js-v3/commit/f329821bbca67d8c868c1cf86b923edd8bafadd8))
* **credential-provider-cognito-identity:** return identityId as part of cognitoIdentityPool ([#1635](https://github.com/aws/aws-sdk-js-v3/issues/1635)) ([de75f7e](https://github.com/aws/aws-sdk-js-v3/commit/de75f7e8edbc747cc49e7fa9b6223c80170c925a))
* **util-format-url:** remove headers or path from input ([#1639](https://github.com/aws/aws-sdk-js-v3/issues/1639)) ([db7aa08](https://github.com/aws/aws-sdk-js-v3/commit/db7aa08bf7b795a5848e5da01f343e4d6778516c))


### Features

* **clients:** update clients as of 10/30 ([#1648](https://github.com/aws/aws-sdk-js-v3/issues/1648)) ([fdd0ddf](https://github.com/aws/aws-sdk-js-v3/commit/fdd0ddf6e6400cf72dda521ddedc144436a6043c))
* **s3-presigned-post:** support S3 object post ([#1642](https://github.com/aws/aws-sdk-js-v3/issues/1642)) ([5fb8918](https://github.com/aws/aws-sdk-js-v3/commit/5fb8918c7abb47ad3dbe0e16cdb80c8e3d652566))
* log clientName and commandName ([#1637](https://github.com/aws/aws-sdk-js-v3/issues/1637)) ([79f25ca](https://github.com/aws/aws-sdk-js-v3/commit/79f25cacc076483e0134f3626d9971ada5f1206d))





# [1.0.0-rc.3](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.2...v1.0.0-rc.3) (2020-10-27)


### Bug Fixes

* **client-cognito-identity:** remove auth for UnlinkIdentity ([#1621](https://github.com/aws/aws-sdk-js-v3/issues/1621)) ([c32e5f3](https://github.com/aws/aws-sdk-js-v3/commit/c32e5f396a5e5a2bbb74ca35262fc28ac7e6eae0))
* **codegen:** skip awsAuthPlugin when optionalAuth trait is set ([#1622](https://github.com/aws/aws-sdk-js-v3/issues/1622)) ([785272b](https://github.com/aws/aws-sdk-js-v3/commit/785272b1bf0e1898b73504d8001baad546857de0))
* **generate-clients:** Invoke prettier relative to client-generation ([#1614](https://github.com/aws/aws-sdk-js-v3/issues/1614)) ([a4136ab](https://github.com/aws/aws-sdk-js-v3/commit/a4136abc34ffb2c1dcc1a7e0c5c32119fff1c415))


### Features

* **polly-request-presigner:** add presigned getSynthesizeSpeechUrl() ([#1612](https://github.com/aws/aws-sdk-js-v3/issues/1612)) ([2c9fd94](https://github.com/aws/aws-sdk-js-v3/commit/2c9fd947571c61c2fbc2a9164f93698967f84a0e))
* update client description to add keywords ([#1631](https://github.com/aws/aws-sdk-js-v3/issues/1631)) ([93fc586](https://github.com/aws/aws-sdk-js-v3/commit/93fc5866bf6e5f3b40f8dcfe829172bb80cc8391))





# [1.0.0-rc.2](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.1...v1.0.0-rc.2) (2020-10-22)


### Bug Fixes

* **storage:** add version and downloads badges ([#1599](https://github.com/aws/aws-sdk-js-v3/issues/1599)) ([230d030](https://github.com/aws/aws-sdk-js-v3/commit/230d0305801c298f93d3c534884833bf5cfa3f3f))
* throw 3XX redirection as errors explicitly ([#1591](https://github.com/aws/aws-sdk-js-v3/issues/1591)) ([76f83f1](https://github.com/aws/aws-sdk-js-v3/commit/76f83f19c96dc6c8705c8367cae5d87bbcfd7b23))





# [1.0.0-rc.1](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-gamma.11...v1.0.0-rc.1) (2020-10-19)


### Bug Fixes

* **node-http-handler:** fix type error sending Uint8Array as payload ([#1561](https://github.com/aws/aws-sdk-js-v3/issues/1561)) ([7bf03fc](https://github.com/aws/aws-sdk-js-v3/commit/7bf03fcd9475760bcc529d22063414cdfe8870ea))


### Features

* **storage:** adding lib/storage upload ([#1547](https://github.com/aws/aws-sdk-js-v3/issues/1547)) ([b07e719](https://github.com/aws/aws-sdk-js-v3/commit/b07e71986817d7781e12d9b687532c58d5ea6ba0))
* ready for release candidate ([#1578](https://github.com/aws/aws-sdk-js-v3/issues/1578)) ([519f66c](https://github.com/aws/aws-sdk-js-v3/commit/519f66c6388b91d0bd750a511e6d1af56196835e))
