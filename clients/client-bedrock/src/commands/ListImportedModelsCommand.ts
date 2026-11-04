// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListImportedModelsRequest, ListImportedModelsResponse } from "../models/models_1";
import { ListImportedModels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListImportedModelsCommand}.
 */
export interface ListImportedModelsCommandInput extends ListImportedModelsRequest {}
/**
 * @public
 *
 * The output of {@link ListImportedModelsCommand}.
 */
export interface ListImportedModelsCommandOutput extends ListImportedModelsResponse, __MetadataBearer {}

/**
 * Returns a list of models you've imported. You can filter the results to return based on one or more criteria. For more information, see [Import a customized model](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListImportedModelsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListImportedModelsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // ListImportedModelsRequest
 *   creationTimeBefore: new Date("TIMESTAMP"),
 *   creationTimeAfter: new Date("TIMESTAMP"),
 *   nameContains: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: "CreationTime",
 *   sortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListImportedModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListImportedModelsResponse
 * //   nextToken: "STRING_VALUE",
 * //   modelSummaries: [ // ImportedModelSummaryList
 * //     { // ImportedModelSummary
 * //       modelArn: "STRING_VALUE", // required
 * //       modelName: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       instructSupported: true || false,
 * //       modelArchitecture: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListImportedModelsCommandInput - {@link ListImportedModelsCommandInput}
 * @returns {@link ListImportedModelsCommandOutput}
 * @see {@link ListImportedModelsCommandInput} for command's `input` shape.
 * @see {@link ListImportedModelsCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class ListImportedModelsCommand extends command<ListImportedModelsCommandInput, ListImportedModelsCommandOutput>(
  _ep0,
  _mw0,
  "ListImportedModels",
  ListImportedModels$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImportedModelsRequest;
      output: ListImportedModelsResponse;
    };
    sdk: {
      input: ListImportedModelsCommandInput;
      output: ListImportedModelsCommandOutput;
    };
  };
}
