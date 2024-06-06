// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { DeleteRetrainingSchedulerRequest } from "../models/models_0";
import { de_DeleteRetrainingSchedulerCommand, se_DeleteRetrainingSchedulerCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRetrainingSchedulerCommand}.
 */
export interface DeleteRetrainingSchedulerCommandInput extends DeleteRetrainingSchedulerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRetrainingSchedulerCommand}.
 */
export interface DeleteRetrainingSchedulerCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a retraining scheduler from a model. The retraining scheduler must be in the
 *             <code>STOPPED</code> status. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DeleteRetrainingSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DeleteRetrainingSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * const client = new LookoutEquipmentClient(config);
 * const input = { // DeleteRetrainingSchedulerRequest
 *   ModelName: "STRING_VALUE", // required
 * };
 * const command = new DeleteRetrainingSchedulerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRetrainingSchedulerCommandInput - {@link DeleteRetrainingSchedulerCommandInput}
 * @returns {@link DeleteRetrainingSchedulerCommandOutput}
 * @see {@link DeleteRetrainingSchedulerCommandInput} for command's `input` shape.
 * @see {@link DeleteRetrainingSchedulerCommandOutput} for command's `response` shape.
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
 * @public
 * @example Deletes a retraining scheduler
 * ```javascript
 * //
 * const input = {
 *   "ModelName": "sample-model"
 * };
 * const command = new DeleteRetrainingSchedulerCommand(input);
 * await client.send(command);
 * // example id: deletes-a-retraining-scheduler-1694019240097
 * ```
 *
 */
export class DeleteRetrainingSchedulerCommand extends $Command
  .classBuilder<
    DeleteRetrainingSchedulerCommandInput,
    DeleteRetrainingSchedulerCommandOutput,
    LookoutEquipmentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LookoutEquipmentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLookoutEquipmentFrontendService", "DeleteRetrainingScheduler", {})
  .n("LookoutEquipmentClient", "DeleteRetrainingSchedulerCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRetrainingSchedulerCommand)
  .de(de_DeleteRetrainingSchedulerCommand)
  .build() {}
