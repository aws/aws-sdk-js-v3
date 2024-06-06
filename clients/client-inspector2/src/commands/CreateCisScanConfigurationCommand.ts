// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { CreateCisScanConfigurationRequest, CreateCisScanConfigurationResponse } from "../models/models_0";
import { de_CreateCisScanConfigurationCommand, se_CreateCisScanConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCisScanConfigurationCommand}.
 */
export interface CreateCisScanConfigurationCommandInput extends CreateCisScanConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateCisScanConfigurationCommand}.
 */
export interface CreateCisScanConfigurationCommandOutput extends CreateCisScanConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates a CIS scan configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, CreateCisScanConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, CreateCisScanConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // CreateCisScanConfigurationRequest
 *   scanName: "STRING_VALUE", // required
 *   securityLevel: "LEVEL_1" || "LEVEL_2", // required
 *   schedule: { // Schedule Union: only one key present
 *     oneTime: {},
 *     daily: { // DailySchedule
 *       startTime: { // Time
 *         timeOfDay: "STRING_VALUE", // required
 *         timezone: "STRING_VALUE", // required
 *       },
 *     },
 *     weekly: { // WeeklySchedule
 *       startTime: {
 *         timeOfDay: "STRING_VALUE", // required
 *         timezone: "STRING_VALUE", // required
 *       },
 *       days: [ // DaysList // required
 *         "SUN" || "MON" || "TUE" || "WED" || "THU" || "FRI" || "SAT",
 *       ],
 *     },
 *     monthly: { // MonthlySchedule
 *       startTime: {
 *         timeOfDay: "STRING_VALUE", // required
 *         timezone: "STRING_VALUE", // required
 *       },
 *       day: "SUN" || "MON" || "TUE" || "WED" || "THU" || "FRI" || "SAT", // required
 *     },
 *   },
 *   targets: { // CreateCisTargets
 *     accountIds: [ // TargetAccountList // required
 *       "STRING_VALUE",
 *     ],
 *     targetResourceTags: { // TargetResourceTags // required
 *       "<keys>": [ // TagValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   tags: { // CisTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCisScanConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateCisScanConfigurationResponse
 * //   scanConfigurationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCisScanConfigurationCommandInput - {@link CreateCisScanConfigurationCommandInput}
 * @returns {@link CreateCisScanConfigurationCommandOutput}
 * @see {@link CreateCisScanConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateCisScanConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 * @public
 */
export class CreateCisScanConfigurationCommand extends $Command
  .classBuilder<
    CreateCisScanConfigurationCommandInput,
    CreateCisScanConfigurationCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "CreateCisScanConfiguration", {})
  .n("Inspector2Client", "CreateCisScanConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateCisScanConfigurationCommand)
  .de(de_CreateCisScanConfigurationCommand)
  .build() {}
