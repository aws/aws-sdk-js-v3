// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopVectorEnrichmentJobInput, StopVectorEnrichmentJobOutput } from "../models/models_0";
import { StopVectorEnrichmentJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopVectorEnrichmentJobCommand}.
 */
export interface StopVectorEnrichmentJobCommandInput extends StopVectorEnrichmentJobInput {}
/**
 * @public
 *
 * The output of {@link StopVectorEnrichmentJobCommand}.
 */
export interface StopVectorEnrichmentJobCommandOutput extends StopVectorEnrichmentJobOutput, __MetadataBearer {}

/**
 * Stops the Vector Enrichment job for a given job ARN.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, StopVectorEnrichmentJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, StopVectorEnrichmentJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * // import type { SageMakerGeospatialClientConfig } from "@aws-sdk/client-sagemaker-geospatial";
 * const config = {}; // type is SageMakerGeospatialClientConfig
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // StopVectorEnrichmentJobInput
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new StopVectorEnrichmentJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopVectorEnrichmentJobCommandInput - {@link StopVectorEnrichmentJobCommandInput}
 * @returns {@link StopVectorEnrichmentJobCommandOutput}
 * @see {@link StopVectorEnrichmentJobCommandInput} for command's `input` shape.
 * @see {@link StopVectorEnrichmentJobCommandOutput} for command's `response` shape.
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
export class StopVectorEnrichmentJobCommand extends command<StopVectorEnrichmentJobCommandInput, StopVectorEnrichmentJobCommandOutput>(
  _ep0,
  _mw0,
  "StopVectorEnrichmentJob",
  StopVectorEnrichmentJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopVectorEnrichmentJobInput;
      output: {};
    };
    sdk: {
      input: StopVectorEnrichmentJobCommandInput;
      output: StopVectorEnrichmentJobCommandOutput;
    };
  };
}
