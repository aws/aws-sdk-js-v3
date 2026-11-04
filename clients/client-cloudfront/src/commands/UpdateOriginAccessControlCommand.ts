// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateOriginAccessControlRequest, UpdateOriginAccessControlResult } from "../models/models_1";
import { UpdateOriginAccessControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateOriginAccessControlCommand}.
 */
export interface UpdateOriginAccessControlCommandInput extends UpdateOriginAccessControlRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOriginAccessControlCommand}.
 */
export interface UpdateOriginAccessControlCommandOutput extends UpdateOriginAccessControlResult, __MetadataBearer {}

/**
 * Updates a CloudFront origin access control.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateOriginAccessControlCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateOriginAccessControlCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateOriginAccessControlRequest
 *   OriginAccessControlConfig: { // OriginAccessControlConfig
 *     Name: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     SigningProtocol: "sigv4" || "sigv4a", // required
 *     SigningBehavior: "never" || "always" || "no-override" || "always-amz-auth", // required
 *     OriginAccessControlOriginType: "s3" || "mediastore" || "mediapackagev2" || "lambda", // required
 *   },
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdateOriginAccessControlCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOriginAccessControlResult
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
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateOriginAccessControlCommandInput - {@link UpdateOriginAccessControlCommandInput}
 * @returns {@link UpdateOriginAccessControlCommandOutput}
 * @see {@link UpdateOriginAccessControlCommandInput} for command's `input` shape.
 * @see {@link UpdateOriginAccessControlCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link NoSuchOriginAccessControl} (client fault)
 *
 * The origin access control does not exist.
 *
 * @throws {@link OriginAccessControlAlreadyExists} (client fault)
 *
 * An origin access control with the specified parameters already exists.
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
export class UpdateOriginAccessControlCommand extends command<UpdateOriginAccessControlCommandInput, UpdateOriginAccessControlCommandOutput>(
  _ep0,
  _mw0,
  "UpdateOriginAccessControl",
  UpdateOriginAccessControl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOriginAccessControlRequest;
      output: UpdateOriginAccessControlResult;
    };
    sdk: {
      input: UpdateOriginAccessControlCommandInput;
      output: UpdateOriginAccessControlCommandOutput;
    };
  };
}
