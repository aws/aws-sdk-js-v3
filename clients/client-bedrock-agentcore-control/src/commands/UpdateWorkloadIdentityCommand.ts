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
import { UpdateWorkloadIdentityRequest, UpdateWorkloadIdentityResponse } from "../models/models_0";
import { de_UpdateWorkloadIdentityCommand, se_UpdateWorkloadIdentityCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkloadIdentityCommand}.
 */
export interface UpdateWorkloadIdentityCommandInput extends UpdateWorkloadIdentityRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkloadIdentityCommand}.
 */
export interface UpdateWorkloadIdentityCommandOutput extends UpdateWorkloadIdentityResponse, __MetadataBearer {}

/**
 * <p>Updates an existing workload identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdateWorkloadIdentityCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdateWorkloadIdentityCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdateWorkloadIdentityRequest
 *   name: "STRING_VALUE", // required
 *   allowedResourceOauth2ReturnUrls: [ // ResourceOauth2ReturnUrlListType
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateWorkloadIdentityCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkloadIdentityResponse
 * //   name: "STRING_VALUE", // required
 * //   workloadIdentityArn: "STRING_VALUE", // required
 * //   allowedResourceOauth2ReturnUrls: [ // ResourceOauth2ReturnUrlListType
 * //     "STRING_VALUE",
 * //   ],
 * //   createdTime: new Date("TIMESTAMP"), // required
 * //   lastUpdatedTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateWorkloadIdentityCommandInput - {@link UpdateWorkloadIdentityCommandInput}
 * @returns {@link UpdateWorkloadIdentityCommandOutput}
 * @see {@link UpdateWorkloadIdentityCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkloadIdentityCommandOutput} for command's `response` shape.
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
export class UpdateWorkloadIdentityCommand extends $Command
  .classBuilder<
    UpdateWorkloadIdentityCommandInput,
    UpdateWorkloadIdentityCommandOutput,
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
  .s("AmazonBedrockAgentCoreControl", "UpdateWorkloadIdentity", {})
  .n("BedrockAgentCoreControlClient", "UpdateWorkloadIdentityCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWorkloadIdentityCommand)
  .de(de_UpdateWorkloadIdentityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkloadIdentityRequest;
      output: UpdateWorkloadIdentityResponse;
    };
    sdk: {
      input: UpdateWorkloadIdentityCommandInput;
      output: UpdateWorkloadIdentityCommandOutput;
    };
  };
}
