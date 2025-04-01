// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetCloudFrontOriginAccessIdentityConfigRequest,
  GetCloudFrontOriginAccessIdentityConfigResult,
} from "../models/models_1";
import {
  de_GetCloudFrontOriginAccessIdentityConfigCommand,
  se_GetCloudFrontOriginAccessIdentityConfigCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCloudFrontOriginAccessIdentityConfigCommand}.
 */
export interface GetCloudFrontOriginAccessIdentityConfigCommandInput
  extends GetCloudFrontOriginAccessIdentityConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetCloudFrontOriginAccessIdentityConfigCommand}.
 */
export interface GetCloudFrontOriginAccessIdentityConfigCommandOutput
  extends GetCloudFrontOriginAccessIdentityConfigResult,
    __MetadataBearer {}

/**
 * <p>Get the configuration information about an origin access identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetCloudFrontOriginAccessIdentityConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetCloudFrontOriginAccessIdentityConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetCloudFrontOriginAccessIdentityConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetCloudFrontOriginAccessIdentityConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetCloudFrontOriginAccessIdentityConfigResult
 * //   CloudFrontOriginAccessIdentityConfig: { // CloudFrontOriginAccessIdentityConfig
 * //     CallerReference: "STRING_VALUE", // required
 * //     Comment: "STRING_VALUE", // required
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCloudFrontOriginAccessIdentityConfigCommandInput - {@link GetCloudFrontOriginAccessIdentityConfigCommandInput}
 * @returns {@link GetCloudFrontOriginAccessIdentityConfigCommandOutput}
 * @see {@link GetCloudFrontOriginAccessIdentityConfigCommandInput} for command's `input` shape.
 * @see {@link GetCloudFrontOriginAccessIdentityConfigCommandOutput} for command's `response` shape.
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
export class GetCloudFrontOriginAccessIdentityConfigCommand extends $Command
  .classBuilder<
    GetCloudFrontOriginAccessIdentityConfigCommandInput,
    GetCloudFrontOriginAccessIdentityConfigCommandOutput,
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
  .s("Cloudfront2020_05_31", "GetCloudFrontOriginAccessIdentityConfig", {})
  .n("CloudFrontClient", "GetCloudFrontOriginAccessIdentityConfigCommand")
  .f(void 0, void 0)
  .ser(se_GetCloudFrontOriginAccessIdentityConfigCommand)
  .de(de_GetCloudFrontOriginAccessIdentityConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCloudFrontOriginAccessIdentityConfigRequest;
      output: GetCloudFrontOriginAccessIdentityConfigResult;
    };
    sdk: {
      input: GetCloudFrontOriginAccessIdentityConfigCommandInput;
      output: GetCloudFrontOriginAccessIdentityConfigCommandOutput;
    };
  };
}
