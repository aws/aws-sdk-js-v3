// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListStreamingDistributionsRequest, ListStreamingDistributionsResult } from "../models/models_1";
import { ListStreamingDistributions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStreamingDistributionsCommand}.
 */
export interface ListStreamingDistributionsCommandInput extends ListStreamingDistributionsRequest {}
/**
 * @public
 *
 * The output of {@link ListStreamingDistributionsCommand}.
 */
export interface ListStreamingDistributionsCommandOutput extends ListStreamingDistributionsResult, __MetadataBearer {}

/**
 * <p>List streaming distributions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListStreamingDistributionsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListStreamingDistributionsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListStreamingDistributionsRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListStreamingDistributionsCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamingDistributionsResult
 * //   StreamingDistributionList: { // StreamingDistributionList
 * //     Marker: "STRING_VALUE", // required
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     IsTruncated: true || false, // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // StreamingDistributionSummaryList
 * //       { // StreamingDistributionSummary
 * //         Id: "STRING_VALUE", // required
 * //         ARN: "STRING_VALUE", // required
 * //         Status: "STRING_VALUE", // required
 * //         LastModifiedTime: new Date("TIMESTAMP"), // required
 * //         DomainName: "STRING_VALUE", // required
 * //         S3Origin: { // S3Origin
 * //           DomainName: "STRING_VALUE", // required
 * //           OriginAccessIdentity: "STRING_VALUE", // required
 * //         },
 * //         Aliases: { // Aliases
 * //           Quantity: Number("int"), // required
 * //           Items: [ // AliasList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         TrustedSigners: { // TrustedSigners
 * //           Enabled: true || false, // required
 * //           Quantity: Number("int"), // required
 * //           Items: [ // AwsAccountNumberList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Comment: "STRING_VALUE", // required
 * //         PriceClass: "PriceClass_100" || "PriceClass_200" || "PriceClass_All" || "None", // required
 * //         Enabled: true || false, // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListStreamingDistributionsCommandInput - {@link ListStreamingDistributionsCommandInput}
 * @returns {@link ListStreamingDistributionsCommandOutput}
 * @see {@link ListStreamingDistributionsCommandInput} for command's `input` shape.
 * @see {@link ListStreamingDistributionsCommandOutput} for command's `response` shape.
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
export class ListStreamingDistributionsCommand extends $Command
  .classBuilder<
    ListStreamingDistributionsCommandInput,
    ListStreamingDistributionsCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "ListStreamingDistributions", {})
  .n("CloudFrontClient", "ListStreamingDistributionsCommand")
  .sc(ListStreamingDistributions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStreamingDistributionsRequest;
      output: ListStreamingDistributionsResult;
    };
    sdk: {
      input: ListStreamingDistributionsCommandInput;
      output: ListStreamingDistributionsCommandOutput;
    };
  };
}
