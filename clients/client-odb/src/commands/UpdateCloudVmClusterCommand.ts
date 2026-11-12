// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCloudVmClusterInput, UpdateCloudVmClusterOutput } from "../models/models_0";
import { UpdateCloudVmCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCloudVmClusterCommand}.
 */
export interface UpdateCloudVmClusterCommandInput extends UpdateCloudVmClusterInput {}
/**
 * @public
 *
 * The output of {@link UpdateCloudVmClusterCommand}.
 */
export interface UpdateCloudVmClusterCommandOutput extends UpdateCloudVmClusterOutput, __MetadataBearer {}

/**
 * <p>Updates the properties of the specified VM cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, UpdateCloudVmClusterCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, UpdateCloudVmClusterCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // UpdateCloudVmClusterInput
 *   cloudVmClusterId: "STRING_VALUE", // required
 *   cpuCoreCount: Number("int"),
 *   dataCollectionOptions: { // DataCollectionOptions
 *     isDiagnosticsEventsEnabled: true || false,
 *     isHealthMonitoringEnabled: true || false,
 *     isIncidentLogsEnabled: true || false,
 *   },
 *   dataStorageSizeInTBs: Number("double"),
 *   dbNodeStorageSizeInGBs: Number("int"),
 *   displayName: "STRING_VALUE",
 *   sshPublicKeys: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   licenseModel: "BRING_YOUR_OWN_LICENSE" || "LICENSE_INCLUDED",
 *   memorySizeInGBs: Number("int"),
 *   storageSizeInGBs: Number("int"),
 * };
 * const command = new UpdateCloudVmClusterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCloudVmClusterOutput
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //   statusReason: "STRING_VALUE",
 * //   cloudVmClusterId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateCloudVmClusterCommandInput - {@link UpdateCloudVmClusterCommandInput}
 * @returns {@link UpdateCloudVmClusterCommandOutput}
 * @see {@link UpdateCloudVmClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateCloudVmClusterCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with the current status of your resource. Fix any inconsistencies with your resource and try again.</p>
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
export class UpdateCloudVmClusterCommand extends command<UpdateCloudVmClusterCommandInput, UpdateCloudVmClusterCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCloudVmCluster",
  UpdateCloudVmCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCloudVmClusterInput;
      output: UpdateCloudVmClusterOutput;
    };
    sdk: {
      input: UpdateCloudVmClusterCommandInput;
      output: UpdateCloudVmClusterCommandOutput;
    };
  };
}
