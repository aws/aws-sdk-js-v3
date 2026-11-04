// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAgentActionGroupRequest, UpdateAgentActionGroupResponse } from "../models/models_0";
import { UpdateAgentActionGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAgentActionGroupCommand}.
 */
export interface UpdateAgentActionGroupCommandInput extends UpdateAgentActionGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAgentActionGroupCommand}.
 */
export interface UpdateAgentActionGroupCommandOutput extends UpdateAgentActionGroupResponse, __MetadataBearer {}

/**
 * Updates the configuration for an action group for an agent.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, UpdateAgentActionGroupCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, UpdateAgentActionGroupCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // UpdateAgentActionGroupRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   actionGroupId: "STRING_VALUE", // required
 *   actionGroupName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   parentActionGroupSignature: "AMAZON.UserInput" || "AMAZON.CodeInterpreter" || "ANTHROPIC.Computer" || "ANTHROPIC.Bash" || "ANTHROPIC.TextEditor",
 *   parentActionGroupSignatureParams: { // ActionGroupSignatureParams
 *     "<keys>": "STRING_VALUE",
 *   },
 *   actionGroupExecutor: { // ActionGroupExecutor Union: only one key present
 *     lambda: "STRING_VALUE",
 *     customControl: "RETURN_CONTROL",
 *   },
 *   actionGroupState: "ENABLED" || "DISABLED",
 *   apiSchema: { // APISchema Union: only one key present
 *     s3: { // S3Identifier
 *       s3BucketName: "STRING_VALUE",
 *       s3ObjectKey: "STRING_VALUE",
 *     },
 *     payload: "STRING_VALUE",
 *   },
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
 * const command = new UpdateAgentActionGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAgentActionGroupResponse
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
 * @param UpdateAgentActionGroupCommandInput - {@link UpdateAgentActionGroupCommandInput}
 * @returns {@link UpdateAgentActionGroupCommandOutput}
 * @see {@link UpdateAgentActionGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentActionGroupCommandOutput} for command's `response` shape.
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
export class UpdateAgentActionGroupCommand extends command<UpdateAgentActionGroupCommandInput, UpdateAgentActionGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAgentActionGroup",
  UpdateAgentActionGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAgentActionGroupRequest;
      output: UpdateAgentActionGroupResponse;
    };
    sdk: {
      input: UpdateAgentActionGroupCommandInput;
      output: UpdateAgentActionGroupCommandOutput;
    };
  };
}
