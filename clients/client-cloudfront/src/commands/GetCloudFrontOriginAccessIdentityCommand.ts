// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetCloudFrontOriginAccessIdentityRequest,
  GetCloudFrontOriginAccessIdentityResult,
} from "../models/models_0";
import { GetCloudFrontOriginAccessIdentity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCloudFrontOriginAccessIdentityCommand}.
 */
export interface GetCloudFrontOriginAccessIdentityCommandInput extends GetCloudFrontOriginAccessIdentityRequest {}
/**
 * @public
 *
 * The output of {@link GetCloudFrontOriginAccessIdentityCommand}.
 */
export interface GetCloudFrontOriginAccessIdentityCommandOutput extends GetCloudFrontOriginAccessIdentityResult, __MetadataBearer {}

/**
 * <p>Get the information about an origin access identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetCloudFrontOriginAccessIdentityCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetCloudFrontOriginAccessIdentityCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // GetCloudFrontOriginAccessIdentityRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetCloudFrontOriginAccessIdentityCommand(input);
 * const response = await client.send(command);
 * // { // GetCloudFrontOriginAccessIdentityResult
 * //   CloudFrontOriginAccessIdentity: { // CloudFrontOriginAccessIdentity
 * //     Id: "STRING_VALUE", // required
 * //     S3CanonicalUserId: "STRING_VALUE", // required
 * //     CloudFrontOriginAccessIdentityConfig: { // CloudFrontOriginAccessIdentityConfig
 * //       CallerReference: "STRING_VALUE", // required
 * //       Comment: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCloudFrontOriginAccessIdentityCommandInput - {@link GetCloudFrontOriginAccessIdentityCommandInput}
 * @returns {@link GetCloudFrontOriginAccessIdentityCommandOutput}
 * @see {@link GetCloudFrontOriginAccessIdentityCommandInput} for command's `input` shape.
 * @see {@link GetCloudFrontOriginAccessIdentityCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchCloudFrontOriginAccessIdentity} (client fault)
 *  <p>The specified origin access identity does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class GetCloudFrontOriginAccessIdentityCommand extends command<GetCloudFrontOriginAccessIdentityCommandInput, GetCloudFrontOriginAccessIdentityCommandOutput>(
  _ep0,
  _mw0,
  "GetCloudFrontOriginAccessIdentity",
  GetCloudFrontOriginAccessIdentity$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCloudFrontOriginAccessIdentityRequest;
      output: GetCloudFrontOriginAccessIdentityResult;
    };
    sdk: {
      input: GetCloudFrontOriginAccessIdentityCommandInput;
      output: GetCloudFrontOriginAccessIdentityCommandOutput;
    };
  };
}
