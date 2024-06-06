// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTopicRefreshScheduleRequest, CreateTopicRefreshScheduleResponse } from "../models/models_3";
import { de_CreateTopicRefreshScheduleCommand, se_CreateTopicRefreshScheduleCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTopicRefreshScheduleCommand}.
 */
export interface CreateTopicRefreshScheduleCommandInput extends CreateTopicRefreshScheduleRequest {}
/**
 * @public
 *
 * The output of {@link CreateTopicRefreshScheduleCommand}.
 */
export interface CreateTopicRefreshScheduleCommandOutput extends CreateTopicRefreshScheduleResponse, __MetadataBearer {}

/**
 * <p>Creates a topic refresh schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateTopicRefreshScheduleCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateTopicRefreshScheduleCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // CreateTopicRefreshScheduleRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 *   DatasetArn: "STRING_VALUE", // required
 *   DatasetName: "STRING_VALUE",
 *   RefreshSchedule: { // TopicRefreshSchedule
 *     IsEnabled: true || false, // required
 *     BasedOnSpiceSchedule: true || false, // required
 *     StartingAt: new Date("TIMESTAMP"),
 *     Timezone: "STRING_VALUE",
 *     RepeatAt: "STRING_VALUE",
 *     TopicScheduleType: "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY",
 *   },
 * };
 * const command = new CreateTopicRefreshScheduleCommand(input);
 * const response = await client.send(command);
 * // { // CreateTopicRefreshScheduleResponse
 * //   TopicId: "STRING_VALUE",
 * //   TopicArn: "STRING_VALUE",
 * //   DatasetArn: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTopicRefreshScheduleCommandInput - {@link CreateTopicRefreshScheduleCommandInput}
 * @returns {@link CreateTopicRefreshScheduleCommandOutput}
 * @see {@link CreateTopicRefreshScheduleCommandInput} for command's `input` shape.
 * @see {@link CreateTopicRefreshScheduleCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateTopicRefreshScheduleCommand extends $Command
  .classBuilder<
    CreateTopicRefreshScheduleCommandInput,
    CreateTopicRefreshScheduleCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "CreateTopicRefreshSchedule", {})
  .n("QuickSightClient", "CreateTopicRefreshScheduleCommand")
  .f(void 0, void 0)
  .ser(se_CreateTopicRefreshScheduleCommand)
  .de(de_CreateTopicRefreshScheduleCommand)
  .build() {}
