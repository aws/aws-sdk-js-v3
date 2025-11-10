// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePromptRequest, UpdatePromptResponse } from "../models/models_3";
import { UpdatePrompt } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePromptCommand}.
 */
export interface UpdatePromptCommandInput extends UpdatePromptRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePromptCommand}.
 */
export interface UpdatePromptCommandOutput extends UpdatePromptResponse, __MetadataBearer {}

/**
 * <p>Updates a prompt.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdatePromptCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdatePromptCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdatePromptRequest
 *   InstanceId: "STRING_VALUE", // required
 *   PromptId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   S3Uri: "STRING_VALUE",
 * };
 * const command = new UpdatePromptCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePromptResponse
 * //   PromptARN: "STRING_VALUE",
 * //   PromptId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdatePromptCommandInput - {@link UpdatePromptCommandInput}
 * @returns {@link UpdatePromptCommandOutput}
 * @see {@link UpdatePromptCommandInput} for command's `input` shape.
 * @see {@link UpdatePromptCommandOutput} for command's `response` shape.
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
export class UpdatePromptCommand extends $Command
  .classBuilder<
    UpdatePromptCommandInput,
    UpdatePromptCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdatePrompt", {})
  .n("ConnectClient", "UpdatePromptCommand")
  .sc(UpdatePrompt)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePromptRequest;
      output: UpdatePromptResponse;
    };
    sdk: {
      input: UpdatePromptCommandInput;
      output: UpdatePromptCommandOutput;
    };
  };
}
