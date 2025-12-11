// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import type { UpdateDistributionRequest, UpdateDistributionResult } from "../models/models_1";
import { UpdateDistribution } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDistributionCommand}.
 */
export interface UpdateDistributionCommandInput extends UpdateDistributionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDistributionCommand}.
 */
export interface UpdateDistributionCommandOutput extends UpdateDistributionResult, __MetadataBearer {}

/**
 * <p>Updates an existing Amazon Lightsail content delivery network (CDN) distribution.</p>
 *          <p>Use this action to update the configuration of your existing distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateDistributionCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateDistributionCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // UpdateDistributionRequest
 *   distributionName: "STRING_VALUE", // required
 *   origin: { // InputOrigin
 *     name: "STRING_VALUE",
 *     regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1" || "ap-southeast-3",
 *     protocolPolicy: "http-only" || "https-only",
 *     responseTimeout: Number("int"),
 *   },
 *   defaultCacheBehavior: { // CacheBehavior
 *     behavior: "dont-cache" || "cache",
 *   },
 *   cacheBehaviorSettings: { // CacheSettings
 *     defaultTTL: Number("long"),
 *     minimumTTL: Number("long"),
 *     maximumTTL: Number("long"),
 *     allowedHTTPMethods: "STRING_VALUE",
 *     cachedHTTPMethods: "STRING_VALUE",
 *     forwardedCookies: { // CookieObject
 *       option: "none" || "allow-list" || "all",
 *       cookiesAllowList: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     forwardedHeaders: { // HeaderObject
 *       option: "none" || "allow-list" || "all",
 *       headersAllowList: [ // HeaderForwardList
 *         "Accept" || "Accept-Charset" || "Accept-Datetime" || "Accept-Encoding" || "Accept-Language" || "Authorization" || "CloudFront-Forwarded-Proto" || "CloudFront-Is-Desktop-Viewer" || "CloudFront-Is-Mobile-Viewer" || "CloudFront-Is-SmartTV-Viewer" || "CloudFront-Is-Tablet-Viewer" || "CloudFront-Viewer-Country" || "Host" || "Origin" || "Referer",
 *       ],
 *     },
 *     forwardedQueryStrings: { // QueryStringObject
 *       option: true || false,
 *       queryStringsAllowList: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   cacheBehaviors: [ // CacheBehaviorList
 *     { // CacheBehaviorPerPath
 *       path: "STRING_VALUE",
 *       behavior: "dont-cache" || "cache",
 *     },
 *   ],
 *   isEnabled: true || false,
 *   viewerMinimumTlsProtocolVersion: "TLSv1.1_2016" || "TLSv1.2_2018" || "TLSv1.2_2019" || "TLSv1.2_2021",
 *   certificateName: "STRING_VALUE",
 *   useDefaultCertificate: true || false,
 * };
 * const command = new UpdateDistributionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDistributionResult
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
 * @param UpdateDistributionCommandInput - {@link UpdateDistributionCommandInput}
 * @returns {@link UpdateDistributionCommandOutput}
 * @see {@link UpdateDistributionCommandInput} for command's `input` shape.
 * @see {@link UpdateDistributionCommandOutput} for command's `response` shape.
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
export class UpdateDistributionCommand extends $Command
  .classBuilder<
    UpdateDistributionCommandInput,
    UpdateDistributionCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Lightsail_20161128", "UpdateDistribution", {})
  .n("LightsailClient", "UpdateDistributionCommand")
  .sc(UpdateDistribution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDistributionRequest;
      output: UpdateDistributionResult;
    };
    sdk: {
      input: UpdateDistributionCommandInput;
      output: UpdateDistributionCommandOutput;
    };
  };
}
