// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateCloudFrontOriginAccessIdentityRequest,
  UpdateCloudFrontOriginAccessIdentityResult,
} from "../models/models_2";
import {
  de_UpdateCloudFrontOriginAccessIdentityCommand,
  se_UpdateCloudFrontOriginAccessIdentityCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface UpdateCloudFrontOriginAccessIdentityCommandOutput
  extends UpdateCloudFrontOriginAccessIdentityResult,
    __MetadataBearer {}

/**
 * <p>Update an origin access identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateCloudFrontOriginAccessIdentityCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateCloudFrontOriginAccessIdentityCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
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
 *  <p>Access denied.</p>
 *
 * @throws {@link IllegalUpdate} (client fault)
 *  <p>The update contains modifications that are not allowed.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link MissingBody} (client fault)
 *  <p>This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.</p>
 *
 * @throws {@link NoSuchCloudFrontOriginAccessIdentity} (client fault)
 *  <p>The specified origin access identity does not exist.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to <code>false</code>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class UpdateCloudFrontOriginAccessIdentityCommand extends $Command
  .classBuilder<
    UpdateCloudFrontOriginAccessIdentityCommandInput,
    UpdateCloudFrontOriginAccessIdentityCommandOutput,
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
  .s("Cloudfront2020_05_31", "UpdateCloudFrontOriginAccessIdentity", {})
  .n("CloudFrontClient", "UpdateCloudFrontOriginAccessIdentityCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCloudFrontOriginAccessIdentityCommand)
  .de(de_UpdateCloudFrontOriginAccessIdentityCommand)
  .build() {
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
