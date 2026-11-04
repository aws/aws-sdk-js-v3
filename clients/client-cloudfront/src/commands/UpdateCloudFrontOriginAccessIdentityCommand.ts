// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateCloudFrontOriginAccessIdentityRequest,
  UpdateCloudFrontOriginAccessIdentityResult,
} from "../models/models_1";
import { UpdateCloudFrontOriginAccessIdentity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCloudFrontOriginAccessIdentityCommand}.
 */
export interface UpdateCloudFrontOriginAccessIdentityCommandInput extends UpdateCloudFrontOriginAccessIdentityRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCloudFrontOriginAccessIdentityCommand}.
 */
export interface UpdateCloudFrontOriginAccessIdentityCommandOutput extends UpdateCloudFrontOriginAccessIdentityResult, __MetadataBearer {}

/**
 * Update an origin access identity.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateCloudFrontOriginAccessIdentityCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateCloudFrontOriginAccessIdentityCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateCloudFrontOriginAccessIdentityRequest
 *   CloudFrontOriginAccessIdentityConfig: { // CloudFrontOriginAccessIdentityConfig
 *     CallerReference: "STRING_VALUE", // required
 *     Comment: "STRING_VALUE", // required
 *   },
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdateCloudFrontOriginAccessIdentityCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCloudFrontOriginAccessIdentityResult
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
 * @param UpdateCloudFrontOriginAccessIdentityCommandInput - {@link UpdateCloudFrontOriginAccessIdentityCommandInput}
 * @returns {@link UpdateCloudFrontOriginAccessIdentityCommandOutput}
 * @see {@link UpdateCloudFrontOriginAccessIdentityCommandInput} for command's `input` shape.
 * @see {@link UpdateCloudFrontOriginAccessIdentityCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
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
 * @throws {@link MissingBody} (client fault)
 *
 * This operation requires a body. Ensure that the body is present and the `Content-Type` header is set.
 *
 * @throws {@link NoSuchCloudFrontOriginAccessIdentity} (client fault)
 *
 * The specified origin access identity does not exist.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class UpdateCloudFrontOriginAccessIdentityCommand extends command<UpdateCloudFrontOriginAccessIdentityCommandInput, UpdateCloudFrontOriginAccessIdentityCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCloudFrontOriginAccessIdentity",
  UpdateCloudFrontOriginAccessIdentity$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCloudFrontOriginAccessIdentityRequest;
      output: UpdateCloudFrontOriginAccessIdentityResult;
    };
    sdk: {
      input: UpdateCloudFrontOriginAccessIdentityCommandInput;
      output: UpdateCloudFrontOriginAccessIdentityCommandOutput;
    };
  };
}
