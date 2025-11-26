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
import type { StopRetrainingSchedulerRequest, StopRetrainingSchedulerResponse } from "../models/models_0";
import { StopRetrainingScheduler } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopRetrainingSchedulerCommand}.
 */
export interface StopRetrainingSchedulerCommandInput extends StopRetrainingSchedulerRequest {}
/**
 * @public
 *
 * The output of {@link StopRetrainingSchedulerCommand}.
 */
export interface StopRetrainingSchedulerCommandOutput extends StopRetrainingSchedulerResponse, __MetadataBearer {}

/**
 * <p>Stops a retraining scheduler. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, StopRetrainingSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, StopRetrainingSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // StopRetrainingSchedulerRequest
 *   ModelName: "STRING_VALUE", // required
 * };
 * const command = new StopRetrainingSchedulerCommand(input);
 * const response = await client.send(command);
 * // { // StopRetrainingSchedulerResponse
 * //   ModelName: "STRING_VALUE",
 * //   ModelArn: "STRING_VALUE",
 * //   Status: "PENDING" || "RUNNING" || "STOPPING" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StopRetrainingSchedulerCommandInput - {@link StopRetrainingSchedulerCommandInput}
 * @returns {@link StopRetrainingSchedulerCommandOutput}
 * @see {@link StopRetrainingSchedulerCommandInput} for command's `input` shape.
 * @see {@link StopRetrainingSchedulerCommandOutput} for command's `response` shape.
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
 * @example Stops a retraining scheduler
 * ```javascript
 * //
 * const input = {
 *   ModelName: "sample-model"
 * };
 * const command = new StopRetrainingSchedulerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ModelArn: "arn:aws:lookoutequipment:us-east-1:123456789012:model/sample-model/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   ModelName: "sample-model",
 *   Status: "STOPPING"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StopRetrainingSchedulerCommand extends $Command
  .classBuilder<
    StopRetrainingSchedulerCommandInput,
    StopRetrainingSchedulerCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "StopRetrainingScheduler", {})
  .n("LookoutEquipmentClient", "StopRetrainingSchedulerCommand")
  .sc(StopRetrainingScheduler)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopRetrainingSchedulerRequest;
      output: StopRetrainingSchedulerResponse;
    };
    sdk: {
      input: StopRetrainingSchedulerCommandInput;
      output: StopRetrainingSchedulerCommandOutput;
    };
  };
}
