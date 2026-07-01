// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  InvokeDataAutomationLibraryIngestionJobRequest,
  InvokeDataAutomationLibraryIngestionJobResponse,
} from "../models/models_0";
import { InvokeDataAutomationLibraryIngestionJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link InvokeDataAutomationLibraryIngestionJobCommand}.
 */
export interface InvokeDataAutomationLibraryIngestionJobCommandInput extends InvokeDataAutomationLibraryIngestionJobRequest {}
/**
 * @public
 *
 * The output of {@link InvokeDataAutomationLibraryIngestionJobCommand}.
 */
export interface InvokeDataAutomationLibraryIngestionJobCommandOutput extends InvokeDataAutomationLibraryIngestionJobResponse, __MetadataBearer {}

/**
 * Async API: Invoke data automation library ingestion job
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, InvokeDataAutomationLibraryIngestionJobCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, InvokeDataAutomationLibraryIngestionJobCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // InvokeDataAutomationLibraryIngestionJobRequest
 *   libraryArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   inputConfiguration: { // InputConfiguration
 *     s3Object: { // S3Object
 *       s3Uri: "STRING_VALUE", // required
 *       version: "STRING_VALUE",
 *     },
 *     inlinePayload: { // InlinePayload Union: only one key present
 *       upsertEntitiesInfo: [ // UpsertEntitiesInfo
 *         { // UpsertEntityInfo Union: only one key present
 *           vocabulary: { // VocabularyEntityInfo
 *             entityId: "STRING_VALUE",
 *             description: "STRING_VALUE",
 *             language: "EN" || "DE" || "ES" || "FR" || "IT" || "PT" || "JA" || "KO" || "CN" || "TW" || "HK", // required
 *             phrases: [ // PhraseList // required
 *               { // Phrase
 *                 text: "STRING_VALUE", // required
 *                 displayAsText: "STRING_VALUE",
 *               },
 *             ],
 *           },
 *         },
 *       ],
 *       deleteEntitiesInfo: { // DeleteEntitiesInfo
 *         entityIds: [ // EntityIdList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   entityType: "VOCABULARY", // required
 *   operationType: "UPSERT" || "DELETE", // required
 *   outputConfiguration: { // OutputConfiguration
 *     s3Uri: "STRING_VALUE", // required
 *   },
 *   notificationConfiguration: { // NotificationConfiguration
 *     eventBridgeConfiguration: { // EventBridgeConfiguration
 *       eventBridgeEnabled: true || false, // required
 *     },
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new InvokeDataAutomationLibraryIngestionJobCommand(input);
 * const response = await client.send(command);
 * // { // InvokeDataAutomationLibraryIngestionJobResponse
 * //   jobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InvokeDataAutomationLibraryIngestionJobCommandInput - {@link InvokeDataAutomationLibraryIngestionJobCommandInput}
 * @returns {@link InvokeDataAutomationLibraryIngestionJobCommandOutput}
 * @see {@link InvokeDataAutomationLibraryIngestionJobCommandInput} for command's `input` shape.
 * @see {@link InvokeDataAutomationLibraryIngestionJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockDataAutomationClientResolvedConfig | config} for BedrockDataAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *  This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  This exception is thrown when a request is made beyond the service quota
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockDataAutomationServiceException}
 * <p>Base exception class for all service exceptions from BedrockDataAutomation service.</p>
 *
 *
 * @public
 */
export class InvokeDataAutomationLibraryIngestionJobCommand extends command<InvokeDataAutomationLibraryIngestionJobCommandInput, InvokeDataAutomationLibraryIngestionJobCommandOutput>(
  _ep0,
  _mw0,
  "InvokeDataAutomationLibraryIngestionJob",
  InvokeDataAutomationLibraryIngestionJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeDataAutomationLibraryIngestionJobRequest;
      output: InvokeDataAutomationLibraryIngestionJobResponse;
    };
    sdk: {
      input: InvokeDataAutomationLibraryIngestionJobCommandInput;
      output: InvokeDataAutomationLibraryIngestionJobCommandOutput;
    };
  };
}
