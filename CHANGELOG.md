# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
