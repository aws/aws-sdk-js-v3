// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetDataIntegrationFlowExecutionRequest,
  GetDataIntegrationFlowExecutionResponse,
} from "../models/models_0";
import { GetDataIntegrationFlowExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDataIntegrationFlowExecutionCommand}.
 */
export interface GetDataIntegrationFlowExecutionCommandInput extends GetDataIntegrationFlowExecutionRequest {}
/**
 * @public
 *
 * The output of {@link GetDataIntegrationFlowExecutionCommand}.
 */
export interface GetDataIntegrationFlowExecutionCommandOutput extends GetDataIntegrationFlowExecutionResponse, __MetadataBearer {}

/**
 * Get the flow execution.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, GetDataIntegrationFlowExecutionCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, GetDataIntegrationFlowExecutionCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * // import type { SupplyChainClientConfig } from "@aws-sdk/client-supplychain";
 * const config = {}; // type is SupplyChainClientConfig
 * const client = new SupplyChainClient(config);
 * const input = { // GetDataIntegrationFlowExecutionRequest
 *   instanceId: "STRING_VALUE", // required
 *   flowName: "STRING_VALUE", // required
 *   executionId: "STRING_VALUE", // required
 * };
 * const command = new GetDataIntegrationFlowExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetDataIntegrationFlowExecutionResponse
 * //   flowExecution: { // DataIntegrationFlowExecution
 * //     instanceId: "STRING_VALUE", // required
 * //     flowName: "STRING_VALUE", // required
 * //     executionId: "STRING_VALUE", // required
 * //     status: "SUCCEEDED" || "IN_PROGRESS" || "FAILED",
 * //     sourceInfo: { // DataIntegrationFlowExecutionSourceInfo
 * //       sourceType: "S3" || "DATASET", // required
 * //       s3Source: { // DataIntegrationFlowS3Source
 * //         bucketName: "STRING_VALUE", // required
 * //         key: "STRING_VALUE", // required
 * //       },
 * //       datasetSource: { // DataIntegrationFlowDatasetSource
 * //         datasetIdentifier: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     message: "STRING_VALUE",
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     outputMetadata: { // DataIntegrationFlowExecutionOutputMetadata
 * //       diagnosticReportsRootS3URI: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataIntegrationFlowExecutionCommandInput - {@link GetDataIntegrationFlowExecutionCommandInput}
 * @returns {@link GetDataIntegrationFlowExecutionCommandOutput}
 * @see {@link GetDataIntegrationFlowExecutionCommandInput} for command's `input` shape.
 * @see {@link GetDataIntegrationFlowExecutionCommandOutput} for command's `response` shape.
 * @see {@link SupplyChainClientResolvedConfig | config} for SupplyChainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have the required privileges to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request would cause a service quota to be exceeded.
 *
 * @throws {@link SupplyChainServiceException}
 *
 * Base exception class for all service exceptions from SupplyChain service.
 *
 * @example Successful GetDataIntegrationFlowExecution for S3 source
 * ```javascript
 * //
 * const input = {
 *   executionId: "edbbdd3f-c0f9-49d9-ab01-f64542f803b7",
 *   flowName: "source-product",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new GetDataIntegrationFlowExecutionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   flowExecution: {
 *     endTime: 1.515531090123E9,
 *     executionId: "edbbdd3f-c0f9-49d9-ab01-f64542f803b7",
 *     flowName: "source-product",
 *     instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a",
 *     sourceInfo: {
 *       s3Source: {
 *         bucketName: "galaxy-raw-input-test-data-prod-pdx-1",
 *         key: "sources/product-sources.csv"
 *       },
 *       sourceType: "S3"
 *     },
 *     startTime: 1.515531081123E9,
 *     status: "SUCCEEDED"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Successful GetDataIntegrationFlowExecution for DATASET source
 * ```javascript
 * //
 * const input = {
 *   executionId: "9daf6071-d12c-4eef-864c-73cea2557825",
 *   flowName: "target-product",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new GetDataIntegrationFlowExecutionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   flowExecution: {
 *     endTime: 1.515531090123E9,
 *     executionId: "9daf6071-d12c-4eef-864c-73cea2557825",
 *     flowName: "target-product",
 *     instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a",
 *     sourceInfo: {
 *       datasetSource: {
 *         datasetIdentifier: "arn:aws:scn:us-west-2:135808960812:instance/8928ae12-15e5-4441-825d-ec2184f0a43a/namespaces/default/datasets/product"
 *       },
 *       sourceType: "DATASET"
 *     },
 *     startTime: 1.515531081123E9,
 *     status: "SUCCEEDED"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetDataIntegrationFlowExecutionCommand extends command<GetDataIntegrationFlowExecutionCommandInput, GetDataIntegrationFlowExecutionCommandOutput>(
  _ep0,
  _mw0,
  "GetDataIntegrationFlowExecution",
  GetDataIntegrationFlowExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataIntegrationFlowExecutionRequest;
      output: GetDataIntegrationFlowExecutionResponse;
    };
    sdk: {
      input: GetDataIntegrationFlowExecutionCommandInput;
      output: GetDataIntegrationFlowExecutionCommandOutput;
    };
  };
}
