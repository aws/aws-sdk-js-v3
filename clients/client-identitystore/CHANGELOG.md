# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.10.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.9.0...v3.10.0) (2021-03-26)


### Bug Fixes

* **clients:** generate jest.config.js ([#2172](https://github.com/aws/aws-sdk-js-v3/issues/2172)) ([95b0e19](https://github.com/aws/aws-sdk-js-v3/commit/95b0e191eddf71033b9bd6a2d76d20fedea71b5f))


### Features

* use ts-jest for running jest tests ([#2088](https://github.com/aws/aws-sdk-js-v3/issues/2088)) ([456002c](https://github.com/aws/aws-sdk-js-v3/commit/456002cf7fa16864b72c3c279b094886a42abddb))





# [3.9.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.8.1...v3.9.0) (2021-03-18)

**Note:** Version bump only for package @aws-sdk/client-identitystore





## [3.8.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.8.0...v3.8.1) (2021-03-11)

**Note:** Version bump only for package @aws-sdk/client-identitystore





# [3.8.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.7.0...v3.8.0) (2021-03-05)

**Note:** Version bump only for package @aws-sdk/client-identitystore





# [3.7.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.6.1...v3.7.0) (2021-02-25)


### Bug Fixes

* **codegen:** move auth to standalone plugin ([#2076](https://github.com/aws/aws-sdk-js-v3/issues/2076)) ([8d99715](https://github.com/aws/aws-sdk-js-v3/commit/8d997158c15dd4e3b3d9fe91d6d39fd37b9445f5))





## [3.6.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.6.0...v3.6.1) (2021-02-22)


### Bug Fixes

* update references of default branch from master to main ([#2057](https://github.com/aws/aws-sdk-js-v3/issues/2057)) ([59b8b58](https://github.com/aws/aws-sdk-js-v3/commit/59b8b58c3a8c057b36abfaa59bae3a6ffb068cf1))





# [3.6.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.5.0...v3.6.0) (2021-02-20)


### Bug Fixes

* revert publish v3.5.1-0 ([#2058](https://github.com/aws/aws-sdk-js-v3/issues/2058)) ([af25697](https://github.com/aws/aws-sdk-js-v3/commit/af25697aee9363a66c0d69b83f7df2e445c4b721))





# [3.5.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.4.1...v3.5.0) (2021-02-12)

**Note:** Version bump only for package @aws-sdk/client-identitystore





## [3.4.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.4.0...v3.4.1) (2021-01-29)


### Bug Fixes

* **clients:** use TS 3.4 compatible types for TS 3.9 ([#1978](https://github.com/aws/aws-sdk-js-v3/issues/1978)) ([8bced5c](https://github.com/aws/aws-sdk-js-v3/commit/8bced5c32b9dbc68f1065054d796cb0b8b87bcc4))





# [3.4.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.3.0...v3.4.0) (2021-01-28)


### Features

* **middleware-stack:** allow adding middleware to override an existing one ([#1964](https://github.com/aws/aws-sdk-js-v3/issues/1964)) ([9c21f14](https://github.com/aws/aws-sdk-js-v3/commit/9c21f14412f2b1f591422f3c67dedbe886db723b)), closes [#1883](https://github.com/aws/aws-sdk-js-v3/issues/1883)
* use downlevel-dts to generate TS 3.4 compatible types ([#1943](https://github.com/aws/aws-sdk-js-v3/issues/1943)) ([63ad215](https://github.com/aws/aws-sdk-js-v3/commit/63ad2151c8bb7be32ea8838a9b0974806ed3906b))





# [3.3.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.2.0...v3.3.0) (2021-01-14)


### Bug Fixes

* **clients:** export explicit dependencies on @aws-sdk/types ([#1902](https://github.com/aws/aws-sdk-js-v3/issues/1902)) ([96f1087](https://github.com/aws/aws-sdk-js-v3/commit/96f1087333ba916593d557051297983912b27caa))
* **clients:** lowercase all header names in serializer ([#1892](https://github.com/aws/aws-sdk-js-v3/issues/1892)) ([1308721](https://github.com/aws/aws-sdk-js-v3/commit/130872194bc94590f599051ee067d862210252f8))
* **url-parser:** merge browser and node url parser, add rn url parser ([#1903](https://github.com/aws/aws-sdk-js-v3/issues/1903)) ([99be092](https://github.com/aws/aws-sdk-js-v3/commit/99be092fded13bb00802549e17dbdb6d760a8679))


### Features

* **clients:** update README with documentation, usage and more ([#1907](https://github.com/aws/aws-sdk-js-v3/issues/1907)) ([03be111](https://github.com/aws/aws-sdk-js-v3/commit/03be111a086360687f20b2ac1d490584fb4fbefe))





# [3.2.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1.0...v3.2.0) (2021-01-09)


### Bug Fixes

* stop adding command mw repeatedly in resolveMiddleware() ([#1883](https://github.com/aws/aws-sdk-js-v3/issues/1883)) ([d4c302b](https://github.com/aws/aws-sdk-js-v3/commit/d4c302b816e1781f8d04bd479cc4e26e0fe4debc))





# [3.1.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.0.0...v3.1.0) (2020-12-23)


### Bug Fixes

* **clients:** default region and credential provider ([#1834](https://github.com/aws/aws-sdk-js-v3/issues/1834)) ([bc79ab5](https://github.com/aws/aws-sdk-js-v3/commit/bc79ab5f17e00bc069b51f2f426dc73c16483eaa))
* log requestId, extendedRequestId, cfId in $metadata ([#1819](https://github.com/aws/aws-sdk-js-v3/issues/1819)) ([f2a47e8](https://github.com/aws/aws-sdk-js-v3/commit/f2a47e80965f96b86fa42038bf2711b922eee302))
* **clients:** populate sdkId in serviceId and default to use arnNamespace as signingName ([#1786](https://github.com/aws/aws-sdk-js-v3/issues/1786)) ([0011af2](https://github.com/aws/aws-sdk-js-v3/commit/0011af27a62d0d201296225e2a70276645b3231a))
* **clients:** update endpoint provider ([#1824](https://github.com/aws/aws-sdk-js-v3/issues/1824)) ([64d2210](https://github.com/aws/aws-sdk-js-v3/commit/64d22105691f286ad9accf1a137d7c1928378ad4))


### Features

* standardize user agent value ([#1775](https://github.com/aws/aws-sdk-js-v3/issues/1775)) ([388b180](https://github.com/aws/aws-sdk-js-v3/commit/388b18071146171b42d283a93f9590cb23956e1a))





# [3.0.0](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.10...v3.0.0) (2020-12-15)


### Features

* bump version to 3.0.0 ([#1793](https://github.com/aws/aws-sdk-js-v3/issues/1793)) ([d8475f8](https://github.com/aws/aws-sdk-js-v3/commit/d8475f8d972d28fbc15cd7e23abfe18f9eab0644))





# [1.0.0-rc.10](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.9...v1.0.0-rc.10) (2020-12-15)


### Features

* update clients as of 12/12/2020 ([#1771](https://github.com/aws/aws-sdk-js-v3/issues/1771)) ([f69ff44](https://github.com/aws/aws-sdk-js-v3/commit/f69ff440a79018ad69fcb26ad46e3db65b23ce71))
* update clients as of 12/12/2020 with model fixes ([#1774](https://github.com/aws/aws-sdk-js-v3/issues/1774)) ([54e8715](https://github.com/aws/aws-sdk-js-v3/commit/54e87151877dd5cf9a5f256698c088cc7a856225))





# [1.0.0-rc.9](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.8...v1.0.0-rc.9) (2020-12-11)


### Features

* add service id config ([#1765](https://github.com/aws/aws-sdk-js-v3/issues/1765)) ([1ba5672](https://github.com/aws/aws-sdk-js-v3/commit/1ba5672ff75bf5401f02f65d20af61c7bee339ff))





# [1.0.0-rc.8](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.7...v1.0.0-rc.8) (2020-12-05)


### Features

* **invalid-dependency:** add invalidAsyncFunction which rejects with an Error ([#1719](https://github.com/aws/aws-sdk-js-v3/issues/1719)) ([c4c046e](https://github.com/aws/aws-sdk-js-v3/commit/c4c046edf0e752560fded20255642e6aed559d2c))





# [1.0.0-rc.7](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.6...v1.0.0-rc.7) (2020-11-20)


### Bug Fixes

* change paginators to export paginateOperationName ([#1692](https://github.com/aws/aws-sdk-js-v3/issues/1692)) ([6d02935](https://github.com/aws/aws-sdk-js-v3/commit/6d029356c03f52469975aecff32baf8cc5f293e8))


### BREAKING CHANGES

* change paginators to export paginateOperationName to be consistent with verb nouns across AWS





# [1.0.0-rc.6](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.5...v1.0.0-rc.6) (2020-11-13)

**Note:** Version bump only for package @aws-sdk/client-identitystore





# [1.0.0-rc.5](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.4...v1.0.0-rc.5) (2020-11-09)


### Bug Fixes

* codegen for paginator send commands ([#1667](https://github.com/aws/aws-sdk-js-v3/issues/1667)) ([13f3347](https://github.com/aws/aws-sdk-js-v3/commit/13f3347723e99b20c7ccd38cdd73d5ac981857a0))
* **package.json:** migrate @aws-sdk/types into devDependencies codegen ([#1658](https://github.com/aws/aws-sdk-js-v3/issues/1658)) ([eb50962](https://github.com/aws/aws-sdk-js-v3/commit/eb509629cd6eeb293bf762c201710acabe049a58))





# [1.0.0-rc.4](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.3...v1.0.0-rc.4) (2020-10-31)


### Features

* log clientName and commandName ([#1637](https://github.com/aws/aws-sdk-js-v3/issues/1637)) ([79f25ca](https://github.com/aws/aws-sdk-js-v3/commit/79f25cacc076483e0134f3626d9971ada5f1206d))





# [1.0.0-rc.3](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.2...v1.0.0-rc.3) (2020-10-27)


### Features

* update client description to add keywords ([#1631](https://github.com/aws/aws-sdk-js-v3/issues/1631)) ([93fc586](https://github.com/aws/aws-sdk-js-v3/commit/93fc5866bf6e5f3b40f8dcfe829172bb80cc8391))





# [1.0.0-rc.2](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.1...v1.0.0-rc.2) (2020-10-22)

**Note:** Version bump only for package @aws-sdk/client-identitystore
