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
export { __MetadataBearer, $Command };
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
 * @public
 * Gets an Action Group for existing Amazon Bedrock Agent Version
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
 * @param GetAgentActionGroupCommandInput - {@link GetAgentActionGroupCommandInput}
 * @returns {@link GetAgentActionGroupCommandOutput}
 * @see {@link GetAgentActionGroupCommandInput} for command's `input` shape.
 * @see {@link GetAgentActionGroupCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
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
export class GetAgentActionGroupCommand extends $Command
  .classBuilder<
    GetAgentActionGroupCommandInput,
    GetAgentActionGroupCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "GetAgentActionGroup", {})
  .n("BedrockAgentClient", "GetAgentActionGroupCommand")
  .f(void 0, GetAgentActionGroupResponseFilterSensitiveLog)
  .ser(se_GetAgentActionGroupCommand)
  .de(de_GetAgentActionGroupCommand)
  .build() {}
