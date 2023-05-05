# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.328.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.327.0...v3.328.0) (2023-05-05)


### Bug Fixes

* **node-http-handler:** call socket.setKeepAlive if enabled in http(s)Agent ([#4561](https://github.com/aws/aws-sdk-js-v3/issues/4561)) ([bd16ace](https://github.com/aws/aws-sdk-js-v3/commit/bd16ace6c19ba7644742b684418b179e9745c2b9))


### Features

* **client-ec2:** This release adds support the inf2 and trn1n instances. inf2 instances are purpose built for deep learning inference while trn1n instances are powered by AWS Trainium accelerators and they build on the capabilities of Trainium-powered trn1 instances. ([81d3554](https://github.com/aws/aws-sdk-js-v3/commit/81d3554c4abecc9eae694c91e59655b0286ad259))
* **client-inspector2:** Amazon Inspector now allows customers to search its vulnerability intelligence database if any of the Inspector scanning types are activated. ([71466f2](https://github.com/aws/aws-sdk-js-v3/commit/71466f217f53f97f90acc7c9fcd046c6d35dd836))
* **client-mediatailor:** This release adds support for AFTER_LIVE_EDGE mode configuration for avail suppression, and adding a fill-policy setting that sets the avail suppression to PARTIAL_AVAIL or FULL_AVAIL_ONLY when AFTER_LIVE_EDGE is enabled. ([03ea04c](https://github.com/aws/aws-sdk-js-v3/commit/03ea04cc448e5fd112762817af64adc4df49b870))
* **client-sqs:** Revert previous SQS protocol change. ([75d4246](https://github.com/aws/aws-sdk-js-v3/commit/75d42466d12b4d059b61ea1a7c10902c5f18fee3))





# [3.327.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.326.0...v3.327.0) (2023-05-04)


### Bug Fixes

* **service-error-classification:** add ECONNREFUSED to list of retryable errors ([#4693](https://github.com/aws/aws-sdk-js-v3/issues/4693)) ([d305472](https://github.com/aws/aws-sdk-js-v3/commit/d305472e9e64873e1d82cea78e974e5dd0460e8b))


### Features

* **client-cloudwatch:** Adds support for filtering by metric names in CloudWatch Metric Streams. ([6666673](https://github.com/aws/aws-sdk-js-v3/commit/6666673a423609f3fd49e962ef6134c4463d603e))
* **client-config-service:** Updated ResourceType enum with new resource types onboarded by AWS Config in April 2023. ([a45b0da](https://github.com/aws/aws-sdk-js-v3/commit/a45b0da34b41bbadc589395f1ea3e770b2fadde0))
* **client-ecs:** Documentation update for new error type NamespaceNotFoundException for CreateCluster and UpdateCluster ([fd48f2d](https://github.com/aws/aws-sdk-js-v3/commit/fd48f2dd3272ff5889f758ae0a6c08094d820fec))
* **client-network-firewall:** This release adds support for the Suricata REJECT option in midstream exception configurations. ([15cffb4](https://github.com/aws/aws-sdk-js-v3/commit/15cffb46ab6a962e787a27f744b053c8591921a1))
* **client-opensearch:** DescribeDomainNodes: A new API that provides configuration information for nodes part of the domain ([4f67883](https://github.com/aws/aws-sdk-js-v3/commit/4f67883aa5a8a40bc3ba42ce3d7518abd51c23a0))
* **client-quicksight:** Add support for Topic, Dataset parameters and VPC ([e057ab9](https://github.com/aws/aws-sdk-js-v3/commit/e057ab9b6bfd7475086810420fb7dacb24cbfed7))
* **client-rekognition:** This release adds a new attribute FaceOccluded. Additionally, you can now select attributes individually (e.g. ["DEFAULT", "FACE_OCCLUDED", "AGE_RANGE"] instead of ["ALL"]), which can reduce response time. ([e71366a](https://github.com/aws/aws-sdk-js-v3/commit/e71366ab8041184e34bea74277d663d367d1d584))
* **client-sagemaker:** We added support for ml.inf2 and ml.trn1 family of instances on Amazon SageMaker for deploying machine learning (ML) models for Real-time and Asynchronous inference. You can use these instances to achieve high performance at a low cost for generative artificial intelligence (AI) models. ([02db558](https://github.com/aws/aws-sdk-js-v3/commit/02db558bf281c4cab5910a7f3a400c63a1d5db7c))
* **client-securityhub:** Add support for Finding History. ([7929075](https://github.com/aws/aws-sdk-js-v3/commit/7929075dc743ac68fc6f87020108b10980c66b88))
* **client-sqs:** This release enables customers to call SQS using AWS JSON-1.0 protocol. ([b3f5a9d](https://github.com/aws/aws-sdk-js-v3/commit/b3f5a9d536b2b92c9e0a6856b90dfaed0d3b7db1))





# [3.326.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.325.0...v3.326.0) (2023-05-03)


### Features

* **client-appsync:** Private API support for AWS AppSync. With Private APIs, you can now create GraphQL APIs that can only be accessed from your Amazon Virtual Private Cloud ("VPC"). ([c28aac2](https://github.com/aws/aws-sdk-js-v3/commit/c28aac2d49a48095078fa283b6f52acc3fd537c7))
* **client-ec2:** Adds an SDK paginator for GetNetworkInsightsAccessScopeAnalysisFindings ([ed4b264](https://github.com/aws/aws-sdk-js-v3/commit/ed4b26446960bb721350031cfaa6aa794b673bb7))
* **client-inspector2:** This feature provides deep inspection for linux based instance ([0fa21fd](https://github.com/aws/aws-sdk-js-v3/commit/0fa21fd2d25fd8fc11a57359aeb2f9f83ec9e463))
* **client-iottwinmaker:** This release adds a field for GetScene API to return error code and message from dependency services. ([653fc59](https://github.com/aws/aws-sdk-js-v3/commit/653fc591c8cca23ca23682dd8f0242489ff9a64b))
* **client-network-firewall:** AWS Network Firewall now supports policy level HOME_NET variable overrides. ([aef051a](https://github.com/aws/aws-sdk-js-v3/commit/aef051afc96434eed02ca3a577a5b08805e5f0e7))
* **client-opensearch:** Amazon OpenSearch Service adds the option to deploy a domain across multiple Availability Zones, with each AZ containing a complete copy of data and with nodes in one AZ acting as a standby. This option provides 99.99% availability and consistent performance in the event of infrastructure failure. ([bd6c71a](https://github.com/aws/aws-sdk-js-v3/commit/bd6c71a898ce79383e0be842b58718ddf48888a2))
* **client-wellarchitected:** This release deepens integration with AWS Service Catalog AppRegistry to improve workload resource discovery. ([560a299](https://github.com/aws/aws-sdk-js-v3/commit/560a29964b8c186a6ae853361308760d4d908edf))





# [3.325.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.324.0...v3.325.0) (2023-05-02)


### Features

* **client-appflow:** This release adds new API to cancel flow executions. ([e139022](https://github.com/aws/aws-sdk-js-v3/commit/e139022e91872bd549d743cc0c943b975a584e7b))
* **client-connect:** Amazon Connect Service Rules API update: Added OnContactEvaluationSubmit event source to support user configuring evaluation form rules. ([be236b1](https://github.com/aws/aws-sdk-js-v3/commit/be236b181494043a10e05e22870e95f5df8a3337))
* **client-kendra:** AWS Kendra now supports configuring document fields/attributes via the GetQuerySuggestions API. You can now base query suggestions on the contents of document fields. ([4e715d7](https://github.com/aws/aws-sdk-js-v3/commit/4e715d7951b0d6d4e9f892d26f60333360402c97))
* **client-resiliencehub:** This release will improve resource level transparency in applications by discovering previously hidden resources. ([91006ef](https://github.com/aws/aws-sdk-js-v3/commit/91006efc4fb124896956e26eb10db6837b81a568))
* **client-sagemaker:** Amazon Sagemaker Autopilot supports training models with sample weights and additional objective metrics. ([52e716a](https://github.com/aws/aws-sdk-js-v3/commit/52e716ada4db660cafcf17206f0a27c99d122899))
* **clients:** update client endpoints as of 2023-05-02 ([109fa1c](https://github.com/aws/aws-sdk-js-v3/commit/109fa1cf6098536acb95092d359aedc3caad7f2e))
* **codegen:** bump codegen version to 0.15.0 ([#4678](https://github.com/aws/aws-sdk-js-v3/issues/4678)) ([83421a1](https://github.com/aws/aws-sdk-js-v3/commit/83421a1d562d79cb49a534543532674ffb822f8b))


### Reverts

* Revert "feat(codegen): bump codegen version to 0.15.0 (#4678)" (#4689) ([f75bf2c](https://github.com/aws/aws-sdk-js-v3/commit/f75bf2c64e8a9522ad05fad0d8fe7bf88a3bca2b)), closes [#4678](https://github.com/aws/aws-sdk-js-v3/issues/4678) [#4689](https://github.com/aws/aws-sdk-js-v3/issues/4689)





# [3.324.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.323.0...v3.324.0) (2023-05-01)


### Features

* **client-compute-optimizer:** support for tag filtering within compute optimizer. ability to filter recommendation results by tag and tag key value pairs. ability to filter by inferred workload type added. ([b94aa0e](https://github.com/aws/aws-sdk-js-v3/commit/b94aa0e593f55ad5db97cc536baaa1dddc1f1bd2))
* **client-kms:** This release makes the NitroEnclave request parameter Recipient and the response field for CiphertextForRecipient available in AWS SDKs. It also adds the regex pattern for CloudHsmClusterId validation. ([07967b9](https://github.com/aws/aws-sdk-js-v3/commit/07967b91bb4d443ab4d93d62efe3c49a539e5d19))
* **clients:** update client endpoints as of 2023-05-01 ([22c65b2](https://github.com/aws/aws-sdk-js-v3/commit/22c65b2b122bbb7b982ccf11c78b667e0edf5f58))





# [3.323.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.322.0...v3.323.0) (2023-04-28)


### Features

* **client-appflow:** Adds Jwt Support for Salesforce Credentials. ([4b0c7f8](https://github.com/aws/aws-sdk-js-v3/commit/4b0c7f8062c1dfb22aa9cac35d46b3f269eb1f08))
* **client-athena:** You can now use capacity reservations on Amazon Athena to run SQL queries on fully-managed compute capacity. ([9dacbe7](https://github.com/aws/aws-sdk-js-v3/commit/9dacbe7d6dd910cceda03dba3bfaba0ff1d27813))
* **client-efs:** This release adds PAUSED and PAUSING state as a returned value for DescribeReplicationConfigurations response. ([9661c39](https://github.com/aws/aws-sdk-js-v3/commit/9661c398b271eb1cacd4d997fde7a30198eb156b))
* **client-grafana:** This release adds support for the grafanaVersion parameter in CreateWorkspace. ([edbae69](https://github.com/aws/aws-sdk-js-v3/commit/edbae69f24a15ae482e351bd04e53fdcaa51db36))
* **client-iot:** This release allows AWS IoT Core users to specify a TLS security policy when creating and updating AWS IoT Domain Configurations. ([a84b270](https://github.com/aws/aws-sdk-js-v3/commit/a84b27096f2f3073eef51784cd4925d7700751a8))
* **client-rekognition:** Added support for aggregating moderation labels by video segment timestamps for Stored Video Content Moderation APIs and added additional information about the job to all Stored Video Get API responses. ([c05f2a1](https://github.com/aws/aws-sdk-js-v3/commit/c05f2a1eb309b7915243ea6526c5ff0a44900a24))
* **client-simspaceweaver:** Added a new CreateSnapshot API. For the StartSimulation API, SchemaS3Location is now optional, added a new SnapshotS3Location parameter. For the DescribeSimulation API, added SNAPSHOT_IN_PROGRESS simulation state, deprecated SchemaError, added new fields: StartError and SnapshotS3Location. ([0a25cd2](https://github.com/aws/aws-sdk-js-v3/commit/0a25cd2579c16716f954a0cd6dad04a3e35bfb54))
* **client-wafv2:** You can now associate a web ACL with a Verified Access instance. ([1526186](https://github.com/aws/aws-sdk-js-v3/commit/15261865b8064d588169af3946cf1baf11b2b3a1))
* **clients:** update client endpoints as of 2023-04-28 ([87f9a0c](https://github.com/aws/aws-sdk-js-v3/commit/87f9a0c03ecbe853dd303202a59a0910df1ee09e))





# [3.322.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.321.1...v3.322.0) (2023-04-27)


### Features

* **client-ec2:** This release adds support for AMD SEV-SNP on EC2 instances. ([c57a8bf](https://github.com/aws/aws-sdk-js-v3/commit/c57a8bf3a499e5838896e485354947f1521042bc))
* **client-emr-containers:** This release adds GetManagedEndpointSessionCredentials, a new API that allows customers to generate an auth token to connect to a managed endpoint, enabling features such as self-hosted Jupyter notebooks for EMR on EKS. ([ab0a6d0](https://github.com/aws/aws-sdk-js-v3/commit/ab0a6d0fa36a11d6138fe6721bcd481e99e5e191))
* **client-guardduty:** Added API support to initiate on-demand malware scan on specific resources. ([309ab61](https://github.com/aws/aws-sdk-js-v3/commit/309ab61b1a9af25acefb51c63fb8192788d94373))
* **client-iotdeviceadvisor:** AWS IoT Core Device Advisor now supports MQTT over WebSocket. With this update, customers can run all three test suites of AWS IoT Core Device Advisor - qualification, custom, and long duration tests - using Signature Version 4 for MQTT over WebSocket. ([8e370f2](https://github.com/aws/aws-sdk-js-v3/commit/8e370f247e6f320ce1829dca13485b35c22eb6c6))
* **client-kafka:** Amazon MSK has added new APIs that allows multi-VPC private connectivity and cluster policy support for Amazon MSK clusters that simplify connectivity and access between your Apache Kafka clients hosted in different VPCs and AWS accounts and your Amazon MSK clusters. ([701a7a1](https://github.com/aws/aws-sdk-js-v3/commit/701a7a1b811628c4d61093484c597f4820203cb1))
* **client-lambda:** Add Java 17 (java17) support to AWS Lambda ([5e95e01](https://github.com/aws/aws-sdk-js-v3/commit/5e95e01b37eaf9bfbb79cda2961cd6c191b64568))
* **client-marketplace-catalog:** Enabled Pagination for List Entities and List Change Sets operations ([4df226f](https://github.com/aws/aws-sdk-js-v3/commit/4df226f47d4abe84bc2c2246b753c04e83390478))
* **client-sagemaker:** Added ml.p4d.24xlarge and ml.p4de.24xlarge as supported instances for SageMaker Studio ([d7edbd5](https://github.com/aws/aws-sdk-js-v3/commit/d7edbd52a764fc945440d263c3d642ca8c213e6b))
* **clients:** update client endpoints as of 2023-04-27 ([bdc2c81](https://github.com/aws/aws-sdk-js-v3/commit/bdc2c810265ac2a7d61a8bedd468befc1c466e6d))





## [3.321.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.321.0...v3.321.1) (2023-04-27)


### Bug Fixes

* **clients:** deserialization of jsonName complex shapes ([#4670](https://github.com/aws/aws-sdk-js-v3/issues/4670)) ([d79d141](https://github.com/aws/aws-sdk-js-v3/commit/d79d1414b5af2b985631127a3b3cdc03956a5dc8))
* **node-http-handler:** undeprecate connectionTimeout ([#4669](https://github.com/aws/aws-sdk-js-v3/issues/4669)) ([79c46f3](https://github.com/aws/aws-sdk-js-v3/commit/79c46f35f6dace05b54d328d0632604a0fec8f85))





# [3.321.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.320.0...v3.321.0) (2023-04-26)


### Bug Fixes

* **e2e:** typo folder name integ-e2e -> e2e-legacy ([#4667](https://github.com/aws/aws-sdk-js-v3/issues/4667)) ([2c52c53](https://github.com/aws/aws-sdk-js-v3/commit/2c52c5339691ef374df06a0a74fb71191e267c7e))


### Features

* **client-osis:** Initial release for OpenSearch Ingestion ([81e58f6](https://github.com/aws/aws-sdk-js-v3/commit/81e58f6a03a48177e6c63bb413067c9205a81c36))
* **clients:** update client endpoints as of 2023-04-26 ([5aa11d8](https://github.com/aws/aws-sdk-js-v3/commit/5aa11d872e98db669acf89918d756a42a6e095a4))





# [3.320.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.319.0...v3.320.0) (2023-04-25)


### Features

* **client-chime-sdk-messaging:** Remove non actionable field from UpdateChannelReadMarker and DeleteChannelRequest.  Add precise exceptions to DeleteChannel and DeleteStreamingConfigurations error cases. ([66d271f](https://github.com/aws/aws-sdk-js-v3/commit/66d271f492cd5627a4ea72bf85b4583652587585))
* **client-connect:** Amazon Connect, Contact Lens Evaluation API release including ability to manage forms and to submit contact evaluations. ([9ab9bfb](https://github.com/aws/aws-sdk-js-v3/commit/9ab9bfb7fc94b981ed83a5b641fc21b7a64616e2))
* **client-datasync:** This release adds 13 new APIs to support AWS DataSync Discovery GA. ([ff9754a](https://github.com/aws/aws-sdk-js-v3/commit/ff9754a2ed3fda573f1f91865928336d919fde37))
* **client-directory-service:** New field added in AWS Managed Microsoft AD DescribeSettings response and regex pattern update for UpdateSettings value.  Added length validation to RemoteDomainName. ([6664a0e](https://github.com/aws/aws-sdk-js-v3/commit/6664a0e830d3c73643d4bd648e9cf8710fb2e39e))
* **client-pinpoint:** Adds support for journey runs and querying journey execution metrics based on journey runs. Adds execution metrics to campaign activities. Updates docs for Advanced Quiet Time. ([914700e](https://github.com/aws/aws-sdk-js-v3/commit/914700ed4378cdd7edafaca2a94051caf82a1c1d))
* **clients:** update client endpoints as of 2023-04-25 ([f678d63](https://github.com/aws/aws-sdk-js-v3/commit/f678d6311dddc39e376e9423a9e1cda4d7076c37))





# [3.319.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.318.0...v3.319.0) (2023-04-24)


### Bug Fixes

* **aws-util-test:** add downlevel script ([2ef9890](https://github.com/aws/aws-sdk-js-v3/commit/2ef9890435b530f7b7d1cc7f622826f895418ea1))


### Features

* **client-appflow:** Increased the max length for RefreshToken and AuthCode from 2048 to 4096. ([a0ab81d](https://github.com/aws/aws-sdk-js-v3/commit/a0ab81d3ecac3af2362e90892b06f07eda8b1d5d))
* **client-ec2:** API changes to AWS Verified Access related to identity providers' information. ([5e3d812](https://github.com/aws/aws-sdk-js-v3/commit/5e3d812ccab033ba391ad1b6e0f6907650e1c39f))
* **client-mediaconvert:** This release introduces a noise reduction pre-filter, linear interpolation deinterlace mode, video pass-through, updated default job settings, and expanded LC-AAC Stereo audio bitrate ranges. ([9f22239](https://github.com/aws/aws-sdk-js-v3/commit/9f22239a6cc8b6186db90d4809ec88fecbc675cf))
* **client-rekognition:** Added new status result to Liveness session status. ([4e3e36f](https://github.com/aws/aws-sdk-js-v3/commit/4e3e36fa92f5bee61ac125a29b4214a7c08a2baa))
* **clients:** update client endpoints as of 2023-04-24 ([8f7cbae](https://github.com/aws/aws-sdk-js-v3/commit/8f7cbae39f84aab26d08811ad55427f84e321117))





# [3.318.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.317.0...v3.318.0) (2023-04-21)


### Features

* **client-connect:** This release adds a new API CreateParticipant. For Amazon Connect Chat, you can use this new API to customize chat flow experiences. ([257af63](https://github.com/aws/aws-sdk-js-v3/commit/257af63e876d3077f5b3be5f0089483622f6df90))
* **client-fms:** AWS Firewall Manager adds support for multiple administrators. You can now delegate more than one administrator per organization. ([960ae09](https://github.com/aws/aws-sdk-js-v3/commit/960ae09b1a12be4f986d5098e01548078be3b32a))
* **clients:** update client endpoints as of 2023-04-21 ([2710706](https://github.com/aws/aws-sdk-js-v3/commit/2710706902fb9ad0befd2eb9ccfff3eda0aa1110))





# [3.317.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.316.0...v3.317.0) (2023-04-20)


### Features

* **client-chime-sdk-media-pipelines:** This release adds support for specifying the recording file format in an S3 recording sink configuration. ([625ca4a](https://github.com/aws/aws-sdk-js-v3/commit/625ca4ab583a0baec5fae27d2f2a2cc62ac9c95e))
* **client-chime-sdk-meetings:** Adds support for Hindi and Thai languages and additional Amazon Transcribe parameters to the StartMeetingTranscription API. ([0c389df](https://github.com/aws/aws-sdk-js-v3/commit/0c389dff8d047c427288be439c29c7b8864a5e27))
* **client-chime:** Adds support for Hindi and Thai languages and additional Amazon Transcribe parameters to the StartMeetingTranscription API. ([d1e9bf8](https://github.com/aws/aws-sdk-js-v3/commit/d1e9bf8a0c57c7414b3aa95072deb12d0a4f89f4))
* **client-gamelift:** Amazon GameLift supports creating Builds for Windows 2016 operating system. ([aa64742](https://github.com/aws/aws-sdk-js-v3/commit/aa64742c970ca45a23647b553f618d047ccfc8f4))
* **client-guardduty:** This release adds support for the new Lambda Protection feature. ([3eb10b2](https://github.com/aws/aws-sdk-js-v3/commit/3eb10b2622c35ceafe8d714d11ea0f6935e8c344))
* **client-iot:** Support additional OTA states in GetOTAUpdate API ([db884ae](https://github.com/aws/aws-sdk-js-v3/commit/db884ae5cd1750c4b98964969b39010c86f9d9c7))
* **client-sagemaker:** Amazon SageMaker Canvas adds ModelRegisterSettings support for CanvasAppSettings. ([ebd11ca](https://github.com/aws/aws-sdk-js-v3/commit/ebd11cad4cfe8f16744612bd940648f77a7df186))
* **client-snowball:** Adds support for Amazon S3 compatible storage. AWS Snow Family customers can now use Amazon S3 compatible storage on Snowball Edge devices. Also adds support for V3_5S. This is a refreshed AWS Snowball Edge Storage Optimized device type with 210TB SSD (customer usable). ([e7f97bf](https://github.com/aws/aws-sdk-js-v3/commit/e7f97bfc1f22e6bf3285b0ca0d19b72cfa8f59b1))
* **client-wafv2:** You can now create encrypted API keys to use in a client application integration of the JavaScript CAPTCHA API . You can also retrieve a list of your API keys and the JavaScript application integration URL. ([8b07232](https://github.com/aws/aws-sdk-js-v3/commit/8b07232a23481cf2101758737640926300bf5dfb))
* **clients:** update client endpoints as of 2023-04-20 ([25718eb](https://github.com/aws/aws-sdk-js-v3/commit/25718ebc205c72ec8382e3e7549c006178d71717))





# [3.316.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.315.0...v3.316.0) (2023-04-19)


### Bug Fixes

* **clients:** always allow idempotency token ([#4642](https://github.com/aws/aws-sdk-js-v3/issues/4642)) ([aaff894](https://github.com/aws/aws-sdk-js-v3/commit/aaff894f7840d199bae043594ca56e290d5f3deb))
* **cloudfront-signer:** fix URL construction to maintain escapes ([#4563](https://github.com/aws/aws-sdk-js-v3/issues/4563)) ([73f539d](https://github.com/aws/aws-sdk-js-v3/commit/73f539d21ee5c1cc600602cb00cf778a14632f53))


### Features

* **client-comprehend:** This release supports native document models for custom classification, in addition to plain-text models. You train native document models using documents (PDF, Word, images) in their native format. ([413a413](https://github.com/aws/aws-sdk-js-v3/commit/413a413b03876fb6d37a70460392879f08c1b48e))
* **client-ecs:** This release supports the Account Setting "TagResourceAuthorization" that allows for enhanced Tagging security controls. ([9bac5ad](https://github.com/aws/aws-sdk-js-v3/commit/9bac5ad5930c8f5a94bd73330e18d7ae11aaa5d2))
* **client-ram:** This release adds support for customer managed permissions. Customer managed permissions enable customers to author and manage tailored permissions for resources shared using RAM. ([c6a225f](https://github.com/aws/aws-sdk-js-v3/commit/c6a225f7949ac4e2b2a8bac5ed7e196749aeaef0))
* **client-s3-control:** Provides support for overriding endpoint when region is "snow". This will enable bucket APIs for Amazon S3 Compatible storage on Snow Family devices. ([29f17b9](https://github.com/aws/aws-sdk-js-v3/commit/29f17b913cf1660f98f616d73ccfed6a4f0481b8))
* **client-s3:** Provides support for "Snow" Storage class. ([81b843f](https://github.com/aws/aws-sdk-js-v3/commit/81b843fc4569453d46e044a5abbdb05b463b01f6))
* **clients:** update client endpoints as of 2023-04-19 ([95132a2](https://github.com/aws/aws-sdk-js-v3/commit/95132a29d1c54208de0dc5a85437d40d229c4686))
* **smithy-client:** factory for aggregated clients ([#4639](https://github.com/aws/aws-sdk-js-v3/issues/4639)) ([852b99d](https://github.com/aws/aws-sdk-js-v3/commit/852b99d393fe5f1a9ff6345f797949f3901a9cbf))





# [3.315.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.314.0...v3.315.0) (2023-04-17)


### Features

* **client-appflow:** This release adds a Client Token parameter to the following AppFlow APIs: Create/Update Connector Profile, Create/Update Flow, Start Flow, Register Connector, Update Connector Registration. The Client Token parameter allows idempotent operations for these APIs. ([7be646f](https://github.com/aws/aws-sdk-js-v3/commit/7be646fcf662e0c336de49e48ea9eda4008e6418))
* **client-drs:** Changed existing APIs and added new APIs to support using an account-level launch configuration template with AWS Elastic Disaster Recovery. ([c1349f2](https://github.com/aws/aws-sdk-js-v3/commit/c1349f2280ea701328bfabdf49871983dcaae69c))
* **client-emr-serverless:** The GetJobRun API has been updated to include the job's billed resource utilization. This utilization shows the aggregate vCPU, memory and storage that AWS has billed for the job run. The billed resources include a 1-minute minimum usage for workers, plus additional storage over 20 GB per worker. ([6f369a9](https://github.com/aws/aws-sdk-js-v3/commit/6f369a93f2d645c6217c31aabb38fc25d23c14ea))
* **client-internetmonitor:** This release includes a new configurable value, TrafficPercentageToMonitor, which allows users to adjust the amount of traffic monitored by percentage ([e391e56](https://github.com/aws/aws-sdk-js-v3/commit/e391e566156534c8dd2ef699f0ff9f61b7b6e1ef))
* **client-iot-wireless:** Supports the new feature of LoRaWAN roaming, allows to configure MaxEirp for LoRaWAN gateway, and allows to configure PingSlotPeriod for LoRaWAN multicast group ([73f7859](https://github.com/aws/aws-sdk-js-v3/commit/73f78595dc6f76e34ca8d309e4baaf0ef1d005df))
* **client-lambda:** Add Python 3.10 (python3.10) support to AWS Lambda ([4122770](https://github.com/aws/aws-sdk-js-v3/commit/4122770148ec7b207df9a55975268e7d1c831936))
* **clients:** update client endpoints as of 2023-04-17 ([9d6e5f7](https://github.com/aws/aws-sdk-js-v3/commit/9d6e5f7754f2b0a908981e3ac1c3237eb55feca7))
* **codegen:** shorten serialization and deserialization code in protocols files ([#4625](https://github.com/aws/aws-sdk-js-v3/issues/4625)) ([8798a6e](https://github.com/aws/aws-sdk-js-v3/commit/8798a6eac1b48f0a807c51e38b864ef62b712943))
* **smithy-client:** update client defaults provider ([3a4d2cb](https://github.com/aws/aws-sdk-js-v3/commit/3a4d2cbe511f19566375a93dcce3a7d58bd3b380))





# [3.314.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.313.0...v3.314.0) (2023-04-14)


### Features

* **client-lambda:** This release adds SnapStart related exceptions to InvokeWithResponseStream API. IAM access related documentation is also added for this API. ([c7d2e84](https://github.com/aws/aws-sdk-js-v3/commit/c7d2e84ab485c834954706bdfe51174c00ad24e7))
* **client-rds:** This release adds support of modifying the engine mode of database clusters. ([6902006](https://github.com/aws/aws-sdk-js-v3/commit/6902006ea3a3a8ba9ae5f78be4594309c97921ee))
* **clients:** update client endpoints as of 2023-04-14 ([72f43dc](https://github.com/aws/aws-sdk-js-v3/commit/72f43dc04a86d73da88a9e5d8bdf128404cf61f0))





# [3.313.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.312.0...v3.313.0) (2023-04-13)


### Features

* **client-chime-sdk-voice:** This release adds tagging support for Voice Connectors and SIP Media Applications ([4982fd3](https://github.com/aws/aws-sdk-js-v3/commit/4982fd3bd90a3341fce6a07b7ae4c0ae48a25e71))
* **client-mediaconnect:** Gateway is a new feature of AWS Elemental MediaConnect. Gateway allows the deployment of on-premises resources for the purpose of transporting live video to and from the AWS Cloud. ([0577cc1](https://github.com/aws/aws-sdk-js-v3/commit/0577cc110b73ce3c02d4c8fb52b1d70ed56ebad7))
* **clients:** update client endpoints as of 2023-04-13 ([893e710](https://github.com/aws/aws-sdk-js-v3/commit/893e71085db7b2c0fca5bb044dc2167296f5fccc))





# [3.312.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.311.0...v3.312.0) (2023-04-12)


### Features

* **client-groundstation:** AWS Ground Station Wideband DigIF GA Release ([90bc06f](https://github.com/aws/aws-sdk-js-v3/commit/90bc06f915487030b3bedf1bb3bacbcdf9eb9478))
* **client:** reduce generated HTTP request header code size ([#4594](https://github.com/aws/aws-sdk-js-v3/issues/4594)) ([fe91123](https://github.com/aws/aws-sdk-js-v3/commit/fe91123411499b5932b406fb813e69f4a0d36503))
* **clients:** update client endpoints as of 2023-04-12 ([4d94d61](https://github.com/aws/aws-sdk-js-v3/commit/4d94d61c960eefdf4fa3e2b50221b64b199fc7fa))





# [3.311.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.310.0...v3.311.0) (2023-04-11)


### Bug Fixes

* **middleware-sdk-ec2:** serialize presignedUrl into request body ([#4629](https://github.com/aws/aws-sdk-js-v3/issues/4629)) ([5e82636](https://github.com/aws/aws-sdk-js-v3/commit/5e826366a15de496327fefa4f1d3b879968cdc69))


### Features

* **client-ecr-public:** This release will allow using registry alias as registryId in BatchDeleteImage request. ([ba305cf](https://github.com/aws/aws-sdk-js-v3/commit/ba305cf08875ea40358a2c8e1316c36f40854244))
* **client-emr-serverless:** This release extends GetJobRun API to return job run timeout (executionTimeoutMinutes) specified during StartJobRun call (or default timeout of 720 minutes if none was specified). ([5a7de1b](https://github.com/aws/aws-sdk-js-v3/commit/5a7de1bef66841a931d5e0f643370cda299ae0b4))
* **client-eventbridge:** EventBridge PutTarget support for multiple SQL arguments on RedshiftDataParameters ([829cbbf](https://github.com/aws/aws-sdk-js-v3/commit/829cbbf5df9087ee1ffa960586155898a5ab735e))
* **client-iot-data-plane:** This release adds support for MQTT5 user properties when calling the AWS IoT GetRetainedMessage API ([e663f3f](https://github.com/aws/aws-sdk-js-v3/commit/e663f3ffd51844738fc8e8c9b321d9f6931cc4e5))
* **client-iot:** Re-release to remove unexpected API changes ([4a0d34e](https://github.com/aws/aws-sdk-js-v3/commit/4a0d34e541ff551ca79071a738ce9a276f51fc94))
* **client-wafv2:** For web ACLs that protect CloudFront protections, the default request body inspection size is now 16 KB, and you can use the new association configuration to increase the inspection size further, up to 64 KB. Sizes over 16 KB can incur additional costs. ([25573e3](https://github.com/aws/aws-sdk-js-v3/commit/25573e3ba1a9e92613973e7db6ec1d75c051771b))
* **clients:** update client endpoints as of 2023-04-11 ([ac0a5f5](https://github.com/aws/aws-sdk-js-v3/commit/ac0a5f54798f3d6d590093bc573dfc4a730590a3))





# [3.310.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.309.0...v3.310.0) (2023-04-10)


### Bug Fixes

* use updated dist glob pattern in package.json ([#4628](https://github.com/aws/aws-sdk-js-v3/issues/4628)) ([352393d](https://github.com/aws/aws-sdk-js-v3/commit/352393dcdba5ba16dca589c265c40e22913c7f2b))


### Features

* **client-connect:** This release adds the ability to configure an agent's routing profile to receive contacts from multiple channels at the same time via extending the UpdateRoutingProfileConcurrency, CreateRoutingProfile and DescribeRoutingProfile APIs. ([449823d](https://github.com/aws/aws-sdk-js-v3/commit/449823db503181513cb39ba443e382a40788c0bf))
* **client-ecs:** This release adds support for enabling FIPS compliance on Amazon ECS Fargate tasks ([db95943](https://github.com/aws/aws-sdk-js-v3/commit/db95943c738d0a0ada3ed39ae9c51322089337bc))
* **client-marketplace-catalog:** Added three new APIs to support resource sharing: GetResourcePolicy, PutResourcePolicy, and DeleteResourcePolicy. Added new OwnershipType field to ListEntities request to let users filter on entities that are shared with them. Increased max page size of ListEntities response from 20 to 50 results. ([d860c2f](https://github.com/aws/aws-sdk-js-v3/commit/d860c2f38d047074fcca85209e2c9292f0480cab))
* **client-mediaconvert:** AWS Elemental MediaConvert SDK now supports conversion of 608 paint-on captions to pop-on captions for SCC sources. ([e233a50](https://github.com/aws/aws-sdk-js-v3/commit/e233a5087853eb36db2857b019e5090b67aa5398))
* **client-omics:** Remove unexpected API changes. ([16d0576](https://github.com/aws/aws-sdk-js-v3/commit/16d05761eaa5aa75518854770efc1dd92d23d6a5))
* **client-rekognition:** This release adds support for Face Liveness APIs in Amazon Rekognition. Updates UpdateStreamProcessor to return ResourceInUseException Exception. Minor updates to API documentation. ([0ffd995](https://github.com/aws/aws-sdk-js-v3/commit/0ffd995f8a39e2ae95f0cc2403c9f49f292f6b31))
* **clients:** update client endpoints as of 2023-04-10 ([edbe989](https://github.com/aws/aws-sdk-js-v3/commit/edbe9896e0cea0776aa216ce944ddfa81900db89))





# [3.309.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.308.0...v3.309.0) (2023-04-07)


### Features

* **client-dlm:** Updated timestamp format for GetLifecyclePolicy API ([300cf05](https://github.com/aws/aws-sdk-js-v3/commit/300cf05ea89b1326659e512ef7c2ab032025ccd6))
* **client-docdb:** This release adds a new parameter 'DBClusterParameterGroupName' to 'RestoreDBClusterFromSnapshot' API to associate the name of the DB cluster parameter group while performing restore. ([5d75e0c](https://github.com/aws/aws-sdk-js-v3/commit/5d75e0ce147bdd504fcef7e51aa2daf1e495ab2d))
* **client-lambda:** This release adds a new Lambda InvokeWithResponseStream API to support streaming Lambda function responses. The release also adds a new InvokeMode parameter to Function Url APIs to control whether the response will be streamed or buffered. ([1543d4c](https://github.com/aws/aws-sdk-js-v3/commit/1543d4c029093a53f3ef6d9e762b531fef09d2b7))
* **client-quicksight:** This release has two changes: adding the OR condition to tag-based RLS rules in CreateDataSet and UpdateDataSet; adding RefreshSchedule and Incremental RefreshProperties operations for users to programmatically configure SPICE dataset ingestions. ([500f7df](https://github.com/aws/aws-sdk-js-v3/commit/500f7df7efce1d0e7c4a14c67918c03e1a15f052))
* **codegen:** add serde helper function ([#4616](https://github.com/aws/aws-sdk-js-v3/issues/4616)) ([bcb14ba](https://github.com/aws/aws-sdk-js-v3/commit/bcb14ba35166fb975b635f4db6f0a45afbe0e0b7))
* **codegen:** shorten internal serde function names ([#4611](https://github.com/aws/aws-sdk-js-v3/issues/4611)) ([e385e85](https://github.com/aws/aws-sdk-js-v3/commit/e385e85938d112434b752abb38ab5de2d094f669))





# [3.308.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.307.0...v3.308.0) (2023-04-06)


### Bug Fixes

* **client-rekognitionstreaming:** update rekognitionstreaming endpoints ([#4621](https://github.com/aws/aws-sdk-js-v3/issues/4621)) ([c64cf47](https://github.com/aws/aws-sdk-js-v3/commit/c64cf471fdcf7aee3a969a7dcdf92ecce077506e))


### Features

* **client-cloudformation:** Including UPDATE_COMPLETE as a failed status for DeleteStack waiter. ([b0abf2e](https://github.com/aws/aws-sdk-js-v3/commit/b0abf2e7cbbdfce857b22f91b6a96eef61d1cb3c))
* **client-greengrassv2:** Add support for SUCCEEDED value in coreDeviceExecutionStatus field. Documentation updates for Greengrass V2. ([ce2abb1](https://github.com/aws/aws-sdk-js-v3/commit/ce2abb153465c6c2acd103807c51d146ff4ff97b))
* **client-proton:** This release adds support for the AWS Proton service sync feature. Service sync enables managing an AWS Proton service (creating and updating instances) and all of it's corresponding service instances from a Git repository. ([e0edc8b](https://github.com/aws/aws-sdk-js-v3/commit/e0edc8b2dd3a4821a32509d328759ebdc43b1509))
* **clients:** update client endpoints as of 2023-04-06 ([7092042](https://github.com/aws/aws-sdk-js-v3/commit/70920424bb9a304603398d13e8bed99a299c3c41))
* **middleware-sdk-rekognitionstreaming:** create port middleware ([#4622](https://github.com/aws/aws-sdk-js-v3/issues/4622)) ([adf3353](https://github.com/aws/aws-sdk-js-v3/commit/adf33539eeafa78a7cb5eadbcae616f8c76a31c8))





# [3.307.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.306.0...v3.307.0) (2023-04-05)


### Features

* **client-apprunner:** App Runner adds support for seven new vCPU and memory configurations. ([714de04](https://github.com/aws/aws-sdk-js-v3/commit/714de0433e8153aa792583bb58098b69698f5fd8))
* **client-config-service:** This release adds resourceType enums for types released in March 2023. ([08b6555](https://github.com/aws/aws-sdk-js-v3/commit/08b65550ce44b95a61fe7277c9e7236cd24482c6))
* **client-ivs-realtime:** Fix ParticipantToken ExpirationTime format ([b206481](https://github.com/aws/aws-sdk-js-v3/commit/b2064813c3c677f7390df6b90003e869bd0b5027))
* **client-network-firewall:** AWS Network Firewall now supports IPv6-only subnets. ([811ea9d](https://github.com/aws/aws-sdk-js-v3/commit/811ea9db345d318a2c7c4bfa540eb9872fe9e07a))
* **client-service-catalog:** removed incorrect product type value ([940f4f3](https://github.com/aws/aws-sdk-js-v3/commit/940f4f36acf55d835fd9eca5ef97c0378657da54))
* **clients:** update client endpoints as of 2023-04-05 ([26a72aa](https://github.com/aws/aws-sdk-js-v3/commit/26a72aa1500b9170155758ec11e0c910313140b8))





# [3.306.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.305.0...v3.306.0) (2023-04-04)


### Bug Fixes

* **types:** node-http-handler type imports and @aws-sdk/types exports ([#4610](https://github.com/aws/aws-sdk-js-v3/issues/4610)) ([8ee06d4](https://github.com/aws/aws-sdk-js-v3/commit/8ee06d4af4513ffc9aaa8909f48b5482522834b4))


### Features

* **client-amplifyuibuilder:** Support StorageField and custom displays for data-bound options in form builder. Support non-string operands for predicates in collections. Support choosing client to get token from. ([b24e527](https://github.com/aws/aws-sdk-js-v3/commit/b24e52735b1760d8c0422e0b258960a785031348))
* **client-dataexchange:** This release updates the value of MaxResults. ([b795ebc](https://github.com/aws/aws-sdk-js-v3/commit/b795ebc16c56c838d6539fda509ff5baf6197d8b))
* **client-ec2:** C6in, M6in, M6idn, R6in and R6idn bare metal instances are powered by 3rd Generation Intel Xeon Scalable processors and offer up to 200 Gbps of network bandwidth. ([01bddbc](https://github.com/aws/aws-sdk-js-v3/commit/01bddbc14a6fec92283fa53e5050d50f5fb63750))
* **client-elastic-inference:** Updated public documentation for the Describe and Tagging APIs. ([e28258e](https://github.com/aws/aws-sdk-js-v3/commit/e28258e790182f2529ac6f17da16087a74df65e1))
* **client-rekognitionstreaming:** update model ([#4609](https://github.com/aws/aws-sdk-js-v3/issues/4609)) ([ddb0c5d](https://github.com/aws/aws-sdk-js-v3/commit/ddb0c5d84defd4352adabdcef0767db78ffb137c))
* **client-sagemaker-runtime:** Amazon SageMaker Asynchronous Inference now provides customers a FailureLocation as a response parameter in InvokeEndpointAsync API to capture the model failure responses. ([62f9c4d](https://github.com/aws/aws-sdk-js-v3/commit/62f9c4de0c6c712b738000be6467a1f9be23c559))
* **client-sagemaker:** Amazon SageMaker Asynchronous Inference now allows customer's to receive failure model responses in S3 and receive success/failure model responses in SNS notifications. ([bbc2fd1](https://github.com/aws/aws-sdk-js-v3/commit/bbc2fd17d9e3778a250453927d5dc3abdb2feeb6))
* **client-wafv2:** This release rolls back association config feature for webACLs that protect CloudFront protections. ([f96b649](https://github.com/aws/aws-sdk-js-v3/commit/f96b6490cc6ddf1d7777c6586dc51bbdfa618162))
* **clients:** update client endpoints as of 2023-04-04 ([597085d](https://github.com/aws/aws-sdk-js-v3/commit/597085dddede592dca2685f8e7b2b76f98cda0f5))





# [3.305.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.304.0...v3.305.0) (2023-04-03)


### Features

* **client-glue:** Add support for database-level federation ([11ea352](https://github.com/aws/aws-sdk-js-v3/commit/11ea3520adcee0393a290fa35a588363e17829cd))
* **client-lakeformation:** Add support for database-level federation ([7aa3a7b](https://github.com/aws/aws-sdk-js-v3/commit/7aa3a7b9a9f9303cc1f2fce0fd31c245a382d1c5))
* **client-license-manager:** This release adds grant override options to the CreateGrantVersion API. These options can be used to specify grant replacement behavior during grant activation. ([a301edd](https://github.com/aws/aws-sdk-js-v3/commit/a301edd8686009df5b0604b96be2b33db73523e9))
* **client-mwaa:** This Amazon MWAA release adds the ability to customize the Apache Airflow environment by launching a shell script at startup. This shell script is hosted in your environment's Amazon S3 bucket. Amazon MWAA runs the script before installing requirements and initializing the Apache Airflow process. ([ee8fc76](https://github.com/aws/aws-sdk-js-v3/commit/ee8fc7641bfa5c13d8849a6971e9f5ab19ed2954))
* **client-rekognitionstreaming:** add rekognition-streaming client and refactor websocket implementations ([#4548](https://github.com/aws/aws-sdk-js-v3/issues/4548)) ([29ed27d](https://github.com/aws/aws-sdk-js-v3/commit/29ed27d3f4148946ac8c35c0f4d1b759b6f168b0))
* **client-service-catalog:** This release introduces Service Catalog support for Terraform open source. It enables 1. The notify* APIs to Service Catalog. These APIs are used by the terraform engine to notify the result of the provisioning engine execution. 2. Adds a new TERRAFORM_OPEN_SOURCE product type in CreateProduct API. ([1aa221d](https://github.com/aws/aws-sdk-js-v3/commit/1aa221d21ee551f9d296af84f1542b758a4d65a7))
* **client-wafv2:** For web ACLs that protect CloudFront protections, the default request body inspection size is now 16 KB, and you can use the new association configuration to increase the inspection size further, up to 64 KB. Sizes over 16 KB can incur additional costs. ([e11d2f9](https://github.com/aws/aws-sdk-js-v3/commit/e11d2f95c0c12c79b08c3cbbcf28836d4d60c9e3))
* **clients:** update client endpoints as of 2023-04-03 ([a096494](https://github.com/aws/aws-sdk-js-v3/commit/a0964944f3584d673a7c29fea277cc3f5a4c68ed))





# [3.304.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.303.0...v3.304.0) (2023-03-31)


### Features

* **client-internetmonitor:** This release adds a new feature for Amazon CloudWatch Internet Monitor that enables customers to deliver internet measurements to Amazon S3 buckets as well as CloudWatch Logs. ([e36cdb7](https://github.com/aws/aws-sdk-js-v3/commit/e36cdb778180fe8ab333ce63384dd4d374d6fc66))
* **client-sagemaker-featurestore-runtime:** In this release, you can now chose between soft delete and hard delete when calling the DeleteRecord API, so you have more flexibility when it comes to managing online store data. ([6037599](https://github.com/aws/aws-sdk-js-v3/commit/6037599e4b374065cd7c327d2dfbc5255afb2967))
* **client-sms:** Deprecating AWS Server Migration Service. ([4a0bb37](https://github.com/aws/aws-sdk-js-v3/commit/4a0bb37525717b6d07ef3fc9ef4351e17a36481f))
* **clients:** update client endpoints as of 2023-03-31 ([6308963](https://github.com/aws/aws-sdk-js-v3/commit/6308963afeafcf369302ddc780791b39bf5deb6e))





# [3.303.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.302.0...v3.303.0) (2023-03-30)


### Features

* **client-athena:** Make DefaultExecutorDpuSize and CoordinatorDpuSize  fields optional  in StartSession ([1a4cd21](https://github.com/aws/aws-sdk-js-v3/commit/1a4cd2146c5ccd066b778b1ee71181519bfa34d0))
* **client-auto-scaling:** Amazon EC2 Auto Scaling now supports Elastic Load Balancing traffic sources with the AttachTrafficSources, DetachTrafficSources, and DescribeTrafficSources APIs. This release also introduces a new activity status, "WaitingForConnectionDraining", for VPC Lattice to the DescribeScalingActivities API. ([3f4037e](https://github.com/aws/aws-sdk-js-v3/commit/3f4037e648e0113e6fc09e0a5123f8bb85347a52))
* **client-batch:** This feature allows Batch on EKS to support configuration of Pod Labels through Metadata for Batch on EKS Jobs. ([d26bec4](https://github.com/aws/aws-sdk-js-v3/commit/d26bec4c0f1f01188789ce137222b94a2dfc4381))
* **client-compute-optimizer:** This release adds support for HDD EBS volume types and io2 Block Express. We are also adding support for 61 new instance types and instances that have non consecutive runtime. ([defd0ca](https://github.com/aws/aws-sdk-js-v3/commit/defd0ca41aefd5e5bb381d1febf1597e675b104d))
* **client-drs:** Adding a field to the replication configuration APIs to support the auto replicate new disks feature. We also deprecated RetryDataReplication. ([6848391](https://github.com/aws/aws-sdk-js-v3/commit/68483918f8447246f17beddf73dd107cf03f9845))
* **client-ec2:** This release adds support for Tunnel Endpoint Lifecycle control, a new feature that provides Site-to-Site VPN customers with better visibility and control of their VPN tunnel maintenance updates. ([daa7956](https://github.com/aws/aws-sdk-js-v3/commit/daa79569c2e9e636a2ed9cd7a5425bdbc5d491e4))
* **client-emr:** Updated DescribeCluster and ListClusters API responses to include ErrorDetail that specifies error code, programmatically accessible error data,and an error message. ErrorDetail provides the underlying reason for cluster failure and recommends actions to simplify troubleshooting of EMR clusters. ([aa47baa](https://github.com/aws/aws-sdk-js-v3/commit/aa47baac352ef66262e6dd828b7177b47e22cc96))
* **client-glue:** This release adds support for AWS Glue Data Quality, which helps you evaluate and monitor the quality of your data and includes the API for creating, deleting, or updating data quality rulesets, runs and evaluations. ([811c814](https://github.com/aws/aws-sdk-js-v3/commit/811c8140442bd71419d67808c1a0e2f0bba86fd9))
* **client-guardduty:** Added EKS Runtime Monitoring feature support to existing detector, finding APIs and introducing new Coverage APIs ([0f16674](https://github.com/aws/aws-sdk-js-v3/commit/0f16674b6eeb6fa2a0b5e499722af15a05a02458))
* **client-imagebuilder:** Adds support for new image workflow details and image vulnerability detection. ([a2d8908](https://github.com/aws/aws-sdk-js-v3/commit/a2d89082981b99c62b01b930b51ccb943fd69343))
* **client-ivs:** Amazon Interactive Video Service (IVS) now offers customers the ability to configure IVS channels to allow insecure RTMP ingest. ([0001a10](https://github.com/aws/aws-sdk-js-v3/commit/0001a102c744e3461112b89a25dac15802a0aab5))
* **client-kendra:** AWS Kendra now supports featured results for a query. ([2271816](https://github.com/aws/aws-sdk-js-v3/commit/227181614551be9d9b27c6a8ddd15a27e908add7))
* **client-network-firewall:** AWS Network Firewall added TLS inspection configurations to allow TLS traffic inspection. ([801cd21](https://github.com/aws/aws-sdk-js-v3/commit/801cd211aa3a12d3a385418420e2e1c5d3df08bf))
* **client-sagemaker-geospatial:** Amazon SageMaker geospatial capabilities now supports server-side encryption with customer managed KMS key and SageMaker notebooks with a SageMaker geospatial image in a Amazon SageMaker Domain with VPC only mode. ([04b37bf](https://github.com/aws/aws-sdk-js-v3/commit/04b37bfb8ac45f8e4a9a4941f761398c03388c88))
* **client-vpc-lattice:** General Availability (GA) release of Amazon VPC Lattice ([fc57f8f](https://github.com/aws/aws-sdk-js-v3/commit/fc57f8f047ee72b4eb68ed21f78593e31501a789))
* **client-wellarchitected:** AWS Well-Architected SDK now supports getting consolidated report metrics and generating a consolidated report PDF. ([f0d07c4](https://github.com/aws/aws-sdk-js-v3/commit/f0d07c4495501c318dc8e13d6e1804aaba3a6b78))
* **clients:** update client endpoints as of 2023-03-30 ([4682bc1](https://github.com/aws/aws-sdk-js-v3/commit/4682bc1487b80122328e2d9c39c9e5bcf785f47a))





# [3.302.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.301.0...v3.302.0) (2023-03-29)


### Features

* **client-opensearchserverless:** This release includes two new exception types "ServiceQuotaExceededException" and "OcuLimitExceededException". ([ca26c26](https://github.com/aws/aws-sdk-js-v3/commit/ca26c268e5f21206c1f454df92b94251d459befb))
* **client-rds:** Add support for creating a read replica DB instance from a Multi-AZ DB cluster. ([fedf52a](https://github.com/aws/aws-sdk-js-v3/commit/fedf52ab8ee28163eac4a53d714b967318e4fa46))
* **clients:** update client endpoints as of 2023-03-29 ([ae4ddf1](https://github.com/aws/aws-sdk-js-v3/commit/ae4ddf169da4b2ebba156aebdef0e6defba9abc7))





# [3.301.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.300.0...v3.301.0) (2023-03-28)


### Bug Fixes

* **docs:** reveal protected types ([#4583](https://github.com/aws/aws-sdk-js-v3/issues/4583)) ([7039533](https://github.com/aws/aws-sdk-js-v3/commit/70395336f80a54e087c58e84eca7a84abf951266))


### Features

* **client-iot-data-plane:** Add endpoint ruleset support for cn-north-1. ([6b9470d](https://github.com/aws/aws-sdk-js-v3/commit/6b9470d007607f000e2bb8a4a69fba0b943f7a16))
* **client-ssm-contacts:** This release adds 12 new APIs as part of Oncall Schedule feature release, adds support for a new contact type: ONCALL_SCHEDULE. Check public documentation for AWS ssm-contacts for more information ([bfff52b](https://github.com/aws/aws-sdk-js-v3/commit/bfff52b40767c72ec6028f778509d40c63f4051b))
* **client-ssm-incidents:** Increased maximum length of "TriggerDetails.rawData" to 10K characters and "IncidentSummary" to 8K characters. ([94fe54f](https://github.com/aws/aws-sdk-js-v3/commit/94fe54fd72715d97ba6f145df263e2ecd154861f))
* **clients:** update client endpoints as of 2023-03-28 ([e7bfe9a](https://github.com/aws/aws-sdk-js-v3/commit/e7bfe9a5be05ac4bc689713a81274736b0c07ebf))





# [3.300.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.299.0...v3.300.0) (2023-03-27)


### Bug Fixes

* correct merging of config files so that keys from each file are kept ([#4388](https://github.com/aws/aws-sdk-js-v3/issues/4388)) ([9284e20](https://github.com/aws/aws-sdk-js-v3/commit/9284e20b85a96f1bca9fb1d891611de81454b047))


### Features

* **client-athena:** Enforces a minimal level of encryption for the workgroup for query and calculation results that are written to Amazon S3. When enabled, workgroup users can set encryption only to the minimum level set by the administrator or higher when they submit queries. ([652bc31](https://github.com/aws/aws-sdk-js-v3/commit/652bc3119c2ef5490a56667db467e3dabdd71a6a))
* **client-chime-sdk-voice:** Documentation updates for Amazon Chime SDK Voice. ([226c721](https://github.com/aws/aws-sdk-js-v3/commit/226c721eb27768d80d2760a7b110c9b796edaecf))
* **client-connect:** This release introduces support for RelatedContactId in the StartChatContact API. Interactive message and interactive message response have been added to the list of supported message content types for this API as well. ([ffed7a8](https://github.com/aws/aws-sdk-js-v3/commit/ffed7a88259002a16202cfc3776554fdae63629a))
* **client-iot-wireless:** Introducing new APIs that enable Sidewalk devices to communicate with AWS IoT Core through Sidewalk gateways. This will empower AWS customers to connect Sidewalk devices with other AWS IoT Services, creating  possibilities for seamless integration and advanced device management. ([42b9bb8](https://github.com/aws/aws-sdk-js-v3/commit/42b9bb8750a307904a5a69adde2b13e3c1de905e))
* **client-medialive:** AWS Elemental MediaLive now supports ID3 tag insertion for audio only HLS output groups. AWS Elemental Link devices now support tagging. ([fce0f2f](https://github.com/aws/aws-sdk-js-v3/commit/fce0f2fa40e682c2fc75f5094827038da5f510b5))
* **client-securityhub:** Added new resource detail objects to ASFF, including resources for AwsEksCluster, AWSS3Bucket, AwsEc2RouteTable and AwsEC2Instance. ([23a7115](https://github.com/aws/aws-sdk-js-v3/commit/23a7115863423322dacdf1ac8c764cc1ca226d96))
* **client-service-catalog-appregistry:** In this release, we started supporting ARN in applicationSpecifier and attributeGroupSpecifier. GetAttributeGroup, ListAttributeGroups and ListAttributeGroupsForApplication APIs will now have CreatedBy field in the response. ([8add959](https://github.com/aws/aws-sdk-js-v3/commit/8add9594a6979756554f05a02631532d54d0b5ab))
* **client-voice-id:** Amazon Connect Voice ID now supports multiple fraudster watchlists. Every domain has a default watchlist where all existing fraudsters are placed by default. Custom watchlists may now be created, managed, and evaluated against for known fraudster detection. ([510f609](https://github.com/aws/aws-sdk-js-v3/commit/510f6093946122a7c411390075d0a6045b7b4c6f))
* **clients:** codegen for structural hint documentation in commands ([#4573](https://github.com/aws/aws-sdk-js-v3/issues/4573)) ([b3ff58d](https://github.com/aws/aws-sdk-js-v3/commit/b3ff58d3606ceefcdd04ac82fc1ca54f5f811989))





# [3.299.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.298.0...v3.299.0) (2023-03-24)


### Features

* **client-comprehend:** This release adds a new field (FlywheelArn) to the EntitiesDetectionJobProperties object. The FlywheelArn field is returned in the DescribeEntitiesDetectionJob and ListEntitiesDetectionJobs responses when the EntitiesDetection job is started with a FlywheelArn instead of an EntityRecognizerArn . ([e1535f9](https://github.com/aws/aws-sdk-js-v3/commit/e1535f9547765545f6f57af8b690fd34a8332331))
* **client-rds:** Added error code CreateCustomDBEngineVersionFault for when the create custom engine version for Custom engines fails. ([688beb7](https://github.com/aws/aws-sdk-js-v3/commit/688beb7b28dde78999f73f1d467288028daeceba))
* **clients:** update client endpoints as of 2023-03-24 ([2a443ef](https://github.com/aws/aws-sdk-js-v3/commit/2a443ef1bf32bab62feb68a8a75c79e918549774))





# [3.298.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.297.0...v3.298.0) (2023-03-23)


### Features

* **client-batch:** This feature allows Batch to support configuration of ephemeral storage size for jobs running on FARGATE ([5152fa9](https://github.com/aws/aws-sdk-js-v3/commit/5152fa9be3adb3e0c68094358bed044f0f51ca76))
* **client-chime-sdk-identity:** AppInstanceBots can be used to add a bot powered by Amazon Lex to chat channels.  ExpirationSettings provides automatic resource deletion for AppInstanceUsers. ([f12358e](https://github.com/aws/aws-sdk-js-v3/commit/f12358ef2448cb3ff90fce490e8221226bdc9ff9))
* **client-chime-sdk-media-pipelines:** This release adds Amazon Chime SDK call analytics. Call analytics include voice analytics, which provides speaker search and voice tone analysis. These capabilities can be used with Amazon Transcribe and Transcribe Call Analytics to generate machine-learning-powered insights from real-time audio. ([1e3a44a](https://github.com/aws/aws-sdk-js-v3/commit/1e3a44abab30e58d6173db8f1cde2029c060e508))
* **client-chime-sdk-messaging:** ExpirationSettings provides automatic resource deletion for Channels. ([f896a63](https://github.com/aws/aws-sdk-js-v3/commit/f896a6307fcc27813f2ebaf57a52731df20971fd))
* **client-chime-sdk-voice:** This release adds Amazon Chime SDK call analytics. Call analytics include voice analytics, which provides speaker search and voice tone analysis. These capabilities can be used with Amazon Transcribe and Transcribe Call Analytics to generate machine-learning-powered insights from real-time audio. ([e298928](https://github.com/aws/aws-sdk-js-v3/commit/e2989287d557c3e38ed3812de17130b027cbabf5))
* **client-codeartifact:** Repository CreationTime is added to the CreateRepository and ListRepositories API responses. ([7871c83](https://github.com/aws/aws-sdk-js-v3/commit/7871c838bc0483ed8a3bdef0d17dbba7c7e19912))
* **client-guardduty:** Adds AutoEnableOrganizationMembers attribute to DescribeOrganizationConfiguration and UpdateOrganizationConfiguration APIs. ([28b5caf](https://github.com/aws/aws-sdk-js-v3/commit/28b5caf70959eabd2e7dee7bb48de43099a0de02))
* **client-ivs-realtime:** Initial release of the Amazon Interactive Video Service RealTime API. ([6833ff3](https://github.com/aws/aws-sdk-js-v3/commit/6833ff3d59c1b7ab8233dcd4c680f12567fb654d))
* **client-mediaconvert:** AWS Elemental MediaConvert SDK now supports passthrough of ID3v2 tags for audio inputs to audio-only HLS outputs. ([6a83a5c](https://github.com/aws/aws-sdk-js-v3/commit/6a83a5c5388f29bfad3c0a3bd3ace0f05d52af19))
* **client-sagemaker:** Amazon SageMaker Autopilot adds two new APIs - CreateAutoMLJobV2 and DescribeAutoMLJobV2. Amazon SageMaker Notebook Instances now supports the ml.geospatial.interactive instance type. ([aa94fc4](https://github.com/aws/aws-sdk-js-v3/commit/aa94fc4a6c48bded973fc135580a5302649e98d6))
* **client-servicediscovery:** Reverted the throttling exception RequestLimitExceeded for AWS Cloud Map APIs introduced in SDK version 1.12.424 2023-03-09 to previous exception specified in the ErrorCode. ([a460948](https://github.com/aws/aws-sdk-js-v3/commit/a46094886005e2ce5c752ab7ae3f4d8906803ce2))
* **client-textract:** The AnalyzeDocument - Tables feature adds support for new elements in the API: table titles, footers, section titles, summary cells/tables, and table type. ([bf48e83](https://github.com/aws/aws-sdk-js-v3/commit/bf48e831dbdcf711c090d64c13c0582a280ee241))
* **clients:** remove generated log filters for data with no sensitive data ([#4544](https://github.com/aws/aws-sdk-js-v3/issues/4544)) ([569155d](https://github.com/aws/aws-sdk-js-v3/commit/569155d6cce710b102cefa7511ba1bc1d28bc87e))
* **clients:** update client endpoints as of 2023-03-23 ([9177f4c](https://github.com/aws/aws-sdk-js-v3/commit/9177f4c1a7ec60cf9e3fc0ce8f38ea908eedec11))





# [3.297.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.296.0...v3.297.0) (2023-03-22)


### Features

* **client-iottwinmaker:** This release adds support of adding metadata when creating a new scene or updating an existing scene. ([98c2508](https://github.com/aws/aws-sdk-js-v3/commit/98c250878fc5a638daebd684046c03bbcc65a4e6))
* **client-pipes:** This release improves validation on the ARNs in the API model ([62c1580](https://github.com/aws/aws-sdk-js-v3/commit/62c158012a1c5a2e433d3e0079921befca263b1e))
* **client-resiliencehub:** This release provides customers with the ability to import resources from within an EKS cluster and assess the resiliency of EKS cluster workloads. ([bb17cb4](https://github.com/aws/aws-sdk-js-v3/commit/bb17cb4c30dc437b2ed777ec0e1d8b9a9d53a039))
* **client-ssm:** This Patch Manager release supports creating, updating, and deleting Patch Baselines for AmazonLinux2023, AlmaLinux. ([3094ca5](https://github.com/aws/aws-sdk-js-v3/commit/3094ca5e2d1af076f7f7784550b3979ef33c74bb))
* **clients:** update client endpoints as of 2023-03-22 ([86334b3](https://github.com/aws/aws-sdk-js-v3/commit/86334b38eaf3ba0005f141a418cb36d2a6485a72))





# [3.296.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.295.0...v3.296.0) (2023-03-21)


### Bug Fixes

* **scripts:** prettify package.json when updating version numbers ([#4552](https://github.com/aws/aws-sdk-js-v3/issues/4552)) ([4d47810](https://github.com/aws/aws-sdk-js-v3/commit/4d478109a72b4612418adffd28c1cd71d7f9f805))
* **scripts:** use json-stringify as parser for package.json ([#4559](https://github.com/aws/aws-sdk-js-v3/issues/4559)) ([69f53ce](https://github.com/aws/aws-sdk-js-v3/commit/69f53ce50b23c5ca4cef08eda6e69fddb39e223a))


### Features

* **client-chime-sdk-messaging:** Amazon Chime SDK messaging customers can now manage streaming configuration for messaging data for archival and analysis. ([edee457](https://github.com/aws/aws-sdk-js-v3/commit/edee4576d5a8fe124b347ffddf72fe6a152e8963))
* **client-cleanrooms:** GA Release of AWS Clean Rooms, Added Tagging Functionality ([b310676](https://github.com/aws/aws-sdk-js-v3/commit/b31067659882adb89e550514040276a121d572df))
* **client-ec2:** This release adds support for AWS Network Firewall, AWS PrivateLink, and Gateway Load Balancers to Amazon VPC Reachability Analyzer, and it makes the path destination optional as long as a destination address in the filter at source is provided. ([eb6d517](https://github.com/aws/aws-sdk-js-v3/commit/eb6d51786513297ec1921bd98aa064a058721331))
* **client-iotsitewise:** Provide support for tagging of data streams and enabling tag based authorization for property alias ([0a085f6](https://github.com/aws/aws-sdk-js-v3/commit/0a085f61549a192be17792fa707eff76ab36fe02))
* **client-mgn:** This release introduces the Import and export feature and expansion of the post-launch actions ([20befeb](https://github.com/aws/aws-sdk-js-v3/commit/20befeb26fc2d27d5b89c9b31ddc65a24244bb49))
* **clients:** update client endpoints as of 2023-03-21 ([9cf1810](https://github.com/aws/aws-sdk-js-v3/commit/9cf1810a0ce57ef24e8d823d0f7345c61302bf0d))
* **node-http-handler:** implement connections pool and manager interfaces ([#4508](https://github.com/aws/aws-sdk-js-v3/issues/4508)) ([86a6046](https://github.com/aws/aws-sdk-js-v3/commit/86a6046af170784a9858f101e84cf3d97df84a21))





# [3.295.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.294.0...v3.295.0) (2023-03-20)


### Bug Fixes

* **e2e:** bump ts-loader version ([#4546](https://github.com/aws/aws-sdk-js-v3/issues/4546)) ([96ca38c](https://github.com/aws/aws-sdk-js-v3/commit/96ca38c2cecfba53d35ccce63bf2807372bdfa32))


### Features

* **client-application-auto-scaling:** With this release customers can now tag their Application Auto Scaling registered targets with key-value pairs and manage IAM permissions for all the tagged resources centrally. ([ba24447](https://github.com/aws/aws-sdk-js-v3/commit/ba2444768fd45525a8e341ded646ba18ca80f76b))
* **client-neptune:** This release makes following few changes. db-cluster-identifier is now a required parameter of create-db-instance. describe-db-cluster will now return PendingModifiedValues and GlobalClusterIdentifier fields in the response. ([1824352](https://github.com/aws/aws-sdk-js-v3/commit/18243521befb548ac4ac5b6e512ef81c080f5070))
* **client-s3outposts:** S3 On Outposts added support for endpoint status, and a failed endpoint reason, if any ([56a152d](https://github.com/aws/aws-sdk-js-v3/commit/56a152dd38b2d06f79d1f9e7987af15c5bbdef9e))
* **client-workdocs:** This release adds a new API, SearchResources, which enable users to search through metadata and content of folders, documents, document versions and comments in a WorkDocs site. ([e1674aa](https://github.com/aws/aws-sdk-js-v3/commit/e1674aa32aac122cf405e3fcd159941644b1226e))
* **clients:** update client endpoints as of 2023-03-20 ([3336bc7](https://github.com/aws/aws-sdk-js-v3/commit/3336bc7f1038f8515a88238cc5f0be6b558dbc2f))





# [3.294.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.293.0...v3.294.0) (2023-03-17)


### Bug Fixes

* **docs:** fix redirect loop ([#4535](https://github.com/aws/aws-sdk-js-v3/issues/4535)) ([1b7b0d1](https://github.com/aws/aws-sdk-js-v3/commit/1b7b0d1b6bc2ca84248c09fe21f44959f99065bf))


### Features

* **client-billingconductor:** This release adds a new filter to ListAccountAssociations API and a new filter to ListBillingGroups API. ([ce232dd](https://github.com/aws/aws-sdk-js-v3/commit/ce232dd00ce99153c211b078896aa67cea3a3a0c))
* **client-config-service:** This release adds resourceType enums for types released from October 2022 through February 2023. ([ffb7403](https://github.com/aws/aws-sdk-js-v3/commit/ffb74035859533e5a45c19e956301d0191e09bad))
* **client-database-migration-service:** S3 setting to create AWS Glue Data Catalog. Oracle setting to control conversion of timestamp column. Support for Kafka SASL Plain authentication. Setting to map boolean from PostgreSQL to Redshift. SQL Server settings to force lob lookup on inline LOBs and to control access of database logs. ([3e53a35](https://github.com/aws/aws-sdk-js-v3/commit/3e53a3591c8b4925cb191d75d34a47208a2724d3))
* **clients:** update client endpoints as of 2023-03-17 ([97ca573](https://github.com/aws/aws-sdk-js-v3/commit/97ca57338721aed40390fb62c63ee1930a55b238))





# [3.293.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.292.1...v3.293.0) (2023-03-16)


### Bug Fixes

* **docs:** lowercase urls for clients ([#4531](https://github.com/aws/aws-sdk-js-v3/issues/4531)) ([3da01de](https://github.com/aws/aws-sdk-js-v3/commit/3da01dede9ff7d618d1b7f5dd9ec68f103c3e0c3))


### Features

* **client-guardduty:** Updated 9 APIs for feature enablement to reflect expansion of GuardDuty to features. Added new APIs and updated existing APIs to support RDS Protection GA. ([83f3ee8](https://github.com/aws/aws-sdk-js-v3/commit/83f3ee824947a8d459d26b8487917e6f36b1de43))
* **clients:** update client endpoints as of 2023-03-16 ([bdc8fa5](https://github.com/aws/aws-sdk-js-v3/commit/bdc8fa5d697812c4a29bbc85b17b668a199a5f4f))





## [3.292.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.292.0...v3.292.1) (2023-03-16)


### Bug Fixes

* **docs:** change basepath to render correctly in prod ([#4530](https://github.com/aws/aws-sdk-js-v3/issues/4530)) ([ad6f05c](https://github.com/aws/aws-sdk-js-v3/commit/ad6f05c10594cc4baf957fd61991a41a0138f01a))





# [3.292.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.291.0...v3.292.0) (2023-03-15)


### Bug Fixes

* **docs:** add plugin-eslint-tsdoc ([#4525](https://github.com/aws/aws-sdk-js-v3/issues/4525)) ([35f60e3](https://github.com/aws/aws-sdk-js-v3/commit/35f60e349dbc0632156473e9414b8b1bef2e472d))
* **protocol-http:** revert SRA HttpRequest ([#4529](https://github.com/aws/aws-sdk-js-v3/issues/4529)) ([0b3327b](https://github.com/aws/aws-sdk-js-v3/commit/0b3327b9923edba479501b0843e7ebe0c277d94c))


### Features

* **client-migrationhubstrategy:** This release adds the binary analysis that analyzes IIS application DLLs on Windows and Java applications on Linux to provide anti-pattern report without configuring access to the source code. ([dec133b](https://github.com/aws/aws-sdk-js-v3/commit/dec133b684ce5438680559ec60e7611e02c4fb08))
* **client-s3-control:** Added support for S3 Object Lambda aliases. ([f841638](https://github.com/aws/aws-sdk-js-v3/commit/f8416388b17e262efe81ba86ad9939db1def38f9))
* **client-securitylake:** Make Create/Get/ListSubscribers APIs return resource share ARN and name so they can be used to validate the RAM resource share to accept. GetDatalake can be used to track status of UpdateDatalake and DeleteDatalake requests. ([934e9e6](https://github.com/aws/aws-sdk-js-v3/commit/934e9e67561e6f9a1771e5142e3422cad1b7bceb))
* **clients:** update client endpoints as of 2023-03-15 ([a254cf6](https://github.com/aws/aws-sdk-js-v3/commit/a254cf6254970448ba558d07ca1456809f73e8d5))
* **smithy-client:** update client defaults provider ([0d0cac0](https://github.com/aws/aws-sdk-js-v3/commit/0d0cac03acfb24d5a73a721e27c094950a44e973))





# [3.291.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.290.0...v3.291.0) (2023-03-14)


### Bug Fixes

* **middleware-sdk-ec2:** use endpoints v2 for source region endpoint ([#4521](https://github.com/aws/aws-sdk-js-v3/issues/4521)) ([44f4c38](https://github.com/aws/aws-sdk-js-v3/commit/44f4c3805d023984c572890252e1373a6c537015))


### Features

* **client-application-auto-scaling:** Application Auto Scaling customers can now use mathematical functions to customize the metric used with Target Tracking policies within the policy configuration itself, saving the cost and effort of publishing the customizations as a separate metric. ([e92a768](https://github.com/aws/aws-sdk-js-v3/commit/e92a7689f36ebfb1a7360b5a108ef673ef312833))
* **client-dataexchange:** This release enables data providers to license direct access to S3 objects encrypted with Customer Managed Keys (CMK) in AWS KMS through AWS Data Exchange. Subscribers can use these keys to decrypt, then use the encrypted S3 objects shared with them, without creating or managing copies. ([39baae2](https://github.com/aws/aws-sdk-js-v3/commit/39baae2fd8b157aece40bf3be3ebaea57eb2e25a))
* **client-ec2:** This release adds a new DnsOptions key (PrivateDnsOnlyForInboundResolverEndpoint) to CreateVpcEndpoint and ModifyVpcEndpoint APIs. ([8911e55](https://github.com/aws/aws-sdk-js-v3/commit/8911e55be1b00218d79eea86de3659559a88b0ad))
* **client-keyspaces:** Adding support for client-side timestamps ([61626a5](https://github.com/aws/aws-sdk-js-v3/commit/61626a5a6f7d1b2c6a8695275b22a5c6c6079afd))
* **clients:** update client endpoints as of 2023-03-14 ([ba6a91d](https://github.com/aws/aws-sdk-js-v3/commit/ba6a91db94cd21a7628557c51e91943231c698c6))





# [3.290.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.289.0...v3.290.0) (2023-03-13)


### Features

* **client-appintegrations:** Adds FileConfiguration to Amazon AppIntegrations CreateDataIntegration supporting scheduled downloading of third party files into Amazon Connect from sources such as Microsoft SharePoint. ([6780524](https://github.com/aws/aws-sdk-js-v3/commit/67805240b345f69536ad34a1cb164c6a61774026))
* **client-s3-control:** Added support for cross-account Multi-Region Access Points. Added support for S3 Replication for S3 on Outposts. ([0be873b](https://github.com/aws/aws-sdk-js-v3/commit/0be873b472e86664daa938754da262efd17e6198))
* **client-tnb:** This release adds tagging support to the following Network Instance APIs : Instantiate, Update, Terminate. ([dfdcf0e](https://github.com/aws/aws-sdk-js-v3/commit/dfdcf0e13d86e8c7534d48e4a8415e575aad1398))
* **client-wisdom:** This release extends Wisdom CreateKnowledgeBase API to support SharePoint connector type by removing the [@required](https://github.com/required) trait for objectField ([79c9f81](https://github.com/aws/aws-sdk-js-v3/commit/79c9f81f7c4d358982a93866ba40b0526b7bc925))
* **clients:** update client endpoints as of 2023-03-13 ([7110e0a](https://github.com/aws/aws-sdk-js-v3/commit/7110e0aca5d4d65c4acfc34264a396ca4085eb3c))
* **protocol-http:** implement SRA HttpRequest ([#4514](https://github.com/aws/aws-sdk-js-v3/issues/4514)) ([d9d24b0](https://github.com/aws/aws-sdk-js-v3/commit/d9d24b0a2561dfc739dfbbf5962f3c046bbc2f03))
* **smithy-client:** update client defaults provider ([a092b53](https://github.com/aws/aws-sdk-js-v3/commit/a092b53771649755fbec9f999ef85cf020e7c51b))





# [3.289.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.288.0...v3.289.0) (2023-03-10)


### Features

* **client-ivschat:** This release adds a new exception returned when calling AWS IVS chat UpdateLoggingConfiguration. Now UpdateLoggingConfiguration can return ConflictException when invalid updates are made in sequence to Logging Configurations. ([8b55eb1](https://github.com/aws/aws-sdk-js-v3/commit/8b55eb13d23bdc8dbf4cccc03768113aee845adc))
* **client-secrets-manager:** The type definitions of SecretString and SecretBinary now have a minimum length of 1 in the model to match the exception thrown when you pass in empty values. ([4382b4e](https://github.com/aws/aws-sdk-js-v3/commit/4382b4eb0cca9db5792ee39bb9eeef37ceb891f8))
* **clients:** update client endpoints as of 2023-03-10 ([feb6f9b](https://github.com/aws/aws-sdk-js-v3/commit/feb6f9b679c075c769e1f44c305828db34417b63))





# [3.288.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.287.0...v3.288.0) (2023-03-09)


### Bug Fixes

* **middleware-logger:** retrieve filter overrides after middleware returns ([#4502](https://github.com/aws/aws-sdk-js-v3/issues/4502)) ([6405a58](https://github.com/aws/aws-sdk-js-v3/commit/6405a58caccfbfad6ebbf4bd63a93e762e8aae34))


### Features

* **client-codeartifact:** This release introduces the generic package format, a mechanism for storing arbitrary binary assets. It also adds a new API, PublishPackageVersion, to allow for publishing generic packages. ([235876e](https://github.com/aws/aws-sdk-js-v3/commit/235876ea06a61ba06690400826788745f8456341))
* **client-connect:** This release adds a new API, GetMetricDataV2, which returns metric data for Amazon Connect. ([acb5eef](https://github.com/aws/aws-sdk-js-v3/commit/acb5eef61feb702c637fff6e0d282aab9285598a))
* **client-evidently:** Updated entity override documentation ([5df80f2](https://github.com/aws/aws-sdk-js-v3/commit/5df80f231dc88e150b8105af8ae46c7baa100fd9))
* **client-quicksight:** This release has two changes: add state persistence feature for embedded dashboard and console in GenerateEmbedUrlForRegisteredUser API; add properties for hidden collapsed row dimensions in PivotTableOptions. ([6c3f7b1](https://github.com/aws/aws-sdk-js-v3/commit/6c3f7b107210f4888a588a446aa5aace0b12ad77))
* **client-redshift-data:** Added support for Redshift Serverless workgroup-arn wherever the WorkgroupName parameter is available. ([344d56c](https://github.com/aws/aws-sdk-js-v3/commit/344d56c8673a7739b50de27d85dd10f3d96b3857))
* **client-sagemaker:** Amazon SageMaker Inference now allows SSM access to customer's model container by setting the "EnableSSMAccess" parameter for a ProductionVariant in CreateEndpointConfig API. ([253ef07](https://github.com/aws/aws-sdk-js-v3/commit/253ef071b89b690fd6860c86662270405e482639))
* **client-servicediscovery:** Updated all AWS Cloud Map APIs to provide consistent throttling exception (RequestLimitExceeded) ([cb39c4d](https://github.com/aws/aws-sdk-js-v3/commit/cb39c4dc0d2e769f619bed168331ae5543feb321))
* **client-sesv2:** This release introduces a new recommendation in Virtual Deliverability Manager Advisor, which detects missing or misconfigured Brand Indicator for Message Identification (BIMI) DNS records for customer sending identities. ([d58f752](https://github.com/aws/aws-sdk-js-v3/commit/d58f7524f459abf4a506b653978486f72773ce8d))
* **clients:** update client endpoints as of 2023-03-09 ([3b31ade](https://github.com/aws/aws-sdk-js-v3/commit/3b31ade0704f705755273a12d4c635ef0873c5a2))





# [3.287.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.286.0...v3.287.0) (2023-03-08)


### Bug Fixes

* **client-support:** apply sparse string list for metadata ([#4500](https://github.com/aws/aws-sdk-js-v3/issues/4500)) ([22048eb](https://github.com/aws/aws-sdk-js-v3/commit/22048ebc90a180abb8c6a1c1ddec00ab99dbf08e))
* **clients:** remove aggregated client from paginators ([#4496](https://github.com/aws/aws-sdk-js-v3/issues/4496)) ([aea457a](https://github.com/aws/aws-sdk-js-v3/commit/aea457ab5d4e72939f2f608140d82b60526eb716))


### Features

* **client-athena:** A new field SubstatementType is added to GetQueryExecution API, so customers have an error free way to detect the query type and interpret the result. ([12c6c35](https://github.com/aws/aws-sdk-js-v3/commit/12c6c35a2357e816ba9037df7071eee9e82963f4))
* **client-dynamodb:** Adds deletion protection support to DynamoDB tables. Tables with deletion protection enabled cannot be deleted. Deletion protection is disabled by default, can be enabled via the CreateTable or UpdateTable APIs, and is visible in TableDescription. This setting is not replicated for Global Tables. ([af81575](https://github.com/aws/aws-sdk-js-v3/commit/af815752ded1a46afe471176a5de3c36c578a445))
* **client-ec2:** Introducing Amazon EC2 C7g, M7g and R7g instances, powered by the latest generation AWS Graviton3 processors and deliver up to 25% better performance over Graviton2-based instances. ([8a6dcfa](https://github.com/aws/aws-sdk-js-v3/commit/8a6dcfa8eda7070a60be8b37dcc8a421a96559c2))
* **client-lakeformation:** This release adds two new API support "GetDataCellsFiler" and "UpdateDataCellsFilter", and also updates the corresponding documentation. ([9a29cfb](https://github.com/aws/aws-sdk-js-v3/commit/9a29cfb8c07c21bb2a425a9057a38fa9154454c9))
* **client-mediapackage-vod:** This release provides the date and time VOD resources were created. ([eb5cff6](https://github.com/aws/aws-sdk-js-v3/commit/eb5cff6754ad5acf08c9abdf3020258388369a1f))
* **client-mediapackage:** This release provides the date and time live resources were created. ([e91ea70](https://github.com/aws/aws-sdk-js-v3/commit/e91ea70093a6e454beaaf7134449e8a2f10abb26))
* **client-route53resolver:** Add dual-stack and IPv6 support for Route 53 Resolver Endpoint,Add IPv6 target IP in Route 53 Resolver Forwarding Rule ([ab22b63](https://github.com/aws/aws-sdk-js-v3/commit/ab22b6321f67844761992b20b312893f1b4fcfa2))
* **client-sagemaker:** There needs to be a user identity to specify the SageMaker user who perform each action regarding the entity. However, these is a not a unified concept of user identity across SageMaker service that could be used today. ([392879f](https://github.com/aws/aws-sdk-js-v3/commit/392879ffd1672f9eeedcba1f0af25c8b07f2e80b))
* **clients:** update client endpoints as of 2023-03-08 ([2fb9a44](https://github.com/aws/aws-sdk-js-v3/commit/2fb9a440e78e56cd8688c97f735b3c803524ed54))
* **middleware-logger:** log request errors ([#4252](https://github.com/aws/aws-sdk-js-v3/issues/4252)) ([8c667ff](https://github.com/aws/aws-sdk-js-v3/commit/8c667ff14c6985de3a441d0a059d81b8c609eb46))
* **shared-ini-file-loader:** enable uncached credential loading ([#4253](https://github.com/aws/aws-sdk-js-v3/issues/4253)) ([89dc903](https://github.com/aws/aws-sdk-js-v3/commit/89dc903e852bb93e4b5cc18589201ea1961250d3))





# [3.286.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.285.0...v3.286.0) (2023-03-07)


### Features

* **client-database-migration-service:** This release adds DMS Fleet Advisor Target Recommendation APIs and exposes functionality for DMS Fleet Advisor. It adds functionality to start Target Recommendation calculation. ([b09608d](https://github.com/aws/aws-sdk-js-v3/commit/b09608dc4f80a98628a12a6ecc0d336958c0f91e))
* **clients:** update client endpoints as of 2023-03-07 ([6678e02](https://github.com/aws/aws-sdk-js-v3/commit/6678e020f2792e02f4b1434d8c66381f3484aad6))





# [3.285.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.284.0...v3.285.0) (2023-03-06)


### Features

* **client-account:** AWS Account alternate contact email addresses can now have a length of 254 characters and contain the character "|". ([6dc46cf](https://github.com/aws/aws-sdk-js-v3/commit/6dc46cf30ac22c0044e3389224a6fafe5349e2ad))





# [3.284.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.283.0...v3.284.0) (2023-03-03)


### Bug Fixes

* **clients:** add unnamed enums to enums-to-strip.json ([#4489](https://github.com/aws/aws-sdk-js-v3/issues/4489)) ([81d5cde](https://github.com/aws/aws-sdk-js-v3/commit/81d5cdee1156f96ee69805ff23dc77cc77d28d9e))
* **s3-presigned-post:** move @aws-sdk/client-s3 to a normal dependency ([#4483](https://github.com/aws/aws-sdk-js-v3/issues/4483)) ([6fee65c](https://github.com/aws/aws-sdk-js-v3/commit/6fee65c2fb5cd78537a261c3ca8a563b1e2e986f))


### Features

* **client-ec2:** This release adds support for a new boot mode for EC2 instances called 'UEFI Preferred'. ([e5182e1](https://github.com/aws/aws-sdk-js-v3/commit/e5182e146e2ad9925525dbb2cde72732b8813834))
* **client-mediaconvert:** The AWS Elemental MediaConvert SDK has improved handling for different input and output color space combinations. ([2414092](https://github.com/aws/aws-sdk-js-v3/commit/24140920e09429308b728ee96d5ad353dc0fb4ee))
* **client-medialive:** AWS Elemental MediaLive adds support for Nielsen watermark timezones. ([878da7a](https://github.com/aws/aws-sdk-js-v3/commit/878da7a805559174c3b8cd0753049e51f920cb70))
* **client-transcribe:** Amazon Transcribe now supports role access for these API operations: CreateVocabulary, UpdateVocabulary, CreateVocabularyFilter, and UpdateVocabularyFilter. ([bc4b706](https://github.com/aws/aws-sdk-js-v3/commit/bc4b706d5fecd5f8cb60a38bb4dd61a0d5bf1699))
* **clients:** update client endpoints as of 2023-03-03 ([aa83817](https://github.com/aws/aws-sdk-js-v3/commit/aa838177b5597b831942e94122f6cb8955a9b456))





# [3.283.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.282.0...v3.283.0) (2023-03-02)


### Features

* **client-iot:** A recurring maintenance window is an optional configuration used for rolling out the job document to all devices in the target group observing a predetermined start time, duration, and frequency that the maintenance window occurs. ([1e6be70](https://github.com/aws/aws-sdk-js-v3/commit/1e6be70616b1d5aa469648a3eb7d24d6ba72d66e))
* **client-migrationhubstrategy:** This release updates the File Import API to allow importing servers already discovered by customers with reduced pre-requisites. ([4ae64ef](https://github.com/aws/aws-sdk-js-v3/commit/4ae64ef12ed9dadbb22139fbe99810d793e86c89))
* **client-organizations:** This release introduces a new reason code, ACCOUNT_CREATION_NOT_COMPLETE, to ConstraintViolationException in CreateOrganization API. ([5e8e5b4](https://github.com/aws/aws-sdk-js-v3/commit/5e8e5b41ccb62c48b5743b20006c890a33ff1d36))
* **client-pipes:** This release fixes some input parameter range and patterns. ([0070675](https://github.com/aws/aws-sdk-js-v3/commit/007067506eee27d150b7291fc30e9a91ac4329cc))
* **client-pi:** This release adds a new field PeriodAlignment to allow the customer specifying the returned timestamp of time periods to be either the start or end time. ([3ab5412](https://github.com/aws/aws-sdk-js-v3/commit/3ab5412764a0ebfb0b0281a47812f8235cfc0e6f))
* **client-sagemaker:** Add a new field "EndpointMetrics" in SageMaker Inference Recommender "ListInferenceRecommendationsJobSteps" API response. ([376692c](https://github.com/aws/aws-sdk-js-v3/commit/376692c888acdacad5c39452b8facd5148075ad5))
* **clients:** update client endpoints as of 2023-03-02 ([7fb6e8d](https://github.com/aws/aws-sdk-js-v3/commit/7fb6e8d332b982301d4bd722b8ae9d937056e4e3))





# [3.282.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.281.0...v3.282.0) (2023-03-01)


### Features

* **client-codecatalyst:** Published Dev Environments StopDevEnvironmentSession API ([6458cf1](https://github.com/aws/aws-sdk-js-v3/commit/6458cf1e94868d9a18b7dbc0f5cc3c1bc4b3e5e2))
* **client-pricing:** This release adds 2 new APIs - ListPriceLists which returns a list of applicable price lists, and GetPriceListFileUrl which outputs a URL to retrieve your price lists from the generated file from ListPriceLists ([f7201bf](https://github.com/aws/aws-sdk-js-v3/commit/f7201bf1e0a66f5fe2a12b176468731e5a079fea))
* **client-s3outposts:** S3 on Outposts introduces a new API ListOutpostsWithS3, with this API you can list all your Outposts with S3 capacity. ([9b55483](https://github.com/aws/aws-sdk-js-v3/commit/9b55483d81e70d5d116d5ca96318dc739390a312))
* **clients:** update client endpoints as of 2023-03-01 ([a52821d](https://github.com/aws/aws-sdk-js-v3/commit/a52821d98440006777ada31bd69bd8eeee3f6121))
* **protocol-http:** use lowercase keys in Fields class ([#4450](https://github.com/aws/aws-sdk-js-v3/issues/4450)) ([e0db41d](https://github.com/aws/aws-sdk-js-v3/commit/e0db41d8eb512018662524a1b8f7c0655186492d))





# [3.281.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.280.0...v3.281.0) (2023-02-28)


### Features

* **client-comprehend:** Amazon Comprehend now supports flywheels to help you train and manage new model versions for custom models. ([af22194](https://github.com/aws/aws-sdk-js-v3/commit/af2219431139f6229b591484602e643ea0f92be7))
* **client-ec2:** This release allows IMDS support to be set to v2-only on an existing AMI, so that all future instances launched from that AMI will use IMDSv2 by default. ([b623f24](https://github.com/aws/aws-sdk-js-v3/commit/b623f244863585e9dc752a707a276f475568ae40))
* **client-lightsail:** This release adds Lightsail for Research feature support, such as GUI session access, cost estimates, stop instance on idle, and disk auto mount. ([f86feb5](https://github.com/aws/aws-sdk-js-v3/commit/f86feb54ea3dbccbc91577d060e8488cab79e50e))
* **client-managedblockchain:** This release adds support for tagging to the accessor resource in Amazon Managed Blockchain ([82de475](https://github.com/aws/aws-sdk-js-v3/commit/82de475e95f0b3a2be5431f3298dff10e99f2c3a))
* **client-omics:** Minor model changes to accomodate batch imports feature ([386065a](https://github.com/aws/aws-sdk-js-v3/commit/386065a1bcd3761bf641e973073fb90a3922b57a))
* **clients:** update client endpoints as of 2023-02-28 ([387a8e7](https://github.com/aws/aws-sdk-js-v3/commit/387a8e7744005655d731c40559d41e27b4f3d01f))





# [3.280.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.279.0...v3.280.0) (2023-02-27)


### Features

* **client-devops-guru:** This release adds the description field on ListAnomaliesForInsight and DescribeAnomaly API responses for proactive anomalies. ([58828d8](https://github.com/aws/aws-sdk-js-v3/commit/58828d843d3cf08562d4e69dbad06eb0a939bbb2))
* **client-drs:** New fields were added to reflect availability zone data in source server and recovery instance description commands responses, as well as source server launch status. ([3b2a484](https://github.com/aws/aws-sdk-js-v3/commit/3b2a48431cafc1e2def4a6300ecb47d5c106d18e))
* **client-internetmonitor:** CloudWatch Internet Monitor is a a new service within CloudWatch that will help application developers and network engineers continuously monitor internet performance metrics such as availability and performance between their AWS-hosted applications and end-users of these applications ([287cd60](https://github.com/aws/aws-sdk-js-v3/commit/287cd606c626d617eb9469a985b2210c67b3f198))
* **client-lambda:** This release adds the ability to create ESMs with Document DB change streams as event source. For more information see  https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html. ([84d9c25](https://github.com/aws/aws-sdk-js-v3/commit/84d9c25d22b89f334d79fac3c44ae55104c6bdf8))
* **client-mediaconvert:** The AWS Elemental MediaConvert SDK has added support for HDR10 to SDR tone mapping, and animated GIF video input sources. ([6e976d0](https://github.com/aws/aws-sdk-js-v3/commit/6e976d07e09c97fe7afbc1ee1e4cafb7d6d9edcc))
* **client-timestream-write:** This release adds the ability to ingest batched historical data or migrate data in bulk from S3 into Timestream using CSV files. ([0435738](https://github.com/aws/aws-sdk-js-v3/commit/0435738024c04f03b02f54d172902e409bfd45ac))
* **clients:** update client endpoints as of 2023-02-27 ([6570862](https://github.com/aws/aws-sdk-js-v3/commit/65708620d23e0e9d1883c700b843417aa4018baa))





# [3.279.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.278.0...v3.279.0) (2023-02-24)


### Bug Fixes

* **smithy-client:** optional param in error handling path ([#4410](https://github.com/aws/aws-sdk-js-v3/issues/4410)) ([df945f5](https://github.com/aws/aws-sdk-js-v3/commit/df945f5225c6f7962e2b56d8c899156df427920a))


### Features

* **client-connectcases:** This release adds the ability to delete domains through the DeleteDomain API. For more information see https://docs.aws.amazon.com/cases/latest/APIReference/Welcome.html ([54f2e5f](https://github.com/aws/aws-sdk-js-v3/commit/54f2e5f7946f93ef6f3d79cd60774f1076e53d8b))
* **client-connect:** StartTaskContact API now supports linked task creation with a new optional RelatedContactId parameter ([a4ec9d7](https://github.com/aws/aws-sdk-js-v3/commit/a4ec9d7eab7893444f65fc69b379dde461b68df1))
* **client-securityhub:** New Security Hub APIs and updates to existing APIs that help you consolidate control findings and enable and disable controls across all supported standards ([c537c00](https://github.com/aws/aws-sdk-js-v3/commit/c537c00a1264bc3963fee835f4d39bc6c02b851c))





# [3.278.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.277.0...v3.278.0) (2023-02-23)


### Bug Fixes

* **middleware-host-header:** add port in host header if defined ([#4463](https://github.com/aws/aws-sdk-js-v3/issues/4463)) ([0bb8f31](https://github.com/aws/aws-sdk-js-v3/commit/0bb8f3141a0eae8dedb65f6c884f56e06ae90bba))


### Features

* **client-appflow:** This release enables the customers to choose whether to use Private Link for Metadata and Authorization call when using a private Salesforce connections ([136e139](https://github.com/aws/aws-sdk-js-v3/commit/136e139c921b28ce2e85941cda28b49755ed1f26))
* **client-ecs:** This release supports deleting Amazon ECS task definitions that are in the INACTIVE state. ([689316a](https://github.com/aws/aws-sdk-js-v3/commit/689316adedabca4049f3ab4338b634a07eec0717))
* **client-iot-wireless:** In this release, we add additional capabilities for the FUOTA which allows user to configure the fragment size, the sending interval and the redundancy ratio of the FUOTA tasks ([c5c9017](https://github.com/aws/aws-sdk-js-v3/commit/c5c9017047d5c093bb23aca844a35f54be5ccbbf))
* **client-location:** This release adds support for using Maps APIs with an API Key in addition to AWS Cognito. This includes support for adding, listing, updating and deleting API Keys. ([594acf0](https://github.com/aws/aws-sdk-js-v3/commit/594acf0a055630b752eb41f35a8383144d3cc971))
* **client-macie2:** This release adds support for a new finding type, Policy:IAMUser/S3BucketSharedWithCloudFront, and S3 bucket metadata that indicates if a bucket is shared with an Amazon CloudFront OAI or OAC. ([cd01113](https://github.com/aws/aws-sdk-js-v3/commit/cd01113173bd39ba8f8d4582dc2d9ab8814d72ba))
* **client-wafv2:** You can now associate an AWS WAF v2 web ACL with an AWS App Runner service. ([2faee2d](https://github.com/aws/aws-sdk-js-v3/commit/2faee2d0d546f5df3261abc76cc9fe364164409d))
* **clients:** update client endpoints as of 2023-02-23 ([9b28eda](https://github.com/aws/aws-sdk-js-v3/commit/9b28eda7f4599053703c058986beb0c924a6759b))





# [3.277.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.276.0...v3.277.0) (2023-02-22)


### Features

* **client-chime-sdk-voice:** This release introduces support for Voice Connector media metrics in the Amazon Chime SDK Voice namespace ([55c7cec](https://github.com/aws/aws-sdk-js-v3/commit/55c7cec9a55512b13b85dbeff0114a418638614f))
* **client-cloudfront:** CloudFront now supports block lists in origin request policies so that you can forward all headers, cookies, or query string from viewer requests to the origin *except* for those specified in the block list. ([4835fc8](https://github.com/aws/aws-sdk-js-v3/commit/4835fc800bf05075eb76090c6202b3ccb5d9682f))
* **client-datasync:** AWS DataSync has relaxed the minimum length constraint of AccessKey for Object Storage locations to 1. ([12260a9](https://github.com/aws/aws-sdk-js-v3/commit/12260a9df049f0ec91f2d1a204edece220b00d52))
* **client-opensearch:** This release lets customers configure Off-peak window and software update related properties for a new/existing domain. It enhances the capabilities of StartServiceSoftwareUpdate API; adds 2 new APIs - ListScheduledActions & UpdateScheduledAction; and allows Auto-tune to make use of Off-peak window. ([6a0bbc2](https://github.com/aws/aws-sdk-js-v3/commit/6a0bbc237177f68d8a17578497c14586d7907865))
* **client-rum:** CloudWatch RUM now supports CloudWatch Custom Metrics ([435c071](https://github.com/aws/aws-sdk-js-v3/commit/435c071109651ba50d36b1a69461a1b1f8169303))





# [3.276.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.275.0...v3.276.0) (2023-02-21)


### Features

* **client-quicksight:** S3 data sources now accept a custom IAM role. ([6d0fccc](https://github.com/aws/aws-sdk-js-v3/commit/6d0fccc898738fdc0979dd25284ed645f0ee8fbf))
* **client-resiliencehub:** In this release we improved resilience hub application creation and maintenance by introducing new resource and app component crud APIs, improving visibility and maintenance of application input sources and added support for additional information attributes to be provided by customers. ([014cd1c](https://github.com/aws/aws-sdk-js-v3/commit/014cd1cc61125583d1acdc68e2a43b32893d8be6))
* **client-tnb:** This is the initial SDK release for AWS Telco Network Builder (TNB). AWS Telco Network Builder is a network automation service that helps you deploy and manage telecom networks. ([3365917](https://github.com/aws/aws-sdk-js-v3/commit/33659176e07e08612e60bdf8c6c53defcc02d0c7))
* **clients:** update client endpoints as of 2023-02-21 ([6b873da](https://github.com/aws/aws-sdk-js-v3/commit/6b873da79251652bba32bb45bc3f9c107e3d2e88))





# [3.275.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.274.0...v3.275.0) (2023-02-20)


### Features

* **client-auditmanager:** This release introduces a ServiceQuotaExceededException to the UpdateAssessmentFrameworkShare API operation. ([aaa9c82](https://github.com/aws/aws-sdk-js-v3/commit/aaa9c82a9b93d69a5d0de2691e38846d84c45829))
* **client-connect:** Reasons for failed diff has been approved by SDK Reviewer ([d714121](https://github.com/aws/aws-sdk-js-v3/commit/d714121337a6c2123b725f6d49c9e753f0b3d509))





# [3.274.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.273.0...v3.274.0) (2023-02-17)


### Bug Fixes

* **util-dns:** fix types downlevel compatibility ([#4442](https://github.com/aws/aws-sdk-js-v3/issues/4442)) ([672d33b](https://github.com/aws/aws-sdk-js-v3/commit/672d33bc1762a843705c6d8bbf340683e4d987ed))
* **xhr-http-handler:** read response body is incomplete ([#4422](https://github.com/aws/aws-sdk-js-v3/issues/4422)) ([f562bc8](https://github.com/aws/aws-sdk-js-v3/commit/f562bc8b1423e308cb1cc550bc70d24217abb16b))


### Features

* **client-apprunner:** This release supports removing MaxSize limit for AutoScalingConfiguration. ([a44b1a7](https://github.com/aws/aws-sdk-js-v3/commit/a44b1a7a3b4f0ff82b3990e9b265873644e75743))
* **client-glue:** Release of Delta Lake Data Lake Format for Glue Studio Service ([bc35b7a](https://github.com/aws/aws-sdk-js-v3/commit/bc35b7a1e5bb077afc514b98fa13ea02da88b313))
* **clients:** update client endpoints as of 2023-02-17 ([a77e1bc](https://github.com/aws/aws-sdk-js-v3/commit/a77e1bc7eb542756548fe9fda556d079a5b50cc9))
* **util-dns:** implement caching for NodeDnsLookupHostResolver ([#4433](https://github.com/aws/aws-sdk-js-v3/issues/4433)) ([3826c07](https://github.com/aws/aws-sdk-js-v3/commit/3826c075f83c21001099ffde9ebd0c685f8a8d90))





# [3.273.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.272.0...v3.273.0) (2023-02-16)


### Features

* **client-emr:** This release provides customers the ability to define a timeout period for procuring capacity during a resize operation for Instance Fleet clusters. Customers can specify this timeout using the ResizeSpecifications parameter supported by RunJobFlow, ModifyInstanceFleet and AddInstanceFleet APIs. ([90e21ca](https://github.com/aws/aws-sdk-js-v3/commit/90e21cab23fd35f9b0db438a457b280692af7bc7))
* **client-grafana:** With this release Amazon Managed Grafana now supports inbound Network Access Control that helps you to restrict user access to your Grafana workspaces ([1f69ee1](https://github.com/aws/aws-sdk-js-v3/commit/1f69ee158b75ae1c77d65b96c7e38b39ed1b8d68))
* **clients:** update client endpoints as of 2023-02-16 ([9a4c154](https://github.com/aws/aws-sdk-js-v3/commit/9a4c1542cbd45d607f0190e35b6373cf08317ca9))





# [3.272.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.271.0...v3.272.0) (2023-02-15)


### Features

* **client-cloudtrail:** This release adds an InsufficientEncryptionPolicyException type to the StartImport endpoint ([4253089](https://github.com/aws/aws-sdk-js-v3/commit/42530890ad3272056bdaa344b1ce71fa85d7ac06))
* **client-frauddetector:** This release introduces Lists feature which allows customers to reference a set of values in Fraud Detector's rules. With Lists, customers can dynamically manage these attributes in real time. Lists can be created/deleted and its contents can be modified using the Fraud Detector API. ([6186c03](https://github.com/aws/aws-sdk-js-v3/commit/6186c03f8ccb4656663134f96514184d7b8bf9d6))
* **client-glue:** Fix DirectJDBCSource not showing up in CLI code gen ([bedba23](https://github.com/aws/aws-sdk-js-v3/commit/bedba236f008e74f97b7e8c2f96f12eabc24c374))
* **client-privatenetworks:** This release introduces a new StartNetworkResourceUpdate API, which enables return/replacement of hardware from a NetworkSite. ([804b9bc](https://github.com/aws/aws-sdk-js-v3/commit/804b9bca58baf06576651b2ab56dbf3d32c6f30e))
* **client-wafv2:** For protected CloudFront distributions, you can now use the AWS WAF Fraud Control account takeover prevention (ATP) managed rule group to block new login attempts from clients that have recently submitted too many failed login attempts. ([dc28d4e](https://github.com/aws/aws-sdk-js-v3/commit/dc28d4e5fc995fbf328df04e9ec3bdc2418930af))
* **clients:** update client endpoints as of 2023-02-15 ([2e05ae8](https://github.com/aws/aws-sdk-js-v3/commit/2e05ae8d556cfb84b8f3bc1e7e84be15f9541ffd))





# [3.271.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.270.0...v3.271.0) (2023-02-14)


### Bug Fixes

* **protocol-http:** export field types ([#4432](https://github.com/aws/aws-sdk-js-v3/issues/4432)) ([b8320f4](https://github.com/aws/aws-sdk-js-v3/commit/b8320f4efaab6d306b3fbe36399e11de6bb7d280))


### Features

* **client-appconfig:** AWS AppConfig now offers the option to set a version label on hosted configuration versions. Version labels allow you to identify specific hosted configuration versions based on an alternate versioning scheme that you define. ([1ffdf34](https://github.com/aws/aws-sdk-js-v3/commit/1ffdf3435a0a0141d161fbe2941d14fb45b132fa))
* **client-datasync:** With this launch, we are giving customers the ability to use older SMB protocol versions, enabling them to use DataSync to copy data to and from their legacy storage arrays. ([125850c](https://github.com/aws/aws-sdk-js-v3/commit/125850c8e87c9027849b9edce499f84cc34a145c))
* **client-ec2:** With this release customers can turn host maintenance on or off when allocating or modifying a supported dedicated host. Host maintenance is turned on by default for supported hosts. ([62c8b91](https://github.com/aws/aws-sdk-js-v3/commit/62c8b91bc9598ed13801c2643c8b077aca297a6e))





# [3.270.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.269.0...v3.270.0) (2023-02-13)


### Features

* **client-account:** This release of the Account Management API enables customers to view and manage whether AWS Opt-In Regions are enabled or disabled for their Account. For more information, see https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-regions.html ([820e2e2](https://github.com/aws/aws-sdk-js-v3/commit/820e2e267b769ecd35fea9fa7f3d177fda00e617))
* **client-appconfigdata:** AWS AppConfig now offers the option to set a version label on hosted configuration versions. If a labeled hosted configuration version is deployed, its version label is available in the GetLatestConfiguration response. ([f274732](https://github.com/aws/aws-sdk-js-v3/commit/f27473290cf4588f55c32df39ffeba2fef19290b))
* **client-snowball:** Adds support for EKS Anywhere on Snowball. AWS Snow Family customers can now install EKS Anywhere service on Snowball Edge Compute Optimized devices. ([19042b5](https://github.com/aws/aws-sdk-js-v3/commit/19042b533433f90dc738f58a34c530e8ee603dad))
* **clients:** update client endpoints as of 2023-02-13 ([2241bdd](https://github.com/aws/aws-sdk-js-v3/commit/2241bdd9fc340e8dd6d5f16e3c41447f634f0d29))





# [3.269.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.268.0...v3.269.0) (2023-02-10)


### Features

* **client-auto-scaling:** You can now either terminate/replace, ignore, or wait for EC2 Auto Scaling instances on standby or protected from scale in. Also, you can also roll back changes from a failed instance refresh. ([39dae43](https://github.com/aws/aws-sdk-js-v3/commit/39dae43c882e8aceb194f0057f6dcdb8f59b54b3))
* **client-connect:** This update provides the Wisdom session ARN for contacts enabled for Wisdom in the chat channel. ([672092d](https://github.com/aws/aws-sdk-js-v3/commit/672092dbf10850029bcf6619224ae7781a9fde9e))
* **client-ec2:** Adds support for waiters that automatically poll for an imported snapshot until it reaches the completed state. ([f4a09f3](https://github.com/aws/aws-sdk-js-v3/commit/f4a09f3ecaf92fd97252a5aaff706c056f7278bb))
* **client-polly:** Amazon Polly adds two new neural Japanese voices - Kazuha, Tomoko ([6e4a848](https://github.com/aws/aws-sdk-js-v3/commit/6e4a84812c3f3d316b9cd8c4889569f8cea4b6ea))
* **client-sagemaker:** Amazon SageMaker Autopilot adds support for selecting algorithms in CreateAutoMLJob API. ([ca2a385](https://github.com/aws/aws-sdk-js-v3/commit/ca2a3851a86fb997af245d7940b9777fadc9dd21))
* **clients:** update client endpoints as of 2023-02-10 ([d734ab2](https://github.com/aws/aws-sdk-js-v3/commit/d734ab293053bd2efc21a3ff38cdb5b005f217a9))





# [3.268.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.267.0...v3.268.0) (2023-02-09)


### Features

* **client-emr-containers:** EMR on EKS allows configuring retry policies for job runs through the StartJobRun API. Using retry policies, a job cause a driver pod to be restarted automatically if it fails or is deleted. The job's status can be seen in the DescribeJobRun and ListJobRun APIs and monitored using CloudWatch events. ([858b40a](https://github.com/aws/aws-sdk-js-v3/commit/858b40ac0c7a85e4870cea905d77745c52f0fa25))
* **client-evidently:** Updated entity overrides parameter to accept up to 2500 overrides or a total of 40KB. ([48196dd](https://github.com/aws/aws-sdk-js-v3/commit/48196dda195c8f30e2bfae90c512adff546a4ccd))
* **client-lex-models-v2:** AWS Lex now supports Network of Bots. ([f1e14ec](https://github.com/aws/aws-sdk-js-v3/commit/f1e14ec275240e8b531f8d20b71c91f5b7f645bb))
* **client-lex-runtime-v2:** AWS Lex now supports Network of Bots. ([ed0d68e](https://github.com/aws/aws-sdk-js-v3/commit/ed0d68ecf703c945408ad91b16616181f19b89b5))
* **client-migration-hub-refactor-spaces:** This release adds support for creating environments with a network fabric type of NONE ([5246fd7](https://github.com/aws/aws-sdk-js-v3/commit/5246fd76c5879249388103b8a6ea79375e4c7cd2))
* **clients:** update client endpoints as of 2023-02-09 ([48163fa](https://github.com/aws/aws-sdk-js-v3/commit/48163fac02b759fa9be59ee32fa82759ed17f409))
* **codegen:** bump codegen version to 0.14.0 ([#4420](https://github.com/aws/aws-sdk-js-v3/issues/4420)) ([88c2ed3](https://github.com/aws/aws-sdk-js-v3/commit/88c2ed33af164600a3e118e0e549be4be5d87bc5))





# [3.267.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.266.1...v3.267.0) (2023-02-08)


### Bug Fixes

* prefix error when checking for error status codes ([#4419](https://github.com/aws/aws-sdk-js-v3/issues/4419)) ([f8e86c2](https://github.com/aws/aws-sdk-js-v3/commit/f8e86c26436eea4246c55572251a6917448be402))


### Features

* **client-backup:** This release added one attribute (resource name) in the output model of our 9 existing APIs in AWS backup so that customers will see the resource name at the output. No input required from Customers. ([162432f](https://github.com/aws/aws-sdk-js-v3/commit/162432fe88e9c79abd2eabd20227148f443685b6))
* **client-cloudfront:** CloudFront Origin Access Control extends support to AWS Elemental MediaStore origins. ([8ff16f9](https://github.com/aws/aws-sdk-js-v3/commit/8ff16f910993ede7b979110c4b30b0b97064bdf8))
* **client-glue:** DirectJDBCSource + Glue 4.0 streaming options ([0593722](https://github.com/aws/aws-sdk-js-v3/commit/0593722388e1bec1623e3ced4d3f1a4e47a27f0c))
* **client-lakeformation:** This release removes the LFTagpolicyResource expression limits. ([690ee89](https://github.com/aws/aws-sdk-js-v3/commit/690ee897a4f1394f7018aa3ff2c122c24f399f21))
* **clients:** update client endpoints as of 2023-02-08 ([4cef2b1](https://github.com/aws/aws-sdk-js-v3/commit/4cef2b1ec5cc9e919b701342d204080b4165dafa))
* **util-dns:** add DNS interfaces and initial implementations ([#4386](https://github.com/aws/aws-sdk-js-v3/issues/4386)) ([2b5c0c5](https://github.com/aws/aws-sdk-js-v3/commit/2b5c0c5fd8df71191675de5fa1d1f9ec64ec7bd9))





## [3.266.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.266.0...v3.266.1) (2023-02-07)


### Bug Fixes

* **types:** declare Blob type without requiring dom ([#4408](https://github.com/aws/aws-sdk-js-v3/issues/4408)) ([0b943b5](https://github.com/aws/aws-sdk-js-v3/commit/0b943b5c9e93bd8098cfd82899559bdde4208c27))


### Features

* **clients:** update client endpoints as of 2023-02-07 ([64c05d3](https://github.com/aws/aws-sdk-js-v3/commit/64c05d336a28525795b98db280334498d490539a))





# [3.266.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.265.0...v3.266.0) (2023-02-06)


### Bug Fixes

* **features-dynamodb:** remove testing for error-should-be message ([#4409](https://github.com/aws/aws-sdk-js-v3/issues/4409)) ([a3ed754](https://github.com/aws/aws-sdk-js-v3/commit/a3ed754d03f23a58b705b6c529652a5560c5812a))
* **middleware-sdk-transcribe-streaming:** close sockets on WebSocketHandler.destroy() ([#4400](https://github.com/aws/aws-sdk-js-v3/issues/4400)) ([3a0cc76](https://github.com/aws/aws-sdk-js-v3/commit/3a0cc76f6cc65596d660f20e9d16561525e16816))


### Features

* **client-compute-optimizer:** AWS Compute optimizer can now infer if Kafka is running on an instance. ([65e7f31](https://github.com/aws/aws-sdk-js-v3/commit/65e7f31bcc29eb054b1547c633e0c956f0c75599))
* **client-customer-profiles:** This release deprecates the PartyType and Gender enum data types from the Profile model and replaces them with new PartyTypeString and GenderString attributes, which accept any string of length up to 255. ([4e190c7](https://github.com/aws/aws-sdk-js-v3/commit/4e190c7bc07a4e520a3d36cfe54b0484ea5d3636))
* **client-frauddetector:** My AWS Service (Amazon Fraud Detector) - This release introduces Cold Start Model Training which optimizes training for small datasets and adds intelligent methods for treating unlabeled data. You can now train Online Fraud Insights or Transaction Fraud Insights models with minimal historical-data. ([34dac99](https://github.com/aws/aws-sdk-js-v3/commit/34dac9954b1da6959fa1958abc94aa46edbace1b))
* **client-mediaconvert:** The AWS Elemental MediaConvert SDK has added improved scene change detection capabilities and a bandwidth reduction filter, along with video quality enhancements, to the AVC encoder. ([dea6044](https://github.com/aws/aws-sdk-js-v3/commit/dea6044a163b9283225036f81bf83c60ed2292e4))
* **client-outposts:** Adds OrderType to Order structure. Adds PreviousOrderId and PreviousLineItemId to LineItem structure. Adds new line item status REPLACED. Increases maximum length of pagination token. ([312c4e4](https://github.com/aws/aws-sdk-js-v3/commit/312c4e4f822c6d0de9e8da21ebc38ed6fbc96429))
* **clients:** update client endpoints as of 2023-02-06 ([f023912](https://github.com/aws/aws-sdk-js-v3/commit/f0239123c9eedb3d2d01ea66f14ad2429e06feb3))
* **protocol-http:** add types for field ([#4390](https://github.com/aws/aws-sdk-js-v3/issues/4390)) ([688b866](https://github.com/aws/aws-sdk-js-v3/commit/688b8666f35b128cf1d696c9fa608e914039319a))
* **types:** add request and response interfaces ([#4389](https://github.com/aws/aws-sdk-js-v3/issues/4389)) ([6b1be0b](https://github.com/aws/aws-sdk-js-v3/commit/6b1be0b6f00a4dfdfe091ae7e2c74a9256d98edb))
* **util-stream:** create util-stream package ([#4402](https://github.com/aws/aws-sdk-js-v3/issues/4402)) ([91ec1aa](https://github.com/aws/aws-sdk-js-v3/commit/91ec1aa33af1f43e6576d00dc5e5e14643c35b73))





# [3.265.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.264.0...v3.265.0) (2023-02-03)


### Features

* **client-proton:** Add new GetResourcesSummary API ([231ebe5](https://github.com/aws/aws-sdk-js-v3/commit/231ebe58fa5a0455c2aa01ea4ef24e452b3a2f8c))
* **clients:** update client endpoints as of 2023-02-03 ([ecbb791](https://github.com/aws/aws-sdk-js-v3/commit/ecbb79197ba1d3b1d56b2ca1c620e1cade221e6f))





# [3.264.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.263.0...v3.264.0) (2023-02-02)


### Bug Fixes

* **s3-presigned-post:** use endpoints 2.0 for custom endpoints ([#4366](https://github.com/aws/aws-sdk-js-v3/issues/4366)) ([5054ba5](https://github.com/aws/aws-sdk-js-v3/commit/5054ba5fd8622960b699dfeb91a4b06dd77f5a70))


### Features

* **client-appconfig:** AWS AppConfig introduces KMS customer-managed key (CMK) encryption of configuration data, along with AWS Secrets Manager as a new configuration data source. S3 objects using SSE-KMS encryption and SSM Parameter Store SecureStrings are also now supported. ([ab41e92](https://github.com/aws/aws-sdk-js-v3/commit/ab41e929b91b9ebb94385c61478dffcfbc856eff))
* **client-connect:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([c678efa](https://github.com/aws/aws-sdk-js-v3/commit/c678efa9e2b9d0a2b1be011a97b045e8cf7d06af))
* **client-ec2:** Documentation updates for EC2. ([3ff7382](https://github.com/aws/aws-sdk-js-v3/commit/3ff7382c23805549032fe911ea4fd3a52cba3ce3))
* **client-keyspaces:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([175c1f1](https://github.com/aws/aws-sdk-js-v3/commit/175c1f1dfd600341d18c8869e5cde3a2ea44da7c))
* **client-quicksight:** QuickSight support for Radar Chart and Dashboard Publish Options ([1f89298](https://github.com/aws/aws-sdk-js-v3/commit/1f89298178466ad3a03a2153a80afb7f8e4e8cff))
* **client-redshift:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([9456476](https://github.com/aws/aws-sdk-js-v3/commit/9456476213572aa6d178a46681430caf0c7ec14f))
* **client-sso-admin:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([075eee7](https://github.com/aws/aws-sdk-js-v3/commit/075eee7602bd016f1b4f3f596e6277260267feac))
* **clients:** update client endpoints as of 2023-02-02 ([323ff80](https://github.com/aws/aws-sdk-js-v3/commit/323ff80583888999d23f5366497a4b4e2d5b0460))





# [3.263.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.262.0...v3.263.0) (2023-02-01)


### Features

* **client-devops-guru:** This release adds filter support ListAnomalyForInsight API. ([1cc91bd](https://github.com/aws/aws-sdk-js-v3/commit/1cc91bdab4b4d8bbc1c06ef437fd27ffc8f0cc33))
* **client-forecast:** This release will enable customer select INCREMENTAL as ImportModel in Forecast's CreateDatasetImportJob API. Verified latest SDK containing required attribute, following https://w.amazon.com/bin/view/AWS-Seer/Launch/Trebuchet/ ([4b13633](https://github.com/aws/aws-sdk-js-v3/commit/4b136332dddfbadfda868435f70790449f6bc154))
* **client-mediatailor:** The AWS Elemental MediaTailor SDK for Channel Assembly has added support for program updates, and the ability to clip the end of VOD sources in programs. ([0112e73](https://github.com/aws/aws-sdk-js-v3/commit/0112e73851a2f546c82a79ac01d4d01a2d96513c))
* **client-sns:** Additional attributes added for set-topic-attributes. ([dc09a43](https://github.com/aws/aws-sdk-js-v3/commit/dc09a43d7d3893b38a405e10b937ed612d836fa2))
* **clients:** update client endpoints as of 2023-02-01 ([4e80ee7](https://github.com/aws/aws-sdk-js-v3/commit/4e80ee7e80f7f4464bb280a358559641dbd88a1e))





# [3.262.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.261.0...v3.262.0) (2023-01-31)


### Features

* **client-accessanalyzer:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([5d929fd](https://github.com/aws/aws-sdk-js-v3/commit/5d929fda8db8fda4507c2b88beee7d4a81af3e50))
* **client-appsync:** This release introduces the feature to support EventBridge as AppSync data source. ([32e4b9e](https://github.com/aws/aws-sdk-js-v3/commit/32e4b9e5bb198d01d39637ca8331ed1f11f60af7))
* **client-cloudtrail-data:** Add CloudTrail Data Service to enable users to ingest activity events from non-AWS sources into CloudTrail Lake. ([6ad814a](https://github.com/aws/aws-sdk-js-v3/commit/6ad814a46b6760b27a1f510ebace31b770fb14a3))
* **client-cloudtrail:** Add new "Channel" APIs to enable users to manage channels used for CloudTrail Lake integrations, and "Resource Policy" APIs to enable users to manage the resource-based permissions policy attached to a channel. ([d85ae10](https://github.com/aws/aws-sdk-js-v3/commit/d85ae108d3c206eca86eba0c8f5c52033dd901d0))
* **client-codeartifact:** This release introduces a new DeletePackage API, which enables deletion of a package and all of its versions from a repository. ([5131521](https://github.com/aws/aws-sdk-js-v3/commit/51315211049bf58352feb48f528c8c4ed12801d8))
* **client-connectparticipant:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([bdb884f](https://github.com/aws/aws-sdk-js-v3/commit/bdb884f1474cb0eb880bcd7b9563ea82ad46ff82))
* **client-ec2:** This launch allows customers to associate up to 8 IP addresses to their NAT Gateways to increase the limit on concurrent connections to a single destination by eight times from 55K to 440K. ([02a5e1a](https://github.com/aws/aws-sdk-js-v3/commit/02a5e1a84c3db2e8599b374e46e98756ca1dbb5e))
* **client-groundstation:** DigIF Expansion changes to the Customer APIs. ([f6f9e90](https://github.com/aws/aws-sdk-js-v3/commit/f6f9e900b47200db81449cd084404763d87f5db4))
* **client-iot:** Added support for IoT Rules Engine Cloudwatch Logs action batch mode. ([3e1f2a5](https://github.com/aws/aws-sdk-js-v3/commit/3e1f2a5ce46407c6f3ffab66077da5dac6d4342d))
* **client-kinesis:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([6af967e](https://github.com/aws/aws-sdk-js-v3/commit/6af967ec2c91b641d158de174e38759a5eeec681))
* **client-opensearch:** Amazon OpenSearch Service adds the option for a VPC endpoint connection between two domains when the local domain uses OpenSearch version 1.3 or 2.3. You can now use remote reindex to copy indices from one VPC domain to another without a reverse proxy. ([f8656f0](https://github.com/aws/aws-sdk-js-v3/commit/f8656f0048b1befc9ac1206ada54c5dda43fc14d))
* **client-outposts:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([0865158](https://github.com/aws/aws-sdk-js-v3/commit/0865158a4ebc784435116f03c4dc2af61bfd0d89))
* **client-polly:** Amazon Polly adds two new neural American English voices - Ruth, Stephen ([58c3749](https://github.com/aws/aws-sdk-js-v3/commit/58c3749c8e8a9ad63e829e9551a1a9164765b554))
* **client-sagemaker:** Amazon SageMaker Automatic Model Tuning now supports more completion criteria for Hyperparameter Optimization. ([6d04ea9](https://github.com/aws/aws-sdk-js-v3/commit/6d04ea956e2a022d41da4e7199c6a2ff46b95870))
* **client-securityhub:** New fields have been added to the AWS Security Finding Format. Compliance.SecurityControlId is a unique identifier for a security control across standards. Compliance.AssociatedStandards contains all enabled standards in which a security control is enabled. ([51a6cc8](https://github.com/aws/aws-sdk-js-v3/commit/51a6cc862c4c04c50797c8f577c6f36de5b2fd76))
* **client-support:** This fixes incorrect endpoint construction when a customer is explicitly setting a region. ([c6f86d2](https://github.com/aws/aws-sdk-js-v3/commit/c6f86d2bd368acda9a955d83be622a0062e40974))
* **clients:** update client endpoints as of 2023-01-31 ([10f479f](https://github.com/aws/aws-sdk-js-v3/commit/10f479f293d31a1c7cb30450024dd26a3676627f))





# [3.261.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.260.0...v3.261.0) (2023-01-30)


### Bug Fixes

* **codegen:** safe access for error code location ([#4367](https://github.com/aws/aws-sdk-js-v3/issues/4367)) ([8991512](https://github.com/aws/aws-sdk-js-v3/commit/899151267fe593bb3cf18917a09108b93cf96fa2))


### Features

* **client-application-discovery-service:** Update ImportName validation to 255 from the current length of 100 ([3cc1581](https://github.com/aws/aws-sdk-js-v3/commit/3cc158192ccb0829c9931a4396eab950a91b9573))
* **client-clouddirectory:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([54bbffe](https://github.com/aws/aws-sdk-js-v3/commit/54bbffe022ff490b6262546a1ab58221a757d86d))
* **client-cloudformation:** This feature provides a method of obtaining which regions a stackset has stack instances deployed in. ([eb10720](https://github.com/aws/aws-sdk-js-v3/commit/eb10720980872d4acea06bf957bb990de51dfaa9))
* **client-dlm:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([1295499](https://github.com/aws/aws-sdk-js-v3/commit/1295499b6c96b9b47dd48a877ed949748f1741cc))
* **client-ec2:** We add Prefix Lists as a new route destination option for LocalGatewayRoutes. This will allow customers to create routes to Prefix Lists. Prefix List routes will allow customers to group individual CIDR routes with the same target into a single route. ([52a9d0c](https://github.com/aws/aws-sdk-js-v3/commit/52a9d0c3609b4c47bf405e49422887c748970926))
* **client-imagebuilder:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([05edd3e](https://github.com/aws/aws-sdk-js-v3/commit/05edd3ede8b5083be00c487aadf367315dc9da7e))
* **client-kafka:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([89fb3ff](https://github.com/aws/aws-sdk-js-v3/commit/89fb3ffb2440b56f8fc9bf768491d884432daafe))
* **client-mediaconvert:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([16d8126](https://github.com/aws/aws-sdk-js-v3/commit/16d812690b3ddd73268ae000b9251f22923cda6f))
* **client-swf:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([0e9fe1c](https://github.com/aws/aws-sdk-js-v3/commit/0e9fe1c9e4856f2bef9a860b3bc0537c6bbe2879))
* **smithy-client:** parse datetime offsets ([#4379](https://github.com/aws/aws-sdk-js-v3/issues/4379)) ([c1d323b](https://github.com/aws/aws-sdk-js-v3/commit/c1d323b92199443ec4909e814975365d21fadea0))





# [3.260.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.259.0...v3.260.0) (2023-01-27)


### Bug Fixes

* **codeowners:** fix syntax and precedence ([#4378](https://github.com/aws/aws-sdk-js-v3/issues/4378)) ([863a72d](https://github.com/aws/aws-sdk-js-v3/commit/863a72d9992653591a0dbfb53d421d08de8e8af9))


### Features

* **client-application-auto-scaling:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([19a7a84](https://github.com/aws/aws-sdk-js-v3/commit/19a7a84b5805744dba11ca91fa5f9937725a38a4))
* **client-appstream:** Fixing the issue where Appstream waiters hang for fleet_started and fleet_stopped. ([2d93bfa](https://github.com/aws/aws-sdk-js-v3/commit/2d93bfa678893a486fde3e45c631ecab0c7b86f0))
* **client-elastic-beanstalk:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([9407187](https://github.com/aws/aws-sdk-js-v3/commit/94071876dab254e0547d99e17da2e70e4a6b62de))
* **client-fis:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([bb8ec2f](https://github.com/aws/aws-sdk-js-v3/commit/bb8ec2ffec8887cad0558dcf73270a67491a98e5))
* **client-glacier:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([ca4e45e](https://github.com/aws/aws-sdk-js-v3/commit/ca4e45e1f4a5f1513ec745b366d3a5200dc0baf8))
* **client-greengrass:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([5529c0a](https://github.com/aws/aws-sdk-js-v3/commit/5529c0a66f58d1417ff4c9bd917554274ef98556))
* **client-greengrassv2:** Enabled FIPS endpoints for GovCloud (US) in SDK. ([d8008a7](https://github.com/aws/aws-sdk-js-v3/commit/d8008a7acc64ff879bef7875a842c5e200cf7a1a))
* **client-mediatailor:** This release introduces the As Run logging type, along with API and documentation updates. ([349aa88](https://github.com/aws/aws-sdk-js-v3/commit/349aa88fde953d965d6d1ecdf8614ca0c35b1d43))
* **client-outposts:** Adding support for payment term in GetOrder, CreateOrder responses. ([2ff323a](https://github.com/aws/aws-sdk-js-v3/commit/2ff323ac18cbb781e27204a0e0a0a45306215b00))
* **client-sagemaker-runtime:** Amazon SageMaker Runtime which supports InvokeEndpointAsync asynchronously can now invoke endpoints with custom timeout values. Asynchronous invocations support longer processing times. ([446762d](https://github.com/aws/aws-sdk-js-v3/commit/446762d938669f3cc377470d174bc4f72122a706))
* **client-sagemaker:** This release supports running SageMaker Training jobs with container images that are in a private Docker registry. ([f0943cd](https://github.com/aws/aws-sdk-js-v3/commit/f0943cd978ecf8e5707967da9d0f9b3ba74619bb))
* **client-serverlessapplicationrepository:** Enabled FIPS endpoints for GovCloud (US) regions in SDK. ([eb09d02](https://github.com/aws/aws-sdk-js-v3/commit/eb09d024c12aaf251bb3dc934c264320c6f9cbbb))





# [3.259.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.258.0...v3.259.0) (2023-01-26)


### Bug Fixes

* **middleware-flexible-checksums:** append content-encoding aws-chunked instead of replacing ([#4368](https://github.com/aws/aws-sdk-js-v3/issues/4368)) ([dac8a92](https://github.com/aws/aws-sdk-js-v3/commit/dac8a926157f845e6ba13758f9c77b7eeafa76b0))
* **package.json:** build util-utf8-browser in build:crypto-dependencies ([#4374](https://github.com/aws/aws-sdk-js-v3/issues/4374)) ([405e881](https://github.com/aws/aws-sdk-js-v3/commit/405e88131695c722d167b9590e4a2fe818aea77c))
* **types:** changed NodeJS.ProcessEnv type to Record in node-config-provider ([#4319](https://github.com/aws/aws-sdk-js-v3/issues/4319)) ([872fe07](https://github.com/aws/aws-sdk-js-v3/commit/872fe07fa140ea95d7c894833de7241dfab195e7))


### Features

* **client-eventbridge:** Minor comments for Redshift Serverless workgroup target support. ([5e5f4b2](https://github.com/aws/aws-sdk-js-v3/commit/5e5f4b2a24e8cad645117ab659ac0952e3a8382a))
* **client-iotfleetwise:** Add model validation to BatchCreateVehicle and BatchUpdateVehicle operations that invalidate requests with an empty vehicles list. ([1d7f650](https://github.com/aws/aws-sdk-js-v3/commit/1d7f650dbcbe9ecbff879af4e29beaad7e24cc81))
* **client-s3:** Allow FIPS to be used with path-style URLs. ([e41ba91](https://github.com/aws/aws-sdk-js-v3/commit/e41ba91b5d187f1d9130f51df00ff4a843d16fd5))
* **clients:** update client endpoints as of 2023-01-26 ([cdf78f7](https://github.com/aws/aws-sdk-js-v3/commit/cdf78f7eaeed3ae4d0fe9fa9e2947d193f7d0aca))





# [3.258.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.257.0...v3.258.0) (2023-01-25)


### Bug Fixes

* **clients:** fix restXml protocol test for timestampFormat targets ([#4364](https://github.com/aws/aws-sdk-js-v3/issues/4364)) ([4beb93b](https://github.com/aws/aws-sdk-js-v3/commit/4beb93b90bdaa4a5d29a366587ea02f623a657dc))


### Features

* **client-cloudformation:** Enabled FIPS aws-us-gov endpoints in SDK. ([6eef788](https://github.com/aws/aws-sdk-js-v3/commit/6eef7888c622d06206d0422da308d08ec5709750))
* **client-ec2:** This release adds new functionality that allows customers to provision IPv6 CIDR blocks through Amazon VPC IP Address Manager (IPAM) as well as allowing customers to utilize IPAM Resource Discovery APIs. ([8973fbd](https://github.com/aws/aws-sdk-js-v3/commit/8973fbd8b97ea952c3ab2ef7feebdbecd83d3b41))
* **client-m2:** Add returnCode, batchJobIdentifier in GetBatchJobExecution response, for user to view the batch job execution result & unique identifier from engine. Also removed unused headers from REST APIs ([717df3e](https://github.com/aws/aws-sdk-js-v3/commit/717df3e07eee98254c3ac72a7ab995692218f85c))
* **client-polly:** Add 5 new neural voices - Sergio (es-ES), Andres (es-MX), Remi (fr-FR), Adriano (it-IT) and Thiago (pt-BR). ([dba9471](https://github.com/aws/aws-sdk-js-v3/commit/dba947156a4bee6030f6c6b43b4986c4d0282a78))
* **client-s3-control:** Add additional endpoint tests for S3 Control. Fix missing endpoint parameters for PutBucketVersioning and GetBucketVersioning. Prior to this fix, those operations may have resulted in an invalid endpoint being resolved. ([f699098](https://github.com/aws/aws-sdk-js-v3/commit/f6990983c5e5453e26fa8a0223f829dc79c71f2c))
* **client-sagemaker:** SageMaker Inference Recommender now decouples from Model Registry and could accept Model Name to invoke inference recommendations job; Inference Recommender now provides CPU/Memory Utilization metrics data in recommendation output. ([bf7623f](https://github.com/aws/aws-sdk-js-v3/commit/bf7623f4fae0e906134e88c5e7e22c775efe4b6a))
* **clients:** update client endpoints as of 2023-01-25 ([98f956f](https://github.com/aws/aws-sdk-js-v3/commit/98f956fd15548d526b11aa8324c7d138b33edc43))





# [3.257.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.256.0...v3.257.0) (2023-01-24)


### Features

* **client-databrew:** Enabled FIPS us-gov-west-1 endpoints in SDK. ([c22758d](https://github.com/aws/aws-sdk-js-v3/commit/c22758d00dcf9ef0eca6c7cc306a3ecbd85fb38c))
* **client-route-53:** Amazon Route 53 now supports the Asia Pacific (Melbourne) Region (ap-southeast-4) for latency records, geoproximity records, and private DNS for Amazon VPCs in that region. ([98c0783](https://github.com/aws/aws-sdk-js-v3/commit/98c07833021d52d60ca33429fc9d6096bbac6a5a))
* **client-ssm-sap:** This release provides updates to documentation and support for listing operations performed by AWS Systems Manager for SAP. ([dd335a9](https://github.com/aws/aws-sdk-js-v3/commit/dd335a9592b37c1d8cc5fa6f84217855d54e5401))
* **middleware-api-key:** add new auth middleware ([#4012](https://github.com/aws/aws-sdk-js-v3/issues/4012)) ([bdf7a59](https://github.com/aws/aws-sdk-js-v3/commit/bdf7a59d0df8a236ece3942a243e17b228013c27))





# [3.256.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.255.0...v3.256.0) (2023-01-23)


### Features

* **client-lambda:** Release Lambda RuntimeManagementConfig, enabling customers to better manage runtime updates to their Lambda functions. This release adds two new APIs, GetRuntimeManagementConfig and PutRuntimeManagementConfig, as well as support on existing Create/Get/Update function APIs. ([a3fb14e](https://github.com/aws/aws-sdk-js-v3/commit/a3fb14e2374282f6ff1f96b79da981a1f1f5e8ce))
* **client-sagemaker:** Amazon SageMaker Inference now supports P4de instance types. ([e3a9fba](https://github.com/aws/aws-sdk-js-v3/commit/e3a9fbac559ee9c0375db21bfb401bfa20662540))
* **clients:** update client endpoints as of 2023-01-23 ([781f2bb](https://github.com/aws/aws-sdk-js-v3/commit/781f2bbc3e8ed608a7e126d754c5a0e3b1d7b556))





# [3.255.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.254.0...v3.255.0) (2023-01-20)


### Features

* **client-ec2:** C6in, M6in, M6idn, R6in and R6idn instances are powered by 3rd Generation Intel Xeon Scalable processors (code named Ice Lake) with an all-core turbo frequency of 3.5 GHz. ([2b55e36](https://github.com/aws/aws-sdk-js-v3/commit/2b55e365809f2194fdac6809c5c06609205204fd))
* **client-ivs:** API and Doc update. Update to arns field in BatchGetStreamKey. Also updates to operations and structures. ([354f8e8](https://github.com/aws/aws-sdk-js-v3/commit/354f8e895383c4e0e0789ce1f26699659e3bcbb7))
* **client-quicksight:** This release adds support for data bars in QuickSight table and increases pivot table field well limit. ([6124aff](https://github.com/aws/aws-sdk-js-v3/commit/6124afff4798b625b5fbe4d14c2a98101b3b15b0))
* **clients:** update client endpoints as of 2023-01-20 ([bd2c13c](https://github.com/aws/aws-sdk-js-v3/commit/bd2c13c18534c16ffc64e585609b048526b4c3a0))





# [3.254.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.253.0...v3.254.0) (2023-01-19)


### Bug Fixes

* **clients:** revert timestamp format serialization ([#4348](https://github.com/aws/aws-sdk-js-v3/issues/4348)) ([0633164](https://github.com/aws/aws-sdk-js-v3/commit/063316423432fa21ace28678ea215cef27aff179))
* **util-utf8:** add missing dependency in middleware-flexible-checksums ([#4349](https://github.com/aws/aws-sdk-js-v3/issues/4349)) ([1aed07e](https://github.com/aws/aws-sdk-js-v3/commit/1aed07e4f63117086899ecbd5bab6e826f9913ae))


### Features

* **checksum:** replace Hash with Checksum ([#4346](https://github.com/aws/aws-sdk-js-v3/issues/4346)) ([172b4f3](https://github.com/aws/aws-sdk-js-v3/commit/172b4f3475370b386271750436004706b36bc056))
* **client-appflow:** Adding support for Salesforce Pardot connector in Amazon AppFlow. ([cbc9306](https://github.com/aws/aws-sdk-js-v3/commit/cbc9306ab1d916feab4656def5d58465893073bf))
* **client-cloudwatch-logs:** Bug fix - Removed the regex pattern validation from CoralModel to avoid potential security issue. ([18a3866](https://github.com/aws/aws-sdk-js-v3/commit/18a386643e0019222adce8ce0591ff7d7c4110d1))
* **client-codeartifact:** Documentation updates for CodeArtifact ([3a8d890](https://github.com/aws/aws-sdk-js-v3/commit/3a8d890ebf25f21efa678fece19ff8587cabfab7))
* **client-connect:** Amazon Connect Chat introduces Persistent Chat, allowing customers to resume previous conversations with context and transcripts carried over from previous chats, eliminating the need to repeat themselves and allowing agents to provide personalized service with access to entire conversation history. ([360932e](https://github.com/aws/aws-sdk-js-v3/commit/360932ebb721c6756c8ca4bf603b3c52bc923377))
* **client-connectparticipant:** This release updates Amazon Connect Participant's GetTranscript api to provide transcripts of past chats on a persistent chat session. ([b2b008d](https://github.com/aws/aws-sdk-js-v3/commit/b2b008d29e9e9279939156bdcde9bb668335d1cf))
* **client-ec2:** Adds SSM Parameter Resource Aliasing support to EC2 Launch Templates. Launch Templates can now store parameter aliases in place of AMI Resource IDs. CreateLaunchTemplateVersion and DescribeLaunchTemplateVersions now support a convenience flag, ResolveAlias, to return the resolved parameter value. ([a165989](https://github.com/aws/aws-sdk-js-v3/commit/a16598929907a89e0c293678c2f2e1c3d7faf865))
* **client-glue:** Release Glue Studio Hudi Data Lake Format for SDK/CLI ([603c44c](https://github.com/aws/aws-sdk-js-v3/commit/603c44cb9476d3ca27b036e59b6d52b8f5b21139))
* **client-groundstation:** Add configurable prepass and postpass times for DataflowEndpointGroup. Add Waiter to allow customers to wait for a contact that was reserved through ReserveContact ([737c964](https://github.com/aws/aws-sdk-js-v3/commit/737c9648c538d1cdc3fae934281fac8c91191819))
* **client-medialive:** AWS Elemental MediaLive adds support for SCTE 35 preRollMilliSeconds. ([8f23e93](https://github.com/aws/aws-sdk-js-v3/commit/8f23e93e0483e431f5ea70a1990395283ed76e05))
* **client-opensearch:** This release adds the enhanced dry run option, that checks for validation errors that might occur when deploying configuration changes and provides a summary of these errors, if any. The feature will also indicate whether a blue/green deployment will be required to apply a change. ([76d4e0d](https://github.com/aws/aws-sdk-js-v3/commit/76d4e0dbdd84af870db7a75a38eca0768dbf0dfc))
* **client-panorama:** Added AllowMajorVersionUpdate option to OTAJobConfig to make appliance software major version updates opt-in. ([87eea2c](https://github.com/aws/aws-sdk-js-v3/commit/87eea2c0739aa6c4ba8f3494f5380c678157765d))
* **client-sagemaker:** HyperParameterTuningJobs now allow passing environment variables into the corresponding TrainingJobs ([ac78b3b](https://github.com/aws/aws-sdk-js-v3/commit/ac78b3b906bcad8a1eb12e7ef5bf7d21e9e3b12f))
* **clients:** update client endpoints as of 2023-01-19 ([f8768aa](https://github.com/aws/aws-sdk-js-v3/commit/f8768aa087512a74292f727c7a2a756209caf8f0))





# [3.253.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.252.0...v3.253.0) (2023-01-18)


### Features

* **client-cloudwatch:** Enable cross-account streams in CloudWatch Metric Streams via Observability Access Manager. ([44c52e2](https://github.com/aws/aws-sdk-js-v3/commit/44c52e26d6fb4daa039ae21410ebf42ab9a318bd))
* **client-ivschat:** Updates the range for a Chat Room's maximumMessageRatePerSecond field. ([e3c8825](https://github.com/aws/aws-sdk-js-v3/commit/e3c88256997a5874a3c462547eb4f3f8bbabcaa4))
* **clients:** update client endpoints as of 2023-01-18 ([dec0073](https://github.com/aws/aws-sdk-js-v3/commit/dec0073772e30d118107d6fbad1b235cbf5ffa06))





# [3.252.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.251.0...v3.252.0) (2023-01-17)


### Features

* **client-billingconductor:** This release adds support for SKU Scope for pricing plans. ([e42406a](https://github.com/aws/aws-sdk-js-v3/commit/e42406a1c64bd1ff037fd74ba031a177a529ead1))
* **client-cloud9:** Added minimum value to AutomaticStopTimeMinutes parameter. ([e83c07a](https://github.com/aws/aws-sdk-js-v3/commit/e83c07acb0fbe6c958048dadfa1ab9f3b537cadd))
* **client-imagebuilder:** Add support for AWS Marketplace product IDs as input during CreateImageRecipe for the parent-image parameter. Add support for listing third-party components. ([7377752](https://github.com/aws/aws-sdk-js-v3/commit/7377752b0d3bee31162ccdff64905a96c9bcc585))
* **client-network-firewall:** Network Firewall now allows creation of dual stack endpoints, enabling inspection of IPv6 traffic. ([fa63303](https://github.com/aws/aws-sdk-js-v3/commit/fa63303c12a86a7a1cbd134c29150e1ff3d8bc53))
* **clients:** update client endpoints as of 2023-01-17 ([afdd31b](https://github.com/aws/aws-sdk-js-v3/commit/afdd31b2e6e34f274b30e4686466fc914c3522bc))





# [3.251.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.250.0...v3.251.0) (2023-01-13)


### Features

* **client-connect:** This release updates the responses of UpdateContactFlowContent, UpdateContactFlowMetadata, UpdateContactFlowName and DeleteContactFlow API with empty responses. ([0ad2c42](https://github.com/aws/aws-sdk-js-v3/commit/0ad2c423339869c4db2b8d1183b1caba9c847d09))
* **client-ec2:** Documentation updates for EC2. ([975395f](https://github.com/aws/aws-sdk-js-v3/commit/975395f139e53dd47ac063d0ad950031ddcb6cba))
* **client-outposts:** This release adds POWER_30_KVA as an option for PowerDrawKva. PowerDrawKva is part of the RackPhysicalProperties structure in the CreateSite request. ([881a1ee](https://github.com/aws/aws-sdk-js-v3/commit/881a1eec10b26b2eb62c32581510dc961a29ba31))
* **client-resource-groups:** AWS Resource Groups customers can now turn on Group Lifecycle Events in their AWS account. When you turn this on, Resource Groups monitors your groups for changes to group state or membership. Those changes are sent to Amazon EventBridge as events that you can respond to using rules you create. ([a6d2b3a](https://github.com/aws/aws-sdk-js-v3/commit/a6d2b3ab2726696d7cdfbf2a84621d2cf14ac0e4))
* **clients:** update client endpoints as of 2023-01-13 ([16d918c](https://github.com/aws/aws-sdk-js-v3/commit/16d918c0e97cc1f3dcde3e5562e60c17b3607b82))





# [3.250.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.249.0...v3.250.0) (2023-01-12)


### Features

* **client-cleanrooms:** Initial release of AWS Clean Rooms ([901b20b](https://github.com/aws/aws-sdk-js-v3/commit/901b20ba83b5f502f93746cfef95cca613b1c06a))
* **client-cloudwatch-logs:** Bug fix: logGroupName is now not a required field in GetLogEvents, FilterLogEvents, GetLogGroupFields, and DescribeLogStreams APIs as logGroupIdentifier can be provided instead ([29745f0](https://github.com/aws/aws-sdk-js-v3/commit/29745f01901d713a1d3b0f466ba5d04babcccfc2))
* **client-lambda:** Add support for MaximumConcurrency parameter for SQS event source. Customers can now limit the maximum concurrent invocations for their SQS Event Source Mapping. ([35feff4](https://github.com/aws/aws-sdk-js-v3/commit/35feff4cf3cedcc150854fbc673a4451252baaa9))
* **client-mediaconvert:** The AWS Elemental MediaConvert SDK has added support for compact DASH manifest generation, audio normalization using TruePeak measurements, and the ability to clip the sample range in the color corrector. ([4efbbe0](https://github.com/aws/aws-sdk-js-v3/commit/4efbbe00aad3899b5214b7ce2c81c42a6759a3b0))
* **clients:** update client endpoints as of 2023-01-12 ([2d83794](https://github.com/aws/aws-sdk-js-v3/commit/2d8379450872d2982c07d353b70f67f5d143f449))





# [3.249.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.248.0...v3.249.0) (2023-01-11)


### Features

* **client-kendra:** This release adds support to new document types - RTF, XML, XSLT, MS_EXCEL, CSV, JSON, MD ([2d7aad5](https://github.com/aws/aws-sdk-js-v3/commit/2d7aad5768ac0b7b13ce2117e7325644f6660bf7))
* **xhr-http-handler:** add consistent wrapper to XHR error handler ([#4334](https://github.com/aws/aws-sdk-js-v3/issues/4334)) ([99dab91](https://github.com/aws/aws-sdk-js-v3/commit/99dab91912bed6e6adcf5506b89fe0d96ca375d3))





# [3.248.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.247.0...v3.248.0) (2023-01-10)


### Features

* **client-location:** This release adds support for two new route travel models, Bicycle and Motorcycle which can be used with Grab data source. ([507b255](https://github.com/aws/aws-sdk-js-v3/commit/507b2557379e33ff5502b2c56f2d52a4c31a660d))
* **client-rds:** This release adds support for configuring allocated storage on the CreateDBInstanceReadReplica, RestoreDBInstanceFromDBSnapshot, and RestoreDBInstanceToPointInTime APIs. ([85724bc](https://github.com/aws/aws-sdk-js-v3/commit/85724bc8be686da8570061f155ea7357a9918e55))
* **clients:** update client endpoints as of 2023-01-10 ([62c308e](https://github.com/aws/aws-sdk-js-v3/commit/62c308e5c9d495b160cb2252ef60b8e51f498176))





# [3.247.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.246.0...v3.247.0) (2023-01-09)


### Features

* **client-ecr-public:** This release for Amazon ECR Public makes several change to bring the SDK into sync with the API. ([f2e9a5f](https://github.com/aws/aws-sdk-js-v3/commit/f2e9a5f288e961bf6284e8109951a1ada79083a3))
* **client-kendra-ranking:** Introducing Amazon Kendra Intelligent Ranking, a new set of Kendra APIs that leverages Kendra semantic ranking capabilities to improve the quality of search results from other search services (i.e. OpenSearch, ElasticSearch, Solr). ([f187559](https://github.com/aws/aws-sdk-js-v3/commit/f187559370d7e5594df02a985c2bd1de21725ece))
* **client-network-firewall:** Network Firewall now supports the Suricata rule action reject, in addition to the actions pass, drop, and alert. ([5949102](https://github.com/aws/aws-sdk-js-v3/commit/5949102ea400fcec2d909f93b474a475cf82fd35))
* **client-ram:** Enabled FIPS aws-us-gov endpoints in SDK. ([5e8a433](https://github.com/aws/aws-sdk-js-v3/commit/5e8a433f38e4889d16396eada5249c570f2cadf0))
* **client-workspaces-web:** This release adds support for a new portal authentication type: AWS IAM Identity Center (successor to AWS Single Sign-On). ([8b7c2eb](https://github.com/aws/aws-sdk-js-v3/commit/8b7c2eb6e7a72264b022fcc45df8c53943dcd542))
* **clients:** update client endpoints as of 2023-01-09 ([3f1b40a](https://github.com/aws/aws-sdk-js-v3/commit/3f1b40ae4b5b8825eb47b4c5d75e44b10fa1f2a8))





# [3.246.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.245.0...v3.246.0) (2023-01-06)


### Features

* **client-acm-pca:** Added revocation parameter validation: bucket names must match S3 bucket naming rules and CNAMEs conform to RFC2396 restrictions on the use of special characters in URIs. ([63138a5](https://github.com/aws/aws-sdk-js-v3/commit/63138a524265966b788d2922e54ca039e7aaaa3a))
* **client-auditmanager:** This release introduces a new data retention option in your Audit Manager settings. You can now use the DeregistrationPolicy parameter to specify if you want to delete your data when you deregister Audit Manager. ([5b81cc6](https://github.com/aws/aws-sdk-js-v3/commit/5b81cc673616b2274b34811480f442aec735bc23))
* **clients:** update client endpoints as of 2023-01-06 ([8508413](https://github.com/aws/aws-sdk-js-v3/commit/8508413f593e3f6be5837f8ef1814c97539046df))





# [3.245.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.244.0...v3.245.0) (2023-01-05)


### Features

* **client-amplifybackend:** Updated GetBackendAPIModels response to include ModelIntrospectionSchema json string ([eff2ce7](https://github.com/aws/aws-sdk-js-v3/commit/eff2ce7f3b51a4d0c028975691ec9e2652bbb7f0))
* **client-apprunner:** This release adds support of securely referencing secrets and configuration data that are stored in Secrets Manager and SSM Parameter Store by adding them as environment secrets in your App Runner service. ([285e1c2](https://github.com/aws/aws-sdk-js-v3/commit/285e1c20f587f7da856d0d1d13824765f94db1f3))
* **client-connect:** Documentation update for a new Initiation Method value in DescribeContact API ([62552ab](https://github.com/aws/aws-sdk-js-v3/commit/62552ab372456b3960fb87de4d2c5d34d2a8ac60))
* **client-emr-serverless:** Adds support for customized images. You can now provide runtime images when creating or updating EMR Serverless Applications. ([6c6ec95](https://github.com/aws/aws-sdk-js-v3/commit/6c6ec958ba17cd9d13775949259156b6536e1b22))
* **client-rds:** This release adds support for specifying which certificate authority (CA) to use for a DB instance's server certificate during DB instance creation, as well as other CA enhancements. ([c090672](https://github.com/aws/aws-sdk-js-v3/commit/c0906726a74c22ffc0b7d0f1b485641bfa087123))





# [3.244.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.243.0...v3.244.0) (2023-01-04)


### Features

* **client-application-auto-scaling:** Customers can now use the existing DescribeScalingActivities API to also see the detailed and machine-readable reasons for Application Auto Scaling not scaling their resources and, if needed, take the necessary corrective actions. ([d6bcb03](https://github.com/aws/aws-sdk-js-v3/commit/d6bcb0309b047cedd21b185553e892bc637c349e))
* **client-ssm:** Adding support for QuickSetup Document Type in Systems Manager ([124b702](https://github.com/aws/aws-sdk-js-v3/commit/124b702f387d1c0539b9e9091a57169d387294e3))





# [3.243.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.242.0...v3.243.0) (2023-01-03)


### Features

* **client-securitylake:** Allow CreateSubscriber API to take string input that allows setting more descriptive SubscriberDescription field. Make souceTypes field required in model level for UpdateSubscriberRequest as it is required for every API call on the backend. Allow ListSubscribers take any String as nextToken param. ([4e4ac79](https://github.com/aws/aws-sdk-js-v3/commit/4e4ac793fd5f65ad3fa4c9b26b66ef4b2cded232))
* **clients:** update client endpoints as of 2023-01-03 ([73bc007](https://github.com/aws/aws-sdk-js-v3/commit/73bc007266efe443d86442172371faeb2a55e30e))





# [3.242.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.241.0...v3.242.0) (2022-12-30)


### Features

* **client-cloudfront:** Extend response headers policy to support removing headers from viewer responses ([81d10cb](https://github.com/aws/aws-sdk-js-v3/commit/81d10cbd46de3a4bf991fa0874f49e485e1f0ebb))
* **clients:** update client endpoints as of 2022-12-30 ([0cbd298](https://github.com/aws/aws-sdk-js-v3/commit/0cbd29896dcc296ce21bd78f3da146b39f912dfa))





# [3.241.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.240.0...v3.241.0) (2022-12-29)


### Features

* **client-emr:** Added GetClusterSessionCredentials API to allow Amazon SageMaker Studio to connect to EMR on EC2 clusters with runtime roles and AWS Lake Formation-based access control for Apache Spark, Apache Hive, and Presto queries. ([200974a](https://github.com/aws/aws-sdk-js-v3/commit/200974a9cb26d34aaf29cf6ca2d69ad6e14c5259))
* **client-secrets-manager:** Added owning service filter, include planned deletion flag, and next rotation date response parameter in ListSecrets. ([9a693c7](https://github.com/aws/aws-sdk-js-v3/commit/9a693c73a997f03fd9b3deb2954d76943e0a083e))
* **client-wisdom:** This release extends Wisdom CreateContent and StartContentUpload APIs to support PDF and MicrosoftWord docx document uploading. ([16bb484](https://github.com/aws/aws-sdk-js-v3/commit/16bb4847c8c6eb4bb80b7352b6872255fd73956e))





# [3.240.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.239.0...v3.240.0) (2022-12-28)


### Features

* **client-elasticache:** This release allows you to modify the encryption in transit setting, for existing Redis clusters. You can now change the TLS configuration of your Redis clusters without the need to re-build or re-provision the clusters or impact application availability. ([7c53c4a](https://github.com/aws/aws-sdk-js-v3/commit/7c53c4a5ae779a2d9a4ae25e3b669adeff3823b7))
* **client-network-firewall:** AWS Network Firewall now provides status messages for firewalls to help you troubleshoot when your endpoint fails. ([fcc316c](https://github.com/aws/aws-sdk-js-v3/commit/fcc316c7e68c1b7c90a78f5fcae40d234c988995))
* **client-rds:** This release adds support for Custom Engine Version (CEV) on RDS Custom SQL Server. ([9468d16](https://github.com/aws/aws-sdk-js-v3/commit/9468d16ceedda66a1477efd6624a1730f286a1c3))
* **client-route53-recovery-control-config:** Added support for Python paginators in the route53-recovery-control-config List* APIs. ([91839b3](https://github.com/aws/aws-sdk-js-v3/commit/91839b3e56881cabe7cad685f3855db7aef8bef1))





# [3.239.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.238.0...v3.239.0) (2022-12-27)


### Features

* **client-memorydb:** This release adds support for MemoryDB Reserved nodes which provides a significant discount compared to on-demand node pricing. Reserved nodes are not physical nodes, but rather a billing discount applied to the use of on-demand nodes in your account. ([bd42342](https://github.com/aws/aws-sdk-js-v3/commit/bd42342150b43f59ea451254bf2d209e046cafd2))
* **client-transfer:** Add additional operations to throw ThrottlingExceptions ([4a66ecf](https://github.com/aws/aws-sdk-js-v3/commit/4a66ecf4f0b09192d2540ebfc4e3fa65a7bda040))





# [3.238.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.237.0...v3.238.0) (2022-12-23)


### Features

* **client-connectparticipant:** Amazon Connect Chat introduces the Message Receipts feature. This feature allows agents and customers to receive message delivered and read receipts after they send a chat message. ([a55a3c2](https://github.com/aws/aws-sdk-js-v3/commit/a55a3c2448329e2549381a33b1675cca7782ad37))
* **client-connect:** Support for Routing Profile filter, SortCriteria, and grouping by Routing Profiles for GetCurrentMetricData API. Support for RoutingProfiles, UserHierarchyGroups, and Agents as filters, NextStatus and AgentStatusName for GetCurrentUserData. Adds ApproximateTotalCount to both APIs. ([52f8d57](https://github.com/aws/aws-sdk-js-v3/commit/52f8d57014a921cf013800981fbe8f8c1ef2b828))
* **client-detective:** This release adds a missed AccessDeniedException type to several endpoints. ([7fa35f3](https://github.com/aws/aws-sdk-js-v3/commit/7fa35f3e0737e9d5fb61e1e077721ad7a7f44a8a))
* **client-fsx:** Fix a bug where a recent release might break certain existing SDKs. ([788acba](https://github.com/aws/aws-sdk-js-v3/commit/788acba4a3a9f9a43c04fb2df899ee7ff634e368))
* **client-inspector2:** Amazon Inspector adds support for scanning NodeJS 18.x and Go 1.x AWS Lambda function runtimes. ([0bef0a3](https://github.com/aws/aws-sdk-js-v3/commit/0bef0a3620382b51f82b47bec96e269f05b398b7))
* **clients:** update client endpoints as of 2022-12-23 ([7c21c4c](https://github.com/aws/aws-sdk-js-v3/commit/7c21c4c7da51387ce6218f008ae67b56d2de6d32))





# [3.237.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.236.0...v3.237.0) (2022-12-22)


### Features

* **client-compute-optimizer:** This release enables AWS Compute Optimizer to analyze and generate optimization recommendations for ecs services running on Fargate. ([a13751f](https://github.com/aws/aws-sdk-js-v3/commit/a13751f0dbd59c851b732e93da2e76b70cee869e))
* **client-connect:** Amazon Connect Chat introduces the Idle Participant/Autodisconnect feature, which allows users to set timeouts relating to the activity of chat participants, using the new UpdateParticipantRoleConfig API. ([0285aa9](https://github.com/aws/aws-sdk-js-v3/commit/0285aa92ec63904bed121700e28dca1943749f49))
* **client-iotdeviceadvisor:** This release adds the following new features: 1) Documentation updates for IoT Device Advisor APIs. 2) Updated required request parameters for IoT Device Advisor APIs. 3) Added new service feature: ability to provide the test endpoint when customer executing the StartSuiteRun API. ([204efd5](https://github.com/aws/aws-sdk-js-v3/commit/204efd51b5a501f8cab1445f6b909faf7ebb09a4))
* **client-kinesis-video-webrtc-storage:** Amazon Kinesis Video Streams offers capabilities to stream video and audio in real-time via WebRTC to the cloud for storage, playback, and analytical processing. Customers can use our enhanced WebRTC SDK and cloud APIs to enable real-time streaming, as well as media ingestion to the cloud. ([d1a5de1](https://github.com/aws/aws-sdk-js-v3/commit/d1a5de1ea4dfb665b3205c3ec107e0fb08e97d23))
* **client-rds:** Add support for managing master user password in AWS Secrets Manager for the DBInstance and DBCluster. ([03a5d7b](https://github.com/aws/aws-sdk-js-v3/commit/03a5d7b27c8f5d0386381c99010e538bc23644b5))
* **clients:** update client endpoints as of 2022-12-22 ([f14a5cd](https://github.com/aws/aws-sdk-js-v3/commit/f14a5cd4f2c043541414881c726eb5fb07fba8ec))





# [3.236.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.235.0...v3.236.0) (2022-12-21)


### Features

* **client-connect:** Amazon Connect Chat now allows for JSON (application/json) message types to be sent as part of the initial message in the StartChatContact API. ([8f34827](https://github.com/aws/aws-sdk-js-v3/commit/8f34827a578fb1f7d14d696af53b2a6c56d921ba))
* **client-connectparticipant:** Amazon Connect Chat now allows for JSON (application/json) message types to be sent in the SendMessage API. ([05b4eca](https://github.com/aws/aws-sdk-js-v3/commit/05b4eca85c53cfe65c27fbff1b6fc6635ca5b0c7))
* **client-license-manager-linux-subscriptions:** AWS License Manager now offers cross-region, cross-account tracking of commercial Linux subscriptions on AWS. This includes subscriptions purchased as part of EC2 subscription-included AMIs, on the AWS Marketplace, or brought to AWS via Red Hat Cloud Access Program. ([301fd63](https://github.com/aws/aws-sdk-js-v3/commit/301fd63e6fac11d634329a4327d17139079c4de0))
* **client-macie2:** This release adds support for analyzing Amazon S3 objects that use the S3 Glacier Instant Retrieval (Glacier_IR) storage class. ([4c16931](https://github.com/aws/aws-sdk-js-v3/commit/4c16931b3383f8657ab25da9ac7c004949cce37e))
* **client-sagemaker:** This release enables adding RStudio Workbench support to an existing Amazon SageMaker Studio domain. It allows setting your RStudio on SageMaker environment configuration parameters and also updating the RStudioConnectUrl and RStudioPackageManagerUrl parameters for existing domains ([1b46e4a](https://github.com/aws/aws-sdk-js-v3/commit/1b46e4a7da0a2bb045f14982c90961f9e8e46406))
* **client-scheduler:** Updated the ListSchedules and ListScheduleGroups APIs to allow the NamePrefix field to start with a number. Updated the validation for executionRole field to support any role name. ([5342062](https://github.com/aws/aws-sdk-js-v3/commit/5342062a64c9f42d7a99f03953222a59cd8eb52d))
* **client-transfer:** This release adds support for Decrypt as a workflow step type. ([bfcca28](https://github.com/aws/aws-sdk-js-v3/commit/bfcca2897179b01320e991f672bf1d98f40c1979))
* **clients:** update client endpoints as of 2022-12-21 ([7ae38c1](https://github.com/aws/aws-sdk-js-v3/commit/7ae38c14916361f61271f264a075fa6e150dd08d))





# [3.235.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.234.0...v3.235.0) (2022-12-20)


### Features

* **client-batch:** Adds isCancelled and isTerminated to DescribeJobs response. ([765cbb9](https://github.com/aws/aws-sdk-js-v3/commit/765cbb91185376df75d8f3ed734165f9a345b9ec))
* **client-ec2:** Adds support for pagination in the EC2 DescribeImages API. ([a1e5ea8](https://github.com/aws/aws-sdk-js-v3/commit/a1e5ea842369429ccb818b2f4bcb26c432b97e70))
* **client-lookoutequipment:** This release adds support for listing inference schedulers by status. ([1d7dc07](https://github.com/aws/aws-sdk-js-v3/commit/1d7dc07599768118b1abb3298fc11b5ec96e9410))
* **client-medialive:** This release adds support for two new features to AWS Elemental MediaLive. First, you can now burn-in timecodes to your MediaLive outputs. Second, we now now support the ability to decode Dolby E audio when it comes in on an input. ([49b07b3](https://github.com/aws/aws-sdk-js-v3/commit/49b07b3f01e29fcd629803cb319028e2b0918e78))
* **client-nimble:** Amazon Nimble Studio now supports configuring session storage volumes and persistence, as well as backup and restore sessions through launch profiles. ([858e866](https://github.com/aws/aws-sdk-js-v3/commit/858e86600559dd26ade59e9ee876e9eab57d7237))
* **client-resource-explorer-2:** Documentation updates for AWS Resource Explorer. ([798b1bf](https://github.com/aws/aws-sdk-js-v3/commit/798b1bf7512c8fca2cedd1c0bf1707bf831d7d63))
* **client-route-53-domains:** Use Route 53 domain APIs to change owner, create/delete DS record, modify IPS tag, resend authorization. New: AssociateDelegationSignerToDomain, DisassociateDelegationSignerFromDomain, PushDomain, ResendOperationAuthorization. Updated: UpdateDomainContact, ListOperations, CheckDomainTransferability. ([38b6bfe](https://github.com/aws/aws-sdk-js-v3/commit/38b6bfe3add60b0732d8f20f7165971adebc28c6))
* **client-sagemaker:** Amazon SageMaker Autopilot adds support for new objective metrics in CreateAutoMLJob API. ([63855ae](https://github.com/aws/aws-sdk-js-v3/commit/63855ae1ae01f7827632e9b3eadbb8b102e9cfcc))
* **client-transcribe:** Enable our batch transcription jobs for Swedish and Vietnamese. ([b8881a0](https://github.com/aws/aws-sdk-js-v3/commit/b8881a0dfae13d7cc44434a5db0b16f4087b57ba))
* **clients:** update client endpoints as of 2022-12-20 ([1510324](https://github.com/aws/aws-sdk-js-v3/commit/15103249adfdda2eb556e753f523f4ef2f4b5a99))





# [3.234.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.233.0...v3.234.0) (2022-12-19)


### Bug Fixes

* **client-marketplace-entitlement-service:** update model to fix expectUnion error ([#4297](https://github.com/aws/aws-sdk-js-v3/issues/4297)) ([eb661ce](https://github.com/aws/aws-sdk-js-v3/commit/eb661ce156553dd6454a34c0e8ed56d3fc8039e5))
* **smithy-client:** add header check for x-amz-request-id ([#4295](https://github.com/aws/aws-sdk-js-v3/issues/4295)) ([efdda44](https://github.com/aws/aws-sdk-js-v3/commit/efdda445ab4ac093df4981838613e8ae886f04d2))


### Features

* **client-athena:** Add missed InvalidRequestException in GetCalculationExecutionCode,StopCalculationExecution APIs. Correct required parameters (Payload and Type) in UpdateNotebook API. Change Notebook size from 15 Mb to 10 Mb. ([59c84e0](https://github.com/aws/aws-sdk-js-v3/commit/59c84e073e3f700c15310dcc37a0ca442d64dd9b))
* **client-ecs:** This release adds support for alarm-based rollbacks in ECS, a new feature that allows customers to add automated safeguards for Amazon ECS service rolling updates. ([d184e6b](https://github.com/aws/aws-sdk-js-v3/commit/d184e6ba3ca7f7fd419797b577c15cd18fd32f16))
* **client-kinesis-video-webrtc-storage:** Amazon Kinesis Video Streams offers capabilities to stream video and audio in real-time via WebRTC to the cloud for storage, playback, and analytical processing. Customers can use our enhanced WebRTC SDK and cloud APIs to enable real-time streaming, as well as media ingestion to the cloud. ([48b6c2a](https://github.com/aws/aws-sdk-js-v3/commit/48b6c2a8080b480f3dfa8f51296ab69b15e09cb5))
* **client-kinesis-video:** Amazon Kinesis Video Streams offers capabilities to stream video and audio in real-time via WebRTC to the cloud for storage, playback, and analytical processing. Customers can use our enhanced WebRTC SDK and cloud APIs to enable real-time streaming, as well as media ingestion to the cloud. ([cbb5b21](https://github.com/aws/aws-sdk-js-v3/commit/cbb5b21668d1568c5a6b3de5f4ed10159b0c8adb))
* **client-rds:** Add support for --enable-customer-owned-ip to RDS create-db-instance-read-replica API for RDS on Outposts. ([15ae8b9](https://github.com/aws/aws-sdk-js-v3/commit/15ae8b93423fba01cfae2c31ae13197773b6a64a))
* **client-sagemaker:** AWS Sagemaker - Sagemaker Images now supports Aliases as secondary identifiers for ImageVersions. SageMaker Images now supports additional metadata for ImageVersions for better images management. ([4390e08](https://github.com/aws/aws-sdk-js-v3/commit/4390e0877f1f116d150c0a75db7b033b974e2f79))
* **clients:** update client endpoints as of 2022-12-19 ([51b3053](https://github.com/aws/aws-sdk-js-v3/commit/51b305320acbb505c4e424cd43eede3c73ec76b7))





# [3.233.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.232.0...v3.233.0) (2022-12-16)


### Features

* **client-appflow:** This release updates the ListConnectorEntities API action so that it returns paginated responses that customers can retrieve with next tokens. ([841affb](https://github.com/aws/aws-sdk-js-v3/commit/841affba31375c7873bdee57e06bf51d6cd98a9d))
* **client-datasync:** AWS DataSync now supports the use of tags with task executions. With this new feature, you can apply tags each time you execute a task, giving you greater control and management over your task executions. ([39d276b](https://github.com/aws/aws-sdk-js-v3/commit/39d276b6c6be083345e7f1e678dc80daeb186cbe))
* **client-iotfleetwise:** Updated error handling for empty resource names in "UpdateSignalCatalog" and "GetModelManifest" operations. ([a014879](https://github.com/aws/aws-sdk-js-v3/commit/a01487929ce8bae5ed1da3984dcd95943d0fd569))
* **client-sagemaker:** AWS sagemaker - Features: This release adds support for random seed, it's an integer value used to initialize a pseudo-random number generator. Setting a random seed will allow the hyperparameter tuning search strategies to produce more consistent configurations for the same tuning job. ([ed46bdd](https://github.com/aws/aws-sdk-js-v3/commit/ed46bddfcbe9bf8da8079e666ff896682577a8fc))
* **clients:** update client endpoints as of 2022-12-16 ([9f40c2b](https://github.com/aws/aws-sdk-js-v3/commit/9f40c2b4baaf3a960ba611c560c1abcb96948892))





# [3.232.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.231.0...v3.232.0) (2022-12-15)


### Features

* **client-backup-gateway:** This release adds support for VMware vSphere tags, enabling customer to protect VMware virtual machines using tag-based policies for AWS tags mapped from vSphere tags. This release also adds support for customer-accessible gateway-hypervisor interaction log and upload bandwidth rate limit schedule. ([3be5548](https://github.com/aws/aws-sdk-js-v3/commit/3be5548085a6c8d0334fe1fc99997f6bca9daee4))
* **client-connect:** Added support for "English - New Zealand" and "English - South African" to be used with Amazon Connect Custom Vocabulary APIs. ([fde7be0](https://github.com/aws/aws-sdk-js-v3/commit/fde7be0e40bf127c578355df7f00194388e731ac))
* **client-ecs:** This release adds support for container port ranges in ECS, a new capability that allows customers to provide container port ranges to simplify use cases where multiple ports are in use in a container. This release updates TaskDefinition mutation APIs and the Task description APIs. ([00d2802](https://github.com/aws/aws-sdk-js-v3/commit/00d28022bd9dafc7853c9a8aa8d80010433811e2))
* **client-eks:** Add support for Windows managed nodes groups. ([aeac725](https://github.com/aws/aws-sdk-js-v3/commit/aeac7257ea651c6587898c8890872ba3d92d15c2))
* **client-glue:** This release adds support for AWS Glue Crawler with native DeltaLake tables, allowing Crawlers to classify Delta Lake format tables and catalog them for query engines to query against. ([01677c5](https://github.com/aws/aws-sdk-js-v3/commit/01677c5efaad0d64f4d5a835b9061cca4956f50d))
* **client-kinesis:** Added StreamARN parameter for Kinesis Data Streams APIs. Added a new opaque pagination token for ListStreams. SDKs will auto-generate Account Endpoint when accessing Kinesis Data Streams. ([edf53ee](https://github.com/aws/aws-sdk-js-v3/commit/edf53ee83c5c0cd89a4eee6f072eb5fea8b071c2))
* **client-m2:** Adds an optional create-only `KmsKeyId` property to Environment and Application resources. ([8de2577](https://github.com/aws/aws-sdk-js-v3/commit/8de25773b4de607224e74c0744e0a9c32fd33b51))
* **client-sagemaker:** SageMaker Inference Recommender now allows customers to load tests their models on various instance types using private VPC. ([bf33646](https://github.com/aws/aws-sdk-js-v3/commit/bf3364694c221034ebaaaf248c83a107b1bac77f))
* **client-securityhub:** Added new resource details objects to ASFF, including resources for AwsEc2LaunchTemplate, AwsSageMakerNotebookInstance, AwsWafv2WebAcl and AwsWafv2RuleGroup. ([88ff973](https://github.com/aws/aws-sdk-js-v3/commit/88ff973c96c4333d6f688890361688f998a64105))
* **client-translate:** Raised the input byte size limit of the Text field in the TranslateText API to 10000 bytes. ([56497b0](https://github.com/aws/aws-sdk-js-v3/commit/56497b0d6ad83d544d58d8c36ccd5e6af0b5036a))
* **clients:** update client endpoints as of 2022-12-15 ([a3174d7](https://github.com/aws/aws-sdk-js-v3/commit/a3174d7922bdf6f1163cc321aa48094c52c68c20))





# [3.231.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.230.0...v3.231.0) (2022-12-14)


### Bug Fixes

* **client-s3-control:** add prefix dedupe middleware ([#4286](https://github.com/aws/aws-sdk-js-v3/issues/4286)) ([89e0a6f](https://github.com/aws/aws-sdk-js-v3/commit/89e0a6fc93c269088b093ff481fd180b9ac0e5cb))
* **client-s3-control:** add staticContextParams in endpoint param instructions ([#4284](https://github.com/aws/aws-sdk-js-v3/issues/4284)) ([0cba099](https://github.com/aws/aws-sdk-js-v3/commit/0cba099c866cfb560140d9a520d554b0ed88a2ad))
* **client-s3:** add staticContextParams in endpoint param instructions ([#4285](https://github.com/aws/aws-sdk-js-v3/issues/4285)) ([d229edd](https://github.com/aws/aws-sdk-js-v3/commit/d229edde5cfc553fd27a731ae8fffc09dd5882a6))
* **config-resolver:** replace non-null assertions ([#4279](https://github.com/aws/aws-sdk-js-v3/issues/4279)) ([e5e753c](https://github.com/aws/aws-sdk-js-v3/commit/e5e753c1468d344aa8b1b21f07c693712a6fb829))
* **private:** error printout and broken reference to fail ([#4287](https://github.com/aws/aws-sdk-js-v3/issues/4287)) ([5582ee8](https://github.com/aws/aws-sdk-js-v3/commit/5582ee81afba728698f6fd81fbb6bd63bf707ed2))


### Features

* **client-cloudwatch:** Adding support for Metrics Insights Alarms ([4aa9511](https://github.com/aws/aws-sdk-js-v3/commit/4aa9511aae3aa7b31019ec961d0e28cb824f82f2))
* **client-cost-explorer:** This release supports percentage-based thresholds on Cost Anomaly Detection alert subscriptions. ([42b1479](https://github.com/aws/aws-sdk-js-v3/commit/42b147969634dbe114795f6db653b0bbc16cfe97))
* **client-networkmanager:** Appliance Mode support for AWS Cloud WAN. ([fe2b86e](https://github.com/aws/aws-sdk-js-v3/commit/fe2b86ebfb693adf9ae4053935ec733b18187b37))
* **client-redshift-data:** This release adds a new --client-token field to ExecuteStatement and BatchExecuteStatement operations. Customers can now run queries with the additional client token parameter to ensures idempotency. ([e54654e](https://github.com/aws/aws-sdk-js-v3/commit/e54654eb660d010eacc7ee8e8054d2e7e5e76995))
* **clients:** update client endpoints as of 2022-12-14 ([e7a55a0](https://github.com/aws/aws-sdk-js-v3/commit/e7a55a0c6c9847bc119778e5a0c72b4c29458835))





# [3.230.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.229.0...v3.230.0) (2022-12-13)


### Bug Fixes

* **aws-client-retry-test:** correct retry delay assertion ([#4274](https://github.com/aws/aws-sdk-js-v3/issues/4274)) ([5bfcda6](https://github.com/aws/aws-sdk-js-v3/commit/5bfcda66ff39e5b37638a8bbd035812324b946e2))
* **aws-client-retry-test:** use s3 client in case x-ray is not built ([#4276](https://github.com/aws/aws-sdk-js-v3/issues/4276)) ([1fd4179](https://github.com/aws/aws-sdk-js-v3/commit/1fd4179c2ecb0804f28d94c1b1a511cd29119a72))
* **codegen:** generate idempotencyToken default for queryParams ([#4272](https://github.com/aws/aws-sdk-js-v3/issues/4272)) ([d99a65d](https://github.com/aws/aws-sdk-js-v3/commit/d99a65da19a388a1cf3223620bef30df1912d389))


### Features

* **client-cloudtrail:** Merging mainline branch for service model into mainline release branch. There are no new APIs. ([07c2d21](https://github.com/aws/aws-sdk-js-v3/commit/07c2d2132bfcd545bb3c3e7154567df2f22b8460))
* **client-rds:** This deployment adds ClientPasswordAuthType field to the Auth structure of the DBProxy. ([1df4e07](https://github.com/aws/aws-sdk-js-v3/commit/1df4e0719fa0cb6d91830a6aeba7eae6fbfb3e83))
* **clients:** update client endpoints as of 2022-12-13 ([b9b3bde](https://github.com/aws/aws-sdk-js-v3/commit/b9b3bde256e177061be0c724e4c1035059779bb0))





# [3.229.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.228.0...v3.229.0) (2022-12-12)


### Bug Fixes

* **cloudfront-signer:** accept passphrase when signing ([#4232](https://github.com/aws/aws-sdk-js-v3/issues/4232)) ([fcfb59f](https://github.com/aws/aws-sdk-js-v3/commit/fcfb59fa3203c3357e4f88b4d201f06b1b9beb3a))


### Features

* **client-customer-profiles:** This release allows custom strings in PartyType and Gender through 2 new attributes in the CreateProfile and UpdateProfile APIs: PartyTypeString and GenderString. ([a57743b](https://github.com/aws/aws-sdk-js-v3/commit/a57743b015e3a8070ea84422c784cb0a350e8e56))
* **client-ec2:** This release updates DescribeFpgaImages to show supported instance types of AFIs in its response. ([e6f3672](https://github.com/aws/aws-sdk-js-v3/commit/e6f36721554bcbdaf46d7ed34d83dcdf111c519e))
* **client-kinesis-video:** This release adds support for public preview of Kinesis Video Stream at Edge enabling customers to provide configuration for the Kinesis Video Stream EdgeAgent running on an on-premise IoT device. Customers can now locally record from cameras and stream videos to the cloud on configured schedule. ([9bd5310](https://github.com/aws/aws-sdk-js-v3/commit/9bd5310815f38ac21c8bdfe9820eaddbbc4b74aa))
* **client-migration-hub-refactor-spaces:** This release adds support for Lambda alias service endpoints. Lambda alias ARNs can now be passed into CreateService. ([7670f3c](https://github.com/aws/aws-sdk-js-v3/commit/7670f3cd9ef234b1af4b317332279b7294ab3ce7))
* **client-rds:** Update the RDS API model to support copying option groups during the CopyDBSnapshot operation ([2e7020c](https://github.com/aws/aws-sdk-js-v3/commit/2e7020c262007aafc98a625d9812d2aa53a4b634))
* **client-rekognition:** Adds support for "aliases" and "categories", inclusion and exclusion filters for labels and label categories, and aggregating labels by video segment timestamps for Stored Video Label Detection APIs. ([0e6020a](https://github.com/aws/aws-sdk-js-v3/commit/0e6020acb0089523c410d1d66a74daa3938f86c7))
* **client-sagemaker-metrics:** This release introduces support SageMaker Metrics APIs. ([214fbb7](https://github.com/aws/aws-sdk-js-v3/commit/214fbb7f501199f34699e728b1ba2e1ca9b6a98b))
* **clients:** update client endpoints as of 2022-12-12 ([c29fa34](https://github.com/aws/aws-sdk-js-v3/commit/c29fa34ba662313f7c66acce02322c22312a3344))





# [3.228.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.227.0...v3.228.0) (2022-12-09)


### Features

* **client-iotfleetwise:** Deprecated assignedValue property for actuators and attributes.  Added a message to invalid nodes and invalid decoder manifest exceptions. ([49aed2d](https://github.com/aws/aws-sdk-js-v3/commit/49aed2dce89bcd7d194572ed73a027ae86d2b82d))
* **client-medialive:** Link devices now support buffer size (latency) configuration. A higher latency value means a longer delay in transmitting from the device to MediaLive, but improved resiliency. A lower latency value means a shorter delay, but less resiliency. ([e581155](https://github.com/aws/aws-sdk-js-v3/commit/e5811558346eed729862445b80af4aad2a23362d))
* **client-mediapackage-vod:** This release provides the approximate number of assets in a packaging group. ([fee4186](https://github.com/aws/aws-sdk-js-v3/commit/fee4186e63efcbe5218e8ed202b9c1a1bbef81b5))





# [3.227.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.226.0...v3.227.0) (2022-12-08)


### Features

* **client-auto-scaling:** Adds support for metric math for target tracking scaling policies, saving you the cost and effort of publishing a custom metric to CloudWatch. Also adds support for VPC Lattice by adding the Attach/Detach/DescribeTrafficSources APIs and a new health check type to the CreateAutoScalingGroup API. ([1ff9976](https://github.com/aws/aws-sdk-js-v3/commit/1ff9976475578e20ce23be61c97032ea936b403a))
* **client-iottwinmaker:** This release adds the following new features: 1) New APIs for managing a continuous sync of assets and asset models from AWS IoT SiteWise. 2) Support user friendly names for component types (ComponentTypeName) and properties (DisplayName). ([c32b0a1](https://github.com/aws/aws-sdk-js-v3/commit/c32b0a12cbd61034eba0ab286749b2ee328d757c))
* **client-migrationhubstrategy:** This release adds known application filtering, server selection for assessments, support for potential recommendations, and indications for configuration and assessment status. For more information, see the AWS Migration Hub documentation at https://docs.aws.amazon.com/migrationhub/index.html ([1b39105](https://github.com/aws/aws-sdk-js-v3/commit/1b391059305246ce00dc6986a2b0161cb033c8fe))
* **clients:** update client endpoints as of 2022-12-08 ([8e0cc5e](https://github.com/aws/aws-sdk-js-v3/commit/8e0cc5edf399ec0bc366acb579ff67e64e2c65bb))





# [3.226.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.225.0...v3.226.0) (2022-12-07)


### Bug Fixes

* **codegen:** remove unused import ([#4260](https://github.com/aws/aws-sdk-js-v3/issues/4260)) ([d65ca1b](https://github.com/aws/aws-sdk-js-v3/commit/d65ca1bc347f085936d6e12edaffda507383c745))
* **types:** add missing `tslib` dependency to `types` ([#4128](https://github.com/aws/aws-sdk-js-v3/issues/4128)) ([5dab646](https://github.com/aws/aws-sdk-js-v3/commit/5dab6461affef3539c2fea61fc1217d528981cdd))


### Features

* **client-cloudfront:** Introducing UpdateDistributionWithStagingConfig that can be used to promote the staging configuration to the production. ([ce728a2](https://github.com/aws/aws-sdk-js-v3/commit/ce728a2c0175abf27ce0f8a96bc69171a7f121e3))
* **client-cost-explorer:** This release adds the LinkedAccountName field to the GetAnomalies API response under RootCause ([cef502f](https://github.com/aws/aws-sdk-js-v3/commit/cef502f015f505970d91d3928ea7c14488dae588))
* **client-eks:** Adds support for EKS add-ons configurationValues fields and DescribeAddonConfiguration function ([47f65dd](https://github.com/aws/aws-sdk-js-v3/commit/47f65dd339f53da08532e01fec5acaae7434c66d))
* **clients:** update client endpoints as of 2022-12-07 ([eea62b4](https://github.com/aws/aws-sdk-js-v3/commit/eea62b44c50cad47d4c3dfd49a96a0359c195381))





# [3.225.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.224.0...v3.225.0) (2022-12-06)


### Features

* **client-billingconductor:** This release adds the Tiering Pricing Rule feature. ([6ebdcd8](https://github.com/aws/aws-sdk-js-v3/commit/6ebdcd8aed01fe515d936a9f4c0c7ef4f2e1e459))
* **client-connect:** This release provides APIs that enable you to programmatically manage rules for Contact Lens conversational analytics and third party applications. For more information, see   https://docs.aws.amazon.com/connect/latest/APIReference/rules-api.html ([7ed68cc](https://github.com/aws/aws-sdk-js-v3/commit/7ed68ccc37318145119d97b7f2b818d2de670314))
* **client-dynamodb-streams:** Endpoint Ruleset update: Use http instead of https for the "local" region. ([7ff89f0](https://github.com/aws/aws-sdk-js-v3/commit/7ff89f0a9af6b5659717fc600cdcfae7572aab51))
* **client-dynamodb:** Endpoint Ruleset update: Use http instead of https for the "local" region. ([29cbf1a](https://github.com/aws/aws-sdk-js-v3/commit/29cbf1a2914f97c2c0a9d9a134033888d9602e0a))
* **client-rds:** This release adds the BlueGreenDeploymentNotFoundFault to the AddTagsToResource, ListTagsForResource, and RemoveTagsFromResource operations. ([cdbae39](https://github.com/aws/aws-sdk-js-v3/commit/cdbae395c1810061a1a68f405f56266cc15ce5d5))
* **client-sagemaker-featurestore-runtime:** For online + offline Feature Groups, added ability to target PutRecord and DeleteRecord actions to only online store, or only offline store. If target store parameter is not specified, actions will apply to both stores. ([01b0b8c](https://github.com/aws/aws-sdk-js-v3/commit/01b0b8c859d9171953fa644344ded06f506e1979))
* **clients:** update client endpoints as of 2022-12-06 ([d382fbc](https://github.com/aws/aws-sdk-js-v3/commit/d382fbcb4fcb8a9127193c42ef38fc660c7181c0))





# [3.224.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.223.0...v3.224.0) (2022-12-05)


### Bug Fixes

* **lib-dynamodb:** fix use of log filters in conjunction with DynamDBDocumentClient ([#4249](https://github.com/aws/aws-sdk-js-v3/issues/4249)) ([1534f62](https://github.com/aws/aws-sdk-js-v3/commit/1534f62bc3ca27a4007c2bde2f6bed18c4ee02a6))


### Features

* **client-cost-explorer:** This release introduces two new APIs that offer a 1-click experience to refresh Savings Plans recommendations. The two APIs are StartSavingsPlansPurchaseRecommendationGeneration and ListSavingsPlansPurchaseRecommendationGeneration. ([d0dbebc](https://github.com/aws/aws-sdk-js-v3/commit/d0dbebcfd279c53b72dbbde1452dacab2e420b92))
* **client-ec2:** Documentation updates for EC2. ([7446494](https://github.com/aws/aws-sdk-js-v3/commit/74464943a89d7d7785cf8fa1ba17f8146dd5bb3d))
* **client-ivschat:** Adds PendingVerification error type to messaging APIs to block the resource usage for accounts identified as being fraudulent. ([e94d8e5](https://github.com/aws/aws-sdk-js-v3/commit/e94d8e51d57d402310e3ea72ee0ca03f6ac89187))
* **client-rds:** This release adds the InvalidDBInstanceStateFault to the RestoreDBClusterFromSnapshot operation. ([b1d84f4](https://github.com/aws/aws-sdk-js-v3/commit/b1d84f455d7ee69052142c50ce6c5af167404a54))
* **client-transcribe:** Amazon Transcribe now supports creating custom language models in the following languages: Japanese (ja-JP) and German (de-DE). ([57057bb](https://github.com/aws/aws-sdk-js-v3/commit/57057bbc49f6b619c0792e7f5b1e5f744a338efd))
* **clients:** update client endpoints as of 2022-12-05 ([b302f16](https://github.com/aws/aws-sdk-js-v3/commit/b302f16ee52088daefee2b90e739b3776e95c2cf))





# [3.223.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.222.0...v3.223.0) (2022-12-02)


### Bug Fixes

* **clients:** remove unconditional inclusion of util-retry ([#4246](https://github.com/aws/aws-sdk-js-v3/issues/4246)) ([3baeb44](https://github.com/aws/aws-sdk-js-v3/commit/3baeb445fb399fa3b6d81e89e88c22b0c0a691cc))


### Features

* **client-appsync:** Fixes the URI for the evaluatecode endpoint to include the /v1 prefix (ie. "/v1/dataplane-evaluatecode"). ([8fd2c31](https://github.com/aws/aws-sdk-js-v3/commit/8fd2c31ddb3f50d4974b86937303ea0d802d4f08))
* **client-fms:** AWS Firewall Manager now supports Fortigate Cloud Native Firewall as a Service as a third-party policy type. ([4f42dff](https://github.com/aws/aws-sdk-js-v3/commit/4f42dff3a9c56370eb124da86aff0e0d1b2a1d35))
* **client-mediaconvert:** The AWS Elemental MediaConvert SDK has added support for configurable ID3 eMSG box attributes and the ability to signal them with InbandEventStream tags in DASH and CMAF outputs. ([009743a](https://github.com/aws/aws-sdk-js-v3/commit/009743ae81f27a010002a92f4dd4b4894b6aac7b))
* **client-medialive:** Updates to Event Signaling and Management (ESAM) API and documentation. ([a684000](https://github.com/aws/aws-sdk-js-v3/commit/a68400099e3ca5f9944d63675fd97023ffa9e827))
* **client-polly:** Add language code for Finnish (fi-FI) ([a89edbc](https://github.com/aws/aws-sdk-js-v3/commit/a89edbc1880e4bdf7dba7cf3a6927ff45bb86a95))
* **client-proton:** CreateEnvironmentAccountConnection RoleArn input is now optional ([3bdfef6](https://github.com/aws/aws-sdk-js-v3/commit/3bdfef67e4c3f44ea95d06a255a87b72d9bcc24e))
* **client-redshift-serverless:** Add Table Level Restore operations for Amazon Redshift Serverless. Add multi-port support for Amazon Redshift Serverless endpoints. Add Tagging support to Snapshots and Recovery Points in Amazon Redshift Serverless. ([dc361a5](https://github.com/aws/aws-sdk-js-v3/commit/dc361a5f7f88468de8ffdccbec8bddb1257cf187))





# [3.222.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.221.0...v3.222.0) (2022-12-01)


### Features

* **client-codecatalyst:** This release adds operations that support customers using the AWS Toolkits and Amazon CodeCatalyst, a unified software development service that helps developers develop, deploy, and maintain applications in the cloud. For more information, see the documentation. ([cb94b0c](https://github.com/aws/aws-sdk-js-v3/commit/cb94b0cbfb748aa85ddfe2ec60bc193adf1e6975))
* **client-comprehend:** Comprehend now supports semi-structured documents (such as PDF files or image files) as inputs for custom analysis using the synchronous APIs (ClassifyDocument and DetectEntities). ([5c0d056](https://github.com/aws/aws-sdk-js-v3/commit/5c0d05693f838037f608237af3a3f1a56a512976))
* **client-gamelift:** GameLift introduces a new feature, GameLift Anywhere. GameLift Anywhere allows you to integrate your own compute resources with GameLift. You can also use GameLift Anywhere to iteratively test your game servers without uploading the build to GameLift for every iteration. ([b38a48f](https://github.com/aws/aws-sdk-js-v3/commit/b38a48f97a4531372b4fcbc598cf9d14f83c1a5c))
* **client-pipes:** AWS introduces new Amazon EventBridge Pipes which allow you to connect sources (SQS, Kinesis, DDB, Kafka, MQ) to Targets (14+ EventBridge Targets) without any code, with filtering, batching, input transformation, and an optional Enrichment stage (Lambda, StepFunctions, ApiGateway, ApiDestinations) ([c2e00d5](https://github.com/aws/aws-sdk-js-v3/commit/c2e00d5fa8a641d65a11c5ad5b5c5d9cf903380d))
* **client-sfn:** This release adds support for the AWS Step Functions Map state in Distributed mode. The changes include a new MapRun resource and several new and modified APIs. ([31a78be](https://github.com/aws/aws-sdk-js-v3/commit/31a78bea855a264d5d77ffc58a7c4b1725ef12e9))
* **clients:** update client endpoints as of 2022-12-01 ([75af76d](https://github.com/aws/aws-sdk-js-v3/commit/75af76d3d87051bc1021368e343bd9ced7dcce6a))
* **types:** add checksum interface ([#4216](https://github.com/aws/aws-sdk-js-v3/issues/4216)) ([89598b6](https://github.com/aws/aws-sdk-js-v3/commit/89598b6c44d4733d8b0329946516fcde3a2c3997))
* **utl-retry:** add util-retry package and its types ([#4224](https://github.com/aws/aws-sdk-js-v3/issues/4224)) ([a2579b7](https://github.com/aws/aws-sdk-js-v3/commit/a2579b770d929ad038cafed565028608a20dd911))





# [3.221.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.220.0...v3.221.0) (2022-11-30)


### Features

* **client-accessanalyzer:** This release adds support for S3 cross account access points. IAM Access Analyzer will now produce public or cross account findings when it detects bucket delegation to external account access points. ([fe4de8f](https://github.com/aws/aws-sdk-js-v3/commit/fe4de8f5876632c77023ea9e3f46f6ff6dad633b))
* **client-athena:** This release includes support for using Apache Spark in Amazon Athena. ([db81e83](https://github.com/aws/aws-sdk-js-v3/commit/db81e835e02810a6e0f53d3967792df7a21525ab))
* **client-dataexchange:** This release enables data providers to license direct access to data in their Amazon S3 buckets or AWS Lake Formation data lakes through AWS Data Exchange. Subscribers get read-only access to the data and can use it in downstream AWS services, like Amazon Athena, without creating or managing copies. ([b4c67af](https://github.com/aws/aws-sdk-js-v3/commit/b4c67afc003eb0526d8a3e7e33b7d3ddecc956bb))
* **client-docdb-elastic:** Launched Amazon DocumentDB Elastic Clusters. You can now use the SDK to create, list, update and delete Amazon DocumentDB Elastic Cluster resources ([20f5609](https://github.com/aws/aws-sdk-js-v3/commit/20f5609c3cc51a076ac2d79e799cc53289b2e907))
* **client-glue:** This release adds support for AWS Glue Data Quality, which helps you evaluate and monitor the quality of your data and includes the API for creating, deleting, or updating data quality rulesets, runs and evaluations. ([73a2fe8](https://github.com/aws/aws-sdk-js-v3/commit/73a2fe8e286f3d437cc617f3d69da08ab38e4bba))
* **client-s3-control:** Amazon S3 now supports cross-account access points. S3 bucket owners can now allow trusted AWS accounts to create access points associated with their bucket. ([cf4344e](https://github.com/aws/aws-sdk-js-v3/commit/cf4344e226956822337e2b9df7e1a316f5a729e5))
* **client-sagemaker-geospatial:** This release provides Amazon SageMaker geospatial APIs to build, train, deploy and visualize geospatial models. ([2351172](https://github.com/aws/aws-sdk-js-v3/commit/23511727a0d7b1de1799a51f98735c7f4870c0db))
* **client-sagemaker:** Added Models as part of the Search API. Added Model shadow deployments in realtime inference, and shadow testing in managed inference. Added support for shared spaces, geospatial APIs, Model Cards, AutoMLJobStep in pipelines, Git repositories on user profiles and domains, Model sharing in Jumpstart. ([b28c278](https://github.com/aws/aws-sdk-js-v3/commit/b28c2787aec8f97cf81dd67f5dba7935bfc2e88b))
* **clients:** update client endpoints as of 2022-11-30 ([b252e94](https://github.com/aws/aws-sdk-js-v3/commit/b252e947929fd6457815e850e26fb7516171bbc2))





# [3.220.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.219.0...v3.220.0) (2022-11-29)


### Features

* **client-ec2:** This release adds support for AWS Verified Access and the Hpc6id Amazon EC2 compute optimized instance type, which features 3rd generation Intel Xeon Scalable processors. ([e0d2198](https://github.com/aws/aws-sdk-js-v3/commit/e0d219808aa30864e04ed31da29d1d2563d2e757))
* **client-firehose:** Allow support for the Serverless offering for Amazon OpenSearch Service as a Kinesis Data Firehose delivery destination. ([eb21147](https://github.com/aws/aws-sdk-js-v3/commit/eb211476739406378f466f7c0185048463bb4b49))
* **client-kms:** AWS KMS introduces the External Key Store (XKS), a new feature for customers who want to protect their data with encryption keys stored in an external key management system under their control. ([cb66e2e](https://github.com/aws/aws-sdk-js-v3/commit/cb66e2e96ad67f05f3d945a78ab0af8dade1f9b9))
* **client-omics:** Amazon Omics is a new, purpose-built service that can be used by healthcare and life science organizations to store, query, and analyze omics data. The insights from that data can be used to accelerate scientific discoveries and improve healthcare. ([838da6f](https://github.com/aws/aws-sdk-js-v3/commit/838da6f94d6e038ae49db68c924d02ceb463e6eb))
* **client-opensearchserverless:** Publish SDK for Amazon OpenSearch Serverless ([6b0dfae](https://github.com/aws/aws-sdk-js-v3/commit/6b0dfae3674d0a0337dc07e590917d5ef07f80f9))
* **client-securitylake:** Amazon Security Lake automatically centralizes security data from cloud, on-premises, and custom sources into a purpose-built data lake stored in your account. Security Lake makes it easier to analyze security data, so you can improve the protection of your workloads, applications, and data ([8b0dd1d](https://github.com/aws/aws-sdk-js-v3/commit/8b0dd1db10056d0eceec3ca53d2111e672b17463))
* **client-simspaceweaver:** AWS SimSpace Weaver is a new service that helps customers build spatial simulations at new levels of scale - resulting in virtual worlds with millions of dynamic entities. See the AWS SimSpace Weaver developer guide for more details on how to get started. https://docs.aws.amazon.com/simspaceweaver ([219849b](https://github.com/aws/aws-sdk-js-v3/commit/219849be2d9db216f478881d3012b58680cbb661))
* **clients:** update client endpoints as of 2022-11-29 ([f64d4e8](https://github.com/aws/aws-sdk-js-v3/commit/f64d4e81cff5478541fc04b1b368f14ecc71e136))
* **codegen:** add TokenAuthPlugin ([#4238](https://github.com/aws/aws-sdk-js-v3/issues/4238)) ([20c9947](https://github.com/aws/aws-sdk-js-v3/commit/20c9947b0d0d3af7212983088c673587528d4558))





# [3.219.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.218.0...v3.219.0) (2022-11-29)


### Features

* **client-arc-zonal-shift:** Amazon Route 53 Application Recovery Controller Zonal Shift is a new service that makes it easy to shift traffic away from an Availability Zone in a Region. See the developer guide for more information: https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route53-recovery.html ([29a44a8](https://github.com/aws/aws-sdk-js-v3/commit/29a44a84eff57fa259dbe6b6fce32119ae032447))
* **client-compute-optimizer:** Adds support for a new recommendation preference that makes it possible for customers to optimize their EC2 recommendations by utilizing an external metrics ingestion service to provide metrics. ([fefe82f](https://github.com/aws/aws-sdk-js-v3/commit/fefe82f8cd3604253c868553020d9aebc6e13634))
* **client-config-service:** With this release, you can use AWS Config to evaluate your resources for compliance with Config rules before they are created or updated. Using Config rules in proactive mode enables you to test and build compliant resource templates or check resource configurations at the time they are provisioned. ([384d079](https://github.com/aws/aws-sdk-js-v3/commit/384d07940e9f9de5dfbd9d625963a53c1be0e14b))
* **client-ec2:** Introduces ENA Express, which uses AWS SRD and dynamic routing to increase throughput and minimize latency, adds support for trust relationships between Reachability Analyzer and AWS Organizations to enable cross-account analysis, and adds support for Infrastructure Performance metric subscriptions. ([394dcfc](https://github.com/aws/aws-sdk-js-v3/commit/394dcfcf94f76142605687ba21f7fde13ae94714))
* **client-eks:** Adds support for additional EKS add-ons metadata and filtering fields ([bd65010](https://github.com/aws/aws-sdk-js-v3/commit/bd6501033911efeec252bbbab5b6b321d4ce9c07))
* **client-fsx:** This release adds support for 4GB/s / 160K PIOPS FSx for ONTAP file systems and 10GB/s / 350K PIOPS FSx for OpenZFS file systems (Single_AZ_2). For FSx for ONTAP, this also adds support for DP volumes, snapshot policy, copy tags to backups, and Multi-AZ route table updates. ([797d649](https://github.com/aws/aws-sdk-js-v3/commit/797d649071cce7b02fd0041c1b11f3fff2347e00))
* **client-glue:** This release allows the creation of Custom Visual Transforms (Dynamic Transforms) to be created via AWS Glue CLI/SDK. ([23a99e8](https://github.com/aws/aws-sdk-js-v3/commit/23a99e8135c9e7975a15b7fad395a7242e072bc7))
* **client-inspector2:** This release adds support for Inspector to scan AWS Lambda. ([25099d1](https://github.com/aws/aws-sdk-js-v3/commit/25099d17cbe66ea792370a5ba2019fb62a55d029))
* **client-lambda:** Adds support for Lambda SnapStart, which helps improve the startup performance of functions. Customers can now manage SnapStart based functions via CreateFunction and UpdateFunctionConfiguration APIs ([aa2dc1f](https://github.com/aws/aws-sdk-js-v3/commit/aa2dc1f18b057e7b5df2a5b08c28fa50a9af3f82))
* **client-license-manager-user-subscriptions:** AWS now offers fully-compliant, Amazon-provided licenses for Microsoft Office Professional Plus 2021 Amazon Machine Images (AMIs) on Amazon EC2. These AMIs are now available on the Amazon EC2 console and on AWS Marketplace to launch instances on-demand without any long-term licensing commitments. ([0fe1ce8](https://github.com/aws/aws-sdk-js-v3/commit/0fe1ce8c662a3cf35a938798e83e713df80c36dc))
* **client-macie2:** Added support for configuring Macie to continually sample objects from S3 buckets and inspect them for sensitive data. Results appear in statistics, findings, and other data that Macie provides. ([f418c4b](https://github.com/aws/aws-sdk-js-v3/commit/f418c4b5a51f0d0b7fb906cc38e87f12393d45bb))
* **client-quicksight:** This release adds new Describe APIs and updates Create and Update APIs to support the data model for Dashboards, Analyses, and Templates. ([1d1950f](https://github.com/aws/aws-sdk-js-v3/commit/1d1950ffbc03a245bad87287247069c0b0c8573b))
* **client-s3-control:** Added two new APIs to support Amazon S3 Multi-Region Access Point failover controls: GetMultiRegionAccessPointRoutes and SubmitMultiRegionAccessPointRoutes. The failover control APIs are supported in the following Regions: us-east-1, us-west-2, eu-west-1, ap-southeast-2, and ap-northeast-1. ([e6868fe](https://github.com/aws/aws-sdk-js-v3/commit/e6868feb839a0028b7015aac1ce47688629c34df))
* **client-securityhub:** Adding StandardsManagedBy field to DescribeStandards API response ([0f56885](https://github.com/aws/aws-sdk-js-v3/commit/0f56885674f0c011e1db44c2962d901a77d61eb7))
* **clients:** update client endpoints as of 2022-11-29 ([eed3235](https://github.com/aws/aws-sdk-js-v3/commit/eed323587eeeb49054ec98a10f9521c70095228f))





# [3.218.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.217.0...v3.218.0) (2022-11-28)


### Bug Fixes

* **codegen:** add check for required query parameters ([#4223](https://github.com/aws/aws-sdk-js-v3/issues/4223)) ([b941f46](https://github.com/aws/aws-sdk-js-v3/commit/b941f4646518aacec2d7709eb673e5b2d90f0b04))


### Features

* **client-backup:** AWS Backup introduces support for legal hold and application stack backups. AWS Backup Audit Manager introduces support for cross-Region, cross-account reports. ([501931e](https://github.com/aws/aws-sdk-js-v3/commit/501931e3a9818f93442bd89e1d5216d69f07ba36))
* **client-cloudwatch-logs:** Updates to support CloudWatch Logs data protection and CloudWatch cross-account observability ([cf73137](https://github.com/aws/aws-sdk-js-v3/commit/cf73137950411df4ffff938dafdb2db4ef095dea))
* **client-cloudwatch:** Adds cross-account support to the GetMetricData API. Adds cross-account support to the ListMetrics API through the usage of the IncludeLinkedAccounts flag and the new OwningAccounts field. ([0ac256b](https://github.com/aws/aws-sdk-js-v3/commit/0ac256b01ca9fcd8fb26c27bae171979115d4a65))
* **client-drs:** Non breaking changes to existing APIs, and additional APIs added to support in-AWS failing back using AWS Elastic Disaster Recovery. ([d3daca7](https://github.com/aws/aws-sdk-js-v3/commit/d3daca7c9a646c21816dd91347577fe6d7e9f567))
* **client-ecs:** This release adds support for ECS Service Connect, a new capability that simplifies writing and operating resilient distributed applications. This release updates the TaskDefinition, Cluster, Service mutation APIs with Service connect constructs and also adds a new ListServicesByNamespace API. ([fabc6b1](https://github.com/aws/aws-sdk-js-v3/commit/fabc6b15af7b1fe696600a114d95241d3c4ef4e8))
* **client-efs:** This release adds elastic as a new ThroughputMode value for EFS file systems and adds AFTER_1_DAY as a value for TransitionToIARules. ([6d5410c](https://github.com/aws/aws-sdk-js-v3/commit/6d5410c65fb53640f94f3b90cda215cf8a6056c3))
* **client-iot-data-plane:** This release adds support for MQTT5 properties to AWS IoT HTTP Publish API. ([6d1217b](https://github.com/aws/aws-sdk-js-v3/commit/6d1217b0e7f2af86871a12655b0709b4ab497a57))
* **client-iot-wireless:** This release includes a new feature for customers to calculate the position of their devices by adding three new APIs: UpdateResourcePosition, GetResourcePosition, and GetPositionEstimate. ([94b6569](https://github.com/aws/aws-sdk-js-v3/commit/94b6569ca49f4aae3dcec4a9f1e15760f9206711))
* **client-iot:** Job scheduling enables the scheduled rollout of a Job with start and end times and a customizable end behavior when end time is reached. This is available for continuous and snapshot jobs. Added support for MQTT5 properties to AWS IoT TopicRule Republish Action. ([ccd70b0](https://github.com/aws/aws-sdk-js-v3/commit/ccd70b08c4c27447e3a23777361047346a0628d4))
* **client-kendra:** Amazon Kendra now supports preview of table information from HTML tables in the search results. The most relevant cells with their corresponding rows, columns are displayed as a preview in the search result. The most relevant table cell or cells are also highlighted in table preview. ([340955b](https://github.com/aws/aws-sdk-js-v3/commit/340955bd2cfc38dcbfa17b1902a8f1935dc3995e))
* **client-mgn:** This release adds support for Application and Wave management. We also now support custom post-launch actions. ([e573378](https://github.com/aws/aws-sdk-js-v3/commit/e573378a34c7bd32849b130a12f43873811587ef))
* **client-oam:** Amazon CloudWatch Observability Access Manager is a new service that allows configuration of the CloudWatch cross-account observability feature. ([7df2a9d](https://github.com/aws/aws-sdk-js-v3/commit/7df2a9dbb9d317f9d71e627f6e6f60e1d878d4a3))
* **client-organizations:** This release introduces delegated administrator for AWS Organizations, a new feature to help you delegate the management of your Organizations policies, enabling you to govern your AWS organization in a decentralized way. You can now allow member accounts to manage Organizations policies. ([95ff1b2](https://github.com/aws/aws-sdk-js-v3/commit/95ff1b2b9432a095661d5de18ba02eb6d98c491e))
* **client-rds:** This release enables new Aurora and RDS feature called Blue/Green Deployments that makes updates to databases safer, simpler and faster. ([92c3eef](https://github.com/aws/aws-sdk-js-v3/commit/92c3eef27b9edf94a665a65dbea4e9300ec0a53c))
* **client-textract:** This release adds support for classifying and splitting lending documents by type, and extracting information by using the Analyze Lending APIs. This release also includes support for summarized information of the processed lending document package, in addition to per document results. ([be0312b](https://github.com/aws/aws-sdk-js-v3/commit/be0312bf59290fe1eafdb5802b4b3999cd4ce072))
* **client-transcribe-streaming:** This release adds support for real-time (streaming) and post-call Call Analytics within Amazon Transcribe. ([30cd918](https://github.com/aws/aws-sdk-js-v3/commit/30cd918161797ddfc1d37d2348f66d0a59fcf117))
* **client-transcribe:** This release adds support for 'inputType' for post-call and real-time (streaming) Call Analytics within Amazon Transcribe. ([7ee98f5](https://github.com/aws/aws-sdk-js-v3/commit/7ee98f5404ce21b54814dbc48aebbefc78e0e564))
* **clients:** update client endpoints as of 2022-11-28 ([8e9d210](https://github.com/aws/aws-sdk-js-v3/commit/8e9d210066a545bb975a6e09969b1cfbd4efdb16))





# [3.217.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.216.0...v3.217.0) (2022-11-23)


### Bug Fixes

* **codegen:** add check for required query parameters ([#4220](https://github.com/aws/aws-sdk-js-v3/issues/4220)) ([0441081](https://github.com/aws/aws-sdk-js-v3/commit/0441081ea898ad7b2c91455f911216b1a60dd754))
* **codegen:** revert check for required query parameters ([3a5313a](https://github.com/aws/aws-sdk-js-v3/commit/3a5313a7eb2ebcb7ff32453d4d652340930364a6))


### Features

* **client-grafana:** This release includes support for configuring a Grafana workspace to connect to a datasource within a VPC as well as new APIs for configuring Grafana settings. ([b6cf732](https://github.com/aws/aws-sdk-js-v3/commit/b6cf732410e067ab7fb32b305eae44fefbd58378))
* **client-rbin:** This release adds support for Rule Lock for Recycle Bin, which allows you to lock retention rules so that they can no longer be modified or deleted. ([cf212da](https://github.com/aws/aws-sdk-js-v3/commit/cf212da9becbf00661312dc96a0473fa316c8e85))





# [3.216.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.215.0...v3.216.0) (2022-11-22)


### Features

* **client-appflow:** Adding support for Amazon AppFlow to transfer the data to Amazon Redshift databases through Amazon Redshift Data API service. This feature will support the Redshift destination connector on both public and private accessible Amazon Redshift Clusters and Amazon Redshift Serverless. ([4935f53](https://github.com/aws/aws-sdk-js-v3/commit/4935f531a961ed3070e673ccd685941565375bd8))
* **client-kinesis-analytics-v2:** Support for Apache Flink 1.15 in Kinesis Data Analytics. ([e78111f](https://github.com/aws/aws-sdk-js-v3/commit/e78111fa3b2aaa4254190b67ce54cd0e17bb91ed))





# [3.215.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.214.0...v3.215.0) (2022-11-21)


### Features

* **client-route-53:** Amazon Route 53 now supports the Asia Pacific (Hyderabad) Region (ap-south-2) for latency records, geoproximity records, and private DNS for Amazon VPCs in that region. ([94e5777](https://github.com/aws/aws-sdk-js-v3/commit/94e577702f12609e8f2f227e29c7cc1b2f6b3784))
* **module:** create util-utf8 package ([#4206](https://github.com/aws/aws-sdk-js-v3/issues/4206)) ([6b5a56b](https://github.com/aws/aws-sdk-js-v3/commit/6b5a56bdaab05a188e59745b5cccb6a2c0a28ac1))
* **types:** update identity types ([#4189](https://github.com/aws/aws-sdk-js-v3/issues/4189)) ([aa73203](https://github.com/aws/aws-sdk-js-v3/commit/aa73203585d4b13367bd482c41fb48053bb9e628))





# [3.214.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.213.0...v3.214.0) (2022-11-18)


### Bug Fixes

* **client-ssmsap:** remove ssmsap client ([#4210](https://github.com/aws/aws-sdk-js-v3/issues/4210)) ([582a668](https://github.com/aws/aws-sdk-js-v3/commit/582a6682678688f82bdd5a4b601d50723fb5175e))


### Features

* **client-appflow:** AppFlow provides a new API called UpdateConnectorRegistration to update a custom connector that customers have previously registered. With this API, customers no longer need to unregister and then register a connector to make an update. ([6d22f35](https://github.com/aws/aws-sdk-js-v3/commit/6d22f3572f62041639ff9ac5b04b458e169883bd))
* **client-auditmanager:** This release introduces a new feature for Audit Manager: Evidence finder. You can now use evidence finder to quickly query your evidence, and add the matching evidence results to an assessment report. ([12d17b7](https://github.com/aws/aws-sdk-js-v3/commit/12d17b7d1a71a0f70b8ce3ae9d9c176b4a968a08))
* **client-chime-sdk-voice:** Amazon Chime Voice Connector, Voice Connector Group and PSTN Audio Service APIs are now available in the Amazon Chime SDK Voice namespace. See https://docs.aws.amazon.com/chime-sdk/latest/dg/sdk-available-regions.html for more details. ([0b32901](https://github.com/aws/aws-sdk-js-v3/commit/0b32901841b30b44c5a9e1d5bad530f2b6608061))
* **client-cloudfront:** CloudFront API support for staging distributions and associated traffic management policies. ([8447ecd](https://github.com/aws/aws-sdk-js-v3/commit/8447ecd438a1ddc178d87df0707c7b373f2d8cfd))
* **client-connect:** Added AllowedAccessControlTags and TagRestrictedResource for Tag Based Access Control on Amazon Connect Webpage ([1a6e949](https://github.com/aws/aws-sdk-js-v3/commit/1a6e94997715f292cac06c3fa3bd322c78c7b697))
* **client-ec2:** This release adds support for copying an Amazon Machine Image's tags when copying an AMI. ([14571fb](https://github.com/aws/aws-sdk-js-v3/commit/14571fb91d6d9581fb625e45b25abd49f1eb2380))
* **client-glue:** AWSGlue Crawler - Adding support for Table and Column level Comments with database level datatypes for JDBC based crawler. ([c4008c1](https://github.com/aws/aws-sdk-js-v3/commit/c4008c1617a7c85cc271bb5f798e0a7fd61b86d3))
* **client-iot-roborunner:** AWS IoT RoboRunner is a new service that makes it easy to build applications that help multi-vendor robots work together seamlessly. See the IoT RoboRunner developer guide for more details on getting started. https://docs.aws.amazon.com/iotroborunner/latest/dev/iotroborunner-welcome.html ([0e7f18a](https://github.com/aws/aws-sdk-js-v3/commit/0e7f18af4c5721349ed45970cfac39c3a7917b18))
* **client-quicksight:** This release adds the following: 1) Asset management for centralized assets governance 2) QuickSight Q now supports public embedding 3) New Termination protection flag to mitigate accidental deletes 4) Athena data sources now accept a custom IAM role 5) QuickSight supports connectivity to Databricks ([2053c80](https://github.com/aws/aws-sdk-js-v3/commit/2053c804f3c2de30bfcfafce75f3136b4763f7d0))
* **client-sagemaker:** Added DisableProfiler flag as a new field in ProfilerConfig ([4d591d3](https://github.com/aws/aws-sdk-js-v3/commit/4d591d38137054409fdd375ba29192a3a2e737e2))
* **client-service-catalog:** This release 1. adds support for Principal Name Sharing with Service Catalog portfolio sharing. 2. Introduces repo sourced products which are created and managed with existing SC APIs. These products are synced to external repos and auto create new product versions based on changes in the repo. ([9f5ff1d](https://github.com/aws/aws-sdk-js-v3/commit/9f5ff1db68be2e8dad084bb94577315df02cb97d))
* **client-sfn:** This release adds support for using Step Functions service integrations to invoke any cross-account AWS resource, even if that service doesn't support resource-based policies or cross-account calls. See https://docs.aws.amazon.com/step-functions/latest/dg/concepts-access-cross-acct-resources.html ([59b8b63](https://github.com/aws/aws-sdk-js-v3/commit/59b8b6351dcebee3ff786f0959cb4db685272e07))
* **client-ssm-sap:** AWS Systems Manager for SAP provides simplified operations and management of SAP applications such as SAP HANA. With this release, SAP customers and partners can automate and simplify their SAP system administration tasks such as backup/restore of SAP HANA. ([c793c57](https://github.com/aws/aws-sdk-js-v3/commit/c793c57736d168e09802d487fa4e9851d802d53c))
* **client-transfer:** Adds a NONE encryption algorithm type to AS2 connectors, providing support for skipping encryption of the AS2 message body when a HTTPS URL is also specified. ([df19f42](https://github.com/aws/aws-sdk-js-v3/commit/df19f42b1fcaacc4f72f64d24e881f517b6c4b56))
* **clients:** update client endpoints as of 2022-11-18 ([baecf86](https://github.com/aws/aws-sdk-js-v3/commit/baecf862a30e393aba6d4c3591cac1a0055ef0bb))





# [3.213.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.212.0...v3.213.0) (2022-11-17)


### Features

* **client-amplify:** Adds a new value (WEB_COMPUTE) to the Platform enum that allows customers to create Amplify Apps with Server-Side Rendering support. ([96c8e7f](https://github.com/aws/aws-sdk-js-v3/commit/96c8e7f293cc59b9d3f4b62a94366b65651f931d))
* **client-appflow:** AppFlow simplifies the preparation and cataloging of SaaS data into the AWS Glue Data Catalog where your data can be discovered and accessed by AWS analytics and ML services. AppFlow now also supports data field partitioning and file size optimization to improve query performance and reduce cost. ([4f00f1a](https://github.com/aws/aws-sdk-js-v3/commit/4f00f1a913e3492b110501e0a782a19feac82b9d))
* **client-appsync:** This release introduces the APPSYNC_JS runtime, and adds support for JavaScript in AppSync functions and AppSync pipeline resolvers. ([45452e5](https://github.com/aws/aws-sdk-js-v3/commit/45452e5f5440e77efb2c7c146399130f31c22218))
* **client-database-migration-service:** Adds support for Internet Protocol Version 6 (IPv6) on DMS Replication Instances ([0528c9c](https://github.com/aws/aws-sdk-js-v3/commit/0528c9ccd1fcb06c254c64bc996f1dd5eaadb564))
* **client-ec2:** This release adds a new optional parameter "privateIpAddress" for the CreateNatGateway API. PrivateIPAddress will allow customers to select a custom Private IPv4 address instead of having it be auto-assigned. ([db91280](https://github.com/aws/aws-sdk-js-v3/commit/db912805033a437cc63004f8caafbdd595abf1a1))
* **client-emr-serverless:** Adds support for AWS Graviton2 based applications. You can now select CPU architecture when creating new applications or updating existing ones. ([1ed217a](https://github.com/aws/aws-sdk-js-v3/commit/1ed217ad8c399c6d1224e094bfc8a443a1f12280))
* **client-ivschat:** Adds LoggingConfiguration APIs for IVS Chat - a feature that allows customers to store and record sent messages in a chat room to S3 buckets, CloudWatch logs, or Kinesis firehose. ([8baf756](https://github.com/aws/aws-sdk-js-v3/commit/8baf7561af4360570372445e41a0473ae81edcd8))
* **client-lambda:** Add Node 18 (nodejs18.x) support to AWS Lambda. ([407c7ad](https://github.com/aws/aws-sdk-js-v3/commit/407c7ad4aaeeab4bcf8c57eb4382f5d40274c627))
* **client-personalize:** This release provides support for creation and use of metric attributions in AWS Personalize ([77bbf01](https://github.com/aws/aws-sdk-js-v3/commit/77bbf0195c03631e4f839b94c92bd4ad42a24d11))
* **client-polly:** Add two new neural voices - Ola (pl-PL) and Hala (ar-AE). ([4a5f530](https://github.com/aws/aws-sdk-js-v3/commit/4a5f53076f54f70cd93168d1c6f2552604ca8284))
* **client-rum:** CloudWatch RUM now supports custom events. To use custom events, create an app monitor or update an app monitor with CustomEvent Status as ENABLED. ([55ce77a](https://github.com/aws/aws-sdk-js-v3/commit/55ce77a933280cfc981fa23706fc042eb01233f7))
* **client-s3-control:** Added 34 new S3 Storage Lens metrics to support additional customer use cases. ([046b377](https://github.com/aws/aws-sdk-js-v3/commit/046b377137e776955962a3c556a706f90873a734))
* **client-securityhub:** Added SourceLayerArn and SourceLayerHash field for security findings.  Updated AwsLambdaFunction Resource detail ([55eb401](https://github.com/aws/aws-sdk-js-v3/commit/55eb401b66503cad150326461ed53e7762c6362f))
* **client-service-catalog-appregistry:** This release adds support for tagged resource associations, which allows you to associate a group of resources with a defined resource tag key and value to the application. ([8212786](https://github.com/aws/aws-sdk-js-v3/commit/82127866ea2feab18106989a88a88cf0d486734b))
* **client-textract:** This release adds support for specifying and extracting information from documents using the Signatures feature within Analyze Document API ([59048ea](https://github.com/aws/aws-sdk-js-v3/commit/59048ea555718aa583629d91bd17cfad1f56c4f6))
* **client-workspaces:** The release introduces CreateStandbyWorkspaces, an API that allows you to create standby WorkSpaces associated with a primary WorkSpace in another Region. DescribeWorkspaces now includes related WorkSpaces properties. DescribeWorkspaceBundles and CreateWorkspaceBundle now return more bundle details. ([e477f4a](https://github.com/aws/aws-sdk-js-v3/commit/e477f4af2e73e9c6fccaf88bf202e44b8d3d0ce8))
* **clients:** update client endpoints as of 2022-11-17 ([f26c8a8](https://github.com/aws/aws-sdk-js-v3/commit/f26c8a84885d66206cae37503e6558816448f73b))





# [3.212.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.211.0...v3.212.0) (2022-11-16)


### Features

* **client-billingconductor:** This release adds a new feature BillingEntity pricing rule. ([6f15a0a](https://github.com/aws/aws-sdk-js-v3/commit/6f15a0a90a035c56b4573cbce8cd8f175cc5b195))
* **client-cloudformation:** Added UnsupportedTarget HandlerErrorCode for use with CFN Resource Hooks ([6c5beed](https://github.com/aws/aws-sdk-js-v3/commit/6c5beed8687a1c07271932e0d9d7bac89e1d0e0e))
* **client-comprehendmedical:** This release supports new set of entities and traits. It also adds new category (BEHAVIORAL_ENVIRONMENTAL_SOCIAL). ([05089b4](https://github.com/aws/aws-sdk-js-v3/commit/05089b4f8f7e3e179b6be27a480988ff306089bd))
* **client-connect:** This release adds a new MonitorContact API for initiating monitoring of ongoing Voice and Chat contacts. ([2adc9d0](https://github.com/aws/aws-sdk-js-v3/commit/2adc9d0774cf1f835290defa4ab9ca67a9a0f901))
* **client-eks:** Adds support for customer-provided placement groups for Kubernetes control plane instances when creating local EKS clusters on Outposts ([4c8f3dc](https://github.com/aws/aws-sdk-js-v3/commit/4c8f3dcab691f7831802b529a6b48b83d1247085))
* **client-elasticache:** for Redis now supports AWS Identity and Access Management authentication access to Redis clusters starting with redis-engine version 7.0 ([d1ac8d8](https://github.com/aws/aws-sdk-js-v3/commit/d1ac8d802fd7e9186386aed9df1951935b469eae))
* **client-iottwinmaker:** This release adds the following: 1) ExecuteQuery API allows users to query their AWS IoT TwinMaker Knowledge Graph 2) Pricing plan APIs allow users to configure and manage their pricing mode 3) Support for property groups and tabular property values in existing AWS IoT TwinMaker APIs. ([8d31224](https://github.com/aws/aws-sdk-js-v3/commit/8d312240058c7ccd037ea222f3635b7226f92e30))
* **client-personalize-events:** This release provides support for creation and use of metric attributions in AWS Personalize ([f30761f](https://github.com/aws/aws-sdk-js-v3/commit/f30761f13bcc10b8d9993ddd8f0251b7cb738c42))
* **client-proton:** Add support for sorting and filtering in ListServiceInstances ([68d0e23](https://github.com/aws/aws-sdk-js-v3/commit/68d0e2382a2c27d3539db00a9d370ecc004809bf))
* **client-rds:** This release adds support for container databases (CDBs) to Amazon RDS Custom for Oracle. A CDB contains one PDB at creation. You can add more PDBs using Oracle SQL. You can also customize your database installation by setting the Oracle base, Oracle home, and the OS user name and group. ([6aa6b3a](https://github.com/aws/aws-sdk-js-v3/commit/6aa6b3a087db719710a34d679eba31799f918043))
* **client-ssm-incidents:** Add support for PagerDuty integrations on ResponsePlan, IncidentRecord, and RelatedItem APIs ([7b5617c](https://github.com/aws/aws-sdk-js-v3/commit/7b5617cf214f9f26f9e1270ae61b5444b55ef0e7))
* **client-ssm:** This release adds support for cross account access in CreateOpsItem, UpdateOpsItem and GetOpsItem. It introduces new APIs to setup resource policies for SSM resources: PutResourcePolicy, GetResourcePolicies and DeleteResourcePolicy. ([1d04c01](https://github.com/aws/aws-sdk-js-v3/commit/1d04c01c58c38a0ddc3adaedfd3fc21246500536))
* **client-transfer:** Allow additional operations to throw ThrottlingException ([108f81d](https://github.com/aws/aws-sdk-js-v3/commit/108f81d0547a038d8fcf6b51547be8ec1d1042a7))
* **client-xray:** This release adds new APIs - PutResourcePolicy, DeleteResourcePolicy, ListResourcePolicies for supporting resource based policies for AWS X-Ray. ([1e16743](https://github.com/aws/aws-sdk-js-v3/commit/1e16743bee07422f8d1e1af750990e4571a618d7))





# [3.211.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.210.0...v3.211.0) (2022-11-15)


### Bug Fixes

* **codegen:** do not call clear on endpoints param name map ([#4164](https://github.com/aws/aws-sdk-js-v3/issues/4164)) ([90b380a](https://github.com/aws/aws-sdk-js-v3/commit/90b380ad8964bec83ad07b6e6d84727c5dea07db))


### Features

* **client-connect:** This release updates the APIs: UpdateInstanceAttribute, DescribeInstanceAttribute, and ListInstanceAttributes. You can use it to programmatically enable/disable enhanced contact monitoring using attribute type ENHANCED_CONTACT_MONITORING on the specified Amazon Connect instance. ([5008e1d](https://github.com/aws/aws-sdk-js-v3/commit/5008e1d82374f82536661251b4a88b078dc8c0ef))
* **client-greengrassv2:** Adds new parent target ARN paramater to CreateDeployment, GetDeployment, and ListDeployments APIs for the new subdeployments feature. ([9143da4](https://github.com/aws/aws-sdk-js-v3/commit/9143da4a18873dddabb3b2b218692b4ef1aa7bf4))
* **client-route-53:** Amazon Route 53 now supports the Europe (Spain) Region (eu-south-2) for latency records, geoproximity records, and private DNS for Amazon VPCs in that region. ([2e9f566](https://github.com/aws/aws-sdk-js-v3/commit/2e9f566a11ef3986846b48c9da8e95cda00838c7))
* **client-ssmsap:** AWS Systems Manager for SAP provides simplified operations and management of SAP applications such as SAP HANA. With this release, SAP customers and partners can automate and simplify their SAP system administration tasks such as backup/restore of SAP HANA. ([cadb5fd](https://github.com/aws/aws-sdk-js-v3/commit/cadb5fd7a3b227d20897aa3c4cd79e9933d6841c))
* **client-workspaces:** This release introduces ModifyCertificateBasedAuthProperties, a new API that allows control of certificate-based auth properties associated with a WorkSpaces directory. The DescribeWorkspaceDirectories API will now additionally return certificate-based auth properties in its responses. ([01db1ff](https://github.com/aws/aws-sdk-js-v3/commit/01db1ff4404a34dfc8381ee658d249737c6763fd))





# [3.210.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.209.0...v3.210.0) (2022-11-14)


### Bug Fixes

* **aws-procotoltests:** use default no-op logger ([#4178](https://github.com/aws/aws-sdk-js-v3/issues/4178)) ([796b02a](https://github.com/aws/aws-sdk-js-v3/commit/796b02a3ac16d6228ffc6bc2d59608aa109d9528))
* **credential-provider-sso:** add existence check to profile ([#4186](https://github.com/aws/aws-sdk-js-v3/issues/4186)) ([cc0404a](https://github.com/aws/aws-sdk-js-v3/commit/cc0404aafb3601d2b0356440fe62542b1b958bbb))


### Features

* **client-customer-profiles:** This release enhances the SearchProfiles API by providing functionality to search for profiles using multiple keys and logical operators. ([ae0500b](https://github.com/aws/aws-sdk-js-v3/commit/ae0500b542430a0af2adad48c226d84d4f609d11))
* **client-lakeformation:** This release adds a new parameter "Parameters" in the DataLakeSettings. ([1a047d1](https://github.com/aws/aws-sdk-js-v3/commit/1a047d1f05badc0d360b83689088f85aa450aec0))
* **client-proton:** Add support for CodeBuild Provisioning ([7594756](https://github.com/aws/aws-sdk-js-v3/commit/7594756aea01f67a5f95983b9a2a266baf89c7bc))
* **client-rds:** This release adds support for restoring an RDS Multi-AZ DB cluster snapshot to a Single-AZ deployment or a Multi-AZ DB instance deployment. ([1b96437](https://github.com/aws/aws-sdk-js-v3/commit/1b96437ba29a44789c3c6e8f36b9afc840b804d0))
* **client-workdocs:** Added 2 new document related operations, DeleteDocumentVersion and RestoreDocumentVersions. ([38acfdd](https://github.com/aws/aws-sdk-js-v3/commit/38acfdd82884b3de8df76466c28d12a98d24fdc2))
* **client-xray:** This release enhances GetServiceGraph API to support new type of edge to represent links between SQS and Lambda in event-driven applications. ([0963adb](https://github.com/aws/aws-sdk-js-v3/commit/0963adb490167d20fd626cb738dea4a966ea391c))





# [3.209.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.208.0...v3.209.0) (2022-11-11)


### Bug Fixes

* **clients:** remove unconditional add of util-base64 node and browser modules ([#4170](https://github.com/aws/aws-sdk-js-v3/issues/4170)) ([24ec718](https://github.com/aws/aws-sdk-js-v3/commit/24ec718ea19309059d8b923c0b5c4265d308a36f))
* **clients:** use default no-op logger in clients codegen ([#4171](https://github.com/aws/aws-sdk-js-v3/issues/4171)) ([9721730](https://github.com/aws/aws-sdk-js-v3/commit/9721730bc3ceba8a8b80ad95e9c893e55e30272e))


### Features

* **client-iot:** This release add new api listRelatedResourcesForAuditFinding and new member type IssuerCertificates for Iot device device defender Audit. ([ef24039](https://github.com/aws/aws-sdk-js-v3/commit/ef24039905bad3e48aa837ac8c4a440bf2e44c73))
* **client-license-manager:** AWS License Manager now supports onboarded Management Accounts or Delegated Admins to view granted licenses aggregated from all accounts in the organization. ([63e5da1](https://github.com/aws/aws-sdk-js-v3/commit/63e5da19a34fc0c545ee2e648a7c4393689ffb0d))
* **client-marketplace-catalog:** Added three new APIs to support tagging and tag-based authorization: TagResource, UntagResource, and ListTagsForResource. Added optional parameters to the StartChangeSet API to support tagging a resource while making a request to create it. ([65b66c7](https://github.com/aws/aws-sdk-js-v3/commit/65b66c7f8769078acabcb548b09995f97998319a))
* **client-rekognition:** Adding support for ImageProperties feature to detect dominant colors and image brightness, sharpness, and contrast, inclusion and exclusion filters for labels and label categories, new fields to the API response, "aliases" and "categories" ([a0ad760](https://github.com/aws/aws-sdk-js-v3/commit/a0ad760a72bc92c24b21bf88e54dd6fd182db7d6))
* **client-ssm-incidents:** RelatedItems now have an ID field which can be used for referencing them else where. Introducing event references in TimelineEvent API and increasing maximum length of "eventData" to 12K characters. ([de55f7e](https://github.com/aws/aws-sdk-js-v3/commit/de55f7e800313b41c70c5a6348890e5a303ac678))
* **clients:** update client endpoints as of 2022-11-11 ([34fc28e](https://github.com/aws/aws-sdk-js-v3/commit/34fc28e2389ef857d682e21737ce9caa6d2986fc))
* **sso:** use SSOTokenProvider in SSOCredentialProvider ([#4145](https://github.com/aws/aws-sdk-js-v3/issues/4145)) ([e4ea7d0](https://github.com/aws/aws-sdk-js-v3/commit/e4ea7d0d75008748fcde632518ab8d5aacabbfda))





# [3.208.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.207.0...v3.208.0) (2022-11-10)


### Bug Fixes

* **aws-client-api-test:** rename package ([#4165](https://github.com/aws/aws-sdk-js-v3/issues/4165)) ([2e13b67](https://github.com/aws/aws-sdk-js-v3/commit/2e13b67d85d12da2b1b12b1b83c3b80144336e22))
* **types:** add client config interface test with s3 example ([#4156](https://github.com/aws/aws-sdk-js-v3/issues/4156)) ([7811cd9](https://github.com/aws/aws-sdk-js-v3/commit/7811cd959b611e13466c7c1f0469947ef32a3695))


### Features

* **client-ec2:** This release adds a new price capacity optimized allocation strategy for Spot Instances to help customers optimize provisioning of Spot Instances via EC2 Auto Scaling, EC2 Fleet, and Spot Fleet. It allocates Spot Instances based on both spare capacity availability and Spot Instance price. ([6f4d604](https://github.com/aws/aws-sdk-js-v3/commit/6f4d6046af15788874f42229fae1a5103d2c80b5))
* **client-ecs:** This release adds support for task scale-in protection with updateTaskProtection and getTaskProtection APIs. UpdateTaskProtection API can be used to protect a service managed task from being terminated by scale-in events and getTaskProtection API to get the scale-in protection status of a task. ([a5eede0](https://github.com/aws/aws-sdk-js-v3/commit/a5eede0dabd563d06e90f2b987d52e003f6d48cf))
* **client-elasticsearch-service:** Amazon OpenSearch Service now offers managed VPC endpoints to connect to your Amazon OpenSearch Service VPC-enabled domain in a Virtual Private Cloud (VPC). This feature allows you to privately access OpenSearch Service domain without using public IPs or requiring traffic to traverse the Internet. ([f36b021](https://github.com/aws/aws-sdk-js-v3/commit/f36b021c20d31bb774c8e93f3c889217f32be2c4))
* **client-scheduler:** AWS introduces the new Amazon EventBridge Scheduler. EventBridge Scheduler is a serverless scheduler that allows you to create, run, and manage tasks from one central, managed service. ([8829f71](https://github.com/aws/aws-sdk-js-v3/commit/8829f710d9a18a87c748849e2d5afbb0057bb239))
* **clients:** update client endpoints as of 2022-11-10 ([c01499d](https://github.com/aws/aws-sdk-js-v3/commit/c01499da278f3090fe20abb242494ddc712ab3d2))
* **private:** add server artifacts ([#4159](https://github.com/aws/aws-sdk-js-v3/issues/4159)) ([e70f472](https://github.com/aws/aws-sdk-js-v3/commit/e70f47253fb6f6977438719ccaf8305b1e3e54e6))





# [3.207.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.206.0...v3.207.0) (2022-11-09)


### Bug Fixes

* **lib-storage:** fix bucket duplication in hostname ([#4157](https://github.com/aws/aws-sdk-js-v3/issues/4157)) ([004d6c0](https://github.com/aws/aws-sdk-js-v3/commit/004d6c0fe5228417dced299d899ee1f75e694429))


### Features

* **client-connectcases:** This release adds the ability to disable templates through the UpdateTemplate API. Disabling templates prevents customers from creating cases using the template. For more information see https://docs.aws.amazon.com/cases/latest/APIReference/Welcome.html ([c0c724a](https://github.com/aws/aws-sdk-js-v3/commit/c0c724a83132ad5192b52a2a2b883026b5cb24d8))
* **client-connect:** This release adds new fields SignInUrl, UserArn, and UserId to GetFederationToken response payload. ([552e450](https://github.com/aws/aws-sdk-js-v3/commit/552e45045b3b5105b5e6e41869840813b9b93351))
* **client-ec2:** Amazon EC2 Trn1 instances, powered by AWS Trainium chips, are purpose built for high-performance deep learning training. u-24tb1.112xlarge and u-18tb1.112xlarge High Memory instances are purpose-built to run large in-memory databases. ([f0aeeb1](https://github.com/aws/aws-sdk-js-v3/commit/f0aeeb1a032045f9ec3959f58139f47a3715503f))
* **client-groundstation:** This release adds the preview of customer-provided ephemeris support for AWS Ground Station, allowing space vehicle owners to provide their own position and trajectory information for a satellite. ([b6eadd0](https://github.com/aws/aws-sdk-js-v3/commit/b6eadd074ebb3b5e01824d60281269a386f571ce))
* **client-mediapackage-vod:** This release adds "IncludeIframeOnlyStream" for Dash endpoints. ([09a0c2e](https://github.com/aws/aws-sdk-js-v3/commit/09a0c2e427e4ce1cd8a706c33c37d48664680706))
* **client-transcribe-streaming:** This will release hi-IN and th-TH ([50252d2](https://github.com/aws/aws-sdk-js-v3/commit/50252d257b758dec19539ea75d397cef1efb1d18))





# [3.206.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.205.0...v3.206.0) (2022-11-08)


### Bug Fixes

* **codegen:** pin smithy-cli version to 1.26.1 ([#4149](https://github.com/aws/aws-sdk-js-v3/issues/4149)) ([03a5b9d](https://github.com/aws/aws-sdk-js-v3/commit/03a5b9d9fc3ba695b3245ef13ff02dbca54fba22))


### Features

* **client-acm:** Support added for requesting elliptic curve certificate key algorithm types P-256 (EC_prime256v1) and P-384 (EC_secp384r1). ([f49d52b](https://github.com/aws/aws-sdk-js-v3/commit/f49d52b24b0e989e90339bc1dc66890976484431))
* **client-billingconductor:** This release adds the Recurring Custom Line Item feature along with a new API ListCustomLineItemVersions. ([49a8b23](https://github.com/aws/aws-sdk-js-v3/commit/49a8b23c0231c8dddc33812a8db39e4233e54ee7))
* **client-ec2:** This release enables sharing of EC2 Placement Groups across accounts and within AWS Organizations using Resource Access Manager ([66a8faf](https://github.com/aws/aws-sdk-js-v3/commit/66a8faff173adb0ccfb654b99d5e7a3cfd9622d8))
* **client-fms:** AWS Firewall Manager now supports importing existing AWS Network Firewall firewalls into Firewall Manager policies. ([d06e460](https://github.com/aws/aws-sdk-js-v3/commit/d06e4604419f408faae3b53b4dc532cfd4fcc690))
* **client-lightsail:** This release adds support for Amazon Lightsail to automate the delegation of domains registered through Amazon Route 53 to Lightsail DNS management and to automate record creation for DNS validation of Lightsail SSL/TLS certificates. ([b4d36fc](https://github.com/aws/aws-sdk-js-v3/commit/b4d36fc18afe9fe0c477f73f814086e93f46652b))
* **client-opensearch:** Amazon OpenSearch Service now offers managed VPC endpoints to connect to your Amazon OpenSearch Service VPC-enabled domain in a Virtual Private Cloud (VPC). This feature allows you to privately access OpenSearch Service domain without using public IPs or requiring traffic to traverse the Internet. ([ca5e4e1](https://github.com/aws/aws-sdk-js-v3/commit/ca5e4e19856a21f1dd7eb02cfeb5d2baf8b4e3b3))
* **client-polly:** Amazon Polly adds new voices: Elin (sv-SE), Ida (nb-NO), Laura (nl-NL) and Suvi (fi-FI). They are available as neural voices only. ([93e3cec](https://github.com/aws/aws-sdk-js-v3/commit/93e3cec58f9bd2130512c7aebb24ec143186301c))
* **client-resource-explorer-2:** This is the initial SDK release for AWS Resource Explorer. AWS Resource Explorer lets your users search for and discover your AWS resources across the AWS Regions in your account. ([87b4b80](https://github.com/aws/aws-sdk-js-v3/commit/87b4b80099f9a52e80a024c6236b8d95142b412d))
* **client-route-53:** Amazon Route 53 now supports the Europe (Zurich) Region (eu-central-2) for latency records, geoproximity records, and private DNS for Amazon VPCs in that region. ([63c33f6](https://github.com/aws/aws-sdk-js-v3/commit/63c33f6da9f75b7bef99f25f9241e934d0c13184))
* **clients:** update client endpoints as of 2022-11-08 ([c0daec7](https://github.com/aws/aws-sdk-js-v3/commit/c0daec7ef894c6d722cf261f4b365e4b3fd4cdd8))





# [3.205.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.204.0...v3.205.0) (2022-11-07)


### Features

* **client-athena:** Adds support for using Query Result Reuse ([6a0d92b](https://github.com/aws/aws-sdk-js-v3/commit/6a0d92bf057de9f7c52d2fd2d0ee3c5311173fb6))
* **client-auto-scaling:** This release adds support for two new attributes for attribute-based instance type selection - NetworkBandwidthGbps and AllowedInstanceTypes. ([bc7e079](https://github.com/aws/aws-sdk-js-v3/commit/bc7e079d15640f04e6dae55082abfd06cab1c6b7))
* **client-cloudtrail:** This release includes support for configuring a delegated administrator to manage an AWS Organizations organization CloudTrail trails and event data stores, and AWS Key Management Service encryption of CloudTrail Lake event data stores. ([ed0a489](https://github.com/aws/aws-sdk-js-v3/commit/ed0a4895a057ccb296f97b389eeb5e6b863dbdcb))
* **client-ec2:** This release adds support for two new attributes for attribute-based instance type selection - NetworkBandwidthGbps and AllowedInstanceTypes. ([f7b7c63](https://github.com/aws/aws-sdk-js-v3/commit/f7b7c6377423d6759d4172b2aaba8aa93c5b617a))
* **client-elasticache:** Added support for IPv6 and dual stack for Memcached and Redis clusters. Customers can now launch new Redis and Memcached clusters with IPv6 and dual stack networking support. ([f40c788](https://github.com/aws/aws-sdk-js-v3/commit/f40c788716fff2d34e0ba344c0a33c81639b74e5))
* **client-lex-models-v2:** Amazon Lex now supports new APIs for viewing and editing Custom Vocabulary in bots. ([aa323d6](https://github.com/aws/aws-sdk-js-v3/commit/aa323d657242f2fa3e095d56e3ea57b60dddcc1a))
* **client-mediaconvert:** The AWS Elemental MediaConvert SDK has added support for setting the SDR reference white point for HDR conversions and conversion of HDR10 to DolbyVision without mastering metadata. ([a757ec2](https://github.com/aws/aws-sdk-js-v3/commit/a757ec240c6a21e766158f1cf0d7af7696c802f3))
* **client-ssm:** This release includes support for applying a CloudWatch alarm to multi account multi region Systems Manager Automation ([2ced1dc](https://github.com/aws/aws-sdk-js-v3/commit/2ced1dc2cbe887cb98313623bba6447927486cf6))
* **client-wellarchitected:** This release adds support for integrations with AWS Trusted Advisor and AWS Service Catalog AppRegistry to improve workload discovery and speed up your workload reviews. ([761bbb6](https://github.com/aws/aws-sdk-js-v3/commit/761bbb6d7be5b2b39abb18dee04478994c745426))
* **client-workspaces:** This release adds protocols attribute to workspaces properties data type. This enables customers to migrate workspaces from PC over IP (PCoIP) to WorkSpaces Streaming Protocol (WSP) using create and modify workspaces public APIs. ([71b7267](https://github.com/aws/aws-sdk-js-v3/commit/71b726729c45d2701cf8c67ae0e818c8a43ab20b))
* **clients:** update client endpoints as of 2022-11-07 ([dfdc1fb](https://github.com/aws/aws-sdk-js-v3/commit/dfdc1fb6ee4516f7bfb396a9a7d51100211ef47f))





# [3.204.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.203.0...v3.204.0) (2022-11-04)


### Features

* **client-ec2:** This release adds API support for the recipient of an AMI account share to remove shared AMI launch permissions. ([59dc76d](https://github.com/aws/aws-sdk-js-v3/commit/59dc76dd5fc2a5a2bb56982b55ccbce6fa9b7ed6))
* **client-emr-containers:** Adding support for Job templates. Job templates allow you to create and store templates to configure Spark applications parameters. This helps you ensure consistent settings across applications by reusing and enforcing configuration overrides in data pipelines. ([011ec88](https://github.com/aws/aws-sdk-js-v3/commit/011ec88cfe576c4712c6db47e489e0211d5df93b))
* **clients:** update client endpoints as of 2022-11-04 ([7471107](https://github.com/aws/aws-sdk-js-v3/commit/7471107c0881b5d9e474447a660dd3354a50b195))





# [3.203.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.202.0...v3.203.0) (2022-11-03)


### Features

* **client-memorydb:** Adding support for r6gd instances for MemoryDB Redis with data tiering. In a cluster with data tiering enabled, when available memory capacity is exhausted, the least recently used data is automatically tiered to solid state drives for cost-effective capacity scaling with minimal performance impact. ([8a58304](https://github.com/aws/aws-sdk-js-v3/commit/8a58304d3ea8fc59c6e59e76a5e58e820f406da7))
* **client-sagemaker:** Amazon SageMaker now supports running training jobs on ml.trn1 instance types. ([d415b12](https://github.com/aws/aws-sdk-js-v3/commit/d415b12ae93957b1741f23ff6ea6904d10965715))





# [3.202.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.201.0...v3.202.0) (2022-11-02)


### Bug Fixes

* **codegen:** aws-query protocol, distinguish explicit empty list ([#4003](https://github.com/aws/aws-sdk-js-v3/issues/4003)) ([8e10769](https://github.com/aws/aws-sdk-js-v3/commit/8e10769b6146f93c0674686fa547290292714917))
* **util-endpoints:** evaluateTemplate implementation without RegExp/Function ([#4136](https://github.com/aws/aws-sdk-js-v3/issues/4136)) ([5c8a6fb](https://github.com/aws/aws-sdk-js-v3/commit/5c8a6fbe34267337b14774b8e47e9d584a29ecd4))


### Features

* **client-iotsitewise:** This release adds the ListAssetModelProperties and ListAssetProperties APIs. You can list all properties that belong to a single asset model or asset using these two new APIs. ([4081f69](https://github.com/aws/aws-sdk-js-v3/commit/4081f696e0a3fc9dc9764aa6d2936601498197e9))
* **client-s3-control:** S3 on Outposts launches support for Lifecycle configuration for Outposts buckets. With S3 Lifecycle configuration, you can mange objects so they are stored cost effectively. You can manage objects using size-based rules and specify how many noncurrent versions bucket will retain. ([556a2da](https://github.com/aws/aws-sdk-js-v3/commit/556a2da86d7be79e8a8993715c6eb9757b252966))
* **client-sagemaker:** This release updates Framework model regex for ModelPackage to support new Framework version xgboost, sklearn. ([8f32160](https://github.com/aws/aws-sdk-js-v3/commit/8f3216044eea04ba2a8053943cb74c76d99dc0b0))
* **client-ssm-incidents:** Adds support for tagging replication-set on creation. ([dc1464e](https://github.com/aws/aws-sdk-js-v3/commit/dc1464ec38e529322ce907a9b212cc71531f91fb))
* **clients:** update client endpoints as of 2022-11-02 ([4a0c484](https://github.com/aws/aws-sdk-js-v3/commit/4a0c48459dd6a261e29fdd02e36b24fb357e7955))
* **util-base64:** merge node and browser implementations ([#4137](https://github.com/aws/aws-sdk-js-v3/issues/4137)) ([d3ccee7](https://github.com/aws/aws-sdk-js-v3/commit/d3ccee7cbe3a0cda64af32aff5a1485e3941daf9))





# [3.201.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.200.0...v3.201.0) (2022-11-01)


### Bug Fixes

* **client-s3-control:** restrict Bucket param dedupe to S3 only ([#4132](https://github.com/aws/aws-sdk-js-v3/issues/4132)) ([80634b7](https://github.com/aws/aws-sdk-js-v3/commit/80634b76e7d7879fd11b339e882cdbf6c15d60df))
* **scripts:** skip clients while linting in CI ([#4129](https://github.com/aws/aws-sdk-js-v3/issues/4129)) ([ffec8bd](https://github.com/aws/aws-sdk-js-v3/commit/ffec8bd9e7d1ef98e7b229cd5ec62a2171b0c395))


### Features

* **client-rds:** Relational Database Service - This release adds support for configuring Storage Throughput on RDS database instances. ([e06e4e2](https://github.com/aws/aws-sdk-js-v3/commit/e06e4e23fa56828d0faa146c3f6a03317f1a10c0))
* **client-textract:** Add ocr results in AnalyzeIDResponse as blocks ([0b08176](https://github.com/aws/aws-sdk-js-v3/commit/0b0817642a2279f34fbc3615ac520f193f64ba5f))
* **clients:** update client endpoints as of 2022-11-01 ([323e3c5](https://github.com/aws/aws-sdk-js-v3/commit/323e3c5818121c2d7fc1f3bed7fc9c9154540133))
* end support for Node.js 12.x ([#4123](https://github.com/aws/aws-sdk-js-v3/issues/4123)) ([83f913e](https://github.com/aws/aws-sdk-js-v3/commit/83f913ec2ac3878d8726c6964f585550dc5caf3e))





# [3.200.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.199.0...v3.200.0) (2022-10-31)


### Bug Fixes

* **endpoint:** instruct rds middleware to wait for endpoint resolution ([#4120](https://github.com/aws/aws-sdk-js-v3/issues/4120)) ([7cabc1e](https://github.com/aws/aws-sdk-js-v3/commit/7cabc1ebe4f1f8c37b29b421572b69cf57d2eb4b))
* **types:** extends check of generic in WithSdkStreamMixin ([#4119](https://github.com/aws/aws-sdk-js-v3/issues/4119)) ([299d245](https://github.com/aws/aws-sdk-js-v3/commit/299d245f63a69324bb973e28be79c055359c4d69))


### Features

* **client-apprunner:** This release adds support for private App Runner services. Services may now be configured to be made private and only accessible from a VPC. The changes include a new VpcIngressConnection resource and several new and modified APIs. ([cce87ac](https://github.com/aws/aws-sdk-js-v3/commit/cce87acf067b146e3d2107563cc16c48a8c53995))
* **client-cloudwatch-logs:** SDK release to support tagging for destinations and log groups with TagResource. Also supports tag on create with PutDestination. ([c97217f](https://github.com/aws/aws-sdk-js-v3/commit/c97217fa2fc1f789550a7f8042a3a4bc3ace46e0))
* **client-connect:** Amazon connect now support a new API DismissUserContact to dismiss or remove terminated contacts in Agent CCP ([9e340c3](https://github.com/aws/aws-sdk-js-v3/commit/9e340c32f2d498744cc5549b68fe5b531f09c225))
* **client-ec2:** Elastic IP transfer is a new Amazon VPC feature that allows you to transfer your Elastic IP addresses from one AWS Account to another. ([dba90b0](https://github.com/aws/aws-sdk-js-v3/commit/dba90b03c11ef100ad1afa36c8ffabb729f05b4e))
* **client-iot:** This release adds the Amazon Location action to IoT Rules Engine. ([dc1adcf](https://github.com/aws/aws-sdk-js-v3/commit/dc1adcfbf07398923c0137c5c8247a8d3bec1331))
* **client-sesv2:** This release includes support for interacting with the Virtual Deliverability Manager, allowing you to opt in/out of the feature and to retrieve recommendations and metric data. ([72ea473](https://github.com/aws/aws-sdk-js-v3/commit/72ea473836f7af93d5fff0e8e65d2ed6f244b84a))
* **client-textract:** This release introduces additional support for 30+ normalized fields such as vendor address and currency. It also includes OCR output in the response and accuracy improvements for the already supported fields in previous version ([5ee0634](https://github.com/aws/aws-sdk-js-v3/commit/5ee0634c0fcb966479f12f95da3918395139dbfc))
* **clients:** update client endpoints as of 2022-10-31 ([1677e7f](https://github.com/aws/aws-sdk-js-v3/commit/1677e7fe465f4538822bd424e3e0e396fad964a4))





# [3.199.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.198.0...v3.199.0) (2022-10-28)


### Bug Fixes

* **packages:** issues with jest script and configuration ([#4115](https://github.com/aws/aws-sdk-js-v3/issues/4115)) ([7b788b8](https://github.com/aws/aws-sdk-js-v3/commit/7b788b829965290b3b469de5e7ad845d39a431c6))


### Features

* **client-apprunner:** AWS App Runner adds .NET 6, Go 1, PHP 8.1 and Ruby 3.1 runtimes. ([12cc3bc](https://github.com/aws/aws-sdk-js-v3/commit/12cc3bcc2c087cd3e07ac4d92981794d960d2839))
* **client-appstream:** This release includes CertificateBasedAuthProperties in CreateDirectoryConfig and UpdateDirectoryConfig. ([f6bd19e](https://github.com/aws/aws-sdk-js-v3/commit/f6bd19e979deb9571989ca88781a7c38176ca501))
* **client-cloudformation:** This release adds more fields to improves visibility of AWS CloudFormation StackSets information in following APIs: ListStackInstances, DescribeStackInstance, ListStackSetOperationResults, ListStackSetOperations, DescribeStackSetOperation. ([9f57946](https://github.com/aws/aws-sdk-js-v3/commit/9f5794644eddb1b723982d04e8a516de32c2c49e))
* **client-gamesparks:** Add LATEST as a possible GameSDK Version on snapshot ([758bc33](https://github.com/aws/aws-sdk-js-v3/commit/758bc33a21cf0c32bc3c2ebbbeec867ee0d1e3d5))
* **client-mediatailor:** This release introduces support for SCTE-35 segmentation descriptor messages which can be sent within time signal messages. ([d2920e8](https://github.com/aws/aws-sdk-js-v3/commit/d2920e834e93f3b8913bc515cc1e407bf1ff6ed8))
* **client-privatenetworks:** Fix incorrect endpoint-prefix in endpoint ruleset. ([30ddc67](https://github.com/aws/aws-sdk-js-v3/commit/30ddc671e61540c852a766059780e8f4e19b292c))
* **client-support-app:** Fix incorrect endpoint-prefix in endpoint ruleset. ([2955f67](https://github.com/aws/aws-sdk-js-v3/commit/2955f676b5f6e5a9303ef9096589e220bf7060f1))
* **clients:** update client endpoints as of 2022-10-28 ([000a4ed](https://github.com/aws/aws-sdk-js-v3/commit/000a4edc607ee4b93a0777dc971ba1373af786b3))





# [3.198.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.197.0...v3.198.0) (2022-10-27)


### Bug Fixes

* **scripts:** use since origin/main for ci ([#4101](https://github.com/aws/aws-sdk-js-v3/issues/4101)) ([1335bfb](https://github.com/aws/aws-sdk-js-v3/commit/1335bfb3c237b11773fe71daa4f826493af8c7b3))
* **types:** make logger.trace an optional function ([#4110](https://github.com/aws/aws-sdk-js-v3/issues/4110)) ([7d95b34](https://github.com/aws/aws-sdk-js-v3/commit/7d95b34dd2d1f3e480db0000cabd97f2299cda24))
* update eventStreamPayloadHandler to also get prior signature from query string ([#4100](https://github.com/aws/aws-sdk-js-v3/issues/4100)) ([d6d9e10](https://github.com/aws/aws-sdk-js-v3/commit/d6d9e10006550bb85b89ecbfdd07a930712a4d89))


### Features

* **client-ec2:** Feature supports the replacement of instance root volume using an updated AMI without requiring customers to stop their instance. ([c980e67](https://github.com/aws/aws-sdk-js-v3/commit/c980e67bfad3191dab93e0cf1aa9eaec6addf08b))
* **client-fms:** Add support NetworkFirewall Managed Rule Group Override flag in GetViolationDetails API ([7586f6e](https://github.com/aws/aws-sdk-js-v3/commit/7586f6edf647cc4f9fc9978a0211b06970538092))
* **client-glue:** Added support for custom datatypes when using custom csv classifier. ([3711a1f](https://github.com/aws/aws-sdk-js-v3/commit/3711a1f878e86f8ecfffa374b79cea428f41497f))
* **client-sagemaker:** This change allows customers to provide a custom entrypoint script for the docker container to be run while executing training jobs, and provide custom arguments to the entrypoint script. ([4978352](https://github.com/aws/aws-sdk-js-v3/commit/49783528794a2aac328033d0aea2464e6dba6fc8))
* **client-wafv2:** This release adds the following: Challenge rule action, to silently verify client browsers; rule group rule action override to any valid rule action, not just Count; token sharing between protected applications for challenge/CAPTCHA token; targeted rules option for Bot Control managed rule group. ([2d06b27](https://github.com/aws/aws-sdk-js-v3/commit/2d06b276f25b9f0b4f2346b3cb8bd8fa25e42e2a))
* **clients:** update client endpoints as of 2022-10-27 ([6eafddf](https://github.com/aws/aws-sdk-js-v3/commit/6eafddf27b73c4f80a18320f0af2aafc4386413f))
* **endpoint:** log endpoint decisions at debug level ([#4106](https://github.com/aws/aws-sdk-js-v3/issues/4106)) ([d600213](https://github.com/aws/aws-sdk-js-v3/commit/d600213292eb1bea870c43420367f78406db1c82))





# [3.197.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.196.0...v3.197.0) (2022-10-26)


### Bug Fixes

* **endpoint:** normalize endpoint to string when passing from client config to endpointParams ([#4098](https://github.com/aws/aws-sdk-js-v3/issues/4098)) ([5da4499](https://github.com/aws/aws-sdk-js-v3/commit/5da4499efcee056881087658c8198cc35965de53))
* **smithy-client:** fix default error typo ([#4092](https://github.com/aws/aws-sdk-js-v3/issues/4092)) ([e8158a6](https://github.com/aws/aws-sdk-js-v3/commit/e8158a6798317aa3905232ee3ff6570a95322ef1))
* **types:** expand custom endpoint type ([#4097](https://github.com/aws/aws-sdk-js-v3/issues/4097)) ([3620ce4](https://github.com/aws/aws-sdk-js-v3/commit/3620ce4162435b9688823162281140f40365b14c))


### Features

* **client-kafka:** This release adds support for Tiered Storage. UpdateStorage allows you to control the Storage Mode for supported storage tiers. ([0fd7c71](https://github.com/aws/aws-sdk-js-v3/commit/0fd7c7128d910cc6efeea874ad69b7b6748b216a))
* **client-neptune:** Added a new cluster-level attribute to set the capacity range for Neptune Serverless instances. ([5458d9b](https://github.com/aws/aws-sdk-js-v3/commit/5458d9bd751bb1c945ea9349ac9c3eceeb828129))
* **client-sagemaker:** Amazon SageMaker Automatic Model Tuning now supports specifying Grid Search strategy for tuning jobs, which evaluates all hyperparameter combinations exhaustively based on the categorical hyperparameters provided. ([a00fdf9](https://github.com/aws/aws-sdk-js-v3/commit/a00fdf900a666bfed9f8b792865d23e3f6678996))
* **clients:** update client endpoints as of 2022-10-26 ([95631eb](https://github.com/aws/aws-sdk-js-v3/commit/95631eb7aa6f17b5051bedd31e7e4532ee9d2f8c))





# [3.196.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.195.0...v3.196.0) (2022-10-25)


### Features

* **client-accessanalyzer:** This release adds support for six new resource types in IAM Access Analyzer to help you easily identify public and cross-account access to your AWS resources. Updated service API, documentation, and paginators. ([b8f881b](https://github.com/aws/aws-sdk-js-v3/commit/b8f881b65b4724453cd838d859d6250803b82ade))
* **client-mediatailor:** This release is a documentation update ([228874a](https://github.com/aws/aws-sdk-js-v3/commit/228874af959abd140256c5f11584b76bc6c24e7c))
* **client-rds:** Relational Database Service - This release adds support for exporting DB cluster data to Amazon S3. ([6e030b7](https://github.com/aws/aws-sdk-js-v3/commit/6e030b726d772610c48397302808d5d457385451))
* **client-workspaces:** This release adds new enums for supporting Workspaces Core features, including creating Manual running mode workspaces, importing regular Workspaces Core images and importing g4dn Workspaces Core images. ([7d3dc18](https://github.com/aws/aws-sdk-js-v3/commit/7d3dc18083a054d39c7abcd7cd4fe1c5d5e0e45b))
* **clients:** update client endpoints as of 2022-10-25 ([5212ad1](https://github.com/aws/aws-sdk-js-v3/commit/5212ad10c1332db140ba614825236875482e8083))
* **endpoint:** add remaining restJson1 services endpoint models ([#4090](https://github.com/aws/aws-sdk-js-v3/issues/4090)) ([998113b](https://github.com/aws/aws-sdk-js-v3/commit/998113bd0a70a7de4bf5d975cb5f7524098866a0))





# [3.195.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.194.0...v3.195.0) (2022-10-24)


### Features

* **client-acm-pca:** AWS Private Certificate Authority (AWS Private CA) now offers usage modes which are combination of features to address specific use cases. ([d70854b](https://github.com/aws/aws-sdk-js-v3/commit/d70854bff81ffb2a493579ebceca518342204bc6))
* **client-batch:** This release adds support for AWS Batch on Amazon EKS. ([2b91525](https://github.com/aws/aws-sdk-js-v3/commit/2b91525666ff3378fc6d1d77752a17618c38b823))
* **client-datasync:** Added support for self-signed certificates when using object storage locations; added BytesCompressed to the TaskExecution response. ([dfc62aa](https://github.com/aws/aws-sdk-js-v3/commit/dfc62aa9cdeb69e156afcd750feb64da66b18e04))
* **client-sagemaker:** SageMaker Inference Recommender now supports a new API ListInferenceRecommendationJobSteps to return the details of all the benchmark we create for an inference recommendation job. ([e174937](https://github.com/aws/aws-sdk-js-v3/commit/e17493782387fd23f413414de3fb2a632dd74795))
* **clients:** update client endpoints as of 2022-10-24 ([cd9c9c2](https://github.com/aws/aws-sdk-js-v3/commit/cd9c9c215b5b5ee79d3c9c38e94fc2bee342c297))
* **endpoint:** endpoints models for awsJson1.0 ([#4078](https://github.com/aws/aws-sdk-js-v3/issues/4078)) ([eb9ec5e](https://github.com/aws/aws-sdk-js-v3/commit/eb9ec5ec8928744d3ba484b507393cd86e3b2414))
* **endpoint:** endpoints models for awsJson1.1 ([#4079](https://github.com/aws/aws-sdk-js-v3/issues/4079)) ([246d653](https://github.com/aws/aws-sdk-js-v3/commit/246d6534c53dcf9bd2eb6a620cb5b6c04b27451a))





# [3.194.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.193.0...v3.194.0) (2022-10-21)


### Bug Fixes

* **util-endpoints:** use default import for partitions.json ([#4072](https://github.com/aws/aws-sdk-js-v3/issues/4072)) ([f9bc7af](https://github.com/aws/aws-sdk-js-v3/commit/f9bc7afd7af7535c0de8123d0820faa8ebec7e16))


### Features

* **client-cognito-identity-provider:** This release adds a new "DeletionProtection" field to the UserPool in Cognito. Application admins can configure this value with either ACTIVE or INACTIVE value. Setting this field to ACTIVE will prevent a user pool from accidental deletion. ([58004ad](https://github.com/aws/aws-sdk-js-v3/commit/58004ada2ea68ed5085d29e73f1da7fee2f08723))
* **client-s3:** S3 on Outposts launches support for automatic bucket-style alias. You can use the automatic access point alias instead of an access point ARN for any object-level operation in an Outposts bucket. ([1437c0f](https://github.com/aws/aws-sdk-js-v3/commit/1437c0f4fcace57b3a027c54f9fb12bbcee04195))
* **client-sagemaker:** CreateInferenceRecommenderjob API now supports passing endpoint details directly, that will help customers to identify the max invocation and max latency they can achieve for their model and the associated endpoint along with getting recommendations on other instances. ([d7d3486](https://github.com/aws/aws-sdk-js-v3/commit/d7d3486d1f1bbb7d2210c22c41c4719c742f3ef8))
* **endpoint:** add restXml endpoints 2.0 models ([#4069](https://github.com/aws/aws-sdk-js-v3/issues/4069)) ([4da5ff3](https://github.com/aws/aws-sdk-js-v3/commit/4da5ff38e5bf2b0b371f29cdbec6ee65a8fb5909))
* **endpoint:** add wire protocol filtering option to copy models script ([#4068](https://github.com/aws/aws-sdk-js-v3/issues/4068)) ([1acd79a](https://github.com/aws/aws-sdk-js-v3/commit/1acd79a5db52d8b5e7fc96a1848110ba7aa8e6e6))
* **endpoint:** endpoint models for awsquery protocol ([#4070](https://github.com/aws/aws-sdk-js-v3/issues/4070)) ([41bb10d](https://github.com/aws/aws-sdk-js-v3/commit/41bb10dc09390b4fe0a6578feb6584c15b8b8186))





# [3.193.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.192.0...v3.193.0) (2022-10-20)


### Bug Fixes

* **client-eventbridge:** remove middleware-sdk-eventbridge ([#4059](https://github.com/aws/aws-sdk-js-v3/issues/4059)) ([7b1f599](https://github.com/aws/aws-sdk-js-v3/commit/7b1f599991c193c3a7d3a514c1bdb5042a88e302))
* **clients:** add @aws-sdk/util-endpoints dependency ([#4058](https://github.com/aws/aws-sdk-js-v3/issues/4058)) ([e8d7c68](https://github.com/aws/aws-sdk-js-v3/commit/e8d7c68b427897188cdc8de20d502cb0b26fbe9a))
* **endpoint:** join authScheme signingRegionSet values instead of taking first only ([#4056](https://github.com/aws/aws-sdk-js-v3/issues/4056)) ([751245a](https://github.com/aws/aws-sdk-js-v3/commit/751245afc26dbedcc477be3bc2f830e18d765e1d))
* **endpoint:** s3 control tests to unblock CI ([#4063](https://github.com/aws/aws-sdk-js-v3/issues/4063)) ([0090e1c](https://github.com/aws/aws-sdk-js-v3/commit/0090e1cd8806239d9ff842105939e8e022a98f2b))
* **endpoint:** test fixes for s3-control related to endpoints 2.0 ([#4065](https://github.com/aws/aws-sdk-js-v3/issues/4065)) ([25af672](https://github.com/aws/aws-sdk-js-v3/commit/25af672e313406dcc331e154c385fc325b93a4a2))


### Features

* **client-devops-guru:** This release adds information about the resources DevOps Guru is analyzing. ([991855c](https://github.com/aws/aws-sdk-js-v3/commit/991855cbf29a3ae873e3acffb740220c9bbdd506))
* **client-global-accelerator:** Global Accelerator now supports AddEndpoints and RemoveEndpoints operations for standard endpoint groups. ([d7d6077](https://github.com/aws/aws-sdk-js-v3/commit/d7d60777e4a7c3ba86b41db54a4a0b02e4946f9b))
* **client-resiliencehub:** In this release, we are introducing support for regional optimization for AWS Resilience Hub applications. It also includes a few documentation updates to improve clarity. ([81b5510](https://github.com/aws/aws-sdk-js-v3/commit/81b55109a02baf2f59052681a8cf67bf4fc8c8e2))
* **client-rum:** CloudWatch RUM now supports Extended CloudWatch Metrics with Additional Dimensions ([0932dce](https://github.com/aws/aws-sdk-js-v3/commit/0932dcee1a92904c3cf1647da34c3deeee3af62a))
* **clients:** update client endpoints as of 2022-10-20 ([688454b](https://github.com/aws/aws-sdk-js-v3/commit/688454b703fe7590d8b9630ceeb332efd56e52e3))





# [3.192.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.191.0...v3.192.0) (2022-10-19)


### Bug Fixes

* **endpoint:** dedupe clientContext/builtIn params, fix s3 unit test ([#4051](https://github.com/aws/aws-sdk-js-v3/issues/4051)) ([947c8bc](https://github.com/aws/aws-sdk-js-v3/commit/947c8bce2798ae5ddc022d34f62aeeb60b4e6fde))
* **endpoint:** use sigv4a signing region override ([#4054](https://github.com/aws/aws-sdk-js-v3/issues/4054)) ([a24892f](https://github.com/aws/aws-sdk-js-v3/commit/a24892f1ffc5a321b8f8d43a94e0df19bfa0e15a))


### Features

* **client-cloudtrail:** This release includes support for exporting CloudTrail Lake query results to an Amazon S3 bucket. ([6a91fad](https://github.com/aws/aws-sdk-js-v3/commit/6a91fad22b52a040b463344cacb7b77bbee17418))
* **client-config-service:** This release adds resourceType enums for AppConfig, AppSync, DataSync, EC2, EKS, Glue, GuardDuty, SageMaker, ServiceDiscovery, SES, Route53 types. ([4ceb486](https://github.com/aws/aws-sdk-js-v3/commit/4ceb4868bf61c201e48ad325c956d6e05ccb8d54))
* **client-connect:** This release adds API support for managing phone numbers that can be used across multiple AWS regions through telephony traffic distribution. ([74a0d2e](https://github.com/aws/aws-sdk-js-v3/commit/74a0d2e55ee32e641514fd55e0efa517bfade677))
* **client-eventbridge:** Updates internal logic for constructing API endpoints. We have added rule-based endpoints and internal model parameters. ([437f3e3](https://github.com/aws/aws-sdk-js-v3/commit/437f3e33f42dbe847ca397c3d0b0ef7cda6eddce))
* **client-managedblockchain:** Adding new Accessor APIs for Amazon Managed Blockchain ([db0e989](https://github.com/aws/aws-sdk-js-v3/commit/db0e98960c98283471b7690bd80df917c0539128))
* **client-s3-control:** Updates internal logic for constructing API endpoints. We have added rule-based endpoints and internal model parameters. ([3aad5b0](https://github.com/aws/aws-sdk-js-v3/commit/3aad5b064347f18803810f5009f0784875dc69d6))
* **client-s3:** Updates internal logic for constructing API endpoints. We have added rule-based endpoints and internal model parameters. ([6e4371e](https://github.com/aws/aws-sdk-js-v3/commit/6e4371eade7c2da3e3a930e1a14a52c88af8ad54))
* **client-support-app:** This release adds the RegisterSlackWorkspaceForOrganization API. You can use the API to register a Slack workspace for an AWS account that is part of an organization. ([40db0f5](https://github.com/aws/aws-sdk-js-v3/commit/40db0f59635a80e6399b1584046dd6ec65740665))
* **client-workspaces-web:** WorkSpaces Web now supports user access logging for recording session start, stop, and URL navigation. ([b84f8b8](https://github.com/aws/aws-sdk-js-v3/commit/b84f8b8928e02f3996eec93c6552e20006a08588))
* **clients:** update client endpoints as of 2022-10-19 ([ec747ca](https://github.com/aws/aws-sdk-js-v3/commit/ec747cabfe8231ff6382ab958ddbefa84a974280))





# [3.191.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.190.0...v3.191.0) (2022-10-18)


### Features

* **client-sagemaker:** This change allows customers to enable data capturing while running a batch transform job, and configure monitoring schedule to monitoring the captured data. ([0acd4a7](https://github.com/aws/aws-sdk-js-v3/commit/0acd4a73a5702dadee85a4693ee1021b816dab8a))
* **client-servicediscovery:** Updated the ListNamespaces API to support the NAME and HTTP_NAME filters, and the BEGINS_WITH filter condition. ([cee660c](https://github.com/aws/aws-sdk-js-v3/commit/cee660cc1b524d2b03269724ff4c07d0c9870b8e))
* **client-sesv2:** This release allows subscribers to enable Dedicated IPs (managed) to send email via a fully managed dedicated IP experience. It also adds identities' VerificationStatus in the response of GetEmailIdentity and ListEmailIdentities APIs, and ImportJobs counts in the response of ListImportJobs API. ([976549d](https://github.com/aws/aws-sdk-js-v3/commit/976549dbbf654a2978fbfd5896c6797b4824e229))
* **clients:** update client endpoints as of 2022-10-18 ([0591a36](https://github.com/aws/aws-sdk-js-v3/commit/0591a36242fdb1a2f2545f3fcb2423498bd83aaa))





# [3.190.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.189.0...v3.190.0) (2022-10-17)


### Bug Fixes

* **endpoint:** e2e test fixes for endpoints 2.0 all services ([#4044](https://github.com/aws/aws-sdk-js-v3/issues/4044)) ([b53f5bd](https://github.com/aws/aws-sdk-js-v3/commit/b53f5bdd2bb4f0d1bab208ef2cd8f67d56291934))
* **endpoint:** endpoints 2.0 all-service TS compilation fixes ([#4043](https://github.com/aws/aws-sdk-js-v3/issues/4043)) ([f2da618](https://github.com/aws/aws-sdk-js-v3/commit/f2da6182298d4d6b02e84fb723492c07c27469a8))


### Features

* **client-greengrass:** This change allows customers to specify FunctionRuntimeOverride in FunctionDefinitionVersion. This configuration can be used if the runtime on the device is different from the AWS Lambda runtime specified for that function. ([b2be11f](https://github.com/aws/aws-sdk-js-v3/commit/b2be11f328f5ff02e63b18b2006ff81d67092944))
* **client-sagemaker:** This release adds support for C7g, C6g, C6gd, C6gn, M6g, M6gd, R6g, and R6gn Graviton instance types in Amazon SageMaker Inference. ([92e9095](https://github.com/aws/aws-sdk-js-v3/commit/92e9095961d0f33e9595bc0521332149267575f0))





# [3.189.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.188.0...v3.189.0) (2022-10-14)


### Features

* **client-mediaconvert:** MediaConvert now supports specifying the minimum percentage of the HRD buffer available at the end of each encoded video segment. ([4564705](https://github.com/aws/aws-sdk-js-v3/commit/4564705d7365cba6e3be2d7d828f9d50382da2a6))
* **clients:** update client endpoints as of 2022-10-14 ([3bad6ba](https://github.com/aws/aws-sdk-js-v3/commit/3bad6ba854273cafeb687bab240e4f220c79a60b))





# [3.188.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.187.0...v3.188.0) (2022-10-13)


### Bug Fixes

* **endpoint:** misc endpoints 2.0 fixes for s3 ([#4031](https://github.com/aws/aws-sdk-js-v3/issues/4031)) ([f8926a5](https://github.com/aws/aws-sdk-js-v3/commit/f8926a56cf9a25c2e6a5c91089543094e32d5c4b))


### Features

* **client-amplifyuibuilder:** We are releasing the ability for fields to be configured as arrays. ([af77058](https://github.com/aws/aws-sdk-js-v3/commit/af77058a27b7f6d5853ddbb23b854bfe18a166be))
* **client-appflow:** With this update, you can choose which Salesforce API is used by Amazon AppFlow to transfer data to or from your Salesforce account. You can choose the Salesforce REST API or Bulk API 2.0. You can also choose for Amazon AppFlow to pick the API automatically. ([fa7223a](https://github.com/aws/aws-sdk-js-v3/commit/fa7223ae5add3e09649613083fb1afaaf9f5c2bf))
* **client-connect:** This release adds support for a secondary email and a mobile number for Amazon Connect instance users. ([8c9f644](https://github.com/aws/aws-sdk-js-v3/commit/8c9f6446ab2abc76a919631009f73c0ee589c7b2))
* **client-directory-service:** This release adds support for describing and updating AWS Managed Microsoft AD set up. ([a6042dd](https://github.com/aws/aws-sdk-js-v3/commit/a6042dd03d940ccc8a5a3cd8f78293ec7bbd3208))
* **client-guardduty:** Add UnprocessedDataSources to CreateDetectorResponse which specifies the data sources that couldn't be enabled during the CreateDetector request. In addition, update documentations. ([f64188c](https://github.com/aws/aws-sdk-js-v3/commit/f64188c0990155930c2060582252cb16df6b4228))
* **client-medialive:** AWS Elemental MediaLive now supports forwarding SCTE-35 messages through the Event Signaling and Management (ESAM) API, and can read those SCTE-35 messages from an inactive source. ([3e59a7a](https://github.com/aws/aws-sdk-js-v3/commit/3e59a7ac4d2d0901637af72c5312549f2309b9a7))
* **client-mediapackage-vod:** This release adds SPEKE v2 support for MediaPackage VOD. Speke v2 is an upgrade to the existing SPEKE API to support multiple encryption keys, based on an encryption contract selected by the customer. ([f53ca0e](https://github.com/aws/aws-sdk-js-v3/commit/f53ca0e02b6ce5f6531528968097ee3d58fae493))
* **client-panorama:** Pause and resume camera stream processing with SignalApplicationInstanceNodeInstances. Reboot an appliance with CreateJobForDevices. More application state information in DescribeApplicationInstance response. ([8e266f0](https://github.com/aws/aws-sdk-js-v3/commit/8e266f0cb38bb2acf44987f5fca8a782cabadfdb))
* **client-ssm-incidents:** Update RelatedItem enum to support Tasks ([d89bc49](https://github.com/aws/aws-sdk-js-v3/commit/d89bc49feff3cf7283d81715572487ef4ce5d1c6))
* **client-ssm:** Support of AmazonLinux2022 by Patch Manager ([5f08c96](https://github.com/aws/aws-sdk-js-v3/commit/5f08c9697fd82962ceee4c1f2615e9741e25085d))
* **client-transfer:** This release adds an option for customers to configure workflows that are triggered when files are only partially received from a client due to premature session disconnect. ([d0d60da](https://github.com/aws/aws-sdk-js-v3/commit/d0d60dab0be54c0f466858f49deb4a4c8dd50fd9))
* **client-wisdom:** This release updates the GetRecommendations API to include a trigger event list for classifying and grouping recommendations. ([8ea9f3c](https://github.com/aws/aws-sdk-js-v3/commit/8ea9f3c72a95206d50f657c4bd2e64c715ce72db))
* **clients:** support util functions to consume response streams ([#3977](https://github.com/aws/aws-sdk-js-v3/issues/3977)) ([ad99b66](https://github.com/aws/aws-sdk-js-v3/commit/ad99b66944b6fe1ce83082c1a33193dff033cfaf))
* **clients:** update client endpoints as of 2022-10-13 ([914798b](https://github.com/aws/aws-sdk-js-v3/commit/914798ba376b17631d02dc04a81faae63e1dce05))





# [3.187.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.186.0...v3.187.0) (2022-10-07)


### Features

* **client-greengrassv2:** This release adds error status details for deployments and components that failed on a device and adds features to improve visibility into component installation. ([0faff07](https://github.com/aws/aws-sdk-js-v3/commit/0faff0779623527f7697d2dd06d2adb568d68fae))
* **client-quicksight:** Amazon QuickSight now supports SecretsManager Secret ARN in place of CredentialPair for DataSource creation and update. This release also has some minor documentation updates and removes CountryCode as a required parameter in GeoSpatialColumnGroup ([d5ad4e8](https://github.com/aws/aws-sdk-js-v3/commit/d5ad4e8bf194109f4e06ef91479111cf9e8f7788))
* **clients:** update client endpoints as of 2022-10-07 ([8e5b8ec](https://github.com/aws/aws-sdk-js-v3/commit/8e5b8ec16c8e07c8c1e2d1987c6a00c53805bcc3))





# [3.186.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.185.0...v3.186.0) (2022-10-06)


### Features

* **clients:** update client endpoints as of 2022-10-06 ([ef071d5](https://github.com/aws/aws-sdk-js-v3/commit/ef071d5e47566def814205ab35907391a2918266))





# [3.185.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.184.0...v3.185.0) (2022-10-05)


### Bug Fixes

* **codegen:** add deser check for x-amz-request-id ([#4015](https://github.com/aws/aws-sdk-js-v3/issues/4015)) ([6ff07bd](https://github.com/aws/aws-sdk-js-v3/commit/6ff07bd7e72bd56725f318013ac1d6d0fbbcdd9a))
* **node-http-handler:** check for error code in isTransientError ([#4018](https://github.com/aws/aws-sdk-js-v3/issues/4018)) ([ab0e7be](https://github.com/aws/aws-sdk-js-v3/commit/ab0e7be36e7e7f8a0c04834357aaad643c7912c3))
* **s3-control:** default config.signingEscapePath to false ([#4013](https://github.com/aws/aws-sdk-js-v3/issues/4013)) ([0d599da](https://github.com/aws/aws-sdk-js-v3/commit/0d599da0d16cec5f5649c20c9795464ecc87ebd4))


### Features

* **client-glue:** This SDK release adds support to sync glue jobs with source control provider. Additionally, a new parameter called SourceControlDetails will be added to Job model. ([4b78fcd](https://github.com/aws/aws-sdk-js-v3/commit/4b78fcd5c5334a1df43edff4b115017bb8ee1dee))
* **client-network-firewall:** StreamExceptionPolicy configures how AWS Network Firewall processes traffic when a network connection breaks midstream ([caa6cba](https://github.com/aws/aws-sdk-js-v3/commit/caa6cbace1e049926106c6aeddfcf631d3d5b2ef))
* **client-outposts:** This release adds the Asset state information to the ListAssets response. The ListAssets request supports filtering on Asset state. ([435b5de](https://github.com/aws/aws-sdk-js-v3/commit/435b5de0628cf1d0cd2a743dc3f869a31dc68584))





# [3.184.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.183.0...v3.184.0) (2022-10-04)


### Features

* **client-connectcases:** This release adds APIs for Amazon Connect Cases. Cases allows your agents to quickly track and manage customer issues that require multiple interactions, follow-up tasks, and teams in your contact center.  For more information, see https://docs.aws.amazon.com/cases/latest/APIReference/Welcome.html ([424c2a5](https://github.com/aws/aws-sdk-js-v3/commit/424c2a55a090ea5678930aceb97b7931d8f4acd8))
* **client-connect:** Updated the CreateIntegrationAssociation API to support the CASES_DOMAIN IntegrationType. ([b544ac0](https://github.com/aws/aws-sdk-js-v3/commit/b544ac065c6aed6d6bb45645cba14a9193a1dd01))
* **client-ec2:** Added EnableNetworkAddressUsageMetrics flag for ModifyVpcAttribute, DescribeVpcAttribute APIs. ([cbd2640](https://github.com/aws/aws-sdk-js-v3/commit/cbd2640efb3ace31a5abb75d603599324c413f57))
* **client-s3-control:** S3 Object Lambda adds support to allow customers to intercept HeadObject and ListObjects requests and introduce their own compute. These requests were previously proxied to S3. ([9915896](https://github.com/aws/aws-sdk-js-v3/commit/9915896feb5537e59f42a18f08eb65629dc5269b))
* **client-workmail:** This release adds support for impersonation roles in Amazon WorkMail. ([f919ccd](https://github.com/aws/aws-sdk-js-v3/commit/f919ccdd3fc6b6bd0cdcebb351fc6d71ee1ee50f))
* **clients:** update client endpoints as of 2022-10-04 ([7180ca6](https://github.com/aws/aws-sdk-js-v3/commit/7180ca677a78e0bde1816549d940aad10d3795f9))





# [3.183.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.182.0...v3.183.0) (2022-10-03)


### Bug Fixes

* **endpoint-discovery:** delete failed cache entry in blocking operations ([#4011](https://github.com/aws/aws-sdk-js-v3/issues/4011)) ([c96ac94](https://github.com/aws/aws-sdk-js-v3/commit/c96ac9418a22687b867077e7d72b5d353d37778c))


### Features

* **client-accessanalyzer:** AWS IAM Access Analyzer policy validation introduces new checks for role trust policies. As customers author a policy, IAM Access Analyzer policy validation evaluates the policy for any issues to make it easier for customers to author secure policies. ([b7db053](https://github.com/aws/aws-sdk-js-v3/commit/b7db05377b506e9692582e3b64a2376133b23d11))
* **client-ec2:** Adding an imdsSupport attribute to EC2 AMIs ([7304adf](https://github.com/aws/aws-sdk-js-v3/commit/7304adf7306997875f660cb0f2beab7efd3a9fbd))
* **client-snowball:** Adds support for V3_5C. This is a refreshed AWS Snowball Edge Compute Optimized device type with 28TB SSD, 104 vCPU and 416GB memory (customer usable). ([22500bf](https://github.com/aws/aws-sdk-js-v3/commit/22500bf32b6db1e29a61c61c9b3a25a16c6251f4))
* **clients:** update client endpoints as of 2022-10-03 ([a285143](https://github.com/aws/aws-sdk-js-v3/commit/a28514385b25c9a4617e40c10dc36de0cc1e25d8))
* **codegen:** add query compatible header error code handling for JSON protocols ([#3972](https://github.com/aws/aws-sdk-js-v3/issues/3972)) ([8fe1b54](https://github.com/aws/aws-sdk-js-v3/commit/8fe1b54c191dbd0a3915ee64e8f03ed0f2f9ec01))





# [3.182.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.181.0...v3.182.0) (2022-09-30)


### Bug Fixes

* **endpoint:** misc fixes for endpoints 2.0 based on service unit tests ([#4002](https://github.com/aws/aws-sdk-js-v3/issues/4002)) ([77788f9](https://github.com/aws/aws-sdk-js-v3/commit/77788f9a9c7274d0cdec7832b6ed72325c9262e6))


### Features

* **client-codedeploy:** This release allows you to override the alarm configurations when creating a deployment. ([593dbc2](https://github.com/aws/aws-sdk-js-v3/commit/593dbc27b0e0e91958ab73211ce7d1eceb51016c))
* **client-devops-guru:** This release adds filter feature on AddNotificationChannel API, enable customer to configure the SNS notification messages by Severity or MessageTypes ([84ff65b](https://github.com/aws/aws-sdk-js-v3/commit/84ff65b728362d72cabddf01bd41acb92743b502))
* **client-dlm:** This release adds support for archival of single-volume snapshots created by Amazon Data Lifecycle Manager policies ([a88a887](https://github.com/aws/aws-sdk-js-v3/commit/a88a88710933a67d956f02e85d6cf11296143410))
* **client-sagemaker-runtime:** A new parameter called EnableExplanations is added to InvokeEndpoint API to enable on-demand SageMaker Clarify online explainability requests. ([4ad08ad](https://github.com/aws/aws-sdk-js-v3/commit/4ad08ad25c4b9a9b1ee786bd66719e80770b90b8))
* **client-sagemaker:** A new parameter called ExplainerConfig is added to CreateEndpointConfig API to enable SageMaker Clarify online explainability feature. ([ac3017f](https://github.com/aws/aws-sdk-js-v3/commit/ac3017f5b5764d6e090c8aface70c0c81142b148))
* **clients:** update client endpoints as of 2022-09-30 ([c3085e8](https://github.com/aws/aws-sdk-js-v3/commit/c3085e8c39b693f38a15bbb4fa96de41ecf1f12d))





# [3.181.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.180.0...v3.181.0) (2022-09-29)


### Bug Fixes

* **clients:** make parseErrorBody async ([#3999](https://github.com/aws/aws-sdk-js-v3/issues/3999)) ([2558c93](https://github.com/aws/aws-sdk-js-v3/commit/2558c93c050357ac6dc47aa0452b15b12ebfd676))
* **clients:** populate message field when parsing errors ([#3995](https://github.com/aws/aws-sdk-js-v3/issues/3995)) ([02e47f1](https://github.com/aws/aws-sdk-js-v3/commit/02e47f14397ae0a5d2e2883350d038b307fdcdb4))
* **clients:** update message in Error key in case of XML protocol ([#4000](https://github.com/aws/aws-sdk-js-v3/issues/4000)) ([057f686](https://github.com/aws/aws-sdk-js-v3/commit/057f686f217caa4e277bbe6e2905decf97b0fad1))


### Features

* **client-acm:** This update returns additional certificate details such as certificate SANs and allows sorting in the ListCertificates API. ([0afc7d5](https://github.com/aws/aws-sdk-js-v3/commit/0afc7d5b2b171d75c36712c60e87becb4dc82209))
* **client-ec2:** u-3tb1 instances are powered by Intel Xeon Platinum 8176M (Skylake) processors and are purpose-built to run large in-memory databases. ([66a6a45](https://github.com/aws/aws-sdk-js-v3/commit/66a6a455dd580ebadbcdb1bb5dbc07b753aca2ff))
* **client-emr-serverless:** This release adds API support to debug Amazon EMR Serverless jobs in real-time with live application UIs ([9a3cc54](https://github.com/aws/aws-sdk-js-v3/commit/9a3cc549937b367ea4495a993f51c50db993ed59))
* **client-fsx:** This release adds support for Amazon File Cache. ([0c9782d](https://github.com/aws/aws-sdk-js-v3/commit/0c9782d1d653291f6dcb2ea8e1a1aa630c594c73))
* **client-migrationhuborchestrator:** Introducing AWS MigrationHubOrchestrator. This is the first public release of AWS MigrationHubOrchestrator. ([0c9f5df](https://github.com/aws/aws-sdk-js-v3/commit/0c9f5dff3c920d6ce7b3892186cfa627882afd4d))
* **client-polly:** Added support for the new Cantonese voice - Hiujin. Hiujin is available as a Neural voice only. ([9f1d83e](https://github.com/aws/aws-sdk-js-v3/commit/9f1d83e368d0180ca3e02b19fe786982e0d5a6e0))
* **client-proton:** This release adds an option to delete pipeline provisioning repositories using the UpdateAccountSettings API ([bedb9af](https://github.com/aws/aws-sdk-js-v3/commit/bedb9afd214f8a7631b003c15729469994c3cad5))
* **client-sagemaker:** SageMaker Training Managed Warm Pools let you retain provisioned infrastructure to reduce latency for repetitive training workloads. ([85fc637](https://github.com/aws/aws-sdk-js-v3/commit/85fc637e30667ba6fbe6963cbcb677b8e835d752))
* **client-translate:** This release enables customers to access control rights on Translate resources like Parallel Data and Custom Terminology using Tag Based Authorization. ([2426699](https://github.com/aws/aws-sdk-js-v3/commit/24266996622e1325ec3e6a57bb75dfd6434f1964))
* **client-workspaces:** This release includes diagnostic log uploading feature. If it is enabled, the log files of WorkSpaces Windows client will be sent to Amazon WorkSpaces automatically for troubleshooting. You can use modifyClientProperty api to enable/disable this feature. ([252939d](https://github.com/aws/aws-sdk-js-v3/commit/252939df51af81b2e00e65a637e2eb51109b847c))
* **clients:** support awsQueryError trait ([#3998](https://github.com/aws/aws-sdk-js-v3/issues/3998)) ([384cbd7](https://github.com/aws/aws-sdk-js-v3/commit/384cbd7cbdbc0635d2dbff53b54d769ca80dabbb))
* **clients:** update client endpoints as of 2022-09-29 ([86f34f3](https://github.com/aws/aws-sdk-js-v3/commit/86f34f3bab5a7af9de134dd3c832feac90d45caf))





# [3.180.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.179.0...v3.180.0) (2022-09-27)


### Bug Fixes

* **smithy-client:** exception option missing message property ([#3424](https://github.com/aws/aws-sdk-js-v3/issues/3424)) ([6fc39be](https://github.com/aws/aws-sdk-js-v3/commit/6fc39be4c79ee9d353c2af54252df936776c2bf3))


### Features

* **client-cost-explorer:** This release is to support retroactive Cost Categories. The new field will enable you to retroactively apply new and existing cost category rules to previous months. ([a4bfd1f](https://github.com/aws/aws-sdk-js-v3/commit/a4bfd1f64567a535c9327ef7012daf301469e4e0))
* **client-kendra:** My AWS Service (placeholder) - Amazon Kendra now provides a data source connector for DropBox. For more information, see https://docs.aws.amazon.com/kendra/latest/dg/data-source-dropbox.html ([192b01b](https://github.com/aws/aws-sdk-js-v3/commit/192b01b885da6cc963f9dfe7d3746e29012a14e3))
* **client-location:** This release adds place IDs, which are unique identifiers of places, along with a new GetPlace operation, which can be used with place IDs to find a place again later. UnitNumber and UnitType are also added as new properties of places. ([df2b1a5](https://github.com/aws/aws-sdk-js-v3/commit/df2b1a586de3456b3a092b863ddca010bb755605))
* **clients:** update client endpoints as of 2022-09-27 ([28c0b1d](https://github.com/aws/aws-sdk-js-v3/commit/28c0b1d199de1381700c786e3d02a47d1e5bfde2))
* **upload-abort-controller:** add optional abortController param for Upload ([#3873](https://github.com/aws/aws-sdk-js-v3/issues/3873)) ([90c6b11](https://github.com/aws/aws-sdk-js-v3/commit/90c6b118ea176ca5ed0d5c32c383da4d6848d9f8))
* **util-waiter:** include reason on waiter result ([#3534](https://github.com/aws/aws-sdk-js-v3/issues/3534)) ([7f19c17](https://github.com/aws/aws-sdk-js-v3/commit/7f19c174b52ed7cc92c70374a5ff4c67f7d953c5))





# [3.179.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.178.0...v3.179.0) (2022-09-26)


### Bug Fixes

* **endpoint:** add package dependencies for middleware-endpoint ([#3988](https://github.com/aws/aws-sdk-js-v3/issues/3988)) ([4877469](https://github.com/aws/aws-sdk-js-v3/commit/4877469dea3ad91c2cbd7e7697bd8ba9b430a2b1))
* **middleware-signing:** add missing dependency ([#3987](https://github.com/aws/aws-sdk-js-v3/issues/3987)) ([7e7ae42](https://github.com/aws/aws-sdk-js-v3/commit/7e7ae42ccd4c9978a23236a66e497ef618e2be1a))


### Features

* **client-cost-and-usage-report-service:** This release adds two new support regions(me-central-1/eu-south-2) for OSG. ([48d1751](https://github.com/aws/aws-sdk-js-v3/commit/48d1751acce27a850ba595632c4249cf554362d5))
* **client-iotfleetwise:** General availability (GA) for AWS IoT Fleetwise. It adds AWS IoT Fleetwise to AWS SDK. For more information, see https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/Welcome.html. ([b1aac0b](https://github.com/aws/aws-sdk-js-v3/commit/b1aac0b31de5c9242f07853b542ffe16effd8e37))
* **client-ssm:** This release includes support for applying a CloudWatch alarm to Systems Manager capabilities like Automation, Run Command, State Manager, and Maintenance Windows. ([0a4f5fd](https://github.com/aws/aws-sdk-js-v3/commit/0a4f5fdfb5f8ad1e96a3fddafa35824faa1522b3))
* **clients:** update client endpoints as of 2022-09-26 ([d96d3ab](https://github.com/aws/aws-sdk-js-v3/commit/d96d3abb8ed598760cf0929063f54b028e009691))





# [3.178.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.177.0...v3.178.0) (2022-09-23)


### Features

* **client-apprunner:** AWS App Runner adds a Node.js 16 runtime. ([b34b261](https://github.com/aws/aws-sdk-js-v3/commit/b34b26168d427ea7f45e4b694c3c4bca9328136f))
* **client-ec2:** Letting external AWS customers provide ImageId as a Launch Template override in FleetLaunchTemplateOverridesRequest ([8c58db8](https://github.com/aws/aws-sdk-js-v3/commit/8c58db801d6687226d6462c491f42af303f554bb))
* **client-lex-models-v2:** This release introduces additional optional parameters promptAttemptsSpecification to PromptSpecification, which enables the users to configure interrupt setting and Audio, DTMF and Text input configuration for the initial and retry prompt played by the Bot ([b798090](https://github.com/aws/aws-sdk-js-v3/commit/b7980906fb816fa0d0c1035cc1946bfab50a2c82))
* **client-lightsail:** This release adds Instance Metadata Service (IMDS) support for Lightsail instances. ([890a980](https://github.com/aws/aws-sdk-js-v3/commit/890a980fdcd852c345482993e52ccf5f59607fa3))
* **client-nimble:** Amazon Nimble Studio adds support for on-demand Amazon Elastic Compute Cloud (EC2) G3 and G5 instances, allowing customers to utilize additional GPU instance types for their creative projects. ([8f5334a](https://github.com/aws/aws-sdk-js-v3/commit/8f5334a5ffa75b5d228d175c810944ba9ba90f4e))
* **client-ssm:** This release adds new SSM document types ConformancePackTemplate and CloudFormation ([75acad4](https://github.com/aws/aws-sdk-js-v3/commit/75acad4e69df0519deda2fe33e01cc01b9abae3e))
* **clients:** update client endpoints as of 2022-09-23 ([126c20e](https://github.com/aws/aws-sdk-js-v3/commit/126c20e3e54097202e72072bcd03824e2c111f1a))
* **endpoint:** endpoints 2.0 existing package changes ([#3947](https://github.com/aws/aws-sdk-js-v3/issues/3947)) ([df99fc3](https://github.com/aws/aws-sdk-js-v3/commit/df99fc33a43982e1c59000721a535f6fe77a3c23))





# [3.177.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.176.0...v3.177.0) (2022-09-22)


### Features

* **client-backup-gateway:** Changes include: new GetVirtualMachineApi to fetch a single user's VM, improving ListVirtualMachines to fetch filtered VMs as well as all VMs, and improving GetGatewayApi to now also return the gateway's MaintenanceStartTime. ([45d84e0](https://github.com/aws/aws-sdk-js-v3/commit/45d84e06bac5fd5d39506c607095772b1dd2135e))
* **client-device-farm:** This release adds the support for VPC-ENI based connectivity for private devices on AWS Device Farm. ([d48cc66](https://github.com/aws/aws-sdk-js-v3/commit/d48cc66228f661f5ce89dbe71d7747fdd3835104))
* **client-ec2:** Documentation updates for Amazon EC2. ([36ac02c](https://github.com/aws/aws-sdk-js-v3/commit/36ac02ce71f727af23452bc3e024707d1840f6b4))
* **client-glue:** Added support for S3 Event Notifications for Catalog Target Crawlers. ([61a70d7](https://github.com/aws/aws-sdk-js-v3/commit/61a70d7965617d6b461f92a2acf1707dc0ea1813))
* **clients:** update client endpoints as of 2022-09-22 ([4f39f83](https://github.com/aws/aws-sdk-js-v3/commit/4f39f834477b219b9a220522defae5b4dcfbdd4d))





# [3.176.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.175.0...v3.176.0) (2022-09-21)


### Features

* **client-comprehend:** Amazon Comprehend now supports synchronous mode for targeted sentiment API operations. ([b2f16fd](https://github.com/aws/aws-sdk-js-v3/commit/b2f16fd29edc9a3fd73893b82d72147fc1dbac34))
* **client-s3-control:** S3 on Outposts launches support for object versioning for Outposts buckets. With S3 Versioning, you can preserve, retrieve, and restore every version of every object stored in your buckets. You can recover from both unintended user actions and application failures. ([20cd3c1](https://github.com/aws/aws-sdk-js-v3/commit/20cd3c183c533aa6d68eefa0cb0e8a3c5e0b8b32))
* **client-sagemaker:** SageMaker now allows customization on Canvas Application settings, including enabling/disabling time-series forecasting and specifying an Amazon Forecast execution role at both the Domain and UserProfile levels. ([e2afd65](https://github.com/aws/aws-sdk-js-v3/commit/e2afd655d7e760d7643dfa1ee3a2487cbba4ecec))
* **clients:** update client endpoints as of 2022-09-21 ([34ec10a](https://github.com/aws/aws-sdk-js-v3/commit/34ec10a839a6567b465c27f4412e5c5b57cf6e7b))





# [3.175.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.174.0...v3.175.0) (2022-09-20)


### Features

* **client-ec2:** This release adds support for blocked paths to Amazon VPC Reachability Analyzer. ([5412f69](https://github.com/aws/aws-sdk-js-v3/commit/5412f69bb3d6cc2897833d080dc15e8c1b7868a1))
* **clients:** update client endpoints as of 2022-09-20 ([2a4842f](https://github.com/aws/aws-sdk-js-v3/commit/2a4842f5d0d2887351b46cd343c46dc6946126c7))





# [3.174.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.173.0...v3.174.0) (2022-09-19)


### Features

* **client-cloudtrail:** This release includes support for importing existing trails into CloudTrail Lake. ([464cb91](https://github.com/aws/aws-sdk-js-v3/commit/464cb91ea65053f01eb9c49c3a45e962b1bb1764))
* **client-ec2:** This release adds CapacityAllocations field to DescribeCapacityReservations ([22b9a0e](https://github.com/aws/aws-sdk-js-v3/commit/22b9a0e6996809435dee2611b42e6ec654086ac0))
* **client-mediaconnect:** This change allows the customer to use the SRT Caller protocol as part of their flows ([6e0d3c0](https://github.com/aws/aws-sdk-js-v3/commit/6e0d3c05917c4aabb700e227bcd7797a18ef2e33))
* **client-rds:** This release adds support for Amazon RDS Proxy with SQL Server compatibility. ([a8bb844](https://github.com/aws/aws-sdk-js-v3/commit/a8bb844bb67136309b8764015d6ab38f98bf9fe4))
* **clients:** update client endpoints as of 2022-09-19 ([c7adf6b](https://github.com/aws/aws-sdk-js-v3/commit/c7adf6b0c4fc6f171ccb9bb019486c5b1712734c))
* **util-endpoints:** add aws.isVirtualHostableS3Bucket ([#3967](https://github.com/aws/aws-sdk-js-v3/issues/3967)) ([2fbe419](https://github.com/aws/aws-sdk-js-v3/commit/2fbe4199b971b0da966369c36a28521ba389a466))





# [3.173.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.172.0...v3.173.0) (2022-09-16)


### Bug Fixes

* **e2e:** delete cloudwatch alarms in After call ([#3956](https://github.com/aws/aws-sdk-js-v3/issues/3956)) ([b439cea](https://github.com/aws/aws-sdk-js-v3/commit/b439cea932aadff86b99d356434c5ae11c066262))
* **e2e:** delete DynamoDB table in AfterAll call ([#3960](https://github.com/aws/aws-sdk-js-v3/issues/3960)) ([b6c0c4a](https://github.com/aws/aws-sdk-js-v3/commit/b6c0c4aad6a4c0081cd4918765dd094b4f03d461))
* **e2e:** delete elasticache resources in After call ([#3957](https://github.com/aws/aws-sdk-js-v3/issues/3957)) ([8c3e174](https://github.com/aws/aws-sdk-js-v3/commit/8c3e174232aca4dee148554579d9159185881314))
* **e2e:** delete elasticbeanstalk app in After call ([#3958](https://github.com/aws/aws-sdk-js-v3/issues/3958)) ([8efcc12](https://github.com/aws/aws-sdk-js-v3/commit/8efcc125bf4915910bcf104794bfefe1bd4c6f51))
* **e2e:** delete s3 buckets in After Call ([#3962](https://github.com/aws/aws-sdk-js-v3/issues/3962)) ([5c92d80](https://github.com/aws/aws-sdk-js-v3/commit/5c92d808d82ea8bcace40d54dd63709a017b0a5c))
* **e2e:** delete sns topic in After call ([#3959](https://github.com/aws/aws-sdk-js-v3/issues/3959)) ([9195a8c](https://github.com/aws/aws-sdk-js-v3/commit/9195a8cac1795c2af33294d672c109aa9a3e2131))
* **s3-request-presigner:** add port to host name if missed ([#3897](https://github.com/aws/aws-sdk-js-v3/issues/3897)) ([37f574f](https://github.com/aws/aws-sdk-js-v3/commit/37f574fe33546720177866ed1c34333c68066c8e))


### Features

* **client-codestar-notifications:** This release adds tag based access control for the UntagResource API. ([5c923c2](https://github.com/aws/aws-sdk-js-v3/commit/5c923c2706dc6053287a8995a08092d2794d0276))





# [3.172.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.171.0...v3.172.0) (2022-09-15)


### Bug Fixes

* **e2e:** delete cloudwatch groups in After call ([#3951](https://github.com/aws/aws-sdk-js-v3/issues/3951)) ([8ed83f0](https://github.com/aws/aws-sdk-js-v3/commit/8ed83f0587ba8f66a945989223b97b3c3192c0dd))
* **e2e:** delete cognitoidentity resources in After call ([#3955](https://github.com/aws/aws-sdk-js-v3/issues/3955)) ([d8e6a9a](https://github.com/aws/aws-sdk-js-v3/commit/d8e6a9a0ae5dccbc51da57b7e24bb0b8cb4ac233))
* **e2e:** delete IAM+ resources in After call ([#3952](https://github.com/aws/aws-sdk-js-v3/issues/3952)) ([b30b9b2](https://github.com/aws/aws-sdk-js-v3/commit/b30b9b2154d13d9b2d0cffad75d2004d412f2cc9))
* **e2e:** move deletion of sqs queues to After call ([#3948](https://github.com/aws/aws-sdk-js-v3/issues/3948)) ([d07097b](https://github.com/aws/aws-sdk-js-v3/commit/d07097b102d17f3b77098a82184634f9290ad1c3))


### Features

* **client-dynamodb:** Increased DynamoDB transaction limit from 25 to 100. ([a2d8893](https://github.com/aws/aws-sdk-js-v3/commit/a2d88936c7a6fec219ed930e8209809db6bfef63))
* **client-ec2:** This feature allows customers to create tags for vpc-endpoint-connections and vpc-endpoint-service-permissions. ([7b3d77d](https://github.com/aws/aws-sdk-js-v3/commit/7b3d77d6af837ee5f263005a647c132de43a99b9))
* **client-sagemaker:** Amazon SageMaker Automatic Model Tuning now supports specifying Hyperband strategy for tuning jobs, which uses a multi-fidelity based tuning strategy to stop underperforming hyperparameter configurations early. ([155db1e](https://github.com/aws/aws-sdk-js-v3/commit/155db1e5a62828afa8faaf4215adfe417b81946b))
* **clients:** update client endpoints as of 2022-09-15 ([cae8d4c](https://github.com/aws/aws-sdk-js-v3/commit/cae8d4ce51817315227ec9699ed72d2bb0de5c11))





# [3.171.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.170.0...v3.171.0) (2022-09-14)


### Features

* **client-amplifyuibuilder:** Amplify Studio UIBuilder is introducing forms functionality. Forms can be configured from Data Store models, JSON, or from scratch. These forms can then be generated in your project and used like any other React components. ([d09d5fc](https://github.com/aws/aws-sdk-js-v3/commit/d09d5fc36b8f644dfab99c0952ecb773be768a48))
* **client-ec2:** This update introduces API operations to manage and create local gateway route tables, CoIP pools, and VIF group associations. ([272b997](https://github.com/aws/aws-sdk-js-v3/commit/272b99714de58fe75354127bfc69ae7585839b9e))
* **clients:** update client endpoints as of 2022-09-14 ([f883fc0](https://github.com/aws/aws-sdk-js-v3/commit/f883fc0df7617650304e394f4ca500c29bc61fa9))
* **endpoint:** endpoints v2 codegen ([#3942](https://github.com/aws/aws-sdk-js-v3/issues/3942)) ([4b32da4](https://github.com/aws/aws-sdk-js-v3/commit/4b32da42011194d4eefe32eb6f7035872fb163c2))
* **endpoint:** util-endpoints and middleware-endpoint for endpoints 2.0 ([#3932](https://github.com/aws/aws-sdk-js-v3/issues/3932)) ([e81b7d0](https://github.com/aws/aws-sdk-js-v3/commit/e81b7d0920a74843a2a34857f41b0d6d93abc465))





# [3.170.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.169.0...v3.170.0) (2022-09-13)


### Bug Fixes

* **scripts:** skip files with stripped comments containing incorrect JavaScript ([#3937](https://github.com/aws/aws-sdk-js-v3/issues/3937)) ([bbb09f3](https://github.com/aws/aws-sdk-js-v3/commit/bbb09f356b17db30eaac778dadf832b0cbed7675))
* **util-endpoints:** call multi-level functions from callFunction ([#3929](https://github.com/aws/aws-sdk-js-v3/issues/3929)) ([1209cb1](https://github.com/aws/aws-sdk-js-v3/commit/1209cb1613891496b3e03e6a61ff87fc721d1ccf))
* **util-endpoints:** escape tilde when evaluating template ([#3934](https://github.com/aws/aws-sdk-js-v3/issues/3934)) ([5d7ef10](https://github.com/aws/aws-sdk-js-v3/commit/5d7ef10160456b7b872a1e7818dde7d73b4fb714))
* **util-endpoints:** export parseArn from lib/aws ([#3931](https://github.com/aws/aws-sdk-js-v3/issues/3931)) ([1cee1f4](https://github.com/aws/aws-sdk-js-v3/commit/1cee1f4e41d1a660b4fbb7e06eecc22f2a9a82db))
* **util-endpoints:** populate default params before checking for required values ([#3928](https://github.com/aws/aws-sdk-js-v3/issues/3928)) ([2561f60](https://github.com/aws/aws-sdk-js-v3/commit/2561f609f76b006bb39794a6cecfb6c0d68f9ef1))
* **util-endpoints:** return null in parseArn for some empty elements ([#3935](https://github.com/aws/aws-sdk-js-v3/issues/3935)) ([f8bc8b3](https://github.com/aws/aws-sdk-js-v3/commit/f8bc8b3da798cb0c4c4d6fb21e8e88c9109e649b))
* **util-endpoints:** skip evaluation for arg of type number ([#3936](https://github.com/aws/aws-sdk-js-v3/issues/3936)) ([aecd894](https://github.com/aws/aws-sdk-js-v3/commit/aecd89441ec92fc2be8cb4a3914ca7559e136d7d))


### Features

* **client-customer-profiles:** Added isUnstructured in response for Customer Profiles Integration APIs ([a6fb5eb](https://github.com/aws/aws-sdk-js-v3/commit/a6fb5eba8e6f216c5ca9d4af310eb12f0db50864))
* **client-drs:** Fixed the data type of lagDuration that is returned in Describe Source Server API ([2a8f5f8](https://github.com/aws/aws-sdk-js-v3/commit/2a8f5f8cd30b1d42196bb2eae58793ce20bfb37f))
* **client-ec2:** Two new features for local gateway route tables: support for static routes targeting Elastic Network Interfaces and direct VPC routing. ([9346a11](https://github.com/aws/aws-sdk-js-v3/commit/9346a11303f2f657e408a95e926c262905d701ff))
* **client-evidently:** This release adds support for the client-side evaluation - powered by AWS AppConfig feature. ([a7d2b0e](https://github.com/aws/aws-sdk-js-v3/commit/a7d2b0e4e87ff6f319d3cf77cb0600c19a1e3531))
* **client-kendra:** This release enables our customer to choose the option of Sharepoint 2019 for the on-premise Sharepoint connector. ([a3f73d2](https://github.com/aws/aws-sdk-js-v3/commit/a3f73d24a66313b1f46994fd5873a45e32e256b8))
* **client-transfer:** This release introduces the ability to have multiple server host keys for any of your Transfer Family servers that use the SFTP protocol. ([e09e302](https://github.com/aws/aws-sdk-js-v3/commit/e09e3026b7c0776a6a7da6889116b6fb1507dbdc))
* **clients:** update client endpoints as of 2022-09-13 ([c90906b](https://github.com/aws/aws-sdk-js-v3/commit/c90906bf53e13852bf6889ac5db8cd3f129c7999))





# [3.169.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.168.0...v3.169.0) (2022-09-12)


### Bug Fixes

* **middleware-retry:** use delay from response header if it's higher ([#3916](https://github.com/aws/aws-sdk-js-v3/issues/3916)) ([9524fa1](https://github.com/aws/aws-sdk-js-v3/commit/9524fa1a515262b5692e326dd1db25966f146941))


### Features

* **client-eks:** Adding support for local Amazon EKS clusters on Outposts ([0ec0300](https://github.com/aws/aws-sdk-js-v3/commit/0ec030003c10c57f23d277bd166fcfd2fe13ce9d))





# [3.168.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.167.0...v3.168.0) (2022-09-09)


### Bug Fixes

* **e2e:** fix "eventually" helper in e2e tests ([#3917](https://github.com/aws/aws-sdk-js-v3/issues/3917)) ([fac9c18](https://github.com/aws/aws-sdk-js-v3/commit/fac9c188973095eeb319f585a71a622e7ec4c141))


### Features

* **client-cloudtrail:** This release adds CloudTrail getChannel and listChannels APIs to allow customer to view the ServiceLinkedChannel configurations. ([3c7cfa2](https://github.com/aws/aws-sdk-js-v3/commit/3c7cfa29dc762442c7142910a4cc3dc5f88f6bf4))
* **client-lex-models-v2:** This release is for supporting Composite Slot Type feature in AWS Lex V2. Composite Slot Type will help developer to logically group coherent slots and maintain their inter-relationships in runtime conversation. ([b45fc65](https://github.com/aws/aws-sdk-js-v3/commit/b45fc65f6298ed617cccc9b38dcc5caf3a890b17))
* **client-lex-runtime-v2:** This release is for supporting Composite Slot Type feature in AWS Lex V2. Composite Slot Type will help developer to logically group coherent slots and maintain their inter-relationships in runtime conversation. ([e01fa5e](https://github.com/aws/aws-sdk-js-v3/commit/e01fa5e3aacf7cdafc7c92ebdedc7dc2390abb7d))
* **client-pi:** Increases the maximum values of two RDS Performance Insights APIs. The maximum value of the Limit parameter of DimensionGroup is 25. The MaxResult maximum is now 25 for the following APIs: DescribeDimensionKeys, GetResourceMetrics, ListAvailableResourceDimensions, and ListAvailableResourceMetrics. ([2f5c346](https://github.com/aws/aws-sdk-js-v3/commit/2f5c346f8b42c20358d2cc0d2f1f867d7c4d8138))
* **clients:** update client endpoints as of 2022-09-09 ([a5dc90b](https://github.com/aws/aws-sdk-js-v3/commit/a5dc90bc5f09175f450f77ca4c6415c1edaec702))





# [3.167.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.166.0...v3.167.0) (2022-09-08)


### Features

* **client-ec2:** This release adds support to send VPC Flow Logs to kinesis-data-firehose as new destination type ([aa03c47](https://github.com/aws/aws-sdk-js-v3/commit/aa03c472758ead17d235499a496ea7613eb0f2ce))
* **client-emr-containers:** EMR on EKS now allows running Spark SQL using the newly introduced Spark SQL Job Driver in the Start Job Run API ([3d46a39](https://github.com/aws/aws-sdk-js-v3/commit/3d46a3908bfae300d310fd7c8bc413f5b2e2f97a))
* **client-lookoutmetrics:** Release dimension value filtering feature to allow customers to define dimension filters for including only a subset of their dataset to be used by LookoutMetrics. ([495f023](https://github.com/aws/aws-sdk-js-v3/commit/495f02381202a098b8286746e63d42b869a8a758))
* **client-medialive:** This change exposes API settings which allow Dolby Atmos and Dolby Vision to be used when running a channel using Elemental Media Live ([c7ddd0d](https://github.com/aws/aws-sdk-js-v3/commit/c7ddd0d3ae20acc26ad64e80816b028e93441c5a))
* **client-route-53:** Amazon Route 53 now supports the Middle East (UAE) Region (me-central-1) for latency records, geoproximity records, and private DNS for Amazon VPCs in that region. ([9676c8f](https://github.com/aws/aws-sdk-js-v3/commit/9676c8f18cf8da9cf44c2441f852a3b5ffed21fb))
* **client-sagemaker:** This release adds Mode to AutoMLJobConfig. ([2d197cb](https://github.com/aws/aws-sdk-js-v3/commit/2d197cb9a81f7600d3f77272cb64df632e3ec1cc))
* **client-ssm:** This release adds support for Systems Manager State Manager Association tagging. ([7141bb4](https://github.com/aws/aws-sdk-js-v3/commit/7141bb4ca3f5517757bd1c4f4a3cf8062705f828))
* **clients:** update client endpoints as of 2022-09-08 ([b1b31d7](https://github.com/aws/aws-sdk-js-v3/commit/b1b31d769cdd5fb2e79df661795fb1a5f012af9b))





# [3.166.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.165.0...v3.166.0) (2022-09-07)


### Features

* **client-dataexchange:** Documentation updates for AWS Data Exchange. ([b794a32](https://github.com/aws/aws-sdk-js-v3/commit/b794a32957a9760695a612b07022b59975125cb3))
* **client-ec2:** Documentation updates for Amazon EC2. ([234c407](https://github.com/aws/aws-sdk-js-v3/commit/234c40716996fc0b9b6904740c2bce44ff21ed7e))
* **client-eks:** Adds support for EKS Addons ResolveConflicts "preserve" flag. Also adds new update failed status for EKS Addons. ([315a2c6](https://github.com/aws/aws-sdk-js-v3/commit/315a2c6c37c60006640d21abfcba9a261e13869b))
* **client-inspector2:** This release adds new fields like fixAvailable, fixedInVersion and remediation to the finding model. The requirement to have vulnerablePackages in the finding model has also been removed. The documentation has been updated to reflect these changes. ([aa99840](https://github.com/aws/aws-sdk-js-v3/commit/aa99840297a368adf80fedc508442b3eba4b0803))
* **client-iotsitewise:** Allow specifying units in Asset Properties ([9bc2dce](https://github.com/aws/aws-sdk-js-v3/commit/9bc2dce6420d73ddd9f65ca7953681ce96ae6c20))
* **client-sagemaker:** SageMaker Hosting now allows customization on ML instance storage volume size, model data download timeout and inference container startup ping health check timeout for each ProductionVariant in CreateEndpointConfig API. ([2d4c98c](https://github.com/aws/aws-sdk-js-v3/commit/2d4c98ca7e80302b4fb9b25348943775c313b98c))
* **client-sns:** Amazon SNS introduces the Data Protection Policy APIs, which enable customers to attach a data protection policy to an SNS topic. This allows topic owners to enable the new message data protection feature to audit and block sensitive data that is exchanged through their topics. ([fdc8747](https://github.com/aws/aws-sdk-js-v3/commit/fdc8747931bae31e41f0a08e2ccb87e792b0c906))





# [3.165.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.164.0...v3.165.0) (2022-09-06)


### Bug Fixes

* **middleware-sdk-s3:** process errors with 200 status code ([#3874](https://github.com/aws/aws-sdk-js-v3/issues/3874)) ([850c13f](https://github.com/aws/aws-sdk-js-v3/commit/850c13f0c5beab9aa2c9a7a1d3c7e429bd2ea72e))


### Features

* **client-sagemaker:** This release adds HyperParameterTuningJob type in Search API. ([e3b98d4](https://github.com/aws/aws-sdk-js-v3/commit/e3b98d4e6fc2bc318ab22bc51181cbc67e99a788))
* support multiple error headers ([#3852](https://github.com/aws/aws-sdk-js-v3/issues/3852)) ([e2c4714](https://github.com/aws/aws-sdk-js-v3/commit/e2c4714d748c3c8f457b09767dc456680005be78))





# [3.164.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.163.0...v3.164.0) (2022-09-02)


### Features

* **client-cognito-identity-provider:** This release adds a new "AuthSessionValidity" field to the UserPoolClient in Cognito. Application admins can configure this value for their users' authentication duration, which is currently fixed at 3 minutes, up to 15 minutes. Setting this field will also apply to the SMS MFA authentication flow. ([fc699df](https://github.com/aws/aws-sdk-js-v3/commit/fc699df42b2c51221037d0fbc927089c050ef301))
* **client-connect:** This release adds search APIs for Routing Profiles and Queues, which can be used to search for those resources within a Connect Instance. ([bfcf51d](https://github.com/aws/aws-sdk-js-v3/commit/bfcf51d0c5ea58f67d9119f68093675f87fe7666))
* **client-mediapackage:** Added support for AES_CTR encryption to CMAF origin endpoints ([761dfd0](https://github.com/aws/aws-sdk-js-v3/commit/761dfd0ca9f3c7030ac9d1a8cf2321e79a772aec))
* **client-sagemaker:** This release enables administrators to attribute user activity and API calls from Studio notebooks, Data Wrangler and Canvas to specific users even when users share the same execution IAM role.  ExecutionRoleIdentityConfig at Sagemaker domain level enables this feature. ([8e57ba3](https://github.com/aws/aws-sdk-js-v3/commit/8e57ba3a0d8dc22f71f4c4f546a500d1a23b9e43))
* **clients:** update client endpoints as of 2022-09-02 ([9cfaf1b](https://github.com/aws/aws-sdk-js-v3/commit/9cfaf1b5e21a8141e7ddc50245a4d09b904bf776))





# [3.163.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.162.0...v3.163.0) (2022-09-01)


### Features

* **client-controltower:** This release contains the first SDK for AWS Control Tower. It introduces  a new set of APIs: EnableControl, DisableControl, GetControlOperation, and ListEnabledControls. ([855863c](https://github.com/aws/aws-sdk-js-v3/commit/855863c949df3ab626dbf5b1aeacad3a744d4505))
* **clients:** update client endpoints as of 2022-09-01 ([48701ed](https://github.com/aws/aws-sdk-js-v3/commit/48701ed45be5033060f1f16066d456f459ee4261))
* **signature-v4:** validate credential is valid before signing ([#3892](https://github.com/aws/aws-sdk-js-v3/issues/3892)) ([065eb7f](https://github.com/aws/aws-sdk-js-v3/commit/065eb7f15944ecc069d9f0cb02c488a32db0db35))





# [3.162.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.161.0...v3.162.0) (2022-08-31)


### Bug Fixes

* **lib-dynamodb:** declare File interface without requiring dom lib ([#3890](https://github.com/aws/aws-sdk-js-v3/issues/3890)) ([574507f](https://github.com/aws/aws-sdk-js-v3/commit/574507fab12cf7a6bed5af0f66760853ee31780f))
* **types:** declare ReadableStream type without requiring dom ([#3889](https://github.com/aws/aws-sdk-js-v3/issues/3889)) ([061b5f5](https://github.com/aws/aws-sdk-js-v3/commit/061b5f5812278930207b5c50c0c9f61a26a987ad))


### Features

* **client-identitystore:** Expand IdentityStore API to support Create, Read, Update, Delete and Get operations for User, Group and GroupMembership resources. ([4227bb3](https://github.com/aws/aws-sdk-js-v3/commit/4227bb30f88e0267be898c110f35605e398a7c7c))
* **client-iotthingsgraph:** This release deprecates all APIs of the ThingsGraph service ([2584904](https://github.com/aws/aws-sdk-js-v3/commit/2584904bb60c9425713778b14df0eb041f445db4))
* **client-ivs:** IVS Merge Fragmented Streams. This release adds support for recordingReconnectWindow field in IVS recordingConfigurations. For more information see https://docs.aws.amazon.com/ivs/latest/APIReference/Welcome.html ([2cec549](https://github.com/aws/aws-sdk-js-v3/commit/2cec5497424c5a078b1fc4dbe188a9323d95c3c4))
* **client-sagemaker:** SageMaker Inference Recommender now accepts Inference Recommender fields: Domain, Task, Framework, SamplePayloadUrl, SupportedContentTypes, SupportedInstanceTypes, directly in our CreateInferenceRecommendationsJob API through ContainerConfig ([7ab95c9](https://github.com/aws/aws-sdk-js-v3/commit/7ab95c9351e9bb64bc2090ecfd7214e22cc6a412))





# [3.161.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.160.0...v3.161.0) (2022-08-30)


### Bug Fixes

* **credential-providers:** support custom middleware for sts client ([#3887](https://github.com/aws/aws-sdk-js-v3/issues/3887)) ([072dea3](https://github.com/aws/aws-sdk-js-v3/commit/072dea35d610fdea8db4e0ac7233a0f8a8317a5e))


### Features

* **client-greengrassv2:** Adds topologyFilter to ListInstalledComponentsRequest which allows filtration of components by ROOT or ALL (including root and dependency components). Adds lastStatusChangeTimestamp to ListInstalledComponents response to show the last time a component changed state on a device. ([3927d07](https://github.com/aws/aws-sdk-js-v3/commit/3927d07ea3c8ff34765afabc4847f50147dd020c))
* **client-lookoutequipment:** This release adds new apis for providing labels. ([d89e69a](https://github.com/aws/aws-sdk-js-v3/commit/d89e69ae2f73e193fa5b00b83d4a623a55fea4af))
* **client-macie2:** This release of the Amazon Macie API adds support for using allow lists to define specific text and text patterns to ignore when inspecting data sources for sensitive data. ([1782c8c](https://github.com/aws/aws-sdk-js-v3/commit/1782c8c89bb76fbdad76aa6fe92a4545bcc56c59))
* **clients:** update client endpoints as of 2022-08-30 ([59043d3](https://github.com/aws/aws-sdk-js-v3/commit/59043d3755015c9185990f3ad850aaded13bd58c))
* **smithy-client:** allow unambiguous type conversions in parse-utils ([#3888](https://github.com/aws/aws-sdk-js-v3/issues/3888)) ([967eb0a](https://github.com/aws/aws-sdk-js-v3/commit/967eb0aea76714a5f3243a57604799479fa7baea))





# [3.160.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.159.0...v3.160.0) (2022-08-29)


### Bug Fixes

* **token-providers:** move client-sso-oidc in dependencies ([#3886](https://github.com/aws/aws-sdk-js-v3/issues/3886)) ([6e1534b](https://github.com/aws/aws-sdk-js-v3/commit/6e1534b75867476eb046fee0f31d7cbb4d738b10))


### Features

* **client-voice-id:** Amazon Connect Voice ID now detects voice spoofing.  When a prospective fraudster tries to spoof caller audio using audio playback or synthesized speech, Voice ID will return a risk score and outcome to indicate the how likely it is that the voice is spoofed. ([bf82531](https://github.com/aws/aws-sdk-js-v3/commit/bf82531c49e1b8dad002f2bb2dfdf920fc8e1ee6))
* **clients:** update client endpoints as of 2022-08-29 ([824b4a3](https://github.com/aws/aws-sdk-js-v3/commit/824b4a3844653993771d9cac6f21dea94736536d))





# [3.159.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.158.0...v3.159.0) (2022-08-26)


### Features

* **client-mediapackage:** This release adds Ads AdTriggers and AdsOnDeliveryRestrictions to describe calls for CMAF endpoints on MediaPackage. ([c05884e](https://github.com/aws/aws-sdk-js-v3/commit/c05884eefe1d35593eec42620db2cb26fed9c37e))
* **token-providers:** add token based authentication ([#3883](https://github.com/aws/aws-sdk-js-v3/issues/3883)) ([9f31345](https://github.com/aws/aws-sdk-js-v3/commit/9f313451a31b9bc317c277d6ab86e1d328066ad8))
* **util-endpoints:** add ruleSet standard library ([#3880](https://github.com/aws/aws-sdk-js-v3/issues/3880)) ([4ffc67b](https://github.com/aws/aws-sdk-js-v3/commit/4ffc67b6f9c8349f93ccf91b9b3aa17d6a22b06e))





# [3.158.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.157.0...v3.158.0) (2022-08-25)


### Features

* **client-gamelift:** This release adds support for eight EC2 local zones as fleet locations; Atlanta, Chicago, Dallas, Denver, Houston, Kansas City (us-east-1-mci-1a), Los Angeles, and Phoenix. It also adds support for C5d, C6a, C6i, and R5d EC2 instance families. ([e045457](https://github.com/aws/aws-sdk-js-v3/commit/e0454579f6d7ffd5dc9d2648b942fe04799ca472))
* **client-iot-wireless:** This release includes a new feature for the customers to enable the LoRa gateways to send out beacons for Class B devices and an option to select one or more gateways for Class C devices when sending the LoRaWAN downlink messages. ([8ba0bbe](https://github.com/aws/aws-sdk-js-v3/commit/8ba0bbecbb424062f23862886f8e4ce2eb0b3c2d))
* **client-panorama:** Support sorting and filtering in ListDevices API, and add more fields to device listings and single device detail ([91c5fc6](https://github.com/aws/aws-sdk-js-v3/commit/91c5fc62ee160cecaa32c0072bd5be3f460b27c1))
* **client-sso-oidc:** Updated required request parameters on IAM Identity Center's OIDC CreateToken action. ([ab82210](https://github.com/aws/aws-sdk-js-v3/commit/ab82210186cfaaddb6130c28153d3ac3f0fb8389))
* **clients:** update client endpoints as of 2022-08-25 ([37ae4d9](https://github.com/aws/aws-sdk-js-v3/commit/37ae4d9e97c1d9cf08fff1fd3f4c3fdfe7b7110a))





# [3.157.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.156.0...v3.157.0) (2022-08-24)


### Features

* **client-cloudfront:** Adds support for CloudFront origin access control (OAC), making it possible to restrict public access to S3 bucket origins in all AWS Regions, those with SSE-KMS, and more. ([b36c500](https://github.com/aws/aws-sdk-js-v3/commit/b36c500e445cf51505e1269fbf1e1ba8300ebd92))
* **client-config-service:** AWS Config now supports ConformancePackTemplate documents in SSM Docs for the deployment and update of conformance packs. ([ccd5d97](https://github.com/aws/aws-sdk-js-v3/commit/ccd5d97587f7717afba8f9a8ad2299bddb62a62d))
* **client-quicksight:** Added a new optional property DashboardVisual under ExperienceConfiguration parameter of GenerateEmbedUrlForAnonymousUser and GenerateEmbedUrlForRegisteredUser API operations. This supports embedding of specific visuals in QuickSight dashboards. ([dcfda0d](https://github.com/aws/aws-sdk-js-v3/commit/dcfda0da9473cb414fa1b3cb12a3e21c7996e0bd))





# [3.156.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.155.0...v3.156.0) (2022-08-23)


### Features

* **client-rds:** RDS for Oracle supports Oracle Data Guard switchover and read replica backups. ([75335b5](https://github.com/aws/aws-sdk-js-v3/commit/75335b50c0a63961c7f8dceaed0905e20cbbdba3))





# [3.155.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.154.0...v3.155.0) (2022-08-22)


### Bug Fixes

* **e2e:** clean up stale changesets ([#3869](https://github.com/aws/aws-sdk-js-v3/issues/3869)) ([22ede5a](https://github.com/aws/aws-sdk-js-v3/commit/22ede5ab4ca856cbf8ab17a8e48c5f417b6dd291))


### Features

* **client-ec2:** R6a instances are powered by 3rd generation AMD EPYC (Milan) processors delivering all-core turbo frequency of 3.6 GHz. C6id, M6id, and R6id instances are powered by 3rd generation Intel Xeon Scalable processor (Ice Lake) delivering all-core turbo frequency of 3.5 GHz. ([5265b7b](https://github.com/aws/aws-sdk-js-v3/commit/5265b7b39b10d2e864e3e4ab0e5646d148c70954))
* **client-forecastquery:** releasing What-If Analysis APIs ([f9cb16a](https://github.com/aws/aws-sdk-js-v3/commit/f9cb16a3a5278a2e8738dd41ca6e42befca3ac97))
* **client-forecast:** releasing What-If Analysis APIs and update ARN regex pattern to be more strict in accordance with security recommendation ([2ed50b9](https://github.com/aws/aws-sdk-js-v3/commit/2ed50b9c29206730696ce1febf6ac06c620cf90f))
* **client-iotsitewise:** Enable non-unique asset names under different hierarchies ([5162c75](https://github.com/aws/aws-sdk-js-v3/commit/5162c75aeb7316ee3813aa7ae885076e4638bc02))
* **client-lex-models-v2:** This release introduces a new feature to stop a running BotRecommendation Job for Automated Chatbot Designer. ([48b347b](https://github.com/aws/aws-sdk-js-v3/commit/48b347b667b6b24c1e08d9e17d1b9ccdf378c353))
* **client-securityhub:** Added new resource details objects to ASFF, including resources for AwsBackupBackupVault, AwsBackupBackupPlan and AwsBackupRecoveryPoint. Added FixAvailable, FixedInVersion and Remediation  to Vulnerability. ([b301124](https://github.com/aws/aws-sdk-js-v3/commit/b301124e27395a468d04030efeccfeb29c61888f))
* **client-support-app:** This is the initial SDK release for the AWS Support App in Slack. ([fbbc168](https://github.com/aws/aws-sdk-js-v3/commit/fbbc1689c0a81b6517a0b5c43da60517d9e61374))
* **clients:** update client endpoints as of 2022-08-22 ([a5271d3](https://github.com/aws/aws-sdk-js-v3/commit/a5271d33ff6c360e2dbee5e148a890cb4ec9f311))





# [3.154.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.153.0...v3.154.0) (2022-08-19)


### Bug Fixes

* **util-body-length-browser:** handle trail surrogate character ([#3866](https://github.com/aws/aws-sdk-js-v3/issues/3866)) ([62657b1](https://github.com/aws/aws-sdk-js-v3/commit/62657b13af635928bf2c5ee8f449be711a379dd9))


### Features

* **client-connect:** This release adds SearchSecurityProfiles API which can be used to search for Security Profile resources within a Connect Instance. ([9a021ff](https://github.com/aws/aws-sdk-js-v3/commit/9a021ff73ad092b31866bca5cafb840828547cf5))
* **client-kendra:** This release adds support for a new authentication type - Personal Access Token (PAT) for confluence server. ([66a1950](https://github.com/aws/aws-sdk-js-v3/commit/66a195085417bb9734538c9e8cc1f741ea01f67f))
* **client-lookoutmetrics:** This release is to make GetDataQualityMetrics API publicly available. ([d8ee980](https://github.com/aws/aws-sdk-js-v3/commit/d8ee980d224f362ea93a849cffce8fde59510da6))
* **clients:** update client endpoints as of 2022-08-19 ([881b2c3](https://github.com/aws/aws-sdk-js-v3/commit/881b2c39bd44ad920ff0f1aec0c13ce03ebe5740))





# [3.153.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.152.0...v3.153.0) (2022-08-18)


### Features

* **client-chime-sdk-media-pipelines:** The Amazon Chime SDK now supports live streaming of real-time video from the Amazon Chime SDK sessions to streaming platforms such as Amazon IVS and Amazon Elemental MediaLive. We have also added support for concatenation to create a single media capture file. ([002e420](https://github.com/aws/aws-sdk-js-v3/commit/002e420099602a3f6de658f346fbf817069e00ba))
* **client-cloudwatch:** Add support for managed Contributor Insights Rules ([101b4c2](https://github.com/aws/aws-sdk-js-v3/commit/101b4c2f298f5ad209687a53267fc4b9cf325352))
* **client-dynamodb:** This release adds support for importing data from S3 into a new DynamoDB table ([58a3e7a](https://github.com/aws/aws-sdk-js-v3/commit/58a3e7a2e5f45343d3ce203e69a49373046b87be))
* **client-ec2:** This release adds support for VPN log options , a new feature allowing S2S VPN connections to send IKE activity logs to CloudWatch Logs ([a7c0bbd](https://github.com/aws/aws-sdk-js-v3/commit/a7c0bbd50e15fdfe4b59669684bbea9f9427002f))
* **client-networkmanager:** Add TransitGatewayPeeringAttachmentId property to TransitGatewayPeering Model ([098d7ca](https://github.com/aws/aws-sdk-js-v3/commit/098d7ca4a41fbf03da3f7c5206837c27ccb00fc4))





# [3.152.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.151.0...v3.152.0) (2022-08-17)


### Features

* **client-app-mesh:** AWS App Mesh release to support Multiple Listener and Access Log Format feature ([1cc2947](https://github.com/aws/aws-sdk-js-v3/commit/1cc2947829ebabb0aa150c933a41bde45512dfa9))
* **client-connectcampaigns:** Updated exceptions for Amazon Connect Outbound Campaign api's. ([e924bbe](https://github.com/aws/aws-sdk-js-v3/commit/e924bbe7c7cb3a7b34a17b282b13bed32b898ea1))
* **client-kendra:** This release adds Zendesk connector (which allows you to specify Zendesk SAAS platform as data source), Proxy Support for Sharepoint and Confluence Server (which allows you to specify the proxy configuration if proxy is required to connect to your Sharepoint/Confluence Server as data source). ([5bc8cef](https://github.com/aws/aws-sdk-js-v3/commit/5bc8cef902aa063fb2fe46dc02dc89120ce1e28e))
* **client-lakeformation:** This release adds a new API support "AssumeDecoratedRoleWithSAML" and also release updates the corresponding documentation. ([5e56990](https://github.com/aws/aws-sdk-js-v3/commit/5e569903edf52eefa85f85ac0903eccbe8764f15))
* **client-lambda:** Added support for customization of Consumer Group ID for MSK and Kafka Event Source Mappings. ([ce4030b](https://github.com/aws/aws-sdk-js-v3/commit/ce4030b850cde79cc50d3c6c569c44018a4c2d0b))
* **client-lex-models-v2:** This release introduces support for enhanced conversation design with the ability to define custom conversation flows with conditional branching and new bot responses. ([3fedcd6](https://github.com/aws/aws-sdk-js-v3/commit/3fedcd63f92c0050bbeaa55e502a0b917fc9883f))
* **client-rds:** Adds support for Internet Protocol Version 6 (IPv6) for RDS Aurora database clusters. ([77a9475](https://github.com/aws/aws-sdk-js-v3/commit/77a94757c2aa1d94081e7669cd4a5a06e3370a5c))





# [3.151.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.150.0...v3.151.0) (2022-08-16)


### Features

* **client-rekognition:** This release adds APIs which support copying an Amazon Rekognition Custom Labels model and managing project policies across AWS account. ([5814059](https://github.com/aws/aws-sdk-js-v3/commit/581405949a6852dae34e3b5fca292d31f5597250))
* **clients:** update client endpoints as of 2022-08-16 ([6607bbd](https://github.com/aws/aws-sdk-js-v3/commit/6607bbd57167e206d0b6af8da1ef38dce0b8fdc4))





# [3.150.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.149.0...v3.150.0) (2022-08-15)


### Features

* **client-cloudfront:** Adds Http 3 support to distributions ([0f250fe](https://github.com/aws/aws-sdk-js-v3/commit/0f250fe532116c548bcee919174ec0896601cc5f))
* **client-wisdom:** This release introduces a new API PutFeedback that allows submitting feedback to Wisdom on content relevance. ([53b4df1](https://github.com/aws/aws-sdk-js-v3/commit/53b4df188f94ede91121c7bac0470d7dbda37046))





# [3.149.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.148.0...v3.149.0) (2022-08-12)


### Features

* **client-amp:** This release adds log APIs that allow customers to manage logging for their Amazon Managed Service for Prometheus workspaces. ([f97fc3c](https://github.com/aws/aws-sdk-js-v3/commit/f97fc3cb2d6cd140aa4abd0a247ed803809552a8))
* **client-chime-sdk-messaging:** The Amazon Chime SDK now supports channels with up to one million participants with elastic channels. ([2fb5091](https://github.com/aws/aws-sdk-js-v3/commit/2fb50915ca71e3338fc904813bb7ef36b80555ad))
* **client-ivs:** Updates various list api MaxResults ranges ([807e21e](https://github.com/aws/aws-sdk-js-v3/commit/807e21e70ae1cd9b55e757f7fce8eb2c8e362224))
* **client-personalize-runtime:** This release provides support for promotions in AWS Personalize runtime. ([f7e4104](https://github.com/aws/aws-sdk-js-v3/commit/f7e410466be43961aec27fa05f5e0aa3eae0df8b))
* **clients:** update client endpoints as of 2022-08-12 ([40619f5](https://github.com/aws/aws-sdk-js-v3/commit/40619f569be213c3dee37070fb2190777fa4e1f6))





# [3.148.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.147.0...v3.148.0) (2022-08-11)


### Features

* **client-backupstorage:** This is the first public release of AWS Backup Storage. We are exposing some previously-internal APIs for use by external services. These APIs are not meant to be used directly by customers. ([1161db1](https://github.com/aws/aws-sdk-js-v3/commit/1161db10ce562744a6c573f0a450e9d85ba6e7f8))
* **client-glue:** Add support for Python 3.9 AWS Glue Python Shell jobs ([2baf73b](https://github.com/aws/aws-sdk-js-v3/commit/2baf73bf24253b3237ce1e9b6a20fc0a26e01eea))
* **client-privatenetworks:** This is the initial SDK release for AWS Private 5G. AWS Private 5G is a managed service that makes it easy to deploy, operate, and scale your own private mobile network at your on-premises location. ([ffaee5e](https://github.com/aws/aws-sdk-js-v3/commit/ffaee5e942684d22da89d756a64de28d5be107ff))
* **clients:** update client endpoints as of 2022-08-11 ([46522ee](https://github.com/aws/aws-sdk-js-v3/commit/46522ee49a98584dfe732d1da940c4ebb45748dc))





# [3.147.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.146.0...v3.147.0) (2022-08-10)


### Features

* **client-dlm:** This release adds support for excluding specific data (non-boot) volumes from multi-volume snapshot sets created by snapshot lifecycle policies ([8e19146](https://github.com/aws/aws-sdk-js-v3/commit/8e1914626f36f637db33c833bca93a038bd06fa6))
* **client-ec2:** This release adds support for excluding specific data (non-root) volumes from multi-volume snapshot sets created from instances. ([8917e47](https://github.com/aws/aws-sdk-js-v3/commit/8917e47393dc7ba118a5ddc0580f4ad43eaa731a))





# [3.146.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.145.0...v3.146.0) (2022-08-09)


### Features

* **client-cloudwatch:** Various quota increases related to dimensions and custom metrics ([e4f6fb5](https://github.com/aws/aws-sdk-js-v3/commit/e4f6fb583df1eaca859392e5ddc9252c0a62396e))
* **client-location:** Amazon Location Service now allows circular geofences in BatchPutGeofence, PutGeofence, and GetGeofence  APIs. ([c4ac25d](https://github.com/aws/aws-sdk-js-v3/commit/c4ac25d8816e0a6b85901eab400322badbe6dfe7))
* **client-sagemaker-a2i-runtime:** Fix bug with parsing ISO-8601 CreationTime in Java SDK in DescribeHumanLoop ([d2380d7](https://github.com/aws/aws-sdk-js-v3/commit/d2380d70e1b23d94b77415b373a433487ffb9e95))
* **client-sagemaker:** Amazon SageMaker Automatic Model Tuning now supports specifying multiple alternate EC2 instance types to make tuning jobs more robust when the preferred instance type is not available due to insufficient capacity. ([928a5b6](https://github.com/aws/aws-sdk-js-v3/commit/928a5b62b468f487d35031cbdc2619a36285350f))





# [3.145.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.144.0...v3.145.0) (2022-08-08)


### Features

* **client-glue:** Add an option to run non-urgent or non-time sensitive Glue Jobs on spare capacity ([3040530](https://github.com/aws/aws-sdk-js-v3/commit/30405306f0fb22d50702b64fd53c4c0ce06903fc))
* **client-iot-wireless:** AWS IoT Wireless release support for sidewalk data reliability. ([962583c](https://github.com/aws/aws-sdk-js-v3/commit/962583c9ced0efc84ae34bcdc06c3a22a624e89b))
* **client-pinpoint:** Adds support for Advance Quiet Time in Journeys. Adds RefreshOnSegmentUpdate and WaitForQuietTime to JourneyResponse. ([ded8662](https://github.com/aws/aws-sdk-js-v3/commit/ded8662576d32b2a8d7ecf941cf9e2cbd1a22ac2))
* **clients:** update client endpoints as of 2022-08-08 ([8a11fde](https://github.com/aws/aws-sdk-js-v3/commit/8a11fdebd9fe799fb6e8f4def59408a875920a84))





# [3.144.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.143.0...v3.144.0) (2022-08-04)


### Bug Fixes

* **docs:** re-add customizations in bug report template ([#3844](https://github.com/aws/aws-sdk-js-v3/issues/3844)) ([b76839d](https://github.com/aws/aws-sdk-js-v3/commit/b76839dabe9895ef3db5d474ccb18a7ab951f818))


### Features

* **client-chime-sdk-meetings:** Adds support for Tags on Amazon Chime SDK WebRTC sessions ([889af85](https://github.com/aws/aws-sdk-js-v3/commit/889af8589ed9523bd89f9c9c202455406d21c8c3))
* **client-config-service:** Add resourceType enums for Athena, GlobalAccelerator, Detective and EC2 types ([a232401](https://github.com/aws/aws-sdk-js-v3/commit/a2324015c4be7bbb4d6fbdefb00a709c748e9f34))
* **client-iot:** The release is to support attach a provisioning template to CACert for JITP function,  Customer now doesn't have to hardcode a roleArn and templateBody during register a CACert to enable JITP. ([1d537f3](https://github.com/aws/aws-sdk-js-v3/commit/1d537f3469daf0b5702656f32e6e5f4b52a33f59))
* **clients:** update client endpoints as of 2022-08-04 ([e270ac2](https://github.com/aws/aws-sdk-js-v3/commit/e270ac2ef18484da33bb18ee469bbc06c0da2ce2))





# [3.143.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.142.0...v3.143.0) (2022-08-03)


### Features

* **client-cognito-identity-provider:** Add a new exception type, ForbiddenException, that is returned when request is not allowed ([5426503](https://github.com/aws/aws-sdk-js-v3/commit/5426503b36125cea89153651b8755786a63c6529))
* **client-wafv2:** You can now associate an AWS WAF web ACL with an Amazon Cognito user pool. ([81aeece](https://github.com/aws/aws-sdk-js-v3/commit/81aeeceae2444f9a8cd0ae933f5645bf83f0ab5e))





# [3.142.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.141.0...v3.142.0) (2022-08-02)


### Features

* **client-license-manager-user-subscriptions:** This release supports user based subscription for Microsoft Visual Studio Professional and Enterprise on EC2. ([9344c94](https://github.com/aws/aws-sdk-js-v3/commit/9344c94e6d74d7f7423f87301eac8dca3481b9d3))
* **client-personalize:** This release adds support for incremental bulk ingestion for the Personalize CreateDatasetImportJob API. ([545008f](https://github.com/aws/aws-sdk-js-v3/commit/545008f6ced4a28be23a2e984df469e739e5e0a0))
* **clients:** update client endpoints as of 2022-08-02 ([63abee5](https://github.com/aws/aws-sdk-js-v3/commit/63abee5d2e3cb571f09bd6a9aa8a9dc8d6a93d9b))
* **codegen:** general data mapping function ([#3830](https://github.com/aws/aws-sdk-js-v3/issues/3830)) ([9417eae](https://github.com/aws/aws-sdk-js-v3/commit/9417eae722806799fb4c15c07921574268c1165c))
* **smithy-client:** update client defaults provider ([70224cc](https://github.com/aws/aws-sdk-js-v3/commit/70224cc2dccebd7bcc1538e66e412100d85fe210))





# [3.141.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.140.0...v3.141.0) (2022-08-01)


### Bug Fixes

* **lib-dynamodb:** make command middleware useable, turn marshalling into middleware ([#3808](https://github.com/aws/aws-sdk-js-v3/issues/3808)) ([38b1a28](https://github.com/aws/aws-sdk-js-v3/commit/38b1a2882c70da815b081a378d39bb6dec06d4d2))


### Features

* **client-workspaces:** This release introduces ModifySamlProperties, a new API that allows control of SAML properties associated with a WorkSpaces directory. The DescribeWorkspaceDirectories API will now additionally return SAML properties in its responses. ([5d254af](https://github.com/aws/aws-sdk-js-v3/commit/5d254afca17b4d0987fbdfbe3c24dd5e32649f74))
* **clients:** update client endpoints as of 2022-08-01 ([aaf49f2](https://github.com/aws/aws-sdk-js-v3/commit/aaf49f21b371412e6ea7e00890b71a7b31991b66))





# [3.140.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.139.0...v3.140.0) (2022-07-29)


### Bug Fixes

* **clients:** create new session for every H2 requests ([#3810](https://github.com/aws/aws-sdk-js-v3/issues/3810)) ([b2c026f](https://github.com/aws/aws-sdk-js-v3/commit/b2c026f8309339bfee59cf75e7dc5fc0a22a7fa2))


### Features

* **client-ec2:** Documentation updates for Amazon EC2. ([504891a](https://github.com/aws/aws-sdk-js-v3/commit/504891a60f4cf5f642a8092f32747fad0d8d3f99))
* **client-shield:** AWS Shield Advanced now supports filtering for ListProtections and ListProtectionGroups. ([d907155](https://github.com/aws/aws-sdk-js-v3/commit/d90715521b9611358ee22647ccb24588174e6964))
* **clients:** update client endpoints as of 2022-07-29 ([cf99fb5](https://github.com/aws/aws-sdk-js-v3/commit/cf99fb5063738266f7fa0d749d443573991fc3e9))





# [3.139.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.138.0...v3.139.0) (2022-07-28)


### Features

* **client-elasticsearch-service:** This release adds support for gp3 EBS (Elastic Block Store) storage. ([3bb625d](https://github.com/aws/aws-sdk-js-v3/commit/3bb625d03be2e1bfec90eac07b136ad84b039b6f))
* **client-lookoutvision:** This release introduces support for image segmentation models and updates CPU accelerator options for models hosted on edge devices. ([3710b44](https://github.com/aws/aws-sdk-js-v3/commit/3710b44677824a037bbbf1ab4891e98dfe75b10f))
* **client-opensearch:** This release adds support for gp3 EBS (Elastic Block Store) storage. ([66d0dda](https://github.com/aws/aws-sdk-js-v3/commit/66d0ddab6754a5e57e5cb1c653e16ab9e2cbd8fa))
* **clients:** update client endpoints as of 2022-07-28 ([612f647](https://github.com/aws/aws-sdk-js-v3/commit/612f647e7310f19bdb7d201af9b4371052f185cc))





# [3.138.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.137.0...v3.138.0) (2022-07-27)


### Features

* **client-auditmanager:** This release adds an exceeded quota exception to several APIs. We added a ServiceQuotaExceededException for the following operations: CreateAssessment, CreateControl, CreateAssessmentFramework, and UpdateAssessmentStatus. ([352b023](https://github.com/aws/aws-sdk-js-v3/commit/352b023a92f3390a18deaafb81133b123638525f))
* **client-chime:** Chime VoiceConnector will now support ValidateE911Address which will allow customers to prevalidate their addresses included in their SIP invites for emergency calling ([a5a02f7](https://github.com/aws/aws-sdk-js-v3/commit/a5a02f7e30797c84c103f4d2fd892a54233a0eff))
* **client-config-service:** This release adds ListConformancePackComplianceScores API to support the new compliance score feature, which provides a percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack. ([6945e9e](https://github.com/aws/aws-sdk-js-v3/commit/6945e9e9c5c46a04657f91766fcaa93d01b48a29))
* **client-global-accelerator:** Global Accelerator now supports dual-stack accelerators, enabling support for IPv4 and IPv6 traffic. ([d07e946](https://github.com/aws/aws-sdk-js-v3/commit/d07e94626b332aabe551dbef6f224e877f2cb502))
* **client-marketplace-catalog:** The SDK for the StartChangeSet API will now automatically set and use an idempotency token in the ClientRequestToken request parameter if the customer does not provide it. ([df77d8b](https://github.com/aws/aws-sdk-js-v3/commit/df77d8b55d0e6a270af332539297f8651095e8c9))
* **client-polly:** Amazon Polly adds new English and Hindi voice - Kajal. Kajal is available as Neural voice only. ([d06d2de](https://github.com/aws/aws-sdk-js-v3/commit/d06d2de2c321b9643468f3d64e65958c0fd0b89d))
* **client-workspaces:** Added CreateWorkspaceImage API to create a new WorkSpace image from an existing WorkSpace. ([6f03fb8](https://github.com/aws/aws-sdk-js-v3/commit/6f03fb882a494bfaecb228ba23589363c3694db8))
* **clients:** update client endpoints as of 2022-07-27 ([caeedeb](https://github.com/aws/aws-sdk-js-v3/commit/caeedebeea234a709a08c98b9bc6de90bb0946e9))





# [3.137.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.136.1...v3.137.0) (2022-07-26)


### Bug Fixes

* **smithy-client:** rfc-7231 date-time value ([#3814](https://github.com/aws/aws-sdk-js-v3/issues/3814)) ([f52a985](https://github.com/aws/aws-sdk-js-v3/commit/f52a985b90e1a015704472dd1a3754c4b5b005df))


### Features

* **client-appsync:** Adds support for a new API to evaluate mapping templates with mock data, allowing you to remotely unit test your AppSync resolvers and functions. ([9f42ace](https://github.com/aws/aws-sdk-js-v3/commit/9f42ace9220879f5718af4a285aae0a124085f06))
* **client-detective:** Added the ability to get data source package information for the behavior graph. Graph administrators can now start (or stop) optional datasources on the behavior graph. ([6b3a1ff](https://github.com/aws/aws-sdk-js-v3/commit/6b3a1ff962b149e3e3e9e2c0a936e119c6fec243))
* **client-guardduty:** Amazon GuardDuty introduces a new Malware Protection feature that triggers malware scan on selected EC2 instance resources, after the service detects a potentially malicious activity. ([f85fa66](https://github.com/aws/aws-sdk-js-v3/commit/f85fa66467b02464efa46f203b5e246d0fe01b31))
* **client-lookoutvision:** This release introduces support for the automatic scaling of inference units used by Amazon Lookout for Vision models. ([65ad083](https://github.com/aws/aws-sdk-js-v3/commit/65ad08320fcdaf57b90810e40a1093abfe98e920))
* **client-macie2:** This release adds support for retrieving (revealing) sample occurrences of sensitive data that Amazon Macie detects and reports in findings. ([00eeecb](https://github.com/aws/aws-sdk-js-v3/commit/00eeecb37066c7a290321730c09c072848dc5937))
* **client-rekognition:** This release introduces support for the automatic scaling of inference units used by Amazon Rekognition Custom Labels models. ([34e5ab6](https://github.com/aws/aws-sdk-js-v3/commit/34e5ab696808e9c80d6c88e064a4bc0c4aebfb7b))
* **client-transfer:** AWS Transfer Family now supports Applicability Statement 2 (AS2), a network protocol used for the secure and reliable transfer of critical Business-to-Business (B2B) data over the public internet using HTTP/HTTPS as the transport mechanism. ([8424fee](https://github.com/aws/aws-sdk-js-v3/commit/8424fee53f8d6090c1e19f79a0b6cbd6e5017375))
* **namespaces:** remove namespaces with only a log filter ([#3823](https://github.com/aws/aws-sdk-js-v3/issues/3823)) ([33e6822](https://github.com/aws/aws-sdk-js-v3/commit/33e68228fb64c53dd8f89e6be76dd5f46edc3cfd))





## [3.136.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.136.0...v3.136.1) (2022-07-25)


### Bug Fixes

* **client-kinesis:** support eventstream in subscribeToShard ([#3818](https://github.com/aws/aws-sdk-js-v3/issues/3818)) ([6892bb9](https://github.com/aws/aws-sdk-js-v3/commit/6892bb9057f46c650f19227d9e8b117f0d9c2b68))





# [3.136.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.135.0...v3.136.0) (2022-07-22)


### Features

* **client-account:** This release enables customers to manage the primary contact information for their AWS accounts. For more information, see https://docs.aws.amazon.com/accounts/latest/reference/API_Operations.html ([f456886](https://github.com/aws/aws-sdk-js-v3/commit/f4568862de4e51d2a4d318d4fc5eba8f1fcaffad))
* **client-ec2:** Added support for EC2 M1 Mac instances. For more information, please visit aws.amazon.com/mac. ([23fdb65](https://github.com/aws/aws-sdk-js-v3/commit/23fdb65cf942843e68b2f7f6057bea5965ad7d2f))
* **client-iotdeviceadvisor:** Added new service feature (Early access only) - Long Duration Test, where customers can test the IoT device to observe how it behaves when the device is in operation for longer period. ([bb17b0c](https://github.com/aws/aws-sdk-js-v3/commit/bb17b0c83d3b7d0219932cd2781ef451a5971ac3))
* **client-medialive:** Link devices now support remote rebooting. Link devices now support maintenance windows. Maintenance windows allow a Link device to install software updates without stopping the MediaLive channel. The channel will experience a brief loss of input from the device while updates are installed. ([3cef41f](https://github.com/aws/aws-sdk-js-v3/commit/3cef41f821a5c7f34ca7a7d0ba3f63fffdf25b56))
* **client-rds:** This release adds the "ModifyActivityStream" API with support for audit policy state locking and unlocking. ([b6e2600](https://github.com/aws/aws-sdk-js-v3/commit/b6e260013ef2279150962379fbcdd1c1245978ad))
* **client-transcribe:** Remove unsupported language codes for StartTranscriptionJob and update VocabularyFileUri for UpdateMedicalVocabulary ([574cf7e](https://github.com/aws/aws-sdk-js-v3/commit/574cf7e1aac1d8d96e145a2ae527a0c5053484bd))
* **clients:** update client endpoints as of 2022-07-22 ([50714b8](https://github.com/aws/aws-sdk-js-v3/commit/50714b8b2e4e3f2c337f4ffa08748e5e3a0c34eb))





# [3.135.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.134.0...v3.135.0) (2022-07-21)


### Features

* **client-athena:** This feature allows customers to retrieve runtime statistics for completed queries ([6fe9621](https://github.com/aws/aws-sdk-js-v3/commit/6fe9621621e896fa31ad115c3865a35f00b12d3a))
* **client-cloudwatch:** Adding support for the suppression of Composite Alarm actions ([e94c855](https://github.com/aws/aws-sdk-js-v3/commit/e94c855cd87e381d4cbf34685fe4f68da1031ffa))
* **client-docdb:** Enable copy-on-write restore type ([9173056](https://github.com/aws/aws-sdk-js-v3/commit/91730562c1fe693c0270b088e5bd0c02d50372d4))
* **client-ec2-instance-connect:** This release includes a new exception type "EC2InstanceUnavailableException" for SendSSHPublicKey and SendSerialConsoleSSHPublicKey APIs. ([a2aef86](https://github.com/aws/aws-sdk-js-v3/commit/a2aef86781ea0833877ada3ed3dcdbaab5d700ec))
* **client-frauddetector:** The release introduces Account Takeover Insights (ATI) model. The ATI model detects fraud relating to account takeover. This release also adds support for new variable types: ARE_CREDENTIALS_VALID and SESSION_ID and adds new structures to Model Version APIs. ([b8837a8](https://github.com/aws/aws-sdk-js-v3/commit/b8837a8fe3ee514eed76a87d54e9165433ea0215))
* **client-iotsitewise:** Added asynchronous API to ingest bulk historical and current data into IoT SiteWise. ([972d020](https://github.com/aws/aws-sdk-js-v3/commit/972d020ec9d8e713b9306aa8a39b036886127fc0))
* **client-kendra:** Amazon Kendra now provides Oauth2 support for SharePoint Online. For more information, see https://docs.aws.amazon.com/kendra/latest/dg/data-source-sharepoint.html ([de0697a](https://github.com/aws/aws-sdk-js-v3/commit/de0697ad65ae98358ea534d9c2c90eadf4111bce))
* **client-network-firewall:** Network Firewall now supports referencing dynamic IP sets from stateful rule groups, for IP sets stored in Amazon VPC prefix lists. ([7fb7490](https://github.com/aws/aws-sdk-js-v3/commit/7fb7490a4c093be17407d16f77151f3fa7c3e03a))





# [3.134.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.133.0...v3.134.0) (2022-07-20)


### Features

* **client-iot:** GA release the ability to enable/disable IoT Fleet Indexing for Device Defender and Named Shadow information, and search them through IoT Fleet Indexing APIs. This includes Named Shadow Selection as a part of the UpdateIndexingConfiguration API. ([358a73e](https://github.com/aws/aws-sdk-js-v3/commit/358a73e37eca1782a115e9c304bdc27889fc7026))
* **clients:** update client endpoints as of 2022-07-20 ([e67364c](https://github.com/aws/aws-sdk-js-v3/commit/e67364c42bb347d50bd98d1a3be547dae722cea8))





# [3.133.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.132.0...v3.133.0) (2022-07-19)


### Features

* **client-devops-guru:** Added new APIs for log anomaly detection feature. ([90ed85b](https://github.com/aws/aws-sdk-js-v3/commit/90ed85b6817d3f035124d62818670b3b4807c492))
* **client-sagemaker-edge:** Amazon SageMaker Edge Manager provides lightweight model deployment feature to deploy machine learning models on requested devices. ([316a691](https://github.com/aws/aws-sdk-js-v3/commit/316a691491232facc572b8482f9084355702bfbf))
* **client-sagemaker:** Fixed an issue with cross account QueryLineage ([ed39bc2](https://github.com/aws/aws-sdk-js-v3/commit/ed39bc2c1bd0d2bad021a043b7642fae5ea9263d))
* **client-workspaces:** Increased the character limit of the login message from 850 to 2000 characters. ([6481e59](https://github.com/aws/aws-sdk-js-v3/commit/6481e598bf2360dfe18714996867eeed605a6f82))





# [3.132.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.131.0...v3.132.0) (2022-07-18)


### Features

* **client-application-discovery-service:** Add AWS Agentless Collector details to the GetDiscoverySummary API response ([d790bda](https://github.com/aws/aws-sdk-js-v3/commit/d790bda6e7dffcb5a74c12550d4bbd14bdb4051c))
* **client-elasticache:** Adding AutoMinorVersionUpgrade in the DescribeReplicationGroups API ([e694134](https://github.com/aws/aws-sdk-js-v3/commit/e694134054db9c206aec4b6e6fa26b8ab807d6eb))
* **client-kms:** Added support for the SM2 KeySpec in China Partition Regions ([250fd19](https://github.com/aws/aws-sdk-js-v3/commit/250fd19d65a83b3d183ced9863bf6aba8f1fb698))
* **client-mediapackage:** This release adds "IncludeIframeOnlyStream" for Dash endpoints and increases the number of supported video and audio encryption presets for Speke v2 ([1af0368](https://github.com/aws/aws-sdk-js-v3/commit/1af0368f117fcf8c5bc43659183aec028b2ecc8e))
* **client-sagemaker:** Amazon SageMaker Edge Manager provides lightweight model deployment feature to deploy machine learning models on requested devices. ([3f89139](https://github.com/aws/aws-sdk-js-v3/commit/3f891393cfe5002f24317a340f88ce0e1df7aa44))
* **client-sso-admin:** AWS SSO now supports attaching customer managed policies and a permissions boundary to your permission sets. This release adds new API operations to manage and view the customer managed policies and the permissions boundary for a given permission set. ([e65c9b2](https://github.com/aws/aws-sdk-js-v3/commit/e65c9b2e1203291d68d0fdb11d1b467d83e37cf5))
* **clients:** update client endpoints as of 2022-07-18 ([87e9e29](https://github.com/aws/aws-sdk-js-v3/commit/87e9e2970f5fd24742968462e3944235c5e08380))





# [3.131.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.130.0...v3.131.0) (2022-07-15)


### Features

* **client-drs:** Changed existing APIs to allow choosing a dynamic volume type for replicating volumes, to reduce costs for customers. ([91e2660](https://github.com/aws/aws-sdk-js-v3/commit/91e2660097d923991b080d9318fd03019c3a8048))
* **client-evidently:** This release adds support for the new segmentation feature. ([a60dfd8](https://github.com/aws/aws-sdk-js-v3/commit/a60dfd85abe9cb21c6e19ca2aaf189c09804d83b))
* **client-wafv2:** This SDK release provide customers ability to add sensitivity level for WAF SQLI Match Statements. ([2b37799](https://github.com/aws/aws-sdk-js-v3/commit/2b37799fd6fde067ffb5d9ab4db60b0a927f775d))
* **clients:** update client endpoints as of 2022-07-15 ([145ed3a](https://github.com/aws/aws-sdk-js-v3/commit/145ed3aeffd2c08bed0c7f92e5cc17a253c14c40))
* **xhr-http-handler:** add XMLHttpRequest http handler to use with lib-storage Upload ([#3798](https://github.com/aws/aws-sdk-js-v3/issues/3798)) ([7462b07](https://github.com/aws/aws-sdk-js-v3/commit/7462b0731e54a29290b9b4c359a7f5581a3c78f9))





# [3.130.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.129.0...v3.130.0) (2022-07-14)


### Bug Fixes

* **codegen:** fix error code parsing when it's a number ([#3371](https://github.com/aws/aws-sdk-js-v3/issues/3371)) ([c2d8522](https://github.com/aws/aws-sdk-js-v3/commit/c2d852279a3d23958521a6ceb4f4c642b0cb1848))
* **signature-v4:** allow empty string as canonical header value ([#3797](https://github.com/aws/aws-sdk-js-v3/issues/3797)) ([0dd60ed](https://github.com/aws/aws-sdk-js-v3/commit/0dd60edd14699712e0634da5469ac61dade90279))


### Features

* **client-athena:** This release updates data types that contain either QueryExecutionId, NamedQueryId or ExpectedBucketOwner. Ids must be between 1 and 128 characters and contain only non-whitespace characters. ExpectedBucketOwner must be 12-digit string. ([a22c328](https://github.com/aws/aws-sdk-js-v3/commit/a22c32898c1fca2b4dc5eb3d897c3560f578f524))
* **client-codeartifact:** This release introduces Package Origin Controls, a mechanism used to counteract Dependency Confusion attacks. Adds two new APIs, PutPackageOriginConfiguration and DescribePackage, and updates the ListPackage, DescribePackageVersion and ListPackageVersion APIs in support of the feature. ([ac9d765](https://github.com/aws/aws-sdk-js-v3/commit/ac9d765c47c18635c9e98922ba9a04eb785ca0fa))
* **client-config-service:** Update ResourceType enum with values for Route53Resolver, Batch, DMS, Workspaces, Stepfunctions, SageMaker, ElasticLoadBalancingV2, MSK types ([58d673a](https://github.com/aws/aws-sdk-js-v3/commit/58d673a3dad680d9f11644c60c2d7c4f9e6ee5b4))
* **client-ec2:** This release adds flow logs for Transit Gateway to  allow customers to gain deeper visibility and insights into network traffic through their Transit Gateways. ([57b3f71](https://github.com/aws/aws-sdk-js-v3/commit/57b3f71b0466f9b6048ce4368a4d7f75dc38bab8))
* **client-fms:** Adds support for strict ordering in stateful rule groups in Network Firewall policies. ([b6f9a9f](https://github.com/aws/aws-sdk-js-v3/commit/b6f9a9f9e59ce61790e5832dd60e43fe0b622c67))
* **client-glue:** This release adds an additional worker type for Glue Streaming jobs. ([f47fa13](https://github.com/aws/aws-sdk-js-v3/commit/f47fa1366d13d05326cc44a2de29968f5ed555e0))
* **client-inspector2:** This release adds support for Inspector V2 scan configurations through the get and update configuration APIs. Currently this allows configuring ECR automated re-scan duration to lifetime or 180 days or 30 days. ([36bccb8](https://github.com/aws/aws-sdk-js-v3/commit/36bccb8557955688b1589fad74f5354b6e929a16))
* **client-kendra:** This release adds AccessControlConfigurations which allow you to redefine your document level access control without the need for content re-indexing. ([b1c43cf](https://github.com/aws/aws-sdk-js-v3/commit/b1c43cf3b7afdaa0816cceaba2538243536074b6))
* **client-nimble:** Amazon Nimble Studio adds support for IAM-based access to AWS resources for Nimble Studio components and custom studio components. Studio Component scripts use these roles on Nimble Studio workstation to mount filesystems, access S3 buckets, or other configured resources in the Studio's AWS account ([bae6c59](https://github.com/aws/aws-sdk-js-v3/commit/bae6c592854d1e806e074a214bc833b5cbe4c939))
* **client-outposts:** This release adds the ShipmentInformation and AssetInformationList fields to the GetOrder API response. ([cf80140](https://github.com/aws/aws-sdk-js-v3/commit/cf8014052790df08d75b5bbb57566f619081bb72))
* **client-sagemaker:** This release adds support for G5, P4d, and C6i instance types in Amazon SageMaker Inference and increases the number of hyperparameters that can be searched from 20 to 30 in Amazon SageMaker Automatic Model Tuning ([4d43eac](https://github.com/aws/aws-sdk-js-v3/commit/4d43eac453ff4e4b772ad4cc978e321eb64d38ee))
* **clients:** update client endpoints as of 2022-07-14 ([93c74f4](https://github.com/aws/aws-sdk-js-v3/commit/93c74f43be2841c5918e2e1ae7aee4671c7c05b6))





# [3.129.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.128.0...v3.129.0) (2022-07-13)


### Features

* **client-appconfig:** Adding Create, Get, Update, Delete, and List APIs for new two new resources: Extensions and ExtensionAssociations. ([c2d6378](https://github.com/aws/aws-sdk-js-v3/commit/c2d6378294250be09870dabdaa0c743abf5415af))
* **util-stream-browser:** provide handling utilities for browser stream  ([#3783](https://github.com/aws/aws-sdk-js-v3/issues/3783)) ([2255877](https://github.com/aws/aws-sdk-js-v3/commit/22558772713236a7d20f37ec158ceb39190a013f))
* **util-stream-node:** provide handling utilities for Node.js stream ([#3778](https://github.com/aws/aws-sdk-js-v3/issues/3778)) ([0ef4af6](https://github.com/aws/aws-sdk-js-v3/commit/0ef4af643a23d9580df511e60eff52f6dbe6d2ec))





# [3.128.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.127.0...v3.128.0) (2022-07-12)


### Bug Fixes

* **signature-v4:** getCanonicalHeaders ignores undefined header values ([#3789](https://github.com/aws/aws-sdk-js-v3/issues/3789)) ([78690d3](https://github.com/aws/aws-sdk-js-v3/commit/78690d3eb0e86b6752e6b3564c3c9f70cae385c1))


### Features

* **client-networkmanager:** This release adds general availability API support for AWS Cloud WAN. ([a02b73f](https://github.com/aws/aws-sdk-js-v3/commit/a02b73f392805801a305324265c920c45f2d66a0))
* **clients:** update client endpoints as of 2022-07-12 ([030a718](https://github.com/aws/aws-sdk-js-v3/commit/030a7188915a29d01ab48fc9538604dd1a94dc9c))





# [3.127.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.126.0...v3.127.0) (2022-07-11)


### Features

* **client-ec2:** Build, manage, and monitor a unified global network that connects resources running across your cloud and on-premises environments using the AWS Cloud WAN APIs. ([5105355](https://github.com/aws/aws-sdk-js-v3/commit/5105355828f8ca0d581309866f885d80b535f88b))
* **client-redshift:** This release adds a new --snapshot-arn field for describe-cluster-snapshots, describe-node-configuration-options, restore-from-cluster-snapshot, authorize-snapshot-acsess, and revoke-snapshot-acsess APIs. It allows customers to give a Redshift snapshot ARN or a Redshift Serverless ARN as input. ([be3a0a8](https://github.com/aws/aws-sdk-js-v3/commit/be3a0a8fa60485521f0b137f1faceb78b4fad2ee))
* **clients:** update client endpoints as of 2022-07-11 ([65a0485](https://github.com/aws/aws-sdk-js-v3/commit/65a0485cef3786eda9bc4d3186fd68c2dc84c809))
* **types:** add types to sdk stream utility mixin ([#3779](https://github.com/aws/aws-sdk-js-v3/issues/3779)) ([f311cab](https://github.com/aws/aws-sdk-js-v3/commit/f311cab406a16274dc2487dfe55c36b45a5811f5))





# [3.126.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.125.0...v3.126.0) (2022-07-08)


### Features

* **client-backup:** This release adds support for authentication using IAM user identity instead of passed IAM role, identified by excluding the IamRoleArn field in the StartRestoreJob API. This feature applies to only resource clients with a destructive restore nature (e.g. SAP HANA). ([2aea1bc](https://github.com/aws/aws-sdk-js-v3/commit/2aea1bc6939ac4d802b5d1366820311fcde141df))





# [3.125.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.124.0...v3.125.0) (2022-07-07)


### Features

* **client-chime-sdk-meetings:** Adds support for AppKeys and TenantIds in Amazon Chime SDK WebRTC sessions ([5d50be7](https://github.com/aws/aws-sdk-js-v3/commit/5d50be78006631dbc365d28aa84ec4465e40cd42))
* **client-database-migration-service:** New api to migrate event subscriptions to event bridge rules ([6ed4f9b](https://github.com/aws/aws-sdk-js-v3/commit/6ed4f9bba2f1cebc27a906f0194dab5c4c1e3bc4))
* **client-iot-wireless:** Adds 5 APIs: PutPositionConfiguration, GetPositionConfiguration, ListPositionConfigurations, UpdatePosition, GetPosition for the new Positioning Service feature which enables customers to configure solvers to calculate position of LoRaWAN devices, or specify position of LoRaWAN devices & gateways. ([92e8618](https://github.com/aws/aws-sdk-js-v3/commit/92e8618cf09419c36d8f56e92b8b6cc28a2a6118))
* **client-iot:** This release adds support to register a CA certificate without having to provide a verification certificate. This also allows multiple AWS accounts to register the same CA in the same region. ([3e13ee1](https://github.com/aws/aws-sdk-js-v3/commit/3e13ee15495a6eb983b41218f8af6c6fdc9f6f81))
* **client-sagemaker:** Heterogeneous clusters: the ability to launch training jobs with multiple instance types. This enables running component of the training job on the instance type that is most suitable for it. e.g. doing data processing and augmentation on CPU instances and neural network training on GPU instances ([0dd0bdd](https://github.com/aws/aws-sdk-js-v3/commit/0dd0bdd305133ee54d6ba3cd90d71efa78422ed4))





# [3.124.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.123.0...v3.124.0) (2022-07-06)


### Features

* **client-cloudformation:** My AWS Service (placeholder) - Add a new feature Account-level Targeting for StackSet operation ([2f877b3](https://github.com/aws/aws-sdk-js-v3/commit/2f877b37b001a249249ee16bcb3dcd0d835fb2fa))
* **client-synthetics:** This release introduces Group feature, which enables users to group cross-region canaries. ([5e37998](https://github.com/aws/aws-sdk-js-v3/commit/5e379989f0f5dcc87bb93a0c4577f2ea2879f9e7))
* **emr-containers:** set timestampeFormat for Date ([#3758](https://github.com/aws/aws-sdk-js-v3/issues/3758)) ([61df0f9](https://github.com/aws/aws-sdk-js-v3/commit/61df0f94b7f5924cbf63bc7fc75cb9d1d966f29d))





# [3.123.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.122.0...v3.123.0) (2022-07-05)


### Bug Fixes

* **client-appsync:** fix domainnames routes ([#3773](https://github.com/aws/aws-sdk-js-v3/issues/3773)) ([f1ce95e](https://github.com/aws/aws-sdk-js-v3/commit/f1ce95e40249a3c4b5150f38b6d54bceb054f5c3))


### Features

* **client-lex-models-v2:** This release introduces additional optional parameters "messageSelectionStrategy" to PromptSpecification, which enables the users to configure the bot to play messages in orderly manner. ([bd84018](https://github.com/aws/aws-sdk-js-v3/commit/bd84018fdb20d121821690e3d0886319a128e951))
* **client-quicksight:** This release allows customers to programmatically create QuickSight accounts with Enterprise and Enterprise + Q editions. It also releases allowlisting domains for embedding QuickSight dashboards at runtime through the embedding APIs. ([46052af](https://github.com/aws/aws-sdk-js-v3/commit/46052afea182dd2b22ee838d4080e216dd5a3adf))
* **client-rds:** Adds waiters support for DBCluster. ([a23a0d7](https://github.com/aws/aws-sdk-js-v3/commit/a23a0d7a979d2373b5b8ff6408ae38336fe5b175))
* **client-rolesanywhere:** IAM Roles Anywhere allows your workloads such as servers, containers, and applications to obtain temporary AWS credentials and use the same IAM roles and policies that you have configured for your AWS workloads to access AWS resources. ([c700486](https://github.com/aws/aws-sdk-js-v3/commit/c7004862f16a963679b3d83f15f6e05a855c83cd))
* **client-ssm-incidents:** Adds support for tagging incident-record on creation by providing incident tags in the template within a response-plan. ([3aff9aa](https://github.com/aws/aws-sdk-js-v3/commit/3aff9aa485fa3dd3d347e3bd212d6d0b12d6946d))
* **clients:** update client endpoints as of 2022-07-05 ([72f2a04](https://github.com/aws/aws-sdk-js-v3/commit/72f2a044ff046bba9f1d4a6a58e0ad718df6b9a2))





# [3.122.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.121.0...v3.122.0) (2022-07-01)


### Features

* **client-database-migration-service:** Added new features for AWS DMS version 3.4.7 that includes new endpoint settings for S3, OpenSearch, Postgres, SQLServer and Oracle. ([294fef4](https://github.com/aws/aws-sdk-js-v3/commit/294fef445137e6e345155fae2089ac3b4626fbae))





# [3.121.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.120.0...v3.121.0) (2022-06-30)


### Features

* **client-athena:** This feature introduces the API support for Athena's parameterized query and BatchGetPreparedStatement API. ([52a77f5](https://github.com/aws/aws-sdk-js-v3/commit/52a77f529a90406620037b7d3e02427582c39823))
* **client-customer-profiles:** This release adds the optional MinAllowedConfidenceScoreForMerging parameter to the CreateDomain, UpdateDomain, and GetAutoMergingPreview APIs in Customer Profiles. This parameter is used as a threshold to influence the profile auto-merging step of the Identity Resolution process. ([a5865d3](https://github.com/aws/aws-sdk-js-v3/commit/a5865d31f357eb762ccea2fd7cae0e2104e00cde))
* **client-emr:** This release adds support for the ExecutionRoleArn parameter in the AddJobFlowSteps and DescribeStep APIs. Customers can use ExecutionRoleArn to specify the IAM role used for each job they submit using the AddJobFlowSteps API. ([5232298](https://github.com/aws/aws-sdk-js-v3/commit/52322980a3ba87ccc12f19cc9780cf3300a8394d))
* **client-glue:** This release adds tag as an input of CreateDatabase ([64d9e9f](https://github.com/aws/aws-sdk-js-v3/commit/64d9e9f7091539b856fa3652eb2f8f8238c5115e))
* **client-kendra:** Amazon Kendra now provides a data source connector for alfresco ([104b8be](https://github.com/aws/aws-sdk-js-v3/commit/104b8bea02e626b2d80009b9a91deb712ef8bcd0))
* **client-mwaa:** Documentation updates for Amazon Managed Workflows for Apache Airflow. ([debff58](https://github.com/aws/aws-sdk-js-v3/commit/debff58fb3fb126e630f2e8526575307396bf206))
* **client-pricing:** Documentation update for GetProducts Response. ([8c5e287](https://github.com/aws/aws-sdk-js-v3/commit/8c5e2873190168ea2c1b06940e563716e18acd85))
* **client-wellarchitected:** Added support for UpdateGlobalSettings API. Added status filter to ListWorkloadShares and ListLensShares. ([5d6f4e6](https://github.com/aws/aws-sdk-js-v3/commit/5d6f4e6f1257b2a92f3a6aebd409126fb53d4750))
* **client-workmail:** This release adds support for managing user availability configurations in Amazon WorkMail. ([3e7e5cb](https://github.com/aws/aws-sdk-js-v3/commit/3e7e5cbabfcd6ba9b7064b87729c3d6c06ff500d))
* **clients:** fallback to status code for unmodeled errors ([#3752](https://github.com/aws/aws-sdk-js-v3/issues/3752)) ([49bcc4f](https://github.com/aws/aws-sdk-js-v3/commit/49bcc4f153e890e798a8e82fd5fc397b2dcc449f))
* **clients:** update client endpoints as of 2022-06-30 ([fe6a05a](https://github.com/aws/aws-sdk-js-v3/commit/fe6a05a556d9b3245a681b064898dcd7ee6ea4a1))





# [3.120.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.119.0...v3.120.0) (2022-06-29)


### Bug Fixes

* populate content-type header for all event messages ([#3760](https://github.com/aws/aws-sdk-js-v3/issues/3760)) ([4f3d41e](https://github.com/aws/aws-sdk-js-v3/commit/4f3d41e3d30207033487de947a461cbfe195767e))
* **s3-request-presigner:** not mutate client mw stack ([#3751](https://github.com/aws/aws-sdk-js-v3/issues/3751)) ([cbe8126](https://github.com/aws/aws-sdk-js-v3/commit/cbe81261dc0ff430442de9213ea8e1cd06d0cebf))


### Features

* **client-appstream:** Includes support for StreamingExperienceSettings in CreateStack and UpdateStack APIs ([76b0af1](https://github.com/aws/aws-sdk-js-v3/commit/76b0af11efff05e57bb97e5791bbb96962cbb0a5))
* **client-emr:** This release introduces additional optional parameter "Throughput" to VolumeSpecification to enable user to configure throughput for gp3 ebs volumes. ([e9259f0](https://github.com/aws/aws-sdk-js-v3/commit/e9259f0716864d860308226fd845a8abb18c36ab))
* **client-medialive:** This release adds support for automatic renewal of MediaLive reservations at the end of each reservation term. Automatic renewal is optional. This release also adds support for labelling accessibility-focused audio and caption tracks in HLS outputs. ([1737bf6](https://github.com/aws/aws-sdk-js-v3/commit/1737bf6183f15701b0edfa43606dd37b5f619430))
* **client-redshift-serverless:** Add new API operations for Amazon Redshift Serverless, a new way of using Amazon Redshift without needing to manually manage provisioned clusters. The new operations let you interact with Redshift Serverless resources, such as create snapshots, list VPC endpoints, delete resource policies, and more. ([ba28895](https://github.com/aws/aws-sdk-js-v3/commit/ba288953f91bc4f4764c71364ddc85bd5769f700))
* **client-sagemaker:** This release adds: UpdateFeatureGroup, UpdateFeatureMetadata, DescribeFeatureMetadata APIs; FeatureMetadata type in Search API; LastModifiedTime, LastUpdateStatus, OnlineStoreTotalSizeBytes in DescribeFeatureGroup API. ([74b38f9](https://github.com/aws/aws-sdk-js-v3/commit/74b38f9098b9aaccc40839997303062836253ac5))
* **client-translate:** Added ListLanguages API which can be used to list the languages supported by Translate. ([4ec076d](https://github.com/aws/aws-sdk-js-v3/commit/4ec076d3339948f276cb96ea9bfef6200a18793b))
* **clients:** update client endpoints as of 2022-06-29 ([b078874](https://github.com/aws/aws-sdk-js-v3/commit/b07887465adfa10a71ff222faf41c70054f51f6e))





# [3.119.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.118.1...v3.119.0) (2022-06-28)


### Features

* **client-datasync:** AWS DataSync now supports Amazon FSx for NetApp ONTAP locations. ([87a3aac](https://github.com/aws/aws-sdk-js-v3/commit/87a3aac3af7566b6e0fe02f15a77521813534a74))
* **client-ec2:** This release adds a new spread placement group to EC2 Placement Groups: host level spread, which spread instances between physical hosts, available to Outpost customers only. CreatePlacementGroup and DescribePlacementGroups APIs were updated with a new parameter: SpreadLevel to support this feature. ([89baffe](https://github.com/aws/aws-sdk-js-v3/commit/89baffe64c90d3cbc83222d3ce26e6f2fbe70ccb))
* **client-finspace-data:** Release new API GetExternalDataViewAccessDetails ([af6b52c](https://github.com/aws/aws-sdk-js-v3/commit/af6b52c6eb2e03187a4765d2ef731db258980472))
* **client-polly:** Add 4 new neural voices - Pedro (es-US), Liam (fr-CA), Daniel (de-DE) and Arthur (en-GB). ([6fbb85a](https://github.com/aws/aws-sdk-js-v3/commit/6fbb85a5eab8425275ff1fe467cab747a35607ef))
* **eventstream-codec:** add EventStreamCodec ([#3747](https://github.com/aws/aws-sdk-js-v3/issues/3747)) ([9a71e60](https://github.com/aws/aws-sdk-js-v3/commit/9a71e608f93c792d1a591c2a30506955c97f61da))





## [3.118.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.118.0...v3.118.1) (2022-06-27)


### Features

* **client-iot:** This release ease the restriction for the input of tag value to align with AWS standard, now instead of min length 1, we change it to min length 0. ([c6dabb2](https://github.com/aws/aws-sdk-js-v3/commit/c6dabb2a60a3888b986e79af730933005c0e8aa1))





# [3.118.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.117.0...v3.118.0) (2022-06-24)


### Bug Fixes

* **client-redshiftserverless:** remove redshift-serverless client ([#3733](https://github.com/aws/aws-sdk-js-v3/issues/3733)) ([0b69c9b](https://github.com/aws/aws-sdk-js-v3/commit/0b69c9b48ad1a78a47d3f029b290c57141ed3844))
* **signature-v4-crt:** bump aws-crt to 1.12.5 ([#3734](https://github.com/aws/aws-sdk-js-v3/issues/3734)) ([647d02e](https://github.com/aws/aws-sdk-js-v3/commit/647d02e9e3e7068828edf14372206fa926ae94dd))


### Features

* **client-glue:** This release enables the new ListCrawls API for viewing the AWS Glue Crawler run history. ([95c192f](https://github.com/aws/aws-sdk-js-v3/commit/95c192fbf1f6fe1dfa60696e0f82a5093ff7295c))





# [3.117.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.116.0...v3.117.0) (2022-06-23)


### Features

* **client-lookoutequipment:** This release adds visualizations to the scheduled inference results. Users will be able to see interference results, including diagnostic results from their running inference schedulers. ([d809dff](https://github.com/aws/aws-sdk-js-v3/commit/d809dff8ce56fda66244ff364ee0e3c6ed733e47))
* **client-mgn:** New and modified APIs for the Post-Migration Framework ([7af6954](https://github.com/aws/aws-sdk-js-v3/commit/7af69543f857d29eb89b3b4037c262ec6605d29d))
* **client-migration-hub-refactor-spaces:** This release adds the new API UpdateRoute that allows route to be updated to ACTIVE/INACTIVE state. In addition, CreateRoute API will now allow users to create route in ACTIVE/INACTIVE state. ([7cb6642](https://github.com/aws/aws-sdk-js-v3/commit/7cb66421811c0bbca5fbfd10d88e6e61cad620dd))
* **client-sagemaker:** SageMaker Ground Truth now supports Virtual Private Cloud. Customers can launch labeling jobs and access to their private workforce in VPC mode. ([d2cbd47](https://github.com/aws/aws-sdk-js-v3/commit/d2cbd47bdc957c39a1407176eb609f56f4978c99))





# [3.116.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.115.0...v3.116.0) (2022-06-22)


### Features

* **client-pricing:** This release introduces 1 update to the GetProducts API. The serviceCode attribute is now required when you use the GetProductsRequest. ([bdf3c9a](https://github.com/aws/aws-sdk-js-v3/commit/bdf3c9a8f500633688564e4bf4b82d36fd0e2e77))
* **client-transfer:** Until today, the service supported only RSA host keys and user keys. Now with this launch, Transfer Family has expanded the support for ECDSA and ED25519 host keys and user keys, enabling customers to support a broader set of clients by choosing RSA, ECDSA, and ED25519 host and user keys. ([9b215d2](https://github.com/aws/aws-sdk-js-v3/commit/9b215d2f8389738c0fb31dfebebbda255ef9b417))





# [3.115.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.114.0...v3.115.0) (2022-06-21)


### Features

* **client-ec2:** This release adds support for Private IP VPNs, a new feature allowing S2S VPN connections to use private ip addresses as the tunnel outside ip address over Direct Connect as transport. ([8f2eb0c](https://github.com/aws/aws-sdk-js-v3/commit/8f2eb0cff2321db7ee3623599d7173dfba9e3785))
* **client-wellarchitected:** Adds support for lens tagging, Adds support for multiple helpful-resource urls and multiple improvement-plan urls. ([7347da1](https://github.com/aws/aws-sdk-js-v3/commit/7347da1d60a5df588c7b9b6f6963eb3c6f886be4))





# [3.114.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.113.0...v3.114.0) (2022-06-20)


### Features

* **client-directory-service:** This release adds support for describing and updating AWS Managed Microsoft AD settings ([64f990a](https://github.com/aws/aws-sdk-js-v3/commit/64f990ab6be784ac46dd5d296c0c2e0227ea7a21))
* **client-outposts:** This release adds the AssetLocation structure to the ListAssets response. AssetLocation includes the RackElevation for an Asset. ([f24a55d](https://github.com/aws/aws-sdk-js-v3/commit/f24a55df1d36841f729bdf706cf527f87083e303))





# [3.113.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.112.0...v3.113.0) (2022-06-17)


### Bug Fixes

* **lib-storage:** repair package.json runtimeConfig path ([#3352](https://github.com/aws/aws-sdk-js-v3/issues/3352)) ([76ac9db](https://github.com/aws/aws-sdk-js-v3/commit/76ac9db16605eac185295662c9966109bb0d1519))


### Features

* **client-connect:** This release updates these APIs: UpdateInstanceAttribute, DescribeInstanceAttribute and ListInstanceAttributes. You can use it to programmatically enable/disable High volume outbound communications using attribute type HIGH_VOLUME_OUTBOUND on the specified Amazon Connect instance. ([71bbaca](https://github.com/aws/aws-sdk-js-v3/commit/71bbacaad576f27a8de70f485d3b8c3db6e83c90))
* **client-connectcampaigns:** Added Amazon Connect high volume outbound communications SDK. ([324a693](https://github.com/aws/aws-sdk-js-v3/commit/324a693bafc3fb532c5d28120a68f3402f8b446c))
* **clients:** update client endpoints as of 2022-06-17 ([0a49ba7](https://github.com/aws/aws-sdk-js-v3/commit/0a49ba7fdb730b21a7ee758bb5ca961d36e26a41))





# [3.112.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.111.0...v3.112.0) (2022-06-16)


### Features

* **client-redshift-data:** This release adds a new --workgroup-name field to operations that connect to an endpoint. Customers can now execute queries against their serverless workgroups. ([e92c230](https://github.com/aws/aws-sdk-js-v3/commit/e92c2304c7548ae9d4974b5998fada5fb788fce3))
* **client-redshiftserverless:** Add new API operations for Amazon Redshift Serverless, a new way of using Amazon Redshift without needing to manually manage provisioned clusters. The new operations let you interact with Redshift Serverless resources, such as create snapshots, list VPC endpoints, delete resource policies, and more. ([774e109](https://github.com/aws/aws-sdk-js-v3/commit/774e10911fb105702ea5293decd547ff3963754a))
* **client-securityhub:** Added Threats field for security findings. Added new resource details for ECS Container, ECS Task, RDS SecurityGroup, Kinesis Stream, EC2 TransitGateway, EFS AccessPoint, CloudFormation Stack, CloudWatch Alarm, VPC Peering Connection and WAF Rules ([6962140](https://github.com/aws/aws-sdk-js-v3/commit/69621406d3171b77eaffffd246598cd66eac159f))
* **clients:** update client endpoints as of 2022-06-16 ([f58e0e4](https://github.com/aws/aws-sdk-js-v3/commit/f58e0e431c4a093738469d4267d2e12738248214))





# [3.111.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.110.0...v3.111.0) (2022-06-15)


### Features

* **client-finspace-data:** This release adds a new set of APIs, GetPermissionGroup, DisassociateUserFromPermissionGroup, AssociateUserToPermissionGroup, ListPermissionGroupsByUser, ListUsersByPermissionGroup. ([d29cb21](https://github.com/aws/aws-sdk-js-v3/commit/d29cb2142c918c38de45b34c57effb96e6790a9d))
* **client-guardduty:** Adds finding fields available from GuardDuty Console. Adds FreeTrial related operations. Deprecates the use of various APIs related to Master Accounts and Replace them with Administrator Accounts. ([02083d6](https://github.com/aws/aws-sdk-js-v3/commit/02083d6015548389b612991bffa8234814f6437f))
* **client-service-catalog-appregistry:** This release adds a new API ListAttributeGroupsForApplication that returns associated attribute groups of an application. In addition, the UpdateApplication and UpdateAttributeGroup APIs will not allow users to update the 'Name' attribute. ([03773d1](https://github.com/aws/aws-sdk-js-v3/commit/03773d1bcb949f1472ebfb03dcf80c84599ef3f6))
* **client-workspaces:** Added new field "reason" to OperationNotSupportedException. Receiving this exception in the DeregisterWorkspaceDirectory API will now return a reason giving more context on the failure. ([3fb0a96](https://github.com/aws/aws-sdk-js-v3/commit/3fb0a96532ec46ca7cd8ba6c5232564a859abd4f))





# [3.110.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.109.0...v3.110.0) (2022-06-14)


### Bug Fixes

* **client-lex-runtime-v2:** serialize eventstream payload properly ([#3655](https://github.com/aws/aws-sdk-js-v3/issues/3655)) ([757f883](https://github.com/aws/aws-sdk-js-v3/commit/757f88331f78a29d976a97a7ed5dc4337a1aedfa))
* **shared-ini-file-loader:** update ini parsing ([#3682](https://github.com/aws/aws-sdk-js-v3/issues/3682)) ([9536104](https://github.com/aws/aws-sdk-js-v3/commit/95361044a5f2291389bd2886fb5dffe238ae6cdb))


### Features

* **client-budgets:** Add a budgets ThrottlingException. Update the CostFilters value pattern. ([3f98cfc](https://github.com/aws/aws-sdk-js-v3/commit/3f98cfcc9e1df215c877462f02c7d40ab763691b))
* **client-lookoutmetrics:** Adding filters to Alert and adding new UpdateAlert API. ([d52f9aa](https://github.com/aws/aws-sdk-js-v3/commit/d52f9aac9fe1d9508a51ac19d975f0bd5a78fdb7))
* **client-mediaconvert:** AWS Elemental MediaConvert SDK has added support for rules that constrain Automatic-ABR rendition selection when generating ABR package ladders. ([9c9825e](https://github.com/aws/aws-sdk-js-v3/commit/9c9825e38fd7acb00d82fb4d80921879d1b9205f))





# [3.109.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.108.1...v3.109.0) (2022-06-13)


### Bug Fixes

* **s3:** update endpoints for writeGetObjectResponse for object lambda ([#3662](https://github.com/aws/aws-sdk-js-v3/issues/3662)) ([bb9f18e](https://github.com/aws/aws-sdk-js-v3/commit/bb9f18edb6226b65b146d81be3b91cb3581bc3b3))


### Features

* **client-outposts:** This release adds API operations AWS uses to install Outpost servers. ([a04c290](https://github.com/aws/aws-sdk-js-v3/commit/a04c29088d100cd2e66c608d36afea52df60dc8f))





## [3.108.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.108.0...v3.108.1) (2022-06-10)


### Bug Fixes

* **client-redshift-serverless:** remove redshift-serverless client ([#3675](https://github.com/aws/aws-sdk-js-v3/issues/3675)) ([1d9b9e0](https://github.com/aws/aws-sdk-js-v3/commit/1d9b9e0b1df143acd4682da83b5841f7e5c98a0a))


### Features

* **clients:** update client endpoints as of 2022-06-10 ([7268a70](https://github.com/aws/aws-sdk-js-v3/commit/7268a7052364f5aaeb57f26be0695afea990aaae))





# [3.108.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.107.0...v3.108.0) (2022-06-09)


### Features

* **client-chime-sdk-meetings:** Adds support for live transcription in AWS GovCloud (US) Regions. ([e42639d](https://github.com/aws/aws-sdk-js-v3/commit/e42639d4c08bf730f1a41e26f5932571a57fa111))





# [3.107.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.106.0...v3.107.0) (2022-06-08)


### Bug Fixes

* **clients:** handle empty xml tags ([#3623](https://github.com/aws/aws-sdk-js-v3/issues/3623)) ([543a0ce](https://github.com/aws/aws-sdk-js-v3/commit/543a0ce13bebc6e8a5f4cc8e1bd4de67692d4034))
* **middleware-sdk-ec2:** use hostname from regionInfoProvider ([#3673](https://github.com/aws/aws-sdk-js-v3/issues/3673)) ([5103554](https://github.com/aws/aws-sdk-js-v3/commit/5103554ba12de4f9c648db9ea823551769d866d5))


### Features

* **client-database-migration-service:** This release adds DMS Fleet Advisor APIs and exposes functionality for DMS Fleet Advisor. It adds functionality to create and modify fleet advisor instances, and to collect and analyze information about the local data infrastructure. ([9d1b69c](https://github.com/aws/aws-sdk-js-v3/commit/9d1b69ce70c444cdade541393c18098cb978eec2))
* **client-m2:** AWS Mainframe Modernization service is a managed mainframe service and set of tools for planning, migrating, modernizing, and running mainframe workloads on AWS ([18cf697](https://github.com/aws/aws-sdk-js-v3/commit/18cf697710c1027b9a1e18b2dac69e2ed3498568))
* **client-neptune:** This release adds support for Neptune to be configured as a global database, with a primary DB cluster in one region, and up to five secondary DB clusters in other regions. ([fdf3a33](https://github.com/aws/aws-sdk-js-v3/commit/fdf3a33cc1d8d3da7958a3d851c2b50490226457))
* **client-redshift:** Adds new API GetClusterCredentialsWithIAM to return temporary credentials. ([3ae95d3](https://github.com/aws/aws-sdk-js-v3/commit/3ae95d39dec2991cf8740143d1976806df5464b9))
* **client-redshift-serverless:** Add new API operations for Amazon Redshift Serverless, a new way of using Amazon Redshift without needing to manually manage provisioned clusters. The new operations let you interact with Redshift Serverless resources, such as create snapshots, list VPC endpoints, delete resource policies, and more. ([16ec9ec](https://github.com/aws/aws-sdk-js-v3/commit/16ec9ec5712fa59980027b3e537787df9cf1fa84))
* **clients:** update client endpoints as of 2022-06-08 ([1148250](https://github.com/aws/aws-sdk-js-v3/commit/1148250ad9764dc03d061090a17ada6b52d8f07f))





# [3.106.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.105.0...v3.106.0) (2022-06-07)


### Features

* **client-auditmanager:** This release introduces 2 updates to the Audit Manager API. The roleType and roleArn attributes are now required when you use the CreateAssessment or UpdateAssessment operation. We also added a throttling exception to the RegisterAccount API operation. ([e2597d4](https://github.com/aws/aws-sdk-js-v3/commit/e2597d4b102e3e62cc0b1c11d38447846c283f38))
* **client-cost-explorer:** Added two new APIs to support cost allocation tags operations: ListCostAllocationTags, UpdateCostAllocationTagsStatus. ([25dcf34](https://github.com/aws/aws-sdk-js-v3/commit/25dcf34b880a3243b6ce58a75d35ec717ff305c7))
* **clients:** update client endpoints as of 2022-06-07 ([1718194](https://github.com/aws/aws-sdk-js-v3/commit/1718194ff61501e7e0febebc1043aff2ff137454))





# [3.105.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.104.0...v3.105.0) (2022-06-06)


### Features

* **client-chime-sdk-messaging:** This release adds support for searching channels by members via the SearchChannels API, removes required restrictions for Name and Mode in UpdateChannel API and enhances CreateChannel API by exposing member and moderator list as well as channel id as optional parameters. ([27f0d81](https://github.com/aws/aws-sdk-js-v3/commit/27f0d81adb822a529077714cd8aa5a28e80c3be4))
* **client-connect:** This release adds a new API, GetCurrentUserData, which returns real-time details about users' current activity. ([47e52de](https://github.com/aws/aws-sdk-js-v3/commit/47e52de9185916548d1e2b023b8c09e3b160467b))
* **clients:** support recursion detection in Lambda ([#3654](https://github.com/aws/aws-sdk-js-v3/issues/3654)) ([ecfe46e](https://github.com/aws/aws-sdk-js-v3/commit/ecfe46ea1fd8b6e3812b75b3dc6c03554fb4b3fa))
* **clients:** update client endpoints as of 2022-06-06 ([ef24fbc](https://github.com/aws/aws-sdk-js-v3/commit/ef24fbc7d9e21573070143a91d09782a67aa35a9))





# [3.104.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.103.0...v3.104.0) (2022-06-02)


### Features

* **client-application-insights:** Provide Account Level onboarding support through CFN/CLI ([b70eff4](https://github.com/aws/aws-sdk-js-v3/commit/b70eff4007513c6a8dc126e52ff7173328c44b02))
* **client-connect:** This release adds the following features: 1) New APIs to manage (create, list, update) task template resources, 2) Updates to startTaskContact API to support task templates, and 3) new TransferContact API to programmatically transfer in-progress tasks via a contact flow. ([e10c8ed](https://github.com/aws/aws-sdk-js-v3/commit/e10c8edbdff1c5c94d95951ed3bd175123f0bd0d))
* **client-kendra:** Amazon Kendra now provides a data source connector for GitHub. For more information, see https://docs.aws.amazon.com/kendra/latest/dg/data-source-github.html ([66f927c](https://github.com/aws/aws-sdk-js-v3/commit/66f927cd5665d2cef62f1d3d250ddfc02f9844cf))
* **client-proton:** Add new "Components" API to enable users to Create, Delete and Update AWS Proton components. ([fd798b0](https://github.com/aws/aws-sdk-js-v3/commit/fd798b01265985c19da3e985703df5d1edc83320))
* **client-voice-id:** Added a new attribute ServerSideEncryptionUpdateDetails to Domain and DomainSummary. ([4edcad0](https://github.com/aws/aws-sdk-js-v3/commit/4edcad07a6f026e448f572cf98aef01881f97695))





# [3.103.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.102.0...v3.103.0) (2022-06-01)


### Features

* **client-backup-gateway:** Adds GetGateway and UpdateGatewaySoftwareNow API and adds hypervisor name to UpdateHypervisor API ([4910403](https://github.com/aws/aws-sdk-js-v3/commit/4910403f98c96600cf9a7532714f2e6f940b842c))
* **client-chime-sdk-meetings:** Adds support for centrally controlling each participant's ability to send and receive audio, video and screen share within a WebRTC session.  Attendee capabilities can be specified when the attendee is created and updated during the session with the new BatchUpdateAttendeeCapabilitiesExcept API. ([a938290](https://github.com/aws/aws-sdk-js-v3/commit/a938290d1a2010f0e1ee1ee5f35ce95c80883820))
* **client-forecast:** Added Format field to Import and Export APIs in Amazon Forecast. Added TimeSeriesSelector to Create Forecast API. ([ae5629e](https://github.com/aws/aws-sdk-js-v3/commit/ae5629ecace193ebc198db07681b158be48dbefa))
* **client-route-53:** Add new APIs to support Route 53 IP Based Routing ([d277dd7](https://github.com/aws/aws-sdk-js-v3/commit/d277dd727758767240696db1784b5126823b9f22))





# [3.102.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.101.0...v3.102.0) (2022-05-31)


### Bug Fixes

* **codegen:** check javascript property validity for property access ([#3649](https://github.com/aws/aws-sdk-js-v3/issues/3649)) ([31e72ac](https://github.com/aws/aws-sdk-js-v3/commit/31e72ac6063fdb3393c2d5042b8964238ce1b23a))


### Features

* **client-cognito-identity-provider:** Amazon Cognito now supports IP Address propagation for all unauthenticated APIs (e.g. SignUp, ForgotPassword). ([d285512](https://github.com/aws/aws-sdk-js-v3/commit/d28551296728adfae6dfbf6d0ea8d6c903f4a059))
* **client-drs:** Changed existing APIs and added new APIs to accommodate using multiple AWS accounts with AWS Elastic Disaster Recovery. ([9e66058](https://github.com/aws/aws-sdk-js-v3/commit/9e66058a6bb3ed9b5c2b1a5e10a619099e8a8674))
* **client-iotsitewise:** This release adds the following new optional field to the IoT SiteWise asset resource: assetDescription. ([6efc758](https://github.com/aws/aws-sdk-js-v3/commit/6efc758715ef357bf835fccbeb62bba66b399ee6))
* **client-lookoutmetrics:** Adding backtest mode to detectors using the Cloudwatch data source. ([973cdd0](https://github.com/aws/aws-sdk-js-v3/commit/973cdd03db3b6ad2a86b8f7b55555e1d7da53891))
* **client-sagemaker:** Amazon SageMaker Notebook Instances now support Jupyter Lab 3. ([b363ebe](https://github.com/aws/aws-sdk-js-v3/commit/b363ebe52c0b5a547cf9e54211ded9ead8853514))
* **client-transcribe:** Amazon Transcribe now supports automatic language identification for multi-lingual audio in batch mode. ([2c3c3cd](https://github.com/aws/aws-sdk-js-v3/commit/2c3c3cd1eb5556b1580d920f104531eef560aa7b))
* **clients:** update client endpoints as of 2022-05-31 ([3503795](https://github.com/aws/aws-sdk-js-v3/commit/35037950a2d3c4a3ec62deed1303cbcd47725d05))





# [3.101.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.100.0...v3.101.0) (2022-05-27)


### Features

* **client-appflow:** Adding the following features/changes: Parquet output that preserves typing from the source connector, Failed executions threshold before deactivation for scheduled flows, increasing max size of access and refresh token from 2048 to 4096 ([0762754](https://github.com/aws/aws-sdk-js-v3/commit/07627544b4981b3a4fdd76fa6101db4883a322dc))
* **client-datasync:** AWS DataSync now supports TLS encryption in transit, file system policies and access points for EFS locations. ([691df14](https://github.com/aws/aws-sdk-js-v3/commit/691df1466cae728f02e375cd879f784cb422eb8e))
* **client-emr-serverless:** This release adds support for Amazon EMR Serverless, a serverless runtime environment that simplifies running analytics applications using the latest open source frameworks such as Apache Spark and Apache Hive. ([b056f11](https://github.com/aws/aws-sdk-js-v3/commit/b056f11a0e3b3c75af2233c9e2611e5eab56487b))
* **client-sagemaker:** Amazon SageMaker Notebook Instances now allows configuration of Instance Metadata Service version and Amazon SageMaker Studio now supports G5 instance types. ([cf58e1e](https://github.com/aws/aws-sdk-js-v3/commit/cf58e1e13c48afa2ec4cd068a07fe2295f138667))
* **clients:** update client endpoints as of 2022-05-27 ([088c46d](https://github.com/aws/aws-sdk-js-v3/commit/088c46de9587226aea621d78d58c647d61db3ec7))





# [3.100.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.99.0...v3.100.0) (2022-05-26)


### Features

* **client-ec2:** C7g instances, powered by the latest generation AWS Graviton3 processors, provide the best price performance in Amazon EC2 for compute-intensive workloads. ([58efcc5](https://github.com/aws/aws-sdk-js-v3/commit/58efcc5c87d9de1ebf8c939e46e3f75f8ebd58f1))
* **client-emr-serverless:** This release adds support for Amazon EMR Serverless, a serverless runtime environment that simplifies running analytics applications using the latest open source frameworks such as Apache Spark and Apache Hive. ([8c98a71](https://github.com/aws/aws-sdk-js-v3/commit/8c98a71ab97d00f46477773dc76608c99d06ead4))
* **client-forecast:** Introduced a new field in Auto Predictor as Time Alignment Boundary. It helps in aligning the timestamps generated during Forecast exports ([4ce40b0](https://github.com/aws/aws-sdk-js-v3/commit/4ce40b0ec779ed829df6e9bfb5d269b1ec36c754))
* **client-lightsail:** Amazon Lightsail now supports the ability to configure a Lightsail Container Service to pull images from Amazon ECR private repositories in your account. ([a8ba37c](https://github.com/aws/aws-sdk-js-v3/commit/a8ba37cc3ea0deb0aec4a696a504eb7876fbabf4))
* **clients:** update client endpoints as of 2022-05-26 ([16da1e7](https://github.com/aws/aws-sdk-js-v3/commit/16da1e70317b68335a5344682dda08a8fbdb721c))





# [3.99.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.98.0...v3.99.0) (2022-05-25)


### Features

* **client-cloudformation:** Add a new parameter statusReason to DescribeStackSetOperation output for additional details ([9051437](https://github.com/aws/aws-sdk-js-v3/commit/90514375503b4df2e6709371728c46cfa8042492))
* **client-fsx:** This release adds root squash support to FSx for Lustre to restrict root level access from clients by mapping root users to a less-privileged user/group with limited permissions. ([920eafe](https://github.com/aws/aws-sdk-js-v3/commit/920eafe0c8ab69eebc0c79569ee72ad1a9fdaa8a))
* **client-lookoutmetrics:** Adding AthenaSourceConfig for MetricSet APIs to support Athena as a data source. ([41aa257](https://github.com/aws/aws-sdk-js-v3/commit/41aa25712afe684d39ebb85dcb7b2d1eef56588e))
* **client-sagemaker:** Amazon SageMaker Autopilot adds support for manually selecting features from the input dataset using the CreateAutoMLJob API. ([212b3e3](https://github.com/aws/aws-sdk-js-v3/commit/212b3e3b89cc40ee302cc15a23a9e1c6446cac7b))
* **client-voice-id:** VoiceID will now automatically expire Speakers if they haven't been accessed for Enrollment, Re-enrollment or Successful Auth for three years. The Speaker APIs now return a "LastAccessedAt" time for Speakers, and the EvaluateSession API returns "SPEAKER_EXPIRED" Auth Decision for EXPIRED Speakers. ([7bd32c7](https://github.com/aws/aws-sdk-js-v3/commit/7bd32c786bae60d657f57a037a156714c4cde2ed))
* **clients:** update client endpoints as of 2022-05-25 ([272235a](https://github.com/aws/aws-sdk-js-v3/commit/272235a5420791924da9e9e9390fb4a7de21f75b))





# [3.98.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.97.0...v3.98.0) (2022-05-24)


### Bug Fixes

* **rds-signer:** update package.json with latest values ([#3632](https://github.com/aws/aws-sdk-js-v3/issues/3632)) ([953fd97](https://github.com/aws/aws-sdk-js-v3/commit/953fd9757b521d80688465c34ae28e45118c2e72))


### Features

* **client-cognito-identity-provider:** Amazon Cognito now supports requiring attribute verification (ex. email and phone number) before update. ([6ee832d](https://github.com/aws/aws-sdk-js-v3/commit/6ee832d8dcc3c3b856c35cd5b887d595ffeed6cf))
* **client-ec2:** Stop Protection feature enables customers to protect their instances from accidental stop actions. ([097a389](https://github.com/aws/aws-sdk-js-v3/commit/097a38940e73dfbe0f732680e6c5360488ebc799))
* **client-mediaconvert:** AWS Elemental MediaConvert SDK has added support for rules that constrain Automatic-ABR rendition selection when generating ABR package ladders. ([0035863](https://github.com/aws/aws-sdk-js-v3/commit/003586367de048238a02492009924a5900091593))
* **client-networkmanager:** This release adds Multi Account API support for a TGW Global Network, to enable and disable AWSServiceAccess with AwsOrganizations for Network Manager service and dependency CloudFormation StackSets service. ([2b041ea](https://github.com/aws/aws-sdk-js-v3/commit/2b041eabeac3913deadbc83a45530c79cc1bab15))
* **clients:** update client endpoints as of 2022-05-24 ([92f1e36](https://github.com/aws/aws-sdk-js-v3/commit/92f1e361a665aa008bdcc282eae02b5ed319feea))
* **rds-signer:** add RDS Signer ([#1823](https://github.com/aws/aws-sdk-js-v3/issues/1823)) ([#3084](https://github.com/aws/aws-sdk-js-v3/issues/3084)) ([bec7eee](https://github.com/aws/aws-sdk-js-v3/commit/bec7eeeb75c2e888e9af321c86a2c12c98da028e))





# [3.97.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.96.0...v3.97.0) (2022-05-23)


### Features

* **client-elasticache:** Added support for encryption in transit for Memcached clusters. Customers can now launch Memcached cluster with encryption in transit enabled when using Memcached version 1.6.12 or later. ([6f1e857](https://github.com/aws/aws-sdk-js-v3/commit/6f1e8570f8e80ef414292d5ee57d54b0ab216fae))
* **client-forecast:** New APIs for Monitor that help you understand how your predictors perform over time. ([74fa9b8](https://github.com/aws/aws-sdk-js-v3/commit/74fa9b8ae3ae68cc953ccfc018ac65c612bd601e))
* **client-personalize:** Adding modelMetrics as part of DescribeRecommender API response for Personalize. ([16f4208](https://github.com/aws/aws-sdk-js-v3/commit/16f42083d78a7680400c8d6f8586fdb2142adc70))
* **clients:** update client endpoints as of 2022-05-23 ([aff7bd4](https://github.com/aws/aws-sdk-js-v3/commit/aff7bd4fa32fcb52a70dc1f78c2d9853ba54b2ee))
* Standardize issue template for discussions ([#3506](https://github.com/aws/aws-sdk-js-v3/issues/3506)) ([ac8f021](https://github.com/aws/aws-sdk-js-v3/commit/ac8f021ec991a4e6edb3b4a6fcc31507b5851aed))





# [3.96.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.95.0...v3.96.0) (2022-05-20)


### Features

* **client-comprehend:** Comprehend releases 14 new entity types for DetectPiiEntities and ContainsPiiEntities APIs. ([598f334](https://github.com/aws/aws-sdk-js-v3/commit/598f334cf84fd67910d5f558c983ca989d20afcc))





# [3.95.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.94.0...v3.95.0) (2022-05-19)


### Features

* **client-gamesparks:** This release adds an optional DeploymentResult field in the responses of GetStageDeploymentIntegrationTests and ListStageDeploymentIntegrationTests APIs. ([e31958e](https://github.com/aws/aws-sdk-js-v3/commit/e31958e7de1ba7e8c263538f29bba13e5111aa98))
* **client-lookoutmetrics:** In this release we added SnsFormat to SNSConfiguration to support human readable alert. ([c28ed70](https://github.com/aws/aws-sdk-js-v3/commit/c28ed70682b3fe69db89d2b5e4f48bb58b7fd7f0))
* **clients:** update client endpoints as of 2022-05-19 ([3cccb5d](https://github.com/aws/aws-sdk-js-v3/commit/3cccb5df60434c7356284c54673859892e6bffda))





# [3.94.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.93.0...v3.94.0) (2022-05-18)


### Bug Fixes

* **node-http-handler:** handle close event in H2 from server side ([#3619](https://github.com/aws/aws-sdk-js-v3/issues/3619)) ([c528661](https://github.com/aws/aws-sdk-js-v3/commit/c5286610dc0e5b51873d68243defbacb5ea5631c))


### Features

* **client-app-mesh:** This release updates the existing Create and Update APIs for meshes and virtual nodes by adding a new IP preference field. This new IP preference field can be used to control the IP versions being used with the mesh and allows for IPv6 support within App Mesh. ([0f427f3](https://github.com/aws/aws-sdk-js-v3/commit/0f427f3a187d49c10e82272a8905056a3857f646))
* **client-greengrassv2:** This release adds the new DeleteDeployment API operation that you can use to delete deployment resources. This release also adds support for discontinued AWS-provided components, so AWS can communicate when a component has any issues that you should consider before you deploy it. ([fe02b18](https://github.com/aws/aws-sdk-js-v3/commit/fe02b188ba05be51d8edf649c9df4edfdc3da288))
* **client-iot-events-data:** Introducing new API for deleting detectors: BatchDeleteDetector. ([4320da0](https://github.com/aws/aws-sdk-js-v3/commit/4320da0e68b45d338064c1a4457e50dff48665df))
* **client-quicksight:** API UpdatePublicSharingSettings enables IAM admins to enable/disable account level setting for public access of dashboards. When enabled, owners/co-owners for dashboards can enable public access on their dashboards. These dashboards can only be accessed through share link or embedding. ([389837a](https://github.com/aws/aws-sdk-js-v3/commit/389837a2e6670d39c719d23ac4c9dc1877903f6f))
* **client-transfer:** AWS Transfer Family now supports SetStat server configuration option, which provides the ability to ignore SetStat command issued by file transfer clients, enabling customers to upload files without any errors. ([59da2d5](https://github.com/aws/aws-sdk-js-v3/commit/59da2d5599801b2f38b2deded19d526c20218680))
* **clients:** update client endpoints as of 2022-05-18 ([b70babd](https://github.com/aws/aws-sdk-js-v3/commit/b70babd918d15267ae21b0bd7d888fe2f1ed8a79))





# [3.93.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.92.0...v3.93.0) (2022-05-17)


### Features

* **client-glue:** This release adds a new optional parameter called codeGenNodeConfiguration to CRUD job APIs that allows users to manage visual jobs via APIs. The updated CreateJob and UpdateJob will create jobs that can be viewed in Glue Studio as a visual graph. GetJob can be used to get codeGenNodeConfiguration. ([61ab9ac](https://github.com/aws/aws-sdk-js-v3/commit/61ab9ac9889a127c57302155b0f881fef19b02e4))





# [3.92.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.91.0...v3.92.0) (2022-05-16)


### Features

* **client-application-discovery-service:** Add Migration Evaluator Collector details to the GetDiscoverySummary API response ([8271508](https://github.com/aws/aws-sdk-js-v3/commit/8271508e00dde7402a8f7ac21fa03aa4e33818ef))
* **client-cloudfront:** Introduced a new error (TooLongCSPInResponseHeadersPolicy) that is returned when the value of the Content-Security-Policy header in a response headers policy exceeds the maximum allowed length. ([f2875d3](https://github.com/aws/aws-sdk-js-v3/commit/f2875d385ab39fa91ebbe5813286168fdcb66076))
* **client-resiliencehub:** In this release, we are introducing support for Amazon Elastic Container Service, Amazon Route 53, AWS Elastic Disaster Recovery, AWS Backup in addition to the existing supported Services.  This release also supports Terraform file input from S3 and scheduling daily assessments ([01ff495](https://github.com/aws/aws-sdk-js-v3/commit/01ff495befc39b9d9c5c6b4d8a40ad28c7d982ed))
* **client-workspaces-web:** Amazon WorkSpaces Web now supports Administrator timeout control ([f946a33](https://github.com/aws/aws-sdk-js-v3/commit/f946a334267b2393b4dcfc370ae3eeeebf8bdce7))





# [3.91.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.90.0...v3.91.0) (2022-05-13)


### Features

* **client-grafana:** This release adds APIs for creating and deleting API keys in an Amazon Managed Grafana workspace. ([091f6df](https://github.com/aws/aws-sdk-js-v3/commit/091f6df529630a1203d53954b5ae79803df84e2b))





# [3.90.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.89.0...v3.90.0) (2022-05-12)


### Features

* **client-ec2:** This release introduces a target type Gateway Load Balancer Endpoint for mirrored traffic. Customers can now specify GatewayLoadBalancerEndpoint option during the creation of a traffic mirror target. ([ed7b520](https://github.com/aws/aws-sdk-js-v3/commit/ed7b5208c5072a12a20e7080e84ac9e3091b6f99))
* **client-kendra:** Amazon Kendra now provides a data source connector for Jira. For more information, see https://docs.aws.amazon.com/kendra/latest/dg/data-source-jira.html ([37c9777](https://github.com/aws/aws-sdk-js-v3/commit/37c9777fa7b6cd71a024f399fe99016d3960a719))
* **client-lambda:** Lambda releases NodeJs 16 managed runtime to be available in all commercial regions. ([22a47c1](https://github.com/aws/aws-sdk-js-v3/commit/22a47c18cda82d7703f0c1fb473214dc4de83322))
* **client-lightsail:** This release adds support to include inactive database bundles in the response of the GetRelationalDatabaseBundles request. ([2ed03c4](https://github.com/aws/aws-sdk-js-v3/commit/2ed03c4609739967b0bb191639cae41ff01a168c))
* **client-ssm-incidents:** Adding support for dynamic SSM Runbook parameter values. Updating validation pattern for engagements. Adding ConflictException to UpdateReplicationSet API contract. ([67fcba1](https://github.com/aws/aws-sdk-js-v3/commit/67fcba1df63f50c80a3bc11015a8d2d73cf85084))
* **client-workspaces:** Increased the character limit of the login message from 600 to 850 characters. ([796d6f4](https://github.com/aws/aws-sdk-js-v3/commit/796d6f4f239ebe5c9ccbabf081917725d58d1444))
* Add Cloudfront package to sign URLs and cookies ([#3461](https://github.com/aws/aws-sdk-js-v3/issues/3461)) ([f109ed5](https://github.com/aws/aws-sdk-js-v3/commit/f109ed5e985563256aff83a45f19a148465e978e))





# [3.89.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.88.0...v3.89.0) (2022-05-11)


### Features

* **client-ec2:** This release updates AWS PrivateLink APIs to support IPv6 for PrivateLink Services and Endpoints of type 'Interface'. ([afd213b](https://github.com/aws/aws-sdk-js-v3/commit/afd213b43be257f4192f12b197c98f9870bd5a06))





# [3.88.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.87.0...v3.88.0) (2022-05-10)


### Features

* **client-ec2:** Added support for using NitroTPM and UEFI Secure Boot on EC2 instances. ([2ad1bbf](https://github.com/aws/aws-sdk-js-v3/commit/2ad1bbf5783e1f469cf2253609cda57b40f8325e))
* **client-eks:** Adds BOTTLEROCKET_ARM_64_NVIDIA and BOTTLEROCKET_x86_64_NVIDIA AMI types to EKS managed nodegroups ([e914c59](https://github.com/aws/aws-sdk-js-v3/commit/e914c59c3638c4b05868e1f74ba4fa634a727f5c))
* **client-emr:** This release updates the Amazon EMR ModifyInstanceGroups API to support "MERGE" type cluster reconfiguration. Also, added the ability to specify a particular Amazon Linux release for all nodes in a cluster launch request. ([7945cec](https://github.com/aws/aws-sdk-js-v3/commit/7945ceca18590d350d620c3cc55b7d1f13dd1e59))
* **clients:** http2 handler accept parameters from default mode provider ([#3580](https://github.com/aws/aws-sdk-js-v3/issues/3580)) ([930c904](https://github.com/aws/aws-sdk-js-v3/commit/930c90457859935fcd3257e835263f14595ec765))





# [3.87.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.86.0...v3.87.0) (2022-05-09)


### Features

* **client-cloudcontrol:** SDK release for Cloud Control API to include paginators for Python SDK. ([49661ab](https://github.com/aws/aws-sdk-js-v3/commit/49661abc86d1a50c71bc3c9dd9f3591711030ad0))
* **client-evidently:** Add detail message inside GetExperimentResults API response to indicate experiment result availability ([872386c](https://github.com/aws/aws-sdk-js-v3/commit/872386c39aeca35d659f8760d448a3aff9a991fc))
* **clients:** update client endpoints as of 2022-05-09 ([aec9a19](https://github.com/aws/aws-sdk-js-v3/commit/aec9a19f5f7ab25fd4837f212b91c2326b39b79d))
* **credential-providers:** expose node.js default credential provider chain ([#3588](https://github.com/aws/aws-sdk-js-v3/issues/3588)) ([51aaffc](https://github.com/aws/aws-sdk-js-v3/commit/51aaffc37838e403b5934132bfe2c277a28c3ea5))





# [3.86.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.85.0...v3.86.0) (2022-05-06)


### Bug Fixes

* **lib-storage:** add missing return keys ([#2700](https://github.com/aws/aws-sdk-js-v3/issues/2700)) ([cbab94e](https://github.com/aws/aws-sdk-js-v3/commit/cbab94e901aec4650ab9e0eb19a4515e44d4ba62))
* **middleware-sdk-s3:** improve error message on stream upload ([#3571](https://github.com/aws/aws-sdk-js-v3/issues/3571)) ([c0ed833](https://github.com/aws/aws-sdk-js-v3/commit/c0ed83347f571b3f5d1e41dc91c172abafb44b7b))


### Features

* **client-ec2:** Add new state values for IPAMs, IPAM Scopes, and IPAM Pools. ([6c6525c](https://github.com/aws/aws-sdk-js-v3/commit/6c6525cf6f4f7bd129bb202a1b338af01dc5e57f))
* **client-location:** Amazon Location Service now includes a MaxResults parameter for ListGeofences requests. ([5c0e234](https://github.com/aws/aws-sdk-js-v3/commit/5c0e234f03c9ea3748229dd87ca8fed349b36ea3))
* **client-mediapackage:** This release adds Dvb Dash 2014 as an available profile option for Dash Origin Endpoints. ([7f9f845](https://github.com/aws/aws-sdk-js-v3/commit/7f9f845ff78df7d741eff68c6257c82265ee90c4))
* **client-redshift:** Introduces new field 'LoadSampleData' in CreateCluster operation. Customers can now specify 'LoadSampleData' option during creation of a cluster, which results in loading of sample data in the cluster that is created. ([9b91388](https://github.com/aws/aws-sdk-js-v3/commit/9b913886571cba3f680deab3dc8cc9a23a21cb95))
* **clients:** update client endpoints as of 2022-05-06 ([79ad41b](https://github.com/aws/aws-sdk-js-v3/commit/79ad41b313273283c91f9c1358b0d1dd7b8686c1))





# [3.85.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.84.0...v3.85.0) (2022-05-05)


### Features

* **client-datasync:** AWS DataSync now supports a new ObjectTags Task API option that can be used to control whether Object Tags are transferred. ([dfc58ea](https://github.com/aws/aws-sdk-js-v3/commit/dfc58ea4732b78fb464876a05439123ae69bce20))
* **client-ec2:** Amazon EC2 I4i instances are powered by 3rd generation Intel Xeon Scalable processors and feature up to 30 TB of local AWS Nitro SSD storage ([1aefead](https://github.com/aws/aws-sdk-js-v3/commit/1aefead30f40900f31c31d8b8afb95ce8a1aeda2))
* **client-iot:** AWS IoT Jobs now allows you to create up to 100,000 active continuous and snapshot jobs by using concurrency control. ([6506e14](https://github.com/aws/aws-sdk-js-v3/commit/6506e14ba608ae3ee0a892b7d494250f92bbf3fc))
* **client-kendra:** AWS Kendra now supports hierarchical facets for a query. For more information, see https://docs.aws.amazon.com/kendra/latest/dg/filtering.html ([d1a2c61](https://github.com/aws/aws-sdk-js-v3/commit/d1a2c61cca0122412de7c69a35260c370e74bc36))
* **clients:** update client endpoints as of 2022-05-05 ([3e002c4](https://github.com/aws/aws-sdk-js-v3/commit/3e002c4424644ad8f676842b925e68b26966b96b))
* **codegen:** add codegen indicator comment to all generated files ([#3592](https://github.com/aws/aws-sdk-js-v3/issues/3592)) ([567a530](https://github.com/aws/aws-sdk-js-v3/commit/567a5304232fcc1f9db3fd3df545054de8336b4b))
* **smithy-client:** update client defaults provider ([92a5c30](https://github.com/aws/aws-sdk-js-v3/commit/92a5c303da3558d1802ad5242599cfea74953c4f))





# [3.84.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.83.0...v3.84.0) (2022-05-04)


### Features

* **client-backup:** Adds support to 2 new filters about job complete time for 3 list jobs APIs in AWS Backup ([164cdf7](https://github.com/aws/aws-sdk-js-v3/commit/164cdf71890150f74c87ee570787332fc07252ed))
* **client-iotsecuretunneling:** This release introduces a new API RotateTunnelAccessToken that allow revoking the existing tokens and generate new tokens ([d77322a](https://github.com/aws/aws-sdk-js-v3/commit/d77322a3d86a528f7af55c7d048f50d8a78766d2))
* **client-ssm:** This release adds the TargetMaps parameter in SSM State Manager API. ([f0b9bd4](https://github.com/aws/aws-sdk-js-v3/commit/f0b9bd497bcf5dff7f2bbd75c3bdcbee2ba1f9e0))
* **clients:** update client endpoints as of 2022-05-04 ([699f5ad](https://github.com/aws/aws-sdk-js-v3/commit/699f5ad82febbc5312752f08002e1b9540b91fe0))





# [3.83.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.82.0...v3.83.0) (2022-05-03)


### Features

* **client-ec2:** Adds support for allocating Dedicated Hosts on AWS  Outposts. The AllocateHosts API now accepts an OutpostArn request  parameter, and the DescribeHosts API now includes an OutpostArn response parameter. ([75a68fd](https://github.com/aws/aws-sdk-js-v3/commit/75a68fd0fa8a44060c46771f323083d9e25c17f3))
* **client-kinesis-video:** Add support for multiple image feature related APIs for configuring image generation and notification of a video stream. Add "GET_IMAGES" to the list of supported API names for the GetDataEndpoint API. ([9dfe418](https://github.com/aws/aws-sdk-js-v3/commit/9dfe41850fa304dc8f570f961983ccc1a34321a6))
* **client-kinesis-video-archived-media:** Add support for GetImages API  for retrieving images from a video stream ([a775394](https://github.com/aws/aws-sdk-js-v3/commit/a7753942b4a4d2d76a094a2253da537a34462cd7))
* **client-sagemaker:** SageMaker Autopilot adds new metrics for all candidate models generated by Autopilot experiments; RStudio on SageMaker now allows users to bring your own development environment in a custom image. ([417ad38](https://github.com/aws/aws-sdk-js-v3/commit/417ad38d2bd50f7cd38485f296a5593c46217d30))
* **clients:** update client endpoints as of 2022-05-03 ([4a1e12d](https://github.com/aws/aws-sdk-js-v3/commit/4a1e12d0c055ed6f8122ae4ce8a0fd781c71e814))





# [3.82.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.81.0...v3.82.0) (2022-05-02)


### Bug Fixes

* **client-kinesis:** disable Kinesis ResourceNotFoundException test ([#3584](https://github.com/aws/aws-sdk-js-v3/issues/3584)) ([aeb63b3](https://github.com/aws/aws-sdk-js-v3/commit/aeb63b3c6df9e594031c22376cf2c8a3b6c4c237))


### Features

* **client-organizations:** This release adds the INVALID_PAYMENT_INSTRUMENT as a fail reason and an error message. ([00e2222](https://github.com/aws/aws-sdk-js-v3/commit/00e22229adff429913d23f77eebd75e30e0478e2))
* **client-outposts:** This release adds a new API called ListAssets to the Outposts SDK, which lists the hardware assets in an Outpost. ([e04ca4d](https://github.com/aws/aws-sdk-js-v3/commit/e04ca4d26cbef61789ec754bf86e2b0dfc97d56b))
* **client-synthetics:** CloudWatch Synthetics has introduced a new feature to provide customers with an option to delete the underlying resources that Synthetics canary creates when the user chooses to delete the canary. ([329a23a](https://github.com/aws/aws-sdk-js-v3/commit/329a23aee12a01b78612fa67fcc100f4bca1f0fa))
* **clients:** update client endpoints as of 2022-05-02 ([e550cec](https://github.com/aws/aws-sdk-js-v3/commit/e550cec66ed8fc4c0f93faf7e8fc3a9ebaccff1d))
* **smithy-client:** update client defaults provider ([02d4564](https://github.com/aws/aws-sdk-js-v3/commit/02d45649bb0400495b3c8de418c792e0e136fbdf))





# [3.81.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.80.0...v3.81.0) (2022-04-29)


### Features

* **client-codeguru-reviewer:** Amazon CodeGuru Reviewer now supports suppressing recommendations from being generated on specific files and directories. ([0aabfad](https://github.com/aws/aws-sdk-js-v3/commit/0aabfad35c348e5b5c4aa2c93827990ca1f9688b))
* **client-mediaconvert:** AWS Elemental MediaConvert SDK nows supports creation of Dolby Vision profile 8.1, the ability to generate black frames of video, and introduces audio-only DASH and CMAF support. ([ec8aea0](https://github.com/aws/aws-sdk-js-v3/commit/ec8aea08bedcead82d905ace58cc73d40026e6e8))
* **client-rds:** Feature - Adds support for Internet Protocol Version 6 (IPv6) on RDS database instances. ([6224806](https://github.com/aws/aws-sdk-js-v3/commit/6224806fb2d3d104a947c7cfb9a930fb65bf4132))
* **client-ssm:** Update the StartChangeRequestExecution, adding TargetMaps to the Runbook parameter ([1a4fe40](https://github.com/aws/aws-sdk-js-v3/commit/1a4fe402dd33b685b9a7c8d6e4fa080871283f1a))
* **client-wafv2:** You can now inspect all request headers and all cookies. You can now specify how to handle oversize body contents in your rules that inspect the body. ([5bea879](https://github.com/aws/aws-sdk-js-v3/commit/5bea87975d7b9ae9371a6e958956ef9efbd30f10))
* **credential-provider-imds:** adjust static stability expiration to 5-10 mins ([#3575](https://github.com/aws/aws-sdk-js-v3/issues/3575)) ([0a12a1e](https://github.com/aws/aws-sdk-js-v3/commit/0a12a1e2ef88037d4c4a456f6be65afb57c796ab))





# [3.80.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.79.0...v3.80.0) (2022-04-28)


### Features

* **client-braket:** This release enables Braket Hybrid Jobs with Embedded Simulators to have multiple instances. ([2de9086](https://github.com/aws/aws-sdk-js-v3/commit/2de908637ea560d2abb9b99c0ca5f4cd19dabc12))
* **client-connect:** This release introduces an API for changing the current agent status of a user in Connect. ([9a4c9f8](https://github.com/aws/aws-sdk-js-v3/commit/9a4c9f807eb4f2607e4f2c084e5e9aa42cc3f106))
* **client-ec2:** This release adds support to query the public key and creation date of EC2 Key Pairs. Additionally, the format (pem or ppk) of a key pair can be specified when creating a new key pair. ([61e9e39](https://github.com/aws/aws-sdk-js-v3/commit/61e9e39be52d91cca705d0386a119bd62ab748c8))
* **client-network-firewall:** AWS Network Firewall adds support for stateful threat signature AWS managed rule groups. ([790c085](https://github.com/aws/aws-sdk-js-v3/commit/790c085ed85d1154cffc6aced1f32ed9f6e3e66b))





# [3.79.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.78.0...v3.79.0) (2022-04-27)


### Features

* **client-chime-sdk-media-pipelines:** For Amazon Chime SDK meetings, the Amazon Chime Media Pipelines SDK allows builders to capture audio, video, and content share streams. You can also capture meeting events, live transcripts, and data messages. The pipelines save the artifacts to an Amazon S3 bucket that you designate. ([12667a7](https://github.com/aws/aws-sdk-js-v3/commit/12667a7d181d7402f250da778e68e817286e32a8))
* **client-cloudtrail:** Increases the retention period maximum to 2557 days. Deprecates unused fields of the ListEventDataStores API response. Updates documentation. ([13baee3](https://github.com/aws/aws-sdk-js-v3/commit/13baee38c049a4934b390f5a49c1feb8d55b652b))
* **client-iot-wireless:** Add list support for event configurations, allow to get and update event configurations by resource type, support LoRaWAN events; Make NetworkAnalyzerConfiguration as a resource, add List, Create, Delete API support; Add FCntStart attribute support for ABP WirelessDevice. ([12fb21d](https://github.com/aws/aws-sdk-js-v3/commit/12fb21db84e42021601e462beb87cf8702db3539))
* **client-lookoutequipment:** This release adds the following new features: 1) Introduces an option for automatic schema creation 2) Now allows for Ingestion of data containing most common errors and allows automatic data cleaning 3) Introduces new API ListSensorStatistics that gives further information about the ingested data ([f35b0f3](https://github.com/aws/aws-sdk-js-v3/commit/f35b0f31b7cdbff7276da2ad6098895f3f0e22a6))
* **client-rekognition:** This release adds support to configure stream-processor resources for label detections on streaming-videos. UpateStreamProcessor API is also launched with this release, which could be used to update an existing stream-processor. ([f0564dc](https://github.com/aws/aws-sdk-js-v3/commit/f0564dc3bc21b968b86fec7a25cb56f75b89793b))
* **client-sagemaker:** Amazon SageMaker Autopilot adds support for custom validation dataset and validation ratio through the CreateAutoMLJob and DescribeAutoMLJob APIs. ([a13c9a0](https://github.com/aws/aws-sdk-js-v3/commit/a13c9a0cbd0be631d39e75939086f17da24bbb82))





# [3.78.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.77.0...v3.78.0) (2022-04-26)


### Features

* **client-cloudfront:** CloudFront now supports the Server-Timing header in HTTP responses sent from CloudFront. You can use this header to view metrics that help you gain insights about the behavior and performance of CloudFront. To use this header, enable it in a response headers policy. ([c70378d](https://github.com/aws/aws-sdk-js-v3/commit/c70378d3f9d8b97618cc7cf6ab6d54d074c8a970))
* **client-ivschat:** Adds new APIs for IVS Chat, a feature for building interactive chat experiences alongside an IVS broadcast. ([1ee3b39](https://github.com/aws/aws-sdk-js-v3/commit/1ee3b39ac8983e9437f15eea1bd03a6baf4afabc))
* **client-lightsail:** This release adds support for Lightsail load balancer HTTP to HTTPS redirect and TLS policy configuration. ([6bfdeba](https://github.com/aws/aws-sdk-js-v3/commit/6bfdeba122da641fc5c4e5db34731250ae0b6059))
* **client-network-firewall:** AWS Network Firewall now enables customers to use a customer managed AWS KMS key for the encryption of their firewall resources. ([ba3e251](https://github.com/aws/aws-sdk-js-v3/commit/ba3e251ad993f3af46a182143ebe392dc20becab))
* **client-sagemaker:** SageMaker Inference Recommender now accepts customer KMS key ID for encryption of endpoints and compilation outputs created during inference recommendation. ([85a8b9d](https://github.com/aws/aws-sdk-js-v3/commit/85a8b9d3f99c22f32ea92d019cbfc76cd73f02e5))
* **types:** add pagination stopOnSameToken option ([#3524](https://github.com/aws/aws-sdk-js-v3/issues/3524)) ([9bf73e8](https://github.com/aws/aws-sdk-js-v3/commit/9bf73e81b8d9be9f12c72cbefbe26c502d1873c6))





# [3.77.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.76.0...v3.77.0) (2022-04-25)


### Features

* **client-connect:** This release adds SearchUsers API which can be used to search for users with a Connect Instance ([15544b5](https://github.com/aws/aws-sdk-js-v3/commit/15544b5f4fbfe03a32a590aa0a7d6145e1c50998))
* **client-mq:** This release adds the CRITICAL_ACTION_REQUIRED broker state and the ActionRequired API property. CRITICAL_ACTION_REQUIRED informs you when your broker is degraded. ActionRequired provides you with a code which you can use to find instructions in the Developer Guide on how to resolve the issue. ([0abb527](https://github.com/aws/aws-sdk-js-v3/commit/0abb5271bc2c7656c2cb66c7c97aa123a10266ca))
* **client-rds-data:** Support to receive SQL query results in the form of a simplified JSON string. This enables developers using the new JSON string format to more easily convert it to an object using popular JSON string parsing libraries. ([7b173c3](https://github.com/aws/aws-sdk-js-v3/commit/7b173c3414e96ffb0f155b7deeb8c70295cc0f45))
* **client-securityhub:** Security Hub now lets you opt-out of auto-enabling the defaults standards (CIS and FSBP) in accounts that are auto-enabled with Security Hub via Security Hub's integration with AWS Organizations. ([08a57e7](https://github.com/aws/aws-sdk-js-v3/commit/08a57e768229dae5671d1a9c216e33377be6c573))





# [3.76.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.75.0...v3.76.0) (2022-04-22)


### Bug Fixes

* **node-http-handler:** http2 lets node exit ([#3541](https://github.com/aws/aws-sdk-js-v3/issues/3541)) ([7480667](https://github.com/aws/aws-sdk-js-v3/commit/74806672bcd462dae51197294f3160f32f867b62))
* **util-dynamodb:** allow marshall function to handle more input types ([#3539](https://github.com/aws/aws-sdk-js-v3/issues/3539)) ([a5fa267](https://github.com/aws/aws-sdk-js-v3/commit/a5fa26783c7d061e2f32b985fdcf371487efaff4))


### Features

* **client-chime-sdk-meetings:** Include additional exceptions types. ([89b90ef](https://github.com/aws/aws-sdk-js-v3/commit/89b90ef9527faef3b2ec72f36d0ab4637244a5fa))
* **client-ec2:** Adds support for waiters that automatically poll for a deleted NAT Gateway until it reaches the deleted state. ([047c131](https://github.com/aws/aws-sdk-js-v3/commit/047c13158e4f43b53dd1525e028888907026a278))





# [3.75.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.74.0...v3.75.0) (2022-04-21)


### Features

* **client-glue:** This release adds APIs to create, read, delete, list, and batch read of Glue custom entity types ([546dab6](https://github.com/aws/aws-sdk-js-v3/commit/546dab6995d14c3fbdc960a0131aab435dbe4188))
* **client-iotsitewise:** This release adds 3 new batch data query APIs : BatchGetAssetPropertyValue, BatchGetAssetPropertyValueHistory and BatchGetAssetPropertyAggregates ([f07f481](https://github.com/aws/aws-sdk-js-v3/commit/f07f48100a30d0450eab0b08e7a87f7e58f34e52))
* **client-iottwinmaker:** General availability (GA) for AWS IoT TwinMaker. For more information, see https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/Welcome.html ([1103688](https://github.com/aws/aws-sdk-js-v3/commit/110368884c53331c9a15d6af9b57697aa282fe84))
* **client-lookoutmetrics:** Added DetectMetricSetConfig API for detecting configuration required for creating metric set from provided S3 data source. ([902a074](https://github.com/aws/aws-sdk-js-v3/commit/902a074ea9ae938eaa06b0dc157f78741e2cb82a))
* **client-mediatailor:** This release introduces tiered channels and adds support for live sources. Customers using a STANDARD channel can now create programs using live sources. ([75fac5e](https://github.com/aws/aws-sdk-js-v3/commit/75fac5e8a6789fd78f26f97e336b1a3df340ed33))
* **client-storage-gateway:** This release adds support for minimum of 5 character length virtual tape barcodes. ([808b04f](https://github.com/aws/aws-sdk-js-v3/commit/808b04f70c60206a97b6bfbebda208181fd0a85b))
* **client-wisdom:** This release updates the GetRecommendations API to include a trigger event list for classifying and grouping recommendations. ([6f1e5c3](https://github.com/aws/aws-sdk-js-v3/commit/6f1e5c3419678763f13a68bc71ec722a399ae2d9))





# [3.74.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.73.0...v3.74.0) (2022-04-20)


### Bug Fixes

* **node-http-handler:** resolve config provider only once per NodeHttpHandler instance ([#3545](https://github.com/aws/aws-sdk-js-v3/issues/3545)) ([8ffd6b2](https://github.com/aws/aws-sdk-js-v3/commit/8ffd6b2e3e488f9827a98c970cd6901e2a3fbe93))


### Features

* **client-connect:** This release adds APIs to search, claim, release, list, update, and describe phone numbers. You can also use them to associate and disassociate contact flows to phone numbers. ([78e0c59](https://github.com/aws/aws-sdk-js-v3/commit/78e0c59d115eaaf1f9bc22c67cd1e3b53ae68272))
* **client-macie2:** Sensitive data findings in Amazon Macie now indicate how Macie found the sensitive data that produced a finding (originType). ([cad1178](https://github.com/aws/aws-sdk-js-v3/commit/cad117897981d70479eb737b1c854ee5c332a994))
* **client-mgn:** Removed required annotation from input fields in Describe operations requests. Added quotaValue to ServiceQuotaExceededException ([ee4defd](https://github.com/aws/aws-sdk-js-v3/commit/ee4defdb9c6cc74419b819c143bbdf4f383383c8))
* **client-rds:** Added a new cluster-level attribute to set the capacity range for Aurora Serverless v2 instances. ([fd985ae](https://github.com/aws/aws-sdk-js-v3/commit/fd985aeb119dc51a433ee216340510d704331eb7))
* **clients:** update client endpoints as of 2022-04-20 ([7781e4e](https://github.com/aws/aws-sdk-js-v3/commit/7781e4e9d7a501a90f55e8dbe3da1452c5168670))





# [3.73.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.72.0...v3.73.0) (2022-04-19)


### Features

* **client-auto-scaling:** EC2 Auto Scaling now adds default instance warm-up times for all scaling activities, health check replacements, and other replacement events in the Auto Scaling instance lifecycle. ([b97e526](https://github.com/aws/aws-sdk-js-v3/commit/b97e526b4aef8e65f99f031497efefd9e071f88b))
* **client-kendra:** Amazon Kendra now provides a data source connector for Quip. For more information, see https://docs.aws.amazon.com/kendra/latest/dg/data-source-quip.html ([d1aebb8](https://github.com/aws/aws-sdk-js-v3/commit/d1aebb88223102ec2ce417cc44cb3c5d571cc6ae))
* **client-kms:** Adds support for KMS keys and APIs that generate and verify HMAC codes ([90a9a16](https://github.com/aws/aws-sdk-js-v3/commit/90a9a16314deb5df692167e002fcdbb3f60025c2))
* **client-personalize:** Adding StartRecommender and StopRecommender APIs for Personalize. ([67d79bf](https://github.com/aws/aws-sdk-js-v3/commit/67d79bf3c08a969e4768ee1c879188905a722699))
* **client-polly:** Amazon Polly adds new Austrian German voice - Hannah. Hannah is available as Neural voice only. ([ae5a8f2](https://github.com/aws/aws-sdk-js-v3/commit/ae5a8f26e819935b07a9149b90ca59c91ac5c2c4))
* **client-redshift:** Introduces new fields for LogDestinationType and LogExports on EnableLogging requests and Enable/Disable/DescribeLogging responses. Customers can now select CloudWatch Logs as a destination for their Audit Logs. ([a39c581](https://github.com/aws/aws-sdk-js-v3/commit/a39c5810839ff12e228c33fcca897386d6b7bf8b))
* **client-ssm:** Added offset support for specifying the number of days to wait after the date and time specified by a CRON expression when creating SSM association. ([e8b6d98](https://github.com/aws/aws-sdk-js-v3/commit/e8b6d9840c9163373a387547d9fcd45164d136fd))
* **client-textract:** This release adds support for specifying and extracting information from documents using the Queries feature within Analyze Document API ([584f346](https://github.com/aws/aws-sdk-js-v3/commit/584f3463663dcdec6122e0c2128a4e9d7d866f46))
* **client-worklink:** Amazon WorkLink is no longer supported. This will be removed in a future version of the SDK. ([047ace0](https://github.com/aws/aws-sdk-js-v3/commit/047ace0ac8213c8756db3f7a7aabdf07cc25768e))
* **clients:** update client endpoints as of 2022-04-19 ([eb1fa11](https://github.com/aws/aws-sdk-js-v3/commit/eb1fa113162a80784805fe976339af9575b50263))





# [3.72.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.71.0...v3.72.0) (2022-04-15)


### Features

* **client-athena:** This release adds subfields, ErrorMessage, Retryable, to the AthenaError response object in the GetQueryExecution API when a query fails. ([905ab58](https://github.com/aws/aws-sdk-js-v3/commit/905ab589eb3cb490c61b0158494e4d2c47857039))
* **client-lightsail:** This release adds support to describe the synchronization status of the account-level block public access feature for your Amazon Lightsail buckets. ([4850e32](https://github.com/aws/aws-sdk-js-v3/commit/4850e32ab3b5e58dd4d66eb2d0ccd14b1503ef10))
* **client-rds:** Removes Amazon RDS on VMware with the deletion of APIs related to Custom Availability Zones and Media installation ([2a9f8c3](https://github.com/aws/aws-sdk-js-v3/commit/2a9f8c3e4f7d82a08dd6e797181645d07ed87825))





# [3.71.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.70.0...v3.71.0) (2022-04-14)


### Features

* **client-appflow:** Enables users to pass custom token URL parameters for Oauth2 authentication during create connector profile ([fc1c8ac](https://github.com/aws/aws-sdk-js-v3/commit/fc1c8ac67dc1386914d16433f972881676c11c64))
* **client-appstream:** Includes updates for create and update fleet APIs to manage the session scripts locations for Elastic fleets. ([e52c79d](https://github.com/aws/aws-sdk-js-v3/commit/e52c79d9000e8a9794f979c4048316dd739f71fd))
* **client-batch:** Enables configuration updates for compute environments with BEST_FIT_PROGRESSIVE and SPOT_CAPACITY_OPTIMIZED allocation strategies. ([f042910](https://github.com/aws/aws-sdk-js-v3/commit/f042910e837f25d81f8c941c5ee8f94a3c10b884))
* **client-glue:** Auto Scaling for Glue version 3.0 and later jobs to dynamically scale compute resources. This SDK change provides customers with the auto-scaled DPU usage ([f8edcd3](https://github.com/aws/aws-sdk-js-v3/commit/f8edcd39b72ee84af81ad4af1c27c6b5ed0b3e5f))
* **clients:** update client endpoints as of 2022-04-14 ([582ebd6](https://github.com/aws/aws-sdk-js-v3/commit/582ebd69e02aa014b961147dcb93781fb3d6d19c))





# [3.70.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.69.0...v3.70.0) (2022-04-13)


### Features

* **client-cloudwatch:** Adds support for additional statistics in CloudWatch Metric Streams. ([58e3a94](https://github.com/aws/aws-sdk-js-v3/commit/58e3a94179ee1a06e05138408b64cc96514b0e6e))
* **client-fsx:** This release adds support for deploying FSx for ONTAP file systems in a single Availability Zone. ([2f160df](https://github.com/aws/aws-sdk-js-v3/commit/2f160df5f6c82b9750ca386e88a8dd664e8b7ffc))





# [3.69.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.68.0...v3.69.0) (2022-04-12)


### Features

* **client-devops-guru:** This release adds new APIs DeleteInsight to deletes the insight along with the associated anomalies, events and recommendations. ([3dc7bfe](https://github.com/aws/aws-sdk-js-v3/commit/3dc7bfebbec642c1008191c00c4a3791665d33b9))
* **client-ec2:** X2idn and X2iedn instances are powered by 3rd generation Intel Xeon Scalable processors with an all-core turbo frequency up to 3.5 GHzAmazon EC2. C6a instances are powered by 3rd generation AMD EPYC processors. ([57c38e8](https://github.com/aws/aws-sdk-js-v3/commit/57c38e8466cfe494da95fa3964967ab8272e6152))
* **client-efs:** Amazon EFS adds support for a ThrottlingException when using the CreateAccessPoint API if the account is nearing the AccessPoint limit(120). ([848941d](https://github.com/aws/aws-sdk-js-v3/commit/848941d3dc0639cfc0f8dca4589ed371947306e1))
* **client-iottwinmaker:** This release adds the following new features: 1) ListEntities API now supports search using ExternalId. 2) BatchPutPropertyValue and GetPropertyValueHistory API now allows users to represent time in sub-second level precisions. ([f000752](https://github.com/aws/aws-sdk-js-v3/commit/f0007527263b955c0e0af12ca2372b00caa40961))
* **clients:** update client endpoints as of 2022-04-12 ([7924dc7](https://github.com/aws/aws-sdk-js-v3/commit/7924dc761026faed00dcca22afe6a42371f5fa8a))





# [3.68.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.67.0...v3.68.0) (2022-04-11)


### Features

* **client-amplifyuibuilder:** In this release, we have added the ability to bind events to component level actions. ([b7a8349](https://github.com/aws/aws-sdk-js-v3/commit/b7a83498370892c2eaa56c7757d22a53b16b8162))
* **client-apprunner:** This release adds tracing for App Runner services with X-Ray using AWS Distro for OpenTelemetry. New APIs: CreateObservabilityConfiguration, DescribeObservabilityConfiguration, ListObservabilityConfigurations, and DeleteObservabilityConfiguration. Updated APIs: CreateService and UpdateService. ([9ca1250](https://github.com/aws/aws-sdk-js-v3/commit/9ca12509acb68fee28553b1ba40135875f1c063b))
* **client-workspaces:** Added API support that allows customers to create GPU-enabled WorkSpaces using EC2 G4dn instances. ([6c11084](https://github.com/aws/aws-sdk-js-v3/commit/6c110847bc757ecaa9c6a968c7d529bf7fa8087a))
* **clients:** update client endpoints as of 2022-04-11 ([dccb5cb](https://github.com/aws/aws-sdk-js-v3/commit/dccb5cbabd70115fdc08e1238ed3a8c2d96e3dc1))





# [3.67.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.66.0...v3.67.0) (2022-04-08)


### Features

* **client-mediaconvert:** AWS Elemental MediaConvert SDK has added support for the pass-through of WebVTT styling to WebVTT outputs, pass-through of KLV metadata to supported formats, and improved filter support for processing 444/RGB content. ([d49135a](https://github.com/aws/aws-sdk-js-v3/commit/d49135a6cb3e625afa608a31de8119ef8cc72c76))
* **client-mediapackage-vod:** This release adds ScteMarkersSource as an available field for Dash Packaging Configurations. When set to MANIFEST, MediaPackage will source the SCTE-35 markers from the manifest. When set to SEGMENTS, MediaPackage will source the SCTE-35 markers from the segments. ([fc43d06](https://github.com/aws/aws-sdk-js-v3/commit/fc43d06a17b13401d4b4ccb3968e40aa1455b8d8))
* **client-wafv2:** Add a new CurrentDefaultVersion field to ListAvailableManagedRuleGroupVersions API response; add a new VersioningSupported boolean to each ManagedRuleGroup returned from ListAvailableManagedRuleGroups API response. ([07f9765](https://github.com/aws/aws-sdk-js-v3/commit/07f9765e25fb60aea6a42c0ed9fdbf79d028b118))
* **clients:** update client endpoints as of 2022-04-08 ([ad3734a](https://github.com/aws/aws-sdk-js-v3/commit/ad3734a4213558b53cdeb35aeed7e6c7cde0e5c5))





# [3.66.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.65.0...v3.66.0) (2022-04-07)


### Features

* **client-pi:** Adds support for DocumentDB to the Performance Insights API. ([#3520](https://github.com/aws/aws-sdk-js-v3/issues/3520)) ([4aaf58a](https://github.com/aws/aws-sdk-js-v3/commit/4aaf58aa983f1c30430e5ce57cb47a36837c590b))
* **client-fsx:** Provide customers more visibility into file system status by adding new "Misconfigured Unavailable" status for Amazon FSx for Windows File Server. ([#3520](https://github.com/aws/aws-sdk-js-v3/issues/3520)) ([4aaf58a](https://github.com/aws/aws-sdk-js-v3/commit/4aaf58aa983f1c30430e5ce57cb47a36837c590b))
* **client-docdb:** Added support to enable/disable performance insights when creating or modifying db instances ([#3520](https://github.com/aws/aws-sdk-js-v3/issues/3520)) ([4aaf58a](https://github.com/aws/aws-sdk-js-v3/commit/4aaf58aa983f1c30430e5ce57cb47a36837c590b))
* **client-personalize:** This release provides tagging support in AWS Personalize. ([#3520](https://github.com/aws/aws-sdk-js-v3/issues/3520)) ([4aaf58a](https://github.com/aws/aws-sdk-js-v3/commit/4aaf58aa983f1c30430e5ce57cb47a36837c590b))
* **client-sagemaker:** Amazon Sagemaker Notebook Instances now supports G5 instance types ([#3520](https://github.com/aws/aws-sdk-js-v3/issues/3520)) ([4aaf58a](https://github.com/aws/aws-sdk-js-v3/commit/4aaf58aa983f1c30430e5ce57cb47a36837c590b))
* **client-eventbridge:** Adds new EventBridge Endpoint resources for disaster recovery, multi-region failover, and cross-region replication capabilities to help you build resilient event-driven applications. ([#3520](https://github.com/aws/aws-sdk-js-v3/issues/3520)) ([4aaf58a](https://github.com/aws/aws-sdk-js-v3/commit/4aaf58aa983f1c30430e5ce57cb47a36837c590b))
* **signature-v4-multi-region:** support multi-region sigv4a signer ([#3518](https://github.com/aws/aws-sdk-js-v3/issues/3518)) ([16aa220](https://github.com/aws/aws-sdk-js-v3/commit/16aa22042c92b33c702f775b87e830fb767e479c))





# [3.65.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.64.0...v3.65.0) (2022-04-06)


### Features

* **client-config-service:** Add resourceType enums for AWS::EMR::SecurityConfiguration and AWS::SageMaker::CodeRepository ([19e9658](https://github.com/aws/aws-sdk-js-v3/commit/19e96583b3e2463799dccb9415aa0a1e47515224))
* **client-kendra:** Amazon Kendra now provides a data source connector for Box. For more information, see https://docs.aws.amazon.com/kendra/latest/dg/data-source-box.html ([23658e5](https://github.com/aws/aws-sdk-js-v3/commit/23658e58933ed49de16a4ddbe52e3f920b084404))
* **client-lambda:** This release adds new APIs for creating and managing Lambda Function URLs and adds a new FunctionUrlAuthType parameter to the AddPermission API. Customers can use Function URLs to create built-in HTTPS endpoints on their functions. ([aeba101](https://github.com/aws/aws-sdk-js-v3/commit/aeba101970c66c4dd3ee3be790ae0d07459d51ca))
* **client-panorama:** Added Brand field to device listings. ([a8b16e4](https://github.com/aws/aws-sdk-js-v3/commit/a8b16e42885107adcab28db05771679ad5209521))
* **clients:** update client endpoints as of 2022-04-06 ([11b2fe6](https://github.com/aws/aws-sdk-js-v3/commit/11b2fe68b7484cc685559891be3f949b93c84ce2))





# [3.64.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.63.0...v3.64.0) (2022-04-05)


### Features

* **client-datasync:** AWS DataSync now supports Amazon FSx for OpenZFS locations. ([9159aa9](https://github.com/aws/aws-sdk-js-v3/commit/9159aa90df2e4f01792501c5b64a3b41fa8282e8))
* **client-fsx:** Provide customers more visibility into file system status by adding new "Misconfigured Unavailable" status for Amazon FSx for Windows File Server. ([c921027](https://github.com/aws/aws-sdk-js-v3/commit/c921027a293f7f1c5e1300ad541070b6a01e7fbc))
* **client-securityhub:** Added additional ASFF details for RdsSecurityGroup AutoScalingGroup, ElbLoadBalancer, CodeBuildProject and RedshiftCluster. ([6f94efe](https://github.com/aws/aws-sdk-js-v3/commit/6f94efe1597ec6be62be3bd93c091b73e7d2e023))





# [3.63.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.62.0...v3.63.0) (2022-04-04)


### Features

* **client-iot:** AWS IoT - AWS IoT Device Defender adds support to list metric datapoints collected for IoT devices through the ListMetricValues API ([0964244](https://github.com/aws/aws-sdk-js-v3/commit/09642440c038644af7a66d46e36fe815fb7b22a9))
* **client-proton:** SDK release to support tagging for AWS Proton Repository resource ([19e9f72](https://github.com/aws/aws-sdk-js-v3/commit/19e9f72ab60539b87624019ba16921ce495a5d4f))
* **client-service-catalog:** This release adds ProvisioningArtifictOutputKeys to DescribeProvisioningParameters to reference the outputs of a Provisioned Product and deprecates ProvisioningArtifactOutputs. ([2ef44bc](https://github.com/aws/aws-sdk-js-v3/commit/2ef44bce101a89f7086898da1c814f9275e887cd))





# [3.62.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.61.0...v3.62.0) (2022-04-01)


### Features

* **client-connect:** This release updates these APIs: UpdateInstanceAttribute, DescribeInstanceAttribute and ListInstanceAttributes. You can use it to programmatically enable/disable multi-party conferencing using attribute type MULTI_PARTY_CONFERENCING on the specified Amazon Connect instance. ([f7b6683](https://github.com/aws/aws-sdk-js-v3/commit/f7b66837ec2ac795553726463fbe9157d1acd05f))
* **clients:** update client endpoints as of 2022-04-01 ([ca7dc28](https://github.com/aws/aws-sdk-js-v3/commit/ca7dc28d87ebc04a41cdaf6567c03b892cbb9204))





# [3.61.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.60.0...v3.61.0) (2022-03-31)


### Features

* **client-cloudcontrol:** SDK release for Cloud Control API in Amazon Web Services China (Beijing) Region, operated by Sinnet, and Amazon Web Services China (Ningxia) Region, operated by NWCD ([a83077b](https://github.com/aws/aws-sdk-js-v3/commit/a83077b0fcd59d0c9207d822526db5fa3763aa51))
* **client-databrew:** This AWS Glue Databrew release adds feature to support ORC as an input format. ([4ed643b](https://github.com/aws/aws-sdk-js-v3/commit/4ed643bee6af76efa1cce53743a58ec001128401))
* **client-grafana:** This release adds tagging support to the Managed Grafana service. New APIs: TagResource, UntagResource and ListTagsForResource. Updates: add optional field tags to support tagging while calling CreateWorkspace. ([38838fa](https://github.com/aws/aws-sdk-js-v3/commit/38838fa822f863c6f6e6380c31596247fac2f40e))
* **client-pinpoint-sms-voice-v2:** Amazon Pinpoint now offers a version 2.0 suite of SMS and voice APIs, providing increased control over sending and configuration. This release is a new SDK for sending SMS and voice messages called PinpointSMSVoiceV2. ([51170c6](https://github.com/aws/aws-sdk-js-v3/commit/51170c698d15cf16fff4b413fec8de474774e9a6))
* **client-route53-recovery-cluster:** This release adds a new API "ListRoutingControls" to list routing control states using the highly reliable Route 53 ARC data plane endpoints. ([ac15087](https://github.com/aws/aws-sdk-js-v3/commit/ac1508711cd99e732b3e5cf8fa120fe46ea2ad8b))
* **client-workspaces:** Added APIs that allow you to customize the logo, login message, and help links in the WorkSpaces client login page. To learn more, visit https://docs.aws.amazon.com/workspaces/latest/adminguide/customize-branding.html ([f7d75a0](https://github.com/aws/aws-sdk-js-v3/commit/f7d75a0c0424a5174538a10ddc0e1d060b5bb7df))
* **clients:** update client endpoints as of 2022-03-31 ([990c97a](https://github.com/aws/aws-sdk-js-v3/commit/990c97ab8c00f54fd53d46ae1f91151898509d15))
* **clients:** update clients for 03/22/2022 & 03/23/2022 ([#3498](https://github.com/aws/aws-sdk-js-v3/issues/3498)) ([fc18e5c](https://github.com/aws/aws-sdk-js-v3/commit/fc18e5c1b339dc71946edd83b28bf71cf4f8eba3))
* **smithy-client:** update client defaults provider ([37ef64a](https://github.com/aws/aws-sdk-js-v3/commit/37ef64a200d2e449029685c0f458221a0a0ac578))





# [3.60.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.59.0...v3.60.0) (2022-03-30)


### Features

* **client-ec2:** This release simplifies the auto-recovery configuration process enabling customers to set the recovery behavior to disabled or default ([4e3290e](https://github.com/aws/aws-sdk-js-v3/commit/4e3290e38f5a6d984aaf293c303f92f09ec9a229))
* **client-fms:** AWS Firewall Manager now supports the configuration of third-party policies that can use either the centralized or distributed deployment models. ([7dbbfd5](https://github.com/aws/aws-sdk-js-v3/commit/7dbbfd55467d3cc3bd1aec28d27b6e050de37e58))
* **client-fsx:** This release adds support for modifying throughput capacity for FSx for ONTAP file systems. ([4619832](https://github.com/aws/aws-sdk-js-v3/commit/4619832b1c2059c731d944c82d14dcd28bc3a482))
* **client-iot-data-plane:** Update the default AWS IoT Core Data Plane endpoint from VeriSign signed to ATS signed. If you have firewalls with strict egress rules, configure the rules to grant you access to data-ats.iot.[region].amazonaws.com or data-ats.iot.[region].amazonaws.com.cn. ([3c918da](https://github.com/aws/aws-sdk-js-v3/commit/3c918dac69e4ff6ed2fe9c102c6bc66def395411))
* **clients:** update client endpoints as of 2022-03-30 ([1c2da1d](https://github.com/aws/aws-sdk-js-v3/commit/1c2da1dfcff3c3e016d5532dbc374e5b331e6919))
* **smithy-client:** update client defaults provider ([57e29b7](https://github.com/aws/aws-sdk-js-v3/commit/57e29b7017740fb391c84556cbf9c184eb698861))





# [3.59.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.58.0...v3.59.0) (2022-03-29)


### Features

* **client-organizations:** This release provides the new CloseAccount API that enables principals in the management account to close any member account within an organization. ([be368b0](https://github.com/aws/aws-sdk-js-v3/commit/be368b035fc95aeba02ded15ce4ddfe02e22d488))





# [3.58.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.57.0...v3.58.0) (2022-03-28)


### Features

* **client-acm-pca:** Updating service name entities ([8d633e0](https://github.com/aws/aws-sdk-js-v3/commit/8d633e0c37dbe07f8e7d5a9364c5d8814b90b2b9))
* **client-medialive:** This release adds support for selecting a maintenance window. ([1d78757](https://github.com/aws/aws-sdk-js-v3/commit/1d787579e0e35a1c407d7d78af2b116daef76868))





# [3.57.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.56.0...v3.57.0) (2022-03-25)


### Features

* **client-batch:** Bug Fix: Fixed a bug where shapes were marked as unboxed and were not serialized and sent over the wire, causing an API error from the service. ([193a1bc](https://github.com/aws/aws-sdk-js-v3/commit/193a1bc821ec4572161cc21d782d131dc3c153a8))
* **client-ec2:** This is release adds support for Amazon VPC Reachability Analyzer to analyze path through a Transit Gateway. ([62b49fc](https://github.com/aws/aws-sdk-js-v3/commit/62b49fcdf2a24f886b9b621047c1e49b9fb721e4))
* **client-ssm:** This Patch Manager release supports creating, updating, and deleting Patch Baselines for Rocky Linux OS. ([28ef4d2](https://github.com/aws/aws-sdk-js-v3/commit/28ef4d2d912e8e779ca4725ce7b6ac2075779808))





# [3.56.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.55.0...v3.56.0) (2022-03-24)


### Features

* **client-config-service:** Added new APIs GetCustomRulePolicy and GetOrganizationCustomRulePolicy, and updated existing APIs PutConfigRule, DescribeConfigRule, DescribeConfigRuleEvaluationStatus, PutOrganizationConfigRule, DescribeConfigRule to support a new feature for building AWS Config rules with AWS CloudFormation Guard ([da33251](https://github.com/aws/aws-sdk-js-v3/commit/da332519e1e5aa13a90b2c10371780da0733e21e))
* **client-lambda:** Adds support for increased ephemeral storage (/tmp) up to 10GB for Lambda functions. Customers can now provision up to 10 GB of ephemeral storage per function instance, a 20x increase over the previous limit of 512 MB. ([d77b86b](https://github.com/aws/aws-sdk-js-v3/commit/d77b86b6fa2e3bd9c9226f107a6a476dd16a7d81))
* **client-transcribe:** This release adds an additional parameter for subtitling with Amazon Transcribe batch jobs: outputStartIndex. ([8419c39](https://github.com/aws/aws-sdk-js-v3/commit/8419c399cdb580fa608d4df09f588fe67664ab47))
* **clients:** update client endpoints to latest ([523b0fd](https://github.com/aws/aws-sdk-js-v3/commit/523b0fdf831d3d2f8b49fc33b45cb8d0b1520653))





# [3.55.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.54.1...v3.55.0) (2022-03-21)


### Bug Fixes

* **middleware-serde:** mark  error entry non-enumerable ([#3426](https://github.com/aws/aws-sdk-js-v3/issues/3426)) ([c7cceb5](https://github.com/aws/aws-sdk-js-v3/commit/c7cceb51ec3c49d7e54f9e05f1e2bb037a010854))
* **property-provider:** copy error properties to ProviderError in from() ([#3440](https://github.com/aws/aws-sdk-js-v3/issues/3440)) ([4377e44](https://github.com/aws/aws-sdk-js-v3/commit/4377e4488ce4ae3746dd34349ab3d95d5780fa91))
* **property-provider:** manually adjust the prototype of *ProviderError ([#3445](https://github.com/aws/aws-sdk-js-v3/issues/3445)) ([134f769](https://github.com/aws/aws-sdk-js-v3/commit/134f7693b339a791379e12873632458c892f375b))
* **scripts:** update typescript version in generate-clients ([#3454](https://github.com/aws/aws-sdk-js-v3/issues/3454)) ([f90992a](https://github.com/aws/aws-sdk-js-v3/commit/f90992af53fdb38634f75d06d820792387fd4e35))
* **types:** remove [@internal](https://github.com/internal) jsdoc tag from profile types ([#3452](https://github.com/aws/aws-sdk-js-v3/issues/3452)) ([2d7c151](https://github.com/aws/aws-sdk-js-v3/commit/2d7c151bb6d9ccfdd1eb3bd8b007e4ebcdd5daa3))


### Features

* **clients:** update clients as of 03/21/2022 ([#3455](https://github.com/aws/aws-sdk-js-v3/issues/3455)) ([7cd40a5](https://github.com/aws/aws-sdk-js-v3/commit/7cd40a5aeaddf03b8d27e814b3a2b441c1217dfb))
* **property-provider:** memoize() supports force refresh ([#3413](https://github.com/aws/aws-sdk-js-v3/issues/3413)) ([a79f962](https://github.com/aws/aws-sdk-js-v3/commit/a79f962873ff11a3d6f98199224155bd2ddc0b1e))
* **util-middleware:** add normalizeProvider ([#3456](https://github.com/aws/aws-sdk-js-v3/issues/3456)) ([e15b0f5](https://github.com/aws/aws-sdk-js-v3/commit/e15b0f523614935ee047e08c75caa124d90b96b1))





## [3.54.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.54.0...v3.54.1) (2022-03-15)


### Bug Fixes

* **middleware-content-length:** swallow error if content-length computation fails ([#3429](https://github.com/aws/aws-sdk-js-v3/issues/3429)) ([8c12233](https://github.com/aws/aws-sdk-js-v3/commit/8c12233590c51103cbc18a37dfad4913f0ac2fc0))





# [3.54.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.53.1...v3.54.0) (2022-03-11)


### Bug Fixes

* **hash-stream-node:** do not create copy of file stream ([#3380](https://github.com/aws/aws-sdk-js-v3/issues/3380)) ([89a70ae](https://github.com/aws/aws-sdk-js-v3/commit/89a70aeecba1905f9b596438b15437995056a896))
* **signature-v4:** normalized the path before double encoding it ([#3408](https://github.com/aws/aws-sdk-js-v3/issues/3408)) ([b20d431](https://github.com/aws/aws-sdk-js-v3/commit/b20d431b3c06a04bc8621a582c527a06d22c8680))
* **util-body-length-node:** fs.ReadStream with path of Buffer type ([#3384](https://github.com/aws/aws-sdk-js-v3/issues/3384)) ([d220242](https://github.com/aws/aws-sdk-js-v3/commit/d220242b3ab1075e6a7ea16987ed15bbfec2e6fd))
* **util-body-length-node:** support fd.createReadStream ([#3385](https://github.com/aws/aws-sdk-js-v3/issues/3385)) ([88f8cc2](https://github.com/aws/aws-sdk-js-v3/commit/88f8cc2d3d33f4dc6d06312e75f70725c89d1f17))


### Features

* **clients:** update clients as of 2022/03/10 ([#3411](https://github.com/aws/aws-sdk-js-v3/issues/3411)) ([8fa517a](https://github.com/aws/aws-sdk-js-v3/commit/8fa517a2c56d2f98a2e4a9c4ea6fd99b6ce61a71))
* **credential-provider-imds:** accept custom logger ([#3409](https://github.com/aws/aws-sdk-js-v3/issues/3409)) ([11c4a7b](https://github.com/aws/aws-sdk-js-v3/commit/11c4a7b5ac00763139f130595a37e182d34d9a72))
* **credential-provider-imds:** support static stability ([#3402](https://github.com/aws/aws-sdk-js-v3/issues/3402)) ([a4beeba](https://github.com/aws/aws-sdk-js-v3/commit/a4beebae5b2a967a0c7b6bc91fa8312867dd7079))





## [3.53.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.53.0...v3.53.1) (2022-02-25)


### Bug Fixes

* **hash-stream-node:** disable createReadStream with file descriptor ([#3369](https://github.com/aws/aws-sdk-js-v3/issues/3369)) ([e5e89d2](https://github.com/aws/aws-sdk-js-v3/commit/e5e89d2972324460b6327729e7dc07f85ea9cd15))





# [3.53.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.52.0...v3.53.0) (2022-02-24)


### Bug Fixes

* **client-s3:** disable bucket endpoint plugin in WriteGetObjectResponseCommand ([#3344](https://github.com/aws/aws-sdk-js-v3/issues/3344)) ([1945d47](https://github.com/aws/aws-sdk-js-v3/commit/1945d47c9612eca3d04c8a346bbc4de35c3d0ef3))
* **codegen:** fix set deserialization in SSDKs ([#3322](https://github.com/aws/aws-sdk-js-v3/issues/3322)) ([c827d5c](https://github.com/aws/aws-sdk-js-v3/commit/c827d5c1699dfbcec3feb33101ef14b589b20f3b))
* **hash-stream-node:** support file stream in readableStreamHasher ([#3338](https://github.com/aws/aws-sdk-js-v3/issues/3338)) ([1e3faa1](https://github.com/aws/aws-sdk-js-v3/commit/1e3faa1976a5119dcc985c8f513833e3d01fe3dc))
* **hash-stream-node:** throw error if non-file readableStream is flowing ([#3341](https://github.com/aws/aws-sdk-js-v3/issues/3341)) ([76df645](https://github.com/aws/aws-sdk-js-v3/commit/76df645d6109f6ce853830236a0bc77960b97f6c))
* **util-stream:** remove jest from devDeps ([#3348](https://github.com/aws/aws-sdk-js-v3/issues/3348)) ([d9e4c4b](https://github.com/aws/aws-sdk-js-v3/commit/d9e4c4be361199cd2dc2ac4e5b6bd14b53535b02))
* **util-stream:** rename downlevel-dts to build:types:downlevel ([#3355](https://github.com/aws/aws-sdk-js-v3/issues/3355)) ([110bb19](https://github.com/aws/aws-sdk-js-v3/commit/110bb19045d275aaeeddbd308b724e31eef4476a))


### Features

* **clients:** generate service exceptions as classes ([#3267](https://github.com/aws/aws-sdk-js-v3/issues/3267)) ([ca64fee](https://github.com/aws/aws-sdk-js-v3/commit/ca64feed3351c394c07dc26b782a5760a396a074))
* **clients:** update clients as of 2022/02/23 ([#3356](https://github.com/aws/aws-sdk-js-v3/issues/3356)) ([b6b2e25](https://github.com/aws/aws-sdk-js-v3/commit/b6b2e258add12c73d807483ca078401a6d84a12b))
* **clients:** update clients as of 2022/02/24 ([#3361](https://github.com/aws/aws-sdk-js-v3/issues/3361)) ([ec3cc1e](https://github.com/aws/aws-sdk-js-v3/commit/ec3cc1eacd4010797a3a9eec2b0cc1a55e531ea9))
* **codegen:** add getAwsChunkedEncodingStream to config ([#3349](https://github.com/aws/aws-sdk-js-v3/issues/3349)) ([6c05df3](https://github.com/aws/aws-sdk-js-v3/commit/6c05df319c940d19ceb7ae4b86df83cc7716be97))
* **codegen:** http checksum dependency integration ([#3346](https://github.com/aws/aws-sdk-js-v3/issues/3346)) ([bfc9257](https://github.com/aws/aws-sdk-js-v3/commit/bfc9257ed2e2354955b202adf7cfd98f3160eda7))
* **middleware-flexible-checksums:** add flexibleChecksumMiddleware ([#3340](https://github.com/aws/aws-sdk-js-v3/issues/3340)) ([15e0512](https://github.com/aws/aws-sdk-js-v3/commit/15e05124f9eb4a9fbf9437f14179188d7d4b11e1))
* **middleware-flexible-checksums:** support trailing checksums with aws-chunked encoding ([#3347](https://github.com/aws/aws-sdk-js-v3/issues/3347)) ([50b48fe](https://github.com/aws/aws-sdk-js-v3/commit/50b48fec155cb87f85799f001beac6ca6434372b))
* **util-stream:** add getAwsChunkedEncodingStream ([#3339](https://github.com/aws/aws-sdk-js-v3/issues/3339)) ([42d433b](https://github.com/aws/aws-sdk-js-v3/commit/42d433b274eeeb38db268af4d6d48c972fc10486))





# [3.52.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.51.0...v3.52.0) (2022-02-18)


### Bug Fixes

* **package.json:** set root version to 0.0.0 ([#3325](https://github.com/aws/aws-sdk-js-v3/issues/3325)) ([9a15961](https://github.com/aws/aws-sdk-js-v3/commit/9a15961ed8b1b176b07015c28d4ef54028f42112))
* **package.json:** update version to v3.51.0 ([#3315](https://github.com/aws/aws-sdk-js-v3/issues/3315)) ([b77a9b5](https://github.com/aws/aws-sdk-js-v3/commit/b77a9b521ab4ac789c9a0d4c972343d243b5b9b8))
* **scripts:** generate clients in batches ([#3319](https://github.com/aws/aws-sdk-js-v3/issues/3319)) ([2308e5f](https://github.com/aws/aws-sdk-js-v3/commit/2308e5fe758972ccfb73b59d19a5e1ed4810e42b))
* **scripts:** store clients generated in a batch in temp directory ([#3323](https://github.com/aws/aws-sdk-js-v3/issues/3323)) ([2eef0a4](https://github.com/aws/aws-sdk-js-v3/commit/2eef0a461959466c4ca92c09d7b6771caee7fe1b))


### Features

* **clients:** update clients as of 2022/02/18 ([#3335](https://github.com/aws/aws-sdk-js-v3/issues/3335)) ([717b06f](https://github.com/aws/aws-sdk-js-v3/commit/717b06fc43e9876a6f8040147b75ad5da38b1e0f))
* **credential-provider-env:** refactor into modular components ([#3293](https://github.com/aws/aws-sdk-js-v3/issues/3293)) ([e0697ed](https://github.com/aws/aws-sdk-js-v3/commit/e0697ed82d7eaa98ccc48337b516bf7f3b369e3a))
* **credential-provider-node:** refactor into modular components ([#3294](https://github.com/aws/aws-sdk-js-v3/issues/3294)) ([5f351cd](https://github.com/aws/aws-sdk-js-v3/commit/5f351cdca347e073810419613123a6204f04a4c9))
* **credential-provider-sso:** refactor into modular components ([#3296](https://github.com/aws/aws-sdk-js-v3/issues/3296)) ([eece76f](https://github.com/aws/aws-sdk-js-v3/commit/eece76f7ba9b6d58ad87327cfc70cd793baee615))
* **smithy-client:** add ExceptionOptionType type ([#3314](https://github.com/aws/aws-sdk-js-v3/issues/3314)) ([030da71](https://github.com/aws/aws-sdk-js-v3/commit/030da71b0fe66df4333a0d42771b4414a18ea9f8))





# [3.51.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.50.0...v3.51.0) (2022-02-12)


### Bug Fixes

* **package.json:** update version to v3.50.0 ([#3300](https://github.com/aws/aws-sdk-js-v3/issues/3300)) ([23a2463](https://github.com/aws/aws-sdk-js-v3/commit/23a246385d3034e1a617ed37a98b346ec2ed84c4))
* **scripts:** log when types not present in downlevel script ([#3307](https://github.com/aws/aws-sdk-js-v3/issues/3307)) ([68c0d1f](https://github.com/aws/aws-sdk-js-v3/commit/68c0d1f404f3abb756bdd1e43955afbfb9df9dcb))


### Features

* **credential-provider-ini:** refactor into modular components ([#3289](https://github.com/aws/aws-sdk-js-v3/issues/3289)) ([7c891b2](https://github.com/aws/aws-sdk-js-v3/commit/7c891b215cf3a9ea343447ced51e5d7be86caba9))
* **credential-provider-process:** refactor into modular components ([#3287](https://github.com/aws/aws-sdk-js-v3/issues/3287)) ([2b64304](https://github.com/aws/aws-sdk-js-v3/commit/2b64304c17191b3ffad4965b8a88509ddf4e79c7))
* **shared-ini-file-loader:** refactor loadSharedConfigFiles into modular components ([#3285](https://github.com/aws/aws-sdk-js-v3/issues/3285)) ([2613f66](https://github.com/aws/aws-sdk-js-v3/commit/2613f668da8a9d6edabe3821a43c8345869f3957))





# [3.50.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.49.0...v3.50.0) (2022-02-08)


### Features

* **clients:** update clients as of 02/04/2022 ([#3280](https://github.com/aws/aws-sdk-js-v3/issues/3280)) ([63d7f8c](https://github.com/aws/aws-sdk-js-v3/commit/63d7f8c539e0fd782fa5bf997bd6ac2730e4bfda))
* **smithy-client:** implement SdkException class ([#3261](https://github.com/aws/aws-sdk-js-v3/issues/3261)) ([6a23634](https://github.com/aws/aws-sdk-js-v3/commit/6a23634ec278fe0d275f58fb6b981440be6a3db8))





# [3.49.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.48.0...v3.49.0) (2022-01-29)


### Bug Fixes

* **eventstream-handler-node:** explicitly define type of err ([#3240](https://github.com/aws/aws-sdk-js-v3/issues/3240)) ([4098091](https://github.com/aws/aws-sdk-js-v3/commit/4098091d054f804013f89c536710f5fcfb10951d))


### Features

* **clients:** bump smithy to 1.16.3 ([#3236](https://github.com/aws/aws-sdk-js-v3/issues/3236)) ([a227791](https://github.com/aws/aws-sdk-js-v3/commit/a227791076d07b15c4cf223673d32f73d206140a))
* **clients:** update clients as of 01/28/2022 ([#3263](https://github.com/aws/aws-sdk-js-v3/issues/3263)) ([c207cf4](https://github.com/aws/aws-sdk-js-v3/commit/c207cf4a70ba9ef14dc5b94da7883b0889d64918))
* **codegen:** update to Smithy-1.16.3 ([#3215](https://github.com/aws/aws-sdk-js-v3/issues/3215)) ([f8db067](https://github.com/aws/aws-sdk-js-v3/commit/f8db06770c727bb098db509ed94dfc17ce9b60b8))





# [3.48.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.47.2...v3.48.0) (2022-01-22)


### Features

* **clients:** update clients as of 2022/01/21 ([#3228](https://github.com/aws/aws-sdk-js-v3/issues/3228)) ([fa713ef](https://github.com/aws/aws-sdk-js-v3/commit/fa713efca6b2f424c27535d000359f08830960b1))





## [3.47.2](https://github.com/aws/aws-sdk-js-v3/compare/v3.47.1...v3.47.2) (2022-01-21)


### Bug Fixes

* **scripts:** convert update:versions scripts to mjs ([#3226](https://github.com/aws/aws-sdk-js-v3/issues/3226)) ([c237972](https://github.com/aws/aws-sdk-js-v3/commit/c237972c4116cb884061f017b81c4066c7d328e0))





## [3.47.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.47.0-release-test-1...v3.47.1) (2022-01-20)


### Bug Fixes

* **aws-protocoltests-*:** add emitDeclarationOnly for types ([#3213](https://github.com/aws/aws-sdk-js-v3/issues/3213)) ([a678025](https://github.com/aws/aws-sdk-js-v3/commit/a67802558af98a7a31b431f6917f84939afe0689))
* **util-defaults-mode-browser:** import bowser by default export ([#3203](https://github.com/aws/aws-sdk-js-v3/issues/3203)) ([5187be2](https://github.com/aws/aws-sdk-js-v3/commit/5187be2ee1a9731053b1e94bff25395130c0bcef))





# [3.47.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.46.0...v3.47.0) (2022-01-15)


### Bug Fixes

* **codegen:** populate dnsSuffix just before consuming hostname ([#3170](https://github.com/aws/aws-sdk-js-v3/issues/3170)) ([0f0e77e](https://github.com/aws/aws-sdk-js-v3/commit/0f0e77eda6aeee0e3bbc92a9054f7ba91a3a4a1d))
* **codegen:** skip variants which only contains tags ([#3172](https://github.com/aws/aws-sdk-js-v3/issues/3172)) ([d72b72a](https://github.com/aws/aws-sdk-js-v3/commit/d72b72a2f51a4a7f7f449b4b0e09bb4db206140f))


### Features

* **clients:** update clients to use default values inferred from defaults mode ([#3192](https://github.com/aws/aws-sdk-js-v3/issues/3192)) ([9152e21](https://github.com/aws/aws-sdk-js-v3/commit/9152e210c6ec29f34bb070eaf2874039022e6ab7))
* Support awsQueryError trait ([#3174](https://github.com/aws/aws-sdk-js-v3/issues/3174)) ([351bd3a](https://github.com/aws/aws-sdk-js-v3/commit/351bd3a40ad37be79d823d6a0e4e48304728ea6f))





# [3.46.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.45.0...v3.46.0) (2022-01-07)


### Bug Fixes

* **clients:** update clean:dist script to delete dist-* folder ([#3155](https://github.com/aws/aws-sdk-js-v3/issues/3155)) ([cdb1709](https://github.com/aws/aws-sdk-js-v3/commit/cdb17090f82d1fc8755811c82cbed5976ec7e60b))
* **md5-js:** remove unnecessary exclude from tsconfig ([#3158](https://github.com/aws/aws-sdk-js-v3/issues/3158)) ([6f50571](https://github.com/aws/aws-sdk-js-v3/commit/6f505712dbda1747e0622a9a20cd66b66b8e821c))
* **middleware-sdk-route53:** typo in file extension of test ([#3157](https://github.com/aws/aws-sdk-js-v3/issues/3157)) ([1a3bd8c](https://github.com/aws/aws-sdk-js-v3/commit/1a3bd8cd91f04d4ad74b1721f2e162a23dd0ed9b))
* **middleware-signing:** correct clock skew from error response ([#3133](https://github.com/aws/aws-sdk-js-v3/issues/3133)) ([7a207a9](https://github.com/aws/aws-sdk-js-v3/commit/7a207a9d3173631f62f8b90ee1fbd7f68342133a))


### Features

* **clients:** extend typedoc.json from root ([#3136](https://github.com/aws/aws-sdk-js-v3/issues/3136)) ([f6a3ef5](https://github.com/aws/aws-sdk-js-v3/commit/f6a3ef541ae2d92872d09d8cab6727911287ebb2))
* **clients:** update clients as of 2021/01/07 ([#3163](https://github.com/aws/aws-sdk-js-v3/issues/3163)) ([6648b07](https://github.com/aws/aws-sdk-js-v3/commit/6648b07ea97691d2fed55eab49831646543b648b))
* **packages:** end support for Node.js 10.x ([#3141](https://github.com/aws/aws-sdk-js-v3/issues/3141)) ([1a62865](https://github.com/aws/aws-sdk-js-v3/commit/1a6286513f7cdb556708845c512861c5f92eb883))
* end support for Node.js 10.x ([#3122](https://github.com/aws/aws-sdk-js-v3/issues/3122)) ([7acf18a](https://github.com/aws/aws-sdk-js-v3/commit/7acf18abd3fb1cc461f809110cdb0d7968c2070e))





# [3.45.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.44.0...v3.45.0) (2021-12-23)


### Bug Fixes

* **signature-v4:** mock Date in SigV4 tests ([#2880](https://github.com/aws/aws-sdk-js-v3/issues/2880)) ([d79de1d](https://github.com/aws/aws-sdk-js-v3/commit/d79de1dd956fb6d0e530c343b9cd28ef8ad82b76))


### Features

* **clients:** update clients as of 2021/12/23 ([#3110](https://github.com/aws/aws-sdk-js-v3/issues/3110)) ([5d638e1](https://github.com/aws/aws-sdk-js-v3/commit/5d638e188ce64fa80fe36b8cba79ba63b80b50b7))
* **hash-stream-node:** add readableStreamHasher ([#3088](https://github.com/aws/aws-sdk-js-v3/issues/3088)) ([943dab0](https://github.com/aws/aws-sdk-js-v3/commit/943dab08dc843fba9e825c7bf7856fc4b922b477))





# [3.44.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.43.0...v3.44.0) (2021-12-02)


### Bug Fixes

* **client-databrew:** omit retry headers ([#3076](https://github.com/aws/aws-sdk-js-v3/issues/3076)) ([9b6995c](https://github.com/aws/aws-sdk-js-v3/commit/9b6995c61d84fec2dc2948fcf34d3e750b95d144))


### Features

* **clients:** update clients as of 2021/11/30 ([#3077](https://github.com/aws/aws-sdk-js-v3/issues/3077)) ([2bdba30](https://github.com/aws/aws-sdk-js-v3/commit/2bdba30963e550728ba2903d57daa1e666a29d71))
* **clients:** update clients as of 2021/12/01 ([#3078](https://github.com/aws/aws-sdk-js-v3/issues/3078)) ([9c44188](https://github.com/aws/aws-sdk-js-v3/commit/9c44188265ea484d55c50848d7daae5571007ce0))





# [3.43.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.42.0...v3.43.0) (2021-11-29)


### Bug Fixes

* **codegen:** use specific smithy-cli version in protocol-test-codegen ([#3054](https://github.com/aws/aws-sdk-js-v3/issues/3054)) ([ba14b3c](https://github.com/aws/aws-sdk-js-v3/commit/ba14b3c0566c40a05c6d99ea169398cca588b32f))


### Features

* **clients:** update clients as of 11/28/2021 ([#3072](https://github.com/aws/aws-sdk-js-v3/issues/3072)) ([2ad1622](https://github.com/aws/aws-sdk-js-v3/commit/2ad1622ba8586b926fe508055211803bb29e3976))
* **lib-dynamodb:** add pagination ([#3069](https://github.com/aws/aws-sdk-js-v3/issues/3069)) ([51480df](https://github.com/aws/aws-sdk-js-v3/commit/51480df99b38d0f4893f4c6cd7020b9a6135eee9))





# [3.42.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.41.0...v3.42.0) (2021-11-19)


### Bug Fixes

* **client-kendra:** change incorrectly modeled DocumentAttributeValue to structure ([#3040](https://github.com/aws/aws-sdk-js-v3/issues/3040)) ([e497f38](https://github.com/aws/aws-sdk-js-v3/commit/e497f38810458847a016e910c1418e4f31939e66))
* **clients:** merge default variants by comparing tags ([#3044](https://github.com/aws/aws-sdk-js-v3/issues/3044)) ([d65a310](https://github.com/aws/aws-sdk-js-v3/commit/d65a310ed5a471e72633a18ae6f3c98390e20783))
* **lib-storage:** add events polyfill ([#3017](https://github.com/aws/aws-sdk-js-v3/issues/3017)) ([fff5e2a](https://github.com/aws/aws-sdk-js-v3/commit/fff5e2a3e2f5c1e0f3b22ea1f3b6cc28cd2658f0))
* **middleware-sdk-ec2:** remove double encoding of presigned url ([#3022](https://github.com/aws/aws-sdk-js-v3/issues/3022)) ([7cf73ea](https://github.com/aws/aws-sdk-js-v3/commit/7cf73eac3103b0a0ad7c0d84c04882f07a576245))
* **middleware-sdk-s3-control:** do not validate for FIPS in S3 Outposts ([#3027](https://github.com/aws/aws-sdk-js-v3/issues/3027)) ([b30d338](https://github.com/aws/aws-sdk-js-v3/commit/b30d338c6c0e4843c1d622c7eb59f4e64f78956b))


### Features

* **clients:** update clients as of 11/18/2021 ([#3039](https://github.com/aws/aws-sdk-js-v3/issues/3039)) ([d2b2c45](https://github.com/aws/aws-sdk-js-v3/commit/d2b2c453315fc7bff798c1fb97c792e59274b4d6))





# [3.41.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.40.1...v3.41.0) (2021-11-11)


### Bug Fixes

* **codegen:** use specific Smithy version ([#3011](https://github.com/aws/aws-sdk-js-v3/issues/3011)) ([6cdee41](https://github.com/aws/aws-sdk-js-v3/commit/6cdee414fe8f753e8381095c7281b323154598a9))
* **credential-provider-web-identity:** exclude node.js code from browser bundle ([#3005](https://github.com/aws/aws-sdk-js-v3/issues/3005)) ([7ba033a](https://github.com/aws/aws-sdk-js-v3/commit/7ba033a37058c6697edb004180dc046a2298e9aa))
* **credential-providers:** exclude node.js files for web ([#3006](https://github.com/aws/aws-sdk-js-v3/issues/3006)) ([a890fd7](https://github.com/aws/aws-sdk-js-v3/commit/a890fd791143cdccf249b648c45ed89bc8bb3e70))
* **polly-request-presigner:** add missing polly dependency ([#3010](https://github.com/aws/aws-sdk-js-v3/issues/3010)) ([c2873e7](https://github.com/aws/aws-sdk-js-v3/commit/c2873e7eebdba9c9b36df685dfe588f70bd657a7))
* **signature-v4-crt:** notify this package is node.js only ([#3009](https://github.com/aws/aws-sdk-js-v3/issues/3009)) ([39e758c](https://github.com/aws/aws-sdk-js-v3/commit/39e758cc986aec660c119c6e8aa14a704d141a4c))
* **smithy-client:** remove capturing groups from date regex ([#3008](https://github.com/aws/aws-sdk-js-v3/issues/3008)) ([3bc91c0](https://github.com/aws/aws-sdk-js-v3/commit/3bc91c0eb21ed802a27361ad92789b936cb47803))


### Features

* **clients:** update clients as of 2021/11/11 ([#3015](https://github.com/aws/aws-sdk-js-v3/issues/3015)) ([3d82c4e](https://github.com/aws/aws-sdk-js-v3/commit/3d82c4e3c4d174533f46ce35495cf5cffabdb35a))
* **karma-credential-loader:** mark package as private ([#3016](https://github.com/aws/aws-sdk-js-v3/issues/3016)) ([f13cac0](https://github.com/aws/aws-sdk-js-v3/commit/f13cac09b896b6d179930a4387738e7838cc9016))





## [3.40.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.40.0...v3.40.1) (2021-11-08)


### Bug Fixes

* **middleware-bucket-endpoint:** remove dualstack from hostname before processing ([#3003](https://github.com/aws/aws-sdk-js-v3/issues/3003)) ([d7aa2c3](https://github.com/aws/aws-sdk-js-v3/commit/d7aa2c329c62a9c2957631502bfe8da7fda86a4f))





# [3.40.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.39.0...v3.40.0) (2021-11-05)


### Bug Fixes

* **config-resolver:** resolve region first from regionHash ([#2969](https://github.com/aws/aws-sdk-js-v3/issues/2969)) ([55f4e85](https://github.com/aws/aws-sdk-js-v3/commit/55f4e855dd0ff8dd671dea6753410d042d55e8f3))
* **node-config-provider:** move booleanSelector util to platform agnostic package ([#2992](https://github.com/aws/aws-sdk-js-v3/issues/2992)) ([2909c7b](https://github.com/aws/aws-sdk-js-v3/commit/2909c7bf636d78f82aa980588fb44bd17f78e001))


### Features

* **client-nimble:** change StudioComponentConfiguration from union to structure ([#2971](https://github.com/aws/aws-sdk-js-v3/issues/2971)) ([049533d](https://github.com/aws/aws-sdk-js-v3/commit/049533d9ad85fc0a884e4b9c5b9b72a4fdc63587))
* **client-nimble:** update model as of 11/02/2021 ([#2976](https://github.com/aws/aws-sdk-js-v3/issues/2976)) ([47d2a6c](https://github.com/aws/aws-sdk-js-v3/commit/47d2a6c10033b4a52f19db58d85549e40e325d2e))
* **client-s3-control:** support FIPS in S3 Outposts Control Plane ([#2985](https://github.com/aws/aws-sdk-js-v3/issues/2985)) ([41d3762](https://github.com/aws/aws-sdk-js-v3/commit/41d376238d2f6c011e7ddbb383367d2393a14c71))
* **clients:** populate variants in endpoints hashes ([#2974](https://github.com/aws/aws-sdk-js-v3/issues/2974)) ([0dd68ef](https://github.com/aws/aws-sdk-js-v3/commit/0dd68ef8b04ea0e96e43b05a9a10221e433fdf86))
* **clients:** update clients as of 2021/11/05 ([#2994](https://github.com/aws/aws-sdk-js-v3/issues/2994)) ([f5ecc31](https://github.com/aws/aws-sdk-js-v3/commit/f5ecc3147035a1f3d2d74cfed147999927ea8256))
* **config-resolver:** resolve hostname from variants ([#2980](https://github.com/aws/aws-sdk-js-v3/issues/2980)) ([447580b](https://github.com/aws/aws-sdk-js-v3/commit/447580bc9f59d35e407dfffc9e31ff15c66b80ce))
* **config-resolver:** use real region in configuration ([#2986](https://github.com/aws/aws-sdk-js-v3/issues/2986)) ([af5b00e](https://github.com/aws/aws-sdk-js-v3/commit/af5b00ead1f1e9770ea2a9e81f6a7724a7e1be9f))
* **karma-credential-loader:** mark package as private ([#2959](https://github.com/aws/aws-sdk-js-v3/issues/2959)) ([a9ad7f6](https://github.com/aws/aws-sdk-js-v3/commit/a9ad7f628e5e243ed6427b82c42f2c40109cd41b))





# [3.39.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.38.0...v3.39.0) (2021-10-29)


### Bug Fixes

* **ci:** generate and build generic client from private folder ([#2954](https://github.com/aws/aws-sdk-js-v3/issues/2954)) ([044a3ac](https://github.com/aws/aws-sdk-js-v3/commit/044a3ac1f50d4bb352acb343a663f5f5fca0380f))
* **config-resolver:** get signingRegion from regionRegex if not present for FIPS ([#2936](https://github.com/aws/aws-sdk-js-v3/issues/2936)) ([79bbc43](https://github.com/aws/aws-sdk-js-v3/commit/79bbc433f2a0f18ad7d8f89d9deabcab7d26ae50))
* **node-config-provider:** allow undefined for booleanSelector obj keys ([#2945](https://github.com/aws/aws-sdk-js-v3/issues/2945)) ([1bd56b6](https://github.com/aws/aws-sdk-js-v3/commit/1bd56b66b76de5728987fcf9657654523c290c5f))


### Features

* **clients:** update clients as of 2021/10/28 ([#2955](https://github.com/aws/aws-sdk-js-v3/issues/2955)) ([378d161](https://github.com/aws/aws-sdk-js-v3/commit/378d16166de49b06263291001986715d9533cadf))
* **node-config-provider:** add utility booleanSelector ([#2941](https://github.com/aws/aws-sdk-js-v3/issues/2941)) ([538d717](https://github.com/aws/aws-sdk-js-v3/commit/538d717f9fc77d63b86e7de026453e4eb274934d))
* **private:** add generic client aws-echo-service ([#2950](https://github.com/aws/aws-sdk-js-v3/issues/2950)) ([e606543](https://github.com/aws/aws-sdk-js-v3/commit/e6065437ed3b804ea0fa9b0bf79769a014a84e6f))





# [3.38.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.37.0...v3.38.0) (2021-10-22)


### Features

* **client-documentation-generator:** rename package ([#2916](https://github.com/aws/aws-sdk-js-v3/issues/2916)) ([1a80bfd](https://github.com/aws/aws-sdk-js-v3/commit/1a80bfd2dfc583001ddb4a21b6432eaaad699aa7))
* **clients:** export folder from index.ts ([#2912](https://github.com/aws/aws-sdk-js-v3/issues/2912)) ([183b46d](https://github.com/aws/aws-sdk-js-v3/commit/183b46dde7f5613128038bf1c076f3c0b693203b))
* **clients:** update clients as of 2021/10/22 ([#2924](https://github.com/aws/aws-sdk-js-v3/issues/2924)) ([4d79819](https://github.com/aws/aws-sdk-js-v3/commit/4d798196e652f8cfdc1c155a46ac6b6aa31b2656))





# [3.37.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.36.1...v3.37.0) (2021-10-15)


### Features

* **clients:** update clients as of 10/15/2021 ([#2902](https://github.com/aws/aws-sdk-js-v3/issues/2902)) ([2730b54](https://github.com/aws/aws-sdk-js-v3/commit/2730b5424377944a5a2ad5e1ad7d3ca4135dae1c))
* **codegen:** enable SSDK validation protocol tests ([#2884](https://github.com/aws/aws-sdk-js-v3/issues/2884)) ([c23cbc4](https://github.com/aws/aws-sdk-js-v3/commit/c23cbc468247746f597d7ec5827e119478549ed6))





## [3.36.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.36.0...v3.36.1) (2021-10-12)


### Bug Fixes

* **clients:** emitDeclarationOnly in tsconfig.types.json ([#2893](https://github.com/aws/aws-sdk-js-v3/issues/2893)) ([6dc3d56](https://github.com/aws/aws-sdk-js-v3/commit/6dc3d56c20809c90cbdc4dd48627eeebc64af99d))
* **scripts:** do not destructure function parameter ([#2891](https://github.com/aws/aws-sdk-js-v3/issues/2891)) ([6dd0af8](https://github.com/aws/aws-sdk-js-v3/commit/6dd0af82243c175e1b5fc400f2a1893a095895ee))





# [3.36.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.35.0...v3.36.0) (2021-10-08)


### Bug Fixes

* **client-opsworks:** intermittent integ tests failures ([#2865](https://github.com/aws/aws-sdk-js-v3/issues/2865)) ([10d64df](https://github.com/aws/aws-sdk-js-v3/commit/10d64dfd65f73a95dcdb0d198556403e151cb670))


### Features

* **clients:** update clients as of 10/07/2021 ([#2879](https://github.com/aws/aws-sdk-js-v3/issues/2879)) ([1f4441e](https://github.com/aws/aws-sdk-js-v3/commit/1f4441e46b63ae6ff01067780b26d49916c267a0))
* publish files in dist-* only ([#2873](https://github.com/aws/aws-sdk-js-v3/issues/2873)) ([53b4243](https://github.com/aws/aws-sdk-js-v3/commit/53b4243b066f25ff2412d5f0dea1036054b2df32))
* **codegen:** test non-AWS client builds ([#2876](https://github.com/aws/aws-sdk-js-v3/issues/2876)) ([d9012cc](https://github.com/aws/aws-sdk-js-v3/commit/d9012ccd2ab8fbe7c62a0d8aa94cfbcdecfd07f0))
* **codegen:** ts-ignore packageInfo imports in codegen ([#2875](https://github.com/aws/aws-sdk-js-v3/issues/2875)) ([99d9267](https://github.com/aws/aws-sdk-js-v3/commit/99d926762193e83a354edec6e9de2b0543449704))
* **tsconfig:** remove sourceMap ([#2867](https://github.com/aws/aws-sdk-js-v3/issues/2867)) ([d25f526](https://github.com/aws/aws-sdk-js-v3/commit/d25f526627a02a2ca28675fecce66c76b6c97966))





# [3.35.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.34.0...v3.35.0) (2021-10-04)


### Bug Fixes

* **client-cognito-identity:** import client from new location in src ([#2858](https://github.com/aws/aws-sdk-js-v3/issues/2858)) ([c8cb449](https://github.com/aws/aws-sdk-js-v3/commit/c8cb4499c6ad19e2b194860d548753f637671f8c))
* **client-documentation-generator:** read files from src folder ([#2863](https://github.com/aws/aws-sdk-js-v3/issues/2863)) ([95c2903](https://github.com/aws/aws-sdk-js-v3/commit/95c29032ba8f6f3791067a90af211944eaec307c))
* eslint SSDK protocol tests ([#2854](https://github.com/aws/aws-sdk-js-v3/issues/2854)) ([1e2a316](https://github.com/aws/aws-sdk-js-v3/commit/1e2a3169924915a9b717886e7484ed04765a538b))
* **client-s3:** use member xmlname if applicable ([#2835](https://github.com/aws/aws-sdk-js-v3/issues/2835)) ([7e634cf](https://github.com/aws/aws-sdk-js-v3/commit/7e634cfab78d0a82864f828c4c8c10c9d0cccc97))
* **scripts:** overwrite test folder for protocol_tests ([#2853](https://github.com/aws/aws-sdk-js-v3/issues/2853)) ([5df7d12](https://github.com/aws/aws-sdk-js-v3/commit/5df7d124c4f9825db95c065008d4fd1becf5e23a))
* **scripts:** run downlevel-dts script in parallel ([#2837](https://github.com/aws/aws-sdk-js-v3/issues/2837)) ([0f8c0a2](https://github.com/aws/aws-sdk-js-v3/commit/0f8c0a2c5dc1409bf99cfc7289ad4946a283fb7d))


### Features

* **clients:** eslint --fix using esprint ([#2849](https://github.com/aws/aws-sdk-js-v3/issues/2849)) ([94d0a2d](https://github.com/aws/aws-sdk-js-v3/commit/94d0a2d8a0579ee0a742337937ad05735cfbc1ba))
* **clients:** move source files to 'src' folder ([#2845](https://github.com/aws/aws-sdk-js-v3/issues/2845)) ([e0025cd](https://github.com/aws/aws-sdk-js-v3/commit/e0025cddbba244a41ddf1fd1adb761142e15c22d))
* **codegen:** move source files to 'src' folder ([#2844](https://github.com/aws/aws-sdk-js-v3/issues/2844)) ([cfcdeb6](https://github.com/aws/aws-sdk-js-v3/commit/cfcdeb6554a7ca8c05b6a341c4577caf409dc020))
* **scripts:** use esprint to eslint --fix clients source code ([#2846](https://github.com/aws/aws-sdk-js-v3/issues/2846)) ([65922ea](https://github.com/aws/aws-sdk-js-v3/commit/65922ea3d3990de8a7c1e68dfa8983cbfcb54b26))





# [3.34.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.33.0...v3.34.0) (2021-09-24)


### Bug Fixes

* **middleware-sdk-s3:** missing dependency with esbuild ([#2814](https://github.com/aws/aws-sdk-js-v3/issues/2814)) ([d5924e9](https://github.com/aws/aws-sdk-js-v3/commit/d5924e94eb3bc06bf4ee35f2a6819eb7983e2e15))


### Features

* **clients:** remove comments from transpiled JS files ([#2817](https://github.com/aws/aws-sdk-js-v3/issues/2817)) ([d01420b](https://github.com/aws/aws-sdk-js-v3/commit/d01420b247966c8ec84c1dd0a1b42512ede10c90))
* **clients:** update clients as of 09/24/2021 ([#2826](https://github.com/aws/aws-sdk-js-v3/issues/2826)) ([845ca6e](https://github.com/aws/aws-sdk-js-v3/commit/845ca6e1f77c27d76ced3d309e0bf28e3f2b517f))
* **non-clients:** remove comments from transpiled JS files ([#2813](https://github.com/aws/aws-sdk-js-v3/issues/2813)) ([e6fc7f3](https://github.com/aws/aws-sdk-js-v3/commit/e6fc7f3e0fa74785590ac19e7ed143c916bb9b6e))





# [3.33.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.32.0...v3.33.0) (2021-09-21)


### Features

* **client-s3:** support generating endpoints from multi-region access point ([#2796](https://github.com/aws/aws-sdk-js-v3/issues/2796)) ([c1bed9d](https://github.com/aws/aws-sdk-js-v3/commit/c1bed9d5c54ea3afbfe1883877b452b0b54a69fa)), closes [#2759](https://github.com/aws/aws-sdk-js-v3/issues/2759)





# [3.32.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.31.0...v3.32.0) (2021-09-17)


### Bug Fixes

* **base64:** validate base64 strings ([#2779](https://github.com/aws/aws-sdk-js-v3/issues/2779)) ([2b336a3](https://github.com/aws/aws-sdk-js-v3/commit/2b336a3c26cc09cc39ecc12d662f4cb6f513ba36))


### Features

* **clients:** update clients as of 09/17/2021 ([#2795](https://github.com/aws/aws-sdk-js-v3/issues/2795)) ([45aee9d](https://github.com/aws/aws-sdk-js-v3/commit/45aee9dd8a87578a2b5a9e0c5345a0ab0a482e80))





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
