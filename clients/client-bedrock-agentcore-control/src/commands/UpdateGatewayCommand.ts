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
import {
  UpdateGatewayRequest,
  UpdateGatewayRequestFilterSensitiveLog,
  UpdateGatewayResponse,
  UpdateGatewayResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateGatewayCommand, se_UpdateGatewayCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGatewayCommand}.
 */
export interface UpdateGatewayCommandInput extends UpdateGatewayRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGatewayCommand}.
 */
export interface UpdateGatewayCommandOutput extends UpdateGatewayResponse, __MetadataBearer {}

/**
 * <p>Updates an existing gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdateGatewayCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdateGatewayCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdateGatewayRequest
 *   gatewayIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   protocolType: "MCP", // required
 *   protocolConfiguration: { // GatewayProtocolConfiguration Union: only one key present
 *     mcp: { // MCPGatewayConfiguration
 *       supportedVersions: [ // McpSupportedVersions
 *         "STRING_VALUE",
 *       ],
 *       instructions: "STRING_VALUE",
 *       searchType: "SEMANTIC",
 *     },
 *   },
 *   authorizerType: "CUSTOM_JWT" || "AWS_IAM", // required
 *   authorizerConfiguration: { // AuthorizerConfiguration Union: only one key present
 *     customJWTAuthorizer: { // CustomJWTAuthorizerConfiguration
 *       discoveryUrl: "STRING_VALUE", // required
 *       allowedAudience: [ // AllowedAudienceList
 *         "STRING_VALUE",
 *       ],
 *       allowedClients: [ // AllowedClientsList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   kmsKeyArn: "STRING_VALUE",
 *   exceptionLevel: "DEBUG",
 * };
 * const command = new UpdateGatewayCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGatewayResponse
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
 * //   authorizerType: "CUSTOM_JWT" || "AWS_IAM", // required
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
 * @param UpdateGatewayCommandInput - {@link UpdateGatewayCommandInput}
 * @returns {@link UpdateGatewayCommandOutput}
 * @see {@link UpdateGatewayCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
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
export class UpdateGatewayCommand extends $Command
  .classBuilder<
    UpdateGatewayCommandInput,
    UpdateGatewayCommandOutput,
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
  .s("AmazonBedrockAgentCoreControl", "UpdateGateway", {})
  .n("BedrockAgentCoreControlClient", "UpdateGatewayCommand")
  .f(UpdateGatewayRequestFilterSensitiveLog, UpdateGatewayResponseFilterSensitiveLog)
  .ser(se_UpdateGatewayCommand)
  .de(de_UpdateGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGatewayRequest;
      output: UpdateGatewayResponse;
    };
    sdk: {
      input: UpdateGatewayCommandInput;
      output: UpdateGatewayCommandOutput;
    };
  };
}
