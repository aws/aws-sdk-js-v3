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
import type { StopInferenceSchedulerRequest, StopInferenceSchedulerResponse } from "../models/models_0";
import { StopInferenceScheduler$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopInferenceSchedulerCommand}.
 */
export interface StopInferenceSchedulerCommandInput extends StopInferenceSchedulerRequest {}
/**
 * @public
 *
 * The output of {@link StopInferenceSchedulerCommand}.
 */
export interface StopInferenceSchedulerCommandOutput extends StopInferenceSchedulerResponse, __MetadataBearer {}

/**
 * <p>Stops an inference scheduler. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, StopInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, StopInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // StopInferenceSchedulerRequest
 *   InferenceSchedulerName: "STRING_VALUE", // required
 * };
 * const command = new StopInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * // { // StopInferenceSchedulerResponse
 * //   ModelArn: "STRING_VALUE",
 * //   ModelName: "STRING_VALUE",
 * //   InferenceSchedulerName: "STRING_VALUE",
 * //   InferenceSchedulerArn: "STRING_VALUE",
 * //   Status: "PENDING" || "RUNNING" || "STOPPING" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StopInferenceSchedulerCommandInput - {@link StopInferenceSchedulerCommandInput}
 * @returns {@link StopInferenceSchedulerCommandOutput}
 * @see {@link StopInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link StopInferenceSchedulerCommandOutput} for command's `response` shape.
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
export class StopInferenceSchedulerCommand extends $Command
  .classBuilder<
    StopInferenceSchedulerCommandInput,
    StopInferenceSchedulerCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "StopInferenceScheduler", {})
  .n("LookoutEquipmentClient", "StopInferenceSchedulerCommand")
  .sc(StopInferenceScheduler$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopInferenceSchedulerRequest;
      output: StopInferenceSchedulerResponse;
    };
    sdk: {
      input: StopInferenceSchedulerCommandInput;
      output: StopInferenceSchedulerCommandOutput;
    };
  };
}
