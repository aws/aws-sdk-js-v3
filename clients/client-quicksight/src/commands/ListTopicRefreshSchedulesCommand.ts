// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTopicRefreshSchedulesRequest, ListTopicRefreshSchedulesResponse } from "../models/models_4";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListTopicRefreshSchedules } from "../schemas/schemas_1_Topic";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTopicRefreshSchedulesCommand}.
 */
export interface ListTopicRefreshSchedulesCommandInput extends ListTopicRefreshSchedulesRequest {}
/**
 * @public
 *
 * The output of {@link ListTopicRefreshSchedulesCommand}.
 */
export interface ListTopicRefreshSchedulesCommandOutput extends ListTopicRefreshSchedulesResponse, __MetadataBearer {}

/**
 * <p>Lists all of the refresh schedules for a topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListTopicRefreshSchedulesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListTopicRefreshSchedulesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListTopicRefreshSchedulesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 * };
 * const command = new ListTopicRefreshSchedulesCommand(input);
 * const response = await client.send(command);
 * // { // ListTopicRefreshSchedulesResponse
 * //   TopicId: "STRING_VALUE",
 * //   TopicArn: "STRING_VALUE",
 * //   RefreshSchedules: [ // TopicRefreshScheduleSummaries
 * //     { // TopicRefreshScheduleSummary
 * //       DatasetId: "STRING_VALUE",
 * //       DatasetArn: "STRING_VALUE",
 * //       DatasetName: "STRING_VALUE",
 * //       RefreshSchedule: { // TopicRefreshSchedule
 * //         IsEnabled: true || false, // required
 * //         BasedOnSpiceSchedule: true || false, // required
 * //         StartingAt: new Date("TIMESTAMP"),
 * //         Timezone: "STRING_VALUE",
 * //         RepeatAt: "STRING_VALUE",
 * //         TopicScheduleType: "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY",
 * //       },
 * //     },
 * //   ],
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTopicRefreshSchedulesCommandInput - {@link ListTopicRefreshSchedulesCommandInput}
 * @returns {@link ListTopicRefreshSchedulesCommandOutput}
 * @see {@link ListTopicRefreshSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListTopicRefreshSchedulesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class ListTopicRefreshSchedulesCommand extends $Command
  .classBuilder<
    ListTopicRefreshSchedulesCommandInput,
    ListTopicRefreshSchedulesCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "ListTopicRefreshSchedules", {})
  .n("QuickSightClient", "ListTopicRefreshSchedulesCommand")
  .sc(ListTopicRefreshSchedules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTopicRefreshSchedulesRequest;
      output: ListTopicRefreshSchedulesResponse;
    };
    sdk: {
      input: ListTopicRefreshSchedulesCommandInput;
      output: ListTopicRefreshSchedulesCommandOutput;
    };
  };
}
