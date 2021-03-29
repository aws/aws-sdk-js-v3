# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.10.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.9.0...v3.10.0) (2021-03-26)


### Bug Fixes

* **clients:** generate jest.config.js ([#2172](https://github.com/aws/aws-sdk-js-v3/issues/2172)) ([95b0e19](https://github.com/aws/aws-sdk-js-v3/commit/95b0e191eddf71033b9bd6a2d76d20fedea71b5f))
* **lib-storage:** fix fs error on browsers when using lib-storage upload ([#2165](https://github.com/aws/aws-sdk-js-v3/issues/2165)) ([5d9bc5f](https://github.com/aws/aws-sdk-js-v3/commit/5d9bc5f32980f43a9b581b1f5101cdc7f2258173))


### Features

* **credential-provider-ini:** call fromTokenFile in assumeRole chaining ([#2178](https://github.com/aws/aws-sdk-js-v3/issues/2178)) ([fb95408](https://github.com/aws/aws-sdk-js-v3/commit/fb95408d999c8322a12fcc1459e3a56b289048b4))
* **credential-provider-web-identity:** add fromTokenFile credentials provider ([#2177](https://github.com/aws/aws-sdk-js-v3/issues/2177)) ([88cc65d](https://github.com/aws/aws-sdk-js-v3/commit/88cc65d320247fb770953ec74a148d7e506589e1))
* use ts-jest for running jest tests ([#2088](https://github.com/aws/aws-sdk-js-v3/issues/2088)) ([456002c](https://github.com/aws/aws-sdk-js-v3/commit/456002cf7fa16864b72c3c279b094886a42abddb))





# [3.9.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.8.1...v3.9.0) (2021-03-18)


### Bug Fixes

* **codegen:** pin smithy dependencies to minor version 1.6.x ([#2153](https://github.com/aws/aws-sdk-js-v3/issues/2153)) ([906e4b0](https://github.com/aws/aws-sdk-js-v3/commit/906e4b04d18ba26cbe16d9122b0014ea539233ac))


### Features

* **middleware-bucket-endpoint:** add object lambda support ([#2143](https://github.com/aws/aws-sdk-js-v3/issues/2143)) ([83c591a](https://github.com/aws/aws-sdk-js-v3/commit/83c591a5bb07c45e055f7494a591553694d5a0e4))





## [3.8.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.8.0...v3.8.1) (2021-03-11)


### Bug Fixes

* **middleware-signing:** memoize temporary credentials ([#2109](https://github.com/aws/aws-sdk-js-v3/issues/2109)) ([cf238b9](https://github.com/aws/aws-sdk-js-v3/commit/cf238b931ee5c0514246832e9e2e36a9173e1f05))
* bump verdeccio - dompurify for sec review ([#2114](https://github.com/aws/aws-sdk-js-v3/issues/2114)) ([e8d9c65](https://github.com/aws/aws-sdk-js-v3/commit/e8d9c65ca32553224dccbfcfa2c41183db868e54))





# [3.8.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.7.0...v3.8.0) (2021-03-05)


### Bug Fixes

* **deps:** pin fast-xml-parser to v3.17.4 ([#2102](https://github.com/aws/aws-sdk-js-v3/issues/2102)) ([c612c75](https://github.com/aws/aws-sdk-js-v3/commit/c612c75890a9b5005ff68b72bcac91761ce5dc14))
* **middleware-bucket-endpoint:** revert add support for s3 object lamdbas ([#2103](https://github.com/aws/aws-sdk-js-v3/issues/2103)) ([827c7b8](https://github.com/aws/aws-sdk-js-v3/commit/827c7b8d6d27cf1bc6ff8c90c3642586a29e7935))
* call filterSensitiveLog for missing structures ([#2089](https://github.com/aws/aws-sdk-js-v3/issues/2089)) ([1b5cb0f](https://github.com/aws/aws-sdk-js-v3/commit/1b5cb0f3450692349d3d1264255e37f6c8c41abe))


### Features

* **lib-dynamodb:** add DynamoDB DocumentClient ([#2097](https://github.com/aws/aws-sdk-js-v3/issues/2097)) ([3fd14d5](https://github.com/aws/aws-sdk-js-v3/commit/3fd14d5e43bc020cdc90932f1ee114f6ffa4ebc1))
* add support for s3 object lamdbas ([01bd1a0](https://github.com/aws/aws-sdk-js-v3/commit/01bd1a073022eff77f003a3fd310bac2c54dbcb4))





# [3.7.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.6.1...v3.7.0) (2021-02-25)


### Bug Fixes

* **codegen:** move auth to standalone plugin ([#2076](https://github.com/aws/aws-sdk-js-v3/issues/2076)) ([8d99715](https://github.com/aws/aws-sdk-js-v3/commit/8d997158c15dd4e3b3d9fe91d6d39fd37b9445f5))
* gitignore temporary folder .aws-models ([#2069](https://github.com/aws/aws-sdk-js-v3/issues/2069)) ([bb9a9a2](https://github.com/aws/aws-sdk-js-v3/commit/bb9a9a22a30265ad6d46d196873a8e9de9ae7063))
* write undefined JSON RPC input body ([#2075](https://github.com/aws/aws-sdk-js-v3/issues/2075)) ([a84afb0](https://github.com/aws/aws-sdk-js-v3/commit/a84afb08a7ecbab9c60427f1003d3bf18c5d25af))


### Features

* **credential-provider-sso:** support resolving credentials from SSO token ([#2055](https://github.com/aws/aws-sdk-js-v3/issues/2055)) ([1429ad1](https://github.com/aws/aws-sdk-js-v3/commit/1429ad1f2e631638db95d0e56eb9509c234ba146))





## [3.6.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.6.0...v3.6.1) (2021-02-22)


### Bug Fixes

* update references of default branch from master to main ([#2057](https://github.com/aws/aws-sdk-js-v3/issues/2057)) ([59b8b58](https://github.com/aws/aws-sdk-js-v3/commit/59b8b58c3a8c057b36abfaa59bae3a6ffb068cf1))





# [3.6.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.5.0...v3.6.0) (2021-02-20)


### Bug Fixes

* revert publish v3.5.1-0 ([#2058](https://github.com/aws/aws-sdk-js-v3/issues/2058)) ([af25697](https://github.com/aws/aws-sdk-js-v3/commit/af25697aee9363a66c0d69b83f7df2e445c4b721))
* **client-kinesis-video-signaling:** remove retry headers ([#1963](https://github.com/aws/aws-sdk-js-v3/issues/1963)) ([8b35943](https://github.com/aws/aws-sdk-js-v3/commit/8b35943f0d45700c9350abded09e9bb7e8fe51f7))
* **clients:** remove unsupported CORS retry headers in new services ([#2041](https://github.com/aws/aws-sdk-js-v3/issues/2041)) ([82df9d3](https://github.com/aws/aws-sdk-js-v3/commit/82df9d3aff901030bb8715a922f912940f01cc14))
* **credential-provider-ini:** refactor provider options interfaces ([#2048](https://github.com/aws/aws-sdk-js-v3/issues/2048)) ([34cecf1](https://github.com/aws/aws-sdk-js-v3/commit/34cecf1e3b4048dfdf88422e369615843d798c81))
* **credential-provider-node:** read config and credentials files only once ([#2045](https://github.com/aws/aws-sdk-js-v3/issues/2045)) ([7db14b1](https://github.com/aws/aws-sdk-js-v3/commit/7db14b1646b299da403fc152765fbc40cd2970b0))
* **deps:** add @aws-sdk/middleware-sdk-rds in DocDB and Neptune ([#2042](https://github.com/aws/aws-sdk-js-v3/issues/2042)) ([a0068f3](https://github.com/aws/aws-sdk-js-v3/commit/a0068f34f24191bd4b3b5b56a8746b5a942cda65))
* **lib-storage:** fix typo in Upload.intialize (initialize) ([#2025](https://github.com/aws/aws-sdk-js-v3/issues/2025)) ([16214be](https://github.com/aws/aws-sdk-js-v3/commit/16214beb2b8300ff77293a3297f35a8a0b3a07bb))
* **middleware-sdk-ec2:** add undeclared dependency @aws-sdk/protocol-http ([#2043](https://github.com/aws/aws-sdk-js-v3/issues/2043)) ([6e562ba](https://github.com/aws/aws-sdk-js-v3/commit/6e562ba142461790ba60e9f224e067c9982eda55))


### Features

* **client-sso*:** remove auth dependencies if client doesn't need ([#2037](https://github.com/aws/aws-sdk-js-v3/issues/2037)) ([f1e190c](https://github.com/aws/aws-sdk-js-v3/commit/f1e190cd9a8d79679e2d37bc997f96ae5216ad9e))
* **lib-storage:** rewrite lib-storage upload ([#2039](https://github.com/aws/aws-sdk-js-v3/issues/2039)) ([2bd8f6a](https://github.com/aws/aws-sdk-js-v3/commit/2bd8f6a1f25569f2e05c4e947764514a5c8e9d36))





# [3.5.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.4.1...v3.5.0) (2021-02-12)


### Bug Fixes

* **util-dynamodb:** state options.wrapNumbers on BigInt error in unmarshall ([#2015](https://github.com/aws/aws-sdk-js-v3/issues/2015)) ([d1c548e](https://github.com/aws/aws-sdk-js-v3/commit/d1c548ede2abe62adbdd11d207500a2eeb96dde0))
* **util-dynamodb:** unmarshall small numbers or those in scientific notation ([#2017](https://github.com/aws/aws-sdk-js-v3/issues/2017)) ([80a8094](https://github.com/aws/aws-sdk-js-v3/commit/80a80941a150e36f416bb24cc6c137f674c1dbdf))
* **util-user-agent-browser:** use default import from bowser ([#1991](https://github.com/aws/aws-sdk-js-v3/issues/1991)) ([d2e8d4f](https://github.com/aws/aws-sdk-js-v3/commit/d2e8d4f4d53166416e86d12a1a953e31368f55ac))


### Features

* **s3-request-presigner:** automatically add host header ([#1988](https://github.com/aws/aws-sdk-js-v3/issues/1988)) ([cd50eeb](https://github.com/aws/aws-sdk-js-v3/commit/cd50eeb5ddcfd69fe2d9586045e2078723fd9ea4))
* **util-dynamodb:** marshall JavaScript Maps ([#2010](https://github.com/aws/aws-sdk-js-v3/issues/2010)) ([569b572](https://github.com/aws/aws-sdk-js-v3/commit/569b572ad356285ab7678ebf9d5ff26fc011bbc0))
* **util-dynamodb:** support marshalling for Object.create ([#1974](https://github.com/aws/aws-sdk-js-v3/issues/1974)) ([a008d23](https://github.com/aws/aws-sdk-js-v3/commit/a008d23fcd66f5d22ab00e14428309f7fc6f868a))
* add S3 and S3Control customizations for custom endpoints ([#1993](https://github.com/aws/aws-sdk-js-v3/issues/1993)) ([96c1b99](https://github.com/aws/aws-sdk-js-v3/commit/96c1b99559b7de538d79efcae3fae84fa4da3c77))





## [3.4.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.4.0...v3.4.1) (2021-01-29)


### Bug Fixes

* **client-ec2:** update ec2 model ([#1982](https://github.com/aws/aws-sdk-js-v3/issues/1982)) ([599725a](https://github.com/aws/aws-sdk-js-v3/commit/599725aba08176e911e6bc6c75797682f0999852))
* **client-forecast*:** fix API docs ([#1981](https://github.com/aws/aws-sdk-js-v3/issues/1981)) ([ebd7b2b](https://github.com/aws/aws-sdk-js-v3/commit/ebd7b2b9843f94c4e860a83dcc65c12efc494a0d))
* **clients:** use TS 3.4 compatible types for TS 3.9 ([#1978](https://github.com/aws/aws-sdk-js-v3/issues/1978)) ([8bced5c](https://github.com/aws/aws-sdk-js-v3/commit/8bced5c32b9dbc68f1065054d796cb0b8b87bcc4))


### Features

* use git-sync action to sync with private mirror ([#1965](https://github.com/aws/aws-sdk-js-v3/issues/1965)) ([10ab6a1](https://github.com/aws/aws-sdk-js-v3/commit/10ab6a1d32807c55382b6e8877724d5120db31e6))





# [3.4.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.3.0...v3.4.0) (2021-01-28)


### Bug Fixes

* allow packages/types in gitignore ([#1942](https://github.com/aws/aws-sdk-js-v3/issues/1942)) ([b4b6fad](https://github.com/aws/aws-sdk-js-v3/commit/b4b6fad2ea826abd2506bcc94d294148c7c902a9))
* **credential-provider-cognito-identity:** remove duplicate declarationDir ([#1944](https://github.com/aws/aws-sdk-js-v3/issues/1944)) ([d75488a](https://github.com/aws/aws-sdk-js-v3/commit/d75488a7634ecf5ffa594c6a4e06e387e7c064e2))
* **generate-clients:** call mergeManifest when constructor.name is Object ([#1937](https://github.com/aws/aws-sdk-js-v3/issues/1937)) ([601c03b](https://github.com/aws/aws-sdk-js-v3/commit/601c03bbb00934fd3dafaeee1332a0d0040ec8c7))


### Features

* **middleware-stack:** allow adding middleware to override an existing one ([#1964](https://github.com/aws/aws-sdk-js-v3/issues/1964)) ([9c21f14](https://github.com/aws/aws-sdk-js-v3/commit/9c21f14412f2b1f591422f3c67dedbe886db723b)), closes [#1883](https://github.com/aws/aws-sdk-js-v3/issues/1883)
* **util-dynamodb:** add option to convert class instance to map ([#1969](https://github.com/aws/aws-sdk-js-v3/issues/1969)) ([1783c69](https://github.com/aws/aws-sdk-js-v3/commit/1783c690422acc18700c1be4f7da8dedf7ce7395))
* run prettier in parallel in generate-clients ([#1949](https://github.com/aws/aws-sdk-js-v3/issues/1949)) ([878617a](https://github.com/aws/aws-sdk-js-v3/commit/878617a975157dea0cb95bba2a7a067febe13570))
* use downlevel-dts to generate TS 3.4 compatible types ([#1943](https://github.com/aws/aws-sdk-js-v3/issues/1943)) ([63ad215](https://github.com/aws/aws-sdk-js-v3/commit/63ad2151c8bb7be32ea8838a9b0974806ed3906b))





# [3.3.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.2.0...v3.3.0) (2021-01-14)


### Bug Fixes

* **clients:** export explicit dependencies on @aws-sdk/types ([#1902](https://github.com/aws/aws-sdk-js-v3/issues/1902)) ([96f1087](https://github.com/aws/aws-sdk-js-v3/commit/96f1087333ba916593d557051297983912b27caa))
* **clients:** lowercase all header names in serializer ([#1892](https://github.com/aws/aws-sdk-js-v3/issues/1892)) ([1308721](https://github.com/aws/aws-sdk-js-v3/commit/130872194bc94590f599051ee067d862210252f8))
* **url-parser:** merge browser and node url parser, add rn url parser ([#1903](https://github.com/aws/aws-sdk-js-v3/issues/1903)) ([99be092](https://github.com/aws/aws-sdk-js-v3/commit/99be092fded13bb00802549e17dbdb6d760a8679))
* **util-waiters:** waiters should call operation once before entering waiting ([#1915](https://github.com/aws/aws-sdk-js-v3/issues/1915)) ([2a6ac11](https://github.com/aws/aws-sdk-js-v3/commit/2a6ac11c483b3c6afbb84518dba206df1f3df850))


### Features

* **clients:** update README with documentation, usage and more ([#1907](https://github.com/aws/aws-sdk-js-v3/issues/1907)) ([03be111](https://github.com/aws/aws-sdk-js-v3/commit/03be111a086360687f20b2ac1d490584fb4fbefe))





# [3.2.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1.0...v3.2.0) (2021-01-09)


### Bug Fixes

* **lib-storage:** chunk from readable only when defined ([#1886](https://github.com/aws/aws-sdk-js-v3/issues/1886)) ([4cdc08a](https://github.com/aws/aws-sdk-js-v3/commit/4cdc08aef3dc57d1d200f4d6d9e9683426354374))
* **s3-request-presigner:** not to throw when get signed urls concurrently ([#1884](https://github.com/aws/aws-sdk-js-v3/issues/1884)) ([741bb99](https://github.com/aws/aws-sdk-js-v3/commit/741bb99ebcc163003de7a1310910d667fc9ce405))
* stop adding command mw repeatedly in resolveMiddleware() ([#1883](https://github.com/aws/aws-sdk-js-v3/issues/1883)) ([d4c302b](https://github.com/aws/aws-sdk-js-v3/commit/d4c302b816e1781f8d04bd479cc4e26e0fe4debc))
* **readme:** npm downloads tag ([#1870](https://github.com/aws/aws-sdk-js-v3/issues/1870)) ([1f8baf3](https://github.com/aws/aws-sdk-js-v3/commit/1f8baf3478691c6974ab9d86929825c87bc8f6f8))
* **readme:** remove duplicate [@aws-sdk](https://github.com/aws-sdk) ([#1873](https://github.com/aws/aws-sdk-js-v3/issues/1873)) ([85ae915](https://github.com/aws/aws-sdk-js-v3/commit/85ae915d5e284bd44d15d2be0caf340882777def))
* **readme:** use latest for npm version badge in template ([#1871](https://github.com/aws/aws-sdk-js-v3/issues/1871)) ([80b57a7](https://github.com/aws/aws-sdk-js-v3/commit/80b57a7a47809a64b9714cb998c98c0889deccfd))
* **readme:** use latest in npm version tag ([#1872](https://github.com/aws/aws-sdk-js-v3/issues/1872)) ([b8542d8](https://github.com/aws/aws-sdk-js-v3/commit/b8542d8aa845d1111e3f8a8e2c79393802d8d013))
* **util-user-agent-*:** move @aws-sdk/types to devDependencies ([#1879](https://github.com/aws/aws-sdk-js-v3/issues/1879)) ([ea39ca6](https://github.com/aws/aws-sdk-js-v3/commit/ea39ca6e54d3d92af626ed3e55a59b9e95bb7142))
* **util-waiter:** expose minDelay and maxDelay for waiters ([#1839](https://github.com/aws/aws-sdk-js-v3/issues/1839)) ([25cb359](https://github.com/aws/aws-sdk-js-v3/commit/25cb359e69966c549eb505956c2aeee809819245))


### Features

* use lock-threads GH action for inactive issues/PRs ([#1881](https://github.com/aws/aws-sdk-js-v3/issues/1881)) ([fc22682](https://github.com/aws/aws-sdk-js-v3/commit/fc226825f8f33f60401a5bb50941e854be0f921e))
* **util-dynamodb:** enable undefined values removal in marshall ([#1840](https://github.com/aws/aws-sdk-js-v3/issues/1840)) ([314d3b3](https://github.com/aws/aws-sdk-js-v3/commit/314d3b37ac9d0d500e5762705be6188d9bd69625))





# [3.1.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.0.0...v3.1.0) (2020-12-23)


### Bug Fixes

* **clients:** default region and credential provider ([#1834](https://github.com/aws/aws-sdk-js-v3/issues/1834)) ([bc79ab5](https://github.com/aws/aws-sdk-js-v3/commit/bc79ab5f17e00bc069b51f2f426dc73c16483eaa))
* **clients:** populate sdkId in serviceId and default to use arnNamespace as signingName ([#1786](https://github.com/aws/aws-sdk-js-v3/issues/1786)) ([0011af2](https://github.com/aws/aws-sdk-js-v3/commit/0011af27a62d0d201296225e2a70276645b3231a))
* **clients:** remove retry headers for several services ([#1789](https://github.com/aws/aws-sdk-js-v3/issues/1789)) ([fc98d2d](https://github.com/aws/aws-sdk-js-v3/commit/fc98d2d8bd162c6a60c7c05a31cf697e24e13e04))
* **clients:** update endpoint provider ([#1824](https://github.com/aws/aws-sdk-js-v3/issues/1824)) ([64d2210](https://github.com/aws/aws-sdk-js-v3/commit/64d22105691f286ad9accf1a137d7c1928378ad4))
* **clients:** use signing name from auth sigv4 trait ([#1835](https://github.com/aws/aws-sdk-js-v3/issues/1835)) ([e539302](https://github.com/aws/aws-sdk-js-v3/commit/e539302f69e55eb46ffd751125fe06d49c21d1c5))
* **codegen:** strip names from enums ([#1837](https://github.com/aws/aws-sdk-js-v3/issues/1837)) ([0711503](https://github.com/aws/aws-sdk-js-v3/commit/0711503ce6de0e87440b4695204ceecdda8aa9e3))
* **lib-storage:** cleanup stream listeners to prevent memory leak ([3d36682](https://github.com/aws/aws-sdk-js-v3/commit/3d3668256467c5fa7a00e19c6c42667b5b3a77d4))
* **middleware-user-agent:** add middleware to final step of build ([#1833](https://github.com/aws/aws-sdk-js-v3/issues/1833)) ([e7dce39](https://github.com/aws/aws-sdk-js-v3/commit/e7dce39ede5e73b6c60647a189345ff7d6010a69))
* **signature-v4:** add secrets to signing key cache key ([#1776](https://github.com/aws/aws-sdk-js-v3/issues/1776)) ([8785ad4](https://github.com/aws/aws-sdk-js-v3/commit/8785ad47776a0bb54367caa253e01379ac7d9f8e))
* **util-waiter:** fix compiling error with waiter ([#1812](https://github.com/aws/aws-sdk-js-v3/issues/1812)) ([ca1f0d6](https://github.com/aws/aws-sdk-js-v3/commit/ca1f0d6f93d13ea2cf28ffea22fb24f01d495cf9)), closes [#1803](https://github.com/aws/aws-sdk-js-v3/issues/1803)
* log requestId, extendedRequestId, cfId in $metadata ([#1819](https://github.com/aws/aws-sdk-js-v3/issues/1819)) ([f2a47e8](https://github.com/aws/aws-sdk-js-v3/commit/f2a47e80965f96b86fa42038bf2711b922eee302))


### Features

* **credential-provider-node:** use credential_process from profile ([#1773](https://github.com/aws/aws-sdk-js-v3/issues/1773)) ([842e2a0](https://github.com/aws/aws-sdk-js-v3/commit/842e2a019c154c43b04803157c6a5900e296cf78)), closes [#1772](https://github.com/aws/aws-sdk-js-v3/issues/1772)
* standardize user agent value ([#1775](https://github.com/aws/aws-sdk-js-v3/issues/1775)) ([388b180](https://github.com/aws/aws-sdk-js-v3/commit/388b18071146171b42d283a93f9590cb23956e1a))
* **cucumber:** use waiters in integration tests ([#1792](https://github.com/aws/aws-sdk-js-v3/issues/1792)) ([e151aee](https://github.com/aws/aws-sdk-js-v3/commit/e151aee1b8e122a9ca4ebe5b56118b06c5b338c0))
* **middleware-logger:** log clientName, commandName, input, output ([#1788](https://github.com/aws/aws-sdk-js-v3/issues/1788)) ([4f9e56f](https://github.com/aws/aws-sdk-js-v3/commit/4f9e56f1b7fd1cd9374b2577786e4ab0f6602aaa))





# [3.0.0](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.10...v3.0.0) (2020-12-15)


### Features

* bump version to 3.0.0 ([#1793](https://github.com/aws/aws-sdk-js-v3/issues/1793)) ([d8475f8](https://github.com/aws/aws-sdk-js-v3/commit/d8475f8d972d28fbc15cd7e23abfe18f9eab0644))





# [1.0.0-rc.10](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.9...v1.0.0-rc.10) (2020-12-15)


### Bug Fixes

* remove some s3 waiters ([#1791](https://github.com/aws/aws-sdk-js-v3/issues/1791)) ([6f73e9b](https://github.com/aws/aws-sdk-js-v3/commit/6f73e9b2004ab051dbbec2c2521027e9d89f551b))


### Features

* **clients:** waiter code generation ([#1784](https://github.com/aws/aws-sdk-js-v3/issues/1784)) ([c78d705](https://github.com/aws/aws-sdk-js-v3/commit/c78d705e0a4d1d95fe74483f8da58ad23708f0c6))
* **util-waiter:** add createWaiter() ([#1759](https://github.com/aws/aws-sdk-js-v3/issues/1759)) ([3d6eb2d](https://github.com/aws/aws-sdk-js-v3/commit/3d6eb2d5a371d0db987b4031ab3d457fc92ccbea))
* update clients as of 12/12/2020 ([#1771](https://github.com/aws/aws-sdk-js-v3/issues/1771)) ([f69ff44](https://github.com/aws/aws-sdk-js-v3/commit/f69ff440a79018ad69fcb26ad46e3db65b23ce71))
* update clients as of 12/12/2020 with model fixes ([#1774](https://github.com/aws/aws-sdk-js-v3/issues/1774)) ([54e8715](https://github.com/aws/aws-sdk-js-v3/commit/54e87151877dd5cf9a5f256698c088cc7a856225))





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
