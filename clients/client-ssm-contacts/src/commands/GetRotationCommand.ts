// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRotationRequest, GetRotationResult } from "../models/models_0";
import { de_GetRotationCommand, se_GetRotationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRotationCommand}.
 */
export interface GetRotationCommandInput extends GetRotationRequest {}
/**
 * @public
 *
 * The output of {@link GetRotationCommand}.
 */
export interface GetRotationCommandOutput extends GetRotationResult, __MetadataBearer {}

/**
 * <p>Retrieves information about an on-call rotation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, GetRotationCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, GetRotationCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // GetRotationRequest
 *   RotationId: "STRING_VALUE", // required
 * };
 * const command = new GetRotationCommand(input);
 * const response = await client.send(command);
 * // { // GetRotationResult
 * //   RotationArn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   ContactIds: [ // RotationContactsArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   StartTime: new Date("TIMESTAMP"), // required
 * //   TimeZoneId: "STRING_VALUE", // required
 * //   Recurrence: { // RecurrenceSettings
 * //     MonthlySettings: [ // MonthlySettings
 * //       { // MonthlySetting
 * //         DayOfMonth: Number("int"), // required
 * //         HandOffTime: { // HandOffTime
 * //           HourOfDay: Number("int"), // required
 * //           MinuteOfHour: Number("int"), // required
 * //         },
 * //       },
 * //     ],
 * //     WeeklySettings: [ // WeeklySettings
 * //       { // WeeklySetting
 * //         DayOfWeek: "MON" || "TUE" || "WED" || "THU" || "FRI" || "SAT" || "SUN", // required
 * //         HandOffTime: {
 * //           HourOfDay: Number("int"), // required
 * //           MinuteOfHour: Number("int"), // required
 * //         },
 * //       },
 * //     ],
 * //     DailySettings: [ // DailySettings
 * //       {
 * //         HourOfDay: Number("int"), // required
 * //         MinuteOfHour: Number("int"), // required
 * //       },
 * //     ],
 * //     NumberOfOnCalls: Number("int"), // required
 * //     ShiftCoverages: { // ShiftCoveragesMap
 * //       "<keys>": [ // CoverageTimes
 * //         { // CoverageTime
 * //           Start: "<HandOffTime>",
 * //           End: "<HandOffTime>",
 * //         },
 * //       ],
 * //     },
 * //     RecurrenceMultiplier: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRotationCommandInput - {@link GetRotationCommandInput}
 * @returns {@link GetRotationCommandOutput}
 * @see {@link GetRotationCommandInput} for command's `input` shape.
 * @see {@link GetRotationCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 *
 * @public
 */
export class GetRotationCommand extends $Command
  .classBuilder<
    GetRotationCommandInput,
    GetRotationCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SSMContacts", "GetRotation", {})
  .n("SSMContactsClient", "GetRotationCommand")
  .f(void 0, void 0)
  .ser(se_GetRotationCommand)
  .de(de_GetRotationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRotationRequest;
      output: GetRotationResult;
    };
    sdk: {
      input: GetRotationCommandInput;
      output: GetRotationCommandOutput;
    };
  };
}
