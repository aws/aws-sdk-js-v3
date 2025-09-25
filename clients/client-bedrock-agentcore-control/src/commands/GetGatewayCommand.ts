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
import { GetGatewayRequest, GetGatewayResponse } from "../models/models_0";
import { GetGateway } from "../schemas/schemas_13_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGatewayCommand}.
 */
export interface GetGatewayCommandInput extends GetGatewayRequest {}
/**
 * @public
 *
 * The output of {@link GetGatewayCommand}.
 */
export interface GetGatewayCommandOutput extends GetGatewayResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific Gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetGatewayCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetGatewayCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetGatewayRequest
 *   gatewayIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetGatewayCommand(input);
 * const response = await client.send(command);
 * // { // GetGatewayResponse
 * //   gatewayArn: "STRING_VALUE", // required
 * //   gatewayId: "STRING_VALUE", // required
 * //   gatewayUrl: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "UPDATING" || "UPDATE_UNSUCCESSFUL" || "DELETING" || "READY" || "FAILED", // required
 * //   statusReasons: [ // StatusReasons
 * //     "STRING_VALUE",
 * //   ],
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * //   protocolType: "MCP", // required
 * //   protocolConfiguration: { // GatewayProtocolConfiguration Union: only one key present
 * //     mcp: { // MCPGatewayConfiguration
 * //       supportedVersions: [ // McpSupportedVersions
 * //         "STRING_VALUE",
 * //       ],
 * //       instructions: "STRING_VALUE",
 * //       searchType: "SEMANTIC",
 * //     },
 * //   },
 * //   authorizerType: "CUSTOM_JWT", // required
 * //   authorizerConfiguration: { // AuthorizerConfiguration Union: only one key present
 * //     customJWTAuthorizer: { // CustomJWTAuthorizerConfiguration
 * //       discoveryUrl: "STRING_VALUE", // required
 * //       allowedAudience: [ // AllowedAudienceList
 * //         "STRING_VALUE",
 * //       ],
 * //       allowedClients: [ // AllowedClientsList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   kmsKeyArn: "STRING_VALUE",
 * //   workloadIdentityDetails: { // WorkloadIdentityDetails
 * //     workloadIdentityArn: "STRING_VALUE", // required
 * //   },
 * //   exceptionLevel: "DEBUG",
 * // };
 *
 * ```
 *
 * @param GetGatewayCommandInput - {@link GetGatewayCommandInput}
 * @returns {@link GetGatewayCommandOutput}
 * @see {@link GetGatewayCommandInput} for command's `input` shape.
 * @see {@link GetGatewayCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class GetGatewayCommand extends $Command
  .classBuilder<
    GetGatewayCommandInput,
    GetGatewayCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetGateway", {})
  .n("BedrockAgentCoreControlClient", "GetGatewayCommand")
  .sc(GetGateway)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGatewayRequest;
      output: GetGatewayResponse;
    };
    sdk: {
      input: GetGatewayCommandInput;
      output: GetGatewayCommandOutput;
    };
  };
}
