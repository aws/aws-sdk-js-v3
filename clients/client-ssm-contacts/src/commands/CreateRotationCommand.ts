// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRotationRequest, CreateRotationResult } from "../models/models_0";
import { CreateRotation } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRotationCommand}.
 */
export interface CreateRotationCommandInput extends CreateRotationRequest {}
/**
 * @public
 *
 * The output of {@link CreateRotationCommand}.
 */
export interface CreateRotationCommandOutput extends CreateRotationResult, __MetadataBearer {}

/**
 * <p>Creates a rotation in an on-call schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, CreateRotationCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, CreateRotationCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // CreateRotationRequest
 *   Name: "STRING_VALUE", // required
 *   ContactIds: [ // RotationContactsArnList // required
 *     "STRING_VALUE",
 *   ],
 *   StartTime: new Date("TIMESTAMP"),
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
 *   Tags: [ // TagsList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new CreateRotationCommand(input);
 * const response = await client.send(command);
 * // { // CreateRotationResult
 * //   RotationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRotationCommandInput - {@link CreateRotationCommandInput}
 * @returns {@link CreateRotationCommandOutput}
 * @see {@link CreateRotationCommandInput} for command's `input` shape.
 * @see {@link CreateRotationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
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
export class CreateRotationCommand extends $Command
  .classBuilder<
    CreateRotationCommandInput,
    CreateRotationCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMContacts", "CreateRotation", {})
  .n("SSMContactsClient", "CreateRotationCommand")
  .sc(CreateRotation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRotationRequest;
      output: CreateRotationResult;
    };
    sdk: {
      input: CreateRotationCommandInput;
      output: CreateRotationCommandOutput;
    };
  };
}
