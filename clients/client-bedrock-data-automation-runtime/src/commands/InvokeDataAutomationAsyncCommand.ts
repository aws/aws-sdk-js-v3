// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockDataAutomationRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockDataAutomationRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { InvokeDataAutomationAsyncRequest, InvokeDataAutomationAsyncResponse } from "../models/models_0";
import { de_InvokeDataAutomationAsyncCommand, se_InvokeDataAutomationAsyncCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InvokeDataAutomationAsyncCommand}.
 */
export interface InvokeDataAutomationAsyncCommandInput extends InvokeDataAutomationAsyncRequest {}
/**
 * @public
 *
 * The output of {@link InvokeDataAutomationAsyncCommand}.
 */
export interface InvokeDataAutomationAsyncCommandOutput extends InvokeDataAutomationAsyncResponse, __MetadataBearer {}

/**
 * Async API: Invoke data automation.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationRuntimeClient, InvokeDataAutomationAsyncCommand } from "@aws-sdk/client-bedrock-data-automation-runtime"; // ES Modules import
 * // const { BedrockDataAutomationRuntimeClient, InvokeDataAutomationAsyncCommand } = require("@aws-sdk/client-bedrock-data-automation-runtime"); // CommonJS import
 * const client = new BedrockDataAutomationRuntimeClient(config);
 * const input = { // InvokeDataAutomationAsyncRequest
 *   clientToken: "STRING_VALUE",
 *   inputConfiguration: { // InputConfiguration
 *     s3Uri: "STRING_VALUE", // required
 *   },
 *   outputConfiguration: { // OutputConfiguration
 *     s3Uri: "STRING_VALUE", // required
 *   },
 *   dataAutomationConfiguration: { // DataAutomationConfiguration
 *     dataAutomationProjectArn: "STRING_VALUE", // required
 *     stage: "LIVE" || "DEVELOPMENT",
 *   },
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     kmsKeyId: "STRING_VALUE", // required
 *     kmsEncryptionContext: { // EncryptionContextMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   notificationConfiguration: { // NotificationConfiguration
 *     eventBridgeConfiguration: { // EventBridgeConfiguration
 *       eventBridgeEnabled: true || false, // required
 *     },
 *   },
 *   blueprints: [ // BlueprintList
 *     { // Blueprint
 *       blueprintArn: "STRING_VALUE", // required
 *       version: "STRING_VALUE",
 *       stage: "DEVELOPMENT" || "LIVE",
 *     },
 *   ],
 *   dataAutomationProfileArn: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new InvokeDataAutomationAsyncCommand(input);
 * const response = await client.send(command);
 * // { // InvokeDataAutomationAsyncResponse
 * //   invocationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param InvokeDataAutomationAsyncCommandInput - {@link InvokeDataAutomationAsyncCommandInput}
 * @returns {@link InvokeDataAutomationAsyncCommandOutput}
 * @see {@link InvokeDataAutomationAsyncCommandInput} for command's `input` shape.
 * @see {@link InvokeDataAutomationAsyncCommandOutput} for command's `response` shape.
 * @see {@link BedrockDataAutomationRuntimeClientResolvedConfig | config} for BedrockDataAutomationRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception will be thrown when customer does not have access to API.
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is for any internal un-expected service errors.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  This exception will be thrown when service quota is exceeded.
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
 * @public
 */
export class InvokeDataAutomationAsyncCommand extends $Command
  .classBuilder<
    InvokeDataAutomationAsyncCommandInput,
    InvokeDataAutomationAsyncCommandOutput,
    BedrockDataAutomationRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockKeystoneRuntimeService", "InvokeDataAutomationAsync", {})
  .n("BedrockDataAutomationRuntimeClient", "InvokeDataAutomationAsyncCommand")
  .f(void 0, void 0)
  .ser(se_InvokeDataAutomationAsyncCommand)
  .de(de_InvokeDataAutomationAsyncCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeDataAutomationAsyncRequest;
      output: InvokeDataAutomationAsyncResponse;
    };
    sdk: {
      input: InvokeDataAutomationAsyncCommandInput;
      output: InvokeDataAutomationAsyncCommandOutput;
    };
  };
}
