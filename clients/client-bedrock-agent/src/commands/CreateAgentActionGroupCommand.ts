// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAgentActionGroupRequest, CreateAgentActionGroupResponse } from "../models/models_0";
import { CreateAgentActionGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an action group for an agent. An action group represents the actions that an agent can carry out for the customer by defining the APIs that an agent can call and the logic for calling them.
 *
 * To allow your agent to request the user for additional information when trying to complete a task, add an action group with the `parentActionGroupSignature` field set to `AMAZON.UserInput`.
 *
 * To allow your agent to generate, run, and troubleshoot code when trying to complete a task, add an action group with the `parentActionGroupSignature` field set to `AMAZON.CodeInterpreter`.
 *
 * You must leave the `description`, `apiSchema`, and `actionGroupExecutor` fields blank for this action group. During orchestration, if your agent determines that it needs to invoke an API in an action group, but doesn't have enough information to complete the API request, it will invoke this action group instead and return an [Observation](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Observation.html) reprompting the user for more information.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, CreateAgentActionGroupCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, CreateAgentActionGroupCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
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
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict performing an operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of requests exceeds the service quota. Resubmit your request later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockAgentServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgent service.
 *
 * @public
 */
export class CreateAgentActionGroupCommand extends command<CreateAgentActionGroupCommandInput, CreateAgentActionGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateAgentActionGroup",
  CreateAgentActionGroup$
) {
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
