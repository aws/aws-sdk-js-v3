// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCustomModelsRequest, ListCustomModelsResponse } from "../models/models_0";
import { ListCustomModels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCustomModelsCommand}.
 */
export interface ListCustomModelsCommandInput extends ListCustomModelsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomModelsCommand}.
 */
export interface ListCustomModelsCommandOutput extends ListCustomModelsResponse, __MetadataBearer {}

/**
 * Returns a list of the custom models that you have created with the `CreateModelCustomizationJob` operation.
 *
 * For more information, see [Custom models](https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListCustomModelsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListCustomModelsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // ListCustomModelsRequest
 *   creationTimeBefore: new Date("TIMESTAMP"),
 *   creationTimeAfter: new Date("TIMESTAMP"),
 *   nameContains: "STRING_VALUE",
 *   baseModelArnEquals: "STRING_VALUE",
 *   foundationModelArnEquals: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortBy: "CreationTime",
 *   sortOrder: "Ascending" || "Descending",
 *   isOwned: true || false,
 *   modelStatus: "Active" || "Creating" || "Failed",
 * };
 * const command = new ListCustomModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomModelsResponse
 * //   nextToken: "STRING_VALUE",
 * //   modelSummaries: [ // CustomModelSummaryList
 * //     { // CustomModelSummary
 * //       modelArn: "STRING_VALUE", // required
 * //       modelName: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       baseModelArn: "STRING_VALUE", // required
 * //       baseModelName: "STRING_VALUE", // required
 * //       customizationType: "FINE_TUNING" || "CONTINUED_PRE_TRAINING" || "DISTILLATION" || "REINFORCEMENT_FINE_TUNING" || "IMPORTED",
 * //       ownerAccountId: "STRING_VALUE",
 * //       modelStatus: "Active" || "Creating" || "Failed",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCustomModelsCommandInput - {@link ListCustomModelsCommandInput}
 * @returns {@link ListCustomModelsCommandOutput}
 * @see {@link ListCustomModelsCommandInput} for command's `input` shape.
 * @see {@link ListCustomModelsCommandOutput} for command's `response` shape.
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
export class ListCustomModelsCommand extends command<ListCustomModelsCommandInput, ListCustomModelsCommandOutput>(
  _ep0,
  _mw0,
  "ListCustomModels",
  ListCustomModels$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomModelsRequest;
      output: ListCustomModelsResponse;
    };
    sdk: {
      input: ListCustomModelsCommandInput;
      output: ListCustomModelsCommandOutput;
    };
  };
}
