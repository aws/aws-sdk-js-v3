// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelTrainedModelInferenceJobRequest } from "../models/models_0";
import { CancelTrainedModelInferenceJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelTrainedModelInferenceJobCommand}.
 */
export interface CancelTrainedModelInferenceJobCommandInput extends CancelTrainedModelInferenceJobRequest {}
/**
 * @public
 *
 * The output of {@link CancelTrainedModelInferenceJobCommand}.
 */
export interface CancelTrainedModelInferenceJobCommandOutput extends __MetadataBearer {}

/**
 * Submits a request to cancel a trained model inference job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, CancelTrainedModelInferenceJobCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, CancelTrainedModelInferenceJobCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // CancelTrainedModelInferenceJobRequest
 *   membershipIdentifier: "STRING_VALUE", // required
 *   trainedModelInferenceJobArn: "STRING_VALUE", // required
 * };
 * const command = new CancelTrainedModelInferenceJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelTrainedModelInferenceJobCommandInput - {@link CancelTrainedModelInferenceJobCommandInput}
 * @returns {@link CancelTrainedModelInferenceJobCommandOutput}
 * @see {@link CancelTrainedModelInferenceJobCommandInput} for command's `input` shape.
 * @see {@link CancelTrainedModelInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You can't complete this action because another resource depends on this resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource you are requesting does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request parameters for this request are incorrect.
 *
 * @throws {@link CleanRoomsMLServiceException}
 *
 * Base exception class for all service exceptions from CleanRoomsML service.
 *
 * @public
 */
export class CancelTrainedModelInferenceJobCommand extends command<CancelTrainedModelInferenceJobCommandInput, CancelTrainedModelInferenceJobCommandOutput>(
  _ep0,
  _mw0,
  "CancelTrainedModelInferenceJob",
  CancelTrainedModelInferenceJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelTrainedModelInferenceJobRequest;
      output: {};
    };
    sdk: {
      input: CancelTrainedModelInferenceJobCommandInput;
      output: CancelTrainedModelInferenceJobCommandOutput;
    };
  };
}
