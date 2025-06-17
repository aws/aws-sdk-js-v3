// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { UpdateCisScanConfigurationRequest, UpdateCisScanConfigurationResponse } from "../models/models_1";
import { de_UpdateCisScanConfigurationCommand, se_UpdateCisScanConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCisScanConfigurationCommand}.
 */
export interface UpdateCisScanConfigurationCommandInput extends UpdateCisScanConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCisScanConfigurationCommand}.
 */
export interface UpdateCisScanConfigurationCommandOutput extends UpdateCisScanConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates a CIS scan configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, UpdateCisScanConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, UpdateCisScanConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // UpdateCisScanConfigurationRequest
 *   scanConfigurationArn: "STRING_VALUE", // required
 *   scanName: "STRING_VALUE",
 *   securityLevel: "LEVEL_1" || "LEVEL_2",
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
 *   targets: { // UpdateCisTargets
 *     accountIds: [ // TargetAccountList
 *       "STRING_VALUE",
 *     ],
 *     targetResourceTags: { // TargetResourceTags
 *       "<keys>": [ // TagValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateCisScanConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCisScanConfigurationResponse
 * //   scanConfigurationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateCisScanConfigurationCommandInput - {@link UpdateCisScanConfigurationCommandInput}
 * @returns {@link UpdateCisScanConfigurationCommandOutput}
 * @see {@link UpdateCisScanConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateCisScanConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified
 *          correctly.</p>
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
 *
 * @example Sample UpdateCisScanConfiguration Call
 * ```javascript
 * //
 * const input = {
 *   scanConfigurationArn: "arn:aws:inspector2:us-east-1:123412341234:owner/123412341234/cis-configuration/624b746d-e080-44ae-8c1d-48e653365a38",
 *   scanName: "sample_new",
 *   schedule: {
 *     daily: {
 *       startTime: {
 *         timeOfDay: "12:56",
 *         timezone: "UTC"
 *       }
 *     }
 *   },
 *   securityLevel: "LEVEL_2",
 *   targets: {
 *     accountIds: [
 *       "SELF"
 *     ],
 *     targetResourceTags: {
 *       key2: [
 *         "value2"
 *       ]
 *     }
 *   }
 * };
 * const command = new UpdateCisScanConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   scanConfigurationArn: "arn:aws:inspector2:us-east-1:123412341234:owner/123412341234/cis-configuration/624b746d-e080-44ae-8c1d-48e653365a38"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateCisScanConfigurationCommand extends $Command
  .classBuilder<
    UpdateCisScanConfigurationCommandInput,
    UpdateCisScanConfigurationCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "UpdateCisScanConfiguration", {})
  .n("Inspector2Client", "UpdateCisScanConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCisScanConfigurationCommand)
  .de(de_UpdateCisScanConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCisScanConfigurationRequest;
      output: UpdateCisScanConfigurationResponse;
    };
    sdk: {
      input: UpdateCisScanConfigurationCommandInput;
      output: UpdateCisScanConfigurationCommandOutput;
    };
  };
}
