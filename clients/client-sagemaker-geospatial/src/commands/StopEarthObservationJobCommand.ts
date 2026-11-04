// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopEarthObservationJobInput, StopEarthObservationJobOutput } from "../models/models_0";
import { StopEarthObservationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopEarthObservationJobCommand}.
 */
export interface StopEarthObservationJobCommandInput extends StopEarthObservationJobInput {}
/**
 * @public
 *
 * The output of {@link StopEarthObservationJobCommand}.
 */
export interface StopEarthObservationJobCommandOutput extends StopEarthObservationJobOutput, __MetadataBearer {}

/**
 * Use this operation to stop an existing earth observation job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, StopEarthObservationJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, StopEarthObservationJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * // import type { SageMakerGeospatialClientConfig } from "@aws-sdk/client-sagemaker-geospatial";
 * const config = {}; // type is SageMakerGeospatialClientConfig
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // StopEarthObservationJobInput
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new StopEarthObservationJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopEarthObservationJobCommandInput - {@link StopEarthObservationJobCommandInput}
 * @returns {@link StopEarthObservationJobCommandOutput}
 * @see {@link StopEarthObservationJobCommandInput} for command's `input` shape.
 * @see {@link StopEarthObservationJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGeospatialClientResolvedConfig | config} for SageMakerGeospatialClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SageMakerGeospatialServiceException}
 *
 * Base exception class for all service exceptions from SageMakerGeospatial service.
 *
 * @public
 */
export class StopEarthObservationJobCommand extends command<StopEarthObservationJobCommandInput, StopEarthObservationJobCommandOutput>(
  _ep0,
  _mw0,
  "StopEarthObservationJob",
  StopEarthObservationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopEarthObservationJobInput;
      output: {};
    };
    sdk: {
      input: StopEarthObservationJobCommandInput;
      output: StopEarthObservationJobCommandOutput;
    };
  };
}
