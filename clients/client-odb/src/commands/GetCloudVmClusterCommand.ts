// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetCloudVmClusterInput, GetCloudVmClusterOutput } from "../models/models_0";
import type { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { GetCloudVmCluster } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCloudVmClusterCommand}.
 */
export interface GetCloudVmClusterCommandInput extends GetCloudVmClusterInput {}
/**
 * @public
 *
 * The output of {@link GetCloudVmClusterCommand}.
 */
export interface GetCloudVmClusterCommandOutput extends GetCloudVmClusterOutput, __MetadataBearer {}

/**
 * <p>Returns information about the specified VM cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, GetCloudVmClusterCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, GetCloudVmClusterCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // GetCloudVmClusterInput
 *   cloudVmClusterId: "STRING_VALUE", // required
 * };
 * const command = new GetCloudVmClusterCommand(input);
 * const response = await client.send(command);
 * // { // GetCloudVmClusterOutput
 * //   cloudVmCluster: { // CloudVmCluster
 * //     cloudVmClusterId: "STRING_VALUE", // required
 * //     displayName: "STRING_VALUE",
 * //     status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //     statusReason: "STRING_VALUE",
 * //     cloudVmClusterArn: "STRING_VALUE",
 * //     cloudExadataInfrastructureId: "STRING_VALUE",
 * //     clusterName: "STRING_VALUE",
 * //     cpuCoreCount: Number("int"),
 * //     dataCollectionOptions: { // DataCollectionOptions
 * //       isDiagnosticsEventsEnabled: true || false,
 * //       isHealthMonitoringEnabled: true || false,
 * //       isIncidentLogsEnabled: true || false,
 * //     },
 * //     dataStorageSizeInTBs: Number("double"),
 * //     dbNodeStorageSizeInGBs: Number("int"),
 * //     dbServers: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     diskRedundancy: "HIGH" || "NORMAL",
 * //     giVersion: "STRING_VALUE",
 * //     hostname: "STRING_VALUE",
 * //     iormConfigCache: { // ExadataIormConfig
 * //       dbPlans: [ // DbIormConfigList
 * //         { // DbIormConfig
 * //           dbName: "STRING_VALUE",
 * //           flashCacheLimit: "STRING_VALUE",
 * //           share: Number("int"),
 * //         },
 * //       ],
 * //       lifecycleDetails: "STRING_VALUE",
 * //       lifecycleState: "BOOTSTRAPPING" || "DISABLED" || "ENABLED" || "FAILED" || "UPDATING",
 * //       objective: "AUTO" || "BALANCED" || "BASIC" || "HIGH_THROUGHPUT" || "LOW_LATENCY",
 * //     },
 * //     isLocalBackupEnabled: true || false,
 * //     isSparseDiskgroupEnabled: true || false,
 * //     lastUpdateHistoryEntryId: "STRING_VALUE",
 * //     licenseModel: "BRING_YOUR_OWN_LICENSE" || "LICENSE_INCLUDED",
 * //     listenerPort: Number("int"),
 * //     memorySizeInGBs: Number("int"),
 * //     nodeCount: Number("int"),
 * //     ocid: "STRING_VALUE",
 * //     ociResourceAnchorName: "STRING_VALUE",
 * //     ociUrl: "STRING_VALUE",
 * //     domain: "STRING_VALUE",
 * //     scanDnsName: "STRING_VALUE",
 * //     scanDnsRecordId: "STRING_VALUE",
 * //     scanIpIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     shape: "STRING_VALUE",
 * //     sshPublicKeys: [ // SensitiveStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     storageSizeInGBs: Number("int"),
 * //     systemVersion: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     timeZone: "STRING_VALUE",
 * //     vipIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     odbNetworkId: "STRING_VALUE",
 * //     percentProgress: Number("float"),
 * //     computeModel: "ECPU" || "OCPU",
 * //     iamRoles: [ // IamRoleList
 * //       { // IamRole
 * //         iamRoleArn: "STRING_VALUE",
 * //         status: "ASSOCIATING" || "DISASSOCIATING" || "FAILED" || "CONNECTED" || "DISCONNECTED" || "PARTIALLY_CONNECTED" || "UNKNOWN",
 * //         statusReason: "STRING_VALUE",
 * //         awsIntegration: "KmsTde",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCloudVmClusterCommandInput - {@link GetCloudVmClusterCommandInput}
 * @returns {@link GetCloudVmClusterCommandOutput}
 * @see {@link GetCloudVmClusterCommandInput} for command's `input` shape.
 * @see {@link GetCloudVmClusterCommandOutput} for command's `response` shape.
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
export class GetCloudVmClusterCommand extends $Command
  .classBuilder<
    GetCloudVmClusterCommandInput,
    GetCloudVmClusterCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "GetCloudVmCluster", {})
  .n("OdbClient", "GetCloudVmClusterCommand")
  .sc(GetCloudVmCluster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCloudVmClusterInput;
      output: GetCloudVmClusterOutput;
    };
    sdk: {
      input: GetCloudVmClusterCommandInput;
      output: GetCloudVmClusterCommandOutput;
    };
  };
}
