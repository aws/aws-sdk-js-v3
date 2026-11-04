// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateOriginAccessControlRequest, CreateOriginAccessControlResult } from "../models/models_0";
import { CreateOriginAccessControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateOriginAccessControlCommand}.
 */
export interface CreateOriginAccessControlCommandInput extends CreateOriginAccessControlRequest {}
/**
 * @public
 *
 * The output of {@link CreateOriginAccessControlCommand}.
 */
export interface CreateOriginAccessControlCommandOutput extends CreateOriginAccessControlResult, __MetadataBearer {}

/**
 * Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.
 *
 * This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.
 *
 * For more information about using a CloudFront origin access control, see [Restricting access to an Amazon Web Services origin](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateOriginAccessControlCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateOriginAccessControlCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // CreateOriginAccessControlRequest
 *   OriginAccessControlConfig: { // OriginAccessControlConfig
 *     Name: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     SigningProtocol: "sigv4" || "sigv4a", // required
 *     SigningBehavior: "never" || "always" || "no-override" || "always-amz-auth", // required
 *     OriginAccessControlOriginType: "s3" || "mediastore" || "mediapackagev2" || "lambda", // required
 *   },
 * };
 * const command = new CreateOriginAccessControlCommand(input);
 * const response = await client.send(command);
 * // { // CreateOriginAccessControlResult
 * //   OriginAccessControl: { // OriginAccessControl
 * //     Id: "STRING_VALUE", // required
 * //     OriginAccessControlConfig: { // OriginAccessControlConfig
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       SigningProtocol: "sigv4" || "sigv4a", // required
 * //       SigningBehavior: "never" || "always" || "no-override" || "always-amz-auth", // required
 * //       OriginAccessControlOriginType: "s3" || "mediastore" || "mediapackagev2" || "lambda", // required
 * //     },
 * //   },
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateOriginAccessControlCommandInput - {@link CreateOriginAccessControlCommandInput}
 * @returns {@link CreateOriginAccessControlCommandOutput}
 * @see {@link CreateOriginAccessControlCommandInput} for command's `input` shape.
 * @see {@link CreateOriginAccessControlCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link OriginAccessControlAlreadyExists} (client fault)
 *
 * An origin access control with the specified parameters already exists.
 *
 * @throws {@link TooManyOriginAccessControls} (client fault)
 *
 * The number of origin access controls in your Amazon Web Services account exceeds the maximum allowed.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class CreateOriginAccessControlCommand extends command<CreateOriginAccessControlCommandInput, CreateOriginAccessControlCommandOutput>(
  _ep0,
  _mw0,
  "CreateOriginAccessControl",
  CreateOriginAccessControl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOriginAccessControlRequest;
      output: CreateOriginAccessControlResult;
    };
    sdk: {
      input: CreateOriginAccessControlCommandInput;
      output: CreateOriginAccessControlCommandOutput;
    };
  };
}
