// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSubdomainRequest } from "../models/models_0";
import type { CreateSubdomainResult } from "../models/models_1";
import { CreateSubdomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSubdomainCommand}.
 */
export interface CreateSubdomainCommandInput extends CreateSubdomainRequest {}
/**
 * @public
 *
 * The output of {@link CreateSubdomainCommand}.
 */
export interface CreateSubdomainCommandOutput extends CreateSubdomainResult, __MetadataBearer {}

/**
 * <p>Creates a Lightsail subdomain, such as <code>mysite</code>, with the web address
 *         <code>mysite.amazonlightsail.com</code>. After the subdomain is created, use the
 *         <code>UpdateSubdomainAssociation</code> action to associate it with a Lightsail
 *       resource.</p>
 *          <p>When you create a nested subdomain, such as <code>blog.mysite</code>, and you don't
 *       already have the top-level subdomain (<code>mysite</code>), Lightsail adds the top-level
 *       subdomain to your account in the <code>IMPLICIT</code> state.</p>
 *          <p>You can have up to 30 subdomains in your account. Nested subdomains, subdomains in the
 *         <code>CREATE_FAILED</code> state, and deleted subdomains that other accounts can't create yet
 *       count toward this quota. Subdomains in the <code>IMPLICIT</code> state don't count toward this
 *       quota.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateSubdomainCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateSubdomainCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // CreateSubdomainRequest
 *   subdomainName: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateSubdomainCommand(input);
 * const response = await client.send(command);
 * // { // CreateSubdomainResult
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
 * @param CreateSubdomainCommandInput - {@link CreateSubdomainCommandInput}
 * @returns {@link CreateSubdomainCommandOutput}
 * @see {@link CreateSubdomainCommandInput} for command's `input` shape.
 * @see {@link CreateSubdomainCommandOutput} for command's `response` shape.
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
export class CreateSubdomainCommand extends command<CreateSubdomainCommandInput, CreateSubdomainCommandOutput>(
  _ep0,
  _mw0,
  "CreateSubdomain",
  CreateSubdomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSubdomainRequest;
      output: CreateSubdomainResult;
    };
    sdk: {
      input: CreateSubdomainCommandInput;
      output: CreateSubdomainCommandOutput;
    };
  };
}
