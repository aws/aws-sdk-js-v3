// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PrepareAgentRequest, PrepareAgentResponse } from "../models/models_0";
import { de_PrepareAgentCommand, se_PrepareAgentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PrepareAgentCommand}.
 */
export interface PrepareAgentCommandInput extends PrepareAgentRequest {}
/**
 * @public
 *
 * The output of {@link PrepareAgentCommand}.
 */
export interface PrepareAgentCommandOutput extends PrepareAgentResponse, __MetadataBearer {}

/**
 * @public
 * Prepares an existing Amazon Bedrock Agent to receive runtime requests
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, PrepareAgentCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, PrepareAgentCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // PrepareAgentRequest
 *   agentId: "STRING_VALUE", // required
 * };
 * const command = new PrepareAgentCommand(input);
 * const response = await client.send(command);
 * // { // PrepareAgentResponse
 * //   agentId: "STRING_VALUE", // required
 * //   agentStatus: "CREATING" || "PREPARING" || "PREPARED" || "NOT_PREPARED" || "DELETING" || "FAILED" || "VERSIONING" || "UPDATING", // required
 * //   agentVersion: "STRING_VALUE", // required
 * //   preparedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param PrepareAgentCommandInput - {@link PrepareAgentCommandInput}
 * @returns {@link PrepareAgentCommandOutput}
 * @see {@link PrepareAgentCommandInput} for command's `input` shape.
 * @see {@link PrepareAgentCommandOutput} for command's `response` shape.
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
export class PrepareAgentCommand extends $Command
  .classBuilder<
    PrepareAgentCommandInput,
    PrepareAgentCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "PrepareAgent", {})
  .n("BedrockAgentClient", "PrepareAgentCommand")
  .f(void 0, void 0)
  .ser(se_PrepareAgentCommand)
  .de(de_PrepareAgentCommand)
  .build() {}
