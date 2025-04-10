// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTopicRefreshScheduleRequest, DeleteTopicRefreshScheduleResponse } from "../models/models_4";
import { de_DeleteTopicRefreshScheduleCommand, se_DeleteTopicRefreshScheduleCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTopicRefreshScheduleCommand}.
 */
export interface DeleteTopicRefreshScheduleCommandInput extends DeleteTopicRefreshScheduleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTopicRefreshScheduleCommand}.
 */
export interface DeleteTopicRefreshScheduleCommandOutput extends DeleteTopicRefreshScheduleResponse, __MetadataBearer {}

/**
 * <p>Deletes a topic refresh schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteTopicRefreshScheduleCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteTopicRefreshScheduleCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DeleteTopicRefreshScheduleRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   TopicId: "STRING_VALUE", // required
 *   DatasetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTopicRefreshScheduleCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTopicRefreshScheduleResponse
 * //   TopicId: "STRING_VALUE",
 * //   TopicArn: "STRING_VALUE",
 * //   DatasetArn: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteTopicRefreshScheduleCommandInput - {@link DeleteTopicRefreshScheduleCommandInput}
 * @returns {@link DeleteTopicRefreshScheduleCommandOutput}
 * @see {@link DeleteTopicRefreshScheduleCommandInput} for command's `input` shape.
 * @see {@link DeleteTopicRefreshScheduleCommandOutput} for command's `response` shape.
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
export class DeleteTopicRefreshScheduleCommand extends $Command
  .classBuilder<
    DeleteTopicRefreshScheduleCommandInput,
    DeleteTopicRefreshScheduleCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "DeleteTopicRefreshSchedule", {})
  .n("QuickSightClient", "DeleteTopicRefreshScheduleCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTopicRefreshScheduleCommand)
  .de(de_DeleteTopicRefreshScheduleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTopicRefreshScheduleRequest;
      output: DeleteTopicRefreshScheduleResponse;
    };
    sdk: {
      input: DeleteTopicRefreshScheduleCommandInput;
      output: DeleteTopicRefreshScheduleCommandOutput;
    };
  };
}
