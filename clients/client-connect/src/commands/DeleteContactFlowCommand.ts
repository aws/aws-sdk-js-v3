// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteContactFlowRequest, DeleteContactFlowResponse } from "../models/models_0";
import { de_DeleteContactFlowCommand, se_DeleteContactFlowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteContactFlowCommand}.
 */
export interface DeleteContactFlowCommandInput extends DeleteContactFlowRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContactFlowCommand}.
 */
export interface DeleteContactFlowCommandOutput extends DeleteContactFlowResponse, __MetadataBearer {}

/**
 * <p>Deletes a flow for the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteContactFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteContactFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DeleteContactFlowRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 * };
 * const command = new DeleteContactFlowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContactFlowCommandInput - {@link DeleteContactFlowCommandInput}
 * @returns {@link DeleteContactFlowCommandOutput}
 * @see {@link DeleteContactFlowCommandInput} for command's `input` shape.
 * @see {@link DeleteContactFlowCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class DeleteContactFlowCommand extends $Command
  .classBuilder<
    DeleteContactFlowCommandInput,
    DeleteContactFlowCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DeleteContactFlow", {})
  .n("ConnectClient", "DeleteContactFlowCommand")
  .f(void 0, void 0)
  .ser(se_DeleteContactFlowCommand)
  .de(de_DeleteContactFlowCommand)
  .build() {}
