// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateExadbVmClusterInput, CreateExadbVmClusterOutput } from "../models/models_0";
import { CreateExadbVmCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateExadbVmClusterCommand}.
 */
export interface CreateExadbVmClusterCommandInput extends CreateExadbVmClusterInput {}
/**
 * @public
 *
 * The output of {@link CreateExadbVmClusterCommand}.
 */
export interface CreateExadbVmClusterCommandOutput extends CreateExadbVmClusterOutput, __MetadataBearer {}

/**
 * Creates an Exascale VM cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, CreateExadbVmClusterCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, CreateExadbVmClusterCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // CreateExadbVmClusterInput
 *   displayName: "STRING_VALUE", // required
 *   enabledEcpuCount: Number("int"), // required
 *   exascaleDbStorageVaultId: "STRING_VALUE", // required
 *   gridImageId: "STRING_VALUE", // required
 *   hostname: "STRING_VALUE", // required
 *   nodeCount: Number("int"), // required
 *   odbNetworkId: "STRING_VALUE", // required
 *   shape: "STRING_VALUE", // required
 *   sshPublicKeys: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   totalEcpuCount: Number("int"), // required
 *   vmFileSystemStorageTotalSizeInGBs: Number("int"), // required
 *   clusterName: "STRING_VALUE",
 *   dataCollectionOptions: { // DataCollectionOptions
 *     isDiagnosticsEventsEnabled: true || false,
 *     isHealthMonitoringEnabled: true || false,
 *     isIncidentLogsEnabled: true || false,
 *   },
 *   licenseModel: "BRING_YOUR_OWN_LICENSE" || "LICENSE_INCLUDED",
 *   scanListenerPortTcp: Number("int"),
 *   scanListenerPortTcpSsl: Number("int"),
 *   shapeAttribute: "SMART_STORAGE" || "BLOCK_STORAGE",
 *   systemVersion: "STRING_VALUE",
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   timeZone: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateExadbVmClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateExadbVmClusterOutput
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //   statusReason: "STRING_VALUE",
 * //   exadbVmClusterId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateExadbVmClusterCommandInput - {@link CreateExadbVmClusterCommandInput}
 * @returns {@link CreateExadbVmClusterCommandOutput}
 * @see {@link CreateExadbVmClusterCommandInput} for command's `input` shape.
 * @see {@link CreateExadbVmClusterCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Occurs when a conflict with the current status of your resource. Fix any inconsistencies with your resource and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded the service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it is missing required fields or has invalid inputs.
 *
 * @throws {@link OdbServiceException}
 *
 * Base exception class for all service exceptions from Odb service.
 *
 * @public
 */
export class CreateExadbVmClusterCommand extends command<CreateExadbVmClusterCommandInput, CreateExadbVmClusterCommandOutput>(
  _ep0,
  _mw0,
  "CreateExadbVmCluster",
  CreateExadbVmCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExadbVmClusterInput;
      output: CreateExadbVmClusterOutput;
    };
    sdk: {
      input: CreateExadbVmClusterCommandInput;
      output: CreateExadbVmClusterCommandOutput;
    };
  };
}
