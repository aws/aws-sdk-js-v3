// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteReviewTemplateInput } from "../models/models_0";
import { DeleteReviewTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteReviewTemplateCommand}.
 */
export interface DeleteReviewTemplateCommandInput extends DeleteReviewTemplateInput {}
/**
 * @public
 *
 * The output of {@link DeleteReviewTemplateCommand}.
 */
export interface DeleteReviewTemplateCommandOutput extends __MetadataBearer {}

/**
 * Delete a review template.
 *
 * Only the owner of a review template can delete it.
 *
 * After the review template is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the review template with will no longer be able to apply it to new workloads.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DeleteReviewTemplateCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DeleteReviewTemplateCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // DeleteReviewTemplateInput
 *   TemplateArn: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new DeleteReviewTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReviewTemplateCommandInput - {@link DeleteReviewTemplateCommandInput}
 * @returns {@link DeleteReviewTemplateCommandOutput}
 * @see {@link DeleteReviewTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteReviewTemplateCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource has already been processed, was deleted, or is too large.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class DeleteReviewTemplateCommand extends command<DeleteReviewTemplateCommandInput, DeleteReviewTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteReviewTemplate",
  DeleteReviewTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReviewTemplateInput;
      output: {};
    };
    sdk: {
      input: DeleteReviewTemplateCommandInput;
      output: DeleteReviewTemplateCommandOutput;
    };
  };
}
