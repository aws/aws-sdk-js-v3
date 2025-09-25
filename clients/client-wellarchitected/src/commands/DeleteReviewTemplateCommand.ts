// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteReviewTemplateInput } from "../models/models_0";
import { DeleteReviewTemplate } from "../schemas/schemas_15_DeleteReviewTemplate";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Delete a review template.</p>
 *          <p>Only the owner of a review template can delete it.</p>
 *          <p>After the review template is deleted, Amazon Web Services accounts, users,
 *             organizations, and organizational units (OUs) that you shared the review template with
 *             will no longer be able to apply it to new workloads.</p>
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
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class DeleteReviewTemplateCommand extends $Command
  .classBuilder<
    DeleteReviewTemplateCommandInput,
    DeleteReviewTemplateCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "DeleteReviewTemplate", {})
  .n("WellArchitectedClient", "DeleteReviewTemplateCommand")
  .sc(DeleteReviewTemplate)
  .build() {
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
