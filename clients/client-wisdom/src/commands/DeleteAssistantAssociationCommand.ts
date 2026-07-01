// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAssistantAssociationRequest, DeleteAssistantAssociationResponse } from "../models/models_0";
import { DeleteAssistantAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAssistantAssociationCommand}.
 */
export interface DeleteAssistantAssociationCommandInput extends DeleteAssistantAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAssistantAssociationCommand}.
 */
export interface DeleteAssistantAssociationCommandOutput extends DeleteAssistantAssociationResponse, __MetadataBearer {}

/**
 * <p>Deletes an assistant association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, DeleteAssistantAssociationCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, DeleteAssistantAssociationCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // DeleteAssistantAssociationRequest
 *   assistantAssociationId: "STRING_VALUE", // required
 *   assistantId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAssistantAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAssistantAssociationCommandInput - {@link DeleteAssistantAssociationCommandInput}
 * @returns {@link DeleteAssistantAssociationCommandOutput}
 * @see {@link DeleteAssistantAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteAssistantAssociationCommandOutput} for command's `response` shape.
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
export class DeleteAssistantAssociationCommand extends command<DeleteAssistantAssociationCommandInput, DeleteAssistantAssociationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAssistantAssociation",
  DeleteAssistantAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssistantAssociationRequest;
      output: {};
    };
    sdk: {
      input: DeleteAssistantAssociationCommandInput;
      output: DeleteAssistantAssociationCommandOutput;
    };
  };
}
