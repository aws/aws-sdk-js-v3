// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateCloudFrontOriginAccessIdentityRequest,
  CreateCloudFrontOriginAccessIdentityResult,
} from "../models/models_0";
import {
  de_CreateCloudFrontOriginAccessIdentityCommand,
  se_CreateCloudFrontOriginAccessIdentityCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface CreateCloudFrontOriginAccessIdentityCommandOutput
  extends CreateCloudFrontOriginAccessIdentityResult,
    __MetadataBearer {}

/**
 * <p>Creates a new origin access identity. If you're using Amazon S3 for your origin, you can
 * 			use an origin access identity to require users to access your content using a CloudFront URL
 * 			instead of the Amazon S3 URL. For more information about how to use origin access identities,
 * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private
 * 				Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateCloudFrontOriginAccessIdentityCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateCloudFrontOriginAccessIdentityCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
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
 *  <p>If the <code>CallerReference</code> is a value you already sent in a previous request
 * 			to create an identity but the content of the
 * 				<code>CloudFrontOriginAccessIdentityConfig</code> is different from the original
 * 			request, CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error.
 * 		</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't
 * 			match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link MissingBody} (client fault)
 *  <p>This operation requires a body. Ensure that the body is present and the
 * 				<code>Content-Type</code> header is set.</p>
 *
 * @throws {@link TooManyCloudFrontOriginAccessIdentities} (client fault)
 *  <p>Processing your request would cause you to exceed the maximum number of origin access
 * 			identities allowed.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class CreateCloudFrontOriginAccessIdentityCommand extends $Command
  .classBuilder<
    CreateCloudFrontOriginAccessIdentityCommandInput,
    CreateCloudFrontOriginAccessIdentityCommandOutput,
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
  .s("Cloudfront2020_05_31", "CreateCloudFrontOriginAccessIdentity", {})
  .n("CloudFrontClient", "CreateCloudFrontOriginAccessIdentityCommand")
  .f(void 0, void 0)
  .ser(se_CreateCloudFrontOriginAccessIdentityCommand)
  .de(de_CreateCloudFrontOriginAccessIdentityCommand)
  .build() {
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
