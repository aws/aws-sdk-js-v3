// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetFieldLevelEncryptionProfileConfigRequest,
  GetFieldLevelEncryptionProfileConfigResult,
} from "../models/models_0";
import { GetFieldLevelEncryptionProfileConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFieldLevelEncryptionProfileConfigCommand}.
 */
export interface GetFieldLevelEncryptionProfileConfigCommandInput extends GetFieldLevelEncryptionProfileConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetFieldLevelEncryptionProfileConfigCommand}.
 */
export interface GetFieldLevelEncryptionProfileConfigCommandOutput
  extends GetFieldLevelEncryptionProfileConfigResult,
    __MetadataBearer {}

/**
 * <p>Get the field-level encryption profile configuration information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetFieldLevelEncryptionProfileConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetFieldLevelEncryptionProfileConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // GetFieldLevelEncryptionProfileConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetFieldLevelEncryptionProfileConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetFieldLevelEncryptionProfileConfigResult
 * //   FieldLevelEncryptionProfileConfig: { // FieldLevelEncryptionProfileConfig
 * //     Name: "STRING_VALUE", // required
 * //     CallerReference: "STRING_VALUE", // required
 * //     Comment: "STRING_VALUE",
 * //     EncryptionEntities: { // EncryptionEntities
 * //       Quantity: Number("int"), // required
 * //       Items: [ // EncryptionEntityList
 * //         { // EncryptionEntity
 * //           PublicKeyId: "STRING_VALUE", // required
 * //           ProviderId: "STRING_VALUE", // required
 * //           FieldPatterns: { // FieldPatterns
 * //             Quantity: Number("int"), // required
 * //             Items: [ // FieldPatternList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFieldLevelEncryptionProfileConfigCommandInput - {@link GetFieldLevelEncryptionProfileConfigCommandInput}
 * @returns {@link GetFieldLevelEncryptionProfileConfigCommandOutput}
 * @see {@link GetFieldLevelEncryptionProfileConfigCommandInput} for command's `input` shape.
 * @see {@link GetFieldLevelEncryptionProfileConfigCommandOutput} for command's `response` shape.
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
export class GetFieldLevelEncryptionProfileConfigCommand extends $Command
  .classBuilder<
    GetFieldLevelEncryptionProfileConfigCommandInput,
    GetFieldLevelEncryptionProfileConfigCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "GetFieldLevelEncryptionProfileConfig", {})
  .n("CloudFrontClient", "GetFieldLevelEncryptionProfileConfigCommand")
  .sc(GetFieldLevelEncryptionProfileConfig$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFieldLevelEncryptionProfileConfigRequest;
      output: GetFieldLevelEncryptionProfileConfigResult;
    };
    sdk: {
      input: GetFieldLevelEncryptionProfileConfigCommandInput;
      output: GetFieldLevelEncryptionProfileConfigCommandOutput;
    };
  };
}
