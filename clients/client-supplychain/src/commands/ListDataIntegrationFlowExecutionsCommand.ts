// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListDataIntegrationFlowExecutionsRequest,
  ListDataIntegrationFlowExecutionsResponse,
} from "../models/models_0";
import { ListDataIntegrationFlowExecutions } from "../schemas/schemas_3_Integration";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataIntegrationFlowExecutionsCommand}.
 */
export interface ListDataIntegrationFlowExecutionsCommandInput extends ListDataIntegrationFlowExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataIntegrationFlowExecutionsCommand}.
 */
export interface ListDataIntegrationFlowExecutionsCommandOutput
  extends ListDataIntegrationFlowExecutionsResponse,
    __MetadataBearer {}

/**
 * <p>List flow executions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, ListDataIntegrationFlowExecutionsCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, ListDataIntegrationFlowExecutionsCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * // import type { SupplyChainClientConfig } from "@aws-sdk/client-supplychain";
 * const config = {}; // type is SupplyChainClientConfig
 * const client = new SupplyChainClient(config);
 * const input = { // ListDataIntegrationFlowExecutionsRequest
 *   instanceId: "STRING_VALUE", // required
 *   flowName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDataIntegrationFlowExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataIntegrationFlowExecutionsResponse
 * //   flowExecutions: [ // DataIntegrationFlowExecutionList // required
 * //     { // DataIntegrationFlowExecution
 * //       instanceId: "STRING_VALUE", // required
 * //       flowName: "STRING_VALUE", // required
 * //       executionId: "STRING_VALUE", // required
 * //       status: "SUCCEEDED" || "IN_PROGRESS" || "FAILED",
 * //       sourceInfo: { // DataIntegrationFlowExecutionSourceInfo
 * //         sourceType: "S3" || "DATASET", // required
 * //         s3Source: { // DataIntegrationFlowS3Source
 * //           bucketName: "STRING_VALUE", // required
 * //           key: "STRING_VALUE", // required
 * //         },
 * //         datasetSource: { // DataIntegrationFlowDatasetSource
 * //           datasetIdentifier: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       message: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       outputMetadata: { // DataIntegrationFlowExecutionOutputMetadata
 * //         diagnosticReportsRootS3URI: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataIntegrationFlowExecutionsCommandInput - {@link ListDataIntegrationFlowExecutionsCommandInput}
 * @returns {@link ListDataIntegrationFlowExecutionsCommandOutput}
 * @see {@link ListDataIntegrationFlowExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListDataIntegrationFlowExecutionsCommandOutput} for command's `response` shape.
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
 * @example Successful ListDataIntegrationFlowExecutions
 * ```javascript
 * //
 * const input = {
 *   flowName: "source-product",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new ListDataIntegrationFlowExecutionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   flowExecutions: [
 *     {
 *       endTime: 1.515531090123E9,
 *       executionId: "edbbdd3f-c0f9-49d9-ab01-f64542f803b7",
 *       flowName: "source-product",
 *       instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a",
 *       sourceInfo: {
 *         s3Source: {
 *           bucketName: "galaxy-raw-input-test-data-prod-pdx-1",
 *           key: "sources/product-sources.csv"
 *         },
 *         sourceType: "S3"
 *       },
 *       startTime: 1.515531081123E9,
 *       status: "SUCCEEDED"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDataIntegrationFlowExecutionsCommand extends $Command
  .classBuilder<
    ListDataIntegrationFlowExecutionsCommandInput,
    ListDataIntegrationFlowExecutionsCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupplyChainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GalaxyPublicAPIGateway", "ListDataIntegrationFlowExecutions", {})
  .n("SupplyChainClient", "ListDataIntegrationFlowExecutionsCommand")
  .sc(ListDataIntegrationFlowExecutions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataIntegrationFlowExecutionsRequest;
      output: ListDataIntegrationFlowExecutionsResponse;
    };
    sdk: {
      input: ListDataIntegrationFlowExecutionsCommandInput;
      output: ListDataIntegrationFlowExecutionsCommandOutput;
    };
  };
}
