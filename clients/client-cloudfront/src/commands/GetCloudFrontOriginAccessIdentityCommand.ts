// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCloudFrontOriginAccessIdentityRequest, GetCloudFrontOriginAccessIdentityResult } from "../models/models_1";
import {
  de_GetCloudFrontOriginAccessIdentityCommand,
  se_GetCloudFrontOriginAccessIdentityCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetCloudFrontOriginAccessIdentityCommandOutput
  extends GetCloudFrontOriginAccessIdentityResult,
    __MetadataBearer {}

/**
 * <p>Get the information about an origin access identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetCloudFrontOriginAccessIdentityCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetCloudFrontOriginAccessIdentityCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
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
 * @public
 */
export class GetCloudFrontOriginAccessIdentityCommand extends $Command
  .classBuilder<
    GetCloudFrontOriginAccessIdentityCommandInput,
    GetCloudFrontOriginAccessIdentityCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "GetCloudFrontOriginAccessIdentity", {})
  .n("CloudFrontClient", "GetCloudFrontOriginAccessIdentityCommand")
  .f(void 0, void 0)
  .ser(se_GetCloudFrontOriginAccessIdentityCommand)
  .de(de_GetCloudFrontOriginAccessIdentityCommand)
  .build() {}
