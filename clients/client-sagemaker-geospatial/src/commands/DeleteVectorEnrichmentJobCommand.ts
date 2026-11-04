// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVectorEnrichmentJobInput, DeleteVectorEnrichmentJobOutput } from "../models/models_0";
import { DeleteVectorEnrichmentJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVectorEnrichmentJobCommand}.
 */
export interface DeleteVectorEnrichmentJobCommandInput extends DeleteVectorEnrichmentJobInput {}
/**
 * @public
 *
 * The output of {@link DeleteVectorEnrichmentJobCommand}.
 */
export interface DeleteVectorEnrichmentJobCommandOutput extends DeleteVectorEnrichmentJobOutput, __MetadataBearer {}

/**
 * Use this operation to delete a Vector Enrichment job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, DeleteVectorEnrichmentJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, DeleteVectorEnrichmentJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * // import type { SageMakerGeospatialClientConfig } from "@aws-sdk/client-sagemaker-geospatial";
 * const config = {}; // type is SageMakerGeospatialClientConfig
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // DeleteVectorEnrichmentJobInput
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteVectorEnrichmentJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVectorEnrichmentJobCommandInput - {@link DeleteVectorEnrichmentJobCommandInput}
 * @returns {@link DeleteVectorEnrichmentJobCommandOutput}
 * @see {@link DeleteVectorEnrichmentJobCommandInput} for command's `input` shape.
 * @see {@link DeleteVectorEnrichmentJobCommandOutput} for command's `response` shape.
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
export class DeleteVectorEnrichmentJobCommand extends command<DeleteVectorEnrichmentJobCommandInput, DeleteVectorEnrichmentJobCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVectorEnrichmentJob",
  DeleteVectorEnrichmentJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVectorEnrichmentJobInput;
      output: {};
    };
    sdk: {
      input: DeleteVectorEnrichmentJobCommandInput;
      output: DeleteVectorEnrichmentJobCommandOutput;
    };
  };
}
