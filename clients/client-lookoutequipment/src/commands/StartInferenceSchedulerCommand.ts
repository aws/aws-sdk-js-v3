// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { StartInferenceSchedulerRequest, StartInferenceSchedulerResponse } from "../models/models_0";
import { StartInferenceScheduler } from "../schemas/schemas_2_Inference";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartInferenceSchedulerCommand}.
 */
export interface StartInferenceSchedulerCommandInput extends StartInferenceSchedulerRequest {}
/**
 * @public
 *
 * The output of {@link StartInferenceSchedulerCommand}.
 */
export interface StartInferenceSchedulerCommandOutput extends StartInferenceSchedulerResponse, __MetadataBearer {}

/**
 * <p>Starts an inference scheduler. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, StartInferenceSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, StartInferenceSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // StartInferenceSchedulerRequest
 *   InferenceSchedulerName: "STRING_VALUE", // required
 * };
 * const command = new StartInferenceSchedulerCommand(input);
 * const response = await client.send(command);
 * // { // StartInferenceSchedulerResponse
 * //   ModelArn: "STRING_VALUE",
 * //   ModelName: "STRING_VALUE",
 * //   InferenceSchedulerName: "STRING_VALUE",
 * //   InferenceSchedulerArn: "STRING_VALUE",
 * //   Status: "PENDING" || "RUNNING" || "STOPPING" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StartInferenceSchedulerCommandInput - {@link StartInferenceSchedulerCommandInput}
 * @returns {@link StartInferenceSchedulerCommandOutput}
 * @see {@link StartInferenceSchedulerCommandInput} for command's `input` shape.
 * @see {@link StartInferenceSchedulerCommandOutput} for command's `response` shape.
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
export class StartInferenceSchedulerCommand extends $Command
  .classBuilder<
    StartInferenceSchedulerCommandInput,
    StartInferenceSchedulerCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "StartInferenceScheduler", {})
  .n("LookoutEquipmentClient", "StartInferenceSchedulerCommand")
  .sc(StartInferenceScheduler)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartInferenceSchedulerRequest;
      output: StartInferenceSchedulerResponse;
    };
    sdk: {
      input: StartInferenceSchedulerCommandInput;
      output: StartInferenceSchedulerCommandOutput;
    };
  };
}
