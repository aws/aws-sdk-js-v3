// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LookoutEquipmentClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LookoutEquipmentClient";
import type { CreateInferenceSchedulerRequest, CreateInferenceSchedulerResponse } from "../models/models_0";
import { CreateInferenceScheduler } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInferenceSchedulerCommand}.
 */
export interface CreateInferenceSchedulerCommandInput extends CreateInferenceSchedulerRequest {}
/**
 * @public
 *
 * The output of {@link CreateInferenceSchedulerCommand}.
 */
export interface CreateInferenceSchedulerCommandOutput extends CreateInferenceSchedulerResponse, __MetadataBearer {}

/**
 * <p> Creates a scheduled inference. Scheduling an inference is setting up a continuous
 *          real-time inference plan to analyze new measurement data. When setting up the schedule, you
 *          provide an S3 bucket location for the input data, assign it a delimiter between separate
 *          entries in the data, set an offset delay if desired, and set the frequency of inferencing.
 *          You must also provide an S3 bucket location for the output data. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, CreateInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, CreateInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // CreateInferenceSchedulerRequest
 *   ModelName: "STRING_VALUE", // required
 *   InferenceSchedulerName: "STRING_VALUE", // required
 *   DataDelayOffsetInMinutes: Number("long"),
 *   DataUploadFrequency: "PT5M" || "PT10M" || "PT15M" || "PT30M" || "PT1H", // required
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
 *   RoleArn: "STRING_VALUE", // required
 *   ServerSideKmsKeyId: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * // { // CreateInferenceSchedulerResponse
 * //   InferenceSchedulerArn: "STRING_VALUE",
 * //   InferenceSchedulerName: "STRING_VALUE",
 * //   Status: "PENDING" || "RUNNING" || "STOPPING" || "STOPPED",
 * //   ModelQuality: "QUALITY_THRESHOLD_MET" || "CANNOT_DETERMINE_QUALITY" || "POOR_QUALITY_DETECTED",
 * // };
 *
 * ```
 *
 * @param CreateInferenceSchedulerCommandInput - {@link CreateInferenceSchedulerCommandInput}
 * @returns {@link CreateInferenceSchedulerCommandOutput}
 * @see {@link CreateInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link CreateInferenceSchedulerCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> Resource limitations have been exceeded. </p>
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
export class CreateInferenceSchedulerCommand extends $Command
  .classBuilder<
    CreateInferenceSchedulerCommandInput,
    CreateInferenceSchedulerCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "CreateInferenceScheduler", {})
  .n("LookoutEquipmentClient", "CreateInferenceSchedulerCommand")
  .sc(CreateInferenceScheduler)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInferenceSchedulerRequest;
      output: CreateInferenceSchedulerResponse;
    };
    sdk: {
      input: CreateInferenceSchedulerCommandInput;
      output: CreateInferenceSchedulerCommandOutput;
    };
  };
}
