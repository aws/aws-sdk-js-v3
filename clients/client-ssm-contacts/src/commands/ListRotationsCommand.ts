// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRotationsRequest, ListRotationsResult } from "../models/models_0";
import { ListRotations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRotationsCommand}.
 */
export interface ListRotationsCommandInput extends ListRotationsRequest {}
/**
 * @public
 *
 * The output of {@link ListRotationsCommand}.
 */
export interface ListRotationsCommandOutput extends ListRotationsResult, __MetadataBearer {}

/**
 * Retrieves a list of on-call rotations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListRotationsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListRotationsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // ListRotationsRequest
 *   RotationNamePrefix: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRotationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRotationsResult
 * //   NextToken: "STRING_VALUE",
 * //   Rotations: [ // Rotations // required
 * //     { // Rotation
 * //       RotationArn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       ContactIds: [ // SsmContactsArnList
 * //         "STRING_VALUE",
 * //       ],
 * //       StartTime: new Date("TIMESTAMP"),
 * //       TimeZoneId: "STRING_VALUE",
 * //       Recurrence: { // RecurrenceSettings
 * //         MonthlySettings: [ // MonthlySettings
 * //           { // MonthlySetting
 * //             DayOfMonth: Number("int"), // required
 * //             HandOffTime: { // HandOffTime
 * //               HourOfDay: Number("int"), // required
 * //               MinuteOfHour: Number("int"), // required
 * //             },
 * //           },
 * //         ],
 * //         WeeklySettings: [ // WeeklySettings
 * //           { // WeeklySetting
 * //             DayOfWeek: "MON" || "TUE" || "WED" || "THU" || "FRI" || "SAT" || "SUN", // required
 * //             HandOffTime: {
 * //               HourOfDay: Number("int"), // required
 * //               MinuteOfHour: Number("int"), // required
 * //             },
 * //           },
 * //         ],
 * //         DailySettings: [ // DailySettings
 * //           {
 * //             HourOfDay: Number("int"), // required
 * //             MinuteOfHour: Number("int"), // required
 * //           },
 * //         ],
 * //         NumberOfOnCalls: Number("int"), // required
 * //         ShiftCoverages: { // ShiftCoveragesMap
 * //           "<keys>": [ // CoverageTimes
 * //             { // CoverageTime
 * //               Start: "<HandOffTime>",
 * //               End: "<HandOffTime>",
 * //             },
 * //           ],
 * //         },
 * //         RecurrenceMultiplier: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRotationsCommandInput - {@link ListRotationsCommandInput}
 * @returns {@link ListRotationsCommandOutput}
 * @see {@link ListRotationsCommandInput} for command's `input` shape.
 * @see {@link ListRotationsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource that doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SSMContactsServiceException}
 *
 * Base exception class for all service exceptions from SSMContacts service.
 *
 * @public
 */
export class ListRotationsCommand extends command<ListRotationsCommandInput, ListRotationsCommandOutput>(
  _ep0,
  _mw0,
  "ListRotations",
  ListRotations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRotationsRequest;
      output: ListRotationsResult;
    };
    sdk: {
      input: ListRotationsCommandInput;
      output: ListRotationsCommandOutput;
    };
  };
}
