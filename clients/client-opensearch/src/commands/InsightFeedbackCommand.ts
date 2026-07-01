// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InsightFeedbackRequest, InsightFeedbackResponse } from "../models/models_0";
import { InsightFeedback$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link InsightFeedbackCommand}.
 */
export interface InsightFeedbackCommandInput extends InsightFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link InsightFeedbackCommand}.
 */
export interface InsightFeedbackCommandOutput extends InsightFeedbackResponse, __MetadataBearer {}

/**
 * <p>Submits feedback for an existing insight in an Amazon OpenSearch Service domain.
 *             Allows users to provide a thumbs up or thumbs down rating and optional text feedback
 *             for a specific insight.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, InsightFeedbackCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, InsightFeedbackCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // InsightFeedbackRequest
 *   Entity: { // InsightFeedbackEntity
 *     Type: "DomainName", // required
 *     Value: "STRING_VALUE", // required
 *   },
 *   InsightId: "STRING_VALUE", // required
 *   Thumbs: "Up" || "Down", // required
 *   FeedbackText: "STRING_VALUE",
 * };
 * const command = new InsightFeedbackCommand(input);
 * const response = await client.send(command);
 * // { // InsightFeedbackResponse
 * //   Status: "SUCCESS" || "ERROR",
 * // };
 *
 * ```
 *
 * @param InsightFeedbackCommandInput - {@link InsightFeedbackCommandInput}
 * @returns {@link InsightFeedbackCommandOutput}
 * @see {@link InsightFeedbackCommandInput} for command's `input` shape.
 * @see {@link InsightFeedbackCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class InsightFeedbackCommand extends command<InsightFeedbackCommandInput, InsightFeedbackCommandOutput>(
  _ep0,
  _mw0,
  "InsightFeedback",
  InsightFeedback$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InsightFeedbackRequest;
      output: InsightFeedbackResponse;
    };
    sdk: {
      input: InsightFeedbackCommandInput;
      output: InsightFeedbackCommandOutput;
    };
  };
}
