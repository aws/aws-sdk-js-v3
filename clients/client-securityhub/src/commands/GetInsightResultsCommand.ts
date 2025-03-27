// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetInsightResultsRequest, GetInsightResultsResponse } from "../models/models_2";
import { de_GetInsightResultsCommand, se_GetInsightResultsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInsightResultsCommand}.
 */
export interface GetInsightResultsCommandInput extends GetInsightResultsRequest {}
/**
 * @public
 *
 * The output of {@link GetInsightResultsCommand}.
 */
export interface GetInsightResultsCommandOutput extends GetInsightResultsResponse, __MetadataBearer {}

/**
 * <p>Lists the results of the Security Hub insight specified by the insight ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetInsightResultsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetInsightResultsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // GetInsightResultsRequest
 *   InsightArn: "STRING_VALUE", // required
 * };
 * const command = new GetInsightResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetInsightResultsResponse
 * //   InsightResults: { // InsightResults
 * //     InsightArn: "STRING_VALUE", // required
 * //     GroupByAttribute: "STRING_VALUE", // required
 * //     ResultValues: [ // InsightResultValueList // required
 * //       { // InsightResultValue
 * //         GroupByAttributeValue: "STRING_VALUE", // required
 * //         Count: Number("int"), // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInsightResultsCommandInput - {@link GetInsightResultsCommandInput}
 * @returns {@link GetInsightResultsCommandOutput}
 * @see {@link GetInsightResultsCommandInput} for command's `input` shape.
 * @see {@link GetInsightResultsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
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
 * @example To get the results of a Security Hub insight
 * ```javascript
 * // The following example returns the results of the Security Hub insight specified by the insight ARN.
 * const input = {
 *   InsightArn: "arn:aws:securityhub:us-west-1:123456789012:insight/123456789012/custom/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * };
 * const command = new GetInsightResultsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InsightResults: {
 *     GroupByAttribute: "ResourceId",
 *     InsightArn: "arn:aws:securityhub:us-west-1:123456789012:insight/123456789012/custom/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *     ResultValues: [
 *       {
 *         Count: 10,
 *         GroupByAttributeValue: "AWS::::Account:111122223333"
 *       },
 *       {
 *         Count: 3,
 *         GroupByAttributeValue: "AWS::::Account:444455556666"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetInsightResultsCommand extends $Command
  .classBuilder<
    GetInsightResultsCommandInput,
    GetInsightResultsCommandOutput,
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
  .s("SecurityHubAPIService", "GetInsightResults", {})
  .n("SecurityHubClient", "GetInsightResultsCommand")
  .f(void 0, void 0)
  .ser(se_GetInsightResultsCommand)
  .de(de_GetInsightResultsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInsightResultsRequest;
      output: GetInsightResultsResponse;
    };
    sdk: {
      input: GetInsightResultsCommandInput;
      output: GetInsightResultsCommandOutput;
    };
  };
}
