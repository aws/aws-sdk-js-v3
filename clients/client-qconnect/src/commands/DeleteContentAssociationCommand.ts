// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteContentAssociationRequest, DeleteContentAssociationResponse } from "../models/models_0";
import { de_DeleteContentAssociationCommand, se_DeleteContentAssociationCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteContentAssociationCommand}.
 */
export interface DeleteContentAssociationCommandInput extends DeleteContentAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContentAssociationCommand}.
 */
export interface DeleteContentAssociationCommandOutput extends DeleteContentAssociationResponse, __MetadataBearer {}

/**
 * <p>Deletes the content association. </p> <p>For more information about content associations--what they are and when they are used--see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/integrate-q-with-guides.html">Integrate Amazon Q in Connect with step-by-step guides</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, DeleteContentAssociationCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, DeleteContentAssociationCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // DeleteContentAssociationRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   contentId: "STRING_VALUE", // required
 *   contentAssociationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteContentAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContentAssociationCommandInput - {@link DeleteContentAssociationCommandInput}
 * @returns {@link DeleteContentAssociationCommandOutput}
 * @see {@link DeleteContentAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteContentAssociationCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 *
 * @public
 */
export class DeleteContentAssociationCommand extends $Command
  .classBuilder<
    DeleteContentAssociationCommandInput,
    DeleteContentAssociationCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "DeleteContentAssociation", {})
  .n("QConnectClient", "DeleteContentAssociationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteContentAssociationCommand)
  .de(de_DeleteContentAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContentAssociationRequest;
      output: {};
    };
    sdk: {
      input: DeleteContentAssociationCommandInput;
      output: DeleteContentAssociationCommandOutput;
    };
  };
}
