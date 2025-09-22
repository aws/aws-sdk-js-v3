// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { DescribeInferenceSchedulerRequest, DescribeInferenceSchedulerResponse } from "../models/models_0";
import { DescribeInferenceScheduler } from "../schemas/schemas_1_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInferenceSchedulerCommand}.
 */
export interface DescribeInferenceSchedulerCommandInput extends DescribeInferenceSchedulerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInferenceSchedulerCommand}.
 */
export interface DescribeInferenceSchedulerCommandOutput extends DescribeInferenceSchedulerResponse, __MetadataBearer {}

/**
 * <p> Specifies information about the inference scheduler being used, including name, model,
 *          status, and associated metadata </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DescribeInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // DescribeInferenceSchedulerRequest
 *   InferenceSchedulerName: "STRING_VALUE", // required
 * };
 * const command = new DescribeInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInferenceSchedulerResponse
 * //   ModelArn: "STRING_VALUE",
 * //   ModelName: "STRING_VALUE",
 * //   InferenceSchedulerName: "STRING_VALUE",
 * //   InferenceSchedulerArn: "STRING_VALUE",
 * //   Status: "PENDING" || "RUNNING" || "STOPPING" || "STOPPED",
 * //   DataDelayOffsetInMinutes: Number("long"),
 * //   DataUploadFrequency: "PT5M" || "PT10M" || "PT15M" || "PT30M" || "PT1H",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   DataInputConfiguration: { // InferenceInputConfiguration
 * //     S3InputConfiguration: { // InferenceS3InputConfiguration
 * //       Bucket: "STRING_VALUE", // required
 * //       Prefix: "STRING_VALUE",
 * //     },
 * //     InputTimeZoneOffset: "STRING_VALUE",
 * //     InferenceInputNameConfiguration: { // InferenceInputNameConfiguration
 * //       TimestampFormat: "STRING_VALUE",
 * //       ComponentTimestampDelimiter: "STRING_VALUE",
 * //     },
 * //   },
 * //   DataOutputConfiguration: { // InferenceOutputConfiguration
 * //     S3OutputConfiguration: { // InferenceS3OutputConfiguration
 * //       Bucket: "STRING_VALUE", // required
 * //       Prefix: "STRING_VALUE",
 * //     },
 * //     KmsKeyId: "STRING_VALUE",
 * //   },
 * //   RoleArn: "STRING_VALUE",
 * //   ServerSideKmsKeyId: "STRING_VALUE",
 * //   LatestInferenceResult: "ANOMALOUS" || "NORMAL",
 * // };
 *
 * ```
 *
 * @param DescribeInferenceSchedulerCommandInput - {@link DescribeInferenceSchedulerCommandInput}
 * @returns {@link DescribeInferenceSchedulerCommandOutput}
 * @see {@link DescribeInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link DescribeInferenceSchedulerCommandOutput} for command's `response` shape.
 * @see {@link LookoutEquipmentClientResolvedConfig | config} for LookoutEquipmentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have access to the resource.
 *       </p>
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
export class DescribeInferenceSchedulerCommand extends $Command
  .classBuilder<
    DescribeInferenceSchedulerCommandInput,
    DescribeInferenceSchedulerCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "DescribeInferenceScheduler", {})
  .n("LookoutEquipmentClient", "DescribeInferenceSchedulerCommand")
  .sc(DescribeInferenceScheduler)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInferenceSchedulerRequest;
      output: DescribeInferenceSchedulerResponse;
    };
    sdk: {
      input: DescribeInferenceSchedulerCommandInput;
      output: DescribeInferenceSchedulerCommandOutput;
    };
  };
}
