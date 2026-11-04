// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateFieldLevelEncryptionProfileRequest,
  CreateFieldLevelEncryptionProfileResult,
} from "../models/models_0";
import { CreateFieldLevelEncryptionProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateFieldLevelEncryptionProfileCommandOutput extends CreateFieldLevelEncryptionProfileResult, __MetadataBearer {}

/**
 * Create a field-level encryption profile.
 *
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
 *
 * The specified profile for field-level encryption already exists.
 *
 * @throws {@link FieldLevelEncryptionProfileSizeExceeded} (client fault)
 *
 * The maximum size of a profile for field-level encryption was exceeded.
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *
 * The value of `Quantity` and the size of `Items` don't match.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link NoSuchPublicKey} (client fault)
 *
 * The specified public key doesn't exist.
 *
 * @throws {@link TooManyFieldLevelEncryptionEncryptionEntities} (client fault)
 *
 * The maximum number of encryption entities for field-level encryption have been created.
 *
 * @throws {@link TooManyFieldLevelEncryptionFieldPatterns} (client fault)
 *
 * The maximum number of field patterns for field-level encryption have been created.
 *
 * @throws {@link TooManyFieldLevelEncryptionProfiles} (client fault)
 *
 * The maximum number of profiles for field-level encryption have been created.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class CreateFieldLevelEncryptionProfileCommand extends command<CreateFieldLevelEncryptionProfileCommandInput, CreateFieldLevelEncryptionProfileCommandOutput>(
  _ep0,
  _mw0,
  "CreateFieldLevelEncryptionProfile",
  CreateFieldLevelEncryptionProfile$
) {
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
