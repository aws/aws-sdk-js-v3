// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteKeyPairRequest, DeleteKeyPairResult } from "../models/models_0";
import { de_DeleteKeyPairCommand, se_DeleteKeyPairCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteKeyPairCommand}.
 */
export interface DeleteKeyPairCommandInput extends DeleteKeyPairRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKeyPairCommand}.
 */
export interface DeleteKeyPairCommandOutput extends DeleteKeyPairResult, __MetadataBearer {}

/**
 * <p>Deletes the specified key pair by removing the public key from Amazon Lightsail.</p>
 *          <p>You can delete key pairs that were created using the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_ImportKeyPair.html">ImportKeyPair</a> and
 *         <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateKeyPair.html">CreateKeyPair</a> actions, as well as the Lightsail default key pair. A new default
 *       key pair will not be created unless you launch an instance without specifying a custom key
 *       pair, or you call the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_DownloadDefaultKeyPair.html">DownloadDefaultKeyPair</a> API. </p>
 *          <p>The <code>delete key pair</code> operation supports tag-based access control via resource
 *       tags applied to the resource identified by <code>key pair name</code>. For more information,
 *       see the <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteKeyPairCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteKeyPairCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // DeleteKeyPairRequest
 *   keyPairName: "STRING_VALUE", // required
 *   expectedFingerprint: "STRING_VALUE",
 * };
 * const command = new DeleteKeyPairCommand(input);
 * const response = await client.send(command);
 * // { // DeleteKeyPairResult
 * //   operation: { // Operation
 * //     id: "STRING_VALUE",
 * //     resourceName: "STRING_VALUE",
 * //     resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     location: { // ResourceLocation
 * //       availabilityZone: "STRING_VALUE",
 * //       regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1" || "ap-southeast-3",
 * //     },
 * //     isTerminal: true || false,
 * //     operationDetails: "STRING_VALUE",
 * //     operationType: "DeleteKnownHostKeys" || "DeleteInstance" || "CreateInstance" || "StopInstance" || "StartInstance" || "RebootInstance" || "OpenInstancePublicPorts" || "PutInstancePublicPorts" || "CloseInstancePublicPorts" || "AllocateStaticIp" || "ReleaseStaticIp" || "AttachStaticIp" || "DetachStaticIp" || "UpdateDomainEntry" || "DeleteDomainEntry" || "CreateDomain" || "DeleteDomain" || "CreateInstanceSnapshot" || "DeleteInstanceSnapshot" || "CreateInstancesFromSnapshot" || "CreateLoadBalancer" || "DeleteLoadBalancer" || "AttachInstancesToLoadBalancer" || "DetachInstancesFromLoadBalancer" || "UpdateLoadBalancerAttribute" || "CreateLoadBalancerTlsCertificate" || "DeleteLoadBalancerTlsCertificate" || "AttachLoadBalancerTlsCertificate" || "CreateDisk" || "DeleteDisk" || "AttachDisk" || "DetachDisk" || "CreateDiskSnapshot" || "DeleteDiskSnapshot" || "CreateDiskFromSnapshot" || "CreateRelationalDatabase" || "UpdateRelationalDatabase" || "DeleteRelationalDatabase" || "CreateRelationalDatabaseFromSnapshot" || "CreateRelationalDatabaseSnapshot" || "DeleteRelationalDatabaseSnapshot" || "UpdateRelationalDatabaseParameters" || "StartRelationalDatabase" || "RebootRelationalDatabase" || "StopRelationalDatabase" || "EnableAddOn" || "DisableAddOn" || "PutAlarm" || "GetAlarms" || "DeleteAlarm" || "TestAlarm" || "CreateContactMethod" || "GetContactMethods" || "SendContactMethodVerification" || "DeleteContactMethod" || "CreateDistribution" || "UpdateDistribution" || "DeleteDistribution" || "ResetDistributionCache" || "AttachCertificateToDistribution" || "DetachCertificateFromDistribution" || "UpdateDistributionBundle" || "SetIpAddressType" || "CreateCertificate" || "DeleteCertificate" || "CreateContainerService" || "UpdateContainerService" || "DeleteContainerService" || "CreateContainerServiceDeployment" || "CreateContainerServiceRegistryLogin" || "RegisterContainerImage" || "DeleteContainerImage" || "CreateBucket" || "DeleteBucket" || "CreateBucketAccessKey" || "DeleteBucketAccessKey" || "UpdateBucketBundle" || "UpdateBucket" || "SetResourceAccessForBucket" || "UpdateInstanceMetadataOptions" || "StartGUISession" || "StopGUISession" || "SetupInstanceHttps",
 * //     status: "NotStarted" || "Started" || "Failed" || "Completed" || "Succeeded",
 * //     statusChangedAt: new Date("TIMESTAMP"),
 * //     errorCode: "STRING_VALUE",
 * //     errorDetails: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteKeyPairCommandInput - {@link DeleteKeyPairCommandInput}
 * @returns {@link DeleteKeyPairCommandOutput}
 * @see {@link DeleteKeyPairCommandInput} for command's `input` shape.
 * @see {@link DeleteKeyPairCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an operation is performed on resources in an opt-in
 *       Region that is currently being set up.</p>
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
 *
 * @public
 */
export class DeleteKeyPairCommand extends $Command
  .classBuilder<
    DeleteKeyPairCommandInput,
    DeleteKeyPairCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "DeleteKeyPair", {})
  .n("LightsailClient", "DeleteKeyPairCommand")
  .f(void 0, void 0)
  .ser(se_DeleteKeyPairCommand)
  .de(de_DeleteKeyPairCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKeyPairRequest;
      output: DeleteKeyPairResult;
    };
    sdk: {
      input: DeleteKeyPairCommandInput;
      output: DeleteKeyPairCommandOutput;
    };
  };
}
