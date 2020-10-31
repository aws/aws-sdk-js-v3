# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.4](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.3...v1.0.0-rc.4) (2020-10-31)


### Features

* log clientName and commandName ([#1637](https://github.com/aws/aws-sdk-js-v3/issues/1637)) ([79f25ca](https://github.com/aws/aws-sdk-js-v3/commit/79f25cacc076483e0134f3626d9971ada5f1206d))





# [1.0.0-rc.3](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.2...v1.0.0-rc.3) (2020-10-27)


### Features

* update client description to add keywords ([#1631](https://github.com/aws/aws-sdk-js-v3/issues/1631)) ([93fc586](https://github.com/aws/aws-sdk-js-v3/commit/93fc5866bf6e5f3b40f8dcfe829172bb80cc8391))





# [1.0.0-rc.2](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.1...v1.0.0-rc.2) (2020-10-22)


### Bug Fixes

* throw 3XX redirection as errors explicitly ([#1591](https://github.com/aws/aws-sdk-js-v3/issues/1591)) ([76f83f1](https://github.com/aws/aws-sdk-js-v3/commit/76f83f19c96dc6c8705c8367cae5d87bbcfd7b23))





# [1.0.0-rc.1](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-gamma.11...v1.0.0-rc.1) (2020-10-19)


### Features

* ready for release candidate ([#1578](https://github.com/aws/aws-sdk-js-v3/issues/1578)) ([519f66c](https://github.com/aws/aws-sdk-js-v3/commit/519f66c6388b91d0bd750a511e6d1af56196835e))





# [1.0.0-gamma.11](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/client-s3@1.0.0-gamma.10...@aws-sdk/client-s3@1.0.0-gamma.11) (2020-10-07)


### Features

* **client-s3:** use regional endpoint by default and support aws-global region ([#1552](https://github.com/aws/aws-sdk-js-v3/issues/1552)) ([47c6599](https://github.com/aws/aws-sdk-js-v3/commit/47c6599ecc6863207438731c6af57de7891d341c))
* **middleware-bucket-endpoint:** support Outposts buckets ([#1550](https://github.com/aws/aws-sdk-js-v3/issues/1550)) ([c7915d2](https://github.com/aws/aws-sdk-js-v3/commit/c7915d263821191236504c0f580c35da7a33ebad))





# [1.0.0-gamma.10](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/client-s3@1.0.0-gamma.9...@aws-sdk/client-s3@1.0.0-gamma.10) (2020-09-29)

**Note:** Version bump only for package @aws-sdk/client-s3





# [1.0.0-gamma.9](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/client-s3@1.0.0-gamma.8...@aws-sdk/client-s3@1.0.0-gamma.9) (2020-09-15)


### Bug Fixes

* default import package.json for spec compatibility ([#1505](https://github.com/aws/aws-sdk-js-v3/issues/1505)) ([797ba7d](https://github.com/aws/aws-sdk-js-v3/commit/797ba7dc7743eb65e8f81536bcf70e5c225ef861))
* toposort and chunk shape models ([#1510](https://github.com/aws/aws-sdk-js-v3/issues/1510)) ([bee87d8](https://github.com/aws/aws-sdk-js-v3/commit/bee87d8fcc5ea82a361386309ebf9330fe39c816))





# [1.0.0-gamma.8](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/client-s3@1.0.0-gamma.7...@aws-sdk/client-s3@1.0.0-gamma.8) (2020-09-01)


### Features

* add LoggerConfig to all clients ([#1472](https://github.com/aws/aws-sdk-js-v3/issues/1472)) ([d55a812](https://github.com/aws/aws-sdk-js-v3/commit/d55a81278fee13281b20bfa60d89d2b111245dd4))





# [1.0.0-gamma.7](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/client-s3@1.0.0-gamma.6...@aws-sdk/client-s3@1.0.0-gamma.7) (2020-08-25)


### Features

* add filterSensitiveLog for Union types ([#1447](https://github.com/aws/aws-sdk-js-v3/issues/1447)) ([2699f6a](https://github.com/aws/aws-sdk-js-v3/commit/2699f6a726f347b3a44c538234f692d9f21e459d))
* adds client paginators ([#1458](https://github.com/aws/aws-sdk-js-v3/issues/1458)) ([0c7f7ee](https://github.com/aws/aws-sdk-js-v3/commit/0c7f7eee39eef17a5baee3c0db78682a54b1028a))
* get partition of given region ([#1435](https://github.com/aws/aws-sdk-js-v3/issues/1435)) ([c18bfe4](https://github.com/aws/aws-sdk-js-v3/commit/c18bfe489db77d945d0bcc4ae7194ff46cd461a9))
* refactor nodejs region loader  ([#1437](https://github.com/aws/aws-sdk-js-v3/issues/1437)) ([5d79645](https://github.com/aws/aws-sdk-js-v3/commit/5d79645eb622b111c94a7de1918c8357c83a7bf8))
* refactor nodejs retry config loader ([#1438](https://github.com/aws/aws-sdk-js-v3/issues/1438)) ([5478012](https://github.com/aws/aws-sdk-js-v3/commit/5478012147b475bdce07a2cbe393a972e502c93f))
* update clients with smithy models as of 08/20 ([#1457](https://github.com/aws/aws-sdk-js-v3/issues/1457)) ([f95cce3](https://github.com/aws/aws-sdk-js-v3/commit/f95cce338fcdc49ead6e3ca6d178a6fd58ae556f))
* **client-s3:** add useArnRegion config ([#1420](https://github.com/aws/aws-sdk-js-v3/issues/1420)) ([40e600e](https://github.com/aws/aws-sdk-js-v3/commit/40e600e598e88afa28f15459b4f9574dcfd171a4))





# [1.0.0-gamma.6](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/client-s3@1.0.0-gamma.5...@aws-sdk/client-s3@1.0.0-gamma.6) (2020-08-04)

**Note:** Version bump only for package @aws-sdk/client-s3





# [1.0.0-gamma.5](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/client-s3@1.0.0-gamma.4...@aws-sdk/client-s3@1.0.0-gamma.5) (2020-07-21)

**Note:** Version bump only for package @aws-sdk/client-s3





# [1.0.0-gamma.4](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/client-s3@1.0.0-gamma.3...@aws-sdk/client-s3@1.0.0-gamma.4) (2020-07-13)

**Note:** Version bump only for package @aws-sdk/client-s3





# 1.0.0-gamma.3 (2020-07-08)


### Features

* add filterSensitiveLog method to Structure namespaces ([#1130](https://github.com/aws/aws-sdk-js-v3/issues/1130)) ([8eff087](https://github.com/aws/aws-sdk-js-v3/commit/8eff0875580e30e12f2e0abd5fa402973790e697))
* codegen enabling eventstream serde in RN ([#1236](https://github.com/aws/aws-sdk-js-v3/issues/1236)) ([7e7d3c8](https://github.com/aws/aws-sdk-js-v3/commit/7e7d3c81aa9eb012cb538dfdc382a45c59caa240))



# 1.0.0-gamma.2 (2020-05-26)



# 1.0.0-gamma.1 (2020-05-21)


### Bug Fixes

* add default value to stream collector ([#1131](https://github.com/aws/aws-sdk-js-v3/issues/1131)) ([030082a](https://github.com/aws/aws-sdk-js-v3/commit/030082a0378f873da34c5381c7889754c5bde9d3))
* use JS url parser in ReactNative ([#1129](https://github.com/aws/aws-sdk-js-v3/issues/1129)) ([efc8570](https://github.com/aws/aws-sdk-js-v3/commit/efc8570af4019ce4f07a94afde82661ad64bf3d4))


### Features

* bump up to gamma version ([#1192](https://github.com/aws/aws-sdk-js-v3/issues/1192)) ([a609075](https://github.com/aws/aws-sdk-js-v3/commit/a6090754f2a6c21e5b70bf0c8782cc0fbe59ee12))
* populate contents from '#text' recursively in parseBody ([#1154](https://github.com/aws/aws-sdk-js-v3/issues/1154)) ([b3148b4](https://github.com/aws/aws-sdk-js-v3/commit/b3148b4a906e7335f95839c59fd55140ddc89e96))
* refactor http request handlers ([#1186](https://github.com/aws/aws-sdk-js-v3/issues/1186)) ([605ebc5](https://github.com/aws/aws-sdk-js-v3/commit/605ebc57d2ec140ae5dd1c152168ec786e6663d9))
* remove redundant variables from deser functions ([#1153](https://github.com/aws/aws-sdk-js-v3/issues/1153)) ([bcfa99c](https://github.com/aws/aws-sdk-js-v3/commit/bcfa99cd2d7b02d8f396dfc06c5d5323a10c55dd))



# 1.0.0-beta.4 (2020-04-25)


### Bug Fixes

* move endpoint resolution to the serializers ([#1106](https://github.com/aws/aws-sdk-js-v3/issues/1106)) ([08c9420](https://github.com/aws/aws-sdk-js-v3/commit/08c9420db1ba9c3faf3ed26aa1244646bacff1d1))
* request default endpoints from serde context being overwritten ([#1097](https://github.com/aws/aws-sdk-js-v3/issues/1097)) ([299d2a1](https://github.com/aws/aws-sdk-js-v3/commit/299d2a19bddfbab1b70552fd7a6b669ef7762288))


### Features

* add default destroy function to clients ([#1081](https://github.com/aws/aws-sdk-js-v3/issues/1081)) ([7eb0f0e](https://github.com/aws/aws-sdk-js-v3/commit/7eb0f0e5debfafe08c51dc4f99dcf29d79dea358))
* codegen for issue fixed in protocol test ([#1086](https://github.com/aws/aws-sdk-js-v3/issues/1086)) ([8e077c7](https://github.com/aws/aws-sdk-js-v3/commit/8e077c7f1c1363a3a1f8522e6ee793bd57546c0e))



# 1.0.0-beta.3 (2020-03-30)



# 1.0.0-beta.2 (2020-03-28)



# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.27 (2020-03-13)


### Bug Fixes

* codegen for using pure JS hasher in RN ([#998](https://github.com/aws/aws-sdk-js-v3/issues/998)) ([022cba5](https://github.com/aws/aws-sdk-js-v3/commit/022cba59168998bea8a263687395d27eae375d30)), closes [awslabs/smithy-typescript#144](https://github.com/awslabs/smithy-typescript/issues/144)



# 1.0.0-alpha.26 (2020-03-12)


### Bug Fixes

* eventstream config throws in RN ([#996](https://github.com/aws/aws-sdk-js-v3/issues/996)) ([5069e8a](https://github.com/aws/aws-sdk-js-v3/commit/5069e8a6d2ceb40de4884dd1f27557d8f5726605))
* **fast-xml-parser:** populate contents from '#text' if available ([#993](https://github.com/aws/aws-sdk-js-v3/issues/993)) ([87af396](https://github.com/aws/aws-sdk-js-v3/commit/87af396ad9adfa486379481ba6d944a6c48bc272))



# 1.0.0-alpha.25 (2020-03-09)


### Features

* codegen for fixing protocol tests([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([15a66c7](https://github.com/aws/aws-sdk-js-v3/commit/15a66c720f49884087126d6d573c64b6a4a16dc5)), closes [awslabls/smithy-typescript#141](https://github.com/awslabls/smithy-typescript/issues/141)
* codegen for fixing streaming member shape([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([c7f13dc](https://github.com/aws/aws-sdk-js-v3/commit/c7f13dc0eda6217452bd37b1b7fa04bcc931deab)), closes [awslabs/smithy-typescript#138](https://github.com/awslabs/smithy-typescript/issues/138) [awslabs/smithy-typescript#140](https://github.com/awslabs/smithy-typescript/issues/140)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.23 (2020-02-14)



# 1.0.0-alpha.22 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532d155445d1ca006b5585418b53e001c8f6))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255ff2627aa2d11dc00f6abbd0dd79f57c8d))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5545b75b3812a63a9b34f2a0ee8c86f7ca))





# 1.0.0-gamma.2 (2020-05-26)



# 1.0.0-gamma.1 (2020-05-21)


### Bug Fixes

* add default value to stream collector ([#1131](https://github.com/aws/aws-sdk-js-v3/issues/1131)) ([030082a](https://github.com/aws/aws-sdk-js-v3/commit/030082a0378f873da34c5381c7889754c5bde9d3))
* use JS url parser in ReactNative ([#1129](https://github.com/aws/aws-sdk-js-v3/issues/1129)) ([efc8570](https://github.com/aws/aws-sdk-js-v3/commit/efc8570af4019ce4f07a94afde82661ad64bf3d4))


### Features

* bump up to gamma version ([#1192](https://github.com/aws/aws-sdk-js-v3/issues/1192)) ([a609075](https://github.com/aws/aws-sdk-js-v3/commit/a6090754f2a6c21e5b70bf0c8782cc0fbe59ee12))
* populate contents from '#text' recursively in parseBody ([#1154](https://github.com/aws/aws-sdk-js-v3/issues/1154)) ([b3148b4](https://github.com/aws/aws-sdk-js-v3/commit/b3148b4a906e7335f95839c59fd55140ddc89e96))
* refactor http request handlers ([#1186](https://github.com/aws/aws-sdk-js-v3/issues/1186)) ([605ebc5](https://github.com/aws/aws-sdk-js-v3/commit/605ebc57d2ec140ae5dd1c152168ec786e6663d9))
* remove redundant variables from deser functions ([#1153](https://github.com/aws/aws-sdk-js-v3/issues/1153)) ([bcfa99c](https://github.com/aws/aws-sdk-js-v3/commit/bcfa99cd2d7b02d8f396dfc06c5d5323a10c55dd))



# 1.0.0-beta.4 (2020-04-25)


### Bug Fixes

* move endpoint resolution to the serializers ([#1106](https://github.com/aws/aws-sdk-js-v3/issues/1106)) ([08c9420](https://github.com/aws/aws-sdk-js-v3/commit/08c9420db1ba9c3faf3ed26aa1244646bacff1d1))
* request default endpoints from serde context being overwritten ([#1097](https://github.com/aws/aws-sdk-js-v3/issues/1097)) ([299d2a1](https://github.com/aws/aws-sdk-js-v3/commit/299d2a19bddfbab1b70552fd7a6b669ef7762288))


### Features

* add default destroy function to clients ([#1081](https://github.com/aws/aws-sdk-js-v3/issues/1081)) ([7eb0f0e](https://github.com/aws/aws-sdk-js-v3/commit/7eb0f0e5debfafe08c51dc4f99dcf29d79dea358))
* codegen for issue fixed in protocol test ([#1086](https://github.com/aws/aws-sdk-js-v3/issues/1086)) ([8e077c7](https://github.com/aws/aws-sdk-js-v3/commit/8e077c7f1c1363a3a1f8522e6ee793bd57546c0e))



# 1.0.0-beta.3 (2020-03-30)



# 1.0.0-beta.2 (2020-03-28)



# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.27 (2020-03-13)


### Bug Fixes

* codegen for using pure JS hasher in RN ([#998](https://github.com/aws/aws-sdk-js-v3/issues/998)) ([022cba5](https://github.com/aws/aws-sdk-js-v3/commit/022cba59168998bea8a263687395d27eae375d30)), closes [awslabs/smithy-typescript#144](https://github.com/awslabs/smithy-typescript/issues/144)



# 1.0.0-alpha.26 (2020-03-12)


### Bug Fixes

* eventstream config throws in RN ([#996](https://github.com/aws/aws-sdk-js-v3/issues/996)) ([5069e8a](https://github.com/aws/aws-sdk-js-v3/commit/5069e8a6d2ceb40de4884dd1f27557d8f5726605))
* **fast-xml-parser:** populate contents from '#text' if available ([#993](https://github.com/aws/aws-sdk-js-v3/issues/993)) ([87af396](https://github.com/aws/aws-sdk-js-v3/commit/87af396ad9adfa486379481ba6d944a6c48bc272))



# 1.0.0-alpha.25 (2020-03-09)


### Features

* codegen for fixing protocol tests([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([15a66c7](https://github.com/aws/aws-sdk-js-v3/commit/15a66c720f49884087126d6d573c64b6a4a16dc5)), closes [awslabls/smithy-typescript#141](https://github.com/awslabls/smithy-typescript/issues/141)
* codegen for fixing streaming member shape([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([c7f13dc](https://github.com/aws/aws-sdk-js-v3/commit/c7f13dc0eda6217452bd37b1b7fa04bcc931deab)), closes [awslabs/smithy-typescript#138](https://github.com/awslabs/smithy-typescript/issues/138) [awslabs/smithy-typescript#140](https://github.com/awslabs/smithy-typescript/issues/140)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.23 (2020-02-14)



# 1.0.0-alpha.22 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532d155445d1ca006b5585418b53e001c8f6))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255ff2627aa2d11dc00f6abbd0dd79f57c8d))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5545b75b3812a63a9b34f2a0ee8c86f7ca))





# 1.0.0-gamma.1 (2020-05-21)


### Bug Fixes

* add default value to stream collector ([#1131](https://github.com/aws/aws-sdk-js-v3/issues/1131)) ([030082a](https://github.com/aws/aws-sdk-js-v3/commit/030082a0378f873da34c5381c7889754c5bde9d3))
* use JS url parser in ReactNative ([#1129](https://github.com/aws/aws-sdk-js-v3/issues/1129)) ([efc8570](https://github.com/aws/aws-sdk-js-v3/commit/efc8570af4019ce4f07a94afde82661ad64bf3d4))


### Features

* bump up to gamma version ([#1192](https://github.com/aws/aws-sdk-js-v3/issues/1192)) ([a609075](https://github.com/aws/aws-sdk-js-v3/commit/a6090754f2a6c21e5b70bf0c8782cc0fbe59ee12))
* populate contents from '#text' recursively in parseBody ([#1154](https://github.com/aws/aws-sdk-js-v3/issues/1154)) ([b3148b4](https://github.com/aws/aws-sdk-js-v3/commit/b3148b4a906e7335f95839c59fd55140ddc89e96))
* refactor http request handlers ([#1186](https://github.com/aws/aws-sdk-js-v3/issues/1186)) ([605ebc5](https://github.com/aws/aws-sdk-js-v3/commit/605ebc57d2ec140ae5dd1c152168ec786e6663d9))
* remove redundant variables from deser functions ([#1153](https://github.com/aws/aws-sdk-js-v3/issues/1153)) ([bcfa99c](https://github.com/aws/aws-sdk-js-v3/commit/bcfa99cd2d7b02d8f396dfc06c5d5323a10c55dd))



# 1.0.0-beta.4 (2020-04-25)


### Bug Fixes

* move endpoint resolution to the serializers ([#1106](https://github.com/aws/aws-sdk-js-v3/issues/1106)) ([08c9420](https://github.com/aws/aws-sdk-js-v3/commit/08c9420db1ba9c3faf3ed26aa1244646bacff1d1))
* request default endpoints from serde context being overwritten ([#1097](https://github.com/aws/aws-sdk-js-v3/issues/1097)) ([299d2a1](https://github.com/aws/aws-sdk-js-v3/commit/299d2a19bddfbab1b70552fd7a6b669ef7762288))


### Features

* add default destroy function to clients ([#1081](https://github.com/aws/aws-sdk-js-v3/issues/1081)) ([7eb0f0e](https://github.com/aws/aws-sdk-js-v3/commit/7eb0f0e5debfafe08c51dc4f99dcf29d79dea358))
* codegen for issue fixed in protocol test ([#1086](https://github.com/aws/aws-sdk-js-v3/issues/1086)) ([8e077c7](https://github.com/aws/aws-sdk-js-v3/commit/8e077c7f1c1363a3a1f8522e6ee793bd57546c0e))



# 1.0.0-beta.3 (2020-03-30)



# 1.0.0-beta.2 (2020-03-28)



# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.27 (2020-03-13)


### Bug Fixes

* codegen for using pure JS hasher in RN ([#998](https://github.com/aws/aws-sdk-js-v3/issues/998)) ([022cba5](https://github.com/aws/aws-sdk-js-v3/commit/022cba59168998bea8a263687395d27eae375d30)), closes [awslabs/smithy-typescript#144](https://github.com/awslabs/smithy-typescript/issues/144)



# 1.0.0-alpha.26 (2020-03-12)


### Bug Fixes

* eventstream config throws in RN ([#996](https://github.com/aws/aws-sdk-js-v3/issues/996)) ([5069e8a](https://github.com/aws/aws-sdk-js-v3/commit/5069e8a6d2ceb40de4884dd1f27557d8f5726605))
* **fast-xml-parser:** populate contents from '#text' if available ([#993](https://github.com/aws/aws-sdk-js-v3/issues/993)) ([87af396](https://github.com/aws/aws-sdk-js-v3/commit/87af396ad9adfa486379481ba6d944a6c48bc272))



# 1.0.0-alpha.25 (2020-03-09)


### Features

* codegen for fixing protocol tests([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([15a66c7](https://github.com/aws/aws-sdk-js-v3/commit/15a66c720f49884087126d6d573c64b6a4a16dc5)), closes [awslabls/smithy-typescript#141](https://github.com/awslabls/smithy-typescript/issues/141)
* codegen for fixing streaming member shape([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([c7f13dc](https://github.com/aws/aws-sdk-js-v3/commit/c7f13dc0eda6217452bd37b1b7fa04bcc931deab)), closes [awslabs/smithy-typescript#138](https://github.com/awslabs/smithy-typescript/issues/138) [awslabs/smithy-typescript#140](https://github.com/awslabs/smithy-typescript/issues/140)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.23 (2020-02-14)



# 1.0.0-alpha.22 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532d155445d1ca006b5585418b53e001c8f6))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255ff2627aa2d11dc00f6abbd0dd79f57c8d))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5545b75b3812a63a9b34f2a0ee8c86f7ca))





# 1.0.0-beta.5 (2020-04-27)


### Features

* use exact @aws-sdk/* dependencies ([#1110](https://github.com/aws/aws-sdk-js-v3/issues/1110)) ([bcfd7a2](https://github.com/aws/aws-sdk-js-v3/commit/bcfd7a2faeca3a2605057fd4736d710aa4902b62))



# 1.0.0-beta.3 (2020-03-30)



# 1.0.0-beta.2 (2020-03-28)



# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.27 (2020-03-13)


### Bug Fixes

* codegen for using pure JS hasher in RN ([#998](https://github.com/aws/aws-sdk-js-v3/issues/998)) ([022cba5](https://github.com/aws/aws-sdk-js-v3/commit/022cba59168998bea8a263687395d27eae375d30)), closes [awslabs/smithy-typescript#144](https://github.com/awslabs/smithy-typescript/issues/144)



# 1.0.0-alpha.26 (2020-03-12)


### Bug Fixes

* eventstream config throws in RN ([#996](https://github.com/aws/aws-sdk-js-v3/issues/996)) ([5069e8a](https://github.com/aws/aws-sdk-js-v3/commit/5069e8a6d2ceb40de4884dd1f27557d8f5726605))
* **fast-xml-parser:** populate contents from '#text' if available ([#993](https://github.com/aws/aws-sdk-js-v3/issues/993)) ([87af396](https://github.com/aws/aws-sdk-js-v3/commit/87af396ad9adfa486379481ba6d944a6c48bc272))



# 1.0.0-alpha.25 (2020-03-09)


### Features

* codegen for fixing protocol tests([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([15a66c7](https://github.com/aws/aws-sdk-js-v3/commit/15a66c720f49884087126d6d573c64b6a4a16dc5)), closes [awslabls/smithy-typescript#141](https://github.com/awslabls/smithy-typescript/issues/141)
* codegen for fixing streaming member shape([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([c7f13dc](https://github.com/aws/aws-sdk-js-v3/commit/c7f13dc0eda6217452bd37b1b7fa04bcc931deab)), closes [awslabs/smithy-typescript#138](https://github.com/awslabs/smithy-typescript/issues/138) [awslabs/smithy-typescript#140](https://github.com/awslabs/smithy-typescript/issues/140)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.23 (2020-02-14)



# 1.0.0-alpha.22 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532d155445d1ca006b5585418b53e001c8f6))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255ff2627aa2d11dc00f6abbd0dd79f57c8d))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5545b75b3812a63a9b34f2a0ee8c86f7ca))





# 1.0.0-beta.4 (2020-04-25)


### Bug Fixes

* move endpoint resolution to the serializers ([#1106](https://github.com/aws/aws-sdk-js-v3/issues/1106)) ([08c9420](https://github.com/aws/aws-sdk-js-v3/commit/08c9420db1ba9c3faf3ed26aa1244646bacff1d1))
* request default endpoints from serde context being overwritten ([#1097](https://github.com/aws/aws-sdk-js-v3/issues/1097)) ([299d2a1](https://github.com/aws/aws-sdk-js-v3/commit/299d2a19bddfbab1b70552fd7a6b669ef7762288))


### Features

* add default destroy function to clients ([#1081](https://github.com/aws/aws-sdk-js-v3/issues/1081)) ([7eb0f0e](https://github.com/aws/aws-sdk-js-v3/commit/7eb0f0e5debfafe08c51dc4f99dcf29d79dea358))
* codegen for issue fixed in protocol test ([#1086](https://github.com/aws/aws-sdk-js-v3/issues/1086)) ([8e077c7](https://github.com/aws/aws-sdk-js-v3/commit/8e077c7f1c1363a3a1f8522e6ee793bd57546c0e))



# 1.0.0-beta.3 (2020-03-30)



# 1.0.0-beta.2 (2020-03-28)



# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.27 (2020-03-13)


### Bug Fixes

* codegen for using pure JS hasher in RN ([#998](https://github.com/aws/aws-sdk-js-v3/issues/998)) ([022cba5](https://github.com/aws/aws-sdk-js-v3/commit/022cba59168998bea8a263687395d27eae375d30)), closes [awslabs/smithy-typescript#144](https://github.com/awslabs/smithy-typescript/issues/144)



# 1.0.0-alpha.26 (2020-03-12)


### Bug Fixes

* eventstream config throws in RN ([#996](https://github.com/aws/aws-sdk-js-v3/issues/996)) ([5069e8a](https://github.com/aws/aws-sdk-js-v3/commit/5069e8a6d2ceb40de4884dd1f27557d8f5726605))
* **fast-xml-parser:** populate contents from '#text' if available ([#993](https://github.com/aws/aws-sdk-js-v3/issues/993)) ([87af396](https://github.com/aws/aws-sdk-js-v3/commit/87af396ad9adfa486379481ba6d944a6c48bc272))



# 1.0.0-alpha.25 (2020-03-09)


### Features

* codegen for fixing protocol tests([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([15a66c7](https://github.com/aws/aws-sdk-js-v3/commit/15a66c720f49884087126d6d573c64b6a4a16dc5)), closes [awslabls/smithy-typescript#141](https://github.com/awslabls/smithy-typescript/issues/141)
* codegen for fixing streaming member shape([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([c7f13dc](https://github.com/aws/aws-sdk-js-v3/commit/c7f13dc0eda6217452bd37b1b7fa04bcc931deab)), closes [awslabs/smithy-typescript#138](https://github.com/awslabs/smithy-typescript/issues/138) [awslabs/smithy-typescript#140](https://github.com/awslabs/smithy-typescript/issues/140)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.23 (2020-02-14)



# 1.0.0-alpha.22 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532d155445d1ca006b5585418b53e001c8f6))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255ff2627aa2d11dc00f6abbd0dd79f57c8d))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5545b75b3812a63a9b34f2a0ee8c86f7ca))





# 1.0.0-beta.3 (2020-03-30)



# 1.0.0-beta.2 (2020-03-28)



# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.27 (2020-03-13)


### Bug Fixes

* codegen for using pure JS hasher in RN ([#998](https://github.com/aws/aws-sdk-js-v3/issues/998)) ([022cba5](https://github.com/aws/aws-sdk-js-v3/commit/022cba59168998bea8a263687395d27eae375d30)), closes [awslabs/smithy-typescript#144](https://github.com/awslabs/smithy-typescript/issues/144)



# 1.0.0-alpha.26 (2020-03-12)


### Bug Fixes

* eventstream config throws in RN ([#996](https://github.com/aws/aws-sdk-js-v3/issues/996)) ([5069e8a](https://github.com/aws/aws-sdk-js-v3/commit/5069e8a6d2ceb40de4884dd1f27557d8f5726605))
* **fast-xml-parser:** populate contents from '#text' if available ([#993](https://github.com/aws/aws-sdk-js-v3/issues/993)) ([87af396](https://github.com/aws/aws-sdk-js-v3/commit/87af396ad9adfa486379481ba6d944a6c48bc272))



# 1.0.0-alpha.25 (2020-03-09)


### Features

* codegen for fixing protocol tests([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([15a66c7](https://github.com/aws/aws-sdk-js-v3/commit/15a66c720f49884087126d6d573c64b6a4a16dc5)), closes [awslabls/smithy-typescript#141](https://github.com/awslabls/smithy-typescript/issues/141)
* codegen for fixing streaming member shape([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([c7f13dc](https://github.com/aws/aws-sdk-js-v3/commit/c7f13dc0eda6217452bd37b1b7fa04bcc931deab)), closes [awslabs/smithy-typescript#138](https://github.com/awslabs/smithy-typescript/issues/138) [awslabs/smithy-typescript#140](https://github.com/awslabs/smithy-typescript/issues/140)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.23 (2020-02-14)



# 1.0.0-alpha.22 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532d155445d1ca006b5585418b53e001c8f6))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255ff2627aa2d11dc00f6abbd0dd79f57c8d))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5545b75b3812a63a9b34f2a0ee8c86f7ca))





# 1.0.0-beta.2 (2020-03-28)



# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.27 (2020-03-13)


### Bug Fixes

* codegen for using pure JS hasher in RN ([#998](https://github.com/aws/aws-sdk-js-v3/issues/998)) ([022cba5](https://github.com/aws/aws-sdk-js-v3/commit/022cba59168998bea8a263687395d27eae375d30)), closes [awslabs/smithy-typescript#144](https://github.com/awslabs/smithy-typescript/issues/144)



# 1.0.0-alpha.26 (2020-03-12)


### Bug Fixes

* eventstream config throws in RN ([#996](https://github.com/aws/aws-sdk-js-v3/issues/996)) ([5069e8a](https://github.com/aws/aws-sdk-js-v3/commit/5069e8a6d2ceb40de4884dd1f27557d8f5726605))
* **fast-xml-parser:** populate contents from '#text' if available ([#993](https://github.com/aws/aws-sdk-js-v3/issues/993)) ([87af396](https://github.com/aws/aws-sdk-js-v3/commit/87af396ad9adfa486379481ba6d944a6c48bc272))



# 1.0.0-alpha.25 (2020-03-09)


### Features

* codegen for fixing protocol tests([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([15a66c7](https://github.com/aws/aws-sdk-js-v3/commit/15a66c720f49884087126d6d573c64b6a4a16dc5)), closes [awslabls/smithy-typescript#141](https://github.com/awslabls/smithy-typescript/issues/141)
* codegen for fixing streaming member shape([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([c7f13dc](https://github.com/aws/aws-sdk-js-v3/commit/c7f13dc0eda6217452bd37b1b7fa04bcc931deab)), closes [awslabs/smithy-typescript#138](https://github.com/awslabs/smithy-typescript/issues/138) [awslabs/smithy-typescript#140](https://github.com/awslabs/smithy-typescript/issues/140)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.23 (2020-02-14)



# 1.0.0-alpha.22 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532d155445d1ca006b5585418b53e001c8f6))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255ff2627aa2d11dc00f6abbd0dd79f57c8d))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5545b75b3812a63a9b34f2a0ee8c86f7ca))





# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.27 (2020-03-13)


### Bug Fixes

* codegen for using pure JS hasher in RN ([#998](https://github.com/aws/aws-sdk-js-v3/issues/998)) ([022cba5](https://github.com/aws/aws-sdk-js-v3/commit/022cba59168998bea8a263687395d27eae375d30)), closes [awslabs/smithy-typescript#144](https://github.com/awslabs/smithy-typescript/issues/144)



# 1.0.0-alpha.26 (2020-03-12)


### Bug Fixes

* eventstream config throws in RN ([#996](https://github.com/aws/aws-sdk-js-v3/issues/996)) ([5069e8a](https://github.com/aws/aws-sdk-js-v3/commit/5069e8a6d2ceb40de4884dd1f27557d8f5726605))
* **fast-xml-parser:** populate contents from '#text' if available ([#993](https://github.com/aws/aws-sdk-js-v3/issues/993)) ([87af396](https://github.com/aws/aws-sdk-js-v3/commit/87af396ad9adfa486379481ba6d944a6c48bc272))



# 1.0.0-alpha.25 (2020-03-09)


### Features

* codegen for fixing protocol tests([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([15a66c7](https://github.com/aws/aws-sdk-js-v3/commit/15a66c720f49884087126d6d573c64b6a4a16dc5)), closes [awslabls/smithy-typescript#141](https://github.com/awslabls/smithy-typescript/issues/141)
* codegen for fixing streaming member shape([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([c7f13dc](https://github.com/aws/aws-sdk-js-v3/commit/c7f13dc0eda6217452bd37b1b7fa04bcc931deab)), closes [awslabs/smithy-typescript#138](https://github.com/awslabs/smithy-typescript/issues/138) [awslabs/smithy-typescript#140](https://github.com/awslabs/smithy-typescript/issues/140)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.23 (2020-02-14)



# 1.0.0-alpha.22 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532d155445d1ca006b5585418b53e001c8f6))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255ff2627aa2d11dc00f6abbd0dd79f57c8d))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5545b75b3812a63a9b34f2a0ee8c86f7ca))





# 1.0.0-alpha.21 (2020-03-20)



# 1.0.0-alpha.27 (2020-03-13)


### Bug Fixes

* codegen for using pure JS hasher in RN ([#998](https://github.com/aws/aws-sdk-js-v3/issues/998)) ([022cba5](https://github.com/aws/aws-sdk-js-v3/commit/022cba59168998bea8a263687395d27eae375d30)), closes [awslabs/smithy-typescript#144](https://github.com/awslabs/smithy-typescript/issues/144)



# 1.0.0-alpha.26 (2020-03-12)


### Bug Fixes

* eventstream config throws in RN ([#996](https://github.com/aws/aws-sdk-js-v3/issues/996)) ([5069e8a](https://github.com/aws/aws-sdk-js-v3/commit/5069e8a6d2ceb40de4884dd1f27557d8f5726605))
* **fast-xml-parser:** populate contents from '#text' if available ([#993](https://github.com/aws/aws-sdk-js-v3/issues/993)) ([87af396](https://github.com/aws/aws-sdk-js-v3/commit/87af396ad9adfa486379481ba6d944a6c48bc272))



# 1.0.0-alpha.25 (2020-03-09)


### Features

* codegen for fixing protocol tests([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([15a66c7](https://github.com/aws/aws-sdk-js-v3/commit/15a66c720f49884087126d6d573c64b6a4a16dc5)), closes [awslabls/smithy-typescript#141](https://github.com/awslabls/smithy-typescript/issues/141)
* codegen for fixing streaming member shape([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([c7f13dc](https://github.com/aws/aws-sdk-js-v3/commit/c7f13dc0eda6217452bd37b1b7fa04bcc931deab)), closes [awslabs/smithy-typescript#138](https://github.com/awslabs/smithy-typescript/issues/138) [awslabs/smithy-typescript#140](https://github.com/awslabs/smithy-typescript/issues/140)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.23 (2020-02-14)



# 1.0.0-alpha.22 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532d155445d1ca006b5585418b53e001c8f6))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255ff2627aa2d11dc00f6abbd0dd79f57c8d))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5545b75b3812a63a9b34f2a0ee8c86f7ca))





# 1.0.0-alpha.20 (2020-03-13)


### Bug Fixes

* codegen for using pure JS hasher in RN ([#998](https://github.com/aws/aws-sdk-js-v3/issues/998)) ([022cba5](https://github.com/aws/aws-sdk-js-v3/commit/022cba59168998bea8a263687395d27eae375d30)), closes [awslabs/smithy-typescript#144](https://github.com/awslabs/smithy-typescript/issues/144)



# 1.0.0-alpha.26 (2020-03-12)


### Bug Fixes

* eventstream config throws in RN ([#996](https://github.com/aws/aws-sdk-js-v3/issues/996)) ([5069e8a](https://github.com/aws/aws-sdk-js-v3/commit/5069e8a6d2ceb40de4884dd1f27557d8f5726605))
* **fast-xml-parser:** populate contents from '#text' if available ([#993](https://github.com/aws/aws-sdk-js-v3/issues/993)) ([87af396](https://github.com/aws/aws-sdk-js-v3/commit/87af396ad9adfa486379481ba6d944a6c48bc272))



# 1.0.0-alpha.25 (2020-03-09)


### Features

* codegen for fixing protocol tests([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([15a66c7](https://github.com/aws/aws-sdk-js-v3/commit/15a66c720f49884087126d6d573c64b6a4a16dc5)), closes [awslabls/smithy-typescript#141](https://github.com/awslabls/smithy-typescript/issues/141)
* codegen for fixing streaming member shape([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([c7f13dc](https://github.com/aws/aws-sdk-js-v3/commit/c7f13dc0eda6217452bd37b1b7fa04bcc931deab)), closes [awslabs/smithy-typescript#138](https://github.com/awslabs/smithy-typescript/issues/138) [awslabs/smithy-typescript#140](https://github.com/awslabs/smithy-typescript/issues/140)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.23 (2020-02-14)



# 1.0.0-alpha.22 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532d155445d1ca006b5585418b53e001c8f6))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255ff2627aa2d11dc00f6abbd0dd79f57c8d))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5545b75b3812a63a9b34f2a0ee8c86f7ca))





# 1.0.0-alpha.19 (2020-03-12)


### Bug Fixes

* eventstream config throws in RN ([#996](https://github.com/aws/aws-sdk-js-v3/issues/996)) ([5069e8a](https://github.com/aws/aws-sdk-js-v3/commit/5069e8a6d2ceb40de4884dd1f27557d8f5726605))
* **fast-xml-parser:** populate contents from '#text' if available ([#993](https://github.com/aws/aws-sdk-js-v3/issues/993)) ([87af396](https://github.com/aws/aws-sdk-js-v3/commit/87af396ad9adfa486379481ba6d944a6c48bc272))



# 1.0.0-alpha.25 (2020-03-09)


### Features

* codegen for fixing protocol tests([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([15a66c7](https://github.com/aws/aws-sdk-js-v3/commit/15a66c720f49884087126d6d573c64b6a4a16dc5)), closes [awslabls/smithy-typescript#141](https://github.com/awslabls/smithy-typescript/issues/141)
* codegen for fixing streaming member shape([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([c7f13dc](https://github.com/aws/aws-sdk-js-v3/commit/c7f13dc0eda6217452bd37b1b7fa04bcc931deab)), closes [awslabs/smithy-typescript#138](https://github.com/awslabs/smithy-typescript/issues/138) [awslabs/smithy-typescript#140](https://github.com/awslabs/smithy-typescript/issues/140)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.23 (2020-02-14)



# 1.0.0-alpha.22 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532d155445d1ca006b5585418b53e001c8f6))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255ff2627aa2d11dc00f6abbd0dd79f57c8d))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5545b75b3812a63a9b34f2a0ee8c86f7ca))





# 1.0.0-alpha.18 (2020-03-09)


### Features

* codegen for fixing protocol tests([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([15a66c7](https://github.com/aws/aws-sdk-js-v3/commit/15a66c720f49884087126d6d573c64b6a4a16dc5)), closes [awslabls/smithy-typescript#141](https://github.com/awslabls/smithy-typescript/issues/141)
* codegen for fixing streaming member shape([#968](https://github.com/aws/aws-sdk-js-v3/issues/968)) ([c7f13dc](https://github.com/aws/aws-sdk-js-v3/commit/c7f13dc0eda6217452bd37b1b7fa04bcc931deab)), closes [awslabs/smithy-typescript#138](https://github.com/awslabs/smithy-typescript/issues/138) [awslabs/smithy-typescript#140](https://github.com/awslabs/smithy-typescript/issues/140)



# 1.0.0-alpha.24 (2020-02-19)



# 1.0.0-alpha.23 (2020-02-14)



# 1.0.0-alpha.22 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532d155445d1ca006b5585418b53e001c8f6))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255ff2627aa2d11dc00f6abbd0dd79f57c8d))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5545b75b3812a63a9b34f2a0ee8c86f7ca))





# 1.0.0-alpha.17 (2020-02-19)



# 1.0.0-alpha.23 (2020-02-14)



# 1.0.0-alpha.22 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5))





# 1.0.0-alpha.16 (2020-02-14)



# 1.0.0-alpha.22 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5))





# 1.0.0-alpha.15 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5))





# 1.0.0-alpha.14 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5))





# 1.0.0-alpha.13 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5))





# 1.0.0-alpha.12 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5))





# 1.0.0-alpha.11 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5))





# 1.0.0-alpha.10 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5))





# 1.0.0-alpha.9 (2020-02-04)



# 1.0.0-alpha.14 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5))





# 1.0.0-alpha.8 (2020-01-28)


### Features

* rename calculateSha256 ([#790](https://github.com/aws/aws-sdk-js-v3/issues/790)) ([ba66532](https://github.com/aws/aws-sdk-js-v3/commit/ba66532))



# 1.0.0-alpha.13 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5))





# 1.0.0-alpha.7 (2020-01-24)



# 1.0.0-alpha.12 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5))





# 1.0.0-alpha.6 (2020-01-22)


### Bug Fixes

* codegen with XML collection deserialization bugfixes ([#769](https://github.com/aws/aws-sdk-js-v3/issues/769)) ([8f99255](https://github.com/aws/aws-sdk-js-v3/commit/8f99255))



# 1.0.0-alpha.11 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5))





# 1.0.0-alpha.5 (2020-01-17)



# 1.0.0-alpha.9 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5))





# 1.0.0-alpha.4 (2020-01-17)



# 1.0.0-alpha.8 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5))





# 1.0.0-alpha.3 (2020-01-16)



# 1.0.0-alpha.6 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5))





# 1.0.0-alpha.2 (2020-01-15)



# 1.0.0-alpha.5 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5))





# 1.0.0-alpha.1 (2020-01-14)


### Features

* add rest-xml clients ([#728](https://github.com/aws/aws-sdk-js-v3/issues/728)) ([8b4efe5](https://github.com/aws/aws-sdk-js-v3/commit/8b4efe5))
