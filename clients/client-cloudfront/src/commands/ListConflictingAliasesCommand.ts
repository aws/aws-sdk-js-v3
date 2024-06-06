// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListConflictingAliasesRequest, ListConflictingAliasesResult } from "../models/models_1";
import { de_ListConflictingAliasesCommand, se_ListConflictingAliasesCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConflictingAliasesCommand}.
 */
export interface ListConflictingAliasesCommandInput extends ListConflictingAliasesRequest {}
/**
 * @public
 *
 * The output of {@link ListConflictingAliasesCommand}.
 */
export interface ListConflictingAliasesCommandOutput extends ListConflictingAliasesResult, __MetadataBearer {}

/**
 * <p>Gets a list of aliases (also called CNAMEs or alternate domain names) that conflict or
 * 			overlap with the provided alias, and the associated CloudFront distributions and Amazon Web Services
 * 			accounts for each conflicting alias. In the returned list, the distribution and account
 * 			IDs are partially hidden, which allows you to identify the distributions and accounts
 * 			that you own, but helps to protect the information of ones that you don't own.</p>
 *          <p>Use this operation to find aliases that are in use in CloudFront that conflict or overlap
 * 			with the provided alias. For example, if you provide <code>www.example.com</code> as
 * 			input, the returned list can include <code>www.example.com</code> and the overlapping
 * 			wildcard alternate domain name (<code>*.example.com</code>), if they exist. If you
 * 			provide <code>*.example.com</code> as input, the returned list can include
 * 				<code>*.example.com</code> and any alternate domain names covered by that wildcard
 * 			(for example, <code>www.example.com</code>, <code>test.example.com</code>,
 * 				<code>dev.example.com</code>, and so on), if they exist.</p>
 *          <p>To list conflicting aliases, you provide the alias to search and the ID of a
 * 			distribution in your account that has an attached SSL/TLS certificate that includes the
 * 			provided alias. For more information, including how to set up the distribution and
 * 			certificate, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different
 * 				distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *          <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListConflictingAliasesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListConflictingAliasesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // ListConflictingAliasesRequest
 *   DistributionId: "STRING_VALUE", // required
 *   Alias: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListConflictingAliasesCommand(input);
 * const response = await client.send(command);
 * // { // ListConflictingAliasesResult
 * //   ConflictingAliasesList: { // ConflictingAliasesList
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"),
 * //     Quantity: Number("int"),
 * //     Items: [ // ConflictingAliases
 * //       { // ConflictingAlias
 * //         Alias: "STRING_VALUE",
 * //         DistributionId: "STRING_VALUE",
 * //         AccountId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListConflictingAliasesCommandInput - {@link ListConflictingAliasesCommandInput}
 * @returns {@link ListConflictingAliasesCommandOutput}
 * @see {@link ListConflictingAliasesCommandInput} for command's `input` shape.
 * @see {@link ListConflictingAliasesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchDistribution} (client fault)
 *  <p>The specified distribution does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 */
export class ListConflictingAliasesCommand extends $Command
  .classBuilder<
    ListConflictingAliasesCommandInput,
    ListConflictingAliasesCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "ListConflictingAliases", {})
  .n("CloudFrontClient", "ListConflictingAliasesCommand")
  .f(void 0, void 0)
  .ser(se_ListConflictingAliasesCommand)
  .de(de_ListConflictingAliasesCommand)
  .build() {}
