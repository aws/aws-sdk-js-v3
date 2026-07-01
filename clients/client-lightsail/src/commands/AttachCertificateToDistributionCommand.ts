// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AttachCertificateToDistributionRequest, AttachCertificateToDistributionResult } from "../models/models_0";
import { AttachCertificateToDistribution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AttachCertificateToDistributionCommand}.
 */
export interface AttachCertificateToDistributionCommandInput extends AttachCertificateToDistributionRequest {}
/**
 * @public
 *
 * The output of {@link AttachCertificateToDistributionCommand}.
 */
export interface AttachCertificateToDistributionCommandOutput extends AttachCertificateToDistributionResult, __MetadataBearer {}

/**
 * <p>Attaches an SSL/TLS certificate to your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>After the certificate is attached, your distribution accepts HTTPS traffic for all of the
 *       domains that are associated with the certificate.</p>
 *          <p>Use the <code>CreateCertificate</code> action to create a certificate that you can attach
 *       to your distribution.</p>
 *          <important>
 *             <p>Only certificates created in the <code>us-east-1</code>
 *         Amazon Web Services Region can be attached to Lightsail distributions. Lightsail
 *         distributions are global resources that can reference an origin in any Amazon Web Services
 *         Region, and distribute its content globally. However, all distributions are located in the
 *           <code>us-east-1</code> Region.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, AttachCertificateToDistributionCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, AttachCertificateToDistributionCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // AttachCertificateToDistributionRequest
 *   distributionName: "STRING_VALUE", // required
 *   certificateName: "STRING_VALUE", // required
 * };
 * const command = new AttachCertificateToDistributionCommand(input);
 * const response = await client.send(command);
 * // { // AttachCertificateToDistributionResult
 * //   operation: { // Operation
 * //     id: "STRING_VALUE",
 * //     resourceName: "STRING_VALUE",
 * //     resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     location: { // ResourceLocation
 * //       availabilityZone: "STRING_VALUE",
 * //       regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-north-1" || "eu-south-2" || "ca-central-1" || "ap-east-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-southeast-3" || "ap-southeast-5" || "sa-east-1",
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
 * @param AttachCertificateToDistributionCommandInput - {@link AttachCertificateToDistributionCommandInput}
 * @returns {@link AttachCertificateToDistributionCommandOutput}
 * @see {@link AttachCertificateToDistributionCommandInput} for command's `input` shape.
 * @see {@link AttachCertificateToDistributionCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
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
export class AttachCertificateToDistributionCommand extends command<AttachCertificateToDistributionCommandInput, AttachCertificateToDistributionCommandOutput>(
  _ep0,
  _mw0,
  "AttachCertificateToDistribution",
  AttachCertificateToDistribution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachCertificateToDistributionRequest;
      output: AttachCertificateToDistributionResult;
    };
    sdk: {
      input: AttachCertificateToDistributionCommandInput;
      output: AttachCertificateToDistributionCommandOutput;
    };
  };
}
