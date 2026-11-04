// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListConflictingAliasesRequest, ListConflictingAliasesResult } from "../models/models_1";
import { ListConflictingAliases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Note:** The `ListConflictingAliases` API operation only supports standard distributions. To list domain conflicts for both standard distributions and distribution tenants, we recommend that you use the [ListDomainConflicts](https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ListDomainConflicts.html) API operation instead.
 *
 * Gets a list of aliases that conflict or overlap with the provided alias, and the associated CloudFront standard distribution and Amazon Web Services accounts for each conflicting alias. An alias is commonly known as a custom domain or vanity domain. It can also be called a CNAME or alternate domain name.
 *
 * In the returned list, the standard distribution and account IDs are partially hidden, which allows you to identify the standard distribution and accounts that you own, and helps to protect the information of ones that you don't own.
 *
 * Use this operation to find aliases that are in use in CloudFront that conflict or overlap with the provided alias. For example, if you provide `www.example.com` as input, the returned list can include `www.example.com` and the overlapping wildcard alternate domain name (`*.example.com`), if they exist. If you provide `*.example.com` as input, the returned list can include `*.example.com` and any alternate domain names covered by that wildcard (for example, `www.example.com`, `test.example.com`, `dev.example.com`, and so on), if they exist.
 *
 * To list conflicting aliases, specify the alias to search and the ID of a standard distribution in your account that has an attached TLS certificate that includes the provided alias. For more information, including how to set up the standard distribution and certificate, see [Moving an alternate domain name to a different standard distribution or distribution tenant](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move) in the *Amazon CloudFront Developer Guide*.
 *
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the `NextMarker` value from the current response as the `Marker` value in the subsequent request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListConflictingAliasesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListConflictingAliasesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
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
 *
 * An argument is invalid.
 *
 * @throws {@link NoSuchDistribution} (client fault)
 *
 * The specified distribution does not exist.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class ListConflictingAliasesCommand extends command<ListConflictingAliasesCommandInput, ListConflictingAliasesCommandOutput>(
  _ep0,
  _mw0,
  "ListConflictingAliases",
  ListConflictingAliases$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConflictingAliasesRequest;
      output: ListConflictingAliasesResult;
    };
    sdk: {
      input: ListConflictingAliasesCommandInput;
      output: ListConflictingAliasesCommandOutput;
    };
  };
}
