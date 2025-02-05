// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateFieldLevelEncryptionProfileRequest, UpdateFieldLevelEncryptionProfileResult } from "../models/models_1";
import {
  de_UpdateFieldLevelEncryptionProfileCommand,
  se_UpdateFieldLevelEncryptionProfileCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface UpdateFieldLevelEncryptionProfileCommandOutput
  extends UpdateFieldLevelEncryptionProfileResult,
    __MetadataBearer {}

/**
 * <p>Update a field-level encryption profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateFieldLevelEncryptionProfileCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateFieldLevelEncryptionProfileCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>Access denied.</p>
 *
 * @throws {@link FieldLevelEncryptionProfileAlreadyExists} (client fault)
 *  <p>The specified profile for field-level encryption already exists.</p>
 *
 * @throws {@link FieldLevelEncryptionProfileSizeExceeded} (client fault)
 *  <p>The maximum size of a profile for field-level encryption was exceeded.</p>
 *
 * @throws {@link IllegalUpdate} (client fault)
 *  <p>The update contains modifications that are not allowed.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't
 * 			match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchFieldLevelEncryptionProfile} (client fault)
 *  <p>The specified profile for field-level encryption doesn't exist.</p>
 *
 * @throws {@link NoSuchPublicKey} (client fault)
 *  <p>The specified public key doesn't exist.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
 *
 * @throws {@link TooManyFieldLevelEncryptionEncryptionEntities} (client fault)
 *  <p>The maximum number of encryption entities for field-level encryption have been
 * 			created.</p>
 *
 * @throws {@link TooManyFieldLevelEncryptionFieldPatterns} (client fault)
 *  <p>The maximum number of field patterns for field-level encryption have been
 * 			created.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 */
export class UpdateFieldLevelEncryptionProfileCommand extends $Command
  .classBuilder<
    UpdateFieldLevelEncryptionProfileCommandInput,
    UpdateFieldLevelEncryptionProfileCommandOutput,
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
  .s("Cloudfront2020_05_31", "UpdateFieldLevelEncryptionProfile", {})
  .n("CloudFrontClient", "UpdateFieldLevelEncryptionProfileCommand")
  .f(void 0, void 0)
  .ser(se_UpdateFieldLevelEncryptionProfileCommand)
  .de(de_UpdateFieldLevelEncryptionProfileCommand)
  .build() {
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
