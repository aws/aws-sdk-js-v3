// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import { DeleteMessageRequest, DeleteMessageResponse } from "../models/models_0";
import { de_DeleteMessageCommand, se_DeleteMessageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMessageCommand}.
 */
export interface DeleteMessageCommandInput extends DeleteMessageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMessageCommand}.
 */
export interface DeleteMessageCommandOutput extends DeleteMessageResponse, __MetadataBearer {}

/**
 * <p>Sends an event to a specific room which directs clients to delete a specific message;
 *          that is, unrender it from view and delete it from the client’s chat history. This event’s
 *             <code>EventName</code> is <code>aws:DELETE_MESSAGE</code>. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-deletemessage-publish.html">
 *             DeleteMessage</a> WebSocket operation in the Amazon IVS Chat Messaging API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, DeleteMessageCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, DeleteMessageCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * // import type { IvschatClientConfig } from "@aws-sdk/client-ivschat";
 * const config = {}; // type is IvschatClientConfig
 * const client = new IvschatClient(config);
 * const input = { // DeleteMessageRequest
 *   roomIdentifier: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   reason: "STRING_VALUE",
 * };
 * const command = new DeleteMessageCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMessageResponse
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteMessageCommandInput - {@link DeleteMessageCommandInput}
 * @returns {@link DeleteMessageCommandOutput}
 * @see {@link DeleteMessageCommandInput} for command's `input` shape.
 * @see {@link DeleteMessageCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvschatServiceException}
 * <p>Base exception class for all service exceptions from Ivschat service.</p>
 *
 *
 * @public
 */
export class DeleteMessageCommand extends $Command
  .classBuilder<
    DeleteMessageCommandInput,
    DeleteMessageCommandOutput,
    IvschatClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvschatClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceChat", "DeleteMessage", {})
  .n("IvschatClient", "DeleteMessageCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMessageCommand)
  .de(de_DeleteMessageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMessageRequest;
      output: DeleteMessageResponse;
    };
    sdk: {
      input: DeleteMessageCommandInput;
      output: DeleteMessageCommandOutput;
    };
  };
}
