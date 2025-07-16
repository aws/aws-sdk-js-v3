// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAgentRuntimeEndpointRequest,
  GetAgentRuntimeEndpointRequestFilterSensitiveLog,
  GetAgentRuntimeEndpointResponse,
  GetAgentRuntimeEndpointResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetAgentRuntimeEndpointCommand, se_GetAgentRuntimeEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAgentRuntimeEndpointCommand}.
 */
export interface GetAgentRuntimeEndpointCommandInput extends GetAgentRuntimeEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentRuntimeEndpointCommand}.
 */
export interface GetAgentRuntimeEndpointCommandOutput extends GetAgentRuntimeEndpointResponse, __MetadataBearer {}

/**
 * <p>Gets information about an Amazon Secure AgentEndpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetAgentRuntimeEndpointCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetAgentRuntimeEndpointCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetAgentRuntimeEndpointRequest
 *   agentRuntimeId: "STRING_VALUE", // required
 *   endpointName: "STRING_VALUE", // required
 * };
 * const command = new GetAgentRuntimeEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentRuntimeEndpointResponse
 * //   liveVersion: "STRING_VALUE",
 * //   targetVersion: "STRING_VALUE",
 * //   agentRuntimeEndpointArn: "STRING_VALUE", // required
 * //   agentRuntimeArn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "READY" || "DELETING", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //   failureReason: "STRING_VALUE",
 * //   name: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetAgentRuntimeEndpointCommandInput - {@link GetAgentRuntimeEndpointCommandInput}
 * @returns {@link GetAgentRuntimeEndpointCommandOutput}
 * @see {@link GetAgentRuntimeEndpointCommandInput} for command's `input` shape.
 * @see {@link GetAgentRuntimeEndpointCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class GetAgentRuntimeEndpointCommand extends $Command
  .classBuilder<
    GetAgentRuntimeEndpointCommandInput,
    GetAgentRuntimeEndpointCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentCoreControl", "GetAgentRuntimeEndpoint", {})
  .n("BedrockAgentCoreControlClient", "GetAgentRuntimeEndpointCommand")
  .f(GetAgentRuntimeEndpointRequestFilterSensitiveLog, GetAgentRuntimeEndpointResponseFilterSensitiveLog)
  .ser(se_GetAgentRuntimeEndpointCommand)
  .de(de_GetAgentRuntimeEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentRuntimeEndpointRequest;
      output: GetAgentRuntimeEndpointResponse;
    };
    sdk: {
      input: GetAgentRuntimeEndpointCommandInput;
      output: GetAgentRuntimeEndpointCommandOutput;
    };
  };
}
