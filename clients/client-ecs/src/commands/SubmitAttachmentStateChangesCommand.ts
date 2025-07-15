// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SubmitAttachmentStateChangesRequest, SubmitAttachmentStateChangesResponse } from "../models/models_1";
import {
  de_SubmitAttachmentStateChangesCommand,
  se_SubmitAttachmentStateChangesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SubmitAttachmentStateChangesCommand}.
 */
export interface SubmitAttachmentStateChangesCommandInput extends SubmitAttachmentStateChangesRequest {}
/**
 * @public
 *
 * The output of {@link SubmitAttachmentStateChangesCommand}.
 */
export interface SubmitAttachmentStateChangesCommandOutput
  extends SubmitAttachmentStateChangesResponse,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This action is only used by the Amazon ECS agent, and it is not intended for use outside of the agent.</p>
 *          </note>
 *          <p>Sent to acknowledge that an attachment changed states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, SubmitAttachmentStateChangesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, SubmitAttachmentStateChangesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // SubmitAttachmentStateChangesRequest
 *   cluster: "STRING_VALUE",
 *   attachments: [ // AttachmentStateChanges // required
 *     { // AttachmentStateChange
 *       attachmentArn: "STRING_VALUE", // required
 *       status: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new SubmitAttachmentStateChangesCommand(input);
 * const response = await client.send(command);
 * // { // SubmitAttachmentStateChangesResponse
 * //   acknowledgment: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SubmitAttachmentStateChangesCommandInput - {@link SubmitAttachmentStateChangesCommandInput}
 * @returns {@link SubmitAttachmentStateChangesCommandOutput}
 * @see {@link SubmitAttachmentStateChangesCommandInput} for command's `input` shape.
 * @see {@link SubmitAttachmentStateChangesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have authorization to perform the requested action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *          <p>For more information about service event errors, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-event-messages-list.html">Amazon ECS service
 * 				event messages</a>. </p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 *
 * @public
 */
export class SubmitAttachmentStateChangesCommand extends $Command
  .classBuilder<
    SubmitAttachmentStateChangesCommandInput,
    SubmitAttachmentStateChangesCommandOutput,
    ECSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ECSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2ContainerServiceV20141113", "SubmitAttachmentStateChanges", {})
  .n("ECSClient", "SubmitAttachmentStateChangesCommand")
  .f(void 0, void 0)
  .ser(se_SubmitAttachmentStateChangesCommand)
  .de(de_SubmitAttachmentStateChangesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SubmitAttachmentStateChangesRequest;
      output: SubmitAttachmentStateChangesResponse;
    };
    sdk: {
      input: SubmitAttachmentStateChangesCommandInput;
      output: SubmitAttachmentStateChangesCommandOutput;
    };
  };
}
