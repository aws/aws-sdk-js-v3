// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPromptRoutersRequest, ListPromptRoutersResponse } from "../models/models_1";
import { ListPromptRouters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPromptRoutersCommand}.
 */
export interface ListPromptRoutersCommandInput extends ListPromptRoutersRequest {}
/**
 * @public
 *
 * The output of {@link ListPromptRoutersCommand}.
 */
export interface ListPromptRoutersCommandOutput extends ListPromptRoutersResponse, __MetadataBearer {}

/**
 * Retrieves a list of prompt routers.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListPromptRoutersCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListPromptRoutersCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // ListPromptRoutersRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   type: "custom" || "default",
 * };
 * const command = new ListPromptRoutersCommand(input);
 * const response = await client.send(command);
 * // { // ListPromptRoutersResponse
 * //   promptRouterSummaries: [ // PromptRouterSummaries
 * //     { // PromptRouterSummary
 * //       promptRouterName: "STRING_VALUE", // required
 * //       routingCriteria: { // RoutingCriteria
 * //         responseQualityDifference: Number("double"), // required
 * //       },
 * //       description: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       promptRouterArn: "STRING_VALUE", // required
 * //       models: [ // PromptRouterTargetModels // required
 * //         { // PromptRouterTargetModel
 * //           modelArn: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       fallbackModel: {
 * //         modelArn: "STRING_VALUE", // required
 * //       },
 * //       status: "AVAILABLE", // required
 * //       type: "custom" || "default", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPromptRoutersCommandInput - {@link ListPromptRoutersCommandInput}
 * @returns {@link ListPromptRoutersCommandOutput}
 * @see {@link ListPromptRoutersCommandInput} for command's `input` shape.
 * @see {@link ListPromptRoutersCommandOutput} for command's `response` shape.
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
export class ListPromptRoutersCommand extends command<ListPromptRoutersCommandInput, ListPromptRoutersCommandOutput>(
  _ep0,
  _mw0,
  "ListPromptRouters",
  ListPromptRouters$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPromptRoutersRequest;
      output: ListPromptRoutersResponse;
    };
    sdk: {
      input: ListPromptRoutersCommandInput;
      output: ListPromptRoutersCommandOutput;
    };
  };
}
