// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateCloudFrontOriginAccessIdentityRequest,
  CreateCloudFrontOriginAccessIdentityResult,
} from "../models/models_0";
import { CreateCloudFrontOriginAccessIdentity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCloudFrontOriginAccessIdentityCommand}.
 */
export interface CreateCloudFrontOriginAccessIdentityCommandInput extends CreateCloudFrontOriginAccessIdentityRequest {}
/**
 * @public
 *
 * The output of {@link CreateCloudFrontOriginAccessIdentityCommand}.
 */
export interface CreateCloudFrontOriginAccessIdentityCommandOutput extends CreateCloudFrontOriginAccessIdentityResult, __MetadataBearer {}

/**
 * Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see [Serving Private Content through CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateCloudFrontOriginAccessIdentityCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateCloudFrontOriginAccessIdentityCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // CreateCloudFrontOriginAccessIdentityRequest
 *   CloudFrontOriginAccessIdentityConfig: { // CloudFrontOriginAccessIdentityConfig
 *     CallerReference: "STRING_VALUE", // required
 *     Comment: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateCloudFrontOriginAccessIdentityCommand(input);
 * const response = await client.send(command);
 * // { // CreateCloudFrontOriginAccessIdentityResult
 * //   CloudFrontOriginAccessIdentity: { // CloudFrontOriginAccessIdentity
 * //     Id: "STRING_VALUE", // required
 * //     S3CanonicalUserId: "STRING_VALUE", // required
 * //     CloudFrontOriginAccessIdentityConfig: { // CloudFrontOriginAccessIdentityConfig
 * //       CallerReference: "STRING_VALUE", // required
 * //       Comment: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCloudFrontOriginAccessIdentityCommandInput - {@link CreateCloudFrontOriginAccessIdentityCommandInput}
 * @returns {@link CreateCloudFrontOriginAccessIdentityCommandOutput}
 * @see {@link CreateCloudFrontOriginAccessIdentityCommandInput} for command's `input` shape.
 * @see {@link CreateCloudFrontOriginAccessIdentityCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link CloudFrontOriginAccessIdentityAlreadyExists} (client fault)
 *
 * If the `CallerReference` is a value you already sent in a previous request to create an identity but the content of the `CloudFrontOriginAccessIdentityConfig` is different from the original request, CloudFront returns a `CloudFrontOriginAccessIdentityAlreadyExists` error.
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *
 * The value of `Quantity` and the size of `Items` don't match.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link MissingBody} (client fault)
 *
 * This operation requires a body. Ensure that the body is present and the `Content-Type` header is set.
 *
 * @throws {@link TooManyCloudFrontOriginAccessIdentities} (client fault)
 *
 * Processing your request would cause you to exceed the maximum number of origin access identities allowed.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class CreateCloudFrontOriginAccessIdentityCommand extends command<CreateCloudFrontOriginAccessIdentityCommandInput, CreateCloudFrontOriginAccessIdentityCommandOutput>(
  _ep0,
  _mw0,
  "CreateCloudFrontOriginAccessIdentity",
  CreateCloudFrontOriginAccessIdentity$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCloudFrontOriginAccessIdentityRequest;
      output: CreateCloudFrontOriginAccessIdentityResult;
    };
    sdk: {
      input: CreateCloudFrontOriginAccessIdentityCommandInput;
      output: CreateCloudFrontOriginAccessIdentityCommandOutput;
    };
  };
}
