# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.845.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.844.0...v3.845.0) (2025-07-15)


### Bug Fixes

* **clients:** upgrade @smithy/middleware-endpoint to fix file/env endpoint resolution ([#7206](https://github.com/aws/aws-sdk-js-v3/issues/7206)) ([37a6275](https://github.com/aws/aws-sdk-js-v3/commit/37a627510bc53ad0ce8d3ef10a2a5ec8ad195ee2))


### Features

* **client-ec2:** This release adds support for volume initialization status, which enables you to monitor when the initialization process for an EBS volume is completed. This release also adds IPv6 support to EC2 Instance Connect Endpoints, allowing you to connect to your EC2 Instance via a private IPv6 address. ([ba3d837](https://github.com/aws/aws-sdk-js-v3/commit/ba3d83753c3d4edf3b3e240a9697e9f9c9293644))





# [3.844.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.843.0...v3.844.0) (2025-07-09)


### Features

* **client-ec2:** Adds support to Capacity Blocks for ML for purchasing EC2 P6e-GB200 UltraServers. Customers can now purchase u-p6e-gb200x72 and u-p6e-gb200x36 UltraServers. Adds new DescribeCapacityBlocks andDescribeCapacityBlockStatus APIs. Adds support for CapacityBlockId to DescribeInstanceTopology. ([202ec5f](https://github.com/aws/aws-sdk-js-v3/commit/202ec5f1f458aac73c8b78558ddfdba9a9595542))





# [3.843.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.842.0...v3.843.0) (2025-07-03)


### Features

* **client-ec2:** This release adds GroupOwnerId as a response member to the DescribeSecurityGroupVpcAssociations API and also adds waiters for SecurityGroupVpcAssociations (SecurityGroupVpcAssociationAssociated and SecurityGroupVpcAssociationDisassociated). ([69f38fa](https://github.com/aws/aws-sdk-js-v3/commit/69f38fa850383d24be3650e605fbdcf508869084))





# [3.842.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.841.0...v3.842.0) (2025-07-02)


### Features

* **client-ec2:** AWS Site-to-Site VPN now supports IPv6 addresses on outer tunnel IPs, making it easier for customers to build or transition to IPv6-only networks. ([af240bd](https://github.com/aws/aws-sdk-js-v3/commit/af240bd17f5cd88164d6b68ade05f2b092817757))





# [3.841.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.840.0...v3.841.0) (2025-07-01)


### Features

* **client-ec2:** Add Context to GetInstanceTypesFromInstanceRequirements API ([f300167](https://github.com/aws/aws-sdk-js-v3/commit/f300167ad149be18f74c767373817618fa07fc10))





# [3.840.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.839.0...v3.840.0) (2025-06-30)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.839.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.838.0...v3.839.0) (2025-06-27)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.838.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.837.0...v3.838.0) (2025-06-26)


### Features

* **client-ec2:** This release adds support for OdbNetworkArn as a target in VPC Route Tables ([cf3c376](https://github.com/aws/aws-sdk-js-v3/commit/cf3c376223fb9a18988854c1a6e4e44ff0bb5528))





# [3.836.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.835.0...v3.836.0) (2025-06-24)


### Features

* **client-ec2:** This release allows you to create and register AMIs while maintaining their underlying EBS snapshots within Local Zones. ([cefd9f2](https://github.com/aws/aws-sdk-js-v3/commit/cefd9f2f5fa77e3792c333a0e8dd68f9bc873f4a))





# [3.835.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.834.0...v3.835.0) (2025-06-23)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.830.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.829.0...v3.830.0) (2025-06-16)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.828.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.827.1...v3.828.0) (2025-06-11)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.827.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.826.0...v3.827.0) (2025-06-09)


### Features

* **client-ec2:** Release to support Elastic VMware Service (Amazon EVS) Subnet and Amazon EVS Network Interface Types. ([5b52d8f](https://github.com/aws/aws-sdk-js-v3/commit/5b52d8f7e73edcdd601ac03482dc2db82a977587))





# [3.826.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.825.0...v3.826.0) (2025-06-06)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.825.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.824.0...v3.825.0) (2025-06-05)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.823.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.822.0...v3.823.0) (2025-06-03)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.821.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.820.0...v3.821.0) (2025-05-30)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.819.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.818.0...v3.819.0) (2025-05-28)


### Features

* **client-ec2:** Enable the option to automatically delete underlying Amazon EBS snapshots when deregistering Amazon Machine Images (AMIs) ([93df0c5](https://github.com/aws/aws-sdk-js-v3/commit/93df0c5dcb98390d1c7fbd443269e71fdb426788))





# [3.818.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.817.0...v3.818.0) (2025-05-27)


### Features

* **client-ec2:** This release adds three features - option to store AWS Site-to-Site VPN pre-shared keys in AWS Secrets Manager, GetActiveVpnTunnelStatus API to check the in-use VPN algorithms, and SampleType option in GetVpnConnectionDeviceSampleConfiguration API to get recommended sample configs for VPN devices. ([4bc58af](https://github.com/aws/aws-sdk-js-v3/commit/4bc58afe31771e9341607a8261609275f0db232a))





# [3.817.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.816.0...v3.817.0) (2025-05-23)


### Features

* **client-ec2:** This release adds support for the C7i-flex, M7i-flex, I7i, I7ie, I8g, P6-b200, Trn2, C8gd, M8gd and R8gd instances ([b99e6ed](https://github.com/aws/aws-sdk-js-v3/commit/b99e6ed089786925c196421ae93fc3ce3bc2d30a))





# [3.816.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.815.0...v3.816.0) (2025-05-22)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.815.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.814.0...v3.815.0) (2025-05-21)


### Features

* **client-ec2:** Release of Dualstack and Ipv6-only EC2 Public DNS hostnames ([b9f691a](https://github.com/aws/aws-sdk-js-v3/commit/b9f691a5bacc61a12b266eabd9fb2848aee6708c))





# [3.814.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.813.0...v3.814.0) (2025-05-20)


### Features

* **client-ec2:** This release expands the ModifyInstanceMaintenanceOptions API to enable or disable instance migration during customer-initiated reboots for EC2 Scheduled Reboot Events. ([fde0963](https://github.com/aws/aws-sdk-js-v3/commit/fde096353d5706fed085bfd8d18bb29b8ae8eedb))





# [3.813.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.812.0...v3.813.0) (2025-05-19)


### Features

* **client-ec2:** This release includes new APIs for System Integrity Protection (SIP) configuration and automated root volume ownership delegation for EC2 Mac instances. ([374726f](https://github.com/aws/aws-sdk-js-v3/commit/374726ff745820ef6d4f9712574398e1d61ddf95))





# [3.812.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.811.0...v3.812.0) (2025-05-16)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.810.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.809.0...v3.810.0) (2025-05-14)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.808.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.807.0...v3.808.0) (2025-05-12)


### Features

* **client-ec2:** EC2 - Adding support for AvailabilityZoneId ([c7ea904](https://github.com/aws/aws-sdk-js-v3/commit/c7ea90417645b33c4445840da7867bbdabf3fe84))





# [3.806.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.805.0...v3.806.0) (2025-05-08)


### Features

* **client-ec2:** Launching the feature to support ENA queues offering flexibility to support multiple queues per Enhanced Network Interface (ENI) ([b9b5b6c](https://github.com/aws/aws-sdk-js-v3/commit/b9b5b6ce947372911eb64e9f7ba043ac0d7f398b))





# [3.805.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.804.0...v3.805.0) (2025-05-07)


### Features

* **client-ec2:** This release adds API support for Path Component Exclusion (Filter Out ARN) for Reachability Analyzer ([5690387](https://github.com/aws/aws-sdk-js-v3/commit/5690387b145d3ff891195681b912235afe2d7cda))





# [3.804.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.803.0...v3.804.0) (2025-05-06)


### Features

* **client-ec2:** This release adds support for Amazon EBS Provisioned Rate for Volume Initialization, which lets you specify a volume initialization rate to ensure that your EBS volumes are initialized in a predictable amount of time. ([03ae328](https://github.com/aws/aws-sdk-js-v3/commit/03ae3280687f7624e6d141fb9e75bcfc7c7407cd))





# [3.803.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.802.0...v3.803.0) (2025-05-05)


### Features

* **client-ec2:** This update introduces API operations to manage and create local gateway VIF and VIF groups. It also includes API operations to describe Outpost LAGs and service link VIFs. ([0332513](https://github.com/aws/aws-sdk-js-v3/commit/0332513e4095ec8615fd6a755efee4c3d8d48ce3))





# [3.800.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.799.0...v3.800.0) (2025-04-30)


### Features

* **client-ec2:** Launch of cost distribution feature for IPAM owners to distribute costs to internal teams. ([69fe645](https://github.com/aws/aws-sdk-js-v3/commit/69fe6453c8d2065494c38c2ee28ff117ec09c4bb))





# [3.799.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.798.0...v3.799.0) (2025-04-29)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.798.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.797.0...v3.798.0) (2025-04-28)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.797.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.796.0...v3.797.0) (2025-04-25)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.796.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.795.0...v3.796.0) (2025-04-24)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.794.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.793.0...v3.794.0) (2025-04-22)


### Features

* **client-ec2:** Added support for  ClientRouteEnforcementOptions flag in CreateClientVpnEndpoint and ModifyClientVpnEndpoint requests and DescribeClientVpnEndpoints responses ([216c012](https://github.com/aws/aws-sdk-js-v3/commit/216c0129a3ef1dc1e03342a347be727a31a22b01))





# [3.787.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.786.0...v3.787.0) (2025-04-10)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.783.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.782.0...v3.783.0) (2025-04-04)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.782.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.781.0...v3.782.0) (2025-04-03)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.779.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.778.0...v3.779.0) (2025-03-31)


### Features

* **client-ec2:** Release VPC Route Server, a new feature allowing dynamic routing in VPCs. ([3740252](https://github.com/aws/aws-sdk-js-v3/commit/374025226e8233ec427c4924946dd9c6a2bda634))





# [3.777.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.776.0...v3.777.0) (2025-03-27)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.775.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.774.0...v3.775.0) (2025-03-25)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.774.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.773.0...v3.774.0) (2025-03-24)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.772.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.771.0...v3.772.0) (2025-03-20)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.771.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.770.0...v3.771.0) (2025-03-19)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.767.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.766.0...v3.767.0) (2025-03-13)


### Features

* **client-ec2:** This release changes the CreateLaunchTemplate, CreateLaunchTemplateVersion, ModifyLaunchTemplate CLI and SDKs such that if you do not specify a client token, a randomly generated token is used for the request to ensure idempotency. ([60c47be](https://github.com/aws/aws-sdk-js-v3/commit/60c47be9bdd6320cb5a3f827ed647cff034dfed8))





# [3.766.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.765.0...v3.766.0) (2025-03-11)


### Features

* **client-ec2:** This release adds the GroupLongName field to the response of the DescribeAvailabilityZones API. ([c2ccb07](https://github.com/aws/aws-sdk-js-v3/commit/c2ccb07c2282b37c49a0438bf41d028663d1e659))





# [3.764.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.763.0...v3.764.0) (2025-03-07)


### Features

* **client-ec2:** Add serviceManaged field to DescribeAddresses API response. ([23d9c73](https://github.com/aws/aws-sdk-js-v3/commit/23d9c730a344af79e6be0073b1d7736e68200087))





# [3.760.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.759.0...v3.760.0) (2025-03-03)


### Features

* **client-ec2:** Update the DescribeVpcs response ([893a566](https://github.com/aws/aws-sdk-js-v3/commit/893a566d2191831ef8508f8344b34365525f68a7))





# [3.758.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.757.0...v3.758.0) (2025-02-27)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.757.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.756.0...v3.757.0) (2025-02-26)


### Features

* **client-ec2:** Amazon EC2 Fleet customers can now override the Block Device Mapping specified in the Launch Template when creating a new Fleet request, saving the effort of creating and associating new Launch Templates to customize the Block Device Mapping. ([7ac960d](https://github.com/aws/aws-sdk-js-v3/commit/7ac960d6d3ee35faaddce19443478a54097eed98))





# [3.756.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.755.0...v3.756.0) (2025-02-25)


### Features

* **client-ec2:** Adds support for time-based EBS-backed AMI copy operations. Time-based copy ensures that EBS-backed AMIs are copied within and across Regions in a specified timeframe. ([027515e](https://github.com/aws/aws-sdk-js-v3/commit/027515e1b2e32bd18737e41ecae2d5721490cafb))





# [3.750.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.749.0...v3.750.0) (2025-02-17)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.749.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.748.0...v3.749.0) (2025-02-14)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.746.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.745.0...v3.746.0) (2025-02-11)


### Features

* **client-ec2:** Adding support for the new fullSnapshotSizeInBytes field in the response of the EC2 EBS DescribeSnapshots API. This field represents the size of all the blocks that were written to the source volume at the time the snapshot was created. ([2962b1b](https://github.com/aws/aws-sdk-js-v3/commit/2962b1bca17eaaacc3f6b8930648cfb632bca653))





# [3.744.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.743.0...v3.744.0) (2025-02-07)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.743.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.742.1...v3.743.0) (2025-02-06)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.741.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.740.0...v3.741.0) (2025-02-03)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.738.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.737.0...v3.738.0) (2025-01-29)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.737.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.736.0...v3.737.0) (2025-01-28)


### Features

* **client-ec2:** This release changes the CreateFleet CLI and SDK's such that if you do not specify a client token, a randomly generated token is used for the request to ensure idempotency. ([f3e70c5](https://github.com/aws/aws-sdk-js-v3/commit/f3e70c5ab8531e86b8adc0821b8d9e4b4a486b94))





# [3.734.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.733.0...v3.734.0) (2025-01-23)


### Features

* **client-ec2:** Added "future" allocation type for future dated capacity reservation ([752ea12](https://github.com/aws/aws-sdk-js-v3/commit/752ea1281ed4e46ccba73e24d6703284a48900e5))





## [3.731.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.731.0...v3.731.1) (2025-01-18)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.731.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.730.0...v3.731.0) (2025-01-17)


### Features

* **client-ec2:** Release u7i-6tb.112xlarge, u7i-8tb.112xlarge, u7inh-32tb.480xlarge, p5e.48xlarge, p5en.48xlarge, f2.12xlarge, f2.48xlarge, trn2.48xlarge instance types. ([8fa946c](https://github.com/aws/aws-sdk-js-v3/commit/8fa946c9178cfbc48d4f7de4876440aa712e9f9e))





# [3.730.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.729.0...v3.730.0) (2025-01-16)


### Bug Fixes

* **nested-clients:** create nested clients for internal use ([#6791](https://github.com/aws/aws-sdk-js-v3/issues/6791)) ([5c53685](https://github.com/aws/aws-sdk-js-v3/commit/5c5368554d13a3b798a72c53e30cd3d897621135))





# [3.727.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.726.1...v3.727.0) (2025-01-13)


### Features

* **client-ec2:** Add support for DisconnectOnSessionTimeout flag in CreateClientVpnEndpoint and ModifyClientVpnEndpoint requests and DescribeClientVpnEndpoints responses ([9b98cef](https://github.com/aws/aws-sdk-js-v3/commit/9b98cefc05259870bb11229feb9b136afa1ed813))





## [3.726.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.726.0...v3.726.1) (2025-01-10)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.726.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.725.0...v3.726.0) (2025-01-09)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.723.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.722.0...v3.723.0) (2025-01-06)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.721.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.720.0...v3.721.0) (2025-01-02)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.716.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.715.0...v3.716.0) (2024-12-19)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.714.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.713.0...v3.714.0) (2024-12-17)


### Features

* **clients:** profile setting for clients ([#6728](https://github.com/aws/aws-sdk-js-v3/issues/6728)) ([afd9eea](https://github.com/aws/aws-sdk-js-v3/commit/afd9eea89fd0d63a377123f1ca999daeefd904a7))





# [3.713.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.712.0...v3.713.0) (2024-12-16)


### Features

* **client-ec2:** This release adds support for EBS local snapshots in AWS Dedicated Local Zones, which allows you to store snapshots of EBS volumes locally in Dedicated Local Zones. ([0a3b2ac](https://github.com/aws/aws-sdk-js-v3/commit/0a3b2ac392812b1959d28336025b20ff5425233f))





# [3.712.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.711.0...v3.712.0) (2024-12-13)


### Features

* **client-ec2:** This release adds GroupId to the response for DeleteSecurityGroup. ([537aeca](https://github.com/aws/aws-sdk-js-v3/commit/537aeca538d1256bb1583fc2a7574b7729fed159))





# [3.709.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.708.0...v3.709.0) (2024-12-10)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.708.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.707.0...v3.708.0) (2024-12-09)


### Features

* **client-ec2:** This release includes a new API for modifying instance network-performance-options after launch. ([2f49c14](https://github.com/aws/aws-sdk-js-v3/commit/2f49c14f1a0d86c9bba35757784eb1f317008542))





# [3.703.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.702.0...v3.703.0) (2024-12-02)


### Features

* **client-ec2:** Adds support for declarative policies that allow you to enforce desired configuration across an AWS organization through configuring account attributes. Adds support for Allowed AMIs that allows you to limit the use of AMIs in AWS accounts. Adds support for connectivity over non-HTTP protocols. ([478480a](https://github.com/aws/aws-sdk-js-v3/commit/478480a6c172c0f48ea39b501c9ec1fef66d9a20))





# [3.701.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.700.0...v3.701.0) (2024-11-26)


### Features

* **client-ec2:** Adds support for Time-based Copy for EBS Snapshots and Cross Region PrivateLink. Time-based Copy ensures that EBS Snapshots are copied within and across AWS Regions in a specified timeframe. Cross Region PrivateLink enables customers to connect to VPC endpoint services hosted in other AWS Regions. ([a370f24](https://github.com/aws/aws-sdk-js-v3/commit/a370f241842b10a3cff90de23a697026638af7bb))





# [3.699.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.698.0...v3.699.0) (2024-11-22)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.698.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.697.0...v3.698.0) (2024-11-21)


### Features

* **client-ec2:** Adds support for requesting future-dated Capacity Reservations with a minimum commitment duration, enabling IPAM for organizational units within AWS Organizations, reserving EC2 Capacity Blocks that start in 30 minutes, and extending the end date of existing Capacity Blocks. ([074cf4e](https://github.com/aws/aws-sdk-js-v3/commit/074cf4e830fce887c7920010dc966257e45c185d))





# [3.697.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.696.0...v3.697.0) (2024-11-20)


### Features

* **client-ec2:** With this release, customers can express their desire to launch instances only in an ODCR or ODCR group rather than OnDemand capacity. Customers can express their baseline instances' CPU-performance in attribute-based Instance Requirements configuration by referencing an instance family. ([7cf2a36](https://github.com/aws/aws-sdk-js-v3/commit/7cf2a366d851d60a621b90ec296f49ec832fc666))





# [3.696.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.695.0...v3.696.0) (2024-11-19)


### Features

* **client-ec2:** This release adds VPC Block Public Access (VPC BPA), a new declarative control which blocks resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. ([7905a8e](https://github.com/aws/aws-sdk-js-v3/commit/7905a8e0411106fb5e50118d6602e83016c8f349))





# [3.695.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.694.0...v3.695.0) (2024-11-18)


### Features

* **client-ec2:** Adding request and response elements for managed resources. ([be4dacb](https://github.com/aws/aws-sdk-js-v3/commit/be4dacb1b18a92244302ac4e47bc3d7712a699b1))





# [3.694.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.693.0...v3.694.0) (2024-11-15)


### Features

* **client-ec2:** Remove non-functional enum variants for FleetCapacityReservationUsageStrategy ([b25f0b0](https://github.com/aws/aws-sdk-js-v3/commit/b25f0b06188e1ad01e2515f080ead4b0e9f070d2))





# [3.693.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.692.0...v3.693.0) (2024-11-15)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.692.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.691.0...v3.692.0) (2024-11-14)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.691.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.690.0...v3.691.0) (2024-11-13)


### Features

* **client-ec2:** This release adds the source AMI details in DescribeImages API ([67fa666](https://github.com/aws/aws-sdk-js-v3/commit/67fa666deb5d55b9a03fb504deaee20c6684d6e9))





# [3.687.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.686.0...v3.687.0) (2024-11-07)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.686.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.685.0...v3.686.0) (2024-11-06)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.683.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.682.0...v3.683.0) (2024-10-30)


### Features

* **client-ec2:** This release adds two new capabilities to VPC Security Groups: Security Group VPC Associations and Shared Security Groups. ([095a3b8](https://github.com/aws/aws-sdk-js-v3/commit/095a3b870df7963495a112130f1526506f9cda99))





# [3.682.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.681.0...v3.682.0) (2024-10-29)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.679.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.678.0...v3.679.0) (2024-10-24)


### Features

* **client-ec2:** This release includes a new API to describe some details of the Amazon Machine Images (AMIs) that were used to launch EC2 instances, even if those AMIs are no longer available for use. ([f624638](https://github.com/aws/aws-sdk-js-v3/commit/f6246389e5c8ba06f29eca28ee8fc2728a596419))





# [3.678.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.677.0...v3.678.0) (2024-10-23)


### Features

* **client-ec2:** Amazon EC2 X8g, C8g and M8g instances are powered by AWS Graviton4 processors. X8g provide the lowest cost per GiB of memory among Graviton4 instances. C8g provide the best price performance for compute-intensive workloads. M8g provide the best price performance in for general purpose workloads. ([fe1251e](https://github.com/aws/aws-sdk-js-v3/commit/fe1251ec777e4ad3ecce38427dfda02d6cb774a5))





# [3.677.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.676.0...v3.677.0) (2024-10-22)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.676.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.675.0...v3.676.0) (2024-10-21)


### Features

* **client-ec2:** Amazon EC2 now allows you to create network interfaces with just the EFA driver and no ENA driver by specifying the network interface type as efa-only. ([67509d4](https://github.com/aws/aws-sdk-js-v3/commit/67509d43371d9854fb3e55586d493bc16446e8c4))





# [3.675.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.674.0...v3.675.0) (2024-10-18)


### Features

* **client-ec2:** RequestSpotInstances and RequestSpotFleet feature release. ([a4c0494](https://github.com/aws/aws-sdk-js-v3/commit/a4c0494312674818ec78e7e3a59f81e0c5031822))





# [3.674.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.673.0...v3.674.0) (2024-10-17)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.670.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.669.0...v3.670.0) (2024-10-11)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.669.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.668.0...v3.669.0) (2024-10-10)


### Features

* **client-ec2:** This release adds support for assigning the billing of shared Amazon EC2 On-Demand Capacity Reservations. ([88ca256](https://github.com/aws/aws-sdk-js-v3/commit/88ca2562eaf47545a2759bf132de91ea8c9a2208))





# [3.668.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.667.0...v3.668.0) (2024-10-09)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.667.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.666.0...v3.667.0) (2024-10-08)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.666.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.665.0...v3.666.0) (2024-10-07)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.665.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.664.0...v3.665.0) (2024-10-04)


### Features

* **client-ec2:** Documentation updates for Amazon EC2. ([404a00a](https://github.com/aws/aws-sdk-js-v3/commit/404a00ac9719d5b59bb9d37151d8abed23616789))





# [3.664.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.663.0...v3.664.0) (2024-10-03)


### Features

* **client-ec2:** This release includes a new API for modifying instance cpu-options after launch. ([a29a5e4](https://github.com/aws/aws-sdk-js-v3/commit/a29a5e4450c9a1c7ccd90889be2dd1b443b62c61))
* **middleware-user-agent:** add client config for userAgentAppId ([#6524](https://github.com/aws/aws-sdk-js-v3/issues/6524)) ([2990ea8](https://github.com/aws/aws-sdk-js-v3/commit/2990ea8f0d689966a9de0000d579f147c2d4af81))





# [3.662.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.661.0...v3.662.0) (2024-10-01)


### Bug Fixes

* **s3-request-presigner:** enable overriding hoistable headers ([#6535](https://github.com/aws/aws-sdk-js-v3/issues/6535)) ([3c2e59c](https://github.com/aws/aws-sdk-js-v3/commit/3c2e59cfddd753d1c9739332b9195ae5eadde4df))





## [3.658.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.658.0...v3.658.1) (2024-09-25)


### Bug Fixes

* **clients:** allow empty string field values for headers ([#6511](https://github.com/aws/aws-sdk-js-v3/issues/6511)) ([1273ff3](https://github.com/aws/aws-sdk-js-v3/commit/1273ff317071749cfeb88caad9df7492256c03e2))





# [3.658.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.657.0...v3.658.0) (2024-09-24)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.657.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.656.0...v3.657.0) (2024-09-23)


### Features

* **client-ec2:** Amazon EC2 G6e instances powered by NVIDIA L40S Tensor Core GPUs are the most cost-efficient GPU instances for deploying generative AI models and the highest performance GPU instances for spatial computing workloads. ([a99738f](https://github.com/aws/aws-sdk-js-v3/commit/a99738f66b48e16c5df6e2f7cf56285ba37ef1c7))





# [3.654.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.653.0...v3.654.0) (2024-09-18)

**Note:** Version bump only for package @aws-sdk/client-ec2





## [3.651.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.651.0...v3.651.1) (2024-09-13)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.650.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.649.0...v3.650.0) (2024-09-11)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.649.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.648.0...v3.649.0) (2024-09-10)


### Features

* **endpoints:** codegen sync for request creation performance improvements ([#6449](https://github.com/aws/aws-sdk-js-v3/issues/6449)) ([c8e8f28](https://github.com/aws/aws-sdk-js-v3/commit/c8e8f28d0714c8165162e1411b5f740ba729a93a))





# [3.645.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.644.0...v3.645.0) (2024-09-04)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.641.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.640.0...v3.641.0) (2024-08-28)


### Features

* **client-ec2:** Amazon VPC IP Address Manager (IPAM) now allows customers to provision IPv4 CIDR blocks and allocate Elastic IP Addresses directly from IPAM pools with public IPv4 space ([4f1d59b](https://github.com/aws/aws-sdk-js-v3/commit/4f1d59bf3763bc9b84108cc4e5b2910a9b3ddc33))





# [3.637.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.636.0...v3.637.0) (2024-08-22)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.636.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.635.0...v3.636.0) (2024-08-21)


### Features

* **client-ec2:** DescribeInstanceStatus now returns health information on EBS volumes attached to Nitro instances ([1baa7ea](https://github.com/aws/aws-sdk-js-v3/commit/1baa7ea8b6561e800c4d9895862bc3f6b4bf1f1b))





# [3.635.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.634.0...v3.635.0) (2024-08-20)


### Features

* **codegen:** add Smithy RPCv2 CBOR to list of protocols ([#6096](https://github.com/aws/aws-sdk-js-v3/issues/6096)) ([5154d4f](https://github.com/aws/aws-sdk-js-v3/commit/5154d4f19bc77a7bad075b35ce135d3b5f60ad1d))





# [3.632.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.631.0...v3.632.0) (2024-08-15)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.631.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.630.0...v3.631.0) (2024-08-14)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.629.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.628.0...v3.629.0) (2024-08-12)


### Features

* **client-ec2:** This release adds new capabilities to manage On-Demand Capacity Reservations including the ability to split your reservation, move capacity between reservations, and modify the instance eligibility of your reservation. ([6e0db43](https://github.com/aws/aws-sdk-js-v3/commit/6e0db432b8b0f0e85123c972640c2df1cb77c29d))





# [3.627.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.626.0...v3.627.0) (2024-08-08)


### Features

* **client-ec2:** Launch of private IPv6 addressing for VPCs and Subnets. VPC IPAM supports the planning and monitoring of private IPv6 usage. ([94af5dd](https://github.com/aws/aws-sdk-js-v3/commit/94af5ddc7f131af9a7258bcf802ea9b9d2a1e7d3))





# [3.624.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.623.0...v3.624.0) (2024-08-05)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.623.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.622.0...v3.623.0) (2024-08-02)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.622.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.621.0...v3.622.0) (2024-08-01)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.621.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.620.1...v3.621.0) (2024-07-30)

**Note:** Version bump only for package @aws-sdk/client-ec2





## [3.620.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.620.0...v3.620.1) (2024-07-29)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.620.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.619.0...v3.620.0) (2024-07-25)


### Features

* **client-ec2:** EC2 Fleet now supports using custom identifiers to reference Amazon Machine Images (AMI) in launch requests that are configured to choose from a diversified list of instance types. ([88cbe69](https://github.com/aws/aws-sdk-js-v3/commit/88cbe697deec217c20b874a5208a763a4f89143d))





# [3.616.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.615.0...v3.616.0) (2024-07-18)


### Features

* **client-ec2:** Amazon VPC IP Address Manager (IPAM) now supports Bring-Your-Own-IP (BYOIP) for IP addresses registered with any Internet Registry. This feature uses DNS TXT records to validate ownership of a public IP address range. ([337c43d](https://github.com/aws/aws-sdk-js-v3/commit/337c43d0ad9dcd59b12a9d338c76c19a9e8bf11a))





# [3.614.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.613.0...v3.614.0) (2024-07-10)


### Features

* **client-ec2:** Add parameters to enable provisioning IPAM BYOIPv4 space at a Local Zone Network Border Group level ([d835dbb](https://github.com/aws/aws-sdk-js-v3/commit/d835dbb9b6eaa07b851e5eb826bcd947a45ee1ec))





# [3.613.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.612.0...v3.613.0) (2024-07-09)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.609.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.608.0...v3.609.0) (2024-07-02)


### Features

* **client-ec2:** Documentation updates for Elastic Compute Cloud (EC2). ([c155b9e](https://github.com/aws/aws-sdk-js-v3/commit/c155b9e2ca52f81da287efb0c184de8f5388884d))





# [3.606.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.605.0...v3.606.0) (2024-06-27)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.604.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.603.0...v3.604.0) (2024-06-25)


### Features

* **client-ec2:** This release is for the launch of the new u7ib-12tb.224xlarge, R8g, c7gn.metal and mac2-m1ultra.metal instance types ([50f2aa7](https://github.com/aws/aws-sdk-js-v3/commit/50f2aa73483c58a071914efc256fefeb81cf3128))





# [3.600.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.599.0...v3.600.0) (2024-06-18)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.598.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.597.0...v3.598.0) (2024-06-14)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.596.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.595.0...v3.596.0) (2024-06-12)


### Features

* **client-ec2:** Tagging support for Traffic Mirroring FilterRule resource ([9539a33](https://github.com/aws/aws-sdk-js-v3/commit/9539a33ea4fcd0bfa5dd74cb8863c38636fdcfe0))





# [3.592.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.591.0...v3.592.0) (2024-06-06)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.590.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.589.0...v3.590.0) (2024-06-04)


### Bug Fixes

* **codegen:** consistently add region as config option when generated client is Sigv4 but not AWS ([#6156](https://github.com/aws/aws-sdk-js-v3/issues/6156)) ([06f51cc](https://github.com/aws/aws-sdk-js-v3/commit/06f51ccdc1c825f4b4de6a865520ace78c098ff3))


### Features

* **client-ec2:** U7i instances with up to 32 TiB of DDR5 memory and 896 vCPUs are now available. C7i-flex instances are launched and are lower-priced variants of the Amazon EC2 C7i instances that offer a baseline level of CPU performance with the ability to scale up to the full compute performance 95% of the time. ([370c001](https://github.com/aws/aws-sdk-js-v3/commit/370c001783ddf3927e9c4088be411a485f972991))





# [3.588.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.587.0...v3.588.0) (2024-05-31)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.587.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.586.0...v3.587.0) (2024-05-30)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.585.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.584.0...v3.585.0) (2024-05-28)


### Features

* **client-ec2:** Providing support to accept BgpAsnExtended attribute ([1be7eb2](https://github.com/aws/aws-sdk-js-v3/commit/1be7eb260caf2b8073eb80c92faa942d3d15a296))





# [3.583.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.582.0...v3.583.0) (2024-05-23)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.582.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.581.0...v3.582.0) (2024-05-22)


### Bug Fixes

* **client-ec2:** ec2 query no longer serialize empty lists ([#6119](https://github.com/aws/aws-sdk-js-v3/issues/6119)) ([d4b286c](https://github.com/aws/aws-sdk-js-v3/commit/d4b286c6cc63b6281cfb3bedf5c519fa0c5020d9))





# [3.577.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.576.0...v3.577.0) (2024-05-15)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.576.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.575.0...v3.576.0) (2024-05-14)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.575.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.574.0...v3.575.0) (2024-05-13)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.574.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.573.0...v3.574.0) (2024-05-10)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.572.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.571.0...v3.572.0) (2024-05-08)


### Features

* **client-ec2:** Adding Precision Hardware Clock (PHC) to public API DescribeInstanceTypes ([711a8ff](https://github.com/aws/aws-sdk-js-v3/commit/711a8ff4e4db701bc19faa32cf84fb4857679717))





# [3.569.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.568.0...v3.569.0) (2024-05-03)


### Bug Fixes

* **clients:** add deps required by default credential providers ([#6055](https://github.com/aws/aws-sdk-js-v3/issues/6055)) ([bfa8626](https://github.com/aws/aws-sdk-js-v3/commit/bfa86268540d197a21f13e8d2e8bced10b78d480))





# [3.568.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.567.0...v3.568.0) (2024-05-02)


### Features

* **client-ec2:** This release includes a new API for retrieving the public endorsement key of the EC2 instance's Nitro Trusted Platform Module (NitroTPM). ([0903d38](https://github.com/aws/aws-sdk-js-v3/commit/0903d38f5d8e42c03a022003546ccacff35e0e5e))





# [3.567.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.566.0...v3.567.0) (2024-05-01)


### Features

* end support for Node.js 14.x ([#6034](https://github.com/aws/aws-sdk-js-v3/issues/6034)) ([d196411](https://github.com/aws/aws-sdk-js-v3/commit/d19641119f07d62c29f12348f448cd834d841533))





# [3.565.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.564.0...v3.565.0) (2024-04-29)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.564.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.563.0...v3.564.0) (2024-04-26)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.563.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.562.0...v3.563.0) (2024-04-25)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.562.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.561.0...v3.562.0) (2024-04-24)


### Features

* **client-ec2:** Launching capability for customers to enable or disable automatic assignment of public IPv4 addresses to their network interface ([6121a23](https://github.com/aws/aws-sdk-js-v3/commit/6121a23480f7be708bad3b2d4e50eeec7b5fe667))





# [3.561.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.560.0...v3.561.0) (2024-04-23)


### Features

* **client-ec2:** This release introduces EC2 AMI Deregistration Protection, a new AMI property that can be enabled by customers to protect an AMI against an unintended deregistration. This release also enables the AMI owners to view the AMI 'LastLaunchedTime' in DescribeImages API. ([4fcf9f7](https://github.com/aws/aws-sdk-js-v3/commit/4fcf9f7235d718e620e3fa4df1253aa1fd2dd453))





# [3.557.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.556.0...v3.557.0) (2024-04-17)


### Features

* **client-ec2:** Documentation updates for Elastic Compute Cloud (EC2). ([08bd27c](https://github.com/aws/aws-sdk-js-v3/commit/08bd27c46fa8739c1c50e5ba4c78a121e89c1685))





# [3.556.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.555.0...v3.556.0) (2024-04-16)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.554.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.553.0...v3.554.0) (2024-04-11)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.552.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.551.0...v3.552.0) (2024-04-09)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.549.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.548.0...v3.549.0) (2024-04-04)


### Features

* **client-ec2:** Amazon EC2 G6 instances powered by NVIDIA L4 Tensor Core GPUs can be used for a wide range of graphics-intensive and machine learning use cases. Gr6 instances also feature NVIDIA L4 GPUs and can be used for graphics workloads with higher memory requirements. ([379b756](https://github.com/aws/aws-sdk-js-v3/commit/379b756b05ad7b0cf768380d5bdc305a9e7b28ec))





# [3.544.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.543.0...v3.544.0) (2024-03-28)


### Features

* **client-ec2:** Amazon EC2 C7gd, M7gd and R7gd metal instances with up to 3.8 TB of local NVMe-based SSD block-level storage have up to 45% improved real-time NVMe storage performance than comparable Graviton2-based instances. ([790018d](https://github.com/aws/aws-sdk-js-v3/commit/790018dce662cdea619ab14a4a0b0df8699bff22))





# [3.542.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.541.0...v3.542.0) (2024-03-26)


### Features

* **client-ec2:** Documentation updates for Elastic Compute Cloud (EC2). ([5f6803a](https://github.com/aws/aws-sdk-js-v3/commit/5f6803ae75603a4e7e95e020447e676a7a6bf8eb))





# [3.541.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.540.0...v3.541.0) (2024-03-25)


### Features

* **client-ec2:** Added support for ModifyInstanceMetadataDefaults and GetInstanceMetadataDefaults to set Instance Metadata Service account defaults ([cdacf23](https://github.com/aws/aws-sdk-js-v3/commit/cdacf23276c4ed985d6510f396bde4689d10ef20))





# [3.540.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.539.0...v3.540.0) (2024-03-22)


### Bug Fixes

* **util-endpoints:** augment endpointFunctions inline in endpointResolver functions ([#5933](https://github.com/aws/aws-sdk-js-v3/issues/5933)) ([42a791d](https://github.com/aws/aws-sdk-js-v3/commit/42a791defb20c697fefc985f1f2b22fc9e5be388))





# [3.537.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.536.0...v3.537.0) (2024-03-19)


### Features

* **client-ec2:** This release adds the new DescribeMacHosts API operation for getting information about EC2 Mac Dedicated Hosts. Users can now see the latest macOS versions that their underlying Apple Mac can support without needing to be updated. ([b2f3261](https://github.com/aws/aws-sdk-js-v3/commit/b2f3261a37a5edfc0c8b1664f9cb8e4609dcd798))





# [3.535.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.534.0...v3.535.0) (2024-03-15)


### Features

* **client-ec2:** Add media accelerator and neuron device information on the describe instance types API. ([1d943e0](https://github.com/aws/aws-sdk-js-v3/commit/1d943e009b635ec2e87809553ddd2b8ae8e514ca))





# [3.533.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.532.0...v3.533.0) (2024-03-13)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.532.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.531.0...v3.532.0) (2024-03-12)

**Note:** Version bump only for package @aws-sdk/client-ec2





## [3.529.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.529.0...v3.529.1) (2024-03-08)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.529.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.528.0...v3.529.0) (2024-03-07)


### Features

* **client-ec2:** This release adds an optional parameter to RegisterImage and CopyImage APIs to support tagging AMIs at the time of creation. ([b6f2e1d](https://github.com/aws/aws-sdk-js-v3/commit/b6f2e1d506d7cb6cf015ed5b3280187c71bc01ce))





## [3.525.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.525.0...v3.525.1) (2024-03-01)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.525.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.524.0...v3.525.0) (2024-02-29)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.523.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.522.0...v3.523.0) (2024-02-27)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.521.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.520.0...v3.521.0) (2024-02-23)


### Features

* requestHandler ctor param pass-through ([#5820](https://github.com/aws/aws-sdk-js-v3/issues/5820)) ([9fec71d](https://github.com/aws/aws-sdk-js-v3/commit/9fec71d1933cd8e3db118c164bca16edc2305532))





# [3.515.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.514.0...v3.515.0) (2024-02-15)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.514.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.513.0...v3.514.0) (2024-02-14)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.513.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.512.0...v3.513.0) (2024-02-13)


### Features

* **experimentalIdentityAndAuth:** release phase for services without customizations ([#5787](https://github.com/aws/aws-sdk-js-v3/issues/5787)) ([4004ff6](https://github.com/aws/aws-sdk-js-v3/commit/4004ff68a8ad20f6e60e8fab1f8952928f92f4b7))





# [3.511.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.510.0...v3.511.0) (2024-02-09)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.509.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.508.0...v3.509.0) (2024-02-07)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.507.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.506.0...v3.507.0) (2024-02-05)


### Features

* unified error dispatcher in protocols ([#5756](https://github.com/aws/aws-sdk-js-v3/issues/5756)) ([0872087](https://github.com/aws/aws-sdk-js-v3/commit/0872087ef56422541bd38d293f97613dfd10236f))





# [3.504.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.503.1...v3.504.0) (2024-01-31)

**Note:** Version bump only for package @aws-sdk/client-ec2





## [3.503.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.503.0...v3.503.1) (2024-01-30)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.503.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.502.0...v3.503.0) (2024-01-30)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.502.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.501.0...v3.502.0) (2024-01-29)


### Features

* **client-ec2:** EC2 Fleet customers who use attribute based instance-type selection can now intuitively define their Spot instances price protection limit as a percentage of the lowest priced On-Demand instance type. ([5465534](https://github.com/aws/aws-sdk-js-v3/commit/5465534c6854f6c797940fa6eea57709a985c46c))
* **credential-providers:** lazy load STS & SSO clients in credential providers ([#5681](https://github.com/aws/aws-sdk-js-v3/issues/5681)) ([d27301d](https://github.com/aws/aws-sdk-js-v3/commit/d27301d48f3e75fdaccabf58f779f0b33a70664e))





# [3.501.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.500.0...v3.501.0) (2024-01-26)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.499.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.498.0...v3.499.0) (2024-01-24)


### Features

* **client-ec2:** Introduced a new clientToken request parameter on CreateNetworkAcl and CreateRouteTable APIs. The clientToken parameter allows idempotent operations on the APIs. ([65a1927](https://github.com/aws/aws-sdk-js-v3/commit/65a1927ac166f2aa7ff449b72256f900f1c8d104))





# [3.498.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.497.0...v3.498.0) (2024-01-23)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.497.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.496.0...v3.497.0) (2024-01-22)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.496.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.495.0...v3.496.0) (2024-01-19)


### Bug Fixes

* get full list of exports for esm compat in dist-cjs ([#5694](https://github.com/aws/aws-sdk-js-v3/issues/5694)) ([5d26da6](https://github.com/aws/aws-sdk-js-v3/commit/5d26da6d07b593ae286ca674fb3cbff7c833cbb0))





# [3.495.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.494.0...v3.495.0) (2024-01-18)


### Features

* use bundled dist-cjs build ([#5687](https://github.com/aws/aws-sdk-js-v3/issues/5687)) ([5f79e22](https://github.com/aws/aws-sdk-js-v3/commit/5f79e225e32f0b2ed5b432ae4e4108663eb0acfb))





# [3.490.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.489.0...v3.490.0) (2024-01-11)


### Bug Fixes

* **experimentalIdentityAndAuth:** rename `AWSSDKSigV4` to `AwsSdkSigV4` ([#5667](https://github.com/aws/aws-sdk-js-v3/issues/5667)) ([9c3e91a](https://github.com/aws/aws-sdk-js-v3/commit/9c3e91aeb155cad42ce56cc116aa71bc8f2457c9))


### Features

* **client-ec2:** This release adds support for adding an ElasticBlockStorage volume configurations in ECS RunTask/StartTask/CreateService/UpdateService APIs. The configuration allows for attaching EBS volumes to ECS Tasks. ([dd0cdf2](https://github.com/aws/aws-sdk-js-v3/commit/dd0cdf2e755ed6702e14174510958c4609cd8748))
* **experimentalIdentityAndAuth:** release phase for services with customizations ([#5288](https://github.com/aws/aws-sdk-js-v3/issues/5288)) ([ddc477c](https://github.com/aws/aws-sdk-js-v3/commit/ddc477c39da563db4d26e552f9e6edf7254d4ea3))





# [3.489.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.488.0...v3.489.0) (2024-01-10)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.488.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.487.0...v3.488.0) (2024-01-08)


### Features

* **client-ec2:** Amazon EC2 R7iz bare metal instances are powered by custom 4th generation Intel Xeon Scalable processors. ([c62c9b2](https://github.com/aws/aws-sdk-js-v3/commit/c62c9b2628e47193267498ae6463197c7d0ce275))
* **experimentalIdentityAndAuth:** release phase for services with signing customizations ([#5286](https://github.com/aws/aws-sdk-js-v3/issues/5286)) ([1ba36c4](https://github.com/aws/aws-sdk-js-v3/commit/1ba36c483267397a903d8cf6dde068641772b552))





# [3.485.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.484.0...v3.485.0) (2024-01-03)


### Features

* **credential-providers:** add credentialScope field ([#5606](https://github.com/aws/aws-sdk-js-v3/issues/5606)) ([04c1459](https://github.com/aws/aws-sdk-js-v3/commit/04c14592898ac63ed87d47f2a53320ccaa991083))





# [3.484.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.483.0...v3.484.0) (2023-12-29)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.481.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.480.0...v3.481.0) (2023-12-26)


### Features

* codegen for command class builder ([#5604](https://github.com/aws/aws-sdk-js-v3/issues/5604)) ([4835de4](https://github.com/aws/aws-sdk-js-v3/commit/4835de4ebb8f302ae1e838ac1efaf5f12384910d))





# [3.478.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.477.0...v3.478.0) (2023-12-20)


### Features

* codegen for paginator factory ([#5590](https://github.com/aws/aws-sdk-js-v3/issues/5590)) ([e54099b](https://github.com/aws/aws-sdk-js-v3/commit/e54099b7c1eb3b1de5737d5494821b1dae045fca))





# [3.477.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.476.0...v3.477.0) (2023-12-19)


### Features

* **client-ec2:** Provision BYOIPv4 address ranges and advertise them by specifying the network border groups option in Los Angeles, Phoenix and Dallas AWS Local Zones. ([0d9d3e8](https://github.com/aws/aws-sdk-js-v3/commit/0d9d3e82ea19aa0cf6930ba02282277b92bc2d29))
* xml codegen reduction ([#5566](https://github.com/aws/aws-sdk-js-v3/issues/5566)) ([3ed7c81](https://github.com/aws/aws-sdk-js-v3/commit/3ed7c81f9191182826de7645078cc6ed1d2ee959))





# [3.476.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.475.0...v3.476.0) (2023-12-18)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.474.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.473.0...v3.474.0) (2023-12-14)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.473.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.472.0...v3.473.0) (2023-12-13)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.470.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.469.0...v3.470.0) (2023-12-08)


### Features

* **client-ec2:** M2 Mac instances are built on Apple M2 Mac mini computers. I4i instances are powered by 3rd generation Intel Xeon Scalable processors. C7i compute optimized, M7i general purpose and R7i memory optimized instances are powered by custom 4th Generation Intel Xeon Scalable processors. ([1a9fca9](https://github.com/aws/aws-sdk-js-v3/commit/1a9fca9ee989d89c444a78d8e7f6664d38055e69))





# [3.468.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.467.0...v3.468.0) (2023-12-06)


### Features

* **client-ec2:** Releasing the new cpuManufacturer attribute within the DescribeInstanceTypes API response which notifies our customers with information on who the Manufacturer is for the processor attached to the instance, for example: Intel. ([35fbeb8](https://github.com/aws/aws-sdk-js-v3/commit/35fbeb846843da47b950e7e03be3370489cab5bc))





# [3.467.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.466.0...v3.467.0) (2023-12-05)


### Features

* **client-ec2:** Adds A10G, T4G, and H100 as accelerator name options and Habana as an accelerator manufacturer option for attribute based selection ([9e3bce6](https://github.com/aws/aws-sdk-js-v3/commit/9e3bce603ad5e74fe11d657183655ec656036b2d))





# [3.465.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.464.0...v3.465.0) (2023-12-01)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.462.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.461.0...v3.462.0) (2023-11-29)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.461.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.460.0...v3.461.0) (2023-11-28)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.460.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.459.0...v3.460.0) (2023-11-28)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.458.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.457.0...v3.458.0) (2023-11-27)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.456.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.455.0...v3.456.0) (2023-11-21)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.455.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.454.0...v3.455.0) (2023-11-20)


### Features

* **client-ec2:** This release adds support for Security group referencing over Transit gateways, enabling you to simplify Security group management and control of instance-to-instance traffic across VPCs that are connected by Transit gateway. ([740d241](https://github.com/aws/aws-sdk-js-v3/commit/740d2418d9da9c6bac0f7dcc6bf1987fd7ced101))





# [3.454.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.453.0...v3.454.0) (2023-11-17)


### Features

* **client-ec2:** This release adds new features for Amazon VPC IP Address Manager (IPAM) Allowing a choice between Free and Advanced Tiers, viewing public IP address insights across regions and in Amazon Cloudwatch, use IPAM to plan your subnet IPs within a VPC and bring your own autonomous system number to IPAM. ([7a42bf1](https://github.com/aws/aws-sdk-js-v3/commit/7a42bf10ea54a082b3b4f2e0a6a9b8edefacd584))





# [3.453.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.452.0...v3.453.0) (2023-11-16)


### Features

* **client-ec2:** Enable use of tenant-specific PublicSigningKeyUrl from device trust providers and onboard jumpcloud as a new device trust provider. ([9e1a837](https://github.com/aws/aws-sdk-js-v3/commit/9e1a8373e3df5bac1de43327eb9ecb0063882ad1))





# [3.452.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.451.0...v3.452.0) (2023-11-15)


### Features

* **client-ec2:** AWS EBS now supports Snapshot Lock, giving users the ability to lock an EBS Snapshot to prohibit deletion of the snapshot. This release introduces the LockSnapshot, UnlockSnapshot & DescribeLockedSnapshots APIs to manage lock configuration for snapshots. The release also includes the dl2q_24xlarge. ([8177a46](https://github.com/aws/aws-sdk-js-v3/commit/8177a4654cf77422903e41ccacd07601b149c533))





# [3.451.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.450.0...v3.451.0) (2023-11-14)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.450.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.449.0...v3.450.0) (2023-11-13)


### Features

* **client-ec2:** Adds the new EC2 DescribeInstanceTopology API, which you can use to retrieve the network topology of your running instances on select platform types to determine their relative proximity to each other. ([ce5a2b0](https://github.com/aws/aws-sdk-js-v3/commit/ce5a2b07a6afc8d6b7140efe8010de1940c6285f))





# [3.449.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.448.0...v3.449.0) (2023-11-10)


### Features

* **client-ec2:** EC2 adds API updates to enable ENA Express at instance launch time. ([b4b5fdd](https://github.com/aws/aws-sdk-js-v3/commit/b4b5fdd592628cf4ec167571570ae44b0bed4de6))





# [3.448.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.447.0...v3.448.0) (2023-11-09)


### Features

* **client-ec2:** AWS EBS now supports Block Public Access for EBS Snapshots. This release introduces the EnableSnapshotBlockPublicAccess, DisableSnapshotBlockPublicAccess and GetSnapshotBlockPublicAccessState APIs to manage account-level public access settings for EBS Snapshots in an AWS Region. ([dd46083](https://github.com/aws/aws-sdk-js-v3/commit/dd46083495489c001d1a125e0574179a20a17415))





# [3.445.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.444.0...v3.445.0) (2023-11-07)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.441.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.440.0...v3.441.0) (2023-11-01)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.440.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.439.0...v3.440.0) (2023-10-31)


### Features

* **client-ec2:** Capacity Blocks for ML are a new EC2 purchasing option for reserving GPU instances on a future date to support short duration machine learning (ML) workloads. Capacity Blocks automatically place instances close together inside Amazon EC2 UltraClusters for low-latency, high-throughput networking. ([5f73bcd](https://github.com/aws/aws-sdk-js-v3/commit/5f73bcda5288d895451b0a3b2e9fdf7ff00e46fe))





# [3.438.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.437.0...v3.438.0) (2023-10-27)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.437.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.436.0...v3.437.0) (2023-10-26)


### Features

* **client-ec2:** Launching GetSecurityGroupsForVpc API. This API gets security groups that can be associated by the AWS account making the request with network interfaces in the specified VPC. ([0bc9a39](https://github.com/aws/aws-sdk-js-v3/commit/0bc9a39b6069ab8a1df7b29798e93045167dcffe))





# [3.436.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.435.0...v3.436.0) (2023-10-25)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.435.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.434.0...v3.435.0) (2023-10-24)


### Features

* **client-ec2:** This release updates the documentation for InstanceInterruptionBehavior and HibernationOptionsRequest to more accurately describe the behavior of these two parameters when using Spot hibernation. ([4e920f1](https://github.com/aws/aws-sdk-js-v3/commit/4e920f178227b3f01d436ce0e291a13fcdc07387))





# [3.433.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.432.0...v3.433.0) (2023-10-20)


### Bug Fixes

* **codegen:** use partial record for enum keyed types ([#5391](https://github.com/aws/aws-sdk-js-v3/issues/5391)) ([70c2107](https://github.com/aws/aws-sdk-js-v3/commit/70c2107b970d035bfedb211278c88fdbfc2e5334))





# [3.432.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.431.0...v3.432.0) (2023-10-19)


### Features

* **client-ec2:** Amazon EC2 C7a instances, powered by 4th generation AMD EPYC processors, are ideal for high performance, compute-intensive workloads such as high performance computing. Amazon EC2 R7i instances are next-generation memory optimized and powered by custom 4th Generation Intel Xeon Scalable processors. ([99fa7ff](https://github.com/aws/aws-sdk-js-v3/commit/99fa7ffef1d3950aaa630736b6170e752c1b8529))





# [3.431.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.430.0...v3.431.0) (2023-10-18)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.430.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.429.0...v3.430.0) (2023-10-17)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.429.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.428.0...v3.429.0) (2023-10-16)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.428.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.427.0...v3.428.0) (2023-10-12)


### Features

* **client-ec2:** This release adds Ubuntu Pro as a supported platform for On-Demand Capacity Reservations and adds support for setting an Amazon Machine Image (AMI) to disabled state. Disabling the AMI makes it private if it was previously shared, and prevents new EC2 instance launches from it. ([9c57ae3](https://github.com/aws/aws-sdk-js-v3/commit/9c57ae3280837f11350664050bb11d0ba768f149))





# [3.427.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.426.0...v3.427.0) (2023-10-06)


### Features

* **client-ec2:** Documentation updates for Elastic Compute Cloud (EC2). ([fe0f676](https://github.com/aws/aws-sdk-js-v3/commit/fe0f6765d217c2d55faf7451baaf64c2a7f517a3))





# [3.425.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.424.0...v3.425.0) (2023-10-04)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.423.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.422.0...v3.423.0) (2023-10-02)


### Features

* **client-ec2:** Introducing Amazon EC2 R7iz instances with 3.9 GHz sustained all-core turbo frequency and deliver up to 20% better performance than previous generation z1d instances. ([bd24ace](https://github.com/aws/aws-sdk-js-v3/commit/bd24ace57c22b3a28cb5c9526e36ed5eac6d89b3))





# [3.422.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.421.0...v3.422.0) (2023-09-28)


### Features

* **client-ec2:** Adds support for Customer Managed Key encryption for Amazon Verified Access resources ([5ba0655](https://github.com/aws/aws-sdk-js-v3/commit/5ba06550cd42b318766df784175c926c1ca820db))





# [3.421.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.420.0...v3.421.0) (2023-09-27)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.420.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.419.0...v3.420.0) (2023-09-26)


### Features

* **client-ec2:** The release includes AWS verified access to support FIPs compliance in North America regions ([2cb7f26](https://github.com/aws/aws-sdk-js-v3/commit/2cb7f26f20e1f4bde32ab4693c95d0f3d52b6402))





# [3.418.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.417.0...v3.418.0) (2023-09-22)


### Features

* **client-ec2:** EC2 M2 Pro Mac instances are powered by Apple M2 Pro Mac Mini computers featuring 12 core CPU, 19 core GPU, 32 GiB of memory, and 16 core Apple Neural Engine and uniquely enabled by the AWS Nitro System through high-speed Thunderbolt connections. ([987ec95](https://github.com/aws/aws-sdk-js-v3/commit/987ec95712b7f9a51af7936cd51109e155ea1cb1))





# [3.416.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.415.0...v3.416.0) (2023-09-19)


### Features

* **client-ec2:** This release adds support for C7i, and R7a instance types. ([871a04d](https://github.com/aws/aws-sdk-js-v3/commit/871a04d972e665cb0febf293f0c08c9eb8362a89))





# [3.414.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.413.0...v3.414.0) (2023-09-15)


### Features

* **region-config:** add aws region runtime extension codegen ([#5157](https://github.com/aws/aws-sdk-js-v3/issues/5157)) ([b9d59e8](https://github.com/aws/aws-sdk-js-v3/commit/b9d59e81696f9628c6502473bb01a2d1a617e928))





# [3.413.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.412.0...v3.413.0) (2023-09-14)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.411.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.410.0...v3.411.0) (2023-09-12)


### Features

* **client-ec2:** This release adds support for restricting public sharing of AMIs through AMI Block Public Access ([0528034](https://github.com/aws/aws-sdk-js-v3/commit/052803455bd5838c040957ed30ae4e24c1384d41))





# [3.410.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.409.0...v3.410.0) (2023-09-11)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.409.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.408.0...v3.409.0) (2023-09-08)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.408.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.407.0...v3.408.0) (2023-09-07)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.407.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.406.0...v3.407.0) (2023-09-06)


### Features

* **client-ec2:** This release adds 'outpost' location type to the DescribeInstanceTypeOfferings API, allowing customers that have been allowlisted for outpost to query their offerings in the API. ([fc64a50](https://github.com/aws/aws-sdk-js-v3/commit/fc64a50cab1dc6820ee6b27174c20788305352ed))





# [3.406.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.405.0...v3.406.0) (2023-09-05)


### Features

* **client-ec2:** Introducing Amazon EC2 C7gd, M7gd, and R7gd Instances with up to 3.8 TB of local NVMe-based SSD block-level storage. These instances are powered by AWS Graviton3 processors, delivering up to 25% better performance over Graviton2-based instances. ([5117dcb](https://github.com/aws/aws-sdk-js-v3/commit/5117dcbba1eb3024a2ba498fb9ad47fbe504069f))





# [3.405.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.404.0...v3.405.0) (2023-09-01)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.399.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.398.0...v3.399.0) (2023-08-24)


### Features

* **client-ec2:** Amazon EC2 M7a instances, powered by 4th generation AMD EPYC processors, deliver up to 50% higher performance compared to M6a instances. Amazon EC2 Hpc7a instances, powered by 4th Gen AMD EPYC processors, deliver up to 2.5x better performance compared to Amazon EC2 Hpc6a instances. ([81ae519](https://github.com/aws/aws-sdk-js-v3/commit/81ae519f8bb8628d64469ddb827af9190924a201))





# [3.398.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.397.0...v3.398.0) (2023-08-23)


### Features

* **client-ec2:** Marking fields as sensitive on BundleTask and GetPasswordData ([31c9785](https://github.com/aws/aws-sdk-js-v3/commit/31c97854bf96506192d2d7a13a2d4b3b0d5e173a))





# [3.396.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.395.0...v3.396.0) (2023-08-21)


### Features

* **client-ec2:** The DeleteKeyPair API has been updated to return the keyPairId when an existing key pair is deleted. ([5009701](https://github.com/aws/aws-sdk-js-v3/commit/50097011ce78c144fcd821b3225adc467e0e06cd))





# [3.395.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.394.0...v3.395.0) (2023-08-18)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.394.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.393.0...v3.394.0) (2023-08-17)


### Features

* **client-ec2:** Adds support for SubnetConfigurations to allow users to select their own IPv4 and IPv6 addresses for Interface VPC endpoints ([d377dfd](https://github.com/aws/aws-sdk-js-v3/commit/d377dfd296a989a07b8c1eaab1b5887a9e4ac14a))





# [3.392.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.391.0...v3.392.0) (2023-08-15)


### Features

* **client-ec2:** Documentation updates for Elastic Compute Cloud (EC2). ([cd827e7](https://github.com/aws/aws-sdk-js-v3/commit/cd827e78b43f73434cc5b52071b0eec966e8a262))





# [3.391.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.390.0...v3.391.0) (2023-08-14)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.390.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.389.0...v3.390.0) (2023-08-11)


### Features

* **client-ec2:** Amazon EC2 P5 instances, powered by the latest NVIDIA H100 Tensor Core GPUs, deliver the highest performance in EC2 for deep learning (DL) and HPC applications. M7i-flex and M7i instances are next-generation general purpose instances powered by custom 4th Generation Intel Xeon Scalable processors. ([071580d](https://github.com/aws/aws-sdk-js-v3/commit/071580d972d290165090d3f3805dd35961c9ae67))





# [3.388.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.387.0...v3.388.0) (2023-08-09)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.387.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.386.0...v3.387.0) (2023-08-08)


### Features

* **clients:** allow client creation without configuration ([#5060](https://github.com/aws/aws-sdk-js-v3/issues/5060)) ([a9723dc](https://github.com/aws/aws-sdk-js-v3/commit/a9723dcbbf970402a3131a8ff79153a04b2cfb89))





# [3.386.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.385.0...v3.386.0) (2023-08-07)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.385.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.384.0...v3.385.0) (2023-08-04)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.384.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.383.0...v3.384.0) (2023-08-03)


### Features

* **client-ec2:** This release adds new parameter isPrimaryIPv6 to  allow assigning an IPv6 address as a primary IPv6 address to a network interface which cannot be changed to give equivalent functionality available for network interfaces with primary IPv4 address. ([e8eae85](https://github.com/aws/aws-sdk-js-v3/commit/e8eae855ee894e0a22a641683bb9b2e769844a4d))





# [3.382.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.381.0...v3.382.0) (2023-08-01)

**Note:** Version bump only for package @aws-sdk/client-ec2





## [3.379.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.379.0...v3.379.1) (2023-07-28)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.379.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.378.0...v3.379.0) (2023-07-27)


### Features

* **client-ec2:** SDK and documentation updates for Amazon Elastic Block Store APIs ([340ee0b](https://github.com/aws/aws-sdk-js-v3/commit/340ee0b95903702d27a1a7fad285c0519c3fa173))





# [3.378.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.377.0...v3.378.0) (2023-07-26)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.377.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.376.0...v3.377.0) (2023-07-25)


### Features

* **client-ec2:** This release adds an instance's peak and baseline network bandwidth as well as the memory sizes of an instance's inference accelerators to DescribeInstanceTypes. ([691ecdb](https://github.com/aws/aws-sdk-js-v3/commit/691ecdb836d909b7ea2a35a3bc826081c9dd1b5f))





# [3.376.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.375.0...v3.376.0) (2023-07-24)


### Features

* **client-ec2:** Add "disabled" enum value to SpotInstanceState. ([dedea39](https://github.com/aws/aws-sdk-js-v3/commit/dedea39839bd1f09445a96fce5ef1aace18aed1e))





# [3.373.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.372.0...v3.373.0) (2023-07-19)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.371.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.370.0...v3.371.0) (2023-07-17)


### Features

* **client-ec2:** Add Nitro TPM support on DescribeInstanceTypes ([001f5d7](https://github.com/aws/aws-sdk-js-v3/commit/001f5d7d9ac7edd2ea2f58285206f07352faf1ef))





# [3.370.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.369.0...v3.370.0) (2023-07-13)


### Bug Fixes

* **codegen:** pkg.json merge behavior ([#4954](https://github.com/aws/aws-sdk-js-v3/issues/4954)) ([4fc0b7f](https://github.com/aws/aws-sdk-js-v3/commit/4fc0b7f3961fe8a88c781c8f34269aef12d5f620))


### Features

* **client-ec2:** This release adds support for the C7gn and Hpc7g instances. C7gn instances are powered by AWS Graviton3 processors and the fifth-generation AWS Nitro Cards. Hpc7g instances are powered by AWS Graviton 3E processors and provide up to 200 Gbps network bandwidth. ([b3fabe8](https://github.com/aws/aws-sdk-js-v3/commit/b3fabe846589ac537b96629043fd475122431a1f))





# [3.369.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.368.0...v3.369.0) (2023-07-11)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.367.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.366.0...v3.367.0) (2023-07-06)


### Features

* **client-ec2:** Add Nitro Enclaves support on DescribeInstanceTypes ([1db6ac4](https://github.com/aws/aws-sdk-js-v3/commit/1db6ac4a611406765828d4842ad2c6eda8604159))





# [3.363.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.362.0...v3.363.0) (2023-06-29)


### Features

* **clients:** use migrated [@smithy](https://github.com/smithy) packages ([#4873](https://github.com/aws/aws-sdk-js-v3/issues/4873)) ([d036e2e](https://github.com/aws/aws-sdk-js-v3/commit/d036e2e43cd33cfd497871f97dde907c3078b2fd))





# [3.362.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.361.0...v3.362.0) (2023-06-28)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.360.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.359.0...v3.360.0) (2023-06-26)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.359.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.358.0...v3.359.0) (2023-06-23)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.358.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.357.0...v3.358.0) (2023-06-22)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.357.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.356.0...v3.357.0) (2023-06-21)


### Features

* **clients:** automatic blob type conversions ([#4836](https://github.com/aws/aws-sdk-js-v3/issues/4836)) ([60ec921](https://github.com/aws/aws-sdk-js-v3/commit/60ec921c879ae8363f32ebbe9e1ecd6062df1081))





# [3.356.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.355.0...v3.356.0) (2023-06-20)


### Features

* **client-ec2:** Adds support for targeting Dedicated Host allocations by assetIds in AWS Outposts ([fa71f14](https://github.com/aws/aws-sdk-js-v3/commit/fa71f14130ba8705d77f2276e5edebe97f17b258))





# [3.355.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.354.0...v3.355.0) (2023-06-19)


### Features

* **client-ec2:** API changes to AWS Verified Access to include data from trust providers in logs ([880a917](https://github.com/aws/aws-sdk-js-v3/commit/880a91710f54e50a0ef2e9415a11b69b72c526c3))





# [3.354.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.353.0...v3.354.0) (2023-06-16)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.353.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.352.0...v3.353.0) (2023-06-15)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.352.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.351.0...v3.352.0) (2023-06-13)


### Features

* **client-ec2:** This release introduces a new feature, EC2 Instance Connect Endpoint, that enables you to connect to a resource over TCP, without requiring the resource to have a public IPv4 address. ([c1ce7e1](https://github.com/aws/aws-sdk-js-v3/commit/c1ce7e11bc65d65d8f6f1a3e18878d3589d5abad))





# [3.350.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.349.0...v3.350.0) (2023-06-09)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.348.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.347.1...v3.348.0) (2023-06-07)

**Note:** Version bump only for package @aws-sdk/client-ec2





## [3.347.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.347.0...v3.347.1) (2023-06-07)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.347.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.346.0...v3.347.0) (2023-06-06)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.346.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.345.0...v3.346.0) (2023-06-05)


### Features

* **client-ec2:** Making InstanceTagAttribute as the required parameter for the DeregisterInstanceEventNotificationAttributes and RegisterInstanceEventNotificationAttributes APIs. ([8329d54](https://github.com/aws/aws-sdk-js-v3/commit/8329d543de7b03f322eca4bfe88f3cec81770552))





# [3.345.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.344.0...v3.345.0) (2023-06-02)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.344.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.343.0...v3.344.0) (2023-06-01)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.342.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.341.0...v3.342.0) (2023-05-30)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.341.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.340.0...v3.341.0) (2023-05-26)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.338.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.337.0...v3.338.0) (2023-05-23)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.337.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.336.0...v3.337.0) (2023-05-22)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.335.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.334.0...v3.335.0) (2023-05-18)


### Features

* **client-ec2:** Add support for i4g.large, i4g.xlarge, i4g.2xlarge, i4g.4xlarge, i4g.8xlarge and i4g.16xlarge instances powered by AWS Graviton2 processors that deliver up to 15% better compute performance than our other storage-optimized instances. ([6d1ea0b](https://github.com/aws/aws-sdk-js-v3/commit/6d1ea0bacba489db15f50954aeeb5dc358e94678))
* **deps:** use [@smithy](https://github.com/smithy) types and protocol-http ([#4722](https://github.com/aws/aws-sdk-js-v3/issues/4722)) ([7ed7101](https://github.com/aws/aws-sdk-js-v3/commit/7ed7101dcc4e81038b6c7f581162b959e6b33a04))





# [3.332.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.331.0...v3.332.0) (2023-05-11)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.329.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.328.0...v3.329.0) (2023-05-08)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.328.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.327.0...v3.328.0) (2023-05-05)


### Features

* **client-ec2:** This release adds support the inf2 and trn1n instances. inf2 instances are purpose built for deep learning inference while trn1n instances are powered by AWS Trainium accelerators and they build on the capabilities of Trainium-powered trn1 instances. ([81d3554](https://github.com/aws/aws-sdk-js-v3/commit/81d3554c4abecc9eae694c91e59655b0286ad259))





# [3.327.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.326.0...v3.327.0) (2023-05-04)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.326.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.325.0...v3.326.0) (2023-05-03)


### Features

* **client-ec2:** Adds an SDK paginator for GetNetworkInsightsAccessScopeAnalysisFindings ([ed4b264](https://github.com/aws/aws-sdk-js-v3/commit/ed4b26446960bb721350031cfaa6aa794b673bb7))





# [3.325.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.324.0...v3.325.0) (2023-05-02)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.322.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.321.1...v3.322.0) (2023-04-27)


### Features

* **client-ec2:** This release adds support for AMD SEV-SNP on EC2 instances. ([c57a8bf](https://github.com/aws/aws-sdk-js-v3/commit/c57a8bf3a499e5838896e485354947f1521042bc))





## [3.321.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.321.0...v3.321.1) (2023-04-27)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.321.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.320.0...v3.321.0) (2023-04-26)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.319.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.318.0...v3.319.0) (2023-04-24)


### Features

* **client-ec2:** API changes to AWS Verified Access related to identity providers' information. ([5e3d812](https://github.com/aws/aws-sdk-js-v3/commit/5e3d812ccab033ba391ad1b6e0f6907650e1c39f))





# [3.316.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.315.0...v3.316.0) (2023-04-19)


### Features

* **smithy-client:** factory for aggregated clients ([#4639](https://github.com/aws/aws-sdk-js-v3/issues/4639)) ([852b99d](https://github.com/aws/aws-sdk-js-v3/commit/852b99d393fe5f1a9ff6345f797949f3901a9cbf))





# [3.315.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.314.0...v3.315.0) (2023-04-17)


### Features

* **codegen:** shorten serialization and deserialization code in protocols files ([#4625](https://github.com/aws/aws-sdk-js-v3/issues/4625)) ([8798a6e](https://github.com/aws/aws-sdk-js-v3/commit/8798a6eac1b48f0a807c51e38b864ef62b712943))





# [3.312.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.311.0...v3.312.0) (2023-04-12)


### Features

* **client:** reduce generated HTTP request header code size ([#4594](https://github.com/aws/aws-sdk-js-v3/issues/4594)) ([fe91123](https://github.com/aws/aws-sdk-js-v3/commit/fe91123411499b5932b406fb813e69f4a0d36503))





# [3.311.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.310.0...v3.311.0) (2023-04-11)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.310.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.309.0...v3.310.0) (2023-04-10)


### Bug Fixes

* use updated dist glob pattern in package.json ([#4628](https://github.com/aws/aws-sdk-js-v3/issues/4628)) ([352393d](https://github.com/aws/aws-sdk-js-v3/commit/352393dcdba5ba16dca589c265c40e22913c7f2b))





# [3.309.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.308.0...v3.309.0) (2023-04-07)


### Features

* **codegen:** shorten internal serde function names ([#4611](https://github.com/aws/aws-sdk-js-v3/issues/4611)) ([e385e85](https://github.com/aws/aws-sdk-js-v3/commit/e385e85938d112434b752abb38ab5de2d094f669))





# [3.306.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.305.0...v3.306.0) (2023-04-04)


### Features

* **client-ec2:** C6in, M6in, M6idn, R6in and R6idn bare metal instances are powered by 3rd Generation Intel Xeon Scalable processors and offer up to 200 Gbps of network bandwidth. ([01bddbc](https://github.com/aws/aws-sdk-js-v3/commit/01bddbc14a6fec92283fa53e5050d50f5fb63750))





# [3.304.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.303.0...v3.304.0) (2023-03-31)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.303.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.302.0...v3.303.0) (2023-03-30)


### Features

* **client-ec2:** This release adds support for Tunnel Endpoint Lifecycle control, a new feature that provides Site-to-Site VPN customers with better visibility and control of their VPN tunnel maintenance updates. ([daa7956](https://github.com/aws/aws-sdk-js-v3/commit/daa79569c2e9e636a2ed9cd7a5425bdbc5d491e4))





# [3.301.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.300.0...v3.301.0) (2023-03-28)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.300.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.299.0...v3.300.0) (2023-03-27)


### Features

* **clients:** codegen for structural hint documentation in commands ([#4573](https://github.com/aws/aws-sdk-js-v3/issues/4573)) ([b3ff58d](https://github.com/aws/aws-sdk-js-v3/commit/b3ff58d3606ceefcdd04ac82fc1ca54f5f811989))





# [3.299.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.298.0...v3.299.0) (2023-03-24)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.298.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.297.0...v3.298.0) (2023-03-23)


### Features

* **clients:** remove generated log filters for data with no sensitive data ([#4544](https://github.com/aws/aws-sdk-js-v3/issues/4544)) ([569155d](https://github.com/aws/aws-sdk-js-v3/commit/569155d6cce710b102cefa7511ba1bc1d28bc87e))





# [3.297.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.296.0...v3.297.0) (2023-03-22)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.296.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.295.0...v3.296.0) (2023-03-21)


### Features

* **client-ec2:** This release adds support for AWS Network Firewall, AWS PrivateLink, and Gateway Load Balancers to Amazon VPC Reachability Analyzer, and it makes the path destination optional as long as a destination address in the filter at source is provided. ([eb6d517](https://github.com/aws/aws-sdk-js-v3/commit/eb6d51786513297ec1921bd98aa064a058721331))





# [3.295.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.294.0...v3.295.0) (2023-03-20)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.294.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.293.0...v3.294.0) (2023-03-17)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.293.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.292.1...v3.293.0) (2023-03-16)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.292.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.291.0...v3.292.0) (2023-03-15)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.291.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.290.0...v3.291.0) (2023-03-14)


### Features

* **client-ec2:** This release adds a new DnsOptions key (PrivateDnsOnlyForInboundResolverEndpoint) to CreateVpcEndpoint and ModifyVpcEndpoint APIs. ([8911e55](https://github.com/aws/aws-sdk-js-v3/commit/8911e55be1b00218d79eea86de3659559a88b0ad))





# [3.290.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.289.0...v3.290.0) (2023-03-13)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.289.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.288.0...v3.289.0) (2023-03-10)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.288.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.287.0...v3.288.0) (2023-03-09)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.287.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.286.0...v3.287.0) (2023-03-08)


### Bug Fixes

* **clients:** remove aggregated client from paginators ([#4496](https://github.com/aws/aws-sdk-js-v3/issues/4496)) ([aea457a](https://github.com/aws/aws-sdk-js-v3/commit/aea457ab5d4e72939f2f608140d82b60526eb716))


### Features

* **client-ec2:** Introducing Amazon EC2 C7g, M7g and R7g instances, powered by the latest generation AWS Graviton3 processors and deliver up to 25% better performance over Graviton2-based instances. ([8a6dcfa](https://github.com/aws/aws-sdk-js-v3/commit/8a6dcfa8eda7070a60be8b37dcc8a421a96559c2))





# [3.284.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.283.0...v3.284.0) (2023-03-03)


### Features

* **client-ec2:** This release adds support for a new boot mode for EC2 instances called 'UEFI Preferred'. ([e5182e1](https://github.com/aws/aws-sdk-js-v3/commit/e5182e146e2ad9925525dbb2cde72732b8813834))





# [3.282.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.281.0...v3.282.0) (2023-03-01)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.281.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.280.0...v3.281.0) (2023-02-28)


### Features

* **client-ec2:** This release allows IMDS support to be set to v2-only on an existing AMI, so that all future instances launched from that AMI will use IMDSv2 by default. ([b623f24](https://github.com/aws/aws-sdk-js-v3/commit/b623f244863585e9dc752a707a276f475568ae40))





# [3.279.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.278.0...v3.279.0) (2023-02-24)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.278.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.277.0...v3.278.0) (2023-02-23)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.276.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.275.0...v3.276.0) (2023-02-21)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.272.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.271.0...v3.272.0) (2023-02-15)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.271.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.270.0...v3.271.0) (2023-02-14)


### Features

* **client-ec2:** With this release customers can turn host maintenance on or off when allocating or modifying a supported dedicated host. Host maintenance is turned on by default for supported hosts. ([62c8b91](https://github.com/aws/aws-sdk-js-v3/commit/62c8b91bc9598ed13801c2643c8b077aca297a6e))





# [3.269.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.268.0...v3.269.0) (2023-02-10)


### Features

* **client-ec2:** Adds support for waiters that automatically poll for an imported snapshot until it reaches the completed state. ([f4a09f3](https://github.com/aws/aws-sdk-js-v3/commit/f4a09f3ecaf92fd97252a5aaff706c056f7278bb))





# [3.267.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.266.1...v3.267.0) (2023-02-08)

**Note:** Version bump only for package @aws-sdk/client-ec2





## [3.266.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.266.0...v3.266.1) (2023-02-07)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.266.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.265.0...v3.266.0) (2023-02-06)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.264.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.263.0...v3.264.0) (2023-02-02)


### Features

* **client-ec2:** Documentation updates for EC2. ([3ff7382](https://github.com/aws/aws-sdk-js-v3/commit/3ff7382c23805549032fe911ea4fd3a52cba3ce3))





# [3.262.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.261.0...v3.262.0) (2023-01-31)


### Features

* **client-ec2:** This launch allows customers to associate up to 8 IP addresses to their NAT Gateways to increase the limit on concurrent connections to a single destination by eight times from 55K to 440K. ([02a5e1a](https://github.com/aws/aws-sdk-js-v3/commit/02a5e1a84c3db2e8599b374e46e98756ca1dbb5e))





# [3.261.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.260.0...v3.261.0) (2023-01-30)


### Bug Fixes

* **codegen:** safe access for error code location ([#4367](https://github.com/aws/aws-sdk-js-v3/issues/4367)) ([8991512](https://github.com/aws/aws-sdk-js-v3/commit/899151267fe593bb3cf18917a09108b93cf96fa2))


### Features

* **client-ec2:** We add Prefix Lists as a new route destination option for LocalGatewayRoutes. This will allow customers to create routes to Prefix Lists. Prefix List routes will allow customers to group individual CIDR routes with the same target into a single route. ([52a9d0c](https://github.com/aws/aws-sdk-js-v3/commit/52a9d0c3609b4c47bf405e49422887c748970926))





# [3.259.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.258.0...v3.259.0) (2023-01-26)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.258.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.257.0...v3.258.0) (2023-01-25)


### Features

* **client-ec2:** This release adds new functionality that allows customers to provision IPv6 CIDR blocks through Amazon VPC IP Address Manager (IPAM) as well as allowing customers to utilize IPAM Resource Discovery APIs. ([8973fbd](https://github.com/aws/aws-sdk-js-v3/commit/8973fbd8b97ea952c3ab2ef7feebdbecd83d3b41))





# [3.257.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.256.0...v3.257.0) (2023-01-24)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.256.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.255.0...v3.256.0) (2023-01-23)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.255.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.254.0...v3.255.0) (2023-01-20)


### Features

* **client-ec2:** C6in, M6in, M6idn, R6in and R6idn instances are powered by 3rd Generation Intel Xeon Scalable processors (code named Ice Lake) with an all-core turbo frequency of 3.5 GHz. ([2b55e36](https://github.com/aws/aws-sdk-js-v3/commit/2b55e365809f2194fdac6809c5c06609205204fd))





# [3.254.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.253.0...v3.254.0) (2023-01-19)


### Features

* **checksum:** replace Hash with Checksum ([#4346](https://github.com/aws/aws-sdk-js-v3/issues/4346)) ([172b4f3](https://github.com/aws/aws-sdk-js-v3/commit/172b4f3475370b386271750436004706b36bc056))
* **client-ec2:** Adds SSM Parameter Resource Aliasing support to EC2 Launch Templates. Launch Templates can now store parameter aliases in place of AMI Resource IDs. CreateLaunchTemplateVersion and DescribeLaunchTemplateVersions now support a convenience flag, ResolveAlias, to return the resolved parameter value. ([a165989](https://github.com/aws/aws-sdk-js-v3/commit/a16598929907a89e0c293678c2f2e1c3d7faf865))





# [3.252.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.251.0...v3.252.0) (2023-01-17)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.251.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.250.0...v3.251.0) (2023-01-13)


### Features

* **client-ec2:** Documentation updates for EC2. ([975395f](https://github.com/aws/aws-sdk-js-v3/commit/975395f139e53dd47ac063d0ad950031ddcb6cba))





# [3.245.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.244.0...v3.245.0) (2023-01-05)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.241.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.240.0...v3.241.0) (2022-12-29)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.238.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.237.0...v3.238.0) (2022-12-23)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.236.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.235.0...v3.236.0) (2022-12-21)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.235.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.234.0...v3.235.0) (2022-12-20)


### Features

* **client-ec2:** Adds support for pagination in the EC2 DescribeImages API. ([a1e5ea8](https://github.com/aws/aws-sdk-js-v3/commit/a1e5ea842369429ccb818b2f4bcb26c432b97e70))





# [3.234.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.233.0...v3.234.0) (2022-12-19)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.231.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.230.0...v3.231.0) (2022-12-14)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.229.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.228.0...v3.229.0) (2022-12-12)


### Features

* **client-ec2:** This release updates DescribeFpgaImages to show supported instance types of AFIs in its response. ([e6f3672](https://github.com/aws/aws-sdk-js-v3/commit/e6f36721554bcbdaf46d7ed34d83dcdf111c519e))





# [3.226.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.225.0...v3.226.0) (2022-12-07)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.224.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.223.0...v3.224.0) (2022-12-05)


### Features

* **client-ec2:** Documentation updates for EC2. ([7446494](https://github.com/aws/aws-sdk-js-v3/commit/74464943a89d7d7785cf8fa1ba17f8146dd5bb3d))





# [3.223.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.222.0...v3.223.0) (2022-12-02)


### Bug Fixes

* **clients:** remove unconditional inclusion of util-retry ([#4246](https://github.com/aws/aws-sdk-js-v3/issues/4246)) ([3baeb44](https://github.com/aws/aws-sdk-js-v3/commit/3baeb445fb399fa3b6d81e89e88c22b0c0a691cc))





# [3.222.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.221.0...v3.222.0) (2022-12-01)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.220.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.219.0...v3.220.0) (2022-11-29)


### Features

* **client-ec2:** This release adds support for AWS Verified Access and the Hpc6id Amazon EC2 compute optimized instance type, which features 3rd generation Intel Xeon Scalable processors. ([e0d2198](https://github.com/aws/aws-sdk-js-v3/commit/e0d219808aa30864e04ed31da29d1d2563d2e757))





# [3.219.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.218.0...v3.219.0) (2022-11-29)


### Features

* **client-ec2:** Introduces ENA Express, which uses AWS SRD and dynamic routing to increase throughput and minimize latency, adds support for trust relationships between Reachability Analyzer and AWS Organizations to enable cross-account analysis, and adds support for Infrastructure Performance metric subscriptions. ([394dcfc](https://github.com/aws/aws-sdk-js-v3/commit/394dcfcf94f76142605687ba21f7fde13ae94714))





# [3.218.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.217.0...v3.218.0) (2022-11-28)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.216.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.215.0...v3.216.0) (2022-11-22)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.215.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.214.0...v3.215.0) (2022-11-21)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.214.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.213.0...v3.214.0) (2022-11-18)


### Features

* **client-ec2:** This release adds support for copying an Amazon Machine Image's tags when copying an AMI. ([14571fb](https://github.com/aws/aws-sdk-js-v3/commit/14571fb91d6d9581fb625e45b25abd49f1eb2380))





# [3.213.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.212.0...v3.213.0) (2022-11-17)


### Features

* **client-ec2:** This release adds a new optional parameter "privateIpAddress" for the CreateNatGateway API. PrivateIPAddress will allow customers to select a custom Private IPv4 address instead of having it be auto-assigned. ([db91280](https://github.com/aws/aws-sdk-js-v3/commit/db912805033a437cc63004f8caafbdd595abf1a1))





# [3.212.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.211.0...v3.212.0) (2022-11-16)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.211.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.210.0...v3.211.0) (2022-11-15)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.210.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.209.0...v3.210.0) (2022-11-14)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.209.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.208.0...v3.209.0) (2022-11-11)


### Bug Fixes

* **clients:** remove unconditional add of util-base64 node and browser modules ([#4170](https://github.com/aws/aws-sdk-js-v3/issues/4170)) ([24ec718](https://github.com/aws/aws-sdk-js-v3/commit/24ec718ea19309059d8b923c0b5c4265d308a36f))
* **clients:** use default no-op logger in clients codegen ([#4171](https://github.com/aws/aws-sdk-js-v3/issues/4171)) ([9721730](https://github.com/aws/aws-sdk-js-v3/commit/9721730bc3ceba8a8b80ad95e9c893e55e30272e))





# [3.208.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.207.0...v3.208.0) (2022-11-10)


### Features

* **client-ec2:** This release adds a new price capacity optimized allocation strategy for Spot Instances to help customers optimize provisioning of Spot Instances via EC2 Auto Scaling, EC2 Fleet, and Spot Fleet. It allocates Spot Instances based on both spare capacity availability and Spot Instance price. ([6f4d604](https://github.com/aws/aws-sdk-js-v3/commit/6f4d6046af15788874f42229fae1a5103d2c80b5))





# [3.207.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.206.0...v3.207.0) (2022-11-09)


### Features

* **client-ec2:** Amazon EC2 Trn1 instances, powered by AWS Trainium chips, are purpose built for high-performance deep learning training. u-24tb1.112xlarge and u-18tb1.112xlarge High Memory instances are purpose-built to run large in-memory databases. ([f0aeeb1](https://github.com/aws/aws-sdk-js-v3/commit/f0aeeb1a032045f9ec3959f58139f47a3715503f))





# [3.206.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.205.0...v3.206.0) (2022-11-08)


### Features

* **client-ec2:** This release enables sharing of EC2 Placement Groups across accounts and within AWS Organizations using Resource Access Manager ([66a8faf](https://github.com/aws/aws-sdk-js-v3/commit/66a8faff173adb0ccfb654b99d5e7a3cfd9622d8))





# [3.205.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.204.0...v3.205.0) (2022-11-07)


### Features

* **client-ec2:** This release adds support for two new attributes for attribute-based instance type selection - NetworkBandwidthGbps and AllowedInstanceTypes. ([f7b7c63](https://github.com/aws/aws-sdk-js-v3/commit/f7b7c6377423d6759d4172b2aaba8aa93c5b617a))





# [3.204.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.203.0...v3.204.0) (2022-11-04)


### Features

* **client-ec2:** This release adds API support for the recipient of an AMI account share to remove shared AMI launch permissions. ([59dc76d](https://github.com/aws/aws-sdk-js-v3/commit/59dc76dd5fc2a5a2bb56982b55ccbce6fa9b7ed6))





# [3.202.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.201.0...v3.202.0) (2022-11-02)


### Bug Fixes

* **codegen:** aws-query protocol, distinguish explicit empty list ([#4003](https://github.com/aws/aws-sdk-js-v3/issues/4003)) ([8e10769](https://github.com/aws/aws-sdk-js-v3/commit/8e10769b6146f93c0674686fa547290292714917))





# [3.201.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.200.0...v3.201.0) (2022-11-01)


### Features

* end support for Node.js 12.x ([#4123](https://github.com/aws/aws-sdk-js-v3/issues/4123)) ([83f913e](https://github.com/aws/aws-sdk-js-v3/commit/83f913ec2ac3878d8726c6964f585550dc5caf3e))





# [3.200.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.199.0...v3.200.0) (2022-10-31)


### Features

* **client-ec2:** Elastic IP transfer is a new Amazon VPC feature that allows you to transfer your Elastic IP addresses from one AWS Account to another. ([dba90b0](https://github.com/aws/aws-sdk-js-v3/commit/dba90b03c11ef100ad1afa36c8ffabb729f05b4e))





# [3.199.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.198.0...v3.199.0) (2022-10-28)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.198.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.197.0...v3.198.0) (2022-10-27)


### Features

* **client-ec2:** Feature supports the replacement of instance root volume using an updated AMI without requiring customers to stop their instance. ([c980e67](https://github.com/aws/aws-sdk-js-v3/commit/c980e67bfad3191dab93e0cf1aa9eaec6addf08b))





# [3.197.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.196.0...v3.197.0) (2022-10-26)


### Bug Fixes

* **types:** expand custom endpoint type ([#4097](https://github.com/aws/aws-sdk-js-v3/issues/4097)) ([3620ce4](https://github.com/aws/aws-sdk-js-v3/commit/3620ce4162435b9688823162281140f40365b14c))





# [3.196.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.195.0...v3.196.0) (2022-10-25)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.194.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.193.0...v3.194.0) (2022-10-21)


### Features

* **endpoint:** endpoint models for awsquery protocol ([#4070](https://github.com/aws/aws-sdk-js-v3/issues/4070)) ([41bb10d](https://github.com/aws/aws-sdk-js-v3/commit/41bb10dc09390b4fe0a6578feb6584c15b8b8186))





# [3.193.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.192.0...v3.193.0) (2022-10-20)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.192.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.191.0...v3.192.0) (2022-10-19)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.190.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.189.0...v3.190.0) (2022-10-17)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.188.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.187.0...v3.188.0) (2022-10-13)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.186.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.185.0...v3.186.0) (2022-10-06)


### Features

* **clients:** update client endpoints as of 2022-10-06 ([ef071d5](https://github.com/aws/aws-sdk-js-v3/commit/ef071d5e47566def814205ab35907391a2918266))





# [3.185.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.184.0...v3.185.0) (2022-10-05)


### Bug Fixes

* **codegen:** add deser check for x-amz-request-id ([#4015](https://github.com/aws/aws-sdk-js-v3/issues/4015)) ([6ff07bd](https://github.com/aws/aws-sdk-js-v3/commit/6ff07bd7e72bd56725f318013ac1d6d0fbbcdd9a))





# [3.184.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.183.0...v3.184.0) (2022-10-04)


### Features

* **client-ec2:** Added EnableNetworkAddressUsageMetrics flag for ModifyVpcAttribute, DescribeVpcAttribute APIs. ([cbd2640](https://github.com/aws/aws-sdk-js-v3/commit/cbd2640efb3ace31a5abb75d603599324c413f57))





# [3.183.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.182.0...v3.183.0) (2022-10-03)


### Features

* **client-ec2:** Adding an imdsSupport attribute to EC2 AMIs ([7304adf](https://github.com/aws/aws-sdk-js-v3/commit/7304adf7306997875f660cb0f2beab7efd3a9fbd))





# [3.181.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.180.0...v3.181.0) (2022-09-29)


### Bug Fixes

* **clients:** make parseErrorBody async ([#3999](https://github.com/aws/aws-sdk-js-v3/issues/3999)) ([2558c93](https://github.com/aws/aws-sdk-js-v3/commit/2558c93c050357ac6dc47aa0452b15b12ebfd676))
* **clients:** populate message field when parsing errors ([#3995](https://github.com/aws/aws-sdk-js-v3/issues/3995)) ([02e47f1](https://github.com/aws/aws-sdk-js-v3/commit/02e47f14397ae0a5d2e2883350d038b307fdcdb4))
* **clients:** update message in Error key in case of XML protocol ([#4000](https://github.com/aws/aws-sdk-js-v3/issues/4000)) ([057f686](https://github.com/aws/aws-sdk-js-v3/commit/057f686f217caa4e277bbe6e2905decf97b0fad1))


### Features

* **client-ec2:** u-3tb1 instances are powered by Intel Xeon Platinum 8176M (Skylake) processors and are purpose-built to run large in-memory databases. ([66a6a45](https://github.com/aws/aws-sdk-js-v3/commit/66a6a455dd580ebadbcdb1bb5dbc07b753aca2ff))





# [3.180.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.179.0...v3.180.0) (2022-09-27)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.179.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.178.0...v3.179.0) (2022-09-26)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.178.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.177.0...v3.178.0) (2022-09-23)


### Features

* **client-ec2:** Letting external AWS customers provide ImageId as a Launch Template override in FleetLaunchTemplateOverridesRequest ([8c58db8](https://github.com/aws/aws-sdk-js-v3/commit/8c58db801d6687226d6462c491f42af303f554bb))





# [3.177.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.176.0...v3.177.0) (2022-09-22)


### Features

* **client-ec2:** Documentation updates for Amazon EC2. ([36ac02c](https://github.com/aws/aws-sdk-js-v3/commit/36ac02ce71f727af23452bc3e024707d1840f6b4))





# [3.175.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.174.0...v3.175.0) (2022-09-20)


### Features

* **client-ec2:** This release adds support for blocked paths to Amazon VPC Reachability Analyzer. ([5412f69](https://github.com/aws/aws-sdk-js-v3/commit/5412f69bb3d6cc2897833d080dc15e8c1b7868a1))





# [3.174.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.173.0...v3.174.0) (2022-09-19)


### Features

* **client-ec2:** This release adds CapacityAllocations field to DescribeCapacityReservations ([22b9a0e](https://github.com/aws/aws-sdk-js-v3/commit/22b9a0e6996809435dee2611b42e6ec654086ac0))





# [3.172.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.171.0...v3.172.0) (2022-09-15)


### Features

* **client-ec2:** This feature allows customers to create tags for vpc-endpoint-connections and vpc-endpoint-service-permissions. ([7b3d77d](https://github.com/aws/aws-sdk-js-v3/commit/7b3d77d6af837ee5f263005a647c132de43a99b9))





# [3.171.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.170.0...v3.171.0) (2022-09-14)


### Features

* **client-ec2:** This update introduces API operations to manage and create local gateway route tables, CoIP pools, and VIF group associations. ([272b997](https://github.com/aws/aws-sdk-js-v3/commit/272b99714de58fe75354127bfc69ae7585839b9e))





# [3.170.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.169.0...v3.170.0) (2022-09-13)


### Features

* **client-ec2:** Two new features for local gateway route tables: support for static routes targeting Elastic Network Interfaces and direct VPC routing. ([9346a11](https://github.com/aws/aws-sdk-js-v3/commit/9346a11303f2f657e408a95e926c262905d701ff))





# [3.169.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.168.0...v3.169.0) (2022-09-12)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.168.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.167.0...v3.168.0) (2022-09-09)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.167.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.166.0...v3.167.0) (2022-09-08)


### Features

* **client-ec2:** This release adds support to send VPC Flow Logs to kinesis-data-firehose as new destination type ([aa03c47](https://github.com/aws/aws-sdk-js-v3/commit/aa03c472758ead17d235499a496ea7613eb0f2ce))





# [3.166.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.165.0...v3.166.0) (2022-09-07)


### Features

* **client-ec2:** Documentation updates for Amazon EC2. ([234c407](https://github.com/aws/aws-sdk-js-v3/commit/234c40716996fc0b9b6904740c2bce44ff21ed7e))





# [3.165.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.164.0...v3.165.0) (2022-09-06)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.163.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.162.0...v3.163.0) (2022-09-01)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.162.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.161.0...v3.162.0) (2022-08-31)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.161.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.160.0...v3.161.0) (2022-08-30)


### Features

* **clients:** update client endpoints as of 2022-08-30 ([59043d3](https://github.com/aws/aws-sdk-js-v3/commit/59043d3755015c9185990f3ad850aaded13bd58c))





# [3.160.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.159.0...v3.160.0) (2022-08-29)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.159.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.158.0...v3.159.0) (2022-08-26)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.155.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.154.0...v3.155.0) (2022-08-22)


### Features

* **client-ec2:** R6a instances are powered by 3rd generation AMD EPYC (Milan) processors delivering all-core turbo frequency of 3.6 GHz. C6id, M6id, and R6id instances are powered by 3rd generation Intel Xeon Scalable processor (Ice Lake) delivering all-core turbo frequency of 3.5 GHz. ([5265b7b](https://github.com/aws/aws-sdk-js-v3/commit/5265b7b39b10d2e864e3e4ab0e5646d148c70954))





# [3.154.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.153.0...v3.154.0) (2022-08-19)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.153.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.152.0...v3.153.0) (2022-08-18)


### Features

* **client-ec2:** This release adds support for VPN log options , a new feature allowing S2S VPN connections to send IKE activity logs to CloudWatch Logs ([a7c0bbd](https://github.com/aws/aws-sdk-js-v3/commit/a7c0bbd50e15fdfe4b59669684bbea9f9427002f))





# [3.150.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.149.0...v3.150.0) (2022-08-15)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.147.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.146.0...v3.147.0) (2022-08-10)


### Features

* **client-ec2:** This release adds support for excluding specific data (non-root) volumes from multi-volume snapshot sets created from instances. ([8917e47](https://github.com/aws/aws-sdk-js-v3/commit/8917e47393dc7ba118a5ddc0580f4ad43eaa731a))





# [3.145.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.144.0...v3.145.0) (2022-08-08)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.142.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.141.0...v3.142.0) (2022-08-02)


### Features

* **codegen:** general data mapping function ([#3830](https://github.com/aws/aws-sdk-js-v3/issues/3830)) ([9417eae](https://github.com/aws/aws-sdk-js-v3/commit/9417eae722806799fb4c15c07921574268c1165c))





# [3.141.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.140.0...v3.141.0) (2022-08-01)


### Features

* **clients:** update client endpoints as of 2022-08-01 ([aaf49f2](https://github.com/aws/aws-sdk-js-v3/commit/aaf49f21b371412e6ea7e00890b71a7b31991b66))





# [3.140.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.139.0...v3.140.0) (2022-07-29)


### Features

* **client-ec2:** Documentation updates for Amazon EC2. ([504891a](https://github.com/aws/aws-sdk-js-v3/commit/504891a60f4cf5f642a8092f32747fad0d8d3f99))





# [3.139.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.138.0...v3.139.0) (2022-07-28)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.137.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.136.1...v3.137.0) (2022-07-26)


### Features

* **namespaces:** remove namespaces with only a log filter ([#3823](https://github.com/aws/aws-sdk-js-v3/issues/3823)) ([33e6822](https://github.com/aws/aws-sdk-js-v3/commit/33e68228fb64c53dd8f89e6be76dd5f46edc3cfd))





# [3.136.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.135.0...v3.136.0) (2022-07-22)


### Features

* **client-ec2:** Added support for EC2 M1 Mac instances. For more information, please visit aws.amazon.com/mac. ([23fdb65](https://github.com/aws/aws-sdk-js-v3/commit/23fdb65cf942843e68b2f7f6057bea5965ad7d2f))





# [3.132.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.131.0...v3.132.0) (2022-07-18)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.131.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.130.0...v3.131.0) (2022-07-15)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.130.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.129.0...v3.130.0) (2022-07-14)


### Features

* **client-ec2:** This release adds flow logs for Transit Gateway to  allow customers to gain deeper visibility and insights into network traffic through their Transit Gateways. ([57b3f71](https://github.com/aws/aws-sdk-js-v3/commit/57b3f71b0466f9b6048ce4368a4d7f75dc38bab8))





# [3.128.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.127.0...v3.128.0) (2022-07-12)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.127.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.126.0...v3.127.0) (2022-07-11)


### Features

* **client-ec2:** Build, manage, and monitor a unified global network that connects resources running across your cloud and on-premises environments using the AWS Cloud WAN APIs. ([5105355](https://github.com/aws/aws-sdk-js-v3/commit/5105355828f8ca0d581309866f885d80b535f88b))





# [3.121.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.120.0...v3.121.0) (2022-06-30)


### Features

* **clients:** fallback to status code for unmodeled errors ([#3752](https://github.com/aws/aws-sdk-js-v3/issues/3752)) ([49bcc4f](https://github.com/aws/aws-sdk-js-v3/commit/49bcc4f153e890e798a8e82fd5fc397b2dcc449f))





# [3.119.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.118.1...v3.119.0) (2022-06-28)


### Features

* **client-ec2:** This release adds a new spread placement group to EC2 Placement Groups: host level spread, which spread instances between physical hosts, available to Outpost customers only. CreatePlacementGroup and DescribePlacementGroups APIs were updated with a new parameter: SpreadLevel to support this feature. ([89baffe](https://github.com/aws/aws-sdk-js-v3/commit/89baffe64c90d3cbc83222d3ce26e6f2fbe70ccb))





## [3.118.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.118.0...v3.118.1) (2022-06-27)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.118.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.117.0...v3.118.0) (2022-06-24)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.115.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.114.0...v3.115.0) (2022-06-21)


### Features

* **client-ec2:** This release adds support for Private IP VPNs, a new feature allowing S2S VPN connections to use private ip addresses as the tunnel outside ip address over Direct Connect as transport. ([8f2eb0c](https://github.com/aws/aws-sdk-js-v3/commit/8f2eb0cff2321db7ee3623599d7173dfba9e3785))





# [3.112.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.111.0...v3.112.0) (2022-06-16)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.110.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.109.0...v3.110.0) (2022-06-14)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.109.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.108.1...v3.109.0) (2022-06-13)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.107.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.106.0...v3.107.0) (2022-06-08)


### Bug Fixes

* **clients:** handle empty xml tags ([#3623](https://github.com/aws/aws-sdk-js-v3/issues/3623)) ([543a0ce](https://github.com/aws/aws-sdk-js-v3/commit/543a0ce13bebc6e8a5f4cc8e1bd4de67692d4034))





# [3.105.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.104.0...v3.105.0) (2022-06-06)


### Features

* **clients:** support recursion detection in Lambda ([#3654](https://github.com/aws/aws-sdk-js-v3/issues/3654)) ([ecfe46e](https://github.com/aws/aws-sdk-js-v3/commit/ecfe46ea1fd8b6e3812b75b3dc6c03554fb4b3fa))





# [3.100.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.99.0...v3.100.0) (2022-05-26)


### Features

* **client-ec2:** C7g instances, powered by the latest generation AWS Graviton3 processors, provide the best price performance in Amazon EC2 for compute-intensive workloads. ([58efcc5](https://github.com/aws/aws-sdk-js-v3/commit/58efcc5c87d9de1ebf8c939e46e3f75f8ebd58f1))





# [3.99.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.98.0...v3.99.0) (2022-05-25)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.98.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.97.0...v3.98.0) (2022-05-24)


### Features

* **client-ec2:** Stop Protection feature enables customers to protect their instances from accidental stop actions. ([097a389](https://github.com/aws/aws-sdk-js-v3/commit/097a38940e73dfbe0f732680e6c5360488ebc799))





# [3.95.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.94.0...v3.95.0) (2022-05-19)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.94.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.93.0...v3.94.0) (2022-05-18)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.92.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.91.0...v3.92.0) (2022-05-16)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.90.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.89.0...v3.90.0) (2022-05-12)


### Features

* **client-ec2:** This release introduces a target type Gateway Load Balancer Endpoint for mirrored traffic. Customers can now specify GatewayLoadBalancerEndpoint option during the creation of a traffic mirror target. ([ed7b520](https://github.com/aws/aws-sdk-js-v3/commit/ed7b5208c5072a12a20e7080e84ac9e3091b6f99))





# [3.89.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.88.0...v3.89.0) (2022-05-11)


### Features

* **client-ec2:** This release updates AWS PrivateLink APIs to support IPv6 for PrivateLink Services and Endpoints of type 'Interface'. ([afd213b](https://github.com/aws/aws-sdk-js-v3/commit/afd213b43be257f4192f12b197c98f9870bd5a06))





# [3.88.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.87.0...v3.88.0) (2022-05-10)


### Features

* **client-ec2:** Added support for using NitroTPM and UEFI Secure Boot on EC2 instances. ([2ad1bbf](https://github.com/aws/aws-sdk-js-v3/commit/2ad1bbf5783e1f469cf2253609cda57b40f8325e))





# [3.87.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.86.0...v3.87.0) (2022-05-09)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.86.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.85.0...v3.86.0) (2022-05-06)


### Features

* **client-ec2:** Add new state values for IPAMs, IPAM Scopes, and IPAM Pools. ([6c6525c](https://github.com/aws/aws-sdk-js-v3/commit/6c6525cf6f4f7bd129bb202a1b338af01dc5e57f))





# [3.85.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.84.0...v3.85.0) (2022-05-05)


### Features

* **client-ec2:** Amazon EC2 I4i instances are powered by 3rd generation Intel Xeon Scalable processors and feature up to 30 TB of local AWS Nitro SSD storage ([1aefead](https://github.com/aws/aws-sdk-js-v3/commit/1aefead30f40900f31c31d8b8afb95ce8a1aeda2))
* **codegen:** add codegen indicator comment to all generated files ([#3592](https://github.com/aws/aws-sdk-js-v3/issues/3592)) ([567a530](https://github.com/aws/aws-sdk-js-v3/commit/567a5304232fcc1f9db3fd3df545054de8336b4b))





# [3.83.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.82.0...v3.83.0) (2022-05-03)


### Features

* **client-ec2:** Adds support for allocating Dedicated Hosts on AWS  Outposts. The AllocateHosts API now accepts an OutpostArn request  parameter, and the DescribeHosts API now includes an OutpostArn response parameter. ([75a68fd](https://github.com/aws/aws-sdk-js-v3/commit/75a68fd0fa8a44060c46771f323083d9e25c17f3))





# [3.82.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.81.0...v3.82.0) (2022-05-02)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.81.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.80.0...v3.81.0) (2022-04-29)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.80.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.79.0...v3.80.0) (2022-04-28)


### Features

* **client-ec2:** This release adds support to query the public key and creation date of EC2 Key Pairs. Additionally, the format (pem or ppk) of a key pair can be specified when creating a new key pair. ([61e9e39](https://github.com/aws/aws-sdk-js-v3/commit/61e9e39be52d91cca705d0386a119bd62ab748c8))





# [3.79.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.78.0...v3.79.0) (2022-04-27)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.78.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.77.0...v3.78.0) (2022-04-26)


### Features

* **types:** add pagination stopOnSameToken option ([#3524](https://github.com/aws/aws-sdk-js-v3/issues/3524)) ([9bf73e8](https://github.com/aws/aws-sdk-js-v3/commit/9bf73e81b8d9be9f12c72cbefbe26c502d1873c6))





# [3.76.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.75.0...v3.76.0) (2022-04-22)


### Features

* **client-ec2:** Adds support for waiters that automatically poll for a deleted NAT Gateway until it reaches the deleted state. ([047c131](https://github.com/aws/aws-sdk-js-v3/commit/047c13158e4f43b53dd1525e028888907026a278))





# [3.75.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.74.0...v3.75.0) (2022-04-21)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.74.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.73.0...v3.74.0) (2022-04-20)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.72.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.71.0...v3.72.0) (2022-04-15)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.71.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.70.0...v3.71.0) (2022-04-14)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.69.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.68.0...v3.69.0) (2022-04-12)


### Features

* **client-ec2:** X2idn and X2iedn instances are powered by 3rd generation Intel Xeon Scalable processors with an all-core turbo frequency up to 3.5 GHzAmazon EC2. C6a instances are powered by 3rd generation AMD EPYC processors. ([57c38e8](https://github.com/aws/aws-sdk-js-v3/commit/57c38e8466cfe494da95fa3964967ab8272e6152))





# [3.67.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.66.0...v3.67.0) (2022-04-08)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.60.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.59.0...v3.60.0) (2022-03-30)


### Features

* **client-ec2:** This release simplifies the auto-recovery configuration process enabling customers to set the recovery behavior to disabled or default ([4e3290e](https://github.com/aws/aws-sdk-js-v3/commit/4e3290e38f5a6d984aaf293c303f92f09ec9a229))





# [3.58.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.57.0...v3.58.0) (2022-03-28)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.57.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.56.0...v3.57.0) (2022-03-25)


### Features

* **client-ec2:** This is release adds support for Amazon VPC Reachability Analyzer to analyze path through a Transit Gateway. ([62b49fc](https://github.com/aws/aws-sdk-js-v3/commit/62b49fcdf2a24f886b9b621047c1e49b9fb721e4))





# [3.56.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.55.0...v3.56.0) (2022-03-24)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.55.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.54.1...v3.55.0) (2022-03-21)


### Features

* **clients:** update clients as of 03/21/2022 ([#3455](https://github.com/aws/aws-sdk-js-v3/issues/3455)) ([7cd40a5](https://github.com/aws/aws-sdk-js-v3/commit/7cd40a5aeaddf03b8d27e814b3a2b441c1217dfb))





## [3.54.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.54.0...v3.54.1) (2022-03-15)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.54.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.53.1...v3.54.0) (2022-03-11)


### Features

* **clients:** update clients as of 2022/03/10 ([#3411](https://github.com/aws/aws-sdk-js-v3/issues/3411)) ([8fa517a](https://github.com/aws/aws-sdk-js-v3/commit/8fa517a2c56d2f98a2e4a9c4ea6fd99b6ce61a71))





# [3.53.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.52.0...v3.53.0) (2022-02-24)


### Features

* **clients:** generate service exceptions as classes ([#3267](https://github.com/aws/aws-sdk-js-v3/issues/3267)) ([ca64fee](https://github.com/aws/aws-sdk-js-v3/commit/ca64feed3351c394c07dc26b782a5760a396a074))
* **clients:** update clients as of 2022/02/23 ([#3356](https://github.com/aws/aws-sdk-js-v3/issues/3356)) ([b6b2e25](https://github.com/aws/aws-sdk-js-v3/commit/b6b2e258add12c73d807483ca078401a6d84a12b))





# [3.52.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.51.0...v3.52.0) (2022-02-18)


### Features

* **clients:** update clients as of 2022/02/18 ([#3335](https://github.com/aws/aws-sdk-js-v3/issues/3335)) ([717b06f](https://github.com/aws/aws-sdk-js-v3/commit/717b06fc43e9876a6f8040147b75ad5da38b1e0f))





# [3.51.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.50.0...v3.51.0) (2022-02-12)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.50.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.49.0...v3.50.0) (2022-02-08)


### Features

* **clients:** update clients as of 02/04/2022 ([#3280](https://github.com/aws/aws-sdk-js-v3/issues/3280)) ([63d7f8c](https://github.com/aws/aws-sdk-js-v3/commit/63d7f8c539e0fd782fa5bf997bd6ac2730e4bfda))





# [3.49.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.48.0...v3.49.0) (2022-01-29)


### Features

* **clients:** update clients as of 01/28/2022 ([#3263](https://github.com/aws/aws-sdk-js-v3/issues/3263)) ([c207cf4](https://github.com/aws/aws-sdk-js-v3/commit/c207cf4a70ba9ef14dc5b94da7883b0889d64918))





# [3.48.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.47.2...v3.48.0) (2022-01-22)


### Features

* **clients:** update clients as of 2022/01/21 ([#3228](https://github.com/aws/aws-sdk-js-v3/issues/3228)) ([fa713ef](https://github.com/aws/aws-sdk-js-v3/commit/fa713efca6b2f424c27535d000359f08830960b1))





## [3.47.2](https://github.com/aws/aws-sdk-js-v3/compare/v3.47.1...v3.47.2) (2022-01-21)

**Note:** Version bump only for package @aws-sdk/client-ec2





## [3.47.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.47.0-release-test-1...v3.47.1) (2022-01-20)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.47.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.46.0...v3.47.0) (2022-01-15)


### Features

* **clients:** update clients to use default values inferred from defaults mode ([#3192](https://github.com/aws/aws-sdk-js-v3/issues/3192)) ([9152e21](https://github.com/aws/aws-sdk-js-v3/commit/9152e210c6ec29f34bb070eaf2874039022e6ab7))





# [3.46.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.45.0...v3.46.0) (2022-01-07)


### Bug Fixes

* **clients:** update clean:dist script to delete dist-* folder ([#3155](https://github.com/aws/aws-sdk-js-v3/issues/3155)) ([cdb1709](https://github.com/aws/aws-sdk-js-v3/commit/cdb17090f82d1fc8755811c82cbed5976ec7e60b))


### Features

* **clients:** extend typedoc.json from root ([#3136](https://github.com/aws/aws-sdk-js-v3/issues/3136)) ([f6a3ef5](https://github.com/aws/aws-sdk-js-v3/commit/f6a3ef541ae2d92872d09d8cab6727911287ebb2))
* **clients:** update clients as of 2021/01/07 ([#3163](https://github.com/aws/aws-sdk-js-v3/issues/3163)) ([6648b07](https://github.com/aws/aws-sdk-js-v3/commit/6648b07ea97691d2fed55eab49831646543b648b))
* end support for Node.js 10.x ([#3122](https://github.com/aws/aws-sdk-js-v3/issues/3122)) ([7acf18a](https://github.com/aws/aws-sdk-js-v3/commit/7acf18abd3fb1cc461f809110cdb0d7968c2070e))





# [3.45.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.44.0...v3.45.0) (2021-12-23)


### Features

* **clients:** update clients as of 2021/12/23 ([#3110](https://github.com/aws/aws-sdk-js-v3/issues/3110)) ([5d638e1](https://github.com/aws/aws-sdk-js-v3/commit/5d638e188ce64fa80fe36b8cba79ba63b80b50b7))





# [3.44.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.43.0...v3.44.0) (2021-12-02)


### Features

* **clients:** update clients as of 2021/11/30 ([#3077](https://github.com/aws/aws-sdk-js-v3/issues/3077)) ([2bdba30](https://github.com/aws/aws-sdk-js-v3/commit/2bdba30963e550728ba2903d57daa1e666a29d71))
* **clients:** update clients as of 2021/12/01 ([#3078](https://github.com/aws/aws-sdk-js-v3/issues/3078)) ([9c44188](https://github.com/aws/aws-sdk-js-v3/commit/9c44188265ea484d55c50848d7daae5571007ce0))





# [3.43.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.42.0...v3.43.0) (2021-11-29)


### Features

* **clients:** update clients as of 11/28/2021 ([#3072](https://github.com/aws/aws-sdk-js-v3/issues/3072)) ([2ad1622](https://github.com/aws/aws-sdk-js-v3/commit/2ad1622ba8586b926fe508055211803bb29e3976))





# [3.42.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.41.0...v3.42.0) (2021-11-19)


### Features

* **clients:** update clients as of 11/18/2021 ([#3039](https://github.com/aws/aws-sdk-js-v3/issues/3039)) ([d2b2c45](https://github.com/aws/aws-sdk-js-v3/commit/d2b2c453315fc7bff798c1fb97c792e59274b4d6))





# [3.41.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.40.1...v3.41.0) (2021-11-11)


### Features

* **clients:** update clients as of 2021/11/11 ([#3015](https://github.com/aws/aws-sdk-js-v3/issues/3015)) ([3d82c4e](https://github.com/aws/aws-sdk-js-v3/commit/3d82c4e3c4d174533f46ce35495cf5cffabdb35a))





# [3.40.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.39.0...v3.40.0) (2021-11-05)


### Features

* **clients:** populate variants in endpoints hashes ([#2974](https://github.com/aws/aws-sdk-js-v3/issues/2974)) ([0dd68ef](https://github.com/aws/aws-sdk-js-v3/commit/0dd68ef8b04ea0e96e43b05a9a10221e433fdf86))
* **clients:** update clients as of 2021/11/05 ([#2994](https://github.com/aws/aws-sdk-js-v3/issues/2994)) ([f5ecc31](https://github.com/aws/aws-sdk-js-v3/commit/f5ecc3147035a1f3d2d74cfed147999927ea8256))





# [3.39.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.38.0...v3.39.0) (2021-10-29)


### Features

* **clients:** update clients as of 2021/10/28 ([#2955](https://github.com/aws/aws-sdk-js-v3/issues/2955)) ([378d161](https://github.com/aws/aws-sdk-js-v3/commit/378d16166de49b06263291001986715d9533cadf))





# [3.38.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.37.0...v3.38.0) (2021-10-22)


### Features

* **client-documentation-generator:** rename package ([#2916](https://github.com/aws/aws-sdk-js-v3/issues/2916)) ([1a80bfd](https://github.com/aws/aws-sdk-js-v3/commit/1a80bfd2dfc583001ddb4a21b6432eaaad699aa7))
* **clients:** export folder from index.ts ([#2912](https://github.com/aws/aws-sdk-js-v3/issues/2912)) ([183b46d](https://github.com/aws/aws-sdk-js-v3/commit/183b46dde7f5613128038bf1c076f3c0b693203b))





# [3.37.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.36.1...v3.37.0) (2021-10-15)


### Features

* **clients:** update clients as of 10/15/2021 ([#2902](https://github.com/aws/aws-sdk-js-v3/issues/2902)) ([2730b54](https://github.com/aws/aws-sdk-js-v3/commit/2730b5424377944a5a2ad5e1ad7d3ca4135dae1c))





## [3.36.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.36.0...v3.36.1) (2021-10-12)


### Bug Fixes

* **clients:** emitDeclarationOnly in tsconfig.types.json ([#2893](https://github.com/aws/aws-sdk-js-v3/issues/2893)) ([6dc3d56](https://github.com/aws/aws-sdk-js-v3/commit/6dc3d56c20809c90cbdc4dd48627eeebc64af99d))





# [3.36.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.35.0...v3.36.0) (2021-10-08)


### Features

* **clients:** update clients as of 10/07/2021 ([#2879](https://github.com/aws/aws-sdk-js-v3/issues/2879)) ([1f4441e](https://github.com/aws/aws-sdk-js-v3/commit/1f4441e46b63ae6ff01067780b26d49916c267a0))
* publish files in dist-* only ([#2873](https://github.com/aws/aws-sdk-js-v3/issues/2873)) ([53b4243](https://github.com/aws/aws-sdk-js-v3/commit/53b4243b066f25ff2412d5f0dea1036054b2df32))
* **codegen:** ts-ignore packageInfo imports in codegen ([#2875](https://github.com/aws/aws-sdk-js-v3/issues/2875)) ([99d9267](https://github.com/aws/aws-sdk-js-v3/commit/99d926762193e83a354edec6e9de2b0543449704))
* **tsconfig:** remove sourceMap ([#2867](https://github.com/aws/aws-sdk-js-v3/issues/2867)) ([d25f526](https://github.com/aws/aws-sdk-js-v3/commit/d25f526627a02a2ca28675fecce66c76b6c97966))





# [3.35.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.34.0...v3.35.0) (2021-10-04)


### Features

* **clients:** eslint --fix using esprint ([#2849](https://github.com/aws/aws-sdk-js-v3/issues/2849)) ([94d0a2d](https://github.com/aws/aws-sdk-js-v3/commit/94d0a2d8a0579ee0a742337937ad05735cfbc1ba))
* **clients:** move source files to 'src' folder ([#2845](https://github.com/aws/aws-sdk-js-v3/issues/2845)) ([e0025cd](https://github.com/aws/aws-sdk-js-v3/commit/e0025cddbba244a41ddf1fd1adb761142e15c22d))





# [3.34.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.33.0...v3.34.0) (2021-09-24)


### Features

* **clients:** remove comments from transpiled JS files ([#2817](https://github.com/aws/aws-sdk-js-v3/issues/2817)) ([d01420b](https://github.com/aws/aws-sdk-js-v3/commit/d01420b247966c8ec84c1dd0a1b42512ede10c90))
* **clients:** update clients as of 09/24/2021 ([#2826](https://github.com/aws/aws-sdk-js-v3/issues/2826)) ([845ca6e](https://github.com/aws/aws-sdk-js-v3/commit/845ca6e1f77c27d76ced3d309e0bf28e3f2b517f))





# [3.33.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.32.0...v3.33.0) (2021-09-21)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.32.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.31.0...v3.32.0) (2021-09-17)


### Features

* **clients:** update clients as of 09/17/2021 ([#2795](https://github.com/aws/aws-sdk-js-v3/issues/2795)) ([45aee9d](https://github.com/aws/aws-sdk-js-v3/commit/45aee9dd8a87578a2b5a9e0c5345a0ab0a482e80))





# [3.31.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.30.0...v3.31.0) (2021-09-11)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.30.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.29.0...v3.30.0) (2021-09-07)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.29.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.28.0...v3.29.0) (2021-09-02)


### Features

* **clients:** update clients as of 09/02/2021 ([#2744](https://github.com/aws/aws-sdk-js-v3/issues/2744)) ([19f061f](https://github.com/aws/aws-sdk-js-v3/commit/19f061fa189539c8e64563e5337ac640450c17ab))





# [3.28.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.27.0...v3.28.0) (2021-08-27)


### Bug Fixes

* **clients:** use optional chaining while processing runtime config ([#2690](https://github.com/aws/aws-sdk-js-v3/issues/2690)) ([18469ce](https://github.com/aws/aws-sdk-js-v3/commit/18469cefc27840ba00d516265ebd976f10240496))


### Features

* **clients:** allow setting path prefix from custom endpoints ([#2722](https://github.com/aws/aws-sdk-js-v3/issues/2722)) ([990ba2f](https://github.com/aws/aws-sdk-js-v3/commit/990ba2fe1c03cf10c3cb345cee4d137af7095f3d))
* **clients:** modular endpoints resolution ([#2704](https://github.com/aws/aws-sdk-js-v3/issues/2704)) ([88de69b](https://github.com/aws/aws-sdk-js-v3/commit/88de69ba28aaedfc7f13fa165044ef8cae023bbe))
* **clients:** update clients as of 08/27/2021 ([#2723](https://github.com/aws/aws-sdk-js-v3/issues/2723)) ([b9d88c4](https://github.com/aws/aws-sdk-js-v3/commit/b9d88c45898f272a08dc3155a00efd5f792d417f))





# [3.27.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.26.0...v3.27.0) (2021-08-19)


### Features

* **clients:** update clients as of 08/19/2021 ([#2689](https://github.com/aws/aws-sdk-js-v3/issues/2689)) ([acbb59a](https://github.com/aws/aws-sdk-js-v3/commit/acbb59a589171a97f6a4276cb825c9c58d22d6f1))





# [3.26.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.25.0...v3.26.0) (2021-08-13)


### Bug Fixes

* **clients:** only trim xml tag values which contain newline ([#2653](https://github.com/aws/aws-sdk-js-v3/issues/2653)) ([28336f5](https://github.com/aws/aws-sdk-js-v3/commit/28336f50cd7181f5805ec036113365d10e9a7a03))





# [3.25.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.24.0...v3.25.0) (2021-08-05)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.24.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.23.0...v3.24.0) (2021-07-29)


### Features

* **clients:** update clients as of 07/29/2021 ([#2631](https://github.com/aws/aws-sdk-js-v3/issues/2631)) ([a34551e](https://github.com/aws/aws-sdk-js-v3/commit/a34551e2590b01aeacc40d1afd9ee1076f000a77))





# [3.23.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.22.0...v3.23.0) (2021-07-23)


### Bug Fixes

* **clients:** allow undefined configuration ([#2617](https://github.com/aws/aws-sdk-js-v3/issues/2617)) ([a004d15](https://github.com/aws/aws-sdk-js-v3/commit/a004d1569e0b213259c50f72fddfd209fff0d7a3))
* bump up tslib to 2.3.0 ([#2601](https://github.com/aws/aws-sdk-js-v3/issues/2601)) ([7040faa](https://github.com/aws/aws-sdk-js-v3/commit/7040faac07976c1dcfd5240675b82a2f275b2a55))


### Features

* **clients:** change runtime config from constant to provider functions ([#2574](https://github.com/aws/aws-sdk-js-v3/issues/2574)) ([5eca565](https://github.com/aws/aws-sdk-js-v3/commit/5eca565b5237a31ee4f18a2ecb4608099ccd55ac))





# [3.22.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.21.0...v3.22.0) (2021-07-16)


### Bug Fixes

* **clients:** link to Hash Interface ([#2573](https://github.com/aws/aws-sdk-js-v3/issues/2573)) ([bb7b3ed](https://github.com/aws/aws-sdk-js-v3/commit/bb7b3edc152f2c33b0e1cf2848aba4231882c36d))
* **clients:** prefix `dist/` for typesVersions TS<4 ([#2580](https://github.com/aws/aws-sdk-js-v3/issues/2580)) ([dff5cd4](https://github.com/aws/aws-sdk-js-v3/commit/dff5cd4b6fa00453e938ce8f238c1542ee7ba3d6))


### Features

* **clients:** update clients as of 07/16/2021 ([#2591](https://github.com/aws/aws-sdk-js-v3/issues/2591)) ([f231e7c](https://github.com/aws/aws-sdk-js-v3/commit/f231e7ca1fcc437b4503901a4af3c501d128f59f))





# [3.21.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.20.0...v3.21.0) (2021-07-09)


### Features

* **clients:** update clients as of 07/08/2021 ([#2565](https://github.com/aws/aws-sdk-js-v3/issues/2565)) ([c9bd983](https://github.com/aws/aws-sdk-js-v3/commit/c9bd98328765c540b778f9085d0ec8870e5af6c9))





# [3.20.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.19.0...v3.20.0) (2021-07-02)


### Bug Fixes

* replace prepublishOnly script with downlevel-dts ([#2537](https://github.com/aws/aws-sdk-js-v3/issues/2537)) ([63818a1](https://github.com/aws/aws-sdk-js-v3/commit/63818a1e47b08af56f092031a01bbbff0a9af590))


### Features

* **clients:** update clients as of 07/01/2021 ([#2542](https://github.com/aws/aws-sdk-js-v3/issues/2542)) ([ed301ba](https://github.com/aws/aws-sdk-js-v3/commit/ed301ba3c10decdd84fb79ddc7ccf5c87072e7b9))





# [3.19.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.18.0...v3.19.0) (2021-06-24)


### Features

* **clients:** update clients as of 06/17/2021 ([#2501](https://github.com/aws/aws-sdk-js-v3/issues/2501)) ([19bd800](https://github.com/aws/aws-sdk-js-v3/commit/19bd800233490de726cf38a292f835371c2a24a5))





# [3.18.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.17.0...v3.18.0) (2021-06-04)


### Features

* **clients:** update clients as of 06/03/2021 ([#2464](https://github.com/aws/aws-sdk-js-v3/issues/2464)) ([14e8fbf](https://github.com/aws/aws-sdk-js-v3/commit/14e8fbf696c9623643e609bfbb702916e36b057a))
* support Sigv4 for non AWS services ([#2385](https://github.com/aws/aws-sdk-js-v3/issues/2385)) ([0a251aa](https://github.com/aws/aws-sdk-js-v3/commit/0a251aa44d54fbf21e328ccf2b20db45e94aaa90)), closes [/github.com/awslabs/smithy/blob/main/smithy-aws-protocol-tests/model/restJson1/main.smithy#L11-L13](https://github.com//github.com/awslabs/smithy/blob/main/smithy-aws-protocol-tests/model/restJson1/main.smithy/issues/L11-L13)
* **clients:** add retryModeProvider in runtimeConfig ([#2440](https://github.com/aws/aws-sdk-js-v3/issues/2440)) ([fc0a5da](https://github.com/aws/aws-sdk-js-v3/commit/fc0a5dae2c13814d5a0c5fce1d892ce0e97c98e4))





# [3.17.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.16.0...v3.17.0) (2021-05-26)


### Features

* **clients:** update endpoint resolution as of 05/12/2021 ([#2398](https://github.com/aws/aws-sdk-js-v3/issues/2398)) ([17afcbb](https://github.com/aws/aws-sdk-js-v3/commit/17afcbb65bb26f091ba258717716272d5dc4e2c7))





# [3.16.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.15.0...v3.16.0) (2021-05-14)


### Bug Fixes

* **clients:** call decode from HTML entities in XML parser ([#2381](https://github.com/aws/aws-sdk-js-v3/issues/2381)) ([fd6b7eb](https://github.com/aws/aws-sdk-js-v3/commit/fd6b7ebd7d3fc4a2ceb3b016404de73413e1fb2f))


### Features

* **clients:** update clients as of 05/14/2021 ([#2396](https://github.com/aws/aws-sdk-js-v3/issues/2396)) ([187c42a](https://github.com/aws/aws-sdk-js-v3/commit/187c42ae0f64ac17700eb02746b787b9fc52fc8e))





# [3.15.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.14.0...v3.15.0) (2021-05-10)


### Features

* **clients:** adding throwable waiters WaitUntil[operationState] ([#2302](https://github.com/aws/aws-sdk-js-v3/issues/2302)) ([f01d5ae](https://github.com/aws/aws-sdk-js-v3/commit/f01d5ae5e0e81ecc122dba2d2883352c1b86c3bb))





# [3.14.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.13.1...v3.14.0) (2021-04-30)


### Bug Fixes

* **clients:** typo in README difference -> different ([#2314](https://github.com/aws/aws-sdk-js-v3/issues/2314)) ([9ac1f40](https://github.com/aws/aws-sdk-js-v3/commit/9ac1f40eea78075e6b301df50cfae17c19ad77c3))


### Features

* **clients:** update clients as of 04/29/2021 ([#2329](https://github.com/aws/aws-sdk-js-v3/issues/2329)) ([48ab750](https://github.com/aws/aws-sdk-js-v3/commit/48ab75045d1a94adfae94ac638a0dd882ebd05ac))





## [3.13.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.13.0...v3.13.1) (2021-04-22)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.13.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.12.0...v3.13.0) (2021-04-15)


### Features

* **clients:** update clients as of 04/14/2021 ([#2258](https://github.com/aws/aws-sdk-js-v3/issues/2258)) ([4f9f4a7](https://github.com/aws/aws-sdk-js-v3/commit/4f9f4a79b019c1c35530e05c4138fde88a6fb547))
* remove @aws-sdk/url-parser-native in favor of react-native-url-polyfill ([#2229](https://github.com/aws/aws-sdk-js-v3/issues/2229)) ([d6a67d7](https://github.com/aws/aws-sdk-js-v3/commit/d6a67d7cd471e3440fa7b23ba00b11c00b10a566))





# [3.12.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.11.0...v3.12.0) (2021-04-09)


### Bug Fixes

* run downlevel-dts in prepublishOnly ([#2218](https://github.com/aws/aws-sdk-js-v3/issues/2218)) ([0745502](https://github.com/aws/aws-sdk-js-v3/commit/0745502dcf819460ee1d81362470859674c757a7))


### Features

* support default role assumers ([#2221](https://github.com/aws/aws-sdk-js-v3/issues/2221)) ([ae17f4c](https://github.com/aws/aws-sdk-js-v3/commit/ae17f4c64f0390c9b879eb27390688ac156cac47))





# [3.11.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.10.0...v3.11.0) (2021-04-01)


### Bug Fixes

* **clients:** trim values in parsed xml only if result is empty ([#2194](https://github.com/aws/aws-sdk-js-v3/issues/2194)) ([a990db7](https://github.com/aws/aws-sdk-js-v3/commit/a990db7deb0e672ec8bd4545111bb2523fe5bf28))





# [3.10.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.9.0...v3.10.0) (2021-03-26)


### Bug Fixes

* **clients:** generate jest.config.js ([#2172](https://github.com/aws/aws-sdk-js-v3/issues/2172)) ([95b0e19](https://github.com/aws/aws-sdk-js-v3/commit/95b0e191eddf71033b9bd6a2d76d20fedea71b5f))


### Features

* use ts-jest for running jest tests ([#2088](https://github.com/aws/aws-sdk-js-v3/issues/2088)) ([456002c](https://github.com/aws/aws-sdk-js-v3/commit/456002cf7fa16864b72c3c279b094886a42abddb))





# [3.9.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.8.1...v3.9.0) (2021-03-18)

**Note:** Version bump only for package @aws-sdk/client-ec2





## [3.8.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.8.0...v3.8.1) (2021-03-11)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [3.8.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.7.0...v3.8.0) (2021-03-05)


### Bug Fixes

* **deps:** pin fast-xml-parser to v3.17.4 ([#2102](https://github.com/aws/aws-sdk-js-v3/issues/2102)) ([c612c75](https://github.com/aws/aws-sdk-js-v3/commit/c612c75890a9b5005ff68b72bcac91761ce5dc14))





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

**Note:** Version bump only for package @aws-sdk/client-ec2





## [3.4.1](https://github.com/aws/aws-sdk-js-v3/compare/v3.4.0...v3.4.1) (2021-01-29)


### Bug Fixes

* **client-ec2:** update ec2 model ([#1982](https://github.com/aws/aws-sdk-js-v3/issues/1982)) ([599725a](https://github.com/aws/aws-sdk-js-v3/commit/599725aba08176e911e6bc6c75797682f0999852))
* **clients:** use TS 3.4 compatible types for TS 3.9 ([#1978](https://github.com/aws/aws-sdk-js-v3/issues/1978)) ([8bced5c](https://github.com/aws/aws-sdk-js-v3/commit/8bced5c32b9dbc68f1065054d796cb0b8b87bcc4))





# [3.4.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.3.0...v3.4.0) (2021-01-28)


### Features

* **middleware-stack:** allow adding middleware to override an existing one ([#1964](https://github.com/aws/aws-sdk-js-v3/issues/1964)) ([9c21f14](https://github.com/aws/aws-sdk-js-v3/commit/9c21f14412f2b1f591422f3c67dedbe886db723b)), closes [#1883](https://github.com/aws/aws-sdk-js-v3/issues/1883)
* use downlevel-dts to generate TS 3.4 compatible types ([#1943](https://github.com/aws/aws-sdk-js-v3/issues/1943)) ([63ad215](https://github.com/aws/aws-sdk-js-v3/commit/63ad2151c8bb7be32ea8838a9b0974806ed3906b))





# [3.3.0](https://github.com/aws/aws-sdk-js-v3/compare/v3.2.0...v3.3.0) (2021-01-14)


### Bug Fixes

* **clients:** export explicit dependencies on @aws-sdk/types ([#1902](https://github.com/aws/aws-sdk-js-v3/issues/1902)) ([96f1087](https://github.com/aws/aws-sdk-js-v3/commit/96f1087333ba916593d557051297983912b27caa))
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

* **clients:** waiter code generation ([#1784](https://github.com/aws/aws-sdk-js-v3/issues/1784)) ([c78d705](https://github.com/aws/aws-sdk-js-v3/commit/c78d705e0a4d1d95fe74483f8da58ad23708f0c6))
* update clients as of 12/12/2020 ([#1771](https://github.com/aws/aws-sdk-js-v3/issues/1771)) ([f69ff44](https://github.com/aws/aws-sdk-js-v3/commit/f69ff440a79018ad69fcb26ad46e3db65b23ce71))
* update clients as of 12/12/2020 with model fixes ([#1774](https://github.com/aws/aws-sdk-js-v3/issues/1774)) ([54e8715](https://github.com/aws/aws-sdk-js-v3/commit/54e87151877dd5cf9a5f256698c088cc7a856225))





# [1.0.0-rc.9](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.8...v1.0.0-rc.9) (2020-12-11)


### Bug Fixes

* **codegen:** import SENSITIVE_STRING only when used ([#1761](https://github.com/aws/aws-sdk-js-v3/issues/1761)) ([9296283](https://github.com/aws/aws-sdk-js-v3/commit/9296283623edecf95441e310200a17b61efe80e3))


### Features

* add service id config ([#1765](https://github.com/aws/aws-sdk-js-v3/issues/1765)) ([1ba5672](https://github.com/aws/aws-sdk-js-v3/commit/1ba5672ff75bf5401f02f65d20af61c7bee339ff))
* update clients as of 12/09/2020 ([#1755](https://github.com/aws/aws-sdk-js-v3/issues/1755)) ([de1a24d](https://github.com/aws/aws-sdk-js-v3/commit/de1a24de6324694d37167fc49c81dcdf435a9405))
* update clients as of 12/11/2020 ([#1767](https://github.com/aws/aws-sdk-js-v3/issues/1767)) ([21646e3](https://github.com/aws/aws-sdk-js-v3/commit/21646e3b449aa67b9fe97fd2935f88a8773d94e9))





# [1.0.0-rc.8](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.7...v1.0.0-rc.8) (2020-12-05)


### Features

* update clients as of 11/30/2020 ([#1734](https://github.com/aws/aws-sdk-js-v3/issues/1734)) ([a1e8036](https://github.com/aws/aws-sdk-js-v3/commit/a1e8036a33dcb29f49a99e6f93e911cf7ba7e796))
* update clients as of 12/3/2020 ([#1741](https://github.com/aws/aws-sdk-js-v3/issues/1741)) ([58383dc](https://github.com/aws/aws-sdk-js-v3/commit/58383dce968f01500b6c3ef07fead897787ed569))
* **invalid-dependency:** add invalidAsyncFunction which rejects with an Error ([#1719](https://github.com/aws/aws-sdk-js-v3/issues/1719)) ([c4c046e](https://github.com/aws/aws-sdk-js-v3/commit/c4c046edf0e752560fded20255642e6aed559d2c))





# [1.0.0-rc.7](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.6...v1.0.0-rc.7) (2020-11-20)


### Bug Fixes

* change paginators to export paginateOperationName ([#1692](https://github.com/aws/aws-sdk-js-v3/issues/1692)) ([6d02935](https://github.com/aws/aws-sdk-js-v3/commit/6d029356c03f52469975aecff32baf8cc5f293e8))


### Features

* update clients as of 11/18/2020  ([#1700](https://github.com/aws/aws-sdk-js-v3/issues/1700)) ([8adfed1](https://github.com/aws/aws-sdk-js-v3/commit/8adfed16c9d7cd041be928e8437ccc648bfc0d99))


### BREAKING CHANGES

* change paginators to export paginateOperationName to be consistent with verb nouns across AWS





# [1.0.0-rc.6](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.5...v1.0.0-rc.6) (2020-11-13)


### Features

* update clients as of 11/13 ([#1676](https://github.com/aws/aws-sdk-js-v3/issues/1676)) ([2d934c9](https://github.com/aws/aws-sdk-js-v3/commit/2d934c98f6e5bd936d5744c674bf65e4e798b3d0))





# [1.0.0-rc.5](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.4...v1.0.0-rc.5) (2020-11-09)


### Bug Fixes

* codegen for paginator send commands ([#1667](https://github.com/aws/aws-sdk-js-v3/issues/1667)) ([13f3347](https://github.com/aws/aws-sdk-js-v3/commit/13f3347723e99b20c7ccd38cdd73d5ac981857a0))
* **package.json:** migrate @aws-sdk/types into devDependencies codegen ([#1658](https://github.com/aws/aws-sdk-js-v3/issues/1658)) ([eb50962](https://github.com/aws/aws-sdk-js-v3/commit/eb509629cd6eeb293bf762c201710acabe049a58))


### Features

* **clients:** update clients as of 11/6 ([#1663](https://github.com/aws/aws-sdk-js-v3/issues/1663)) ([07ac6be](https://github.com/aws/aws-sdk-js-v3/commit/07ac6be17ddbd52f638f8ed4b92b093bf7c378d1))





# [1.0.0-rc.4](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.3...v1.0.0-rc.4) (2020-10-31)


### Features

* **clients:** update clients as of 10/30 ([#1648](https://github.com/aws/aws-sdk-js-v3/issues/1648)) ([fdd0ddf](https://github.com/aws/aws-sdk-js-v3/commit/fdd0ddf6e6400cf72dda521ddedc144436a6043c))
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





# [1.0.0-gamma.11](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/client-ec2@1.0.0-gamma.10...@aws-sdk/client-ec2@1.0.0-gamma.11) (2020-10-07)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [1.0.0-gamma.10](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/client-ec2@1.0.0-gamma.9...@aws-sdk/client-ec2@1.0.0-gamma.10) (2020-09-29)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [1.0.0-gamma.9](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/client-ec2@1.0.0-gamma.8...@aws-sdk/client-ec2@1.0.0-gamma.9) (2020-09-15)


### Bug Fixes

* default import package.json for spec compatibility ([#1505](https://github.com/aws/aws-sdk-js-v3/issues/1505)) ([797ba7d](https://github.com/aws/aws-sdk-js-v3/commit/797ba7dc7743eb65e8f81536bcf70e5c225ef861))
* toposort and chunk shape models ([#1510](https://github.com/aws/aws-sdk-js-v3/issues/1510)) ([bee87d8](https://github.com/aws/aws-sdk-js-v3/commit/bee87d8fcc5ea82a361386309ebf9330fe39c816))





# [1.0.0-gamma.8](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/client-ec2@1.0.0-gamma.7...@aws-sdk/client-ec2@1.0.0-gamma.8) (2020-09-01)


### Features

* add LoggerConfig to all clients ([#1472](https://github.com/aws/aws-sdk-js-v3/issues/1472)) ([d55a812](https://github.com/aws/aws-sdk-js-v3/commit/d55a81278fee13281b20bfa60d89d2b111245dd4))





# [1.0.0-gamma.7](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/client-ec2@1.0.0-gamma.6...@aws-sdk/client-ec2@1.0.0-gamma.7) (2020-08-25)


### Features

* get partition of given region ([#1435](https://github.com/aws/aws-sdk-js-v3/issues/1435)) ([c18bfe4](https://github.com/aws/aws-sdk-js-v3/commit/c18bfe489db77d945d0bcc4ae7194ff46cd461a9))
* refactor nodejs region loader  ([#1437](https://github.com/aws/aws-sdk-js-v3/issues/1437)) ([5d79645](https://github.com/aws/aws-sdk-js-v3/commit/5d79645eb622b111c94a7de1918c8357c83a7bf8))
* refactor nodejs retry config loader ([#1438](https://github.com/aws/aws-sdk-js-v3/issues/1438)) ([5478012](https://github.com/aws/aws-sdk-js-v3/commit/5478012147b475bdce07a2cbe393a972e502c93f))
* update clients with smithy models as of 08/20 ([#1457](https://github.com/aws/aws-sdk-js-v3/issues/1457)) ([f95cce3](https://github.com/aws/aws-sdk-js-v3/commit/f95cce338fcdc49ead6e3ca6d178a6fd58ae556f))





# [1.0.0-gamma.6](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/client-ec2@1.0.0-gamma.5...@aws-sdk/client-ec2@1.0.0-gamma.6) (2020-08-04)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [1.0.0-gamma.5](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/client-ec2@1.0.0-gamma.4...@aws-sdk/client-ec2@1.0.0-gamma.5) (2020-07-21)

**Note:** Version bump only for package @aws-sdk/client-ec2





# [1.0.0-gamma.4](https://github.com/aws/aws-sdk-js-v3/compare/@aws-sdk/client-ec2@1.0.0-gamma.3...@aws-sdk/client-ec2@1.0.0-gamma.4) (2020-07-13)

**Note:** Version bump only for package @aws-sdk/client-ec2





# 1.0.0-gamma.3 (2020-07-08)


### Features

* add filterSensitiveLog method to Structure namespaces ([#1130](https://github.com/aws/aws-sdk-js-v3/issues/1130)) ([8eff087](https://github.com/aws/aws-sdk-js-v3/commit/8eff0875580e30e12f2e0abd5fa402973790e697))



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



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c5961cc7063286b9016086a43dc1fbff81))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7af582e265c99d321450942b119d378703b))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612be9a7ac238b409bb044e5e3be23ee1aa5))





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



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c5961cc7063286b9016086a43dc1fbff81))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7af582e265c99d321450942b119d378703b))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612be9a7ac238b409bb044e5e3be23ee1aa5))





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



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c5961cc7063286b9016086a43dc1fbff81))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7af582e265c99d321450942b119d378703b))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612be9a7ac238b409bb044e5e3be23ee1aa5))





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



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c5961cc7063286b9016086a43dc1fbff81))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7af582e265c99d321450942b119d378703b))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612be9a7ac238b409bb044e5e3be23ee1aa5))





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



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c5961cc7063286b9016086a43dc1fbff81))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7af582e265c99d321450942b119d378703b))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612be9a7ac238b409bb044e5e3be23ee1aa5))





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



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c5961cc7063286b9016086a43dc1fbff81))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7af582e265c99d321450942b119d378703b))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612be9a7ac238b409bb044e5e3be23ee1aa5))





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



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c5961cc7063286b9016086a43dc1fbff81))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7af582e265c99d321450942b119d378703b))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612be9a7ac238b409bb044e5e3be23ee1aa5))





# 1.0.0-beta.1 (2020-03-25)


### Features

* bump packages to beta ([#1050](https://github.com/aws/aws-sdk-js-v3/issues/1050)) ([40501d4](https://github.com/aws/aws-sdk-js-v3/commit/40501d4394d04bc1bc91c10136fa48b1d3a67d8f))



# 1.0.0-alpha.28 (2020-03-20)



# 1.0.0-alpha.27 (2020-03-13)


### Bug Fixes

* codegen for using pure JS hasher in RN ([#998](https://github.com/aws/aws-sdk-js-v3/issues/998)) ([022cba5](https://github.com/aws/aws-sdk-js-v3/commit/022cba59168998bea8a263687395d27eae375d30)), closes [awslabs/smithy-typescript#144](https://github.com/awslabs/smithy-typescript/issues/144)



# 1.0.0-alpha.26 (2020-03-12)


### Bug Fixes

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



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c5961cc7063286b9016086a43dc1fbff81))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7af582e265c99d321450942b119d378703b))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612be9a7ac238b409bb044e5e3be23ee1aa5))





# 1.0.0-alpha.16 (2020-03-20)



# 1.0.0-alpha.27 (2020-03-13)


### Bug Fixes

* codegen for using pure JS hasher in RN ([#998](https://github.com/aws/aws-sdk-js-v3/issues/998)) ([022cba5](https://github.com/aws/aws-sdk-js-v3/commit/022cba59168998bea8a263687395d27eae375d30)), closes [awslabs/smithy-typescript#144](https://github.com/awslabs/smithy-typescript/issues/144)



# 1.0.0-alpha.26 (2020-03-12)


### Bug Fixes

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



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c5961cc7063286b9016086a43dc1fbff81))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7af582e265c99d321450942b119d378703b))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612be9a7ac238b409bb044e5e3be23ee1aa5))





# 1.0.0-alpha.15 (2020-03-13)


### Bug Fixes

* codegen for using pure JS hasher in RN ([#998](https://github.com/aws/aws-sdk-js-v3/issues/998)) ([022cba5](https://github.com/aws/aws-sdk-js-v3/commit/022cba59168998bea8a263687395d27eae375d30)), closes [awslabs/smithy-typescript#144](https://github.com/awslabs/smithy-typescript/issues/144)



# 1.0.0-alpha.26 (2020-03-12)


### Bug Fixes

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



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c5961cc7063286b9016086a43dc1fbff81))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7af582e265c99d321450942b119d378703b))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612be9a7ac238b409bb044e5e3be23ee1aa5))





# 1.0.0-alpha.14 (2020-03-12)


### Bug Fixes

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



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c5961cc7063286b9016086a43dc1fbff81))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7af582e265c99d321450942b119d378703b))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612be9a7ac238b409bb044e5e3be23ee1aa5))





# 1.0.0-alpha.13 (2020-03-09)


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



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c5961cc7063286b9016086a43dc1fbff81))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7af582e265c99d321450942b119d378703b))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612be9a7ac238b409bb044e5e3be23ee1aa5))





# 1.0.0-alpha.12 (2020-02-19)



# 1.0.0-alpha.23 (2020-02-14)



# 1.0.0-alpha.22 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7a))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612))





# 1.0.0-alpha.11 (2020-02-14)



# 1.0.0-alpha.22 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7a))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612))





# 1.0.0-alpha.10 (2020-02-11)



# 1.0.0-alpha.21 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7a))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612))





# 1.0.0-alpha.9 (2020-02-11)



# 1.0.0-alpha.20 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7a))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612))





# 1.0.0-alpha.8 (2020-02-09)



# 1.0.0-alpha.19 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7a))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612))





# 1.0.0-alpha.7 (2020-02-07)



# 1.0.0-alpha.18 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7a))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612))





# 1.0.0-alpha.6 (2020-02-06)



# 1.0.0-alpha.17 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7a))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612))





# 1.0.0-alpha.5 (2020-02-05)



# 1.0.0-alpha.16 (2020-02-04)



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7a))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612))





# 1.0.0-alpha.4 (2020-02-04)



# 1.0.0-alpha.15 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7a))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612))





# 1.0.0-alpha.3 (2020-01-30)


### Bug Fixes

* update dependencies for ec2 client and mw ([#808](https://github.com/aws/aws-sdk-js-v3/issues/808)) ([48c528c](https://github.com/aws/aws-sdk-js-v3/commit/48c528c))


### Features

* codegen for auto-fill idempotency token ([#815](https://github.com/aws/aws-sdk-js-v3/issues/815)) ([7911a7a](https://github.com/aws/aws-sdk-js-v3/commit/7911a7a))



# 1.0.0-alpha.14 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612))





# 1.0.0-alpha.2 (2020-01-28)


### Features

* add client-ec2 ([#796](https://github.com/aws/aws-sdk-js-v3/issues/796)) ([0753612](https://github.com/aws/aws-sdk-js-v3/commit/0753612))
