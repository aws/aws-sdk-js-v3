# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.10.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.9.0...v3.10.0) (2021-03-26)


### Features

* use ts-jest for running jest tests ([#2088](https://github.com/aws/aws-sdk-js-v3/issues/2088)) ([456002c](https://github.com/aws/aws-sdk-js-v3/commit/456002cf7fa16864b72c3c279b094886a42abddb))





## [3.6.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.6.0...v3.6.1) (2021-02-22)


### Bug Fixes

* update references of default branch from master to main ([#2057](https://github.com/aws/aws-sdk-js-v3/issues/2057)) ([59b8b58](https://github.com/aws/aws-sdk-js-v3/commit/59b8b58c3a8c057b36abfaa59bae3a6ffb068cf1))





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





# [3.2.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.1.0...v3.2.0) (2021-01-09)


### Bug Fixes

* **readme:** remove duplicate [@aws-sdk](https://github.com/aws-sdk) ([#1873](https://github.com/aws/aws-sdk-js-v3/issues/1873)) ([85ae915](https://github.com/aws/aws-sdk-js-v3/commit/85ae915d5e284bd44d15d2be0caf340882777def))
* **readme:** use latest in npm version tag ([#1872](https://github.com/aws/aws-sdk-js-v3/issues/1872)) ([b8542d8](https://github.com/aws/aws-sdk-js-v3/commit/b8542d8aa845d1111e3f8a8e2c79393802d8d013))





# [3.1.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.0.0...v3.1.0) (2020-12-23)


### Features

* **middleware-logger:** log clientName, commandName, input, output ([#1788](https://github.com/aws/aws-sdk-js-v3/issues/1788)) ([4f9e56f](https://github.com/aws/aws-sdk-js-v3/commit/4f9e56f1b7fd1cd9374b2577786e4ab0f6602aaa))





# [3.0.0](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.10...v3.0.0) (2020-12-15)


### Features

* bump version to 3.0.0 ([#1793](https://github.com/aws/aws-sdk-js-v3/issues/1793)) ([d8475f8](https://github.com/aws/aws-sdk-js-v3/commit/d8475f8d972d28fbc15cd7e23abfe18f9eab0644))





# [1.0.0-rc.10](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.9...v1.0.0-rc.10) (2020-12-15)

**Note:** Version bump only for package @aws-sdk/middleware-serde





# [1.0.0-rc.8](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.7...v1.0.0-rc.8) (2020-12-05)

**Note:** Version bump only for package @aws-sdk/middleware-serde





# [1.0.0-rc.7](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.6...v1.0.0-rc.7) (2020-11-20)

**Note:** Version bump only for package @aws-sdk/middleware-serde





# [1.0.0-rc.6](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.5...v1.0.0-rc.6) (2020-11-13)


### Bug Fixes

* **logger:** disable logging of raw HTTP request/response ([#1682](https://github.com/aws/aws-sdk-js-v3/issues/1682)) ([2f1975d](https://github.com/aws/aws-sdk-js-v3/commit/2f1975d8ec9a8134ceb03be8ca204b99856bd241))





# [1.0.0-rc.5](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.4...v1.0.0-rc.5) (2020-11-09)


### Bug Fixes

* migrate dev types for packages and lib into package.json devDeps ([#1654](https://github.com/aws/aws-sdk-js-v3/issues/1654)) ([16d7030](https://github.com/aws/aws-sdk-js-v3/commit/16d7030a5976d6671c7346c7fb945fefb547ae0d))





# [1.0.0-rc.3](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.2...v1.0.0-rc.3) (2020-10-27)

**Note:** Version bump only for package @aws-sdk/middleware-serde





# [1.0.0-rc.2](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.1...v1.0.0-rc.2) (2020-10-22)

**Note:** Version bump only for package @aws-sdk/middleware-serde





# [1.0.0-rc.1](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-gamma.11...v1.0.0-rc.1) (2020-10-19)


### Features

* ready for release candidate ([#1578](https://github.com/aws/aws-sdk-js-v3/issues/1578)) ([519f66c](https://github.com/aws/aws-sdk-js-v3/commit/519f66c6388b91d0bd750a511e6d1af56196835e))





# [1.0.0-gamma.8](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/middleware-serde@1.0.0-gamma.7...@aws-sdk/middleware-serde@1.0.0-gamma.8) (2020-10-07)

**Note:** Version bump only for package @aws-sdk/middleware-serde





# [1.0.0-gamma.7](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/middleware-serde@1.0.0-gamma.6...@aws-sdk/middleware-serde@1.0.0-gamma.7) (2020-09-15)


### Bug Fixes

* move logging of input/output and req/res to serde ([#1526](https://github.com/aws/aws-sdk-js-v3/issues/1526)) ([b6675b6](https://github.com/aws/aws-sdk-js-v3/commit/b6675b60feca715d3b0379bc1aff1945ee9d74c0))





# [1.0.0-gamma.6](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/middleware-serde@1.0.0-gamma.5...@aws-sdk/middleware-serde@1.0.0-gamma.6) (2020-09-01)

**Note:** Version bump only for package @aws-sdk/middleware-serde





# [1.0.0-gamma.5](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/middleware-serde@1.0.0-gamma.4...@aws-sdk/middleware-serde@1.0.0-gamma.5) (2020-08-25)

**Note:** Version bump only for package @aws-sdk/middleware-serde





# [1.0.0-gamma.4](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/middleware-serde@1.0.0-gamma.3...@aws-sdk/middleware-serde@1.0.0-gamma.4) (2020-08-04)


### Features

* build command ([#1407](https://github.com/aws/aws-sdk-js-v3/issues/1407)) ([81b2e87](https://github.com/aws/aws-sdk-js-v3/commit/81b2e87067642a8cea8649cbdb2c342ca9fb6ac6))





# [1.0.0-gamma.3](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/middleware-serde@1.0.0-gamma.2...@aws-sdk/middleware-serde@1.0.0-gamma.3) (2020-07-13)


### Features

* add code linting and prettify ([#1350](https://github.com/aws/aws-sdk-js-v3/issues/1350)) ([47770fa](https://github.com/aws/aws-sdk-js-v3/commit/47770fa493c3405f193069cd18319882529ff484))





# 1.0.0-gamma.2 (2020-07-08)


### Bug Fixes

* **middleware-serde:** targeting es5 in middleware-serde ([#1245](https://github.com/aws/aws-sdk-js-v3/issues/1245)) ([6243aac](https://github.com/aws/aws-sdk-js-v3/commit/6243aac941a39e8235401698dd4ddbc2f274eb88))


### Features

* use a common tsconfig for the monorepo ([#1297](https://github.com/aws/aws-sdk-js-v3/issues/1297)) ([16aea66](https://github.com/aws/aws-sdk-js-v3/commit/16aea66d1fc5386680d3e6da9b7dcde78e178bd3))



# 1.0.0-gamma.1 (2020-05-21)


### Features

* bump up to gamma version ([#1192](https://github.com/aws/aws-sdk-js-v3/issues/1192)) ([a609075](https://github.com/aws/aws-sdk-js-v3/commit/a6090754f2a6c21e5b70bf0c8782cc0fbe59ee12))



# 1.0.0-beta.4 (2020-04-25)


### Bug Fixes

* move endpoint resolution to the serializers ([#1106](https://github.com/aws/aws-sdk-js-v3/issues/1106)) ([08c9420](https://github.com/aws/aws-sdk-js-v3/commit/08c9420db1ba9c3faf3ed26aa1244646bacff1d1))



# 1.0.0-beta.2 (2020-03-28)



# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update updated types ([#474](https://github.com/aws/aws-sdk-js-v3/issues/474)) ([9efac3e](https://github.com/aws/aws-sdk-js-v3/commit/9efac3e1eb2370fb11b10b3d005369ec1a307e3a))


### Features

* add pluggable runtime specific config ([#404](https://github.com/aws/aws-sdk-js-v3/issues/404)) ([8be08fc](https://github.com/aws/aws-sdk-js-v3/commit/8be08fcc49251dc03c5d79a70eed0aefe2786731))
* combine serde package ([#396](https://github.com/aws/aws-sdk-js-v3/issues/396)) ([4009549](https://github.com/aws/aws-sdk-js-v3/commit/4009549003ccd51b54f5df856ac724c86e2e8e69))
* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad579698f5679a0cb120daad38d539e2944abed))
* remove protocol rest json class ([#438](https://github.com/aws/aws-sdk-js-v3/issues/438)) ([7ec275a](https://github.com/aws/aws-sdk-js-v3/commit/7ec275a7fa8e13b94dabb59647b78f263872c240))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5a61dcb4a4c5ef5e544c1964545d30e046))
* update runtime plugin interface ([#400](https://github.com/aws/aws-sdk-js-v3/issues/400)) ([d75c620](https://github.com/aws/aws-sdk-js-v3/commit/d75c6203ea427057281826071a704647bb815900))





# 1.0.0-gamma.1 (2020-05-21)


### Features

* bump up to gamma version ([#1192](https://github.com/aws/aws-sdk-js-v3/issues/1192)) ([a609075](https://github.com/aws/aws-sdk-js-v3/commit/a6090754f2a6c21e5b70bf0c8782cc0fbe59ee12))



# 1.0.0-beta.4 (2020-04-25)


### Bug Fixes

* move endpoint resolution to the serializers ([#1106](https://github.com/aws/aws-sdk-js-v3/issues/1106)) ([08c9420](https://github.com/aws/aws-sdk-js-v3/commit/08c9420db1ba9c3faf3ed26aa1244646bacff1d1))



# 1.0.0-beta.2 (2020-03-28)



# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update updated types ([#474](https://github.com/aws/aws-sdk-js-v3/issues/474)) ([9efac3e](https://github.com/aws/aws-sdk-js-v3/commit/9efac3e1eb2370fb11b10b3d005369ec1a307e3a))


### Features

* add pluggable runtime specific config ([#404](https://github.com/aws/aws-sdk-js-v3/issues/404)) ([8be08fc](https://github.com/aws/aws-sdk-js-v3/commit/8be08fcc49251dc03c5d79a70eed0aefe2786731))
* combine serde package ([#396](https://github.com/aws/aws-sdk-js-v3/issues/396)) ([4009549](https://github.com/aws/aws-sdk-js-v3/commit/4009549003ccd51b54f5df856ac724c86e2e8e69))
* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad579698f5679a0cb120daad38d539e2944abed))
* remove protocol rest json class ([#438](https://github.com/aws/aws-sdk-js-v3/issues/438)) ([7ec275a](https://github.com/aws/aws-sdk-js-v3/commit/7ec275a7fa8e13b94dabb59647b78f263872c240))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5a61dcb4a4c5ef5e544c1964545d30e046))
* update runtime plugin interface ([#400](https://github.com/aws/aws-sdk-js-v3/issues/400)) ([d75c620](https://github.com/aws/aws-sdk-js-v3/commit/d75c6203ea427057281826071a704647bb815900))





# 1.0.0-beta.4 (2020-04-27)


### Features

* use exact @aws-sdk/* dependencies ([#1110](https://github.com/aws/aws-sdk-js-v3/issues/1110)) ([bcfd7a2](https://github.com/aws/aws-sdk-js-v3/commit/bcfd7a2faeca3a2605057fd4736d710aa4902b62))



# 1.0.0-beta.2 (2020-03-28)



# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update updated types ([#474](https://github.com/aws/aws-sdk-js-v3/issues/474)) ([9efac3e](https://github.com/aws/aws-sdk-js-v3/commit/9efac3e1eb2370fb11b10b3d005369ec1a307e3a))


### Features

* add pluggable runtime specific config ([#404](https://github.com/aws/aws-sdk-js-v3/issues/404)) ([8be08fc](https://github.com/aws/aws-sdk-js-v3/commit/8be08fcc49251dc03c5d79a70eed0aefe2786731))
* combine serde package ([#396](https://github.com/aws/aws-sdk-js-v3/issues/396)) ([4009549](https://github.com/aws/aws-sdk-js-v3/commit/4009549003ccd51b54f5df856ac724c86e2e8e69))
* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad579698f5679a0cb120daad38d539e2944abed))
* remove protocol rest json class ([#438](https://github.com/aws/aws-sdk-js-v3/issues/438)) ([7ec275a](https://github.com/aws/aws-sdk-js-v3/commit/7ec275a7fa8e13b94dabb59647b78f263872c240))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5a61dcb4a4c5ef5e544c1964545d30e046))
* update runtime plugin interface ([#400](https://github.com/aws/aws-sdk-js-v3/issues/400)) ([d75c620](https://github.com/aws/aws-sdk-js-v3/commit/d75c6203ea427057281826071a704647bb815900))





# 1.0.0-beta.3 (2020-04-25)


### Bug Fixes

* move endpoint resolution to the serializers ([#1106](https://github.com/aws/aws-sdk-js-v3/issues/1106)) ([08c9420](https://github.com/aws/aws-sdk-js-v3/commit/08c9420db1ba9c3faf3ed26aa1244646bacff1d1))



# 1.0.0-beta.2 (2020-03-28)



# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update updated types ([#474](https://github.com/aws/aws-sdk-js-v3/issues/474)) ([9efac3e](https://github.com/aws/aws-sdk-js-v3/commit/9efac3e1eb2370fb11b10b3d005369ec1a307e3a))


### Features

* add pluggable runtime specific config ([#404](https://github.com/aws/aws-sdk-js-v3/issues/404)) ([8be08fc](https://github.com/aws/aws-sdk-js-v3/commit/8be08fcc49251dc03c5d79a70eed0aefe2786731))
* combine serde package ([#396](https://github.com/aws/aws-sdk-js-v3/issues/396)) ([4009549](https://github.com/aws/aws-sdk-js-v3/commit/4009549003ccd51b54f5df856ac724c86e2e8e69))
* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad579698f5679a0cb120daad38d539e2944abed))
* remove protocol rest json class ([#438](https://github.com/aws/aws-sdk-js-v3/issues/438)) ([7ec275a](https://github.com/aws/aws-sdk-js-v3/commit/7ec275a7fa8e13b94dabb59647b78f263872c240))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5a61dcb4a4c5ef5e544c1964545d30e046))
* update runtime plugin interface ([#400](https://github.com/aws/aws-sdk-js-v3/issues/400)) ([d75c620](https://github.com/aws/aws-sdk-js-v3/commit/d75c6203ea427057281826071a704647bb815900))





# 1.0.0-beta.2 (2020-03-28)



# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update updated types ([#474](https://github.com/aws/aws-sdk-js-v3/issues/474)) ([9efac3e](https://github.com/aws/aws-sdk-js-v3/commit/9efac3e1eb2370fb11b10b3d005369ec1a307e3a))


### Features

* add pluggable runtime specific config ([#404](https://github.com/aws/aws-sdk-js-v3/issues/404)) ([8be08fc](https://github.com/aws/aws-sdk-js-v3/commit/8be08fcc49251dc03c5d79a70eed0aefe2786731))
* combine serde package ([#396](https://github.com/aws/aws-sdk-js-v3/issues/396)) ([4009549](https://github.com/aws/aws-sdk-js-v3/commit/4009549003ccd51b54f5df856ac724c86e2e8e69))
* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad579698f5679a0cb120daad38d539e2944abed))
* remove protocol rest json class ([#438](https://github.com/aws/aws-sdk-js-v3/issues/438)) ([7ec275a](https://github.com/aws/aws-sdk-js-v3/commit/7ec275a7fa8e13b94dabb59647b78f263872c240))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5a61dcb4a4c5ef5e544c1964545d30e046))
* update runtime plugin interface ([#400](https://github.com/aws/aws-sdk-js-v3/issues/400)) ([d75c620](https://github.com/aws/aws-sdk-js-v3/commit/d75c6203ea427057281826071a704647bb815900))





# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update updated types ([#474](https://github.com/aws/aws-sdk-js-v3/issues/474)) ([9efac3e](https://github.com/aws/aws-sdk-js-v3/commit/9efac3e1eb2370fb11b10b3d005369ec1a307e3a))


### Features

* add pluggable runtime specific config ([#404](https://github.com/aws/aws-sdk-js-v3/issues/404)) ([8be08fc](https://github.com/aws/aws-sdk-js-v3/commit/8be08fcc49251dc03c5d79a70eed0aefe2786731))
* combine serde package ([#396](https://github.com/aws/aws-sdk-js-v3/issues/396)) ([4009549](https://github.com/aws/aws-sdk-js-v3/commit/4009549003ccd51b54f5df856ac724c86e2e8e69))
* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad579698f5679a0cb120daad38d539e2944abed))
* remove protocol rest json class ([#438](https://github.com/aws/aws-sdk-js-v3/issues/438)) ([7ec275a](https://github.com/aws/aws-sdk-js-v3/commit/7ec275a7fa8e13b94dabb59647b78f263872c240))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5a61dcb4a4c5ef5e544c1964545d30e046))
* update runtime plugin interface ([#400](https://github.com/aws/aws-sdk-js-v3/issues/400)) ([d75c620](https://github.com/aws/aws-sdk-js-v3/commit/d75c6203ea427057281826071a704647bb815900))





# 1.0.0-alpha.6 (2020-03-20)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update updated types ([#474](https://github.com/aws/aws-sdk-js-v3/issues/474)) ([9efac3e](https://github.com/aws/aws-sdk-js-v3/commit/9efac3e1eb2370fb11b10b3d005369ec1a307e3a))


### Features

* add pluggable runtime specific config ([#404](https://github.com/aws/aws-sdk-js-v3/issues/404)) ([8be08fc](https://github.com/aws/aws-sdk-js-v3/commit/8be08fcc49251dc03c5d79a70eed0aefe2786731))
* combine serde package ([#396](https://github.com/aws/aws-sdk-js-v3/issues/396)) ([4009549](https://github.com/aws/aws-sdk-js-v3/commit/4009549003ccd51b54f5df856ac724c86e2e8e69))
* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad579698f5679a0cb120daad38d539e2944abed))
* remove protocol rest json class ([#438](https://github.com/aws/aws-sdk-js-v3/issues/438)) ([7ec275a](https://github.com/aws/aws-sdk-js-v3/commit/7ec275a7fa8e13b94dabb59647b78f263872c240))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5a61dcb4a4c5ef5e544c1964545d30e046))
* update runtime plugin interface ([#400](https://github.com/aws/aws-sdk-js-v3/issues/400)) ([d75c620](https://github.com/aws/aws-sdk-js-v3/commit/d75c6203ea427057281826071a704647bb815900))





# 1.0.0-alpha.5 (2020-02-19)



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update updated types ([#474](https://github.com/aws/aws-sdk-js-v3/issues/474)) ([9efac3e](https://github.com/aws/aws-sdk-js-v3/commit/9efac3e))


### Features

* add pluggable runtime specific config ([#404](https://github.com/aws/aws-sdk-js-v3/issues/404)) ([8be08fc](https://github.com/aws/aws-sdk-js-v3/commit/8be08fc))
* combine serde package ([#396](https://github.com/aws/aws-sdk-js-v3/issues/396)) ([4009549](https://github.com/aws/aws-sdk-js-v3/commit/4009549))
* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad5796))
* remove protocol rest json class ([#438](https://github.com/aws/aws-sdk-js-v3/issues/438)) ([7ec275a](https://github.com/aws/aws-sdk-js-v3/commit/7ec275a))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5))
* update runtime plugin interface ([#400](https://github.com/aws/aws-sdk-js-v3/issues/400)) ([d75c620](https://github.com/aws/aws-sdk-js-v3/commit/d75c620))





# 1.0.0-alpha.4 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update updated types ([#474](https://github.com/aws/aws-sdk-js-v3/issues/474)) ([9efac3e](https://github.com/aws/aws-sdk-js-v3/commit/9efac3e))


### Features

* add pluggable runtime specific config ([#404](https://github.com/aws/aws-sdk-js-v3/issues/404)) ([8be08fc](https://github.com/aws/aws-sdk-js-v3/commit/8be08fc))
* combine serde package ([#396](https://github.com/aws/aws-sdk-js-v3/issues/396)) ([4009549](https://github.com/aws/aws-sdk-js-v3/commit/4009549))
* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad5796))
* remove protocol rest json class ([#438](https://github.com/aws/aws-sdk-js-v3/issues/438)) ([7ec275a](https://github.com/aws/aws-sdk-js-v3/commit/7ec275a))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5))
* update runtime plugin interface ([#400](https://github.com/aws/aws-sdk-js-v3/issues/400)) ([d75c620](https://github.com/aws/aws-sdk-js-v3/commit/d75c620))





# 1.0.0-alpha.3 (2020-01-22)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update updated types ([#474](https://github.com/aws/aws-sdk-js-v3/issues/474)) ([9efac3e](https://github.com/aws/aws-sdk-js-v3/commit/9efac3e))


### Features

* add pluggable runtime specific config ([#404](https://github.com/aws/aws-sdk-js-v3/issues/404)) ([8be08fc](https://github.com/aws/aws-sdk-js-v3/commit/8be08fc))
* combine serde package ([#396](https://github.com/aws/aws-sdk-js-v3/issues/396)) ([4009549](https://github.com/aws/aws-sdk-js-v3/commit/4009549))
* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad5796))
* remove protocol rest json class ([#438](https://github.com/aws/aws-sdk-js-v3/issues/438)) ([7ec275a](https://github.com/aws/aws-sdk-js-v3/commit/7ec275a))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5))
* update runtime plugin interface ([#400](https://github.com/aws/aws-sdk-js-v3/issues/400)) ([d75c620](https://github.com/aws/aws-sdk-js-v3/commit/d75c620))





# 1.0.0-alpha.2 (2020-01-09)


### Bug Fixes

* update updated types ([#474](https://github.com/aws/aws-sdk-js-v3/issues/474)) ([9efac3e](https://github.com/aws/aws-sdk-js-v3/commit/9efac3e))


### Features

* add pluggable runtime specific config ([#404](https://github.com/aws/aws-sdk-js-v3/issues/404)) ([8be08fc](https://github.com/aws/aws-sdk-js-v3/commit/8be08fc))
* combine serde package ([#396](https://github.com/aws/aws-sdk-js-v3/issues/396)) ([4009549](https://github.com/aws/aws-sdk-js-v3/commit/4009549))
* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad5796))
* remove protocol rest json class ([#438](https://github.com/aws/aws-sdk-js-v3/issues/438)) ([7ec275a](https://github.com/aws/aws-sdk-js-v3/commit/7ec275a))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5))
* update runtime plugin interface ([#400](https://github.com/aws/aws-sdk-js-v3/issues/400)) ([d75c620](https://github.com/aws/aws-sdk-js-v3/commit/d75c620))





# 1.0.0-alpha.1 (2020-01-08)


### Bug Fixes

* update updated types ([#474](https://github.com/aws/aws-sdk-js-v3/issues/474)) ([9efac3e](https://github.com/aws/aws-sdk-js-v3/commit/9efac3e))


### Features

* add pluggable runtime specific config ([#404](https://github.com/aws/aws-sdk-js-v3/issues/404)) ([8be08fc](https://github.com/aws/aws-sdk-js-v3/commit/8be08fc))
* combine serde package ([#396](https://github.com/aws/aws-sdk-js-v3/issues/396)) ([4009549](https://github.com/aws/aws-sdk-js-v3/commit/4009549))
* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad5796))
* remove protocol rest json class ([#438](https://github.com/aws/aws-sdk-js-v3/issues/438)) ([7ec275a](https://github.com/aws/aws-sdk-js-v3/commit/7ec275a))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5))
* update runtime plugin interface ([#400](https://github.com/aws/aws-sdk-js-v3/issues/400)) ([d75c620](https://github.com/aws/aws-sdk-js-v3/commit/d75c620))
