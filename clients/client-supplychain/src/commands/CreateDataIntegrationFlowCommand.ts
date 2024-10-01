// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDataIntegrationFlowRequest, CreateDataIntegrationFlowResponse } from "../models/models_0";
import { de_CreateDataIntegrationFlowCommand, se_CreateDataIntegrationFlowCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataIntegrationFlowCommand}.
 */
export interface CreateDataIntegrationFlowCommandInput extends CreateDataIntegrationFlowRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataIntegrationFlowCommand}.
 */
export interface CreateDataIntegrationFlowCommandOutput extends CreateDataIntegrationFlowResponse, __MetadataBearer {}

/**
 * <p>Create DataIntegrationFlow to map one or more different sources to one target using the SQL transformation query.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, CreateDataIntegrationFlowCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, CreateDataIntegrationFlowCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * const client = new SupplyChainClient(config);
 * const input = { // CreateDataIntegrationFlowRequest
 *   instanceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   sources: [ // DataIntegrationFlowSourceList // required
 *     { // DataIntegrationFlowSource
 *       sourceType: "S3" || "DATASET", // required
 *       sourceName: "STRING_VALUE", // required
 *       s3Source: { // DataIntegrationFlowS3SourceConfiguration
 *         bucketName: "STRING_VALUE", // required
 *         prefix: "STRING_VALUE", // required
 *         options: { // DataIntegrationFlowS3Options
 *           fileType: "CSV" || "PARQUET" || "JSON",
 *         },
 *       },
 *       datasetSource: { // DataIntegrationFlowDatasetSourceConfiguration
 *         datasetIdentifier: "STRING_VALUE", // required
 *         options: { // DataIntegrationFlowDatasetOptions
 *           loadType: "INCREMENTAL" || "REPLACE",
 *           dedupeRecords: true || false,
 *         },
 *       },
 *     },
 *   ],
 *   transformation: { // DataIntegrationFlowTransformation
 *     transformationType: "SQL" || "NONE", // required
 *     sqlTransformation: { // DataIntegrationFlowSQLTransformationConfiguration
 *       query: "STRING_VALUE", // required
 *     },
 *   },
 *   target: { // DataIntegrationFlowTarget
 *     targetType: "S3" || "DATASET", // required
 *     s3Target: { // DataIntegrationFlowS3TargetConfiguration
 *       bucketName: "STRING_VALUE", // required
 *       prefix: "STRING_VALUE", // required
 *       options: {
 *         fileType: "CSV" || "PARQUET" || "JSON",
 *       },
 *     },
 *     datasetTarget: { // DataIntegrationFlowDatasetTargetConfiguration
 *       datasetIdentifier: "STRING_VALUE", // required
 *       options: {
 *         loadType: "INCREMENTAL" || "REPLACE",
 *         dedupeRecords: true || false,
 *       },
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDataIntegrationFlowCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataIntegrationFlowResponse
 * //   instanceId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateDataIntegrationFlowCommandInput - {@link CreateDataIntegrationFlowCommandInput}
 * @returns {@link CreateDataIntegrationFlowCommandOutput}
 * @see {@link CreateDataIntegrationFlowCommandInput} for command's `input` shape.
 * @see {@link CreateDataIntegrationFlowCommandOutput} for command's `response` shape.
 * @see {@link SupplyChainClientResolvedConfig | config} for SupplyChainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the required privileges to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link SupplyChainServiceException}
 * <p>Base exception class for all service exceptions from SupplyChain service.</p>
 *
 * @public
 * @example Successful CreateDataIntegrationFlow for s3 to dataset flow
 * ```javascript
 * //
 * const input = {
 *   "name": "testStagingFlow",
 *   "instanceId": "8850c54e-e187-4fa7-89d4-6370f165174d",
 *   "sources": [
 *     {
 *       "s3Source": {
 *         "bucketName": "aws-supply-chain-data-b8c7bb28-a576-4334-b481-6d6e8e47371f",
 *         "prefix": "example-prefix"
 *       },
 *       "sourceName": "testSourceName",
 *       "sourceType": "S3"
 *     }
 *   ],
 *   "tags": {
 *     "tagKey1": "tagValue1"
 *   },
 *   "target": {
 *     "datasetTarget": {
 *       "datasetIdentifier": "arn:aws:scn:us-east-1:123456789012:instance/8850c54e-e187-4fa7-89d4-6370f165174d/namespaces/default/datasets/my_staging_dataset"
 *     },
 *     "targetType": "DATASET"
 *   },
 *   "transformation": {
 *     "sqlTransformation": {
 *       "query": "SELECT * FROM testSourceName"
 *     },
 *     "transformationType": "SQL"
 *   }
 * };
 * const command = new CreateDataIntegrationFlowCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "name": "testStagingFlow",
 *   "instanceId": "8850c54e-e187-4fa7-89d4-6370f165174d"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 * @example Successful CreateDataIntegrationFlow for dataset to dataset flow
 * ```javascript
 * //
 * const input = {
 *   "name": "trading-partner",
 *   "instanceId": "8850c54e-e187-4fa7-89d4-6370f165174d",
 *   "sources": [
 *     {
 *       "datasetSource": {
 *         "datasetIdentifier": "arn:aws:scn:us-east-1:123456789012:instance/8850c54e-e187-4fa7-89d4-6370f165174d/namespaces/default/datasets/my_staging_dataset1"
 *       },
 *       "sourceName": "testSourceName1",
 *       "sourceType": "DATASET"
 *     },
 *     {
 *       "datasetSource": {
 *         "datasetIdentifier": "arn:aws:scn:us-east-1:123456789012:instance/8850c54e-e187-4fa7-89d4-6370f165174d/namespaces/default/datasets/my_staging_dataset2"
 *       },
 *       "sourceName": "testSourceName2",
 *       "sourceType": "DATASET"
 *     }
 *   ],
 *   "tags": {
 *     "tagKey1": "tagValue1"
 *   },
 *   "target": {
 *     "datasetTarget": {
 *       "datasetIdentifier": "arn:aws:scn:us-east-1:123456789012:instance/8850c54e-e187-4fa7-89d4-6370f165174d/namespaces/asc/datasets/trading_partner"
 *     },
 *     "targetType": "DATASET"
 *   },
 *   "transformation": {
 *     "sqlTransformation": {
 *       "query": "SELECT S1.id AS id, S1.poc_org_unit_description AS description, S1.company_id AS company_id, S1.tpartner_type AS tpartner_type, S1.geo_id AS geo_id, S1.eff_start_date AS eff_start_date, S1.eff_end_date AS eff_end_date FROM testSourceName1 AS S1 LEFT JOIN testSourceName2 as S2 ON S1.id=S2.id"
 *     },
 *     "transformationType": "SQL"
 *   }
 * };
 * const command = new CreateDataIntegrationFlowCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "name": "trading-partner",
 *   "instanceId": "8850c54e-e187-4fa7-89d4-6370f165174d"
 * }
 * *\/
 * // example id: example-2
 * ```
 *
 */
export class CreateDataIntegrationFlowCommand extends $Command
  .classBuilder<
    CreateDataIntegrationFlowCommandInput,
    CreateDataIntegrationFlowCommandOutput,
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
  .s("GalaxyPublicAPIGateway", "CreateDataIntegrationFlow", {})
  .n("SupplyChainClient", "CreateDataIntegrationFlowCommand")
  .f(void 0, void 0)
  .ser(se_CreateDataIntegrationFlowCommand)
  .de(de_CreateDataIntegrationFlowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataIntegrationFlowRequest;
      output: CreateDataIntegrationFlowResponse;
    };
    sdk: {
      input: CreateDataIntegrationFlowCommandInput;
      output: CreateDataIntegrationFlowCommandOutput;
    };
  };
}
