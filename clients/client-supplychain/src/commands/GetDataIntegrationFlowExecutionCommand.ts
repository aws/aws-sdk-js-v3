// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDataIntegrationFlowExecutionRequest, GetDataIntegrationFlowExecutionResponse } from "../models/models_0";
import {
  de_GetDataIntegrationFlowExecutionCommand,
  se_GetDataIntegrationFlowExecutionCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetDataIntegrationFlowExecutionCommandOutput
  extends GetDataIntegrationFlowExecutionResponse,
    __MetadataBearer {}

/**
 * <p>Get the flow execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, GetDataIntegrationFlowExecutionCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, GetDataIntegrationFlowExecutionCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
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
export class GetDataIntegrationFlowExecutionCommand extends $Command
  .classBuilder<
    GetDataIntegrationFlowExecutionCommandInput,
    GetDataIntegrationFlowExecutionCommandOutput,
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
  .s("GalaxyPublicAPIGateway", "GetDataIntegrationFlowExecution", {})
  .n("SupplyChainClient", "GetDataIntegrationFlowExecutionCommand")
  .f(void 0, void 0)
  .ser(se_GetDataIntegrationFlowExecutionCommand)
  .de(de_GetDataIntegrationFlowExecutionCommand)
  .build() {
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
