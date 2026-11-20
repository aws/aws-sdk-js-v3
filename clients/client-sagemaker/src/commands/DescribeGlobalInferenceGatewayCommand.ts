// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeGlobalInferenceGatewayRequest, DescribeGlobalInferenceGatewayResponse } from "../models/models_3";
import { DescribeGlobalInferenceGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeGlobalInferenceGatewayCommand}.
 */
export interface DescribeGlobalInferenceGatewayCommandInput extends DescribeGlobalInferenceGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGlobalInferenceGatewayCommand}.
 */
export interface DescribeGlobalInferenceGatewayCommandOutput extends DescribeGlobalInferenceGatewayResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a global inference gateway, including its status, endpoints, and routing configuration. To list the in-cluster inference gateways of the global inference gateway, use <code>ListInferenceGateways</code>. To read the tags of the global inference gateway, use <code>ListTags</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeGlobalInferenceGatewayCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeGlobalInferenceGatewayCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeGlobalInferenceGatewayRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DescribeGlobalInferenceGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGlobalInferenceGatewayResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   ExecutionRoleArn: "STRING_VALUE", // required
 * //   Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED", // required
 * //   EndpointUrl: "STRING_VALUE",
 * //   VpcEndpointServiceName: "STRING_VALUE",
 * //   Routing: { // GlobalInferenceGatewayRouting
 * //     Weights: { // GlobalInferenceGatewayRoutingWeights
 * //       KVHeadroom: Number("float"),
 * //       QueueDepth: Number("float"),
 * //       RegionProximity: Number("float"),
 * //       ErrorRate: Number("float"),
 * //     },
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   FailureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeGlobalInferenceGatewayCommandInput - {@link DescribeGlobalInferenceGatewayCommandInput}
 * @returns {@link DescribeGlobalInferenceGatewayCommandOutput}
 * @see {@link DescribeGlobalInferenceGatewayCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalInferenceGatewayCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeGlobalInferenceGatewayCommand extends command<DescribeGlobalInferenceGatewayCommandInput, DescribeGlobalInferenceGatewayCommandOutput>(
  _ep0,
  _mw0,
  "DescribeGlobalInferenceGateway",
  DescribeGlobalInferenceGateway$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGlobalInferenceGatewayRequest;
      output: DescribeGlobalInferenceGatewayResponse;
    };
    sdk: {
      input: DescribeGlobalInferenceGatewayCommandInput;
      output: DescribeGlobalInferenceGatewayCommandOutput;
    };
  };
}
