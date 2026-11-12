// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCloudAutonomousVmClusterInput, UpdateCloudAutonomousVmClusterOutput } from "../models/models_0";
import { UpdateCloudAutonomousVmCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCloudAutonomousVmClusterCommand}.
 */
export interface UpdateCloudAutonomousVmClusterCommandInput extends UpdateCloudAutonomousVmClusterInput {}
/**
 * @public
 *
 * The output of {@link UpdateCloudAutonomousVmClusterCommand}.
 */
export interface UpdateCloudAutonomousVmClusterCommandOutput extends UpdateCloudAutonomousVmClusterOutput, __MetadataBearer {}

/**
 * <p>Updates the properties of the specified Autonomous VM cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, UpdateCloudAutonomousVmClusterCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, UpdateCloudAutonomousVmClusterCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // UpdateCloudAutonomousVmClusterInput
 *   cloudAutonomousVmClusterId: "STRING_VALUE", // required
 *   autonomousDataStorageSizeInTBs: Number("double"),
 *   cpuCoreCountPerNode: Number("int"),
 *   description: "STRING_VALUE",
 *   displayName: "STRING_VALUE",
 *   licenseModel: "BRING_YOUR_OWN_LICENSE" || "LICENSE_INCLUDED",
 *   maintenanceWindow: { // MaintenanceWindow
 *     customActionTimeoutInMins: Number("int"),
 *     daysOfWeek: [ // DaysOfWeek
 *       { // DayOfWeek
 *         name: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY",
 *       },
 *     ],
 *     hoursOfDay: [ // HoursOfDay
 *       Number("int"),
 *     ],
 *     isCustomActionTimeoutEnabled: true || false,
 *     leadTimeInWeeks: Number("int"),
 *     months: [ // Months
 *       { // Month
 *         name: "JANUARY" || "FEBRUARY" || "MARCH" || "APRIL" || "MAY" || "JUNE" || "JULY" || "AUGUST" || "SEPTEMBER" || "OCTOBER" || "NOVEMBER" || "DECEMBER",
 *       },
 *     ],
 *     patchingMode: "ROLLING" || "NONROLLING",
 *     preference: "NO_PREFERENCE" || "CUSTOM_PREFERENCE",
 *     skipRu: true || false,
 *     weeksOfMonth: [ // WeeksOfMonth
 *       Number("int"),
 *     ],
 *   },
 *   totalContainerDatabases: Number("int"),
 * };
 * const command = new UpdateCloudAutonomousVmClusterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCloudAutonomousVmClusterOutput
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //   statusReason: "STRING_VALUE",
 * //   cloudAutonomousVmClusterId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateCloudAutonomousVmClusterCommandInput - {@link UpdateCloudAutonomousVmClusterCommandInput}
 * @returns {@link UpdateCloudAutonomousVmClusterCommandOutput}
 * @see {@link UpdateCloudAutonomousVmClusterCommandInput} for command's `input` shape.
 * @see {@link UpdateCloudAutonomousVmClusterCommandOutput} for command's `response` shape.
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
export class UpdateCloudAutonomousVmClusterCommand extends command<UpdateCloudAutonomousVmClusterCommandInput, UpdateCloudAutonomousVmClusterCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCloudAutonomousVmCluster",
  UpdateCloudAutonomousVmCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCloudAutonomousVmClusterInput;
      output: UpdateCloudAutonomousVmClusterOutput;
    };
    sdk: {
      input: UpdateCloudAutonomousVmClusterCommandInput;
      output: UpdateCloudAutonomousVmClusterCommandOutput;
    };
  };
}
