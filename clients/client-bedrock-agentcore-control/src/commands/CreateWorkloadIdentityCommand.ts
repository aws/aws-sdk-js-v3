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
import { CreateWorkloadIdentityRequest, CreateWorkloadIdentityResponse } from "../models/models_0";
import { de_CreateWorkloadIdentityCommand, se_CreateWorkloadIdentityCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkloadIdentityCommand}.
 */
export interface CreateWorkloadIdentityCommandInput extends CreateWorkloadIdentityRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkloadIdentityCommand}.
 */
export interface CreateWorkloadIdentityCommandOutput extends CreateWorkloadIdentityResponse, __MetadataBearer {}

/**
 * <p>Creates a new workload identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateWorkloadIdentityCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateWorkloadIdentityCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateWorkloadIdentityRequest
 *   name: "STRING_VALUE", // required
 *   allowedResourceOauth2ReturnUrls: [ // ResourceOauth2ReturnUrlListType
 *     "STRING_VALUE",
 *   ],
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateWorkloadIdentityCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkloadIdentityResponse
 * //   name: "STRING_VALUE", // required
 * //   workloadIdentityArn: "STRING_VALUE", // required
 * //   allowedResourceOauth2ReturnUrls: [ // ResourceOauth2ReturnUrlListType
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateWorkloadIdentityCommandInput - {@link CreateWorkloadIdentityCommandInput}
 * @returns {@link CreateWorkloadIdentityCommandOutput}
 * @see {@link CreateWorkloadIdentityCommandInput} for command's `input` shape.
 * @see {@link CreateWorkloadIdentityCommandOutput} for command's `response` shape.
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
export class CreateWorkloadIdentityCommand extends $Command
  .classBuilder<
    CreateWorkloadIdentityCommandInput,
    CreateWorkloadIdentityCommandOutput,
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
  .s("AmazonBedrockAgentCoreControl", "CreateWorkloadIdentity", {})
  .n("BedrockAgentCoreControlClient", "CreateWorkloadIdentityCommand")
  .f(void 0, void 0)
  .ser(se_CreateWorkloadIdentityCommand)
  .de(de_CreateWorkloadIdentityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkloadIdentityRequest;
      output: CreateWorkloadIdentityResponse;
    };
    sdk: {
      input: CreateWorkloadIdentityCommandInput;
      output: CreateWorkloadIdentityCommandOutput;
    };
  };
}
