// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreatePromptRequest, CreatePromptResponse } from "../models/models_0";
import { CreatePrompt$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePromptCommand}.
 */
export interface CreatePromptCommandInput extends CreatePromptRequest {}
/**
 * @public
 *
 * The output of {@link CreatePromptCommand}.
 */
export interface CreatePromptCommandOutput extends CreatePromptResponse, __MetadataBearer {}

/**
 * <p>Creates a prompt. For more information about prompts, such as supported file types and maximum length, see
 *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/prompts.html">Create prompts</a> in the
 *      <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreatePromptCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreatePromptCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreatePromptRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   S3Uri: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePromptCommand(input);
 * const response = await client.send(command);
 * // { // CreatePromptResponse
 * //   PromptARN: "STRING_VALUE",
 * //   PromptId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePromptCommandInput - {@link CreatePromptCommandInput}
 * @returns {@link CreatePromptCommandOutput}
 * @see {@link CreatePromptCommandInput} for command's `input` shape.
 * @see {@link CreatePromptCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
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
export class CreatePromptCommand extends $Command
  .classBuilder<
    CreatePromptCommandInput,
    CreatePromptCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreatePrompt", {})
  .n("ConnectClient", "CreatePromptCommand")
  .sc(CreatePrompt$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePromptRequest;
      output: CreatePromptResponse;
    };
    sdk: {
      input: CreatePromptCommandInput;
      output: CreatePromptCommandOutput;
    };
  };
}
