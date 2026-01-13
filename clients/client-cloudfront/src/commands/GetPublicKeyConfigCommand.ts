// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetPublicKeyConfigRequest, GetPublicKeyConfigResult } from "../models/models_1";
import { GetPublicKeyConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPublicKeyConfigCommand}.
 */
export interface GetPublicKeyConfigCommandInput extends GetPublicKeyConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetPublicKeyConfigCommand}.
 */
export interface GetPublicKeyConfigCommandOutput extends GetPublicKeyConfigResult, __MetadataBearer {}

/**
 * <p>Gets a public key configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetPublicKeyConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetPublicKeyConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // GetPublicKeyConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetPublicKeyConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetPublicKeyConfigResult
 * //   PublicKeyConfig: { // PublicKeyConfig
 * //     CallerReference: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     EncodedKey: "STRING_VALUE", // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPublicKeyConfigCommandInput - {@link GetPublicKeyConfigCommandInput}
 * @returns {@link GetPublicKeyConfigCommandOutput}
 * @see {@link GetPublicKeyConfigCommandInput} for command's `input` shape.
 * @see {@link GetPublicKeyConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchPublicKey} (client fault)
 *  <p>The specified public key doesn't exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class GetPublicKeyConfigCommand extends $Command
  .classBuilder<
    GetPublicKeyConfigCommandInput,
    GetPublicKeyConfigCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "GetPublicKeyConfig", {})
  .n("CloudFrontClient", "GetPublicKeyConfigCommand")
  .sc(GetPublicKeyConfig$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPublicKeyConfigRequest;
      output: GetPublicKeyConfigResult;
    };
    sdk: {
      input: GetPublicKeyConfigCommandInput;
      output: GetPublicKeyConfigCommandOutput;
    };
  };
}
