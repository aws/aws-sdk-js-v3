// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateLambdaFunctionRequest } from "../models/models_1";
import { DisassociateLambdaFunction } from "../schemas/schemas_108_Lambda";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateLambdaFunctionCommand}.
 */
export interface DisassociateLambdaFunctionCommandInput extends DisassociateLambdaFunctionRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateLambdaFunctionCommand}.
 */
export interface DisassociateLambdaFunctionCommandOutput extends __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Remove the Lambda function from the dropdown options available in the relevant
 *    flow blocks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateLambdaFunctionCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateLambdaFunctionCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DisassociateLambdaFunctionRequest
 *   InstanceId: "STRING_VALUE", // required
 *   FunctionArn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DisassociateLambdaFunctionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateLambdaFunctionCommandInput - {@link DisassociateLambdaFunctionCommandInput}
 * @returns {@link DisassociateLambdaFunctionCommandOutput}
 * @see {@link DisassociateLambdaFunctionCommandInput} for command's `input` shape.
 * @see {@link DisassociateLambdaFunctionCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
 *
 * @public
 */
export class DisassociateLambdaFunctionCommand extends $Command
  .classBuilder<
    DisassociateLambdaFunctionCommandInput,
    DisassociateLambdaFunctionCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DisassociateLambdaFunction", {})
  .n("ConnectClient", "DisassociateLambdaFunctionCommand")
  .sc(DisassociateLambdaFunction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateLambdaFunctionRequest;
      output: {};
    };
    sdk: {
      input: DisassociateLambdaFunctionCommandInput;
      output: DisassociateLambdaFunctionCommandOutput;
    };
  };
}
