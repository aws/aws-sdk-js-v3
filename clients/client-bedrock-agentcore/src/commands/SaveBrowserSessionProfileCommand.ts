// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SaveBrowserSessionProfileRequest, SaveBrowserSessionProfileResponse } from "../models/models_0";
import { SaveBrowserSessionProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SaveBrowserSessionProfileCommand}.
 */
export interface SaveBrowserSessionProfileCommandInput extends SaveBrowserSessionProfileRequest {}
/**
 * @public
 *
 * The output of {@link SaveBrowserSessionProfileCommand}.
 */
export interface SaveBrowserSessionProfileCommandOutput extends SaveBrowserSessionProfileResponse, __MetadataBearer {}

/**
 * <p>Saves the current state of a browser session as a reusable profile in Amazon Bedrock AgentCore. A browser profile captures persistent browser data such as cookies and local storage from an active session, enabling you to reuse this data in future browser sessions.</p> <p>To save a browser session profile, you must specify the profile identifier, browser identifier, and session ID. The session must be active when saving the profile. Once saved, the profile can be used with the <code>StartBrowserSession</code> operation to initialize new sessions with the stored browser state.</p> <p>Browser profiles are useful for scenarios that require persistent authentication, maintaining user preferences across sessions, or continuing tasks that depend on previously stored browser data.</p> <p>The following operations are related to <code>SaveBrowserSessionProfile</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_StartBrowserSession.html">StartBrowserSession</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/APIReference/API_GetBrowserSession.html">GetBrowserSession</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, SaveBrowserSessionProfileCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, SaveBrowserSessionProfileCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // SaveBrowserSessionProfileRequest
 *   traceId: "STRING_VALUE",
 *   traceParent: "STRING_VALUE",
 *   profileIdentifier: "STRING_VALUE", // required
 *   browserIdentifier: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new SaveBrowserSessionProfileCommand(input);
 * const response = await client.send(command);
 * // { // SaveBrowserSessionProfileResponse
 * //   profileIdentifier: "STRING_VALUE", // required
 * //   browserIdentifier: "STRING_VALUE", // required
 * //   sessionId: "STRING_VALUE", // required
 * //   lastUpdatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param SaveBrowserSessionProfileCommandInput - {@link SaveBrowserSessionProfileCommandInput}
 * @returns {@link SaveBrowserSessionProfileCommandOutput}
 * @see {@link SaveBrowserSessionProfileCommandInput} for command's `input` shape.
 * @see {@link SaveBrowserSessionProfileCommandOutput} for command's `response` shape.
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
export class SaveBrowserSessionProfileCommand extends $Command
  .classBuilder<
    SaveBrowserSessionProfileCommandInput,
    SaveBrowserSessionProfileCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "SaveBrowserSessionProfile", {})
  .n("BedrockAgentCoreClient", "SaveBrowserSessionProfileCommand")
  .sc(SaveBrowserSessionProfile$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SaveBrowserSessionProfileRequest;
      output: SaveBrowserSessionProfileResponse;
    };
    sdk: {
      input: SaveBrowserSessionProfileCommandInput;
      output: SaveBrowserSessionProfileCommandOutput;
    };
  };
}
