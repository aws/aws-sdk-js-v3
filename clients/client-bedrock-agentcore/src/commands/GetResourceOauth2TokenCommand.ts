// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentCoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetResourceOauth2TokenRequest,
  GetResourceOauth2TokenRequestFilterSensitiveLog,
  GetResourceOauth2TokenResponse,
  GetResourceOauth2TokenResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetResourceOauth2TokenCommand, se_GetResourceOauth2TokenCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceOauth2TokenCommand}.
 */
export interface GetResourceOauth2TokenCommandInput extends GetResourceOauth2TokenRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceOauth2TokenCommand}.
 */
export interface GetResourceOauth2TokenCommandOutput extends GetResourceOauth2TokenResponse, __MetadataBearer {}

/**
 * <p>Returns the OAuth 2.0 token of the provided resource</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, GetResourceOauth2TokenCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, GetResourceOauth2TokenCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // GetResourceOauth2TokenRequest
 *   workloadIdentityToken: "STRING_VALUE", // required
 *   resourceCredentialProviderName: "STRING_VALUE", // required
 *   scopes: [ // ScopesListType // required
 *     "STRING_VALUE",
 *   ],
 *   oauth2Flow: "USER_FEDERATION" || "M2M", // required
 *   resourceOauth2ReturnUrl: "STRING_VALUE",
 *   forceAuthentication: true || false,
 *   customParameters: { // CustomRequestParametersType
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetResourceOauth2TokenCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceOauth2TokenResponse
 * //   authorizationUrl: "STRING_VALUE",
 * //   accessToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourceOauth2TokenCommandInput - {@link GetResourceOauth2TokenCommandInput}
 * @returns {@link GetResourceOauth2TokenCommandOutput}
 * @see {@link GetResourceOauth2TokenCommandInput} for command's `input` shape.
 * @see {@link GetResourceOauth2TokenCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
 *
 * @throws {@link BedrockAgentCoreServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCore service.</p>
 *
 *
 * @public
 */
export class GetResourceOauth2TokenCommand extends $Command
  .classBuilder<
    GetResourceOauth2TokenCommandInput,
    GetResourceOauth2TokenCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentCore", "GetResourceOauth2Token", {})
  .n("BedrockAgentCoreClient", "GetResourceOauth2TokenCommand")
  .f(GetResourceOauth2TokenRequestFilterSensitiveLog, GetResourceOauth2TokenResponseFilterSensitiveLog)
  .ser(se_GetResourceOauth2TokenCommand)
  .de(de_GetResourceOauth2TokenCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceOauth2TokenRequest;
      output: GetResourceOauth2TokenResponse;
    };
    sdk: {
      input: GetResourceOauth2TokenCommandInput;
      output: GetResourceOauth2TokenCommandOutput;
    };
  };
}
