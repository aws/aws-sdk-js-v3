// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateStreamingDistributionWithTagsRequest,
  CreateStreamingDistributionWithTagsResult,
} from "../models/models_1";
import {
  de_CreateStreamingDistributionWithTagsCommand,
  se_CreateStreamingDistributionWithTagsCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStreamingDistributionWithTagsCommand}.
 */
export interface CreateStreamingDistributionWithTagsCommandInput extends CreateStreamingDistributionWithTagsRequest {}
/**
 * @public
 *
 * The output of {@link CreateStreamingDistributionWithTagsCommand}.
 */
export interface CreateStreamingDistributionWithTagsCommandOutput
  extends CreateStreamingDistributionWithTagsResult,
    __MetadataBearer {}

/**
 * <p>This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP)
 * 			distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion
 * 			forum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateStreamingDistributionWithTagsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateStreamingDistributionWithTagsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // CreateStreamingDistributionWithTagsRequest
 *   StreamingDistributionConfigWithTags: { // StreamingDistributionConfigWithTags
 *     StreamingDistributionConfig: { // StreamingDistributionConfig
 *       CallerReference: "STRING_VALUE", // required
 *       S3Origin: { // S3Origin
 *         DomainName: "STRING_VALUE", // required
 *         OriginAccessIdentity: "STRING_VALUE", // required
 *       },
 *       Aliases: { // Aliases
 *         Quantity: Number("int"), // required
 *         Items: [ // AliasList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       Comment: "STRING_VALUE", // required
 *       Logging: { // StreamingLoggingConfig
 *         Enabled: true || false, // required
 *         Bucket: "STRING_VALUE", // required
 *         Prefix: "STRING_VALUE", // required
 *       },
 *       TrustedSigners: { // TrustedSigners
 *         Enabled: true || false, // required
 *         Quantity: Number("int"), // required
 *         Items: [ // AwsAccountNumberList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       PriceClass: "PriceClass_100" || "PriceClass_200" || "PriceClass_All",
 *       Enabled: true || false, // required
 *     },
 *     Tags: { // Tags
 *       Items: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new CreateStreamingDistributionWithTagsCommand(input);
 * const response = await client.send(command);
 * // { // CreateStreamingDistributionWithTagsResult
 * //   StreamingDistribution: { // StreamingDistribution
 * //     Id: "STRING_VALUE", // required
 * //     ARN: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     DomainName: "STRING_VALUE", // required
 * //     ActiveTrustedSigners: { // ActiveTrustedSigners
 * //       Enabled: true || false, // required
 * //       Quantity: Number("int"), // required
 * //       Items: [ // SignerList
 * //         { // Signer
 * //           AwsAccountNumber: "STRING_VALUE",
 * //           KeyPairIds: { // KeyPairIds
 * //             Quantity: Number("int"), // required
 * //             Items: [ // KeyPairIdList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     StreamingDistributionConfig: { // StreamingDistributionConfig
 * //       CallerReference: "STRING_VALUE", // required
 * //       S3Origin: { // S3Origin
 * //         DomainName: "STRING_VALUE", // required
 * //         OriginAccessIdentity: "STRING_VALUE", // required
 * //       },
 * //       Aliases: { // Aliases
 * //         Quantity: Number("int"), // required
 * //         Items: [ // AliasList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Comment: "STRING_VALUE", // required
 * //       Logging: { // StreamingLoggingConfig
 * //         Enabled: true || false, // required
 * //         Bucket: "STRING_VALUE", // required
 * //         Prefix: "STRING_VALUE", // required
 * //       },
 * //       TrustedSigners: { // TrustedSigners
 * //         Enabled: true || false, // required
 * //         Quantity: Number("int"), // required
 * //         Items: [ // AwsAccountNumberList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       PriceClass: "PriceClass_100" || "PriceClass_200" || "PriceClass_All",
 * //       Enabled: true || false, // required
 * //     },
 * //   },
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStreamingDistributionWithTagsCommandInput - {@link CreateStreamingDistributionWithTagsCommandInput}
 * @returns {@link CreateStreamingDistributionWithTagsCommandOutput}
 * @see {@link CreateStreamingDistributionWithTagsCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingDistributionWithTagsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link CNAMEAlreadyExists} (client fault)
 *  <p>The CNAME specified is already defined for CloudFront.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't
 * 			match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidOrigin} (client fault)
 *  <p>The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket.</p>
 *
 * @throws {@link InvalidOriginAccessControl} (client fault)
 *  <p>The origin access control is not valid.</p>
 *
 * @throws {@link InvalidOriginAccessIdentity} (client fault)
 *  <p>The origin access identity is not valid or doesn't exist.</p>
 *
 * @throws {@link InvalidTagging} (client fault)
 *  <p>The tagging specified is not valid.</p>
 *
 * @throws {@link MissingBody} (client fault)
 *  <p>This operation requires a body. Ensure that the body is present and the
 * 				<code>Content-Type</code> header is set.</p>
 *
 * @throws {@link StreamingDistributionAlreadyExists} (client fault)
 *  <p>The caller reference you attempted to create the streaming distribution with is
 * 			associated with another distribution</p>
 *
 * @throws {@link TooManyStreamingDistributionCNAMEs} (client fault)
 *  <p>Your request contains more CNAMEs than are allowed per distribution.</p>
 *
 * @throws {@link TooManyStreamingDistributions} (client fault)
 *  <p>Processing your request would cause you to exceed the maximum number of streaming
 * 			distributions allowed.</p>
 *
 * @throws {@link TooManyTrustedSigners} (client fault)
 *  <p>Your request contains more trusted signers than are allowed per distribution.</p>
 *
 * @throws {@link TrustedSignerDoesNotExist} (client fault)
 *  <p>One or more of your trusted signers don't exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 */
export class CreateStreamingDistributionWithTagsCommand extends $Command
  .classBuilder<
    CreateStreamingDistributionWithTagsCommandInput,
    CreateStreamingDistributionWithTagsCommandOutput,
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
  .s("Cloudfront2020_05_31", "CreateStreamingDistributionWithTags", {})
  .n("CloudFrontClient", "CreateStreamingDistributionWithTagsCommand")
  .f(void 0, void 0)
  .ser(se_CreateStreamingDistributionWithTagsCommand)
  .de(de_CreateStreamingDistributionWithTagsCommand)
  .build() {}
