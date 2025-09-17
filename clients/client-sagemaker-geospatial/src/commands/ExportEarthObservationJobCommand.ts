// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ExportEarthObservationJobInput, ExportEarthObservationJobOutput } from "../models/models_0";
import { de_ExportEarthObservationJobCommand, se_ExportEarthObservationJobCommand } from "../protocols/Aws_restJson1";
import {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Use this operation to export results of an Earth Observation job and optionally source images used as input to the EOJ to an Amazon S3 location.</p>
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the service quota.</p>
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
export class ExportEarthObservationJobCommand extends $Command
  .classBuilder<
    ExportEarthObservationJobCommandInput,
    ExportEarthObservationJobCommandOutput,
    SageMakerGeospatialClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerGeospatialClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMakerGeospatial", "ExportEarthObservationJob", {})
  .n("SageMakerGeospatialClient", "ExportEarthObservationJobCommand")
  .f(void 0, void 0)
  .ser(se_ExportEarthObservationJobCommand)
  .de(de_ExportEarthObservationJobCommand)
  .build() {
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
