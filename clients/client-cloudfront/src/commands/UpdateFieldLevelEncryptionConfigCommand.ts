// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateFieldLevelEncryptionConfigRequest,
  UpdateFieldLevelEncryptionConfigResult,
} from "../models/models_1";
import { UpdateFieldLevelEncryptionConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFieldLevelEncryptionConfigCommand}.
 */
export interface UpdateFieldLevelEncryptionConfigCommandInput extends UpdateFieldLevelEncryptionConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFieldLevelEncryptionConfigCommand}.
 */
export interface UpdateFieldLevelEncryptionConfigCommandOutput extends UpdateFieldLevelEncryptionConfigResult, __MetadataBearer {}

/**
 * Update a field-level encryption configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateFieldLevelEncryptionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateFieldLevelEncryptionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateFieldLevelEncryptionConfigRequest
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
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdateFieldLevelEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFieldLevelEncryptionConfigResult
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
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateFieldLevelEncryptionConfigCommandInput - {@link UpdateFieldLevelEncryptionConfigCommandInput}
 * @returns {@link UpdateFieldLevelEncryptionConfigCommandOutput}
 * @see {@link UpdateFieldLevelEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateFieldLevelEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
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
 * @throws {@link NoSuchFieldLevelEncryptionConfig} (client fault)
 *
 * The specified configuration for field-level encryption doesn't exist.
 *
 * @throws {@link NoSuchFieldLevelEncryptionProfile} (client fault)
 *
 * The specified profile for field-level encryption doesn't exist.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link QueryArgProfileEmpty} (client fault)
 *
 * No profile specified for the field-level encryption query argument.
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
export class UpdateFieldLevelEncryptionConfigCommand extends command<UpdateFieldLevelEncryptionConfigCommandInput, UpdateFieldLevelEncryptionConfigCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFieldLevelEncryptionConfig",
  UpdateFieldLevelEncryptionConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFieldLevelEncryptionConfigRequest;
      output: UpdateFieldLevelEncryptionConfigResult;
    };
    sdk: {
      input: UpdateFieldLevelEncryptionConfigCommandInput;
      output: UpdateFieldLevelEncryptionConfigCommandOutput;
    };
  };
}
