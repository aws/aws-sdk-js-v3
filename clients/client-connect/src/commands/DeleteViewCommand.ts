// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteViewRequest, DeleteViewResponse } from "../models/models_1";
import { de_DeleteViewCommand, se_DeleteViewCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteViewCommand}.
 */
export interface DeleteViewCommandInput extends DeleteViewRequest {}
/**
 * @public
 *
 * The output of {@link DeleteViewCommand}.
 */
export interface DeleteViewCommandOutput extends DeleteViewResponse, __MetadataBearer {}

/**
 * <p>Deletes the view entirely. It deletes the view and all associated qualifiers (versions and
 *    aliases).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteViewCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteViewCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DeleteViewRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ViewId: "STRING_VALUE", // required
 * };
 * const command = new DeleteViewCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteViewCommandInput - {@link DeleteViewCommandInput}
 * @returns {@link DeleteViewCommandOutput}
 * @see {@link DeleteViewCommandInput} for command's `input` shape.
 * @see {@link DeleteViewCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>That resource is already in use. Please try another.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Displayed when rate-related API limits are exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class DeleteViewCommand extends $Command
  .classBuilder<
    DeleteViewCommandInput,
    DeleteViewCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DeleteView", {})
  .n("ConnectClient", "DeleteViewCommand")
  .f(void 0, void 0)
  .ser(se_DeleteViewCommand)
  .de(de_DeleteViewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteViewRequest;
      output: {};
    };
    sdk: {
      input: DeleteViewCommandInput;
      output: DeleteViewCommandOutput;
    };
  };
}
