// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RemoveKnowledgeBaseTemplateUriRequest, RemoveKnowledgeBaseTemplateUriResponse } from "../models/models_0";
import { RemoveKnowledgeBaseTemplateUri } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

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
 * import { WisdomClient, RemoveKnowledgeBaseTemplateUriCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, RemoveKnowledgeBaseTemplateUriCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
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
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
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
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 *
 * @public
 */
export class RemoveKnowledgeBaseTemplateUriCommand extends $Command
  .classBuilder<
    RemoveKnowledgeBaseTemplateUriCommandInput,
    RemoveKnowledgeBaseTemplateUriCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "RemoveKnowledgeBaseTemplateUri", {})
  .n("WisdomClient", "RemoveKnowledgeBaseTemplateUriCommand")
  .sc(RemoveKnowledgeBaseTemplateUri)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveKnowledgeBaseTemplateUriRequest;
      output: {};
    };
    sdk: {
      input: RemoveKnowledgeBaseTemplateUriCommandInput;
      output: RemoveKnowledgeBaseTemplateUriCommandOutput;
    };
  };
}
