// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFindingAggregatorRequest, DeleteFindingAggregatorResponse } from "../models/models_2";
import { de_DeleteFindingAggregatorCommand, se_DeleteFindingAggregatorCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFindingAggregatorCommand}.
 */
export interface DeleteFindingAggregatorCommandInput extends DeleteFindingAggregatorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFindingAggregatorCommand}.
 */
export interface DeleteFindingAggregatorCommandOutput extends DeleteFindingAggregatorResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>The <i>aggregation Region</i> is now called the <i>home Region</i>.</p>
 *          </note>
 *          <p>Deletes a finding aggregator. When you delete the finding aggregator, you stop cross-Region aggregation. Finding replication stops
 * occurring from the linked Regions to the home Region.</p>
 *          <p>When you stop cross-Region aggregation, findings that were already replicated and sent to the home Region are still visible from
 *         the home Region. However, new findings and finding updates are no longer replicated and sent to the home Region.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteFindingAggregatorCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteFindingAggregatorCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // DeleteFindingAggregatorRequest
 *   FindingAggregatorArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteFindingAggregatorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFindingAggregatorCommandInput - {@link DeleteFindingAggregatorCommandInput}
 * @returns {@link DeleteFindingAggregatorCommandOutput}
 * @see {@link DeleteFindingAggregatorCommandInput} for command's `input` shape.
 * @see {@link DeleteFindingAggregatorCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To delete a finding aggregator
 * ```javascript
 * // The following example deletes a finding aggregator in Security Hub. Deleting the finding aggregator stops cross-Region aggregation. This operation produces no output.
 * const input = {
 *   FindingAggregatorArn: "arn:aws:securityhub:us-east-1:123456789012:finding-aggregator/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * };
 * const command = new DeleteFindingAggregatorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteFindingAggregatorCommand extends $Command
  .classBuilder<
    DeleteFindingAggregatorCommandInput,
    DeleteFindingAggregatorCommandOutput,
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
  .s("SecurityHubAPIService", "DeleteFindingAggregator", {})
  .n("SecurityHubClient", "DeleteFindingAggregatorCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFindingAggregatorCommand)
  .de(de_DeleteFindingAggregatorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFindingAggregatorRequest;
      output: {};
    };
    sdk: {
      input: DeleteFindingAggregatorCommandInput;
      output: DeleteFindingAggregatorCommandOutput;
    };
  };
}
