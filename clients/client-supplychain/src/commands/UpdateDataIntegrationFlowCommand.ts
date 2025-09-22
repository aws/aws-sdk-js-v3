// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDataIntegrationFlowRequest, UpdateDataIntegrationFlowResponse } from "../models/models_0";
import { UpdateDataIntegrationFlow } from "../schemas/schemas_1_Data";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataIntegrationFlowCommand}.
 */
export interface UpdateDataIntegrationFlowCommandInput extends UpdateDataIntegrationFlowRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataIntegrationFlowCommand}.
 */
export interface UpdateDataIntegrationFlowCommandOutput extends UpdateDataIntegrationFlowResponse, __MetadataBearer {}

/**
 * <p>Enables you to programmatically update an existing data pipeline to ingest data from the source systems such as, Amazon S3 buckets, to a predefined Amazon Web Services Supply Chain dataset (product, inbound_order) or a temporary dataset along with the data transformation query provided with the API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, UpdateDataIntegrationFlowCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, UpdateDataIntegrationFlowCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * // import type { SupplyChainClientConfig } from "@aws-sdk/client-supplychain";
 * const config = {}; // type is SupplyChainClientConfig
 * const client = new SupplyChainClient(config);
 * const input = { // UpdateDataIntegrationFlowRequest
 *   instanceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   sources: [ // DataIntegrationFlowSourceList
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
 *           dedupeStrategy: { // DataIntegrationFlowDedupeStrategy
 *             type: "FIELD_PRIORITY", // required
 *             fieldPriority: { // DataIntegrationFlowFieldPriorityDedupeStrategyConfiguration
 *               fields: [ // DataIntegrationFlowFieldPriorityDedupeFieldList // required
 *                 { // DataIntegrationFlowFieldPriorityDedupeField
 *                   name: "STRING_VALUE", // required
 *                   sortOrder: "ASC" || "DESC", // required
 *                 },
 *               ],
 *             },
 *           },
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
 *         dedupeStrategy: {
 *           type: "FIELD_PRIORITY", // required
 *           fieldPriority: {
 *             fields: [ // required
 *               {
 *                 name: "STRING_VALUE", // required
 *                 sortOrder: "ASC" || "DESC", // required
 *               },
 *             ],
 *           },
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateDataIntegrationFlowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataIntegrationFlowResponse
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
 * //             dedupeStrategy: { // DataIntegrationFlowDedupeStrategy
 * //               type: "FIELD_PRIORITY", // required
 * //               fieldPriority: { // DataIntegrationFlowFieldPriorityDedupeStrategyConfiguration
 * //                 fields: [ // DataIntegrationFlowFieldPriorityDedupeFieldList // required
 * //                   { // DataIntegrationFlowFieldPriorityDedupeField
 * //                     name: "STRING_VALUE", // required
 * //                     sortOrder: "ASC" || "DESC", // required
 * //                   },
 * //                 ],
 * //               },
 * //             },
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
 * //           dedupeStrategy: {
 * //             type: "FIELD_PRIORITY", // required
 * //             fieldPriority: {
 * //               fields: [ // required
 * //                 {
 * //                   name: "STRING_VALUE", // required
 * //                   sortOrder: "ASC" || "DESC", // required
 * //                 },
 * //               ],
 * //             },
 * //           },
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
 * @param UpdateDataIntegrationFlowCommandInput - {@link UpdateDataIntegrationFlowCommandInput}
 * @returns {@link UpdateDataIntegrationFlowCommandOutput}
 * @see {@link UpdateDataIntegrationFlowCommandInput} for command's `input` shape.
 * @see {@link UpdateDataIntegrationFlowCommandOutput} for command's `response` shape.
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
 * @example Successful UpdateDataIntegrationFlow for s3 to dataset flow to update SQL transformation
 * ```javascript
 * //
 * const input = {
 *   instanceId: "8850c54e-e187-4fa7-89d4-6370f165174d",
 *   name: "testStagingFlow",
 *   sources: [
 *     {
 *       s3Source: {
 *         bucketName: "aws-supply-chain-data-b8c7bb28-a576-4334-b481-6d6e8e47371f",
 *         prefix: "example-prefix"
 *       },
 *       sourceName: "testSourceName",
 *       sourceType: "S3"
 *     }
 *   ],
 *   target: {
 *     datasetTarget: {
 *       datasetIdentifier: "arn:aws:scn:us-east-1:123456789012:instance/8850c54e-e187-4fa7-89d4-6370f165174d/namespaces/default/datasets/my_staging_dataset"
 *     },
 *     targetType: "DATASET"
 *   },
 *   transformation: {
 *     sqlTransformation: {
 *       query: "SELECT connection_id, bukrs AS id, txtmd AS description FROM testSourceName WHERE langu = 'E'"
 *     },
 *     transformationType: "SQL"
 *   }
 * };
 * const command = new UpdateDataIntegrationFlowCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   flow: {
 *     createdTime: 1.72495640044E9,
 *     instanceId: "8850c54e-e187-4fa7-89d4-6370f165174d",
 *     lastModifiedTime: 1.73245640577E9,
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
 *         query: "SELECT connection_id, bukrs AS id, txtmd AS description FROM testSourceName WHERE langu = 'E'"
 *       },
 *       transformationType: "SQL"
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @example Successful UpdateDataIntegrationFlow for dataset to dataset flow to update sources
 * ```javascript
 * //
 * const input = {
 *   instanceId: "8850c54e-e187-4fa7-89d4-6370f165174d",
 *   name: "trading-partner",
 *   sources: [
 *     {
 *       datasetSource: {
 *         datasetIdentifier: "arn:aws:scn:us-east-1:123456789012:instance/8850c54e-e187-4fa7-89d4-6370f165174d/namespaces/default/datasets/my_staging_dataset1"
 *       },
 *       sourceName: "testSourceName1",
 *       sourceType: "DATASET"
 *     },
 *     {
 *       datasetSource: {
 *         datasetIdentifier: "arn:aws:scn:us-east-1:123456789012:instance/8850c54e-e187-4fa7-89d4-6370f165174d/namespaces/default/datasets/my_staging_dataset2_updated"
 *       },
 *       sourceName: "testSourceName2",
 *       sourceType: "DATASET"
 *     }
 *   ],
 *   target: {
 *     datasetTarget: {
 *       datasetIdentifier: "arn:aws:scn:us-east-1:123456789012:instance/8850c54e-e187-4fa7-89d4-6370f165174d/namespaces/asc/datasets/trading_partner",
 *       options: {
 *         dedupeRecords: true,
 *         dedupeStrategy: {
 *           fieldPriority: {
 *             fields: [
 *               {
 *                 name: "eff_start_date",
 *                 sortOrder: "ASC"
 *               }
 *             ]
 *           },
 *           type: "FIELD_PRIORITY"
 *         },
 *         loadType: "REPLACE"
 *       }
 *     },
 *     targetType: "DATASET"
 *   },
 *   transformation: {
 *     sqlTransformation: {
 *       query: "SELECT S1.id AS id, S1.poc_org_unit_description AS description, S1.company_id AS company_id, S1.tpartner_type AS tpartner_type, S1.geo_id AS geo_id, S1.eff_start_date AS eff_start_date, S1.eff_end_date AS eff_end_date FROM testSourceName1 AS S1 LEFT JOIN testSourceName2 as S2 ON S1.id=S2.id"
 *     },
 *     transformationType: "SQL"
 *   }
 * };
 * const command = new UpdateDataIntegrationFlowCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   flow: {
 *     createdTime: 1.72495640044E9,
 *     instanceId: "8850c54e-e187-4fa7-89d4-6370f165174d",
 *     lastModifiedTime: 1.73245640577E9,
 *     name: "trading-partner",
 *     sources: [
 *       {
 *         datasetSource: {
 *           datasetIdentifier: "arn:aws:scn:us-east-1:123456789012:instance/8850c54e-e187-4fa7-89d4-6370f165174d/namespaces/default/datasets/my_staging_dataset1"
 *         },
 *         sourceName: "testSourceName1",
 *         sourceType: "DATASET"
 *       },
 *       {
 *         datasetSource: {
 *           datasetIdentifier: "arn:aws:scn:us-east-1:123456789012:instance/8850c54e-e187-4fa7-89d4-6370f165174d/namespaces/default/datasets/my_staging_dataset2_updated"
 *         },
 *         sourceName: "testSourceName2",
 *         sourceType: "DATASET"
 *       }
 *     ],
 *     target: {
 *       datasetTarget: {
 *         datasetIdentifier: "arn:aws:scn:us-east-1:123456789012:instance/8850c54e-e187-4fa7-89d4-6370f165174d/namespaces/asc/datasets/trading_partner",
 *         options: {
 *           dedupeRecords: true,
 *           dedupeStrategy: {
 *             fieldPriority: {
 *               fields: [
 *                 {
 *                   name: "eff_start_date",
 *                   sortOrder: "ASC"
 *                 }
 *               ]
 *             },
 *             type: "FIELD_PRIORITY"
 *           },
 *           loadType: "REPLACE"
 *         }
 *       },
 *       targetType: "DATASET"
 *     },
 *     transformation: {
 *       sqlTransformation: {
 *         query: "SELECT S1.id AS id, S1.poc_org_unit_description AS description, S1.company_id AS company_id, S1.tpartner_type AS tpartner_type, S1.geo_id AS geo_id, S1.eff_start_date AS eff_start_date, S1.eff_end_date AS eff_end_date FROM testSourceName1 AS S1 LEFT JOIN testSourceName2 as S2 ON S1.id=S2.id"
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
export class UpdateDataIntegrationFlowCommand extends $Command
  .classBuilder<
    UpdateDataIntegrationFlowCommandInput,
    UpdateDataIntegrationFlowCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupplyChainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GalaxyPublicAPIGateway", "UpdateDataIntegrationFlow", {})
  .n("SupplyChainClient", "UpdateDataIntegrationFlowCommand")
  .sc(UpdateDataIntegrationFlow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataIntegrationFlowRequest;
      output: UpdateDataIntegrationFlowResponse;
    };
    sdk: {
      input: UpdateDataIntegrationFlowCommandInput;
      output: UpdateDataIntegrationFlowCommandOutput;
    };
  };
}
