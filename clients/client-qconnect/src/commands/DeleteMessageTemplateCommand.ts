// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMessageTemplateRequest, DeleteMessageTemplateResponse } from "../models/models_1";
import { DeleteMessageTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMessageTemplateCommand}.
 */
export interface DeleteMessageTemplateCommandInput extends DeleteMessageTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMessageTemplateCommand}.
 */
export interface DeleteMessageTemplateCommandOutput extends DeleteMessageTemplateResponse, __MetadataBearer {}

/**
 * Deletes an Amazon Q in Connect message template entirely or a specific version of the message template if version is supplied in the request. You can provide the message template identifier as `<message-template-id>:<versionNumber>` to delete a specific version of the message template. If it is not supplied, the message template and all available versions will be deleted.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, DeleteMessageTemplateCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, DeleteMessageTemplateCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // DeleteMessageTemplateRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   messageTemplateId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMessageTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMessageTemplateCommandInput - {@link DeleteMessageTemplateCommandInput}
 * @returns {@link DeleteMessageTemplateCommandOutput}
 * @see {@link DeleteMessageTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteMessageTemplateCommandOutput} for command's `response` shape.
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
export class DeleteMessageTemplateCommand extends command<DeleteMessageTemplateCommandInput, DeleteMessageTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMessageTemplate",
  DeleteMessageTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMessageTemplateRequest;
      output: {};
    };
    sdk: {
      input: DeleteMessageTemplateCommandInput;
      output: DeleteMessageTemplateCommandOutput;
    };
  };
}
