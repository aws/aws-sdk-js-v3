// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteKnowledgeBaseRequest, DeleteKnowledgeBaseResponse } from "../models/models_0";
import { de_DeleteKnowledgeBaseCommand, se_DeleteKnowledgeBaseCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteKnowledgeBaseCommand}.
 */
export interface DeleteKnowledgeBaseCommandInput extends DeleteKnowledgeBaseRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKnowledgeBaseCommand}.
 */
export interface DeleteKnowledgeBaseCommandOutput extends DeleteKnowledgeBaseResponse, __MetadataBearer {}

/**
 * <p>Deletes the knowledge base.</p>
 *          <note>
 *             <p>When you use this API to delete an external knowledge base such as Salesforce or
 *         ServiceNow, you must also delete the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a>
 *         DataIntegration. This is because you can't reuse the DataIntegration after it's been
 *         associated with an external knowledge base. However, you can delete and recreate it. See
 *           <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a> and <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> in the <i>Amazon AppIntegrations API
 *         Reference</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, DeleteKnowledgeBaseCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, DeleteKnowledgeBaseCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // DeleteKnowledgeBaseRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 * };
 * const command = new DeleteKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteKnowledgeBaseCommandInput - {@link DeleteKnowledgeBaseCommandInput}
 * @returns {@link DeleteKnowledgeBaseCommandOutput}
 * @see {@link DeleteKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link DeleteKnowledgeBaseCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *       resource. For example, if you're using a <code>Create</code> API (such as
 *         <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the
 *       same name) is being created or mutated.</p>
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
export class DeleteKnowledgeBaseCommand extends $Command
  .classBuilder<
    DeleteKnowledgeBaseCommandInput,
    DeleteKnowledgeBaseCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "DeleteKnowledgeBase", {})
  .n("WisdomClient", "DeleteKnowledgeBaseCommand")
  .f(void 0, void 0)
  .ser(se_DeleteKnowledgeBaseCommand)
  .de(de_DeleteKnowledgeBaseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKnowledgeBaseRequest;
      output: {};
    };
    sdk: {
      input: DeleteKnowledgeBaseCommandInput;
      output: DeleteKnowledgeBaseCommandOutput;
    };
  };
}
