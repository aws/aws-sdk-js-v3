// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateBucketRequest, CreateBucketResult } from "../models/models_0";
import { de_CreateBucketCommand, se_CreateBucketCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBucketCommand}.
 */
export interface CreateBucketCommandInput extends CreateBucketRequest {}
/**
 * @public
 *
 * The output of {@link CreateBucketCommand}.
 */
export interface CreateBucketCommandOutput extends CreateBucketResult, __MetadataBearer {}

/**
 * <p>Creates an Amazon Lightsail bucket.</p>
 *          <p>A bucket is a cloud storage resource available in the Lightsail object storage service.
 *       Use buckets to store objects such as data and its descriptive metadata. For more information
 *       about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer
 *         Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateBucketCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateBucketCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // CreateBucketRequest
 *   bucketName: "STRING_VALUE", // required
 *   bundleId: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   enableObjectVersioning: true || false,
 * };
 * const command = new CreateBucketCommand(input);
 * const response = await client.send(command);
 * // { // CreateBucketResult
 * //   bucket: { // Bucket
 * //     resourceType: "STRING_VALUE",
 * //     accessRules: { // AccessRules
 * //       getObject: "public" || "private",
 * //       allowPublicOverrides: true || false,
 * //     },
 * //     arn: "STRING_VALUE",
 * //     bundleId: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     url: "STRING_VALUE",
 * //     location: { // ResourceLocation
 * //       availabilityZone: "STRING_VALUE",
 * //       regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
 * //     },
 * //     name: "STRING_VALUE",
 * //     supportCode: "STRING_VALUE",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     objectVersioning: "STRING_VALUE",
 * //     ableToUpdateBundle: true || false,
 * //     readonlyAccessAccounts: [ // PartnerIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     resourcesReceivingAccess: [ // AccessReceiverList
 * //       { // ResourceReceivingAccess
 * //         name: "STRING_VALUE",
 * //         resourceType: "STRING_VALUE",
 * //       },
 * //     ],
 * //     state: { // BucketState
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //     accessLogConfig: { // BucketAccessLogConfig
 * //       enabled: true || false, // required
 * //       destination: "STRING_VALUE",
 * //       prefix: "STRING_VALUE",
 * //     },
 * //   },
 * //   operations: [ // OperationList
 * //     { // Operation
 * //       id: "STRING_VALUE",
 * //       resourceName: "STRING_VALUE",
 * //       resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       location: {
 * //         availabilityZone: "STRING_VALUE",
 * //         regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
 * //       },
 * //       isTerminal: true || false,
 * //       operationDetails: "STRING_VALUE",
 * //       operationType: "DeleteKnownHostKeys" || "DeleteInstance" || "CreateInstance" || "StopInstance" || "StartInstance" || "RebootInstance" || "OpenInstancePublicPorts" || "PutInstancePublicPorts" || "CloseInstancePublicPorts" || "AllocateStaticIp" || "ReleaseStaticIp" || "AttachStaticIp" || "DetachStaticIp" || "UpdateDomainEntry" || "DeleteDomainEntry" || "CreateDomain" || "DeleteDomain" || "CreateInstanceSnapshot" || "DeleteInstanceSnapshot" || "CreateInstancesFromSnapshot" || "CreateLoadBalancer" || "DeleteLoadBalancer" || "AttachInstancesToLoadBalancer" || "DetachInstancesFromLoadBalancer" || "UpdateLoadBalancerAttribute" || "CreateLoadBalancerTlsCertificate" || "DeleteLoadBalancerTlsCertificate" || "AttachLoadBalancerTlsCertificate" || "CreateDisk" || "DeleteDisk" || "AttachDisk" || "DetachDisk" || "CreateDiskSnapshot" || "DeleteDiskSnapshot" || "CreateDiskFromSnapshot" || "CreateRelationalDatabase" || "UpdateRelationalDatabase" || "DeleteRelationalDatabase" || "CreateRelationalDatabaseFromSnapshot" || "CreateRelationalDatabaseSnapshot" || "DeleteRelationalDatabaseSnapshot" || "UpdateRelationalDatabaseParameters" || "StartRelationalDatabase" || "RebootRelationalDatabase" || "StopRelationalDatabase" || "EnableAddOn" || "DisableAddOn" || "PutAlarm" || "GetAlarms" || "DeleteAlarm" || "TestAlarm" || "CreateContactMethod" || "GetContactMethods" || "SendContactMethodVerification" || "DeleteContactMethod" || "CreateDistribution" || "UpdateDistribution" || "DeleteDistribution" || "ResetDistributionCache" || "AttachCertificateToDistribution" || "DetachCertificateFromDistribution" || "UpdateDistributionBundle" || "SetIpAddressType" || "CreateCertificate" || "DeleteCertificate" || "CreateContainerService" || "UpdateContainerService" || "DeleteContainerService" || "CreateContainerServiceDeployment" || "CreateContainerServiceRegistryLogin" || "RegisterContainerImage" || "DeleteContainerImage" || "CreateBucket" || "DeleteBucket" || "CreateBucketAccessKey" || "DeleteBucketAccessKey" || "UpdateBucketBundle" || "UpdateBucket" || "SetResourceAccessForBucket" || "UpdateInstanceMetadataOptions" || "StartGUISession" || "StopGUISession" || "SetupInstanceHttps",
 * //       status: "NotStarted" || "Started" || "Failed" || "Completed" || "Succeeded",
 * //       statusChangedAt: new Date("TIMESTAMP"),
 * //       errorCode: "STRING_VALUE",
 * //       errorDetails: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateBucketCommandInput - {@link CreateBucketCommandInput}
 * @returns {@link CreateBucketCommandOutput}
 * @see {@link CreateBucketCommandInput} for command's `input` shape.
 * @see {@link CreateBucketCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 * @public
 */
export class CreateBucketCommand extends $Command
  .classBuilder<
    CreateBucketCommandInput,
    CreateBucketCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "CreateBucket", {})
  .n("LightsailClient", "CreateBucketCommand")
  .f(void 0, void 0)
  .ser(se_CreateBucketCommand)
  .de(de_CreateBucketCommand)
  .build() {}
