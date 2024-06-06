// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStreamingDistributionsRequest, ListStreamingDistributionsResult } from "../models/models_1";
import { de_ListStreamingDistributionsCommand, se_ListStreamingDistributionsCommand } from "../protocols/Aws_restXml";

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
 * //         PriceClass: "PriceClass_100" || "PriceClass_200" || "PriceClass_All", // required
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "ListStreamingDistributions", {})
  .n("CloudFrontClient", "ListStreamingDistributionsCommand")
  .f(void 0, void 0)
  .ser(se_ListStreamingDistributionsCommand)
  .de(de_ListStreamingDistributionsCommand)
  .build() {}
