// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRotationRequest, UpdateRotationResult } from "../models/models_0";
import { UpdateRotation } from "../schemas/schemas_7_Contact";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRotationCommand}.
 */
export interface UpdateRotationCommandInput extends UpdateRotationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRotationCommand}.
 */
export interface UpdateRotationCommandOutput extends UpdateRotationResult, __MetadataBearer {}

/**
 * <p>Updates the information specified for an on-call rotation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, UpdateRotationCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, UpdateRotationCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // UpdateRotationRequest
 *   RotationId: "STRING_VALUE", // required
 *   ContactIds: [ // RotationContactsArnList
 *     "STRING_VALUE",
 *   ],
 *   StartTime: new Date("TIMESTAMP"),
 *   TimeZoneId: "STRING_VALUE",
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
 * };
 * const command = new UpdateRotationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRotationCommandInput - {@link UpdateRotationCommandInput}
 * @returns {@link UpdateRotationCommandOutput}
 * @see {@link UpdateRotationCommandInput} for command's `input` shape.
 * @see {@link UpdateRotationCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource causes an inconsistent state.</p>
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
export class UpdateRotationCommand extends $Command
  .classBuilder<
    UpdateRotationCommandInput,
    UpdateRotationCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMContacts", "UpdateRotation", {})
  .n("SSMContactsClient", "UpdateRotationCommand")
  .sc(UpdateRotation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRotationRequest;
      output: {};
    };
    sdk: {
      input: UpdateRotationCommandInput;
      output: UpdateRotationCommandOutput;
    };
  };
}
