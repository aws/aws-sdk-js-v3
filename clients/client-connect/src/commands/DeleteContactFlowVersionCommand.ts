// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteContactFlowVersionRequest, DeleteContactFlowVersionResponse } from "../models/models_0";
import { de_DeleteContactFlowVersionCommand, se_DeleteContactFlowVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteContactFlowVersionCommand}.
 */
export interface DeleteContactFlowVersionCommandInput extends DeleteContactFlowVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContactFlowVersionCommand}.
 */
export interface DeleteContactFlowVersionCommandOutput extends DeleteContactFlowVersionResponse, __MetadataBearer {}

/**
 * <p>Deletes the particular version specified in flow version identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteContactFlowVersionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteContactFlowVersionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // DeleteContactFlowVersionRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 *   ContactFlowVersion: Number("long"), // required
 * };
 * const command = new DeleteContactFlowVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContactFlowVersionCommandInput - {@link DeleteContactFlowVersionCommandInput}
 * @returns {@link DeleteContactFlowVersionCommandOutput}
 * @see {@link DeleteContactFlowVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteContactFlowVersionCommandOutput} for command's `response` shape.
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
export class DeleteContactFlowVersionCommand extends $Command
  .classBuilder<
    DeleteContactFlowVersionCommandInput,
    DeleteContactFlowVersionCommandOutput,
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
  .s("AmazonConnectService", "DeleteContactFlowVersion", {})
  .n("ConnectClient", "DeleteContactFlowVersionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteContactFlowVersionCommand)
  .de(de_DeleteContactFlowVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContactFlowVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteContactFlowVersionCommandInput;
      output: DeleteContactFlowVersionCommandOutput;
    };
  };
}
