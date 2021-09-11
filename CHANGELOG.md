# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.31.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.30.0...v3.31.0) (2021-09-11)


### Bug Fixes

* **client-s3:** remove int validation of object size type ([#2775](https://github.com/aws/aws-sdk-js-v3/issues/2775)) ([5f2f70b](https://github.com/aws/aws-sdk-js-v3/commit/5f2f70b0d306c59dd23822505d62b80aaa25cd55))
* **lib-dynamodb:** add util-dynamodb to dependencies ([#2768](https://github.com/aws/aws-sdk-js-v3/issues/2768)) ([b09ba9a](https://github.com/aws/aws-sdk-js-v3/commit/b09ba9ac2069062156659b119a25c0c57077f402))
* **middleware-sdk-rds:** stop throw when source id key is optional ([#2770](https://github.com/aws/aws-sdk-js-v3/issues/2770)) ([299cbbb](https://github.com/aws/aws-sdk-js-v3/commit/299cbbbef934380cdf56c668cc8cd7eebb7f73e5))
* **s3-request-presigner:** inject hostname with custom port ([#2773](https://github.com/aws/aws-sdk-js-v3/issues/2773)) ([3fe226b](https://github.com/aws/aws-sdk-js-v3/commit/3fe226b2dd1ff152d2c0b5f9bbdb9a2261e584d3))


### Features

* **clients:** update clients as of 09/10/2021 ([#2776](https://github.com/aws/aws-sdk-js-v3/issues/2776)) ([3f49ae7](https://github.com/aws/aws-sdk-js-v3/commit/3f49ae758688f73d5ce16ee21ac597a113199bff))
* **codegen:** assert sets have no duplicates ([#2764](https://github.com/aws/aws-sdk-js-v3/issues/2764)) ([aa62fc3](https://github.com/aws/aws-sdk-js-v3/commit/aa62fc3eda48e9a57753cea6fc5896b65f2dbe3b))
* **codegen:** reject null in non-sparse collections ([#2771](https://github.com/aws/aws-sdk-js-v3/issues/2771)) ([dcf644f](https://github.com/aws/aws-sdk-js-v3/commit/dcf644f51733dd9ad0d89c8d9de9876743dcf69e))
* **smithy-client:** support strict union parsing ([#2746](https://github.com/aws/aws-sdk-js-v3/issues/2746)) ([1159680](https://github.com/aws/aws-sdk-js-v3/commit/1159680b399625e247a57ac121483787249ed933))





# [3.30.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.29.0...v3.30.0) (2021-09-07)


### Bug Fixes

* **client-s3:** revert MRAP customizations ([#2759](https://github.com/aws/aws-sdk-js-v3/issues/2759)) ([cfb3fff](https://github.com/aws/aws-sdk-js-v3/commit/cfb3fff268eb393ece2ea50956a6f8610ec51c40))


### Features

* **smithy-client:** support strict timestamp parsing ([#2737](https://github.com/aws/aws-sdk-js-v3/issues/2737)) ([c244678](https://github.com/aws/aws-sdk-js-v3/commit/c244678b7a50fafc6cc44a100f7787d5b8dea2c6))





# [3.29.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.28.0...v3.29.0) (2021-09-02)


### Bug Fixes

* **middleware-sdk-rds:** double encoding the presigned url ([#2711](https://github.com/aws/aws-sdk-js-v3/issues/2711)) ([8a271be](https://github.com/aws/aws-sdk-js-v3/commit/8a271be6ac94080010aa4c3567b6770a2eee5547))
* **parse:** reject numeric strings with non-numbers ([#2729](https://github.com/aws/aws-sdk-js-v3/issues/2729)) ([afeccd7](https://github.com/aws/aws-sdk-js-v3/commit/afeccd746a1f6095a7de510988a01df90072e1d7))


### Features

* **clients:** update clients as of 09/02/2021 ([#2744](https://github.com/aws/aws-sdk-js-v3/issues/2744)) ([19f061f](https://github.com/aws/aws-sdk-js-v3/commit/19f061fa189539c8e64563e5337ac640450c17ab))
* **s3:** support generating endpoints from multi-region access point ([#2742](https://github.com/aws/aws-sdk-js-v3/issues/2742)) ([49da47b](https://github.com/aws/aws-sdk-js-v3/commit/49da47b4dfde0f2c68052409aaf808eddcf4e157))
* **smithy-client:** add parse utils for sized numbers ([#2710](https://github.com/aws/aws-sdk-js-v3/issues/2710)) ([c1a7dd5](https://github.com/aws/aws-sdk-js-v3/commit/c1a7dd53ef786256c842d64c4eaccb4284e8be4f))





# [3.28.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.27.0...v3.28.0) (2021-08-27)


### Bug Fixes

* **clients:** use optional chaining while processing runtime config ([#2690](https://github.com/aws/aws-sdk-js-v3/issues/2690)) ([18469ce](https://github.com/aws/aws-sdk-js-v3/commit/18469cefc27840ba00d516265ebd976f10240496))
* **config-resolver:** add options for utility functions ([#2712](https://github.com/aws/aws-sdk-js-v3/issues/2712)) ([56ab50e](https://github.com/aws/aws-sdk-js-v3/commit/56ab50ec7765ffa3884bc3fb302a2c32ff56807b))
* **property-provider:** do not make extra provider calls when concurrent ([#2716](https://github.com/aws/aws-sdk-js-v3/issues/2716)) ([f9aa15e](https://github.com/aws/aws-sdk-js-v3/commit/f9aa15e1ce0f677f9eb469c3084ff591a1b08ba4))


### Features

* **clients:** allow setting path prefix from custom endpoints ([#2722](https://github.com/aws/aws-sdk-js-v3/issues/2722)) ([990ba2f](https://github.com/aws/aws-sdk-js-v3/commit/990ba2fe1c03cf10c3cb345cee4d137af7095f3d))
* **clients:** modular endpoints resolution ([#2704](https://github.com/aws/aws-sdk-js-v3/issues/2704)) ([88de69b](https://github.com/aws/aws-sdk-js-v3/commit/88de69ba28aaedfc7f13fa165044ef8cae023bbe))
* **clients:** update clients as of 08/27/2021 ([#2723](https://github.com/aws/aws-sdk-js-v3/issues/2723)) ([b9d88c4](https://github.com/aws/aws-sdk-js-v3/commit/b9d88c45898f272a08dc3155a00efd5f792d417f))
* **codegen:** support malformed request tests ([#2695](https://github.com/aws/aws-sdk-js-v3/issues/2695)) ([705de4e](https://github.com/aws/aws-sdk-js-v3/commit/705de4e2463f41a50c347a5e8b2a5ddf39fbef19))
* **config-resolver:** add getRegionInfo helper functions ([#2701](https://github.com/aws/aws-sdk-js-v3/issues/2701)) ([7c6a790](https://github.com/aws/aws-sdk-js-v3/commit/7c6a7901f222273f7e82f169eaaf23b08c803596))
* **smithy-client:** stricter parsing of request/response bodies ([#2713](https://github.com/aws/aws-sdk-js-v3/issues/2713)) ([0c74892](https://github.com/aws/aws-sdk-js-v3/commit/0c74892b3cbf1e288a4d5648a49f672ee48f2643))





# [3.27.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.26.0...v3.27.0) (2021-08-19)


### Bug Fixes

* **middleware-sdk-transcribe-streaming:** validate signer ([#2676](https://github.com/aws/aws-sdk-js-v3/issues/2676)) ([a937da9](https://github.com/aws/aws-sdk-js-v3/commit/a937da9552794594479ed9577f4405e030b50f16))
* **middleware-signing:** update systemClockOffset on error ([#2686](https://github.com/aws/aws-sdk-js-v3/issues/2686)) ([d1c26ee](https://github.com/aws/aws-sdk-js-v3/commit/d1c26ee712a22aa2c7c86c2769f722fed452ebcd))
* **property-provider:** stop memoizing rejected provider ([#2680](https://github.com/aws/aws-sdk-js-v3/issues/2680)) ([fac5f27](https://github.com/aws/aws-sdk-js-v3/commit/fac5f27fc2727d91be49e403a1a81005efe685d6))


### Features

* **clients:** update clients as of 08/19/2021 ([#2689](https://github.com/aws/aws-sdk-js-v3/issues/2689)) ([acbb59a](https://github.com/aws/aws-sdk-js-v3/commit/acbb59a589171a97f6a4276cb825c9c58d22d6f1))
* **clients:** update endpoint resolution as of 08/16/2021 ([#2687](https://github.com/aws/aws-sdk-js-v3/issues/2687)) ([7e3b449](https://github.com/aws/aws-sdk-js-v3/commit/7e3b449c8b8361952a90c4d136f60f59e3601ea4))
* **credential-providers:** collect credential providers in single package ([#2672](https://github.com/aws/aws-sdk-js-v3/issues/2672)) ([5375c91](https://github.com/aws/aws-sdk-js-v3/commit/5375c91f8a4d2cac6918885843718f47ce82e5d5))





# [3.26.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.25.0...v3.26.0) (2021-08-13)


### Bug Fixes

* **ci:** link in development ssdk common lib ([#2655](https://github.com/aws/aws-sdk-js-v3/issues/2655)) ([4be9ec6](https://github.com/aws/aws-sdk-js-v3/commit/4be9ec6e68d52d62563effab1330eaa7dd978eff))
* **clients:** only trim xml tag values which contain newline ([#2653](https://github.com/aws/aws-sdk-js-v3/issues/2653)) ([28336f5](https://github.com/aws/aws-sdk-js-v3/commit/28336f50cd7181f5805ec036113365d10e9a7a03))


### Features

* **clients:** update clients as of 08/13/2021 ([#2674](https://github.com/aws/aws-sdk-js-v3/issues/2674)) ([de45580](https://github.com/aws/aws-sdk-js-v3/commit/de45580769f70d5db409204f5196da5221c23d99))
* **credential-provider-imds:** support IMDS for IPv6 endpoints ([#2660](https://github.com/aws/aws-sdk-js-v3/issues/2660)) ([c458481](https://github.com/aws/aws-sdk-js-v3/commit/c458481ce07b14017a671603b79111a9958d7f0c))
* **lib-storage:** use PUT from small uploads ([#2605](https://github.com/aws/aws-sdk-js-v3/issues/2605)) ([7374720](https://github.com/aws/aws-sdk-js-v3/commit/737472069cc9255ba1d0a7230f5f86b089b2e891))





# [3.25.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.24.0...v3.25.0) (2021-08-05)


### Bug Fixes

* **md5-js:** call fromUtf8 from correct environment ([#2641](https://github.com/aws/aws-sdk-js-v3/issues/2641)) ([affa927](https://github.com/aws/aws-sdk-js-v3/commit/affa927b8d0a3646ec8e0c2bbc46a1e54bb6f545))
* **middleware-apply-body-checksum:** use lowercase content-md5 header ([#2645](https://github.com/aws/aws-sdk-js-v3/issues/2645)) ([e1f2dfc](https://github.com/aws/aws-sdk-js-v3/commit/e1f2dfcb8dbfd999829e3843bab6578518496728))
* **packages:** use HashConstructor instead of { new: Hash } ([#2638](https://github.com/aws/aws-sdk-js-v3/issues/2638)) ([6890a47](https://github.com/aws/aws-sdk-js-v3/commit/6890a47322fa37efb7a5589ab57d3273da69ac67))


### Features

* **clients:** update clients as of 08/05/2021 ([#2647](https://github.com/aws/aws-sdk-js-v3/issues/2647)) ([4dc7ff7](https://github.com/aws/aws-sdk-js-v3/commit/4dc7ff7692d020960ea827f33aeb1e593717106c))





# [3.24.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.23.0...v3.24.0) (2021-07-29)


### Bug Fixes

* **credential-provider-node:** add missing dependency ([#2623](https://github.com/aws/aws-sdk-js-v3/issues/2623)) ([9b9a3a6](https://github.com/aws/aws-sdk-js-v3/commit/9b9a3a6b9f1c6fd07469667ea111416fa55cf0c1))


### Features

* **clients:** update clients as of 07/29/2021 ([#2631](https://github.com/aws/aws-sdk-js-v3/issues/2631)) ([a34551e](https://github.com/aws/aws-sdk-js-v3/commit/a34551e2590b01aeacc40d1afd9ee1076f000a77))





# [3.23.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.22.0...v3.23.0) (2021-07-23)


### Bug Fixes

* **client-sts:** duplicate stripInternal entry in tsconfig ([#2545](https://github.com/aws/aws-sdk-js-v3/issues/2545)) ([e7bcbbc](https://github.com/aws/aws-sdk-js-v3/commit/e7bcbbcda632181c021b8a1e91185cee04a978b6))
* **clients:** allow undefined configuration ([#2617](https://github.com/aws/aws-sdk-js-v3/issues/2617)) ([a004d15](https://github.com/aws/aws-sdk-js-v3/commit/a004d1569e0b213259c50f72fddfd209fff0d7a3))
* **smithy-client:** export type explicitly ([#2598](https://github.com/aws/aws-sdk-js-v3/issues/2598)) ([e643735](https://github.com/aws/aws-sdk-js-v3/commit/e64373551195565fdde2a6cda494e3c53a1f20c3)), closes [#2597](https://github.com/aws/aws-sdk-js-v3/issues/2597)
* bump up tslib to 2.3.0 ([#2601](https://github.com/aws/aws-sdk-js-v3/issues/2601)) ([7040faa](https://github.com/aws/aws-sdk-js-v3/commit/7040faac07976c1dcfd5240675b82a2f275b2a55))


### Features

* **clients:** change runtime config from constant to provider functions ([#2574](https://github.com/aws/aws-sdk-js-v3/issues/2574)) ([5eca565](https://github.com/aws/aws-sdk-js-v3/commit/5eca565b5237a31ee4f18a2ecb4608099ccd55ac))





# [3.22.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.21.0...v3.22.0) (2021-07-16)


### Bug Fixes

* **clients:** link to Hash Interface ([#2573](https://github.com/aws/aws-sdk-js-v3/issues/2573)) ([bb7b3ed](https://github.com/aws/aws-sdk-js-v3/commit/bb7b3edc152f2c33b0e1cf2848aba4231882c36d))
* **clients:** prefix `dist/` for typesVersions TS<4 ([#2580](https://github.com/aws/aws-sdk-js-v3/issues/2580)) ([dff5cd4](https://github.com/aws/aws-sdk-js-v3/commit/dff5cd4b6fa00453e938ce8f238c1542ee7ba3d6))
* **codegen:** fix detection of -s for generate-clients ([#2588](https://github.com/aws/aws-sdk-js-v3/issues/2588)) ([c989b76](https://github.com/aws/aws-sdk-js-v3/commit/c989b7643415add4720be826257daa5610d34e88))
* **node-http-handler:** throw meaningful errors in H2 events ([#2568](https://github.com/aws/aws-sdk-js-v3/issues/2568)) ([160aeba](https://github.com/aws/aws-sdk-js-v3/commit/160aeba649e0a8be422c7fc70881e22bd544fff1))


### Features

* **clients:** update clients as of 07/16/2021 ([#2591](https://github.com/aws/aws-sdk-js-v3/issues/2591)) ([f231e7c](https://github.com/aws/aws-sdk-js-v3/commit/f231e7ca1fcc437b4503901a4af3c501d128f59f))
* **credential-provider-sso:** support sso credential when resolving shared credential file ([#2583](https://github.com/aws/aws-sdk-js-v3/issues/2583)) ([9480e70](https://github.com/aws/aws-sdk-js-v3/commit/9480e70da4ac59d4d08f01702b4e62bf42397394))
* **postinstall-node-version-check:** util to show NodeDeprecationWarning ([#2585](https://github.com/aws/aws-sdk-js-v3/issues/2585)) ([08c0342](https://github.com/aws/aws-sdk-js-v3/commit/08c0342d5e3dfd44a1f693337e0cf338663537e7))





# [3.21.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.20.0...v3.21.0) (2021-07-09)


### Bug Fixes

* **transcirbe-streaming:** set max concurrenccy to 1 ([#2563](https://github.com/aws/aws-sdk-js-v3/issues/2563)) ([fb42522](https://github.com/aws/aws-sdk-js-v3/commit/fb425225c6d2a27508333c4dd693fc1e71c56049))


### Features

* **clients:** update clients as of 07/08/2021 ([#2565](https://github.com/aws/aws-sdk-js-v3/issues/2565)) ([c9bd983](https://github.com/aws/aws-sdk-js-v3/commit/c9bd98328765c540b778f9085d0ec8870e5af6c9))
* **node-http-handler:** configure disableConcurrentStreams in NodeHttp2Handler ([#2553](https://github.com/aws/aws-sdk-js-v3/issues/2553)) ([9303bf7](https://github.com/aws/aws-sdk-js-v3/commit/9303bf7cccbfca1ac7b81d15728d03b5757e5805))





# [3.20.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.19.0...v3.20.0) (2021-07-02)


### Bug Fixes

* **protocol_tests:** add downlevel-dts script to aws-json-10 ([#2540](https://github.com/aws/aws-sdk-js-v3/issues/2540)) ([e77b926](https://github.com/aws/aws-sdk-js-v3/commit/e77b926c739bcf8fd673a6f2725116ef6865c6c0))
* replace prepublishOnly script with downlevel-dts ([#2537](https://github.com/aws/aws-sdk-js-v3/issues/2537)) ([63818a1](https://github.com/aws/aws-sdk-js-v3/commit/63818a1e47b08af56f092031a01bbbff0a9af590))


### Features

* **clients:** update clients as of 07/01/2021 ([#2542](https://github.com/aws/aws-sdk-js-v3/issues/2542)) ([ed301ba](https://github.com/aws/aws-sdk-js-v3/commit/ed301ba3c10decdd84fb79ddc7ccf5c87072e7b9))





# [3.19.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.18.0...v3.19.0) (2021-06-24)


### Bug Fixes

* **@aws-sdk/lib-dynamodb:** correct homepage URL in package.json ([#2485](https://github.com/aws/aws-sdk-js-v3/issues/2485)) ([ff9df37](https://github.com/aws/aws-sdk-js-v3/commit/ff9df374ef503a1af34978a31a129035b0b52415))
* **clients:** documentation for config.region for new clients ([#2468](https://github.com/aws/aws-sdk-js-v3/issues/2468)) ([3bd30bb](https://github.com/aws/aws-sdk-js-v3/commit/3bd30bb798cee9739b98842cfdca5a6b60dec124))
* **clients:** parse status code bindings in rest protocols ([#2483](https://github.com/aws/aws-sdk-js-v3/issues/2483)) ([6d4e6b5](https://github.com/aws/aws-sdk-js-v3/commit/6d4e6b5c2ad4e4b99b9079008afeef3d932c0bb1))
* **credential-provider-imds:** destroy request handle on promise resolve/reject ([#2452](https://github.com/aws/aws-sdk-js-v3/issues/2452)) ([122c139](https://github.com/aws/aws-sdk-js-v3/commit/122c13976311de921155dc62f6ccd07b139c274a))
* **protocol_tests:** format files using prettier v2.3.0 ([#2467](https://github.com/aws/aws-sdk-js-v3/issues/2467)) ([cce6231](https://github.com/aws/aws-sdk-js-v3/commit/cce62317e862f9ebf91ba991c4e2dabb5c59f55a))
* **s3-request-presigner:** remove x-amz-user-agent header ([#2493](https://github.com/aws/aws-sdk-js-v3/issues/2493)) ([019292b](https://github.com/aws/aws-sdk-js-v3/commit/019292ba73d2a64280c30b10819924330b1f4f16))
* **smithy-client:** use uppercase for percent encodings ([#2500](https://github.com/aws/aws-sdk-js-v3/issues/2500)) ([6ef34b5](https://github.com/aws/aws-sdk-js-v3/commit/6ef34b51263ff9278c311bb4f1927995d2036954))


### Features

* **client-s3:** add md5 header for operations with httpChecksumRequired trait ([#2507](https://github.com/aws/aws-sdk-js-v3/issues/2507)) ([cec0692](https://github.com/aws/aws-sdk-js-v3/commit/cec069255c4a0af55b451dd9688251bdf8e35b2a))
* **clients:** update clients as of 06/17/2021 ([#2501](https://github.com/aws/aws-sdk-js-v3/issues/2501)) ([19bd800](https://github.com/aws/aws-sdk-js-v3/commit/19bd800233490de726cf38a292f835371c2a24a5))
* **credential-provider-node:** throw cannot load credential error from credentail chain ([#2408](https://github.com/aws/aws-sdk-js-v3/issues/2408)) ([5e0a46a](https://github.com/aws/aws-sdk-js-v3/commit/5e0a46a9f4a35cdb200f7eccef09fb4c6ad76e9c))
* **lib:** change higher level libs use peer deps on clients ([#2516](https://github.com/aws/aws-sdk-js-v3/issues/2516)) ([2e662cd](https://github.com/aws/aws-sdk-js-v3/commit/2e662cd6e157295813c1fb25d7df055675026e17))





# [3.18.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.17.0...v3.18.0) (2021-06-04)


### Bug Fixes

* **client-sts:** allow overwriting default role assumer http handler ([#2426](https://github.com/aws/aws-sdk-js-v3/issues/2426)) ([7985995](https://github.com/aws/aws-sdk-js-v3/commit/7985995e7a135bf6ed65c29097c01c63c0d41230))


### Features

* **clients:** update clients as of 06/03/2021 ([#2464](https://github.com/aws/aws-sdk-js-v3/issues/2464)) ([14e8fbf](https://github.com/aws/aws-sdk-js-v3/commit/14e8fbf696c9623643e609bfbb702916e36b057a))
* support Sigv4 for non AWS services ([#2385](https://github.com/aws/aws-sdk-js-v3/issues/2385)) ([0a251aa](https://github.com/aws/aws-sdk-js-v3/commit/0a251aa44d54fbf21e328ccf2b20db45e94aaa90)), closes [/github.com/awslabs/smithy/blob/main/smithy-aws-protocol-tests/model/restJson1/main.smithy#L11-L13](https://github.com//github.com/awslabs/smithy/blob/main/smithy-aws-protocol-tests/model/restJson1/main.smithy/issues/L11-L13)
* **clients:** add retryModeProvider in runtimeConfig ([#2440](https://github.com/aws/aws-sdk-js-v3/issues/2440)) ([fc0a5da](https://github.com/aws/aws-sdk-js-v3/commit/fc0a5dae2c13814d5a0c5fce1d892ce0e97c98e4))
* **codegen:** add user agent for non AWS clients ([#2415](https://github.com/aws/aws-sdk-js-v3/issues/2415)) ([6d1a555](https://github.com/aws/aws-sdk-js-v3/commit/6d1a5551a232ba7811e25ed2d65a24d5d2689f88))
* **middleware-retry:** add Adaptive Retry Strategy ([#2454](https://github.com/aws/aws-sdk-js-v3/issues/2454)) ([0c9a143](https://github.com/aws/aws-sdk-js-v3/commit/0c9a14391b4a9193cad4fa533a39ff5e0296c1c5))
* **middleware-retry:** add client side rate limiter for adaptive mode ([#2439](https://github.com/aws/aws-sdk-js-v3/issues/2439)) ([8ef104d](https://github.com/aws/aws-sdk-js-v3/commit/8ef104d00eac33cf1a94c54e2daa2d1bff89a0a4))
* **middleware-retry:** call retry strategy based on value in retryMode ([#2456](https://github.com/aws/aws-sdk-js-v3/issues/2456)) ([095b990](https://github.com/aws/aws-sdk-js-v3/commit/095b9906889befb2d2ad8e77432f335b10b3f81c))





# [3.17.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.16.0...v3.17.0) (2021-05-26)


### Bug Fixes

* **endpoint-cache:** reduce bundle size ([#2400](https://github.com/aws/aws-sdk-js-v3/issues/2400)) ([b157173](https://github.com/aws/aws-sdk-js-v3/commit/b1571731eef59271e1efb14d11a05854ad867ab9))


### Features

* **client-ssm-incidents:** rename client-commander package to client-ssm-incidents ([#2431](https://github.com/aws/aws-sdk-js-v3/issues/2431)) ([e4f6fea](https://github.com/aws/aws-sdk-js-v3/commit/e4f6fea374f1e571db6991894b2a918e4d421c38))
* **clients:** update endpoint resolution as of 05/12/2021 ([#2398](https://github.com/aws/aws-sdk-js-v3/issues/2398)) ([17afcbb](https://github.com/aws/aws-sdk-js-v3/commit/17afcbb65bb26f091ba258717716272d5dc4e2c7))





# [3.16.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.15.0...v3.16.0) (2021-05-14)


### Bug Fixes

* **client-finspace:** update internal dependency versions ([#2382](https://github.com/aws/aws-sdk-js-v3/issues/2382)) ([3cf3b32](https://github.com/aws/aws-sdk-js-v3/commit/3cf3b3237b18d0415fe6e852a14682decbaa9694))
* **clients:** call decode from HTML entities in XML parser ([#2381](https://github.com/aws/aws-sdk-js-v3/issues/2381)) ([fd6b7eb](https://github.com/aws/aws-sdk-js-v3/commit/fd6b7ebd7d3fc4a2ceb3b016404de73413e1fb2f))


### Features

* **clients:** enable Endpoint Discovery ([#2395](https://github.com/aws/aws-sdk-js-v3/issues/2395)) ([019c099](https://github.com/aws/aws-sdk-js-v3/commit/019c099c3238cd83e863c006ea51baa2535af77d))
* **clients:** update clients as of 05/10/2021 ([#2373](https://github.com/aws/aws-sdk-js-v3/issues/2373)) ([ed302dc](https://github.com/aws/aws-sdk-js-v3/commit/ed302dc3138c0730dba3b660be77b962a2d37607))
* **clients:** update clients as of 05/14/2021 ([#2396](https://github.com/aws/aws-sdk-js-v3/issues/2396)) ([187c42a](https://github.com/aws/aws-sdk-js-v3/commit/187c42ae0f64ac17700eb02746b787b9fc52fc8e))
* **endpoint-cache:** add EndpointCache for Endpoint Discovery ([#2355](https://github.com/aws/aws-sdk-js-v3/issues/2355)) ([f164177](https://github.com/aws/aws-sdk-js-v3/commit/f164177bf3cc1bb7986d38e9a4ded1e6723779c9))
* **middleware-bucket-endpoint:** arn supports fips & handles global regions ([#2392](https://github.com/aws/aws-sdk-js-v3/issues/2392)) ([7b32494](https://github.com/aws/aws-sdk-js-v3/commit/7b32494c808393a9c6d8273d82c8abe3c00f3fe1))
* **middleware-endpoint-discovery:** add middleware for Endpoint Discovery ([#2369](https://github.com/aws/aws-sdk-js-v3/issues/2369)) ([7f297dc](https://github.com/aws/aws-sdk-js-v3/commit/7f297dc651651687de1b4841380914f86238637f))





# [3.15.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.14.0...v3.15.0) (2021-05-10)


### Bug Fixes

* **client-sts:** make role assumer source creds refreshable ([#2353](https://github.com/aws/aws-sdk-js-v3/issues/2353)) ([9756954](https://github.com/aws/aws-sdk-js-v3/commit/9756954e071c32b62906be63c9431c5602062468))
* **middleware-retry:** defaultStrategy handles any error ([#2349](https://github.com/aws/aws-sdk-js-v3/issues/2349)) ([e5b876f](https://github.com/aws/aws-sdk-js-v3/commit/e5b876f56eb97698d7ed9a6b29c3cbedd0187cba))
* **node-http-handler:** handle NodeHttp2Handler session failure ([#2289](https://github.com/aws/aws-sdk-js-v3/issues/2289)) ([e97e357](https://github.com/aws/aws-sdk-js-v3/commit/e97e357630f6bd7ea565f182330315d01484b1cc))


### Features

* **clients:** adding throwable waiters WaitUntil[operationState] ([#2302](https://github.com/aws/aws-sdk-js-v3/issues/2302)) ([f01d5ae](https://github.com/aws/aws-sdk-js-v3/commit/f01d5ae5e0e81ecc122dba2d2883352c1b86c3bb))
* **credential-provider-node:** add web identity provider to credential provider chain ([#2260](https://github.com/aws/aws-sdk-js-v3/issues/2260)) ([3dd31c4](https://github.com/aws/aws-sdk-js-v3/commit/3dd31c4a8838e4cda8dbc532d78feb937a48183b))





# [3.14.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.13.1...v3.14.0) (2021-04-30)


### Bug Fixes

* **clients:** typo in README difference -> different ([#2314](https://github.com/aws/aws-sdk-js-v3/issues/2314)) ([9ac1f40](https://github.com/aws/aws-sdk-js-v3/commit/9ac1f40eea78075e6b301df50cfae17c19ad77c3))
* **middleware-user-agent-header:** swap user agent headers for non-browser environments ([#2313](https://github.com/aws/aws-sdk-js-v3/issues/2313)) ([d8c1dc2](https://github.com/aws/aws-sdk-js-v3/commit/d8c1dc2b203ae6c42659a75c4a161420824c0504))
* **xml-builder:** xml entity encoding for more characters ([#2309](https://github.com/aws/aws-sdk-js-v3/issues/2309)) ([96ff164](https://github.com/aws/aws-sdk-js-v3/commit/96ff1641f678bb0ead81a4b4ea30f75236dfc7d1))


### Features

* **clients:** update clients as of 04/29/2021 ([#2329](https://github.com/aws/aws-sdk-js-v3/issues/2329)) ([48ab750](https://github.com/aws/aws-sdk-js-v3/commit/48ab75045d1a94adfae94ac638a0dd882ebd05ac))





## [3.13.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.13.0...v3.13.1) (2021-04-22)


### Bug Fixes

* **e2e:** explicitly use ChromeHeadless with no-sandbox ([#2266](https://github.com/aws/aws-sdk-js-v3/issues/2266)) ([7371971](https://github.com/aws/aws-sdk-js-v3/commit/7371971d8182f1b3d10d02fb4162b057c9f80d2d))





# [3.13.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.12.0...v3.13.0) (2021-04-15)


### Bug Fixes

* **client-s3:** return GetBucketPolicyOutput without parsing ([#2236](https://github.com/aws/aws-sdk-js-v3/issues/2236)) ([3a031d9](https://github.com/aws/aws-sdk-js-v3/commit/3a031d972f07dd88215256a1509f4222709957cf))
* **lib-dynamodb:** remove stripInternal=true from tsconfig ([#2264](https://github.com/aws/aws-sdk-js-v3/issues/2264)) ([81f5ccd](https://github.com/aws/aws-sdk-js-v3/commit/81f5ccd086f5166a04a30c258fa4e3591583eb4e))


### Features

* **client-lex-runtime-v2:** add http2 support ([#2127](https://github.com/aws/aws-sdk-js-v3/issues/2127)) ([7135cd6](https://github.com/aws/aws-sdk-js-v3/commit/7135cd6266101c9dfc4893f4fe18b5d85e2dbd8c))
* **clients:** update clients as of 04/14/2021 ([#2258](https://github.com/aws/aws-sdk-js-v3/issues/2258)) ([4f9f4a7](https://github.com/aws/aws-sdk-js-v3/commit/4f9f4a79b019c1c35530e05c4138fde88a6fb547))
* **credential-provider-ini:** support credential_source in shared file ([#2237](https://github.com/aws/aws-sdk-js-v3/issues/2237)) ([135a12c](https://github.com/aws/aws-sdk-js-v3/commit/135a12c5554ef75cef21a6b5e4b496b55afedfe2))
* remove @aws-sdk/url-parser-native in favor of react-native-url-polyfill ([#2229](https://github.com/aws/aws-sdk-js-v3/issues/2229)) ([d6a67d7](https://github.com/aws/aws-sdk-js-v3/commit/d6a67d7cd471e3440fa7b23ba00b11c00b10a566))





# [3.12.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.11.0...v3.12.0) (2021-04-09)


### Bug Fixes

* **credential-provider-cognito-identity:** add identityId to return type of fromCognitoIdentity ([#2141](https://github.com/aws/aws-sdk-js-v3/issues/2141)) ([5ae46f6](https://github.com/aws/aws-sdk-js-v3/commit/5ae46f645327216f5f06c5cddc48523ff0d9e19e))
* **deps:** request consumers to install react-native polyfills ([#2191](https://github.com/aws/aws-sdk-js-v3/issues/2191)) ([2d3a7f0](https://github.com/aws/aws-sdk-js-v3/commit/2d3a7f0b74e168b15711783c72f9bc301a48041e))
* **s3-presigned-post:** type PresignedPost.fields ([#1709](https://github.com/aws/aws-sdk-js-v3/issues/1709)) ([020193b](https://github.com/aws/aws-sdk-js-v3/commit/020193bcf6a0601680df248e163c01d975d5f699))
* **util-user-agent-browser:** `window` can be undefined ([#2214](https://github.com/aws/aws-sdk-js-v3/issues/2214)) ([98b65b9](https://github.com/aws/aws-sdk-js-v3/commit/98b65b9c14495e5c63bb0d77ac25ce32658c40af))
* **util-user-agent-node:** should memoize app id ([#2223](https://github.com/aws/aws-sdk-js-v3/issues/2223)) ([fd40114](https://github.com/aws/aws-sdk-js-v3/commit/fd4011491fcd1f8968375d5d7e61c26c5db70152))
* run downlevel-dts in prepublishOnly ([#2218](https://github.com/aws/aws-sdk-js-v3/issues/2218)) ([0745502](https://github.com/aws/aws-sdk-js-v3/commit/0745502dcf819460ee1d81362470859674c757a7))
* **util-user-agent-browser:** react native metadata ([#2210](https://github.com/aws/aws-sdk-js-v3/issues/2210)) ([0e83313](https://github.com/aws/aws-sdk-js-v3/commit/0e83313d82176c880632d8bc5bda1d577f016fc6))


### Features

* support default role assumers ([#2221](https://github.com/aws/aws-sdk-js-v3/issues/2221)) ([ae17f4c](https://github.com/aws/aws-sdk-js-v3/commit/ae17f4c64f0390c9b879eb27390688ac156cac47))





# [3.11.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.10.0...v3.11.0) (2021-04-01)


### Bug Fixes

* **clients:** trim values in parsed xml only if result is empty ([#2194](https://github.com/aws/aws-sdk-js-v3/issues/2194)) ([a990db7](https://github.com/aws/aws-sdk-js-v3/commit/a990db7deb0e672ec8bd4545111bb2523fe5bf28))
* **codegen:** pass settings to createSymbolProvider ([#2196](https://github.com/aws/aws-sdk-js-v3/issues/2196)) ([94aefce](https://github.com/aws/aws-sdk-js-v3/commit/94aefcecd0a35077340ac35be4e2b3b5bae3f4ea))


### Features

* **credential-provider-web-identity:** support web federated identity ([#2203](https://github.com/aws/aws-sdk-js-v3/issues/2203)) ([ff87e22](https://github.com/aws/aws-sdk-js-v3/commit/ff87e2297ac8748b0f2c26cdacfc5d19233889db))





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
