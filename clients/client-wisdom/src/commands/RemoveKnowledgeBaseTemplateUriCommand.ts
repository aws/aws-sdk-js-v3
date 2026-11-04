// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveKnowledgeBaseTemplateUriRequest, RemoveKnowledgeBaseTemplateUriResponse } from "../models/models_0";
import { RemoveKnowledgeBaseTemplateUri$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface RemoveKnowledgeBaseTemplateUriCommandOutput extends RemoveKnowledgeBaseTemplateUriResponse, __MetadataBearer {}

/**
 * Removes a URI template from a knowledge base.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link WisdomServiceException}
 *
 * Base exception class for all service exceptions from Wisdom service.
 *
 * @public
 */
export class RemoveKnowledgeBaseTemplateUriCommand extends command<RemoveKnowledgeBaseTemplateUriCommandInput, RemoveKnowledgeBaseTemplateUriCommandOutput>(
  _ep0,
  _mw0,
  "RemoveKnowledgeBaseTemplateUri",
  RemoveKnowledgeBaseTemplateUri$
) {
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
