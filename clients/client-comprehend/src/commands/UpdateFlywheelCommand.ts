// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateFlywheelRequest, UpdateFlywheelResponse } from "../models/models_1";
import { de_UpdateFlywheelCommand, se_UpdateFlywheelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFlywheelCommand}.
 */
export interface UpdateFlywheelCommandInput extends UpdateFlywheelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFlywheelCommand}.
 */
export interface UpdateFlywheelCommandOutput extends UpdateFlywheelResponse, __MetadataBearer {}

/**
 * <p>Update the configuration information for an existing flywheel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, UpdateFlywheelCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, UpdateFlywheelCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // UpdateFlywheelRequest
 *   FlywheelArn: "STRING_VALUE", // required
 *   ActiveModelArn: "STRING_VALUE",
 *   DataAccessRoleArn: "STRING_VALUE",
 *   DataSecurityConfig: { // UpdateDataSecurityConfig
 *     ModelKmsKeyId: "STRING_VALUE",
 *     VolumeKmsKeyId: "STRING_VALUE",
 *     VpcConfig: { // VpcConfig
 *       SecurityGroupIds: [ // SecurityGroupIds // required
 *         "STRING_VALUE",
 *       ],
 *       Subnets: [ // Subnets // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateFlywheelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFlywheelResponse
 * //   FlywheelProperties: { // FlywheelProperties
 * //     FlywheelArn: "STRING_VALUE",
 * //     ActiveModelArn: "STRING_VALUE",
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     TaskConfig: { // TaskConfig
 * //       LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 * //       DocumentClassificationConfig: { // DocumentClassificationConfig
 * //         Mode: "MULTI_CLASS" || "MULTI_LABEL", // required
 * //         Labels: [ // LabelsList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       EntityRecognitionConfig: { // EntityRecognitionConfig
 * //         EntityTypes: [ // EntityTypesList // required
 * //           { // EntityTypesListItem
 * //             Type: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     DataLakeS3Uri: "STRING_VALUE",
 * //     DataSecurityConfig: { // DataSecurityConfig
 * //       ModelKmsKeyId: "STRING_VALUE",
 * //       VolumeKmsKeyId: "STRING_VALUE",
 * //       DataLakeKmsKeyId: "STRING_VALUE",
 * //       VpcConfig: { // VpcConfig
 * //         SecurityGroupIds: [ // SecurityGroupIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Subnets: [ // Subnets // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED",
 * //     ModelType: "DOCUMENT_CLASSIFIER" || "ENTITY_RECOGNIZER",
 * //     Message: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LatestFlywheelIteration: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateFlywheelCommandInput - {@link UpdateFlywheelCommandInput}
 * @returns {@link UpdateFlywheelCommandOutput}
 * @see {@link UpdateFlywheelCommandInput} for command's `input` shape.
 * @see {@link UpdateFlywheelCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link KmsKeyValidationException} (client fault)
 *  <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and
 *       re-enter it.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class UpdateFlywheelCommand extends $Command
  .classBuilder<
    UpdateFlywheelCommandInput,
    UpdateFlywheelCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Comprehend_20171127", "UpdateFlywheel", {})
  .n("ComprehendClient", "UpdateFlywheelCommand")
  .f(void 0, void 0)
  .ser(se_UpdateFlywheelCommand)
  .de(de_UpdateFlywheelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFlywheelRequest;
      output: UpdateFlywheelResponse;
    };
    sdk: {
      input: UpdateFlywheelCommandInput;
      output: UpdateFlywheelCommandOutput;
    };
  };
}
