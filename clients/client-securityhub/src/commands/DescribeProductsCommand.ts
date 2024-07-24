// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeProductsRequest, DescribeProductsResponse } from "../models/models_2";
import { de_DescribeProductsCommand, se_DescribeProductsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProductsCommand}.
 */
export interface DescribeProductsCommandInput extends DescribeProductsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProductsCommand}.
 */
export interface DescribeProductsCommandOutput extends DescribeProductsResponse, __MetadataBearer {}

/**
 * <p>Returns information about product integrations in Security Hub.</p>
 *          <p>You can optionally provide an integration ARN. If you provide an integration ARN, then
 *          the results only include that integration.</p>
 *          <p>If you do not provide an integration ARN, then the results include all of the available
 *          product integrations. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeProductsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeProductsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // DescribeProductsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ProductArn: "STRING_VALUE",
 * };
 * const command = new DescribeProductsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProductsResponse
 * //   Products: [ // ProductsList // required
 * //     { // Product
 * //       ProductArn: "STRING_VALUE", // required
 * //       ProductName: "STRING_VALUE",
 * //       CompanyName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Categories: [ // CategoryList
 * //         "STRING_VALUE",
 * //       ],
 * //       IntegrationTypes: [ // IntegrationTypeList
 * //         "SEND_FINDINGS_TO_SECURITY_HUB" || "RECEIVE_FINDINGS_FROM_SECURITY_HUB" || "UPDATE_FINDINGS_IN_SECURITY_HUB",
 * //       ],
 * //       MarketplaceUrl: "STRING_VALUE",
 * //       ActivationUrl: "STRING_VALUE",
 * //       ProductSubscriptionResourcePolicy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeProductsCommandInput - {@link DescribeProductsCommandInput}
 * @returns {@link DescribeProductsCommandOutput}
 * @see {@link DescribeProductsCommandInput} for command's `input` shape.
 * @see {@link DescribeProductsCommandOutput} for command's `response` shape.
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
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @public
 */
export class DescribeProductsCommand extends $Command
  .classBuilder<
    DescribeProductsCommandInput,
    DescribeProductsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "DescribeProducts", {})
  .n("SecurityHubClient", "DescribeProductsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeProductsCommand)
  .de(de_DescribeProductsCommand)
  .build() {}
