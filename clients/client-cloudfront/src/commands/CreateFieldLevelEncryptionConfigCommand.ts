// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFieldLevelEncryptionConfigRequest, CreateFieldLevelEncryptionConfigResult } from "../models/models_0";
import {
  de_CreateFieldLevelEncryptionConfigCommand,
  se_CreateFieldLevelEncryptionConfigCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFieldLevelEncryptionConfigCommand}.
 */
export interface CreateFieldLevelEncryptionConfigCommandInput extends CreateFieldLevelEncryptionConfigRequest {}
/**
 * @public
 *
 * The output of {@link CreateFieldLevelEncryptionConfigCommand}.
 */
export interface CreateFieldLevelEncryptionConfigCommandOutput
  extends CreateFieldLevelEncryptionConfigResult,
    __MetadataBearer {}

/**
 * <p>Create a new field-level encryption configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateFieldLevelEncryptionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateFieldLevelEncryptionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // CreateFieldLevelEncryptionConfigRequest
 *   FieldLevelEncryptionConfig: { // FieldLevelEncryptionConfig
 *     CallerReference: "STRING_VALUE", // required
 *     Comment: "STRING_VALUE",
 *     QueryArgProfileConfig: { // QueryArgProfileConfig
 *       ForwardWhenQueryArgProfileIsUnknown: true || false, // required
 *       QueryArgProfiles: { // QueryArgProfiles
 *         Quantity: Number("int"), // required
 *         Items: [ // QueryArgProfileList
 *           { // QueryArgProfile
 *             QueryArg: "STRING_VALUE", // required
 *             ProfileId: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *     ContentTypeProfileConfig: { // ContentTypeProfileConfig
 *       ForwardWhenContentTypeIsUnknown: true || false, // required
 *       ContentTypeProfiles: { // ContentTypeProfiles
 *         Quantity: Number("int"), // required
 *         Items: [ // ContentTypeProfileList
 *           { // ContentTypeProfile
 *             Format: "URLEncoded", // required
 *             ProfileId: "STRING_VALUE",
 *             ContentType: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   },
 * };
 * const command = new CreateFieldLevelEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateFieldLevelEncryptionConfigResult
 * //   FieldLevelEncryption: { // FieldLevelEncryption
 * //     Id: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     FieldLevelEncryptionConfig: { // FieldLevelEncryptionConfig
 * //       CallerReference: "STRING_VALUE", // required
 * //       Comment: "STRING_VALUE",
 * //       QueryArgProfileConfig: { // QueryArgProfileConfig
 * //         ForwardWhenQueryArgProfileIsUnknown: true || false, // required
 * //         QueryArgProfiles: { // QueryArgProfiles
 * //           Quantity: Number("int"), // required
 * //           Items: [ // QueryArgProfileList
 * //             { // QueryArgProfile
 * //               QueryArg: "STRING_VALUE", // required
 * //               ProfileId: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       ContentTypeProfileConfig: { // ContentTypeProfileConfig
 * //         ForwardWhenContentTypeIsUnknown: true || false, // required
 * //         ContentTypeProfiles: { // ContentTypeProfiles
 * //           Quantity: Number("int"), // required
 * //           Items: [ // ContentTypeProfileList
 * //             { // ContentTypeProfile
 * //               Format: "URLEncoded", // required
 * //               ProfileId: "STRING_VALUE",
 * //               ContentType: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   },
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFieldLevelEncryptionConfigCommandInput - {@link CreateFieldLevelEncryptionConfigCommandInput}
 * @returns {@link CreateFieldLevelEncryptionConfigCommandOutput}
 * @see {@link CreateFieldLevelEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link CreateFieldLevelEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link FieldLevelEncryptionConfigAlreadyExists} (client fault)
 *  <p>The specified configuration for field-level encryption already exists.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchFieldLevelEncryptionProfile} (client fault)
 *  <p>The specified profile for field-level encryption doesn't exist.</p>
 *
 * @throws {@link QueryArgProfileEmpty} (client fault)
 *  <p>No profile specified for the field-level encryption query argument.</p>
 *
 * @throws {@link TooManyFieldLevelEncryptionConfigs} (client fault)
 *  <p>The maximum number of configurations for field-level encryption have been created.</p>
 *
 * @throws {@link TooManyFieldLevelEncryptionContentTypeProfiles} (client fault)
 *  <p>The maximum number of content type profiles for field-level encryption have been created.</p>
 *
 * @throws {@link TooManyFieldLevelEncryptionQueryArgProfiles} (client fault)
 *  <p>The maximum number of query arg profiles for field-level encryption have been created.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class CreateFieldLevelEncryptionConfigCommand extends $Command
  .classBuilder<
    CreateFieldLevelEncryptionConfigCommandInput,
    CreateFieldLevelEncryptionConfigCommandOutput,
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
  .s("Cloudfront2020_05_31", "CreateFieldLevelEncryptionConfig", {})
  .n("CloudFrontClient", "CreateFieldLevelEncryptionConfigCommand")
  .f(void 0, void 0)
  .ser(se_CreateFieldLevelEncryptionConfigCommand)
  .de(de_CreateFieldLevelEncryptionConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFieldLevelEncryptionConfigRequest;
      output: CreateFieldLevelEncryptionConfigResult;
    };
    sdk: {
      input: CreateFieldLevelEncryptionConfigCommandInput;
      output: CreateFieldLevelEncryptionConfigCommandOutput;
    };
  };
}
