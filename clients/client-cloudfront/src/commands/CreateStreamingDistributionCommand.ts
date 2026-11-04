// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateStreamingDistributionRequest, CreateStreamingDistributionResult } from "../models/models_0";
import { CreateStreamingDistribution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateStreamingDistributionCommand}.
 */
export interface CreateStreamingDistributionCommandInput extends CreateStreamingDistributionRequest {}
/**
 * @public
 *
 * The output of {@link CreateStreamingDistributionCommand}.
 */
export interface CreateStreamingDistributionCommandOutput extends CreateStreamingDistributionResult, __MetadataBearer {}

/**
 * This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, [read the announcement](http://forums.aws.amazon.com/ann.jspa?annID=7356) on the Amazon CloudFront discussion forum.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateStreamingDistributionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateStreamingDistributionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // CreateStreamingDistributionRequest
 *   StreamingDistributionConfig: { // StreamingDistributionConfig
 *     CallerReference: "STRING_VALUE", // required
 *     S3Origin: { // S3Origin
 *       DomainName: "STRING_VALUE", // required
 *       OriginAccessIdentity: "STRING_VALUE", // required
 *     },
 *     Aliases: { // Aliases
 *       Quantity: Number("int"), // required
 *       Items: [ // AliasList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     Comment: "STRING_VALUE", // required
 *     Logging: { // StreamingLoggingConfig
 *       Enabled: true || false, // required
 *       Bucket: "STRING_VALUE", // required
 *       Prefix: "STRING_VALUE", // required
 *     },
 *     TrustedSigners: { // TrustedSigners
 *       Enabled: true || false, // required
 *       Quantity: Number("int"), // required
 *       Items: [ // AwsAccountNumberList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     PriceClass: "PriceClass_100" || "PriceClass_200" || "PriceClass_All" || "None",
 *     Enabled: true || false, // required
 *   },
 * };
 * const command = new CreateStreamingDistributionCommand(input);
 * const response = await client.send(command);
 * // { // CreateStreamingDistributionResult
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
 * //       PriceClass: "PriceClass_100" || "PriceClass_200" || "PriceClass_All" || "None",
 * //       Enabled: true || false, // required
 * //     },
 * //   },
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStreamingDistributionCommandInput - {@link CreateStreamingDistributionCommandInput}
 * @returns {@link CreateStreamingDistributionCommandOutput}
 * @see {@link CreateStreamingDistributionCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingDistributionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link CNAMEAlreadyExists} (client fault)
 *
 * The CNAME specified is already defined for CloudFront.
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *
 * The value of `Quantity` and the size of `Items` don't match.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidOrigin} (client fault)
 *
 * The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket.
 *
 * @throws {@link InvalidOriginAccessControl} (client fault)
 *
 * The origin access control is not valid.
 *
 * @throws {@link InvalidOriginAccessIdentity} (client fault)
 *
 * The origin access identity is not valid or doesn't exist.
 *
 * @throws {@link MissingBody} (client fault)
 *
 * This operation requires a body. Ensure that the body is present and the `Content-Type` header is set.
 *
 * @throws {@link StreamingDistributionAlreadyExists} (client fault)
 *
 * The caller reference you attempted to create the streaming distribution with is associated with another distribution
 *
 * @throws {@link TooManyStreamingDistributionCNAMEs} (client fault)
 *
 * Your request contains more CNAMEs than are allowed per distribution.
 *
 * @throws {@link TooManyStreamingDistributions} (client fault)
 *
 * Processing your request would cause you to exceed the maximum number of streaming distributions allowed.
 *
 * @throws {@link TooManyTrustedSigners} (client fault)
 *
 * Your request contains more trusted signers than are allowed per distribution.
 *
 * @throws {@link TrustedSignerDoesNotExist} (client fault)
 *
 * One or more of your trusted signers don't exist.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class CreateStreamingDistributionCommand extends command<CreateStreamingDistributionCommandInput, CreateStreamingDistributionCommandOutput>(
  _ep0,
  _mw0,
  "CreateStreamingDistribution",
  CreateStreamingDistribution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStreamingDistributionRequest;
      output: CreateStreamingDistributionResult;
    };
    sdk: {
      input: CreateStreamingDistributionCommandInput;
      output: CreateStreamingDistributionCommandOutput;
    };
  };
}
