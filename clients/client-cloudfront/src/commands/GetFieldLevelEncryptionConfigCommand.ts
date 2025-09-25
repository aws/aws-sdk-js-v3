// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetFieldLevelEncryptionConfigRequest, GetFieldLevelEncryptionConfigResult } from "../models/models_1";
import { GetFieldLevelEncryptionConfig } from "../schemas/schemas_32_Distribution";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFieldLevelEncryptionConfigCommand}.
 */
export interface GetFieldLevelEncryptionConfigCommandInput extends GetFieldLevelEncryptionConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetFieldLevelEncryptionConfigCommand}.
 */
export interface GetFieldLevelEncryptionConfigCommandOutput
  extends GetFieldLevelEncryptionConfigResult,
    __MetadataBearer {}

/**
 * <p>Get the field-level encryption configuration information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetFieldLevelEncryptionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetFieldLevelEncryptionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // GetFieldLevelEncryptionConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetFieldLevelEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetFieldLevelEncryptionConfigResult
 * //   FieldLevelEncryptionConfig: { // FieldLevelEncryptionConfig
 * //     CallerReference: "STRING_VALUE", // required
 * //     Comment: "STRING_VALUE",
 * //     QueryArgProfileConfig: { // QueryArgProfileConfig
 * //       ForwardWhenQueryArgProfileIsUnknown: true || false, // required
 * //       QueryArgProfiles: { // QueryArgProfiles
 * //         Quantity: Number("int"), // required
 * //         Items: [ // QueryArgProfileList
 * //           { // QueryArgProfile
 * //             QueryArg: "STRING_VALUE", // required
 * //             ProfileId: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     ContentTypeProfileConfig: { // ContentTypeProfileConfig
 * //       ForwardWhenContentTypeIsUnknown: true || false, // required
 * //       ContentTypeProfiles: { // ContentTypeProfiles
 * //         Quantity: Number("int"), // required
 * //         Items: [ // ContentTypeProfileList
 * //           { // ContentTypeProfile
 * //             Format: "URLEncoded", // required
 * //             ProfileId: "STRING_VALUE",
 * //             ContentType: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFieldLevelEncryptionConfigCommandInput - {@link GetFieldLevelEncryptionConfigCommandInput}
 * @returns {@link GetFieldLevelEncryptionConfigCommandOutput}
 * @see {@link GetFieldLevelEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link GetFieldLevelEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchFieldLevelEncryptionConfig} (client fault)
 *  <p>The specified configuration for field-level encryption doesn't exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class GetFieldLevelEncryptionConfigCommand extends $Command
  .classBuilder<
    GetFieldLevelEncryptionConfigCommandInput,
    GetFieldLevelEncryptionConfigCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "GetFieldLevelEncryptionConfig", {})
  .n("CloudFrontClient", "GetFieldLevelEncryptionConfigCommand")
  .sc(GetFieldLevelEncryptionConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFieldLevelEncryptionConfigRequest;
      output: GetFieldLevelEncryptionConfigResult;
    };
    sdk: {
      input: GetFieldLevelEncryptionConfigCommandInput;
      output: GetFieldLevelEncryptionConfigCommandOutput;
    };
  };
}
