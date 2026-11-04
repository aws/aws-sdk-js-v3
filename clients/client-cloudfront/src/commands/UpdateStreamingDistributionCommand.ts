// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateStreamingDistributionRequest, UpdateStreamingDistributionResult } from "../models/models_1";
import { UpdateStreamingDistribution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateStreamingDistributionCommand}.
 */
export interface UpdateStreamingDistributionCommandInput extends UpdateStreamingDistributionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStreamingDistributionCommand}.
 */
export interface UpdateStreamingDistributionCommandOutput extends UpdateStreamingDistributionResult, __MetadataBearer {}

/**
 * Update a streaming distribution.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateStreamingDistributionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateStreamingDistributionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateStreamingDistributionRequest
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
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdateStreamingDistributionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStreamingDistributionResult
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
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateStreamingDistributionCommandInput - {@link UpdateStreamingDistributionCommandInput}
 * @returns {@link UpdateStreamingDistributionCommandOutput}
 * @see {@link UpdateStreamingDistributionCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamingDistributionCommandOutput} for command's `response` shape.
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
 * @throws {@link IllegalUpdate} (client fault)
 *
 * The update contains modifications that are not allowed.
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *
 * The value of `Quantity` and the size of `Items` don't match.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
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
 * @throws {@link NoSuchStreamingDistribution} (client fault)
 *
 * The specified streaming distribution does not exist.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link TooManyStreamingDistributionCNAMEs} (client fault)
 *
 * Your request contains more CNAMEs than are allowed per distribution.
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
export class UpdateStreamingDistributionCommand extends command<UpdateStreamingDistributionCommandInput, UpdateStreamingDistributionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateStreamingDistribution",
  UpdateStreamingDistribution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStreamingDistributionRequest;
      output: UpdateStreamingDistributionResult;
    };
    sdk: {
      input: UpdateStreamingDistributionCommandInput;
      output: UpdateStreamingDistributionCommandOutput;
    };
  };
}
