// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateFieldLevelEncryptionConfigRequest,
  CreateFieldLevelEncryptionConfigResult,
} from "../models/models_0";
import { CreateFieldLevelEncryptionConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateFieldLevelEncryptionConfigCommandOutput extends CreateFieldLevelEncryptionConfigResult, __MetadataBearer {}

/**
 * Create a new field-level encryption configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateFieldLevelEncryptionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateFieldLevelEncryptionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
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
 *
 * The specified configuration for field-level encryption already exists.
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *
 * The value of `Quantity` and the size of `Items` don't match.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link NoSuchFieldLevelEncryptionProfile} (client fault)
 *
 * The specified profile for field-level encryption doesn't exist.
 *
 * @throws {@link QueryArgProfileEmpty} (client fault)
 *
 * No profile specified for the field-level encryption query argument.
 *
 * @throws {@link TooManyFieldLevelEncryptionConfigs} (client fault)
 *
 * The maximum number of configurations for field-level encryption have been created.
 *
 * @throws {@link TooManyFieldLevelEncryptionContentTypeProfiles} (client fault)
 *
 * The maximum number of content type profiles for field-level encryption have been created.
 *
 * @throws {@link TooManyFieldLevelEncryptionQueryArgProfiles} (client fault)
 *
 * The maximum number of query arg profiles for field-level encryption have been created.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class CreateFieldLevelEncryptionConfigCommand extends command<CreateFieldLevelEncryptionConfigCommandInput, CreateFieldLevelEncryptionConfigCommandOutput>(
  _ep0,
  _mw0,
  "CreateFieldLevelEncryptionConfig",
  CreateFieldLevelEncryptionConfig$
) {
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
