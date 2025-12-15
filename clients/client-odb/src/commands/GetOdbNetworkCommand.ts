// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetOdbNetworkInput, GetOdbNetworkOutput } from "../models/models_0";
import type { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { GetOdbNetwork$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOdbNetworkCommand}.
 */
export interface GetOdbNetworkCommandInput extends GetOdbNetworkInput {}
/**
 * @public
 *
 * The output of {@link GetOdbNetworkCommand}.
 */
export interface GetOdbNetworkCommandOutput extends GetOdbNetworkOutput, __MetadataBearer {}

/**
 * <p>Returns information about the specified ODB network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, GetOdbNetworkCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, GetOdbNetworkCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // GetOdbNetworkInput
 *   odbNetworkId: "STRING_VALUE", // required
 * };
 * const command = new GetOdbNetworkCommand(input);
 * const response = await client.send(command);
 * // { // GetOdbNetworkOutput
 * //   odbNetwork: { // OdbNetwork
 * //     odbNetworkId: "STRING_VALUE", // required
 * //     displayName: "STRING_VALUE",
 * //     status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //     statusReason: "STRING_VALUE",
 * //     odbNetworkArn: "STRING_VALUE",
 * //     availabilityZone: "STRING_VALUE",
 * //     availabilityZoneId: "STRING_VALUE",
 * //     clientSubnetCidr: "STRING_VALUE",
 * //     backupSubnetCidr: "STRING_VALUE",
 * //     customDomainName: "STRING_VALUE",
 * //     defaultDnsPrefix: "STRING_VALUE",
 * //     peeredCidrs: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     ociNetworkAnchorId: "STRING_VALUE",
 * //     ociNetworkAnchorUrl: "STRING_VALUE",
 * //     ociResourceAnchorName: "STRING_VALUE",
 * //     ociVcnId: "STRING_VALUE",
 * //     ociVcnUrl: "STRING_VALUE",
 * //     ociDnsForwardingConfigs: [ // OciDnsForwardingConfigList
 * //       { // OciDnsForwardingConfig
 * //         domainName: "STRING_VALUE",
 * //         ociDnsListenerIp: "STRING_VALUE",
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     percentProgress: Number("float"),
 * //     managedServices: { // ManagedServices
 * //       serviceNetworkArn: "STRING_VALUE",
 * //       resourceGatewayArn: "STRING_VALUE",
 * //       managedServicesIpv4Cidrs: [
 * //         "STRING_VALUE",
 * //       ],
 * //       serviceNetworkEndpoint: { // ServiceNetworkEndpoint
 * //         vpcEndpointId: "STRING_VALUE",
 * //         vpcEndpointType: "SERVICENETWORK",
 * //       },
 * //       managedS3BackupAccess: { // ManagedS3BackupAccess
 * //         status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING",
 * //         ipv4Addresses: "<StringList>",
 * //       },
 * //       zeroEtlAccess: { // ZeroEtlAccess
 * //         status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING",
 * //         cidr: "STRING_VALUE",
 * //       },
 * //       s3Access: { // S3Access
 * //         status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING",
 * //         ipv4Addresses: "<StringList>",
 * //         domainName: "STRING_VALUE",
 * //         s3PolicyDocument: "STRING_VALUE",
 * //       },
 * //       stsAccess: { // StsAccess
 * //         status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING",
 * //         ipv4Addresses: "<StringList>",
 * //         domainName: "STRING_VALUE",
 * //         stsPolicyDocument: "STRING_VALUE",
 * //       },
 * //       kmsAccess: { // KmsAccess
 * //         status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING",
 * //         ipv4Addresses: "<StringList>",
 * //         domainName: "STRING_VALUE",
 * //         kmsPolicyDocument: "STRING_VALUE",
 * //       },
 * //       crossRegionS3RestoreSourcesAccess: [ // CrossRegionS3RestoreSourcesAccessList
 * //         { // CrossRegionS3RestoreSourcesAccess
 * //           region: "STRING_VALUE",
 * //           ipv4Addresses: "<StringList>",
 * //           status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING",
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOdbNetworkCommandInput - {@link GetOdbNetworkCommandInput}
 * @returns {@link GetOdbNetworkCommandOutput}
 * @see {@link GetOdbNetworkCommandInput} for command's `input` shape.
 * @see {@link GetOdbNetworkCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class GetOdbNetworkCommand extends $Command
  .classBuilder<
    GetOdbNetworkCommandInput,
    GetOdbNetworkCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "GetOdbNetwork", {})
  .n("OdbClient", "GetOdbNetworkCommand")
  .sc(GetOdbNetwork$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOdbNetworkInput;
      output: GetOdbNetworkOutput;
    };
    sdk: {
      input: GetOdbNetworkCommandInput;
      output: GetOdbNetworkCommandOutput;
    };
  };
}
