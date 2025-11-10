// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTopicRefreshScheduleRequest, UpdateTopicRefreshScheduleResponse } from "../models/models_5";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateTopicRefreshSchedule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTopicRefreshScheduleCommand}.
 */
export interface UpdateTopicRefreshScheduleCommandInput extends UpdateTopicRefreshScheduleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTopicRefreshScheduleCommand}.
 */
export interface UpdateTopicRefreshScheduleCommandOutput extends UpdateTopicRefreshScheduleResponse, __MetadataBearer {}

/**
 * <p>Updates a topic refresh schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateTopicRefreshScheduleCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateTopicRefreshScheduleCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateTopicRefreshScheduleRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 *   DatasetId: "STRING_VALUE", // required
 *   RefreshSchedule: { // TopicRefreshSchedule
 *     IsEnabled: true || false, // required
 *     BasedOnSpiceSchedule: true || false, // required
 *     StartingAt: new Date("TIMESTAMP"),
 *     Timezone: "STRING_VALUE",
 *     RepeatAt: "STRING_VALUE",
 *     TopicScheduleType: "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY",
 *   },
 * };
 * const command = new UpdateTopicRefreshScheduleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTopicRefreshScheduleResponse
 * //   TopicId: "STRING_VALUE",
 * //   TopicArn: "STRING_VALUE",
 * //   DatasetArn: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateTopicRefreshScheduleCommandInput - {@link UpdateTopicRefreshScheduleCommandInput}
 * @returns {@link UpdateTopicRefreshScheduleCommandOutput}
 * @see {@link UpdateTopicRefreshScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateTopicRefreshScheduleCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
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
export class UpdateTopicRefreshScheduleCommand extends $Command
  .classBuilder<
    UpdateTopicRefreshScheduleCommandInput,
    UpdateTopicRefreshScheduleCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "UpdateTopicRefreshSchedule", {})
  .n("QuickSightClient", "UpdateTopicRefreshScheduleCommand")
  .sc(UpdateTopicRefreshSchedule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTopicRefreshScheduleRequest;
      output: UpdateTopicRefreshScheduleResponse;
    };
    sdk: {
      input: UpdateTopicRefreshScheduleCommandInput;
      output: UpdateTopicRefreshScheduleCommandOutput;
    };
  };
}
