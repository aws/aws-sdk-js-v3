// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateGlobalInferenceGatewayRequest, UpdateGlobalInferenceGatewayResponse } from "../models/models_5";
import { UpdateGlobalInferenceGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateGlobalInferenceGatewayCommand}.
 */
export interface UpdateGlobalInferenceGatewayCommandInput extends UpdateGlobalInferenceGatewayRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGlobalInferenceGatewayCommand}.
 */
export interface UpdateGlobalInferenceGatewayCommandOutput extends UpdateGlobalInferenceGatewayResponse, __MetadataBearer {}

/**
 * Updates the routing configuration of a global inference gateway. To add or remove in-cluster
 * inference gateways, use `AddInferenceGateway` and `RemoveInferenceGateway`. This operation is
 * asynchronous: the global inference gateway moves to the `UPDATING` status. The operation fails with
 * `ConflictException` while another operation is in progress on the global inference gateway.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateGlobalInferenceGatewayCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateGlobalInferenceGatewayCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // UpdateGlobalInferenceGatewayRequest
 *   Identifier: "STRING_VALUE", // required
 *   Routing: { // GlobalInferenceGatewayRouting
 *     Weights: { // GlobalInferenceGatewayRoutingWeights
 *       KVHeadroom: Number("float"),
 *       QueueDepth: Number("float"),
 *       RegionProximity: Number("float"),
 *       ErrorRate: Number("float"),
 *     },
 *   },
 * };
 * const command = new UpdateGlobalInferenceGatewayCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGlobalInferenceGatewayResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED", // required
 * //   Routing: { // GlobalInferenceGatewayRouting
 * //     Weights: { // GlobalInferenceGatewayRoutingWeights
 * //       KVHeadroom: Number("float"),
 * //       QueueDepth: Number("float"),
 * //       RegionProximity: Number("float"),
 * //       ErrorRate: Number("float"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateGlobalInferenceGatewayCommandInput - {@link UpdateGlobalInferenceGatewayCommandInput}
 * @returns {@link UpdateGlobalInferenceGatewayCommandOutput}
 * @see {@link UpdateGlobalInferenceGatewayCommandInput} for command's `input` shape.
 * @see {@link UpdateGlobalInferenceGatewayCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an <code>Experiment</code> or <code>Artifact</code>.</p>
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
export class UpdateGlobalInferenceGatewayCommand extends command<UpdateGlobalInferenceGatewayCommandInput, UpdateGlobalInferenceGatewayCommandOutput>(
  _ep0,
  _mw0,
  "UpdateGlobalInferenceGateway",
  UpdateGlobalInferenceGateway$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGlobalInferenceGatewayRequest;
      output: UpdateGlobalInferenceGatewayResponse;
    };
    sdk: {
      input: UpdateGlobalInferenceGatewayCommandInput;
      output: UpdateGlobalInferenceGatewayCommandOutput;
    };
  };
}
