// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAssistantAssociationRequest, DeleteAssistantAssociationResponse } from "../models/models_0";
import { de_DeleteAssistantAssociationCommand, se_DeleteAssistantAssociationCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * import { QConnectClient, DeleteAssistantAssociationCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, DeleteAssistantAssociationCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
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
export class DeleteAssistantAssociationCommand extends $Command
  .classBuilder<
    DeleteAssistantAssociationCommandInput,
    DeleteAssistantAssociationCommandOutput,
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
  .s("WisdomService", "DeleteAssistantAssociation", {})
  .n("QConnectClient", "DeleteAssistantAssociationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAssistantAssociationCommand)
  .de(de_DeleteAssistantAssociationCommand)
  .build() {
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
