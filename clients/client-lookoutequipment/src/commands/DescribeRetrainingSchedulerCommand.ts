// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { DescribeRetrainingSchedulerRequest, DescribeRetrainingSchedulerResponse } from "../models/models_0";
import { DescribeRetrainingScheduler } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRetrainingSchedulerCommand}.
 */
export interface DescribeRetrainingSchedulerCommandInput extends DescribeRetrainingSchedulerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRetrainingSchedulerCommand}.
 */
export interface DescribeRetrainingSchedulerCommandOutput
  extends DescribeRetrainingSchedulerResponse,
    __MetadataBearer {}

/**
 * <p>Provides a description of the retraining scheduler, including information such as the
 *          model name and retraining parameters. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DescribeRetrainingSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DescribeRetrainingSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // DescribeRetrainingSchedulerRequest
 *   ModelName: "STRING_VALUE", // required
 * };
 * const command = new DescribeRetrainingSchedulerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRetrainingSchedulerResponse
 * //   ModelName: "STRING_VALUE",
 * //   ModelArn: "STRING_VALUE",
 * //   RetrainingStartDate: new Date("TIMESTAMP"),
 * //   RetrainingFrequency: "STRING_VALUE",
 * //   LookbackWindow: "STRING_VALUE",
 * //   Status: "PENDING" || "RUNNING" || "STOPPING" || "STOPPED",
 * //   PromoteMode: "MANAGED" || "MANUAL",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeRetrainingSchedulerCommandInput - {@link DescribeRetrainingSchedulerCommandInput}
 * @returns {@link DescribeRetrainingSchedulerCommandOutput}
 * @see {@link DescribeRetrainingSchedulerCommandInput} for command's `input` shape.
 * @see {@link DescribeRetrainingSchedulerCommandOutput} for command's `response` shape.
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
 * @example Describes a retraining scheduler
 * ```javascript
 * //
 * const input = {
 *   ModelName: "sample-model"
 * };
 * const command = new DescribeRetrainingSchedulerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CreatedAt: "2023-10-01T15:00:00Z",
 *   LookbackWindow: "P360D",
 *   ModelArn: "arn:aws:lookoutequipment:us-east-1:123456789012:model/sample-model/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   ModelName: "sample-model",
 *   PromoteMode: "MANAGED",
 *   RetrainingFrequency: "P1M",
 *   RetrainingStartDate: "2023-11-01T00:00:00Z",
 *   Status: "RUNNING",
 *   UpdatedAt: "2023-10-01T15:00:00Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeRetrainingSchedulerCommand extends $Command
  .classBuilder<
    DescribeRetrainingSchedulerCommandInput,
    DescribeRetrainingSchedulerCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "DescribeRetrainingScheduler", {})
  .n("LookoutEquipmentClient", "DescribeRetrainingSchedulerCommand")
  .sc(DescribeRetrainingScheduler)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRetrainingSchedulerRequest;
      output: DescribeRetrainingSchedulerResponse;
    };
    sdk: {
      input: DescribeRetrainingSchedulerCommandInput;
      output: DescribeRetrainingSchedulerCommandOutput;
    };
  };
}
