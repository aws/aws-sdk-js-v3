# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.4](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.3...v1.0.0-rc.4) (2020-10-31)

**Note:** Version bump only for package @aws-sdk/middleware-retry





# [1.0.0-rc.3](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.2...v1.0.0-rc.3) (2020-10-27)

**Note:** Version bump only for package @aws-sdk/middleware-retry





# [1.0.0-rc.2](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.1...v1.0.0-rc.2) (2020-10-22)

**Note:** Version bump only for package @aws-sdk/middleware-retry





# [1.0.0-rc.1](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-gamma.11...v1.0.0-rc.1) (2020-10-19)


### Features

* ready for release candidate ([#1578](https://github.com/aws/aws-sdk-js-v3/issues/1578)) ([519f66c](https://github.com/aws/aws-sdk-js-v3/commit/519f66c6388b91d0bd750a511e6d1af56196835e))





# [1.0.0-gamma.9](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/middleware-retry@1.0.0-gamma.8...@aws-sdk/middleware-retry@1.0.0-gamma.9) (2020-10-07)

**Note:** Version bump only for package @aws-sdk/middleware-retry





# [1.0.0-gamma.8](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/middleware-retry@1.0.0-gamma.7...@aws-sdk/middleware-retry@1.0.0-gamma.8) (2020-09-15)

**Note:** Version bump only for package @aws-sdk/middleware-retry





# [1.0.0-gamma.7](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/middleware-retry@1.0.0-gamma.6...@aws-sdk/middleware-retry@1.0.0-gamma.7) (2020-09-01)

**Note:** Version bump only for package @aws-sdk/middleware-retry





# [1.0.0-gamma.6](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/middleware-retry@1.0.0-gamma.5...@aws-sdk/middleware-retry@1.0.0-gamma.6) (2020-08-25)


### Features

* refactor nodejs retry config loader ([#1438](https://github.com/aws/aws-sdk-js-v3/issues/1438)) ([5478012](https://github.com/aws/aws-sdk-js-v3/commit/5478012147b475bdce07a2cbe393a972e502c93f))





# [1.0.0-gamma.5](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/middleware-retry@1.0.0-gamma.4...@aws-sdk/middleware-retry@1.0.0-gamma.5) (2020-08-04)


### Features

* build command ([#1407](https://github.com/aws/aws-sdk-js-v3/issues/1407)) ([81b2e87](https://github.com/aws/aws-sdk-js-v3/commit/81b2e87067642a8cea8649cbdb2c342ca9fb6ac6))





# [1.0.0-gamma.4](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/middleware-retry@1.0.0-gamma.3...@aws-sdk/middleware-retry@1.0.0-gamma.4) (2020-07-21)

**Note:** Version bump only for package @aws-sdk/middleware-retry





# [1.0.0-gamma.3](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/middleware-retry@1.0.0-gamma.2...@aws-sdk/middleware-retry@1.0.0-gamma.3) (2020-07-13)


### Bug Fixes

* move retry defaults to middleware-retry ([#1363](https://github.com/aws/aws-sdk-js-v3/issues/1363)) ([cd6cba0](https://github.com/aws/aws-sdk-js-v3/commit/cd6cba08a00e11f4840a080c2318a4af84cfc114))


### Features

* add code linting and prettify ([#1350](https://github.com/aws/aws-sdk-js-v3/issues/1350)) ([47770fa](https://github.com/aws/aws-sdk-js-v3/commit/47770fa493c3405f193069cd18319882529ff484))





# 1.0.0-gamma.2 (2020-07-08)


### Bug Fixes

* use fromStatic to return default config values ([#1341](https://github.com/aws/aws-sdk-js-v3/issues/1341)) ([4386064](https://github.com/aws/aws-sdk-js-v3/commit/438606447d69b60a417dbe9c2aea110cd8277e41))


### Features

* add check for isTransientError ([#1222](https://github.com/aws/aws-sdk-js-v3/issues/1222)) ([f71c136](https://github.com/aws/aws-sdk-js-v3/commit/f71c13673044eaa547db3f411a72ce6d0c00e495))
* add retry informational headers ([#1266](https://github.com/aws/aws-sdk-js-v3/issues/1266)) ([d055da7](https://github.com/aws/aws-sdk-js-v3/commit/d055da730bfc92b15b57a5141497ec6ff0e7a0b6))
* add retry quotas to StandardRetryStrategy ([#1258](https://github.com/aws/aws-sdk-js-v3/issues/1258)) ([33364cb](https://github.com/aws/aws-sdk-js-v3/commit/33364cbef97772c6baf8e5b90c2d146284b85f17))
* read maxAttempts value from retry-config ([#1286](https://github.com/aws/aws-sdk-js-v3/issues/1286)) ([8f3fdc0](https://github.com/aws/aws-sdk-js-v3/commit/8f3fdc0536ad2cb11a9f0ba0fc75c0554c3f1fb0))
* retry if retryable trait is set ([#1238](https://github.com/aws/aws-sdk-js-v3/issues/1238)) ([9d224e7](https://github.com/aws/aws-sdk-js-v3/commit/9d224e7d289b56c40b7c26f404c959aab5ea8e87))
* use a common tsconfig for the monorepo ([#1297](https://github.com/aws/aws-sdk-js-v3/issues/1297)) ([16aea66](https://github.com/aws/aws-sdk-js-v3/commit/16aea66d1fc5386680d3e6da9b7dcde78e178bd3))



# 1.0.0-gamma.1 (2020-05-21)


### Features

* bump up to gamma version ([#1192](https://github.com/aws/aws-sdk-js-v3/issues/1192)) ([a609075](https://github.com/aws/aws-sdk-js-v3/commit/a6090754f2a6c21e5b70bf0c8782cc0fbe59ee12))



# 1.0.0-beta.4 (2020-04-25)



# 1.0.0-beta.2 (2020-03-28)



# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.1 (2020-01-10)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update input and resolved naming ([#444](https://github.com/aws/aws-sdk-js-v3/issues/444)) ([4235b6c](https://github.com/aws/aws-sdk-js-v3/commit/4235b6c64099c9c36481e5649e1be982490e028c))


### Features

* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad579698f5679a0cb120daad38d539e2944abed))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5a61dcb4a4c5ef5e544c1964545d30e046))





# 1.0.0-gamma.1 (2020-05-21)


### Features

* bump up to gamma version ([#1192](https://github.com/aws/aws-sdk-js-v3/issues/1192)) ([a609075](https://github.com/aws/aws-sdk-js-v3/commit/a6090754f2a6c21e5b70bf0c8782cc0fbe59ee12))



# 1.0.0-beta.4 (2020-04-25)



# 1.0.0-beta.2 (2020-03-28)



# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.1 (2020-01-10)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update input and resolved naming ([#444](https://github.com/aws/aws-sdk-js-v3/issues/444)) ([4235b6c](https://github.com/aws/aws-sdk-js-v3/commit/4235b6c64099c9c36481e5649e1be982490e028c))


### Features

* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad579698f5679a0cb120daad38d539e2944abed))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5a61dcb4a4c5ef5e544c1964545d30e046))





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



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.1 (2020-01-10)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update input and resolved naming ([#444](https://github.com/aws/aws-sdk-js-v3/issues/444)) ([4235b6c](https://github.com/aws/aws-sdk-js-v3/commit/4235b6c64099c9c36481e5649e1be982490e028c))


### Features

* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad579698f5679a0cb120daad38d539e2944abed))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5a61dcb4a4c5ef5e544c1964545d30e046))





# 1.0.0-beta.3 (2020-04-25)



# 1.0.0-beta.2 (2020-03-28)



# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.1 (2020-01-10)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update input and resolved naming ([#444](https://github.com/aws/aws-sdk-js-v3/issues/444)) ([4235b6c](https://github.com/aws/aws-sdk-js-v3/commit/4235b6c64099c9c36481e5649e1be982490e028c))


### Features

* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad579698f5679a0cb120daad38d539e2944abed))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5a61dcb4a4c5ef5e544c1964545d30e046))





# 1.0.0-beta.2 (2020-03-28)



# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.1 (2020-01-10)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update input and resolved naming ([#444](https://github.com/aws/aws-sdk-js-v3/issues/444)) ([4235b6c](https://github.com/aws/aws-sdk-js-v3/commit/4235b6c64099c9c36481e5649e1be982490e028c))


### Features

* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad579698f5679a0cb120daad38d539e2944abed))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5a61dcb4a4c5ef5e544c1964545d30e046))





# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.1 (2020-01-10)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update input and resolved naming ([#444](https://github.com/aws/aws-sdk-js-v3/issues/444)) ([4235b6c](https://github.com/aws/aws-sdk-js-v3/commit/4235b6c64099c9c36481e5649e1be982490e028c))


### Features

* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad579698f5679a0cb120daad38d539e2944abed))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5a61dcb4a4c5ef5e544c1964545d30e046))





# 1.0.0-alpha.8 (2020-03-20)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.1 (2020-01-10)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update input and resolved naming ([#444](https://github.com/aws/aws-sdk-js-v3/issues/444)) ([4235b6c](https://github.com/aws/aws-sdk-js-v3/commit/4235b6c64099c9c36481e5649e1be982490e028c))


### Features

* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad579698f5679a0cb120daad38d539e2944abed))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5a61dcb4a4c5ef5e544c1964545d30e046))





# 1.0.0-alpha.7 (2020-02-19)



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.1 (2020-01-10)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update input and resolved naming ([#444](https://github.com/aws/aws-sdk-js-v3/issues/444)) ([4235b6c](https://github.com/aws/aws-sdk-js-v3/commit/4235b6c))


### Features

* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad5796))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5))





# 1.0.0-alpha.6 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.1 (2020-01-10)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update input and resolved naming ([#444](https://github.com/aws/aws-sdk-js-v3/issues/444)) ([4235b6c](https://github.com/aws/aws-sdk-js-v3/commit/4235b6c))


### Features

* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad5796))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5))





# 1.0.0-alpha.5 (2020-01-22)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.1 (2020-01-10)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update input and resolved naming ([#444](https://github.com/aws/aws-sdk-js-v3/issues/444)) ([4235b6c](https://github.com/aws/aws-sdk-js-v3/commit/4235b6c))


### Features

* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad5796))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5))





# 1.0.0-alpha.4 (2020-01-16)



# 1.0.0-alpha.1 (2020-01-10)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update input and resolved naming ([#444](https://github.com/aws/aws-sdk-js-v3/issues/444)) ([4235b6c](https://github.com/aws/aws-sdk-js-v3/commit/4235b6c))


### Features

* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad5796))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5))





# 1.0.0-alpha.3 (2020-01-10)



# 0.9.0 (2020-01-09)


### Bug Fixes

* update input and resolved naming ([#444](https://github.com/aws/aws-sdk-js-v3/issues/444)) ([4235b6c](https://github.com/aws/aws-sdk-js-v3/commit/4235b6c))


### Features

* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad5796))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5))





# 1.0.0-alpha.2 (2020-01-09)


### Bug Fixes

* update input and resolved naming ([#444](https://github.com/aws/aws-sdk-js-v3/issues/444)) ([4235b6c](https://github.com/aws/aws-sdk-js-v3/commit/4235b6c))


### Features

* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad5796))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5))





# 1.0.0-alpha.1 (2020-01-08)


### Bug Fixes

* update input and resolved naming ([#444](https://github.com/aws/aws-sdk-js-v3/issues/444)) ([4235b6c](https://github.com/aws/aws-sdk-js-v3/commit/4235b6c))


### Features

* remove absolute priority numbers from middleware stack ([#434](https://github.com/aws/aws-sdk-js-v3/issues/434)) ([2ad5796](https://github.com/aws/aws-sdk-js-v3/commit/2ad5796))
* standardize plugins ([#422](https://github.com/aws/aws-sdk-js-v3/issues/422)) ([09112e5](https://github.com/aws/aws-sdk-js-v3/commit/09112e5))





# [0.1.0-preview.7](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/retry-middleware@0.1.0-preview.2...@aws-sdk/retry-middleware@0.1.0-preview.7) (2019-10-30)



# 0.3.0 (2019-09-09)


### Features

* commit all clients ([#324](https://github.com/aws/aws-sdk-js-v3/issues/324)) ([cb268ed](https://github.com/aws/aws-sdk-js-v3/commit/cb268ed))



# 0.2.0 (2019-07-12)


### Features

* add npm badges for individual packages ([#251](https://github.com/aws/aws-sdk-js-v3/issues/251)) ([8adc10c](https://github.com/aws/aws-sdk-js-v3/commit/8adc10c))
* update jest v20 to v24 ([#243](https://github.com/aws/aws-sdk-js-v3/issues/243)) ([1e156ab](https://github.com/aws/aws-sdk-js-v3/commit/1e156ab))



# 0.1.0 (2019-04-19)





# [0.1.0-preview.6](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/retry-middleware@0.1.0-preview.2...@aws-sdk/retry-middleware@0.1.0-preview.6) (2019-10-29)



# 0.3.0 (2019-09-09)


### Features

* commit all clients ([#324](https://github.com/aws/aws-sdk-js-v3/issues/324)) ([cb268ed](https://github.com/aws/aws-sdk-js-v3/commit/cb268ed))



# 0.2.0 (2019-07-12)


### Features

* add npm badges for individual packages ([#251](https://github.com/aws/aws-sdk-js-v3/issues/251)) ([8adc10c](https://github.com/aws/aws-sdk-js-v3/commit/8adc10c))
* update jest v20 to v24 ([#243](https://github.com/aws/aws-sdk-js-v3/issues/243)) ([1e156ab](https://github.com/aws/aws-sdk-js-v3/commit/1e156ab))



# 0.1.0 (2019-04-19)





# [0.1.0-preview.5](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/retry-middleware@0.1.0-preview.2...@aws-sdk/retry-middleware@0.1.0-preview.5) (2019-09-09)


### Features

* commit all clients ([#324](https://github.com/aws/aws-sdk-js-v3/issues/324)) ([cb268ed](https://github.com/aws/aws-sdk-js-v3/commit/cb268ed))



# 0.2.0 (2019-07-12)


### Features

* add npm badges for individual packages ([#251](https://github.com/aws/aws-sdk-js-v3/issues/251)) ([8adc10c](https://github.com/aws/aws-sdk-js-v3/commit/8adc10c))
* update jest v20 to v24 ([#243](https://github.com/aws/aws-sdk-js-v3/issues/243)) ([1e156ab](https://github.com/aws/aws-sdk-js-v3/commit/1e156ab))



# 0.1.0 (2019-04-19)





# [0.1.0-preview.4](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/retry-middleware@0.1.0-preview.2...@aws-sdk/retry-middleware@0.1.0-preview.4) (2019-07-12)


### Features

* add npm badges for individual packages ([#251](https://github.com/aws/aws-sdk-js-v3/issues/251)) ([8adc10c](https://github.com/aws/aws-sdk-js-v3/commit/8adc10c))
* update jest v20 to v24 ([#243](https://github.com/aws/aws-sdk-js-v3/issues/243)) ([1e156ab](https://github.com/aws/aws-sdk-js-v3/commit/1e156ab))



# 0.1.0 (2019-04-19)





# [0.1.0-preview.3](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/retry-middleware@0.1.0-preview.2...@aws-sdk/retry-middleware@0.1.0-preview.3) (2019-04-19)

**Note:** Version bump only for package @aws-sdk/retry-middleware

# [0.1.0-preview.2](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/retry-middleware@0.1.0-preview.1...@aws-sdk/retry-middleware@0.1.0-preview.2) (2019-03-27)

**Note:** Version bump only for package @aws-sdk/retry-middleware
