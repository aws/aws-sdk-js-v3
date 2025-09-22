// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCloudExadataInfrastructureInput, CreateCloudExadataInfrastructureOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { CreateCloudExadataInfrastructure } from "../schemas/schemas_3_Cloud";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCloudExadataInfrastructureCommand}.
 */
export interface CreateCloudExadataInfrastructureCommandInput extends CreateCloudExadataInfrastructureInput {}
/**
 * @public
 *
 * The output of {@link CreateCloudExadataInfrastructureCommand}.
 */
export interface CreateCloudExadataInfrastructureCommandOutput
  extends CreateCloudExadataInfrastructureOutput,
    __MetadataBearer {}

/**
 * <p>Creates an Exadata infrastructure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, CreateCloudExadataInfrastructureCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, CreateCloudExadataInfrastructureCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // CreateCloudExadataInfrastructureInput
 *   displayName: "STRING_VALUE", // required
 *   shape: "STRING_VALUE", // required
 *   availabilityZone: "STRING_VALUE",
 *   availabilityZoneId: "STRING_VALUE",
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   computeCount: Number("int"), // required
 *   customerContactsToSendToOCI: [ // CustomerContacts
 *     { // CustomerContact
 *       email: "STRING_VALUE",
 *     },
 *   ],
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
 *   storageCount: Number("int"), // required
 *   clientToken: "STRING_VALUE",
 *   databaseServerType: "STRING_VALUE",
 *   storageServerType: "STRING_VALUE",
 * };
 * const command = new CreateCloudExadataInfrastructureCommand(input);
 * const response = await client.send(command);
 * // { // CreateCloudExadataInfrastructureOutput
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //   statusReason: "STRING_VALUE",
 * //   cloudExadataInfrastructureId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateCloudExadataInfrastructureCommandInput - {@link CreateCloudExadataInfrastructureCommandInput}
 * @returns {@link CreateCloudExadataInfrastructureCommandOutput}
 * @see {@link CreateCloudExadataInfrastructureCommandInput} for command's `input` shape.
 * @see {@link CreateCloudExadataInfrastructureCommandOutput} for command's `response` shape.
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
export class CreateCloudExadataInfrastructureCommand extends $Command
  .classBuilder<
    CreateCloudExadataInfrastructureCommandInput,
    CreateCloudExadataInfrastructureCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "CreateCloudExadataInfrastructure", {})
  .n("OdbClient", "CreateCloudExadataInfrastructureCommand")
  .sc(CreateCloudExadataInfrastructure)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCloudExadataInfrastructureInput;
      output: CreateCloudExadataInfrastructureOutput;
    };
    sdk: {
      input: CreateCloudExadataInfrastructureCommandInput;
      output: CreateCloudExadataInfrastructureCommandOutput;
    };
  };
}
