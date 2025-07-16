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
import { SetTokenVaultCMKRequest, SetTokenVaultCMKResponse } from "../models/models_0";
import { de_SetTokenVaultCMKCommand, se_SetTokenVaultCMKCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetTokenVaultCMKCommand}.
 */
export interface SetTokenVaultCMKCommandInput extends SetTokenVaultCMKRequest {}
/**
 * @public
 *
 * The output of {@link SetTokenVaultCMKCommand}.
 */
export interface SetTokenVaultCMKCommandOutput extends SetTokenVaultCMKResponse, __MetadataBearer {}

/**
 * <p>Sets the customer master key (CMK) for a token vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, SetTokenVaultCMKCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, SetTokenVaultCMKCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // SetTokenVaultCMKRequest
 *   tokenVaultId: "STRING_VALUE",
 *   kmsConfiguration: { // KmsConfiguration
 *     keyType: "CustomerManagedKey" || "ServiceManagedKey", // required
 *     kmsKeyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new SetTokenVaultCMKCommand(input);
 * const response = await client.send(command);
 * // { // SetTokenVaultCMKResponse
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
 * @param SetTokenVaultCMKCommandInput - {@link SetTokenVaultCMKCommandInput}
 * @returns {@link SetTokenVaultCMKCommandOutput}
 * @see {@link SetTokenVaultCMKCommandInput} for command's `input` shape.
 * @see {@link SetTokenVaultCMKCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown when a resource is modified concurrently by multiple requests.</p>
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
export class SetTokenVaultCMKCommand extends $Command
  .classBuilder<
    SetTokenVaultCMKCommandInput,
    SetTokenVaultCMKCommandOutput,
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
  .s("AmazonBedrockAgentCoreControl", "SetTokenVaultCMK", {})
  .n("BedrockAgentCoreControlClient", "SetTokenVaultCMKCommand")
  .f(void 0, void 0)
  .ser(se_SetTokenVaultCMKCommand)
  .de(de_SetTokenVaultCMKCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetTokenVaultCMKRequest;
      output: SetTokenVaultCMKResponse;
    };
    sdk: {
      input: SetTokenVaultCMKCommandInput;
      output: SetTokenVaultCMKCommandOutput;
    };
  };
}
