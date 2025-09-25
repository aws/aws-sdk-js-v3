// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMessageTemplateRequest, DeleteMessageTemplateResponse } from "../models/models_1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { DeleteMessageTemplate } from "../schemas/schemas_31_DeleteMessageTemplate";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes an Amazon Q in Connect message template entirely or a specific version of the message template if version is supplied in the request. You can provide the message template identifier as <code>&lt;message-template-id&gt;:&lt;versionNumber&gt;</code> to delete a specific version of the message template. If it is not supplied, the message template and all available versions will be deleted.</p>
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
export class DeleteMessageTemplateCommand extends $Command
  .classBuilder<
    DeleteMessageTemplateCommandInput,
    DeleteMessageTemplateCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "DeleteMessageTemplate", {})
  .n("QConnectClient", "DeleteMessageTemplateCommand")
  .sc(DeleteMessageTemplate)
  .build() {
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
