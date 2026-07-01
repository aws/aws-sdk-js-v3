// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeInsightDetailsRequest, DescribeInsightDetailsResponse } from "../models/models_0";
import { DescribeInsightDetails$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeInsightDetailsCommand}.
 */
export interface DescribeInsightDetailsCommandInput extends DescribeInsightDetailsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInsightDetailsCommand}.
 */
export interface DescribeInsightDetailsCommandOutput extends DescribeInsightDetailsResponse, __MetadataBearer {}

/**
 * <p>Describes the details of an existing insight for an Amazon OpenSearch Service domain.
 *             Returns detailed fields associated with the specified insight, such as text descriptions
 *             and metric data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeInsightDetailsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeInsightDetailsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // DescribeInsightDetailsRequest
 *   Entity: { // InsightEntity
 *     Type: "Account" || "DomainName", // required
 *     Value: "STRING_VALUE",
 *   },
 *   InsightId: "STRING_VALUE", // required
 *   ShowHtmlContent: true || false,
 * };
 * const command = new DescribeInsightDetailsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInsightDetailsResponse
 * //   Fields: [ // InsightFieldList // required
 * //     { // InsightField
 * //       Name: "STRING_VALUE", // required
 * //       Type: "text" || "metric", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeInsightDetailsCommandInput - {@link DescribeInsightDetailsCommandInput}
 * @returns {@link DescribeInsightDetailsCommandOutput}
 * @see {@link DescribeInsightDetailsCommandInput} for command's `input` shape.
 * @see {@link DescribeInsightDetailsCommandOutput} for command's `response` shape.
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
export class DescribeInsightDetailsCommand extends command<DescribeInsightDetailsCommandInput, DescribeInsightDetailsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeInsightDetails",
  DescribeInsightDetails$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInsightDetailsRequest;
      output: DescribeInsightDetailsResponse;
    };
    sdk: {
      input: DescribeInsightDetailsCommandInput;
      output: DescribeInsightDetailsCommandOutput;
    };
  };
}
