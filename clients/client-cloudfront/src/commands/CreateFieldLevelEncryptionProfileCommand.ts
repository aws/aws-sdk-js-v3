// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreateFieldLevelEncryptionProfileRequest,
  CreateFieldLevelEncryptionProfileResult,
} from "../models/models_0";
import { CreateFieldLevelEncryptionProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFieldLevelEncryptionProfileCommand}.
 */
export interface CreateFieldLevelEncryptionProfileCommandInput extends CreateFieldLevelEncryptionProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateFieldLevelEncryptionProfileCommand}.
 */
export interface CreateFieldLevelEncryptionProfileCommandOutput
  extends CreateFieldLevelEncryptionProfileResult,
    __MetadataBearer {}

/**
 * <p>Create a field-level encryption profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateFieldLevelEncryptionProfileCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateFieldLevelEncryptionProfileCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // CreateFieldLevelEncryptionProfileRequest
 *   FieldLevelEncryptionProfileConfig: { // FieldLevelEncryptionProfileConfig
 *     Name: "STRING_VALUE", // required
 *     CallerReference: "STRING_VALUE", // required
 *     Comment: "STRING_VALUE",
 *     EncryptionEntities: { // EncryptionEntities
 *       Quantity: Number("int"), // required
 *       Items: [ // EncryptionEntityList
 *         { // EncryptionEntity
 *           PublicKeyId: "STRING_VALUE", // required
 *           ProviderId: "STRING_VALUE", // required
 *           FieldPatterns: { // FieldPatterns
 *             Quantity: Number("int"), // required
 *             Items: [ // FieldPatternList
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new CreateFieldLevelEncryptionProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateFieldLevelEncryptionProfileResult
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
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFieldLevelEncryptionProfileCommandInput - {@link CreateFieldLevelEncryptionProfileCommandInput}
 * @returns {@link CreateFieldLevelEncryptionProfileCommandOutput}
 * @see {@link CreateFieldLevelEncryptionProfileCommandInput} for command's `input` shape.
 * @see {@link CreateFieldLevelEncryptionProfileCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link FieldLevelEncryptionProfileAlreadyExists} (client fault)
 *  <p>The specified profile for field-level encryption already exists.</p>
 *
 * @throws {@link FieldLevelEncryptionProfileSizeExceeded} (client fault)
 *  <p>The maximum size of a profile for field-level encryption was exceeded.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchPublicKey} (client fault)
 *  <p>The specified public key doesn't exist.</p>
 *
 * @throws {@link TooManyFieldLevelEncryptionEncryptionEntities} (client fault)
 *  <p>The maximum number of encryption entities for field-level encryption have been created.</p>
 *
 * @throws {@link TooManyFieldLevelEncryptionFieldPatterns} (client fault)
 *  <p>The maximum number of field patterns for field-level encryption have been created.</p>
 *
 * @throws {@link TooManyFieldLevelEncryptionProfiles} (client fault)
 *  <p>The maximum number of profiles for field-level encryption have been created.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class CreateFieldLevelEncryptionProfileCommand extends $Command
  .classBuilder<
    CreateFieldLevelEncryptionProfileCommandInput,
    CreateFieldLevelEncryptionProfileCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "CreateFieldLevelEncryptionProfile", {})
  .n("CloudFrontClient", "CreateFieldLevelEncryptionProfileCommand")
  .sc(CreateFieldLevelEncryptionProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFieldLevelEncryptionProfileRequest;
      output: CreateFieldLevelEncryptionProfileResult;
    };
    sdk: {
      input: CreateFieldLevelEncryptionProfileCommandInput;
      output: CreateFieldLevelEncryptionProfileCommandOutput;
    };
  };
}
