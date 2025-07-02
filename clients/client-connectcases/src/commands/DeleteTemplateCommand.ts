// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTemplateRequest, DeleteTemplateResponse } from "../models/models_0";
import { de_DeleteTemplateCommand, se_DeleteTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTemplateCommand}.
 */
export interface DeleteTemplateCommandInput extends DeleteTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTemplateCommand}.
 */
export interface DeleteTemplateCommandOutput extends DeleteTemplateResponse, __MetadataBearer {}

/**
 * <p>Deletes a cases template. You can delete up to 100 templates per domain.</p> <p>After a cases template is deleted:</p> <ul> <li> <p>You can still retrieve the template by calling <code>GetTemplate</code>.</p> </li> <li> <p>You cannot update the template. </p> </li> <li> <p>You cannot create a case by using the deleted template.</p> </li> <li> <p>Deleted templates are not included in the <code>ListTemplates</code> response.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, DeleteTemplateCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, DeleteTemplateCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const input = { // DeleteTemplateRequest
 *   domainId: "STRING_VALUE", // required
 *   templateId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTemplateCommandInput - {@link DeleteTemplateCommandInput}
 * @returns {@link DeleteTemplateCommandOutput}
 * @see {@link DeleteTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteTemplateCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 *
 * @public
 */
export class DeleteTemplateCommand extends $Command
  .classBuilder<
    DeleteTemplateCommandInput,
    DeleteTemplateCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCases", "DeleteTemplate", {})
  .n("ConnectCasesClient", "DeleteTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTemplateCommand)
  .de(de_DeleteTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTemplateRequest;
      output: {};
    };
    sdk: {
      input: DeleteTemplateCommandInput;
      output: DeleteTemplateCommandOutput;
    };
  };
}
