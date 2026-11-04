// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteMessageTemplateAttachmentRequest,
  DeleteMessageTemplateAttachmentResponse,
} from "../models/models_1";
import { DeleteMessageTemplateAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DeleteMessageTemplateAttachmentCommandOutput extends DeleteMessageTemplateAttachmentResponse, __MetadataBearer {}

/**
 * Deletes the attachment file from the Amazon Q in Connect message template that is referenced by `$LATEST` qualifier. Attachments on available message template versions will remain unchanged.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource. For example, if you're using a `Create` API (such as `CreateAssistant`) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class DeleteMessageTemplateAttachmentCommand extends command<DeleteMessageTemplateAttachmentCommandInput, DeleteMessageTemplateAttachmentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMessageTemplateAttachment",
  DeleteMessageTemplateAttachment$
) {
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
