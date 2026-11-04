// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRetrainingSchedulerRequest } from "../models/models_0";
import { DeleteRetrainingScheduler$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a retraining scheduler from a model. The retraining scheduler must be in the `STOPPED` status.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutEquipmentClient, DeleteRetrainingSchedulerCommand } from "@aws-sdk/client-lookoutequipment"; // ES Modules import
 * // const { LookoutEquipmentClient, DeleteRetrainingSchedulerCommand } = require("@aws-sdk/client-lookoutequipment"); // CommonJS import
 * // import type { LookoutEquipmentClientConfig } from "@aws-sdk/client-lookoutequipment";
 * const config = {}; // type is LookoutEquipmentClientConfig
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
 *
 * The request could not be completed because you do not have access to the resource.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Processing of the request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource requested could not be found. Verify the resource ID and retry your request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services service that's being utilized.
 *
 * @throws {@link LookoutEquipmentServiceException}
 *
 * Base exception class for all service exceptions from LookoutEquipment service.
 *
 * @example Deletes a retraining scheduler
 * ```javascript
 * //
 * const input = {
 *   ModelName: "sample-model"
 * };
 * const command = new DeleteRetrainingSchedulerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteRetrainingSchedulerCommand extends command<DeleteRetrainingSchedulerCommandInput, DeleteRetrainingSchedulerCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRetrainingScheduler",
  DeleteRetrainingScheduler$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRetrainingSchedulerRequest;
      output: {};
    };
    sdk: {
      input: DeleteRetrainingSchedulerCommandInput;
      output: DeleteRetrainingSchedulerCommandOutput;
    };
  };
}
