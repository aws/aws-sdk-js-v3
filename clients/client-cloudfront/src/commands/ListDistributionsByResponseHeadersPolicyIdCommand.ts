// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListDistributionsByResponseHeadersPolicyIdRequest,
  ListDistributionsByResponseHeadersPolicyIdResult,
} from "../models/models_1";
import { ListDistributionsByResponseHeadersPolicyId } from "../schemas/schemas_9_Headers";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDistributionsByResponseHeadersPolicyIdCommand}.
 */
export interface ListDistributionsByResponseHeadersPolicyIdCommandInput
  extends ListDistributionsByResponseHeadersPolicyIdRequest {}
/**
 * @public
 *
 * The output of {@link ListDistributionsByResponseHeadersPolicyIdCommand}.
 */
export interface ListDistributionsByResponseHeadersPolicyIdCommandOutput
  extends ListDistributionsByResponseHeadersPolicyIdResult,
    __MetadataBearer {}

/**
 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified response headers policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByResponseHeadersPolicyIdCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByResponseHeadersPolicyIdCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListDistributionsByResponseHeadersPolicyIdRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   ResponseHeadersPolicyId: "STRING_VALUE", // required
 * };
 * const command = new ListDistributionsByResponseHeadersPolicyIdCommand(input);
 * const response = await client.send(command);
 * // { // ListDistributionsByResponseHeadersPolicyIdResult
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
 * @param ListDistributionsByResponseHeadersPolicyIdCommandInput - {@link ListDistributionsByResponseHeadersPolicyIdCommandInput}
 * @returns {@link ListDistributionsByResponseHeadersPolicyIdCommandOutput}
 * @see {@link ListDistributionsByResponseHeadersPolicyIdCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByResponseHeadersPolicyIdCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchResponseHeadersPolicy} (client fault)
 *  <p>The response headers policy does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class ListDistributionsByResponseHeadersPolicyIdCommand extends $Command
  .classBuilder<
    ListDistributionsByResponseHeadersPolicyIdCommandInput,
    ListDistributionsByResponseHeadersPolicyIdCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "ListDistributionsByResponseHeadersPolicyId", {})
  .n("CloudFrontClient", "ListDistributionsByResponseHeadersPolicyIdCommand")
  .sc(ListDistributionsByResponseHeadersPolicyId)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDistributionsByResponseHeadersPolicyIdRequest;
      output: ListDistributionsByResponseHeadersPolicyIdResult;
    };
    sdk: {
      input: ListDistributionsByResponseHeadersPolicyIdCommandInput;
      output: ListDistributionsByResponseHeadersPolicyIdCommandOutput;
    };
  };
}
