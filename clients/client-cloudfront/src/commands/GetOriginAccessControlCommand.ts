// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetOriginAccessControlRequest, GetOriginAccessControlResult } from "../models/models_1";
import { GetOriginAccessControl } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOriginAccessControlCommand}.
 */
export interface GetOriginAccessControlCommandInput extends GetOriginAccessControlRequest {}
/**
 * @public
 *
 * The output of {@link GetOriginAccessControlCommand}.
 */
export interface GetOriginAccessControlCommandOutput extends GetOriginAccessControlResult, __MetadataBearer {}

/**
 * <p>Gets a CloudFront origin access control, including its unique identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetOriginAccessControlCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetOriginAccessControlCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // GetOriginAccessControlRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetOriginAccessControlCommand(input);
 * const response = await client.send(command);
 * // { // GetOriginAccessControlResult
 * //   OriginAccessControl: { // OriginAccessControl
 * //     Id: "STRING_VALUE", // required
 * //     OriginAccessControlConfig: { // OriginAccessControlConfig
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       SigningProtocol: "sigv4", // required
 * //       SigningBehavior: "never" || "always" || "no-override", // required
 * //       OriginAccessControlOriginType: "s3" || "mediastore" || "mediapackagev2" || "lambda", // required
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOriginAccessControlCommandInput - {@link GetOriginAccessControlCommandInput}
 * @returns {@link GetOriginAccessControlCommandOutput}
 * @see {@link GetOriginAccessControlCommandInput} for command's `input` shape.
 * @see {@link GetOriginAccessControlCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetOriginAccessControlCommand extends $Command
  .classBuilder<
    GetOriginAccessControlCommandInput,
    GetOriginAccessControlCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "GetOriginAccessControl", {})
  .n("CloudFrontClient", "GetOriginAccessControlCommand")
  .sc(GetOriginAccessControl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOriginAccessControlRequest;
      output: GetOriginAccessControlResult;
    };
    sdk: {
      input: GetOriginAccessControlCommandInput;
      output: GetOriginAccessControlCommandOutput;
    };
  };
}
