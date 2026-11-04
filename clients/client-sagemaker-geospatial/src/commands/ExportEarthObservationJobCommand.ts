// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExportEarthObservationJobInput, ExportEarthObservationJobOutput } from "../models/models_0";
import { ExportEarthObservationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExportEarthObservationJobCommand}.
 */
export interface ExportEarthObservationJobCommandInput extends ExportEarthObservationJobInput {}
/**
 * @public
 *
 * The output of {@link ExportEarthObservationJobCommand}.
 */
export interface ExportEarthObservationJobCommandOutput extends ExportEarthObservationJobOutput, __MetadataBearer {}

/**
 * Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an Amazon S3 location.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, ExportEarthObservationJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, ExportEarthObservationJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * // import type { SageMakerGeospatialClientConfig } from "@aws-sdk/client-sagemaker-geospatial";
 * const config = {}; // type is SageMakerGeospatialClientConfig
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // ExportEarthObservationJobInput
 *   Arn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   ExecutionRoleArn: "STRING_VALUE", // required
 *   OutputConfig: { // OutputConfigInput
 *     S3Data: { // ExportS3DataInput
 *       S3Uri: "STRING_VALUE", // required
 *       KmsKeyId: "STRING_VALUE",
 *     },
 *   },
 *   ExportSourceImages: true || false,
 * };
 * const command = new ExportEarthObservationJobCommand(input);
 * const response = await client.send(command);
 * // { // ExportEarthObservationJobOutput
 * //   Arn: "STRING_VALUE", // required
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   ExportStatus: "STRING_VALUE", // required
 * //   ExecutionRoleArn: "STRING_VALUE", // required
 * //   OutputConfig: { // OutputConfigInput
 * //     S3Data: { // ExportS3DataInput
 * //       S3Uri: "STRING_VALUE", // required
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //   },
 * //   ExportSourceImages: true || false,
 * // };
 *
 * ```
 *
 * @param ExportEarthObservationJobCommandInput - {@link ExportEarthObservationJobCommandInput}
 * @returns {@link ExportEarthObservationJobCommandOutput}
 * @see {@link ExportEarthObservationJobCommandInput} for command's `input` shape.
 * @see {@link ExportEarthObservationJobCommandOutput} for command's `response` shape.
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
export class ExportEarthObservationJobCommand extends command<ExportEarthObservationJobCommandInput, ExportEarthObservationJobCommandOutput>(
  _ep0,
  _mw0,
  "ExportEarthObservationJob",
  ExportEarthObservationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportEarthObservationJobInput;
      output: ExportEarthObservationJobOutput;
    };
    sdk: {
      input: ExportEarthObservationJobCommandInput;
      output: ExportEarthObservationJobCommandOutput;
    };
  };
}
