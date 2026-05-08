// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockDataAutomationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockDataAutomationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListDataAutomationLibraryEntitiesRequest,
  ListDataAutomationLibraryEntitiesResponse,
} from "../models/models_0";
import { ListDataAutomationLibraryEntities$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataAutomationLibraryEntitiesCommand}.
 */
export interface ListDataAutomationLibraryEntitiesCommandInput extends ListDataAutomationLibraryEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListDataAutomationLibraryEntitiesCommand}.
 */
export interface ListDataAutomationLibraryEntitiesCommandOutput extends ListDataAutomationLibraryEntitiesResponse, __MetadataBearer {}

/**
 * Lists all stored entities in the library
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, ListDataAutomationLibraryEntitiesCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, ListDataAutomationLibraryEntitiesCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // ListDataAutomationLibraryEntitiesRequest
 *   libraryArn: "STRING_VALUE", // required
 *   entityType: "VOCABULARY", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDataAutomationLibraryEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListDataAutomationLibraryEntitiesResponse
 * //   entities: [ // DataAutomationLibraryEntitySummaries
 * //     { // DataAutomationLibraryEntitySummary Union: only one key present
 * //       vocabulary: { // VocabularyEntitySummary
 * //         entityId: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         language: "EN" || "DE" || "ES" || "FR" || "IT" || "PT" || "JA" || "KO" || "CN" || "TW" || "HK",
 * //         numOfPhrases: Number("int"),
 * //         lastModifiedTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataAutomationLibraryEntitiesCommandInput - {@link ListDataAutomationLibraryEntitiesCommandInput}
 * @returns {@link ListDataAutomationLibraryEntitiesCommandOutput}
 * @see {@link ListDataAutomationLibraryEntitiesCommandInput} for command's `input` shape.
 * @see {@link ListDataAutomationLibraryEntitiesCommandOutput} for command's `response` shape.
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
export class ListDataAutomationLibraryEntitiesCommand extends $Command
  .classBuilder<
    ListDataAutomationLibraryEntitiesCommandInput,
    ListDataAutomationLibraryEntitiesCommandOutput,
    BedrockDataAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockKeystoneBuildTimeService", "ListDataAutomationLibraryEntities", {})
  .n("BedrockDataAutomationClient", "ListDataAutomationLibraryEntitiesCommand")
  .sc(ListDataAutomationLibraryEntities$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataAutomationLibraryEntitiesRequest;
      output: ListDataAutomationLibraryEntitiesResponse;
    };
    sdk: {
      input: ListDataAutomationLibraryEntitiesCommandInput;
      output: ListDataAutomationLibraryEntitiesCommandOutput;
    };
  };
}
