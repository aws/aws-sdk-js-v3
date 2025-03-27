// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { UpdateInferenceSchedulerRequest } from "../models/models_0";
import { de_UpdateInferenceSchedulerCommand, se_UpdateInferenceSchedulerCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateInferenceSchedulerCommand}.
 */
export interface UpdateInferenceSchedulerCommandInput extends UpdateInferenceSchedulerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInferenceSchedulerCommand}.
 */
export interface UpdateInferenceSchedulerCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates an inference scheduler. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, UpdateInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, UpdateInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // UpdateInferenceSchedulerRequest
 *   InferenceSchedulerName: "STRING_VALUE", // required
 *   DataDelayOffsetInMinutes: Number("long"),
 *   DataUploadFrequency: "PT5M" || "PT10M" || "PT15M" || "PT30M" || "PT1H",
 *   DataInputConfiguration: { // InferenceInputConfiguration
 *     S3InputConfiguration: { // InferenceS3InputConfiguration
 *       Bucket: "STRING_VALUE", // required
 *       Prefix: "STRING_VALUE",
 *     },
 *     InputTimeZoneOffset: "STRING_VALUE",
 *     InferenceInputNameConfiguration: { // InferenceInputNameConfiguration
 *       TimestampFormat: "STRING_VALUE",
 *       ComponentTimestampDelimiter: "STRING_VALUE",
 *     },
 *   },
 *   DataOutputConfiguration: { // InferenceOutputConfiguration
 *     S3OutputConfiguration: { // InferenceS3OutputConfiguration
 *       Bucket: "STRING_VALUE", // required
 *       Prefix: "STRING_VALUE",
 *     },
 *     KmsKeyId: "STRING_VALUE",
 *   },
 *   RoleArn: "STRING_VALUE",
 * };
 * const command = new UpdateInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateInferenceSchedulerCommandInput - {@link UpdateInferenceSchedulerCommandInput}
 * @returns {@link UpdateInferenceSchedulerCommandOutput}
 * @see {@link UpdateInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link UpdateInferenceSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> The request could not be completed due to a conflict with the current state of the
 *          target resource. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource requested could not be found. Verify the resource ID and retry your
 *          request. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services
 *          service that's being utilized. </p>
 *
 * @throws {@link LookoutEquipmentServiceException}
 * <p>Base exception class for all service exceptions from LookoutEquipment service.</p>
 *
 *
 * @public
 */
export class UpdateInferenceSchedulerCommand extends $Command
  .classBuilder<
    UpdateInferenceSchedulerCommandInput,
    UpdateInferenceSchedulerCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLookoutEquipmentFrontendService", "UpdateInferenceScheduler", {})
  .n("LookoutEquipmentClient", "UpdateInferenceSchedulerCommand")
  .f(void 0, void 0)
  .ser(se_UpdateInferenceSchedulerCommand)
  .de(de_UpdateInferenceSchedulerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInferenceSchedulerRequest;
      output: {};
    };
    sdk: {
      input: UpdateInferenceSchedulerCommandInput;
      output: UpdateInferenceSchedulerCommandOutput;
    };
  };
}
