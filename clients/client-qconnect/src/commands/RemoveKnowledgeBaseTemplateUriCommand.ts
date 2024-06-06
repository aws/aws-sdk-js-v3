// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RemoveKnowledgeBaseTemplateUriRequest, RemoveKnowledgeBaseTemplateUriResponse } from "../models/models_0";
import {
  de_RemoveKnowledgeBaseTemplateUriCommand,
  se_RemoveKnowledgeBaseTemplateUriCommand,
} from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveKnowledgeBaseTemplateUriCommand}.
 */
export interface RemoveKnowledgeBaseTemplateUriCommandInput extends RemoveKnowledgeBaseTemplateUriRequest {}
/**
 * @public
 *
 * The output of {@link RemoveKnowledgeBaseTemplateUriCommand}.
 */
export interface RemoveKnowledgeBaseTemplateUriCommandOutput
  extends RemoveKnowledgeBaseTemplateUriResponse,
    __MetadataBearer {}

/**
 * <p>Removes a URI template from a knowledge base.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, RemoveKnowledgeBaseTemplateUriCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, RemoveKnowledgeBaseTemplateUriCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // RemoveKnowledgeBaseTemplateUriRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new RemoveKnowledgeBaseTemplateUriCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveKnowledgeBaseTemplateUriCommandInput - {@link RemoveKnowledgeBaseTemplateUriCommandInput}
 * @returns {@link RemoveKnowledgeBaseTemplateUriCommandOutput}
 * @see {@link RemoveKnowledgeBaseTemplateUriCommandInput} for command's `input` shape.
 * @see {@link RemoveKnowledgeBaseTemplateUriCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 * @public
 */
export class RemoveKnowledgeBaseTemplateUriCommand extends $Command
  .classBuilder<
    RemoveKnowledgeBaseTemplateUriCommandInput,
    RemoveKnowledgeBaseTemplateUriCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "RemoveKnowledgeBaseTemplateUri", {})
  .n("QConnectClient", "RemoveKnowledgeBaseTemplateUriCommand")
  .f(void 0, void 0)
  .ser(se_RemoveKnowledgeBaseTemplateUriCommand)
  .de(de_RemoveKnowledgeBaseTemplateUriCommand)
  .build() {}
