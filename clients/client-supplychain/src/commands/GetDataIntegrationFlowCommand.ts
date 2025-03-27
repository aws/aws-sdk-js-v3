// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDataIntegrationFlowRequest, GetDataIntegrationFlowResponse } from "../models/models_0";
import { de_GetDataIntegrationFlowCommand, se_GetDataIntegrationFlowCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataIntegrationFlowCommand}.
 */
export interface GetDataIntegrationFlowCommandInput extends GetDataIntegrationFlowRequest {}
/**
 * @public
 *
 * The output of {@link GetDataIntegrationFlowCommand}.
 */
export interface GetDataIntegrationFlowCommandOutput extends GetDataIntegrationFlowResponse, __MetadataBearer {}

/**
 * <p>Enables you to programmatically view a specific data pipeline for the provided Amazon Web Services Supply Chain instance and DataIntegrationFlow name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, GetDataIntegrationFlowCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, GetDataIntegrationFlowCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * const client = new SupplyChainClient(config);
 * const input = { // GetDataIntegrationFlowRequest
 *   instanceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetDataIntegrationFlowCommand(input);
 * const response = await client.send(command);
 * // { // GetDataIntegrationFlowResponse
 * //   flow: { // DataIntegrationFlow
 * //     instanceId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     sources: [ // DataIntegrationFlowSourceList // required
 * //       { // DataIntegrationFlowSource
 * //         sourceType: "S3" || "DATASET", // required
 * //         sourceName: "STRING_VALUE", // required
 * //         s3Source: { // DataIntegrationFlowS3SourceConfiguration
 * //           bucketName: "STRING_VALUE", // required
 * //           prefix: "STRING_VALUE", // required
 * //           options: { // DataIntegrationFlowS3Options
 * //             fileType: "CSV" || "PARQUET" || "JSON",
 * //           },
 * //         },
 * //         datasetSource: { // DataIntegrationFlowDatasetSourceConfiguration
 * //           datasetIdentifier: "STRING_VALUE", // required
 * //           options: { // DataIntegrationFlowDatasetOptions
 * //             loadType: "INCREMENTAL" || "REPLACE",
 * //             dedupeRecords: true || false,
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     transformation: { // DataIntegrationFlowTransformation
 * //       transformationType: "SQL" || "NONE", // required
 * //       sqlTransformation: { // DataIntegrationFlowSQLTransformationConfiguration
 * //         query: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     target: { // DataIntegrationFlowTarget
 * //       targetType: "S3" || "DATASET", // required
 * //       s3Target: { // DataIntegrationFlowS3TargetConfiguration
 * //         bucketName: "STRING_VALUE", // required
 * //         prefix: "STRING_VALUE", // required
 * //         options: {
 * //           fileType: "CSV" || "PARQUET" || "JSON",
 * //         },
 * //       },
 * //       datasetTarget: { // DataIntegrationFlowDatasetTargetConfiguration
 * //         datasetIdentifier: "STRING_VALUE", // required
 * //         options: {
 * //           loadType: "INCREMENTAL" || "REPLACE",
 * //           dedupeRecords: true || false,
 * //         },
 * //       },
 * //     },
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataIntegrationFlowCommandInput - {@link GetDataIntegrationFlowCommandInput}
 * @returns {@link GetDataIntegrationFlowCommandOutput}
 * @see {@link GetDataIntegrationFlowCommandInput} for command's `input` shape.
 * @see {@link GetDataIntegrationFlowCommandOutput} for command's `response` shape.
 * @see {@link SupplyChainClientResolvedConfig | config} for SupplyChainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the required privileges to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link SupplyChainServiceException}
 * <p>Base exception class for all service exceptions from SupplyChain service.</p>
 *
 *
 * @example Successful GetDataIntegrationFlow
 * ```javascript
 * //
 * const input = {
 *   instanceId: "8850c54e-e187-4fa7-89d4-6370f165174d",
 *   name: "testStagingFlow"
 * };
 * const command = new GetDataIntegrationFlowCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   flow: {
 *     createdTime: 1.72495640044E9,
 *     instanceId: "8850c54e-e187-4fa7-89d4-6370f165174d",
 *     lastModifiedTime: 1.72495640044E9,
 *     name: "testStagingFlow",
 *     sources: [
 *       {
 *         s3Source: {
 *           bucketName: "aws-supply-chain-data-b8c7bb28-a576-4334-b481-6d6e8e47371f",
 *           prefix: "example-prefix"
 *         },
 *         sourceName: "testSourceName",
 *         sourceType: "S3"
 *       }
 *     ],
 *     target: {
 *       datasetTarget: {
 *         datasetIdentifier: "arn:aws:scn:us-east-1:123456789012:instance/8850c54e-e187-4fa7-89d4-6370f165174d/namespaces/default/datasets/my_staging_dataset"
 *       },
 *       targetType: "DATASET"
 *     },
 *     transformation: {
 *       sqlTransformation: {
 *         query: "SELECT * FROM testSourceName"
 *       },
 *       transformationType: "SQL"
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetDataIntegrationFlowCommand extends $Command
  .classBuilder<
    GetDataIntegrationFlowCommandInput,
    GetDataIntegrationFlowCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupplyChainClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GalaxyPublicAPIGateway", "GetDataIntegrationFlow", {})
  .n("SupplyChainClient", "GetDataIntegrationFlowCommand")
  .f(void 0, void 0)
  .ser(se_GetDataIntegrationFlowCommand)
  .de(de_GetDataIntegrationFlowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataIntegrationFlowRequest;
      output: GetDataIntegrationFlowResponse;
    };
    sdk: {
      input: GetDataIntegrationFlowCommandInput;
      output: GetDataIntegrationFlowCommandOutput;
    };
  };
}
