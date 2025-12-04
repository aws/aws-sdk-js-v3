// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartVectorEnrichmentJobInput, StartVectorEnrichmentJobOutput } from "../models/models_0";
import type {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";
import { StartVectorEnrichmentJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartVectorEnrichmentJobCommand}.
 */
export interface StartVectorEnrichmentJobCommandInput extends StartVectorEnrichmentJobInput {}
/**
 * @public
 *
 * The output of {@link StartVectorEnrichmentJobCommand}.
 */
export interface StartVectorEnrichmentJobCommandOutput extends StartVectorEnrichmentJobOutput, __MetadataBearer {}

/**
 * <p>Creates a Vector Enrichment job for the supplied job type.  Currently, there are two supported job types: reverse geocoding and map matching.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, StartVectorEnrichmentJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, StartVectorEnrichmentJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * // import type { SageMakerGeospatialClientConfig } from "@aws-sdk/client-sagemaker-geospatial";
 * const config = {}; // type is SageMakerGeospatialClientConfig
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // StartVectorEnrichmentJobInput
 *   Name: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   InputConfig: { // VectorEnrichmentJobInputConfig
 *     DocumentType: "STRING_VALUE", // required
 *     DataSourceConfig: { // VectorEnrichmentJobDataSourceConfigInput Union: only one key present
 *       S3Data: { // VectorEnrichmentJobS3Data
 *         S3Uri: "STRING_VALUE", // required
 *         KmsKeyId: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   JobConfig: { // VectorEnrichmentJobConfig Union: only one key present
 *     ReverseGeocodingConfig: { // ReverseGeocodingConfig
 *       YAttributeName: "STRING_VALUE", // required
 *       XAttributeName: "STRING_VALUE", // required
 *     },
 *     MapMatchingConfig: { // MapMatchingConfig
 *       IdAttributeName: "STRING_VALUE", // required
 *       YAttributeName: "STRING_VALUE", // required
 *       XAttributeName: "STRING_VALUE", // required
 *       TimestampAttributeName: "STRING_VALUE", // required
 *     },
 *   },
 *   ExecutionRoleArn: "STRING_VALUE", // required
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartVectorEnrichmentJobCommand(input);
 * const response = await client.send(command);
 * // { // StartVectorEnrichmentJobOutput
 * //   Name: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Type: "STRING_VALUE", // required
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
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartVectorEnrichmentJobCommandInput - {@link StartVectorEnrichmentJobCommandInput}
 * @returns {@link StartVectorEnrichmentJobCommandOutput}
 * @see {@link StartVectorEnrichmentJobCommandInput} for command's `input` shape.
 * @see {@link StartVectorEnrichmentJobCommandOutput} for command's `response` shape.
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
export class StartVectorEnrichmentJobCommand extends $Command
  .classBuilder<
    StartVectorEnrichmentJobCommandInput,
    StartVectorEnrichmentJobCommandOutput,
    SageMakerGeospatialClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerGeospatialClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMakerGeospatial", "StartVectorEnrichmentJob", {})
  .n("SageMakerGeospatialClient", "StartVectorEnrichmentJobCommand")
  .sc(StartVectorEnrichmentJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartVectorEnrichmentJobInput;
      output: StartVectorEnrichmentJobOutput;
    };
    sdk: {
      input: StartVectorEnrichmentJobCommandInput;
      output: StartVectorEnrichmentJobCommandOutput;
    };
  };
}
