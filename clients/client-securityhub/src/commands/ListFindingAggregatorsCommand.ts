// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListFindingAggregatorsRequest, ListFindingAggregatorsResponse } from "../models/models_3";
import { de_ListFindingAggregatorsCommand, se_ListFindingAggregatorsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>If cross-Region aggregation is enabled, then <code>ListFindingAggregators</code> returns the Amazon Resource Name (ARN)
 * of the finding aggregator. You can run this operation from any Amazon Web Services Region.</p>
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
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
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
export class ListFindingAggregatorsCommand extends $Command
  .classBuilder<
    ListFindingAggregatorsCommandInput,
    ListFindingAggregatorsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "ListFindingAggregators", {})
  .n("SecurityHubClient", "ListFindingAggregatorsCommand")
  .f(void 0, void 0)
  .ser(se_ListFindingAggregatorsCommand)
  .de(de_ListFindingAggregatorsCommand)
  .build() {
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
