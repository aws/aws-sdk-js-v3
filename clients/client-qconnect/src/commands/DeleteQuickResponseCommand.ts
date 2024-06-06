// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteQuickResponseRequest, DeleteQuickResponseResponse } from "../models/models_0";
import { de_DeleteQuickResponseCommand, se_DeleteQuickResponseCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteQuickResponseCommand}.
 */
export interface DeleteQuickResponseCommandInput extends DeleteQuickResponseRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQuickResponseCommand}.
 */
export interface DeleteQuickResponseCommandOutput extends DeleteQuickResponseResponse, __MetadataBearer {}

/**
 * <p>Deletes a quick response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, DeleteQuickResponseCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, DeleteQuickResponseCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // DeleteQuickResponseRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   quickResponseId: "STRING_VALUE", // required
 * };
 * const command = new DeleteQuickResponseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQuickResponseCommandInput - {@link DeleteQuickResponseCommandInput}
 * @returns {@link DeleteQuickResponseCommandOutput}
 * @see {@link DeleteQuickResponseCommandInput} for command's `input` shape.
 * @see {@link DeleteQuickResponseCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
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
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 * @public
 */
export class DeleteQuickResponseCommand extends $Command
  .classBuilder<
    DeleteQuickResponseCommandInput,
    DeleteQuickResponseCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "DeleteQuickResponse", {})
  .n("QConnectClient", "DeleteQuickResponseCommand")
  .f(void 0, void 0)
  .ser(se_DeleteQuickResponseCommand)
  .de(de_DeleteQuickResponseCommand)
  .build() {}
