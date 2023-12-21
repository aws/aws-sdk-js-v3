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
export { __MetadataBearer, $Command };
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
 * @public
 * Updates an existing Action Group for Amazon Bedrock Agent
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
 *   parentActionGroupSignature: "AMAZON.UserInput",
 *   actionGroupExecutor: { // ActionGroupExecutor Union: only one key present
 *     lambda: "STRING_VALUE",
 *   },
 *   actionGroupState: "ENABLED" || "DISABLED",
 *   apiSchema: { // APISchema Union: only one key present
 *     s3: { // S3Identifier
 *       s3BucketName: "STRING_VALUE",
 *       s3ObjectKey: "STRING_VALUE",
 *     },
 *     payload: "STRING_VALUE",
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
 * //     parentActionSignature: "AMAZON.UserInput",
 * //     actionGroupExecutor: { // ActionGroupExecutor Union: only one key present
 * //       lambda: "STRING_VALUE",
 * //     },
 * //     apiSchema: { // APISchema Union: only one key present
 * //       s3: { // S3Identifier
 * //         s3BucketName: "STRING_VALUE",
 * //         s3ObjectKey: "STRING_VALUE",
 * //       },
 * //       payload: "STRING_VALUE",
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
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *  This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  This exception is thrown when a request is made beyond the service quota
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 */
export class UpdateAgentActionGroupCommand extends $Command
  .classBuilder<
    UpdateAgentActionGroupCommandInput,
    UpdateAgentActionGroupCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: BedrockAgentClientResolvedConfig) {
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
  .build() {}
