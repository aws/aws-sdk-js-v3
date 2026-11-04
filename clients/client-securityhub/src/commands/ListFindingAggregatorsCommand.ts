// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFindingAggregatorsRequest, ListFindingAggregatorsResponse } from "../models/models_3";
import { ListFindingAggregators$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFindingAggregatorsCommand}.
 */
export interface ListFindingAggregatorsCommandInput extends ListFindingAggregatorsRequest {}
/**
 * @public
 *
 * The output of {@link ListFindingAggregatorsCommand}.
 */
export interface ListFindingAggregatorsCommandOutput extends ListFindingAggregatorsResponse, __MetadataBearer {}

/**
 * If cross-Region aggregation is enabled, then `ListFindingAggregators` returns the Amazon Resource Name (ARN) of the finding aggregator. You can run this operation from any Amazon Web Services Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListFindingAggregatorsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListFindingAggregatorsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // ListFindingAggregatorsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFindingAggregatorsCommand(input);
 * const response = await client.send(command);
 * // { // ListFindingAggregatorsResponse
 * //   FindingAggregators: [ // FindingAggregatorList
 * //     { // FindingAggregator
 * //       FindingAggregatorArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFindingAggregatorsCommandInput - {@link ListFindingAggregatorsCommandInput}
 * @returns {@link ListFindingAggregatorsCommandOutput}
 * @see {@link ListFindingAggregatorsCommandInput} for command's `input` shape.
 * @see {@link ListFindingAggregatorsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permission to perform the action specified in the request.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link InvalidAccessException} (client fault)
 *
 * The account doesn't have permission to perform this action.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because you supplied an invalid or out-of-range value for an input parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account or throttling limits. The error code describes the limit exceeded.
 *
 * @throws {@link SecurityHubServiceException}
 *
 * Base exception class for all service exceptions from SecurityHub service.
 *
 * @example To update the enablement status of a standard control
 * ```javascript
 * // The following example disables the specified control in the specified security standard.
 * const input = { /* empty *\/ };
 * const command = new ListFindingAggregatorsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   FindingAggregators: [
 *     {
 *       FindingAggregatorArn: "arn:aws:securityhub:us-east-1:222222222222:finding-aggregator/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListFindingAggregatorsCommand extends command<ListFindingAggregatorsCommandInput, ListFindingAggregatorsCommandOutput>(
  _ep0,
  _mw0,
  "ListFindingAggregators",
  ListFindingAggregators$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFindingAggregatorsRequest;
      output: ListFindingAggregatorsResponse;
    };
    sdk: {
      input: ListFindingAggregatorsCommandInput;
      output: ListFindingAggregatorsCommandOutput;
    };
  };
}
