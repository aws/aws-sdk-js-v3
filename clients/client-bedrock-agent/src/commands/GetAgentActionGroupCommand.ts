// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAgentActionGroupRequest,
  GetAgentActionGroupResponse,
  GetAgentActionGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetAgentActionGroupCommand, se_GetAgentActionGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAgentActionGroupCommand}.
 */
export interface GetAgentActionGroupCommandInput extends GetAgentActionGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentActionGroupCommand}.
 */
export interface GetAgentActionGroupCommandOutput extends GetAgentActionGroupResponse, __MetadataBearer {}

/**
 * <p>Gets information about an action group for an agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetAgentActionGroupCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetAgentActionGroupCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // GetAgentActionGroupRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   actionGroupId: "STRING_VALUE", // required
 * };
 * const command = new GetAgentActionGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentActionGroupResponse
 * //   agentActionGroup: { // AgentActionGroup
 * //     agentId: "STRING_VALUE", // required
 * //     agentVersion: "STRING_VALUE", // required
 * //     actionGroupId: "STRING_VALUE", // required
 * //     actionGroupName: "STRING_VALUE", // required
 * //     clientToken: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     parentActionSignature: "AMAZON.UserInput" || "AMAZON.CodeInterpreter" || "ANTHROPIC.Computer" || "ANTHROPIC.Bash" || "ANTHROPIC.TextEditor",
 * //     parentActionGroupSignatureParams: { // ActionGroupSignatureParams
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     actionGroupExecutor: { // ActionGroupExecutor Union: only one key present
 * //       lambda: "STRING_VALUE",
 * //       customControl: "RETURN_CONTROL",
 * //     },
 * //     apiSchema: { // APISchema Union: only one key present
 * //       s3: { // S3Identifier
 * //         s3BucketName: "STRING_VALUE",
 * //         s3ObjectKey: "STRING_VALUE",
 * //       },
 * //       payload: "STRING_VALUE",
 * //     },
 * //     functionSchema: { // FunctionSchema Union: only one key present
 * //       functions: [ // Functions
 * //         { // Function
 * //           name: "STRING_VALUE", // required
 * //           description: "STRING_VALUE",
 * //           parameters: { // ParameterMap
 * //             "<keys>": { // ParameterDetail
 * //               description: "STRING_VALUE",
 * //               type: "string" || "number" || "integer" || "boolean" || "array", // required
 * //               required: true || false,
 * //             },
 * //           },
 * //           requireConfirmation: "ENABLED" || "DISABLED",
 * //         },
 * //       ],
 * //     },
 * //     actionGroupState: "ENABLED" || "DISABLED", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAgentActionGroupCommandInput - {@link GetAgentActionGroupCommandInput}
 * @returns {@link GetAgentActionGroupCommandOutput}
 * @see {@link GetAgentActionGroupCommandInput} for command's `input` shape.
 * @see {@link GetAgentActionGroupCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 *
 * @public
 */
export class GetAgentActionGroupCommand extends $Command
  .classBuilder<
    GetAgentActionGroupCommandInput,
    GetAgentActionGroupCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "GetAgentActionGroup", {})
  .n("BedrockAgentClient", "GetAgentActionGroupCommand")
  .f(void 0, GetAgentActionGroupResponseFilterSensitiveLog)
  .ser(se_GetAgentActionGroupCommand)
  .de(de_GetAgentActionGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentActionGroupRequest;
      output: GetAgentActionGroupResponse;
    };
    sdk: {
      input: GetAgentActionGroupCommandInput;
      output: GetAgentActionGroupCommandOutput;
    };
  };
}
