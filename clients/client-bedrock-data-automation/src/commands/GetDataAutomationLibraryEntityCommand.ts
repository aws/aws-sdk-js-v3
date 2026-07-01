// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDataAutomationLibraryEntityRequest, GetDataAutomationLibraryEntityResponse } from "../models/models_0";
import { GetDataAutomationLibraryEntity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDataAutomationLibraryEntityCommand}.
 */
export interface GetDataAutomationLibraryEntityCommandInput extends GetDataAutomationLibraryEntityRequest {}
/**
 * @public
 *
 * The output of {@link GetDataAutomationLibraryEntityCommand}.
 */
export interface GetDataAutomationLibraryEntityCommandOutput extends GetDataAutomationLibraryEntityResponse, __MetadataBearer {}

/**
 * Gets an existing entity based on entity type from the library
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, GetDataAutomationLibraryEntityCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, GetDataAutomationLibraryEntityCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // GetDataAutomationLibraryEntityRequest
 *   libraryArn: "STRING_VALUE", // required
 *   entityType: "VOCABULARY", // required
 *   entityId: "STRING_VALUE", // required
 * };
 * const command = new GetDataAutomationLibraryEntityCommand(input);
 * const response = await client.send(command);
 * // { // GetDataAutomationLibraryEntityResponse
 * //   entity: { // EntityDetails Union: only one key present
 * //     vocabulary: { // VocabularyEntity
 * //       entityId: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       language: "EN" || "DE" || "ES" || "FR" || "IT" || "PT" || "JA" || "KO" || "CN" || "TW" || "HK",
 * //       phrases: [ // PhraseList
 * //         { // Phrase
 * //           text: "STRING_VALUE", // required
 * //           displayAsText: "STRING_VALUE",
 * //         },
 * //       ],
 * //       lastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataAutomationLibraryEntityCommandInput - {@link GetDataAutomationLibraryEntityCommandInput}
 * @returns {@link GetDataAutomationLibraryEntityCommandOutput}
 * @see {@link GetDataAutomationLibraryEntityCommandInput} for command's `input` shape.
 * @see {@link GetDataAutomationLibraryEntityCommandOutput} for command's `response` shape.
 * @see {@link BedrockDataAutomationClientResolvedConfig | config} for BedrockDataAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
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
export class GetDataAutomationLibraryEntityCommand extends command<GetDataAutomationLibraryEntityCommandInput, GetDataAutomationLibraryEntityCommandOutput>(
  _ep0,
  _mw0,
  "GetDataAutomationLibraryEntity",
  GetDataAutomationLibraryEntity$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataAutomationLibraryEntityRequest;
      output: GetDataAutomationLibraryEntityResponse;
    };
    sdk: {
      input: GetDataAutomationLibraryEntityCommandInput;
      output: GetDataAutomationLibraryEntityCommandOutput;
    };
  };
}
