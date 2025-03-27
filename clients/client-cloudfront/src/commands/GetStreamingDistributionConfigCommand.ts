// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetStreamingDistributionConfigRequest, GetStreamingDistributionConfigResult } from "../models/models_1";
import {
  de_GetStreamingDistributionConfigCommand,
  se_GetStreamingDistributionConfigCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetStreamingDistributionConfigCommand}.
 */
export interface GetStreamingDistributionConfigCommandInput extends GetStreamingDistributionConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetStreamingDistributionConfigCommand}.
 */
export interface GetStreamingDistributionConfigCommandOutput
  extends GetStreamingDistributionConfigResult,
    __MetadataBearer {}

/**
 * <p>Get the configuration information about a streaming distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetStreamingDistributionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetStreamingDistributionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetStreamingDistributionConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetStreamingDistributionConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetStreamingDistributionConfigResult
 * //   StreamingDistributionConfig: { // StreamingDistributionConfig
 * //     CallerReference: "STRING_VALUE", // required
 * //     S3Origin: { // S3Origin
 * //       DomainName: "STRING_VALUE", // required
 * //       OriginAccessIdentity: "STRING_VALUE", // required
 * //     },
 * //     Aliases: { // Aliases
 * //       Quantity: Number("int"), // required
 * //       Items: [ // AliasList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Comment: "STRING_VALUE", // required
 * //     Logging: { // StreamingLoggingConfig
 * //       Enabled: true || false, // required
 * //       Bucket: "STRING_VALUE", // required
 * //       Prefix: "STRING_VALUE", // required
 * //     },
 * //     TrustedSigners: { // TrustedSigners
 * //       Enabled: true || false, // required
 * //       Quantity: Number("int"), // required
 * //       Items: [ // AwsAccountNumberList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     PriceClass: "PriceClass_100" || "PriceClass_200" || "PriceClass_All",
 * //     Enabled: true || false, // required
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetStreamingDistributionConfigCommandInput - {@link GetStreamingDistributionConfigCommandInput}
 * @returns {@link GetStreamingDistributionConfigCommandOutput}
 * @see {@link GetStreamingDistributionConfigCommandInput} for command's `input` shape.
 * @see {@link GetStreamingDistributionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchStreamingDistribution} (client fault)
 *  <p>The specified streaming distribution does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class GetStreamingDistributionConfigCommand extends $Command
  .classBuilder<
    GetStreamingDistributionConfigCommandInput,
    GetStreamingDistributionConfigCommandOutput,
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
  .s("Cloudfront2020_05_31", "GetStreamingDistributionConfig", {})
  .n("CloudFrontClient", "GetStreamingDistributionConfigCommand")
  .f(void 0, void 0)
  .ser(se_GetStreamingDistributionConfigCommand)
  .de(de_GetStreamingDistributionConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStreamingDistributionConfigRequest;
      output: GetStreamingDistributionConfigResult;
    };
    sdk: {
      input: GetStreamingDistributionConfigCommandInput;
      output: GetStreamingDistributionConfigCommandOutput;
    };
  };
}
