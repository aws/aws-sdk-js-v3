// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDistributionsByCachePolicyIdRequest, ListDistributionsByCachePolicyIdResult } from "../models/models_1";
import { ListDistributionsByCachePolicyId } from "../schemas/schemas_20_Cache";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDistributionsByCachePolicyIdCommand}.
 */
export interface ListDistributionsByCachePolicyIdCommandInput extends ListDistributionsByCachePolicyIdRequest {}
/**
 * @public
 *
 * The output of {@link ListDistributionsByCachePolicyIdCommand}.
 */
export interface ListDistributionsByCachePolicyIdCommandOutput
  extends ListDistributionsByCachePolicyIdResult,
    __MetadataBearer {}

/**
 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified cache policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByCachePolicyIdCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByCachePolicyIdCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListDistributionsByCachePolicyIdRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   CachePolicyId: "STRING_VALUE", // required
 * };
 * const command = new ListDistributionsByCachePolicyIdCommand(input);
 * const response = await client.send(command);
 * // { // ListDistributionsByCachePolicyIdResult
 * //   DistributionIdList: { // DistributionIdList
 * //     Marker: "STRING_VALUE", // required
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     IsTruncated: true || false, // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // DistributionIdListSummary
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListDistributionsByCachePolicyIdCommandInput - {@link ListDistributionsByCachePolicyIdCommandInput}
 * @returns {@link ListDistributionsByCachePolicyIdCommandOutput}
 * @see {@link ListDistributionsByCachePolicyIdCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByCachePolicyIdCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchCachePolicy} (client fault)
 *  <p>The cache policy does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class ListDistributionsByCachePolicyIdCommand extends $Command
  .classBuilder<
    ListDistributionsByCachePolicyIdCommandInput,
    ListDistributionsByCachePolicyIdCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "ListDistributionsByCachePolicyId", {})
  .n("CloudFrontClient", "ListDistributionsByCachePolicyIdCommand")
  .sc(ListDistributionsByCachePolicyId)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDistributionsByCachePolicyIdRequest;
      output: ListDistributionsByCachePolicyIdResult;
    };
    sdk: {
      input: ListDistributionsByCachePolicyIdCommandInput;
      output: ListDistributionsByCachePolicyIdCommandOutput;
    };
  };
}
