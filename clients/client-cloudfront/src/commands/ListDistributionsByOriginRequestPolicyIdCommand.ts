// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListDistributionsByOriginRequestPolicyIdRequest,
  ListDistributionsByOriginRequestPolicyIdResult,
} from "../models/models_1";
import {
  de_ListDistributionsByOriginRequestPolicyIdCommand,
  se_ListDistributionsByOriginRequestPolicyIdCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDistributionsByOriginRequestPolicyIdCommand}.
 */
export interface ListDistributionsByOriginRequestPolicyIdCommandInput
  extends ListDistributionsByOriginRequestPolicyIdRequest {}
/**
 * @public
 *
 * The output of {@link ListDistributionsByOriginRequestPolicyIdCommand}.
 */
export interface ListDistributionsByOriginRequestPolicyIdCommandOutput
  extends ListDistributionsByOriginRequestPolicyIdResult,
    __MetadataBearer {}

/**
 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified origin request policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByOriginRequestPolicyIdCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByOriginRequestPolicyIdCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // ListDistributionsByOriginRequestPolicyIdRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   OriginRequestPolicyId: "STRING_VALUE", // required
 * };
 * const command = new ListDistributionsByOriginRequestPolicyIdCommand(input);
 * const response = await client.send(command);
 * // { // ListDistributionsByOriginRequestPolicyIdResult
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
 * @param ListDistributionsByOriginRequestPolicyIdCommandInput - {@link ListDistributionsByOriginRequestPolicyIdCommandInput}
 * @returns {@link ListDistributionsByOriginRequestPolicyIdCommandOutput}
 * @see {@link ListDistributionsByOriginRequestPolicyIdCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByOriginRequestPolicyIdCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchOriginRequestPolicy} (client fault)
 *  <p>The origin request policy does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class ListDistributionsByOriginRequestPolicyIdCommand extends $Command
  .classBuilder<
    ListDistributionsByOriginRequestPolicyIdCommandInput,
    ListDistributionsByOriginRequestPolicyIdCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "ListDistributionsByOriginRequestPolicyId", {})
  .n("CloudFrontClient", "ListDistributionsByOriginRequestPolicyIdCommand")
  .f(void 0, void 0)
  .ser(se_ListDistributionsByOriginRequestPolicyIdCommand)
  .de(de_ListDistributionsByOriginRequestPolicyIdCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDistributionsByOriginRequestPolicyIdRequest;
      output: ListDistributionsByOriginRequestPolicyIdResult;
    };
    sdk: {
      input: ListDistributionsByOriginRequestPolicyIdCommandInput;
      output: ListDistributionsByOriginRequestPolicyIdCommandOutput;
    };
  };
}
