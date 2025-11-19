// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePublicKeyRequest, UpdatePublicKeyResult } from "../models/models_1";
import { UpdatePublicKey } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePublicKeyCommand}.
 */
export interface UpdatePublicKeyCommandInput extends UpdatePublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePublicKeyCommand}.
 */
export interface UpdatePublicKeyCommandOutput extends UpdatePublicKeyResult, __MetadataBearer {}

/**
 * <p>Update public key information. Note that the only value you can change is the comment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdatePublicKeyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdatePublicKeyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdatePublicKeyRequest
 *   PublicKeyConfig: { // PublicKeyConfig
 *     CallerReference: "STRING_VALUE", // required
 *     Name: "STRING_VALUE", // required
 *     EncodedKey: "STRING_VALUE", // required
 *     Comment: "STRING_VALUE",
 *   },
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdatePublicKeyCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePublicKeyResult
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
 * @param UpdatePublicKeyCommandInput - {@link UpdatePublicKeyCommandInput}
 * @returns {@link UpdatePublicKeyCommandOutput}
 * @see {@link UpdatePublicKeyCommandInput} for command's `input` shape.
 * @see {@link UpdatePublicKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link CannotChangeImmutablePublicKeyFields} (client fault)
 *  <p>You can't change the value of a public key.</p>
 *
 * @throws {@link IllegalUpdate} (client fault)
 *  <p>The update contains modifications that are not allowed.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchPublicKey} (client fault)
 *  <p>The specified public key doesn't exist.</p>
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
export class UpdatePublicKeyCommand extends $Command
  .classBuilder<
    UpdatePublicKeyCommandInput,
    UpdatePublicKeyCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "UpdatePublicKey", {})
  .n("CloudFrontClient", "UpdatePublicKeyCommand")
  .sc(UpdatePublicKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePublicKeyRequest;
      output: UpdatePublicKeyResult;
    };
    sdk: {
      input: UpdatePublicKeyCommandInput;
      output: UpdatePublicKeyCommandOutput;
    };
  };
}
