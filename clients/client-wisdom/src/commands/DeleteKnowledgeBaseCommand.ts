// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteKnowledgeBaseRequest, DeleteKnowledgeBaseResponse } from "../models/models_0";
import { DeleteKnowledgeBase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the knowledge base.
 *
 * > **Note:** When you use this API to delete an external knowledge base such as Salesforce or ServiceNow, you must also delete the [Amazon AppIntegrations](https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html) DataIntegration. This is because you can't reuse the DataIntegration after it's been associated with an external knowledge base. However, you can delete and recreate it. See [DeleteDataIntegration](https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html) and [CreateDataIntegration](https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html) in the *Amazon AppIntegrations API Reference*.
 *
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
export class DeleteKnowledgeBaseCommand extends command<DeleteKnowledgeBaseCommandInput, DeleteKnowledgeBaseCommandOutput>(
  _ep0,
  _mw0,
  "DeleteKnowledgeBase",
  DeleteKnowledgeBase$
) {
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
