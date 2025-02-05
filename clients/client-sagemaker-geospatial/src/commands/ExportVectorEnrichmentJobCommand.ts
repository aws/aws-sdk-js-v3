// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ExportVectorEnrichmentJobInput, ExportVectorEnrichmentJobOutput } from "../models/models_0";
import { de_ExportVectorEnrichmentJobCommand, se_ExportVectorEnrichmentJobCommand } from "../protocols/Aws_restJson1";
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
 * <p>Use this operation to copy results of a Vector Enrichment job to an Amazon S3 location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, ExportVectorEnrichmentJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, ExportVectorEnrichmentJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class ExportVectorEnrichmentJobCommand extends $Command
  .classBuilder<
    ExportVectorEnrichmentJobCommandInput,
    ExportVectorEnrichmentJobCommandOutput,
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
  .s("SageMakerGeospatial", "ExportVectorEnrichmentJob", {})
  .n("SageMakerGeospatialClient", "ExportVectorEnrichmentJobCommand")
  .f(void 0, void 0)
  .ser(se_ExportVectorEnrichmentJobCommand)
  .de(de_ExportVectorEnrichmentJobCommand)
  .build() {
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
