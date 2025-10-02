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
import { DeleteWorkloadIdentityRequest, DeleteWorkloadIdentityResponse } from "../models/models_0";
import { de_DeleteWorkloadIdentityCommand, se_DeleteWorkloadIdentityCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkloadIdentityCommand}.
 */
export interface DeleteWorkloadIdentityCommandInput extends DeleteWorkloadIdentityRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkloadIdentityCommand}.
 */
export interface DeleteWorkloadIdentityCommandOutput extends DeleteWorkloadIdentityResponse, __MetadataBearer {}

/**
 * <p>Deletes a workload identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeleteWorkloadIdentityCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeleteWorkloadIdentityCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // DeleteWorkloadIdentityRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteWorkloadIdentityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWorkloadIdentityCommandInput - {@link DeleteWorkloadIdentityCommandInput}
 * @returns {@link DeleteWorkloadIdentityCommandOutput}
 * @see {@link DeleteWorkloadIdentityCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkloadIdentityCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access</p>
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
export class DeleteWorkloadIdentityCommand extends $Command
  .classBuilder<
    DeleteWorkloadIdentityCommandInput,
    DeleteWorkloadIdentityCommandOutput,
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
  .s("AmazonBedrockAgentCoreControl", "DeleteWorkloadIdentity", {})
  .n("BedrockAgentCoreControlClient", "DeleteWorkloadIdentityCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWorkloadIdentityCommand)
  .de(de_DeleteWorkloadIdentityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkloadIdentityRequest;
      output: {};
    };
    sdk: {
      input: DeleteWorkloadIdentityCommandInput;
      output: DeleteWorkloadIdentityCommandOutput;
    };
  };
}
