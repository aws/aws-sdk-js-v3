// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InvokeDataAutomationAsyncRequest, InvokeDataAutomationAsyncResponse } from "../models/models_0";
import { InvokeDataAutomationAsync$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { BedrockDataAutomationRuntimeClientConfig } from "@aws-sdk/client-bedrock-data-automation-runtime";
 * const config = {}; // type is BedrockDataAutomationRuntimeClientConfig
 * const client = new BedrockDataAutomationRuntimeClient(config);
 * const input = { // InvokeDataAutomationAsyncRequest
 *   clientToken: "STRING_VALUE",
 *   inputConfiguration: { // InputConfiguration
 *     s3Uri: "STRING_VALUE", // required
 *     assetProcessingConfiguration: { // AssetProcessingConfiguration
 *       video: { // VideoAssetProcessingConfiguration
 *         segmentConfiguration: { // VideoSegmentConfiguration Union: only one key present
 *           timestampSegment: { // TimestampSegment
 *             startTimeMillis: Number("long"), // required
 *             endTimeMillis: Number("long"), // required
 *           },
 *         },
 *       },
 *     },
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
 *
 * @public
 */
export class InvokeDataAutomationAsyncCommand extends command<InvokeDataAutomationAsyncCommandInput, InvokeDataAutomationAsyncCommandOutput>(
  _ep0,
  _mw0,
  "InvokeDataAutomationAsync",
  InvokeDataAutomationAsync$
) {
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
