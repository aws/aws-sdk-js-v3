// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeTopicRefreshScheduleRequest, DescribeTopicRefreshScheduleResponse } from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DescribeTopicRefreshSchedule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTopicRefreshScheduleCommand}.
 */
export interface DescribeTopicRefreshScheduleCommandInput extends DescribeTopicRefreshScheduleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTopicRefreshScheduleCommand}.
 */
export interface DescribeTopicRefreshScheduleCommandOutput
  extends DescribeTopicRefreshScheduleResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a topic refresh schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeTopicRefreshScheduleCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeTopicRefreshScheduleCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeTopicRefreshScheduleRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 *   DatasetId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTopicRefreshScheduleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTopicRefreshScheduleResponse
 * //   TopicId: "STRING_VALUE",
 * //   TopicArn: "STRING_VALUE",
 * //   DatasetArn: "STRING_VALUE",
 * //   RefreshSchedule: { // TopicRefreshSchedule
 * //     IsEnabled: true || false, // required
 * //     BasedOnSpiceSchedule: true || false, // required
 * //     StartingAt: new Date("TIMESTAMP"),
 * //     Timezone: "STRING_VALUE",
 * //     RepeatAt: "STRING_VALUE",
 * //     TopicScheduleType: "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY",
 * //   },
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTopicRefreshScheduleCommandInput - {@link DescribeTopicRefreshScheduleCommandInput}
 * @returns {@link DescribeTopicRefreshScheduleCommandOutput}
 * @see {@link DescribeTopicRefreshScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeTopicRefreshScheduleCommandOutput} for command's `response` shape.
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
export class DescribeTopicRefreshScheduleCommand extends $Command
  .classBuilder<
    DescribeTopicRefreshScheduleCommandInput,
    DescribeTopicRefreshScheduleCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DescribeTopicRefreshSchedule", {})
  .n("QuickSightClient", "DescribeTopicRefreshScheduleCommand")
  .sc(DescribeTopicRefreshSchedule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTopicRefreshScheduleRequest;
      output: DescribeTopicRefreshScheduleResponse;
    };
    sdk: {
      input: DescribeTopicRefreshScheduleCommandInput;
      output: DescribeTopicRefreshScheduleCommandOutput;
    };
  };
}
