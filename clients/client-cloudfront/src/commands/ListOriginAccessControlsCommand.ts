// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListOriginAccessControlsRequest, ListOriginAccessControlsResult } from "../models/models_1";
import { ListOriginAccessControls$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOriginAccessControlsCommand}.
 */
export interface ListOriginAccessControlsCommandInput extends ListOriginAccessControlsRequest {}
/**
 * @public
 *
 * The output of {@link ListOriginAccessControlsCommand}.
 */
export interface ListOriginAccessControlsCommandOutput extends ListOriginAccessControlsResult, __MetadataBearer {}

/**
 * <p>Gets the list of CloudFront origin access controls (OACs) in this Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send another request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the next request.</p> <note> <p>If you're not using origin access controls for your Amazon Web Services account, the <code>ListOriginAccessControls</code> operation doesn't return the <code>Items</code> element in the response.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListOriginAccessControlsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListOriginAccessControlsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListOriginAccessControlsRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListOriginAccessControlsCommand(input);
 * const response = await client.send(command);
 * // { // ListOriginAccessControlsResult
 * //   OriginAccessControlList: { // OriginAccessControlList
 * //     Marker: "STRING_VALUE", // required
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     IsTruncated: true || false, // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // OriginAccessControlSummaryList
 * //       { // OriginAccessControlSummary
 * //         Id: "STRING_VALUE", // required
 * //         Description: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //         SigningProtocol: "sigv4", // required
 * //         SigningBehavior: "never" || "always" || "no-override", // required
 * //         OriginAccessControlOriginType: "s3" || "mediastore" || "mediapackagev2" || "lambda", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListOriginAccessControlsCommandInput - {@link ListOriginAccessControlsCommandInput}
 * @returns {@link ListOriginAccessControlsCommandOutput}
 * @see {@link ListOriginAccessControlsCommandInput} for command's `input` shape.
 * @see {@link ListOriginAccessControlsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class ListOriginAccessControlsCommand extends $Command
  .classBuilder<
    ListOriginAccessControlsCommandInput,
    ListOriginAccessControlsCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "ListOriginAccessControls", {})
  .n("CloudFrontClient", "ListOriginAccessControlsCommand")
  .sc(ListOriginAccessControls$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOriginAccessControlsRequest;
      output: ListOriginAccessControlsResult;
    };
    sdk: {
      input: ListOriginAccessControlsCommandInput;
      output: ListOriginAccessControlsCommandOutput;
    };
  };
}
