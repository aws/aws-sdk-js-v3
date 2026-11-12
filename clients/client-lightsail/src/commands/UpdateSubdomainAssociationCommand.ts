// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSubdomainAssociationRequest, UpdateSubdomainAssociationResult } from "../models/models_1";
import { UpdateSubdomainAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSubdomainAssociationCommand}.
 */
export interface UpdateSubdomainAssociationCommandInput extends UpdateSubdomainAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSubdomainAssociationCommand}.
 */
export interface UpdateSubdomainAssociationCommandOutput extends UpdateSubdomainAssociationResult, __MetadataBearer {}

/**
 * <p>Associates a Lightsail subdomain with a resource, disassociates it from a resource, or
 *       moves it from one resource to another resource.</p>
 *          <p>Currently, you can associate a subdomain only with a Lightsail content delivery network
 *       (CDN) distribution. A resource can be associated with only one subdomain at a time.</p>
 *          <p>When you associate a subdomain with a distribution, Lightsail attaches the subdomain's
 *       certificate to the distribution. You can't associate a subdomain with a distribution that uses
 *       a custom domain, which is a distribution that has a Lightsail certificate attached.</p>
 *          <p>You can transfer each subdomain to another resource only once in a 24-hour period.</p>
 *          <p>The update is asynchronous. The response returns the subdomain in the
 *         <code>ATTACHING</code>, <code>DETACHING</code>, or <code>TRANSFERRING</code> state, and an
 *       operation. To check when the update is complete, use the <code>GetSubdomains</code>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateSubdomainAssociationCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateSubdomainAssociationCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // UpdateSubdomainAssociationRequest
 *   subdomainName: "STRING_VALUE", // required
 *   action: "ASSOCIATE" || "DISASSOCIATE" || "TRANSFER", // required
 *   targetResourceArn: "STRING_VALUE",
 * };
 * const command = new UpdateSubdomainAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSubdomainAssociationResult
 * //   subdomain: { // Subdomain
 * //     subdomainName: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     fqdn: "STRING_VALUE",
 * //     depth: Number("int"),
 * //     state: "CREATING" || "CREATE_FAILED" || "UNATTACHED" || "ATTACHING" || "ATTACHED" || "DETACHING" || "TRANSFERRING" || "IMPLICIT",
 * //     attachedResource: { // SubdomainAttachableResource
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       attachedAt: new Date("TIMESTAMP"),
 * //     },
 * //     attachingResource: {
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       attachedAt: new Date("TIMESTAMP"),
 * //     },
 * //     location: { // ResourceLocation
 * //       availabilityZone: "STRING_VALUE",
 * //       regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-north-1" || "eu-south-2" || "ca-central-1" || "ap-east-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-southeast-3" || "ap-southeast-5" || "sa-east-1",
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     parentFqdn: "STRING_VALUE",
 * //     children: [ // SubdomainList
 * //       {
 * //         subdomainName: "STRING_VALUE",
 * //         arn: "STRING_VALUE",
 * //         fqdn: "STRING_VALUE",
 * //         depth: Number("int"),
 * //         state: "CREATING" || "CREATE_FAILED" || "UNATTACHED" || "ATTACHING" || "ATTACHED" || "DETACHING" || "TRANSFERRING" || "IMPLICIT",
 * //         attachedResource: {
 * //           arn: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //           attachedAt: new Date("TIMESTAMP"),
 * //         },
 * //         attachingResource: {
 * //           arn: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //           attachedAt: new Date("TIMESTAMP"),
 * //         },
 * //         location: {
 * //           availabilityZone: "STRING_VALUE",
 * //           regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-north-1" || "eu-south-2" || "ca-central-1" || "ap-east-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-southeast-3" || "ap-southeast-5" || "sa-east-1",
 * //         },
 * //         createdAt: new Date("TIMESTAMP"),
 * //         parentFqdn: "STRING_VALUE",
 * //         children: [
 * //           "<Subdomain>",
 * //         ],
 * //         tags: [ // TagList
 * //           { // Tag
 * //             key: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     tags: [
 * //       {
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   operation: { // Operation
 * //     id: "STRING_VALUE",
 * //     resourceName: "STRING_VALUE",
 * //     resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket" || "Subdomain",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     location: {
 * //       availabilityZone: "STRING_VALUE",
 * //       regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-north-1" || "eu-south-2" || "ca-central-1" || "ap-east-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-southeast-3" || "ap-southeast-5" || "sa-east-1",
 * //     },
 * //     isTerminal: true || false,
 * //     operationDetails: "STRING_VALUE",
 * //     operationType: "DeleteKnownHostKeys" || "DeleteInstance" || "CreateInstance" || "StopInstance" || "StartInstance" || "RebootInstance" || "OpenInstancePublicPorts" || "PutInstancePublicPorts" || "CloseInstancePublicPorts" || "AllocateStaticIp" || "ReleaseStaticIp" || "AttachStaticIp" || "DetachStaticIp" || "UpdateDomainEntry" || "DeleteDomainEntry" || "CreateDomain" || "DeleteDomain" || "CreateInstanceSnapshot" || "DeleteInstanceSnapshot" || "CreateInstancesFromSnapshot" || "CreateLoadBalancer" || "DeleteLoadBalancer" || "AttachInstancesToLoadBalancer" || "DetachInstancesFromLoadBalancer" || "UpdateLoadBalancerAttribute" || "CreateLoadBalancerTlsCertificate" || "DeleteLoadBalancerTlsCertificate" || "AttachLoadBalancerTlsCertificate" || "CreateDisk" || "DeleteDisk" || "AttachDisk" || "DetachDisk" || "CreateDiskSnapshot" || "DeleteDiskSnapshot" || "CreateDiskFromSnapshot" || "CreateRelationalDatabase" || "UpdateRelationalDatabase" || "DeleteRelationalDatabase" || "CreateRelationalDatabaseFromSnapshot" || "CreateRelationalDatabaseSnapshot" || "DeleteRelationalDatabaseSnapshot" || "UpdateRelationalDatabaseParameters" || "StartRelationalDatabase" || "RebootRelationalDatabase" || "StopRelationalDatabase" || "EnableAddOn" || "DisableAddOn" || "PutAlarm" || "GetAlarms" || "DeleteAlarm" || "TestAlarm" || "CreateContactMethod" || "GetContactMethods" || "SendContactMethodVerification" || "DeleteContactMethod" || "CreateDistribution" || "UpdateDistribution" || "DeleteDistribution" || "ResetDistributionCache" || "AttachCertificateToDistribution" || "DetachCertificateFromDistribution" || "UpdateDistributionBundle" || "SetIpAddressType" || "CreateCertificate" || "DeleteCertificate" || "CreateContainerService" || "UpdateContainerService" || "DeleteContainerService" || "CreateContainerServiceDeployment" || "CreateContainerServiceRegistryLogin" || "RegisterContainerImage" || "DeleteContainerImage" || "CreateBucket" || "DeleteBucket" || "CreateBucketAccessKey" || "DeleteBucketAccessKey" || "UpdateBucketBundle" || "UpdateBucket" || "SetResourceAccessForBucket" || "UpdateInstanceMetadataOptions" || "StartGUISession" || "StopGUISession" || "SetupInstanceHttps" || "GetProfile" || "CreateSubdomain" || "UpdateSubdomainAssociation" || "DeleteSubdomain",
 * //     status: "NotStarted" || "Started" || "Failed" || "Completed" || "Succeeded",
 * //     statusChangedAt: new Date("TIMESTAMP"),
 * //     errorCode: "STRING_VALUE",
 * //     errorDetails: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSubdomainAssociationCommandInput - {@link UpdateSubdomainAssociationCommandInput}
 * @returns {@link UpdateSubdomainAssociationCommandOutput}
 * @see {@link UpdateSubdomainAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateSubdomainAssociationCommandOutput} for command's `response` shape.
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
export class UpdateSubdomainAssociationCommand extends command<UpdateSubdomainAssociationCommandInput, UpdateSubdomainAssociationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSubdomainAssociation",
  UpdateSubdomainAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSubdomainAssociationRequest;
      output: UpdateSubdomainAssociationResult;
    };
    sdk: {
      input: UpdateSubdomainAssociationCommandInput;
      output: UpdateSubdomainAssociationCommandOutput;
    };
  };
}
