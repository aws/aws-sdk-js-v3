// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePrivacyBudgetTemplateInput, DeletePrivacyBudgetTemplateOutput } from "../models/models_1";
import { DeletePrivacyBudgetTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePrivacyBudgetTemplateCommand}.
 */
export interface DeletePrivacyBudgetTemplateCommandInput extends DeletePrivacyBudgetTemplateInput {}
/**
 * @public
 *
 * The output of {@link DeletePrivacyBudgetTemplateCommand}.
 */
export interface DeletePrivacyBudgetTemplateCommandOutput extends DeletePrivacyBudgetTemplateOutput, __MetadataBearer {}

/**
 * Deletes a privacy budget template for a specified collaboration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeletePrivacyBudgetTemplateCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeletePrivacyBudgetTemplateCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // DeletePrivacyBudgetTemplateInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   privacyBudgetTemplateIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeletePrivacyBudgetTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePrivacyBudgetTemplateCommandInput - {@link DeletePrivacyBudgetTemplateCommandInput}
 * @returns {@link DeletePrivacyBudgetTemplateCommandOutput}
 * @see {@link DeletePrivacyBudgetTemplateCommandInput} for command's `input` shape.
 * @see {@link DeletePrivacyBudgetTemplateCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CleanRoomsServiceException}
 *
 * Base exception class for all service exceptions from CleanRooms service.
 *
 * @public
 */
export class DeletePrivacyBudgetTemplateCommand extends command<DeletePrivacyBudgetTemplateCommandInput, DeletePrivacyBudgetTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeletePrivacyBudgetTemplate",
  DeletePrivacyBudgetTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePrivacyBudgetTemplateInput;
      output: {};
    };
    sdk: {
      input: DeletePrivacyBudgetTemplateCommandInput;
      output: DeletePrivacyBudgetTemplateCommandOutput;
    };
  };
}
