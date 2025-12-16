// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StopVectorEnrichmentJobInput, StopVectorEnrichmentJobOutput } from "../models/models_0";
import type {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";
import { StopVectorEnrichmentJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Stops the  Vector Enrichment job for a given job ARN.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SageMakerGeospatialServiceException}
 * <p>Base exception class for all service exceptions from SageMakerGeospatial service.</p>
 *
 *
 * @public
 */
export class StopVectorEnrichmentJobCommand extends $Command
  .classBuilder<
    StopVectorEnrichmentJobCommandInput,
    StopVectorEnrichmentJobCommandOutput,
    SageMakerGeospatialClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerGeospatialClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMakerGeospatial", "StopVectorEnrichmentJob", {})
  .n("SageMakerGeospatialClient", "StopVectorEnrichmentJobCommand")
  .sc(StopVectorEnrichmentJob$)
  .build() {
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
