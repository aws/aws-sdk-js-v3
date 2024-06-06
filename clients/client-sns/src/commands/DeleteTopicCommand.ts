// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTopicInput } from "../models/models_0";
import { de_DeleteTopicCommand, se_DeleteTopicCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTopicCommand}.
 */
export interface DeleteTopicCommandInput extends DeleteTopicInput {}
/**
 * @public
 *
 * The output of {@link DeleteTopicCommand}.
 */
export interface DeleteTopicCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a topic and all its subscriptions. Deleting a topic might prevent some
 *             messages previously sent to the topic from being delivered to subscribers. This action
 *             is idempotent, so deleting a topic that does not exist does not result in an
 *             error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, DeleteTopicCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, DeleteTopicCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = { // DeleteTopicInput
 *   TopicArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteTopicCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTopicCommandInput - {@link DeleteTopicCommandInput}
 * @returns {@link DeleteTopicCommandOutput}
 * @see {@link DeleteTopicCommandInput} for command's `input` shape.
 * @see {@link DeleteTopicCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link ConcurrentAccessException} (client fault)
 *  <p>Can't perform multiple operations on a tag simultaneously. Perform the operations
 *             sequentially.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>Indicates that the specified state is not a valid state for an event source.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Indicates that the requested resource does not exist.</p>
 *
 * @throws {@link StaleTagException} (client fault)
 *  <p>A tag has been added to a resource with the same ARN as a deleted resource. Wait a
 *             short while and then retry the operation.</p>
 *
 * @throws {@link TagPolicyException} (client fault)
 *  <p>The request doesn't comply with the IAM tag policy. Correct your request and then
 *             retry it.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 * @public
 */
export class DeleteTopicCommand extends $Command
  .classBuilder<
    DeleteTopicCommandInput,
    DeleteTopicCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSimpleNotificationService", "DeleteTopic", {})
  .n("SNSClient", "DeleteTopicCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTopicCommand)
  .de(de_DeleteTopicCommand)
  .build() {}
