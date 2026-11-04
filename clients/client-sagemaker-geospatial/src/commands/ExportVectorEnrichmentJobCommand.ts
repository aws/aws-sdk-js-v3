// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExportVectorEnrichmentJobInput, ExportVectorEnrichmentJobOutput } from "../models/models_0";
import { ExportVectorEnrichmentJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExportVectorEnrichmentJobCommand}.
 */
export interface ExportVectorEnrichmentJobCommandInput extends ExportVectorEnrichmentJobInput {}
/**
 * @public
 *
 * The output of {@link ExportVectorEnrichmentJobCommand}.
 */
export interface ExportVectorEnrichmentJobCommandOutput extends ExportVectorEnrichmentJobOutput, __MetadataBearer {}

/**
 * Use this operation to copy results of a Vector Enrichment job to an Amazon S3 location.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, ExportVectorEnrichmentJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, ExportVectorEnrichmentJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * // import type { SageMakerGeospatialClientConfig } from "@aws-sdk/client-sagemaker-geospatial";
 * const config = {}; // type is SageMakerGeospatialClientConfig
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // ExportVectorEnrichmentJobInput
 *   Arn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   ExecutionRoleArn: "STRING_VALUE", // required
 *   OutputConfig: { // ExportVectorEnrichmentJobOutputConfig
 *     S3Data: { // VectorEnrichmentJobS3Data
 *       S3Uri: "STRING_VALUE", // required
 *       KmsKeyId: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new ExportVectorEnrichmentJobCommand(input);
 * const response = await client.send(command);
 * // { // ExportVectorEnrichmentJobOutput
 * //   Arn: "STRING_VALUE", // required
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   ExecutionRoleArn: "STRING_VALUE", // required
 * //   ExportStatus: "STRING_VALUE", // required
 * //   OutputConfig: { // ExportVectorEnrichmentJobOutputConfig
 * //     S3Data: { // VectorEnrichmentJobS3Data
 * //       S3Uri: "STRING_VALUE", // required
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ExportVectorEnrichmentJobCommandInput - {@link ExportVectorEnrichmentJobCommandInput}
 * @returns {@link ExportVectorEnrichmentJobCommandOutput}
 * @see {@link ExportVectorEnrichmentJobCommandInput} for command's `input` shape.
 * @see {@link ExportVectorEnrichmentJobCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded the service quota.
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
export class ExportVectorEnrichmentJobCommand extends command<ExportVectorEnrichmentJobCommandInput, ExportVectorEnrichmentJobCommandOutput>(
  _ep0,
  _mw0,
  "ExportVectorEnrichmentJob",
  ExportVectorEnrichmentJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportVectorEnrichmentJobInput;
      output: ExportVectorEnrichmentJobOutput;
    };
    sdk: {
      input: ExportVectorEnrichmentJobCommandInput;
      output: ExportVectorEnrichmentJobCommandOutput;
    };
  };
}
