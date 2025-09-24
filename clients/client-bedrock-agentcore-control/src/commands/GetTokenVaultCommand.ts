// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTokenVaultRequest, GetTokenVaultResponse } from "../models/models_0";
import { GetTokenVault } from "../schemas/schemas_12_Gateway";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTokenVaultCommand}.
 */
export interface GetTokenVaultCommandInput extends GetTokenVaultRequest {}
/**
 * @public
 *
 * The output of {@link GetTokenVaultCommand}.
 */
export interface GetTokenVaultCommandOutput extends GetTokenVaultResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a token vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetTokenVaultCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetTokenVaultCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetTokenVaultRequest
 *   tokenVaultId: "STRING_VALUE",
 * };
 * const command = new GetTokenVaultCommand(input);
 * const response = await client.send(command);
 * // { // GetTokenVaultResponse
 * //   tokenVaultId: "STRING_VALUE", // required
 * //   kmsConfiguration: { // KmsConfiguration
 * //     keyType: "CustomerManagedKey" || "ServiceManagedKey", // required
 * //     kmsKeyArn: "STRING_VALUE",
 * //   },
 * //   lastModifiedDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetTokenVaultCommandInput - {@link GetTokenVaultCommandInput}
 * @returns {@link GetTokenVaultCommandOutput}
 * @see {@link GetTokenVaultCommandInput} for command's `input` shape.
 * @see {@link GetTokenVaultCommandOutput} for command's `response` shape.
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
export class GetTokenVaultCommand extends $Command
  .classBuilder<
    GetTokenVaultCommandInput,
    GetTokenVaultCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetTokenVault", {})
  .n("BedrockAgentCoreControlClient", "GetTokenVaultCommand")
  .sc(GetTokenVault)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTokenVaultRequest;
      output: GetTokenVaultResponse;
    };
    sdk: {
      input: GetTokenVaultCommandInput;
      output: GetTokenVaultCommandOutput;
    };
  };
}
