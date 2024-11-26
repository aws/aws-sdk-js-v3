// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateContactFlowContentRequest, UpdateContactFlowContentResponse } from "../models/models_2";
import { de_UpdateContactFlowContentCommand, se_UpdateContactFlowContentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContactFlowContentCommand}.
 */
export interface UpdateContactFlowContentCommandInput extends UpdateContactFlowContentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactFlowContentCommand}.
 */
export interface UpdateContactFlowContentCommandOutput extends UpdateContactFlowContentResponse, __MetadataBearer {}

/**
 * <p>Updates the specified flow.</p>
 *          <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 *          <p>Use the <code>$SAVED</code> alias in the request to describe the <code>SAVED</code> content
 *    of a Flow. For example, <code>arn:aws:.../contact-flow/\{id\}:$SAVED</code>. After a flow is
 *    published, <code>$SAVED</code> needs to be supplied to view saved content that has not been
 *    published.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactFlowContentCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactFlowContentCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateContactFlowContentRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactFlowId: "STRING_VALUE", // required
 *   Content: "STRING_VALUE", // required
 * };
 * const command = new UpdateContactFlowContentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactFlowContentCommandInput - {@link UpdateContactFlowContentCommandInput}
 * @returns {@link UpdateContactFlowContentCommandOutput}
 * @see {@link UpdateContactFlowContentCommandInput} for command's `input` shape.
 * @see {@link UpdateContactFlowContentCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidContactFlowException} (client fault)
 *  <p>The flow is not valid.</p>
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
export class UpdateContactFlowContentCommand extends $Command
  .classBuilder<
    UpdateContactFlowContentCommandInput,
    UpdateContactFlowContentCommandOutput,
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
  .s("AmazonConnectService", "UpdateContactFlowContent", {})
  .n("ConnectClient", "UpdateContactFlowContentCommand")
  .f(void 0, void 0)
  .ser(se_UpdateContactFlowContentCommand)
  .de(de_UpdateContactFlowContentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContactFlowContentRequest;
      output: {};
    };
    sdk: {
      input: UpdateContactFlowContentCommandInput;
      output: UpdateContactFlowContentCommandOutput;
    };
  };
}
