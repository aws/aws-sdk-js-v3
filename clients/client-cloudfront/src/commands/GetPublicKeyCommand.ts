// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetPublicKeyRequest, GetPublicKeyResult } from "../models/models_1";
import { GetPublicKey } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPublicKeyCommand}.
 */
export interface GetPublicKeyCommandInput extends GetPublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link GetPublicKeyCommand}.
 */
export interface GetPublicKeyCommandOutput extends GetPublicKeyResult, __MetadataBearer {}

/**
 * <p>Gets a public key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetPublicKeyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetPublicKeyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // GetPublicKeyRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetPublicKeyCommand(input);
 * const response = await client.send(command);
 * // { // GetPublicKeyResult
 * //   PublicKey: { // PublicKey
 * //     Id: "STRING_VALUE", // required
 * //     CreatedTime: new Date("TIMESTAMP"), // required
 * //     PublicKeyConfig: { // PublicKeyConfig
 * //       CallerReference: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       EncodedKey: "STRING_VALUE", // required
 * //       Comment: "STRING_VALUE",
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPublicKeyCommandInput - {@link GetPublicKeyCommandInput}
 * @returns {@link GetPublicKeyCommandOutput}
 * @see {@link GetPublicKeyCommandInput} for command's `input` shape.
 * @see {@link GetPublicKeyCommandOutput} for command's `response` shape.
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
export class GetPublicKeyCommand extends $Command
  .classBuilder<
    GetPublicKeyCommandInput,
    GetPublicKeyCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "GetPublicKey", {})
  .n("CloudFrontClient", "GetPublicKeyCommand")
  .sc(GetPublicKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPublicKeyRequest;
      output: GetPublicKeyResult;
    };
    sdk: {
      input: GetPublicKeyCommandInput;
      output: GetPublicKeyCommandOutput;
    };
  };
}
