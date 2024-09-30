// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDataIntegrationFlowsRequest, ListDataIntegrationFlowsResponse } from "../models/models_0";
import { de_ListDataIntegrationFlowsCommand, se_ListDataIntegrationFlowsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataIntegrationFlowsCommand}.
 */
export interface ListDataIntegrationFlowsCommandInput extends ListDataIntegrationFlowsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataIntegrationFlowsCommand}.
 */
export interface ListDataIntegrationFlowsCommandOutput extends ListDataIntegrationFlowsResponse, __MetadataBearer {}

/**
 * <p>Lists all the DataIntegrationFlows in a paginated way.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, ListDataIntegrationFlowsCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, ListDataIntegrationFlowsCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * const client = new SupplyChainClient(config);
 * const input = { // ListDataIntegrationFlowsRequest
 *   instanceId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDataIntegrationFlowsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataIntegrationFlowsResponse
 * //   flows: [ // DataIntegrationFlowList // required
 * //     { // DataIntegrationFlow
 * //       instanceId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       sources: [ // DataIntegrationFlowSourceList // required
 * //         { // DataIntegrationFlowSource
 * //           sourceType: "S3" || "DATASET", // required
 * //           sourceName: "STRING_VALUE", // required
 * //           s3Source: { // DataIntegrationFlowS3SourceConfiguration
 * //             bucketName: "STRING_VALUE", // required
 * //             prefix: "STRING_VALUE", // required
 * //             options: { // DataIntegrationFlowS3Options
 * //               fileType: "CSV" || "PARQUET" || "JSON",
 * //             },
 * //           },
 * //           datasetSource: { // DataIntegrationFlowDatasetSourceConfiguration
 * //             datasetIdentifier: "STRING_VALUE", // required
 * //             options: { // DataIntegrationFlowDatasetOptions
 * //               loadType: "INCREMENTAL" || "REPLACE",
 * //               dedupeRecords: true || false,
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       transformation: { // DataIntegrationFlowTransformation
 * //         transformationType: "SQL" || "NONE", // required
 * //         sqlTransformation: { // DataIntegrationFlowSQLTransformationConfiguration
 * //           query: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       target: { // DataIntegrationFlowTarget
 * //         targetType: "S3" || "DATASET", // required
 * //         s3Target: { // DataIntegrationFlowS3TargetConfiguration
 * //           bucketName: "STRING_VALUE", // required
 * //           prefix: "STRING_VALUE", // required
 * //           options: {
 * //             fileType: "CSV" || "PARQUET" || "JSON",
 * //           },
 * //         },
 * //         datasetTarget: { // DataIntegrationFlowDatasetTargetConfiguration
 * //           datasetIdentifier: "STRING_VALUE", // required
 * //           options: {
 * //             loadType: "INCREMENTAL" || "REPLACE",
 * //             dedupeRecords: true || false,
 * //           },
 * //         },
 * //       },
 * //       createdTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataIntegrationFlowsCommandInput - {@link ListDataIntegrationFlowsCommandInput}
 * @returns {@link ListDataIntegrationFlowsCommandOutput}
 * @see {@link ListDataIntegrationFlowsCommandInput} for command's `input` shape.
 * @see {@link ListDataIntegrationFlowsCommandOutput} for command's `response` shape.
 * @see {@link SupplyChainClientResolvedConfig | config} for SupplyChainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the required privileges to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link SupplyChainServiceException}
 * <p>Base exception class for all service exceptions from SupplyChain service.</p>
 *
 * @public
 */
export class ListDataIntegrationFlowsCommand extends $Command
  .classBuilder<
    ListDataIntegrationFlowsCommandInput,
    ListDataIntegrationFlowsCommandOutput,
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
  .s("GalaxyPublicAPIGateway", "ListDataIntegrationFlows", {})
  .n("SupplyChainClient", "ListDataIntegrationFlowsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataIntegrationFlowsCommand)
  .de(de_ListDataIntegrationFlowsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataIntegrationFlowsRequest;
      output: ListDataIntegrationFlowsResponse;
    };
    sdk: {
      input: ListDataIntegrationFlowsCommandInput;
      output: ListDataIntegrationFlowsCommandOutput;
    };
  };
}
