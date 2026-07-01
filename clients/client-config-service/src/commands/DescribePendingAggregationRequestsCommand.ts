// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribePendingAggregationRequestsRequest,
  DescribePendingAggregationRequestsResponse,
} from "../models/models_0";
import { DescribePendingAggregationRequests$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribePendingAggregationRequestsCommand}.
 */
export interface DescribePendingAggregationRequestsCommandInput extends DescribePendingAggregationRequestsRequest {}
/**
 * @public
 *
 * The output of {@link DescribePendingAggregationRequestsCommand}.
 */
export interface DescribePendingAggregationRequestsCommandOutput extends DescribePendingAggregationRequestsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all pending aggregation requests.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribePendingAggregationRequestsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribePendingAggregationRequestsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribePendingAggregationRequestsRequest
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribePendingAggregationRequestsCommand(input);
 * const response = await client.send(command);
 * // { // DescribePendingAggregationRequestsResponse
 * //   PendingAggregationRequests: [ // PendingAggregationRequestList
 * //     { // PendingAggregationRequest
 * //       RequesterAccountId: "STRING_VALUE",
 * //       RequesterAwsRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePendingAggregationRequestsCommandInput - {@link DescribePendingAggregationRequestsCommandInput}
 * @returns {@link DescribePendingAggregationRequestsCommandOutput}
 * @see {@link DescribePendingAggregationRequestsCommandInput} for command's `input` shape.
 * @see {@link DescribePendingAggregationRequestsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class DescribePendingAggregationRequestsCommand extends command<DescribePendingAggregationRequestsCommandInput, DescribePendingAggregationRequestsCommandOutput>(
  _ep0,
  _mw0,
  "DescribePendingAggregationRequests",
  DescribePendingAggregationRequests$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePendingAggregationRequestsRequest;
      output: DescribePendingAggregationRequestsResponse;
    };
    sdk: {
      input: DescribePendingAggregationRequestsCommandInput;
      output: DescribePendingAggregationRequestsCommandOutput;
    };
  };
}
