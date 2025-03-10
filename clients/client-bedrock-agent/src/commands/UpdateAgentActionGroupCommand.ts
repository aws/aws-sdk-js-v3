// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateAgentActionGroupRequest,
  UpdateAgentActionGroupRequestFilterSensitiveLog,
  UpdateAgentActionGroupResponse,
  UpdateAgentActionGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateAgentActionGroupCommand, se_UpdateAgentActionGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the configuration for an action group for an agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, UpdateAgentActionGroupCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, UpdateAgentActionGroupCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
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
 * @public
 */
export class UpdateAgentActionGroupCommand extends $Command
  .classBuilder<
    UpdateAgentActionGroupCommandInput,
    UpdateAgentActionGroupCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "UpdateAgentActionGroup", {})
  .n("BedrockAgentClient", "UpdateAgentActionGroupCommand")
  .f(UpdateAgentActionGroupRequestFilterSensitiveLog, UpdateAgentActionGroupResponseFilterSensitiveLog)
  .ser(se_UpdateAgentActionGroupCommand)
  .de(de_UpdateAgentActionGroupCommand)
  .build() {
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
