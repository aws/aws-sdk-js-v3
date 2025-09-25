// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetVectorEnrichmentJobInput, GetVectorEnrichmentJobOutput } from "../models/models_0";
import {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";
import { GetVectorEnrichmentJob } from "../schemas/schemas_3_Job";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVectorEnrichmentJobCommand}.
 */
export interface GetVectorEnrichmentJobCommandInput extends GetVectorEnrichmentJobInput {}
/**
 * @public
 *
 * The output of {@link GetVectorEnrichmentJobCommand}.
 */
export interface GetVectorEnrichmentJobCommandOutput extends GetVectorEnrichmentJobOutput, __MetadataBearer {}

/**
 * <p>Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, GetVectorEnrichmentJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, GetVectorEnrichmentJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * // import type { SageMakerGeospatialClientConfig } from "@aws-sdk/client-sagemaker-geospatial";
 * const config = {}; // type is SageMakerGeospatialClientConfig
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // GetVectorEnrichmentJobInput
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new GetVectorEnrichmentJobCommand(input);
 * const response = await client.send(command);
 * // { // GetVectorEnrichmentJobOutput
 * //   Arn: "STRING_VALUE", // required
 * //   Type: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   DurationInSeconds: Number("int"), // required
 * //   Status: "STRING_VALUE", // required
 * //   KmsKeyId: "STRING_VALUE",
 * //   InputConfig: { // VectorEnrichmentJobInputConfig
 * //     DocumentType: "STRING_VALUE", // required
 * //     DataSourceConfig: { // VectorEnrichmentJobDataSourceConfigInput Union: only one key present
 * //       S3Data: { // VectorEnrichmentJobS3Data
 * //         S3Uri: "STRING_VALUE", // required
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   JobConfig: { // VectorEnrichmentJobConfig Union: only one key present
 * //     ReverseGeocodingConfig: { // ReverseGeocodingConfig
 * //       YAttributeName: "STRING_VALUE", // required
 * //       XAttributeName: "STRING_VALUE", // required
 * //     },
 * //     MapMatchingConfig: { // MapMatchingConfig
 * //       IdAttributeName: "STRING_VALUE", // required
 * //       YAttributeName: "STRING_VALUE", // required
 * //       XAttributeName: "STRING_VALUE", // required
 * //       TimestampAttributeName: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   ExecutionRoleArn: "STRING_VALUE", // required
 * //   ErrorDetails: { // VectorEnrichmentJobErrorDetails
 * //     ErrorType: "STRING_VALUE",
 * //     ErrorMessage: "STRING_VALUE",
 * //   },
 * //   ExportStatus: "STRING_VALUE",
 * //   ExportErrorDetails: { // VectorEnrichmentJobExportErrorDetails
 * //     Type: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVectorEnrichmentJobCommandInput - {@link GetVectorEnrichmentJobCommandInput}
 * @returns {@link GetVectorEnrichmentJobCommandOutput}
 * @see {@link GetVectorEnrichmentJobCommandInput} for command's `input` shape.
 * @see {@link GetVectorEnrichmentJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGeospatialClientResolvedConfig | config} for SageMakerGeospatialClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetVectorEnrichmentJobCommand extends $Command
  .classBuilder<
    GetVectorEnrichmentJobCommandInput,
    GetVectorEnrichmentJobCommandOutput,
    SageMakerGeospatialClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerGeospatialClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMakerGeospatial", "GetVectorEnrichmentJob", {})
  .n("SageMakerGeospatialClient", "GetVectorEnrichmentJobCommand")
  .sc(GetVectorEnrichmentJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVectorEnrichmentJobInput;
      output: GetVectorEnrichmentJobOutput;
    };
    sdk: {
      input: GetVectorEnrichmentJobCommandInput;
      output: GetVectorEnrichmentJobCommandOutput;
    };
  };
}
