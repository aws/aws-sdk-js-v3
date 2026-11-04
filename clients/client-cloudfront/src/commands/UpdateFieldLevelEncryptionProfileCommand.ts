// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateFieldLevelEncryptionProfileRequest,
  UpdateFieldLevelEncryptionProfileResult,
} from "../models/models_1";
import { UpdateFieldLevelEncryptionProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFieldLevelEncryptionProfileCommand}.
 */
export interface UpdateFieldLevelEncryptionProfileCommandInput extends UpdateFieldLevelEncryptionProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFieldLevelEncryptionProfileCommand}.
 */
export interface UpdateFieldLevelEncryptionProfileCommandOutput extends UpdateFieldLevelEncryptionProfileResult, __MetadataBearer {}

/**
 * Update a field-level encryption profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateFieldLevelEncryptionProfileCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateFieldLevelEncryptionProfileCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateFieldLevelEncryptionProfileRequest
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
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdateFieldLevelEncryptionProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFieldLevelEncryptionProfileResult
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
 * @param UpdateFieldLevelEncryptionProfileCommandInput - {@link UpdateFieldLevelEncryptionProfileCommandInput}
 * @returns {@link UpdateFieldLevelEncryptionProfileCommandOutput}
 * @see {@link UpdateFieldLevelEncryptionProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateFieldLevelEncryptionProfileCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link FieldLevelEncryptionProfileAlreadyExists} (client fault)
 *
 * The specified profile for field-level encryption already exists.
 *
 * @throws {@link FieldLevelEncryptionProfileSizeExceeded} (client fault)
 *
 * The maximum size of a profile for field-level encryption was exceeded.
 *
 * @throws {@link IllegalUpdate} (client fault)
 *
 * The update contains modifications that are not allowed.
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *
 * The value of `Quantity` and the size of `Items` don't match.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link NoSuchFieldLevelEncryptionProfile} (client fault)
 *
 * The specified profile for field-level encryption doesn't exist.
 *
 * @throws {@link NoSuchPublicKey} (client fault)
 *
 * The specified public key doesn't exist.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link TooManyFieldLevelEncryptionEncryptionEntities} (client fault)
 *
 * The maximum number of encryption entities for field-level encryption have been created.
 *
 * @throws {@link TooManyFieldLevelEncryptionFieldPatterns} (client fault)
 *
 * The maximum number of field patterns for field-level encryption have been created.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class UpdateFieldLevelEncryptionProfileCommand extends command<UpdateFieldLevelEncryptionProfileCommandInput, UpdateFieldLevelEncryptionProfileCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFieldLevelEncryptionProfile",
  UpdateFieldLevelEncryptionProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFieldLevelEncryptionProfileRequest;
      output: UpdateFieldLevelEncryptionProfileResult;
    };
    sdk: {
      input: UpdateFieldLevelEncryptionProfileCommandInput;
      output: UpdateFieldLevelEncryptionProfileCommandOutput;
    };
  };
}
