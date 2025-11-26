// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
<<<<<<< HEAD
import { GetWorkloadIdentityRequest, GetWorkloadIdentityResponse } from "../models/models_1";
=======
import type { GetWorkloadIdentityRequest, GetWorkloadIdentityResponse } from "../models/models_0";
>>>>>>> 60efd81940b (chore: codegen)
import { GetWorkloadIdentity } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkloadIdentityCommand}.
 */
export interface GetWorkloadIdentityCommandInput extends GetWorkloadIdentityRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkloadIdentityCommand}.
 */
export interface GetWorkloadIdentityCommandOutput extends GetWorkloadIdentityResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a workload identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetWorkloadIdentityCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetWorkloadIdentityCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetWorkloadIdentityRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetWorkloadIdentityCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkloadIdentityResponse
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
 * @param GetWorkloadIdentityCommandInput - {@link GetWorkloadIdentityCommandInput}
 * @returns {@link GetWorkloadIdentityCommandOutput}
 * @see {@link GetWorkloadIdentityCommandInput} for command's `input` shape.
 * @see {@link GetWorkloadIdentityCommandOutput} for command's `response` shape.
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
export class GetWorkloadIdentityCommand extends $Command
  .classBuilder<
    GetWorkloadIdentityCommandInput,
    GetWorkloadIdentityCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetWorkloadIdentity", {})
  .n("BedrockAgentCoreControlClient", "GetWorkloadIdentityCommand")
  .sc(GetWorkloadIdentity)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkloadIdentityRequest;
      output: GetWorkloadIdentityResponse;
    };
    sdk: {
      input: GetWorkloadIdentityCommandInput;
      output: GetWorkloadIdentityCommandOutput;
    };
  };
}
