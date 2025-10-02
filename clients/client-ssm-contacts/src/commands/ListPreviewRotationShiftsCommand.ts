// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPreviewRotationShiftsRequest, ListPreviewRotationShiftsResult } from "../models/models_0";
import { de_ListPreviewRotationShiftsCommand, se_ListPreviewRotationShiftsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPreviewRotationShiftsCommand}.
 */
export interface ListPreviewRotationShiftsCommandInput extends ListPreviewRotationShiftsRequest {}
/**
 * @public
 *
 * The output of {@link ListPreviewRotationShiftsCommand}.
 */
export interface ListPreviewRotationShiftsCommandOutput extends ListPreviewRotationShiftsResult, __MetadataBearer {}

/**
 * <p>Returns a list of shifts based on rotation configuration parameters.</p>
 *          <note>
 *             <p>The Incident Manager primarily uses this operation to populate the <b>Preview</b> calendar. It is not typically run by end users.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListPreviewRotationShiftsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListPreviewRotationShiftsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // ListPreviewRotationShiftsRequest
 *   RotationStartTime: new Date("TIMESTAMP"),
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"), // required
 *   Members: [ // RotationPreviewMemberList // required
 *     "STRING_VALUE",
 *   ],
 *   TimeZoneId: "STRING_VALUE", // required
 *   Recurrence: { // RecurrenceSettings
 *     MonthlySettings: [ // MonthlySettings
 *       { // MonthlySetting
 *         DayOfMonth: Number("int"), // required
 *         HandOffTime: { // HandOffTime
 *           HourOfDay: Number("int"), // required
 *           MinuteOfHour: Number("int"), // required
 *         },
 *       },
 *     ],
 *     WeeklySettings: [ // WeeklySettings
 *       { // WeeklySetting
 *         DayOfWeek: "MON" || "TUE" || "WED" || "THU" || "FRI" || "SAT" || "SUN", // required
 *         HandOffTime: {
 *           HourOfDay: Number("int"), // required
 *           MinuteOfHour: Number("int"), // required
 *         },
 *       },
 *     ],
 *     DailySettings: [ // DailySettings
 *       {
 *         HourOfDay: Number("int"), // required
 *         MinuteOfHour: Number("int"), // required
 *       },
 *     ],
 *     NumberOfOnCalls: Number("int"), // required
 *     ShiftCoverages: { // ShiftCoveragesMap
 *       "<keys>": [ // CoverageTimes
 *         { // CoverageTime
 *           Start: "<HandOffTime>",
 *           End: "<HandOffTime>",
 *         },
 *       ],
 *     },
 *     RecurrenceMultiplier: Number("int"), // required
 *   },
 *   Overrides: [ // OverrideList
 *     { // PreviewOverride
 *       NewMembers: [ // RotationOverridePreviewMemberList
 *         "STRING_VALUE",
 *       ],
 *       StartTime: new Date("TIMESTAMP"),
 *       EndTime: new Date("TIMESTAMP"),
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPreviewRotationShiftsCommand(input);
 * const response = await client.send(command);
 * // { // ListPreviewRotationShiftsResult
 * //   RotationShifts: [ // RotationShifts
 * //     { // RotationShift
 * //       ContactIds: [ // SsmContactsArnList
 * //         "STRING_VALUE",
 * //       ],
 * //       StartTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"), // required
 * //       Type: "REGULAR" || "OVERRIDDEN",
 * //       ShiftDetails: { // ShiftDetails
 * //         OverriddenContactIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPreviewRotationShiftsCommandInput - {@link ListPreviewRotationShiftsCommandInput}
 * @returns {@link ListPreviewRotationShiftsCommandOutput}
 * @see {@link ListPreviewRotationShiftsCommandInput} for command's `input` shape.
 * @see {@link ListPreviewRotationShiftsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
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
export class ListPreviewRotationShiftsCommand extends $Command
  .classBuilder<
    ListPreviewRotationShiftsCommandInput,
    ListPreviewRotationShiftsCommandOutput,
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
  .s("SSMContacts", "ListPreviewRotationShifts", {})
  .n("SSMContactsClient", "ListPreviewRotationShiftsCommand")
  .f(void 0, void 0)
  .ser(se_ListPreviewRotationShiftsCommand)
  .de(de_ListPreviewRotationShiftsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPreviewRotationShiftsRequest;
      output: ListPreviewRotationShiftsResult;
    };
    sdk: {
      input: ListPreviewRotationShiftsCommandInput;
      output: ListPreviewRotationShiftsCommandOutput;
    };
  };
}
