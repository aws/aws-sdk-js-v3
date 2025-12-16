// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockDataAutomationRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockDataAutomationRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { InvokeDataAutomationRequest, InvokeDataAutomationResponse } from "../models/models_0";
import { InvokeDataAutomation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InvokeDataAutomationCommand}.
 */
export interface InvokeDataAutomationCommandInput extends InvokeDataAutomationRequest {}
/**
 * @public
 *
 * The output of {@link InvokeDataAutomationCommand}.
 */
export interface InvokeDataAutomationCommandOutput extends InvokeDataAutomationResponse, __MetadataBearer {}

/**
 * Sync API: Invoke data automation.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationRuntimeClient, InvokeDataAutomationCommand } from "@aws-sdk/client-bedrock-data-automation-runtime"; // ES Modules import
 * // const { BedrockDataAutomationRuntimeClient, InvokeDataAutomationCommand } = require("@aws-sdk/client-bedrock-data-automation-runtime"); // CommonJS import
 * // import type { BedrockDataAutomationRuntimeClientConfig } from "@aws-sdk/client-bedrock-data-automation-runtime";
 * const config = {}; // type is BedrockDataAutomationRuntimeClientConfig
 * const client = new BedrockDataAutomationRuntimeClient(config);
 * const input = { // InvokeDataAutomationRequest
 *   inputConfiguration: { // SyncInputConfiguration
 *     bytes: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     s3Uri: "STRING_VALUE",
 *   },
 *   dataAutomationConfiguration: { // DataAutomationConfiguration
 *     dataAutomationProjectArn: "STRING_VALUE", // required
 *     stage: "LIVE" || "DEVELOPMENT",
 *   },
 *   blueprints: [ // BlueprintList
 *     { // Blueprint
 *       blueprintArn: "STRING_VALUE", // required
 *       version: "STRING_VALUE",
 *       stage: "DEVELOPMENT" || "LIVE",
 *     },
 *   ],
 *   dataAutomationProfileArn: "STRING_VALUE", // required
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     kmsKeyId: "STRING_VALUE", // required
 *     kmsEncryptionContext: { // EncryptionContextMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new InvokeDataAutomationCommand(input);
 * const response = await client.send(command);
 * // { // InvokeDataAutomationResponse
 * //   semanticModality: "DOCUMENT" || "IMAGE" || "AUDIO" || "VIDEO", // required
 * //   outputSegments: [ // OutputSegmentList // required
 * //     { // OutputSegment
 * //       customOutputStatus: "MATCH" || "NO_MATCH",
 * //       customOutput: "STRING_VALUE",
 * //       standardOutput: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param InvokeDataAutomationCommandInput - {@link InvokeDataAutomationCommandInput}
 * @returns {@link InvokeDataAutomationCommandOutput}
 * @see {@link InvokeDataAutomationCommandInput} for command's `input` shape.
 * @see {@link InvokeDataAutomationCommandOutput} for command's `response` shape.
 * @see {@link BedrockDataAutomationRuntimeClientResolvedConfig | config} for BedrockDataAutomationRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception will be thrown when customer does not have access to API.
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is for any internal un-expected service errors.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  This exception will be thrown when service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception will be thrown when customer reached API TPS limit.
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception will be thrown when customer provided invalid parameters.
 *
 * @throws {@link BedrockDataAutomationRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockDataAutomationRuntime service.</p>
 *
 *
 * @public
 */
export class InvokeDataAutomationCommand extends $Command
  .classBuilder<
    InvokeDataAutomationCommandInput,
    InvokeDataAutomationCommandOutput,
    BedrockDataAutomationRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationRuntimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockKeystoneRuntimeService", "InvokeDataAutomation", {})
  .n("BedrockDataAutomationRuntimeClient", "InvokeDataAutomationCommand")
  .sc(InvokeDataAutomation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeDataAutomationRequest;
      output: InvokeDataAutomationResponse;
    };
    sdk: {
      input: InvokeDataAutomationCommandInput;
      output: InvokeDataAutomationCommandOutput;
    };
  };
}
