// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateCloudAutonomousVmClusterInput, CreateCloudAutonomousVmClusterOutput } from "../models/models_0";
import type { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { CreateCloudAutonomousVmCluster } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCloudAutonomousVmClusterCommand}.
 */
export interface CreateCloudAutonomousVmClusterCommandInput extends CreateCloudAutonomousVmClusterInput {}
/**
 * @public
 *
 * The output of {@link CreateCloudAutonomousVmClusterCommand}.
 */
export interface CreateCloudAutonomousVmClusterCommandOutput
  extends CreateCloudAutonomousVmClusterOutput,
    __MetadataBearer {}

/**
 * <p>Creates a new Autonomous VM cluster in the specified Exadata infrastructure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, CreateCloudAutonomousVmClusterCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, CreateCloudAutonomousVmClusterCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // CreateCloudAutonomousVmClusterInput
 *   cloudExadataInfrastructureId: "STRING_VALUE", // required
 *   odbNetworkId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   autonomousDataStorageSizeInTBs: Number("double"), // required
 *   cpuCoreCountPerNode: Number("int"), // required
 *   dbServers: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   description: "STRING_VALUE",
 *   isMtlsEnabledVmCluster: true || false,
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
 *   memoryPerOracleComputeUnitInGBs: Number("int"), // required
 *   scanListenerPortNonTls: Number("int"),
 *   scanListenerPortTls: Number("int"),
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   timeZone: "STRING_VALUE",
 *   totalContainerDatabases: Number("int"), // required
 * };
 * const command = new CreateCloudAutonomousVmClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateCloudAutonomousVmClusterOutput
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //   statusReason: "STRING_VALUE",
 * //   cloudAutonomousVmClusterId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateCloudAutonomousVmClusterCommandInput - {@link CreateCloudAutonomousVmClusterCommandInput}
 * @returns {@link CreateCloudAutonomousVmClusterCommandOutput}
 * @see {@link CreateCloudAutonomousVmClusterCommandInput} for command's `input` shape.
 * @see {@link CreateCloudAutonomousVmClusterCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the service quota.</p>
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
export class CreateCloudAutonomousVmClusterCommand extends $Command
  .classBuilder<
    CreateCloudAutonomousVmClusterCommandInput,
    CreateCloudAutonomousVmClusterCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "CreateCloudAutonomousVmCluster", {})
  .n("OdbClient", "CreateCloudAutonomousVmClusterCommand")
  .sc(CreateCloudAutonomousVmCluster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCloudAutonomousVmClusterInput;
      output: CreateCloudAutonomousVmClusterOutput;
    };
    sdk: {
      input: CreateCloudAutonomousVmClusterCommandInput;
      output: CreateCloudAutonomousVmClusterCommandOutput;
    };
  };
}
