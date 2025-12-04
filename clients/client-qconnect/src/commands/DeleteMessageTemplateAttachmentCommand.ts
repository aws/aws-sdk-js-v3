// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteMessageTemplateAttachmentRequest,
  DeleteMessageTemplateAttachmentResponse,
} from "../models/models_1";
import type { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { DeleteMessageTemplateAttachment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMessageTemplateAttachmentCommand}.
 */
export interface DeleteMessageTemplateAttachmentCommandInput extends DeleteMessageTemplateAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMessageTemplateAttachmentCommand}.
 */
export interface DeleteMessageTemplateAttachmentCommandOutput
  extends DeleteMessageTemplateAttachmentResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the attachment file from the Amazon Q in Connect message template that is referenced by <code>$LATEST</code> qualifier. Attachments on available message template versions will remain unchanged.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, DeleteMessageTemplateAttachmentCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, DeleteMessageTemplateAttachmentCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // DeleteMessageTemplateAttachmentRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   messageTemplateId: "STRING_VALUE", // required
 *   attachmentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMessageTemplateAttachmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMessageTemplateAttachmentCommandInput - {@link DeleteMessageTemplateAttachmentCommandInput}
 * @returns {@link DeleteMessageTemplateAttachmentCommandOutput}
 * @see {@link DeleteMessageTemplateAttachmentCommandInput} for command's `input` shape.
 * @see {@link DeleteMessageTemplateAttachmentCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource. For example, if you're using a <code>Create</code> API (such as <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 *
 * @public
 */
export class DeleteMessageTemplateAttachmentCommand extends $Command
  .classBuilder<
    DeleteMessageTemplateAttachmentCommandInput,
    DeleteMessageTemplateAttachmentCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "DeleteMessageTemplateAttachment", {})
  .n("QConnectClient", "DeleteMessageTemplateAttachmentCommand")
  .sc(DeleteMessageTemplateAttachment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMessageTemplateAttachmentRequest;
      output: {};
    };
    sdk: {
      input: DeleteMessageTemplateAttachmentCommandInput;
      output: DeleteMessageTemplateAttachmentCommandOutput;
    };
  };
}
