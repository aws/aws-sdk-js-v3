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
import type { UpdateRetrainingSchedulerRequest } from "../models/models_0";
import { UpdateRetrainingScheduler$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRetrainingSchedulerCommand}.
 */
export interface UpdateRetrainingSchedulerCommandInput extends UpdateRetrainingSchedulerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRetrainingSchedulerCommand}.
 */
export interface UpdateRetrainingSchedulerCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates a retraining scheduler. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, UpdateRetrainingSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, UpdateRetrainingSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
 * const client = new LookoutEquipmentClient(config);
 * const input = { // UpdateRetrainingSchedulerRequest
 *   ModelName: "STRING_VALUE", // required
 *   RetrainingStartDate: new Date("TIMESTAMP"),
 *   RetrainingFrequency: "STRING_VALUE",
 *   LookbackWindow: "STRING_VALUE",
 *   PromoteMode: "MANAGED" || "MANUAL",
 * };
 * const command = new UpdateRetrainingSchedulerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRetrainingSchedulerCommandInput - {@link UpdateRetrainingSchedulerCommandInput}
 * @returns {@link UpdateRetrainingSchedulerCommandOutput}
 * @see {@link UpdateRetrainingSchedulerCommandInput} for command's `input` shape.
 * @see {@link UpdateRetrainingSchedulerCommandOutput} for command's `response` shape.
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
 * @example Updates a retraining scheduler
 * ```javascript
 * //
 * const input = {
 *   ModelName: "sample-model",
 *   RetrainingFrequency: "P1Y",
 *   RetrainingStartDate: "2024-01-01T00:00:00Z"
 * };
 * const command = new UpdateRetrainingSchedulerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateRetrainingSchedulerCommand extends $Command
  .classBuilder<
    UpdateRetrainingSchedulerCommandInput,
    UpdateRetrainingSchedulerCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLookoutEquipmentFrontendService", "UpdateRetrainingScheduler", {})
  .n("LookoutEquipmentClient", "UpdateRetrainingSchedulerCommand")
  .sc(UpdateRetrainingScheduler$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRetrainingSchedulerRequest;
      output: {};
    };
    sdk: {
      input: UpdateRetrainingSchedulerCommandInput;
      output: UpdateRetrainingSchedulerCommandOutput;
    };
  };
}
