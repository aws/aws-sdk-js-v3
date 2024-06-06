// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetOriginAccessControlConfigRequest, GetOriginAccessControlConfigResult } from "../models/models_1";
import {
  de_GetOriginAccessControlConfigCommand,
  se_GetOriginAccessControlConfigCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOriginAccessControlConfigCommand}.
 */
export interface GetOriginAccessControlConfigCommandInput extends GetOriginAccessControlConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetOriginAccessControlConfigCommand}.
 */
export interface GetOriginAccessControlConfigCommandOutput
  extends GetOriginAccessControlConfigResult,
    __MetadataBearer {}

/**
 * <p>Gets a CloudFront origin access control configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetOriginAccessControlConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetOriginAccessControlConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetOriginAccessControlConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetOriginAccessControlConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetOriginAccessControlConfigResult
 * //   OriginAccessControlConfig: { // OriginAccessControlConfig
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     SigningProtocol: "sigv4", // required
 * //     SigningBehavior: "never" || "always" || "no-override", // required
 * //     OriginAccessControlOriginType: "s3" || "mediastore" || "mediapackagev2" || "lambda", // required
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOriginAccessControlConfigCommandInput - {@link GetOriginAccessControlConfigCommandInput}
 * @returns {@link GetOriginAccessControlConfigCommandOutput}
 * @see {@link GetOriginAccessControlConfigCommandInput} for command's `input` shape.
 * @see {@link GetOriginAccessControlConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchOriginAccessControl} (client fault)
 *  <p>The origin access control does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 */
export class GetOriginAccessControlConfigCommand extends $Command
  .classBuilder<
    GetOriginAccessControlConfigCommandInput,
    GetOriginAccessControlConfigCommandOutput,
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
  .s("Cloudfront2020_05_31", "GetOriginAccessControlConfig", {})
  .n("CloudFrontClient", "GetOriginAccessControlConfigCommand")
  .f(void 0, void 0)
  .ser(se_GetOriginAccessControlConfigCommand)
  .de(de_GetOriginAccessControlConfigCommand)
  .build() {}
