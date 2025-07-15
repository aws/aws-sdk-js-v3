// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateAgentActionGroupRequest,
  CreateAgentActionGroupRequestFilterSensitiveLog,
  CreateAgentActionGroupResponse,
  CreateAgentActionGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAgentActionGroupCommand, se_CreateAgentActionGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAgentActionGroupCommand}.
 */
export interface CreateAgentActionGroupCommandInput extends CreateAgentActionGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgentActionGroupCommand}.
 */
export interface CreateAgentActionGroupCommandOutput extends CreateAgentActionGroupResponse, __MetadataBearer {}

/**
 * <p>Creates an action group for an agent. An action group represents the actions that an agent can carry out for the customer by defining the APIs that an agent can call and the logic for calling them.</p> <p>To allow your agent to request the user for additional information when trying to complete a task, add an action group with the <code>parentActionGroupSignature</code> field set to <code>AMAZON.UserInput</code>. </p> <p>To allow your agent to generate, run, and troubleshoot code when trying to complete a task, add an action group with the <code>parentActionGroupSignature</code> field set to <code>AMAZON.CodeInterpreter</code>. </p> <p>You must leave the <code>description</code>, <code>apiSchema</code>, and <code>actionGroupExecutor</code> fields blank for this action group. During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Observation.html">Observation</a> reprompting the user for more information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, CreateAgentActionGroupCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, CreateAgentActionGroupCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // CreateAgentActionGroupRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   actionGroupName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   parentActionGroupSignature: "AMAZON.UserInput" || "AMAZON.CodeInterpreter" || "ANTHROPIC.Computer" || "ANTHROPIC.Bash" || "ANTHROPIC.TextEditor",
 *   parentActionGroupSignatureParams: { // ActionGroupSignatureParams
 *     "<keys>": "STRING_VALUE",
 *   },
 *   actionGroupExecutor: { // ActionGroupExecutor Union: only one key present
 *     lambda: "STRING_VALUE",
 *     customControl: "RETURN_CONTROL",
 *   },
 *   apiSchema: { // APISchema Union: only one key present
 *     s3: { // S3Identifier
 *       s3BucketName: "STRING_VALUE",
 *       s3ObjectKey: "STRING_VALUE",
 *     },
 *     payload: "STRING_VALUE",
 *   },
 *   actionGroupState: "ENABLED" || "DISABLED",
 *   functionSchema: { // FunctionSchema Union: only one key present
 *     functions: [ // Functions
 *       { // Function
 *         name: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         parameters: { // ParameterMap
 *           "<keys>": { // ParameterDetail
 *             description: "STRING_VALUE",
 *             type: "string" || "number" || "integer" || "boolean" || "array", // required
 *             required: true || false,
 *           },
 *         },
 *         requireConfirmation: "ENABLED" || "DISABLED",
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateAgentActionGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentActionGroupResponse
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
 * @param CreateAgentActionGroupCommandInput - {@link CreateAgentActionGroupCommandInput}
 * @returns {@link CreateAgentActionGroupCommandOutput}
 * @see {@link CreateAgentActionGroupCommandInput} for command's `input` shape.
 * @see {@link CreateAgentActionGroupCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
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
export class CreateAgentActionGroupCommand extends $Command
  .classBuilder<
    CreateAgentActionGroupCommandInput,
    CreateAgentActionGroupCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "CreateAgentActionGroup", {})
  .n("BedrockAgentClient", "CreateAgentActionGroupCommand")
  .f(CreateAgentActionGroupRequestFilterSensitiveLog, CreateAgentActionGroupResponseFilterSensitiveLog)
  .ser(se_CreateAgentActionGroupCommand)
  .de(de_CreateAgentActionGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgentActionGroupRequest;
      output: CreateAgentActionGroupResponse;
    };
    sdk: {
      input: CreateAgentActionGroupCommandInput;
      output: CreateAgentActionGroupCommandOutput;
    };
  };
}
