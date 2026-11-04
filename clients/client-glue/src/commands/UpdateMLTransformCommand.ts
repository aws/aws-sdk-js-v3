// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMLTransformRequest, UpdateMLTransformResponse } from "../models/models_3";
import { UpdateMLTransform$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMLTransformCommand}.
 */
export interface UpdateMLTransformCommandInput extends UpdateMLTransformRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMLTransformCommand}.
 */
export interface UpdateMLTransformCommandOutput extends UpdateMLTransformResponse, __MetadataBearer {}

/**
 * Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.
 *
 * After calling this operation, you can call the `StartMLEvaluationTaskRun` operation to assess how well your new parameters achieved your goals (such as improving the quality of your machine learning transform, or making it more cost-effective).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateMLTransformCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateMLTransformRequest
 *   TransformId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Parameters: { // TransformParameters
 *     TransformType: "FIND_MATCHES", // required
 *     FindMatchesParameters: { // FindMatchesParameters
 *       PrimaryKeyColumnName: "STRING_VALUE",
 *       PrecisionRecallTradeoff: Number("double"),
 *       AccuracyCostTradeoff: Number("double"),
 *       EnforceProvidedLabels: true || false,
 *     },
 *   },
 *   Role: "STRING_VALUE",
 *   GlueVersion: "STRING_VALUE",
 *   MaxCapacity: Number("double"),
 *   WorkerType: "Standard" || "G.1X" || "G.2X" || "G.4X" || "G.8X" || "G.025X" || "Z.2X" || "G.12X" || "G.16X" || "R.1X" || "R.2X" || "R.4X" || "R.8X",
 *   NumberOfWorkers: Number("int"),
 *   Timeout: Number("int"),
 *   MaxRetries: Number("int"),
 * };
 * const command = new UpdateMLTransformCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMLTransformResponse
 * //   TransformId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateMLTransformCommandInput - {@link UpdateMLTransformCommandInput}
 * @returns {@link UpdateMLTransformCommandOutput}
 * @see {@link UpdateMLTransformCommandInput} for command's `input` shape.
 * @see {@link UpdateMLTransformCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class UpdateMLTransformCommand extends command<UpdateMLTransformCommandInput, UpdateMLTransformCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMLTransform",
  UpdateMLTransform$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMLTransformRequest;
      output: UpdateMLTransformResponse;
    };
    sdk: {
      input: UpdateMLTransformCommandInput;
      output: UpdateMLTransformCommandOutput;
    };
  };
}
