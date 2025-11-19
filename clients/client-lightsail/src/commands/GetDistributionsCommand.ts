// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetDistributionsRequest, GetDistributionsResult } from "../models/models_0";
import { GetDistributions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDistributionsCommand}.
 */
export interface GetDistributionsCommandInput extends GetDistributionsRequest {}
/**
 * @public
 *
 * The output of {@link GetDistributionsCommand}.
 */
export interface GetDistributionsCommandOutput extends GetDistributionsResult, __MetadataBearer {}

/**
 * <p>Returns information about one or more of your Amazon Lightsail content delivery network
 *       (CDN) distributions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetDistributionsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetDistributionsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetDistributionsRequest
 *   distributionName: "STRING_VALUE",
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetDistributionsCommand(input);
 * const response = await client.send(command);
 * // { // GetDistributionsResult
 * //   distributions: [ // DistributionList
 * //     { // LightsailDistribution
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       supportCode: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       location: { // ResourceLocation
 * //         availabilityZone: "STRING_VALUE",
 * //         regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1" || "ap-southeast-3",
 * //       },
 * //       resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //       alternativeDomainNames: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "STRING_VALUE",
 * //       isEnabled: true || false,
 * //       domainName: "STRING_VALUE",
 * //       bundleId: "STRING_VALUE",
 * //       certificateName: "STRING_VALUE",
 * //       origin: { // Origin
 * //         name: "STRING_VALUE",
 * //         resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //         regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1" || "ap-southeast-3",
 * //         protocolPolicy: "http-only" || "https-only",
 * //         responseTimeout: Number("int"),
 * //       },
 * //       originPublicDNS: "STRING_VALUE",
 * //       defaultCacheBehavior: { // CacheBehavior
 * //         behavior: "dont-cache" || "cache",
 * //       },
 * //       cacheBehaviorSettings: { // CacheSettings
 * //         defaultTTL: Number("long"),
 * //         minimumTTL: Number("long"),
 * //         maximumTTL: Number("long"),
 * //         allowedHTTPMethods: "STRING_VALUE",
 * //         cachedHTTPMethods: "STRING_VALUE",
 * //         forwardedCookies: { // CookieObject
 * //           option: "none" || "allow-list" || "all",
 * //           cookiesAllowList: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         forwardedHeaders: { // HeaderObject
 * //           option: "none" || "allow-list" || "all",
 * //           headersAllowList: [ // HeaderForwardList
 * //             "Accept" || "Accept-Charset" || "Accept-Datetime" || "Accept-Encoding" || "Accept-Language" || "Authorization" || "CloudFront-Forwarded-Proto" || "CloudFront-Is-Desktop-Viewer" || "CloudFront-Is-Mobile-Viewer" || "CloudFront-Is-SmartTV-Viewer" || "CloudFront-Is-Tablet-Viewer" || "CloudFront-Viewer-Country" || "Host" || "Origin" || "Referer",
 * //           ],
 * //         },
 * //         forwardedQueryStrings: { // QueryStringObject
 * //           option: true || false,
 * //           queryStringsAllowList: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       cacheBehaviors: [ // CacheBehaviorList
 * //         { // CacheBehaviorPerPath
 * //           path: "STRING_VALUE",
 * //           behavior: "dont-cache" || "cache",
 * //         },
 * //       ],
 * //       ableToUpdateBundle: true || false,
 * //       ipAddressType: "dualstack" || "ipv4" || "ipv6",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       viewerMinimumTlsProtocolVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDistributionsCommandInput - {@link GetDistributionsCommandInput}
 * @returns {@link GetDistributionsCommandOutput}
 * @see {@link GetDistributionsCommandInput} for command's `input` shape.
 * @see {@link GetDistributionsCommandOutput} for command's `response` shape.
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
export class GetDistributionsCommand extends $Command
  .classBuilder<
    GetDistributionsCommandInput,
    GetDistributionsCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Lightsail_20161128", "GetDistributions", {})
  .n("LightsailClient", "GetDistributionsCommand")
  .sc(GetDistributions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDistributionsRequest;
      output: GetDistributionsResult;
    };
    sdk: {
      input: GetDistributionsCommandInput;
      output: GetDistributionsCommandOutput;
    };
  };
}
