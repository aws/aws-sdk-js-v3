// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetExadbVmClusterInput, GetExadbVmClusterOutput } from "../models/models_0";
import { GetExadbVmCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetExadbVmClusterCommand}.
 */
export interface GetExadbVmClusterCommandInput extends GetExadbVmClusterInput {}
/**
 * @public
 *
 * The output of {@link GetExadbVmClusterCommand}.
 */
export interface GetExadbVmClusterCommandOutput extends GetExadbVmClusterOutput, __MetadataBearer {}

/**
 * <p>Returns information about the specified Exascale VM cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, GetExadbVmClusterCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, GetExadbVmClusterCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // GetExadbVmClusterInput
 *   exadbVmClusterId: "STRING_VALUE", // required
 * };
 * const command = new GetExadbVmClusterCommand(input);
 * const response = await client.send(command);
 * // { // GetExadbVmClusterOutput
 * //   exadbVmCluster: { // ExadbVmCluster
 * //     exadbVmClusterId: "STRING_VALUE", // required
 * //     clusterName: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     dataCollectionOptions: { // DataCollectionOptions
 * //       isDiagnosticsEventsEnabled: true || false,
 * //       isHealthMonitoringEnabled: true || false,
 * //       isIncidentLogsEnabled: true || false,
 * //     },
 * //     displayName: "STRING_VALUE",
 * //     domain: "STRING_VALUE",
 * //     enabledEcpuCount: Number("int"),
 * //     exadbVmClusterArn: "STRING_VALUE",
 * //     exascaleDbStorageVaultArn: "STRING_VALUE",
 * //     exascaleDbStorageVaultId: "STRING_VALUE",
 * //     giVersion: "STRING_VALUE",
 * //     gridImageId: "STRING_VALUE",
 * //     gridImageType: "RELEASE_UPDATE" || "CUSTOM_IMAGE",
 * //     hostname: "STRING_VALUE",
 * //     iamRoles: [ // IamRoleList
 * //       { // IamRole
 * //         iamRoleArn: "STRING_VALUE",
 * //         status: "ASSOCIATING" || "DISASSOCIATING" || "FAILED" || "CONNECTED" || "DISCONNECTED" || "PARTIALLY_CONNECTED" || "UNKNOWN",
 * //         statusReason: "STRING_VALUE",
 * //         awsIntegration: "KmsTde",
 * //       },
 * //     ],
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
 * //     lastUpdateHistoryEntryId: "STRING_VALUE",
 * //     licenseModel: "BRING_YOUR_OWN_LICENSE" || "LICENSE_INCLUDED",
 * //     listenerPort: Number("int"),
 * //     memorySizeInGBs: Number("int"),
 * //     nodeCount: Number("int"),
 * //     ocid: "STRING_VALUE",
 * //     ociResourceAnchorName: "STRING_VALUE",
 * //     ociUrl: "STRING_VALUE",
 * //     odbNetworkArn: "STRING_VALUE",
 * //     odbNetworkId: "STRING_VALUE",
 * //     percentProgress: Number("float"),
 * //     scanDnsName: "STRING_VALUE",
 * //     scanDnsRecordId: "STRING_VALUE",
 * //     scanIpIds: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     scanListenerPortTcp: Number("int"),
 * //     scanListenerPortTcpSsl: Number("int"),
 * //     shape: "STRING_VALUE",
 * //     shapeAttribute: "SMART_STORAGE" || "BLOCK_STORAGE",
 * //     snapshotFileSystemStorage: { // ExadbVmClusterStorageDetails
 * //       totalSizeInGBs: Number("int"),
 * //     },
 * //     sshPublicKeys: [
 * //       "STRING_VALUE",
 * //     ],
 * //     status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //     statusReason: "STRING_VALUE",
 * //     systemVersion: "STRING_VALUE",
 * //     timeZone: "STRING_VALUE",
 * //     totalEcpuCount: Number("int"),
 * //     totalFileSystemStorage: {
 * //       totalSizeInGBs: Number("int"),
 * //     },
 * //     vipIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     vmFileSystemStorage: {
 * //       totalSizeInGBs: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetExadbVmClusterCommandInput - {@link GetExadbVmClusterCommandInput}
 * @returns {@link GetExadbVmClusterCommandOutput}
 * @see {@link GetExadbVmClusterCommandInput} for command's `input` shape.
 * @see {@link GetExadbVmClusterCommandOutput} for command's `response` shape.
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
export class GetExadbVmClusterCommand extends command<GetExadbVmClusterCommandInput, GetExadbVmClusterCommandOutput>(
  _ep0,
  _mw0,
  "GetExadbVmCluster",
  GetExadbVmCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetExadbVmClusterInput;
      output: GetExadbVmClusterOutput;
    };
    sdk: {
      input: GetExadbVmClusterCommandInput;
      output: GetExadbVmClusterCommandOutput;
    };
  };
}
