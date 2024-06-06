// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePrivacyBudgetTemplateInput, DeletePrivacyBudgetTemplateOutput } from "../models/models_0";
import {
  de_DeletePrivacyBudgetTemplateCommand,
  se_DeletePrivacyBudgetTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a privacy budget template for a specified membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeletePrivacyBudgetTemplateCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeletePrivacyBudgetTemplateCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
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
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 * @public
 */
export class DeletePrivacyBudgetTemplateCommand extends $Command
  .classBuilder<
    DeletePrivacyBudgetTemplateCommandInput,
    DeletePrivacyBudgetTemplateCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "DeletePrivacyBudgetTemplate", {})
  .n("CleanRoomsClient", "DeletePrivacyBudgetTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DeletePrivacyBudgetTemplateCommand)
  .de(de_DeletePrivacyBudgetTemplateCommand)
  .build() {}
