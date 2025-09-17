// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateBrowserStreamRequest, UpdateBrowserStreamResponse } from "../models/models_0";
import { de_UpdateBrowserStreamCommand, se_UpdateBrowserStreamCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBrowserStreamCommand}.
 */
export interface UpdateBrowserStreamCommandInput extends UpdateBrowserStreamRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBrowserStreamCommand}.
 */
export interface UpdateBrowserStreamCommandOutput extends UpdateBrowserStreamResponse, __MetadataBearer {}

/**
 * <p>Updates a browser stream. To use this operation, you must have permissions to perform the bedrock:UpdateBrowserStream action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, UpdateBrowserStreamCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, UpdateBrowserStreamCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // UpdateBrowserStreamRequest
 *   browserIdentifier: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   streamUpdate: { // StreamUpdate Union: only one key present
 *     automationStreamUpdate: { // AutomationStreamUpdate
 *       streamStatus: "ENABLED" || "DISABLED",
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateBrowserStreamCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBrowserStreamResponse
 * //   browserIdentifier: "STRING_VALUE", // required
 * //   sessionId: "STRING_VALUE", // required
 * //   streams: { // BrowserSessionStream
 * //     automationStream: { // AutomationStream
 * //       streamEndpoint: "STRING_VALUE", // required
 * //       streamStatus: "ENABLED" || "DISABLED", // required
 * //     },
 * //     liveViewStream: { // LiveViewStream
 * //       streamEndpoint: "STRING_VALUE",
 * //     },
 * //   },
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateBrowserStreamCommandInput - {@link UpdateBrowserStreamCommandInput}
 * @returns {@link UpdateBrowserStreamCommandOutput}
 * @see {@link UpdateBrowserStreamCommandInput} for command's `input` shape.
 * @see {@link UpdateBrowserStreamCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The exception that occurs when the request conflicts with the current state of the resource. This can happen when trying to modify a resource that is currently being modified by another request, or when trying to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
 *
 * @throws {@link BedrockAgentCoreServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCore service.</p>
 *
 *
 * @public
 */
export class UpdateBrowserStreamCommand extends $Command
  .classBuilder<
    UpdateBrowserStreamCommandInput,
    UpdateBrowserStreamCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentCore", "UpdateBrowserStream", {})
  .n("BedrockAgentCoreClient", "UpdateBrowserStreamCommand")
  .f(void 0, void 0)
  .ser(se_UpdateBrowserStreamCommand)
  .de(de_UpdateBrowserStreamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBrowserStreamRequest;
      output: UpdateBrowserStreamResponse;
    };
    sdk: {
      input: UpdateBrowserStreamCommandInput;
      output: UpdateBrowserStreamCommandOutput;
    };
  };
}
