// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetFieldLevelEncryptionProfileRequest, GetFieldLevelEncryptionProfileResult } from "../models/models_0";
import { GetFieldLevelEncryptionProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFieldLevelEncryptionProfileCommand}.
 */
export interface GetFieldLevelEncryptionProfileCommandInput extends GetFieldLevelEncryptionProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetFieldLevelEncryptionProfileCommand}.
 */
export interface GetFieldLevelEncryptionProfileCommandOutput
  extends GetFieldLevelEncryptionProfileResult,
    __MetadataBearer {}

/**
 * <p>Get the field-level encryption profile information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetFieldLevelEncryptionProfileCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetFieldLevelEncryptionProfileCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // GetFieldLevelEncryptionProfileRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetFieldLevelEncryptionProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetFieldLevelEncryptionProfileResult
 * //   FieldLevelEncryptionProfile: { // FieldLevelEncryptionProfile
 * //     Id: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     FieldLevelEncryptionProfileConfig: { // FieldLevelEncryptionProfileConfig
 * //       Name: "STRING_VALUE", // required
 * //       CallerReference: "STRING_VALUE", // required
 * //       Comment: "STRING_VALUE",
 * //       EncryptionEntities: { // EncryptionEntities
 * //         Quantity: Number("int"), // required
 * //         Items: [ // EncryptionEntityList
 * //           { // EncryptionEntity
 * //             PublicKeyId: "STRING_VALUE", // required
 * //             ProviderId: "STRING_VALUE", // required
 * //             FieldPatterns: { // FieldPatterns
 * //               Quantity: Number("int"), // required
 * //               Items: [ // FieldPatternList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
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
 * @param GetFieldLevelEncryptionProfileCommandInput - {@link GetFieldLevelEncryptionProfileCommandInput}
 * @returns {@link GetFieldLevelEncryptionProfileCommandOutput}
 * @see {@link GetFieldLevelEncryptionProfileCommandInput} for command's `input` shape.
 * @see {@link GetFieldLevelEncryptionProfileCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchFieldLevelEncryptionProfile} (client fault)
 *  <p>The specified profile for field-level encryption doesn't exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class GetFieldLevelEncryptionProfileCommand extends $Command
  .classBuilder<
    GetFieldLevelEncryptionProfileCommandInput,
    GetFieldLevelEncryptionProfileCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "GetFieldLevelEncryptionProfile", {})
  .n("CloudFrontClient", "GetFieldLevelEncryptionProfileCommand")
  .sc(GetFieldLevelEncryptionProfile$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFieldLevelEncryptionProfileRequest;
      output: GetFieldLevelEncryptionProfileResult;
    };
    sdk: {
      input: GetFieldLevelEncryptionProfileCommandInput;
      output: GetFieldLevelEncryptionProfileCommandOutput;
    };
  };
}
