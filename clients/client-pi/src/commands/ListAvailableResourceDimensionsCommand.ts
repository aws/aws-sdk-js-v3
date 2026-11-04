// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListAvailableResourceDimensionsRequest,
  ListAvailableResourceDimensionsResponse,
} from "../models/models_0";
import { ListAvailableResourceDimensions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAvailableResourceDimensionsCommand}.
 */
export interface ListAvailableResourceDimensionsCommandInput extends ListAvailableResourceDimensionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAvailableResourceDimensionsCommand}.
 */
export interface ListAvailableResourceDimensionsCommandOutput extends ListAvailableResourceDimensionsResponse, __MetadataBearer {}

/**
 * Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, ListAvailableResourceDimensionsCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, ListAvailableResourceDimensionsCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * // import type { PIClientConfig } from "@aws-sdk/client-pi";
 * const config = {}; // type is PIClientConfig
 * const client = new PIClient(config);
 * const input = { // ListAvailableResourceDimensionsRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   Metrics: [ // DimensionsMetricList // required
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   AuthorizedActions: [ // AuthorizedActionsList
 *     "DescribeDimensionKeys" || "GetDimensionKeyDetails" || "GetResourceMetrics",
 *   ],
 * };
 * const command = new ListAvailableResourceDimensionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailableResourceDimensionsResponse
 * //   MetricDimensions: [ // MetricDimensionsList
 * //     { // MetricDimensionGroups
 * //       Metric: "STRING_VALUE",
 * //       Groups: [ // DimensionGroupDetailList
 * //         { // DimensionGroupDetail
 * //           Group: "STRING_VALUE",
 * //           Dimensions: [ // DimensionDetailList
 * //             { // DimensionDetail
 * //               Identifier: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAvailableResourceDimensionsCommandInput - {@link ListAvailableResourceDimensionsCommandInput}
 * @returns {@link ListAvailableResourceDimensionsCommandOutput}
 * @see {@link ListAvailableResourceDimensionsCommandInput} for command's `input` shape.
 * @see {@link ListAvailableResourceDimensionsCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *
 * The request failed due to an unknown error.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * One of the arguments provided is invalid for this request.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * The user is not authorized to perform this request.
 *
 * @throws {@link PIServiceException}
 *
 * Base exception class for all service exceptions from PI service.
 *
 * @public
 */
export class ListAvailableResourceDimensionsCommand extends command<ListAvailableResourceDimensionsCommandInput, ListAvailableResourceDimensionsCommandOutput>(
  _ep0,
  _mw0,
  "ListAvailableResourceDimensions",
  ListAvailableResourceDimensions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAvailableResourceDimensionsRequest;
      output: ListAvailableResourceDimensionsResponse;
    };
    sdk: {
      input: ListAvailableResourceDimensionsCommandInput;
      output: ListAvailableResourceDimensionsCommandOutput;
    };
  };
}
