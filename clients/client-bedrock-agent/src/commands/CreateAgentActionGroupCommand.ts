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
export { __MetadataBearer, $Command };
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
 * Creates an Action Group for existing Amazon Bedrock Agent
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
 *   parentActionGroupSignature: "AMAZON.UserInput",
 *   actionGroupExecutor: { // ActionGroupExecutor Union: only one key present
 *     lambda: "STRING_VALUE",
 *   },
 *   apiSchema: { // APISchema Union: only one key present
 *     s3: { // S3Identifier
 *       s3BucketName: "STRING_VALUE",
 *       s3ObjectKey: "STRING_VALUE",
 *     },
 *     payload: "STRING_VALUE",
 *   },
 *   actionGroupState: "ENABLED" || "DISABLED",
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
 * @param CreateAgentActionGroupCommandInput - {@link CreateAgentActionGroupCommandInput}
 * @returns {@link CreateAgentActionGroupCommandOutput}
 * @see {@link CreateAgentActionGroupCommandInput} for command's `input` shape.
 * @see {@link CreateAgentActionGroupCommandOutput} for command's `response` shape.
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
  .ep({
    ...commonParams,
  })
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
  .build() {}
