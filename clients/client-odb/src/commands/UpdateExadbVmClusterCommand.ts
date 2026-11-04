// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateExadbVmClusterInput, UpdateExadbVmClusterOutput } from "../models/models_0";
import { UpdateExadbVmCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateExadbVmClusterCommand}.
 */
export interface UpdateExadbVmClusterCommandInput extends UpdateExadbVmClusterInput {}
/**
 * @public
 *
 * The output of {@link UpdateExadbVmClusterCommand}.
 */
export interface UpdateExadbVmClusterCommandOutput extends UpdateExadbVmClusterOutput, __MetadataBearer {}

/**
 * Updates the specified Exascale VM cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, UpdateExadbVmClusterCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, UpdateExadbVmClusterCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // UpdateExadbVmClusterInput
 *   exadbVmClusterId: "STRING_VALUE", // required
 *   dataCollectionOptions: { // DataCollectionOptions
 *     isDiagnosticsEventsEnabled: true || false,
 *     isHealthMonitoringEnabled: true || false,
 *     isIncidentLogsEnabled: true || false,
 *   },
 *   displayName: "STRING_VALUE",
 *   enabledEcpuCount: Number("int"),
 *   gridImageId: "STRING_VALUE",
 *   licenseModel: "BRING_YOUR_OWN_LICENSE" || "LICENSE_INCLUDED",
 *   sshPublicKeys: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   systemVersion: "STRING_VALUE",
 *   totalEcpuCount: Number("int"),
 *   updateAction: "ROLLING_APPLY" || "NON_ROLLING_APPLY" || "PRECHECK" || "ROLLBACK",
 *   vmFileSystemStorageTotalSizeInGBs: Number("int"),
 * };
 * const command = new UpdateExadbVmClusterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateExadbVmClusterOutput
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //   statusReason: "STRING_VALUE",
 * //   exadbVmClusterId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateExadbVmClusterCommandInput - {@link UpdateExadbVmClusterCommandInput}
 * @returns {@link UpdateExadbVmClusterCommandOutput}
 * @see {@link UpdateExadbVmClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateExadbVmClusterCommandOutput} for command's `response` shape.
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
export class UpdateExadbVmClusterCommand extends command<UpdateExadbVmClusterCommandInput, UpdateExadbVmClusterCommandOutput>(
  _ep0,
  _mw0,
  "UpdateExadbVmCluster",
  UpdateExadbVmCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateExadbVmClusterInput;
      output: UpdateExadbVmClusterOutput;
    };
    sdk: {
      input: UpdateExadbVmClusterCommandInput;
      output: UpdateExadbVmClusterCommandOutput;
    };
  };
}
