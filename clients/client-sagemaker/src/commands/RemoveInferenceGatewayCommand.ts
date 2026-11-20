// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveInferenceGatewayRequest, RemoveInferenceGatewayResponse } from "../models/models_4";
import { RemoveInferenceGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveInferenceGatewayCommand}.
 */
export interface RemoveInferenceGatewayCommandInput extends RemoveInferenceGatewayRequest {}
/**
 * @public
 *
 * The output of {@link RemoveInferenceGatewayCommand}.
 */
export interface RemoveInferenceGatewayCommandOutput extends RemoveInferenceGatewayResponse, __MetadataBearer {}

/**
 * Removes an in-cluster inference gateway from a global inference gateway. This operation is
 * asynchronous: the in-cluster inference gateway moves to the `REMOVING` status, and then no longer
 * appears in `ListInferenceGateways`. If the in-cluster inference gateway isn't in the global
 * inference gateway, the operation succeeds and returns no status. The operation returns
 * `ResourceNotFound` only if the global inference gateway doesn't exist.
 *
 * The operation fails with `ConflictException` while another operation is in progress on the global
 * inference gateway. It fails with `ValidationException` if the in-cluster inference gateway is the
 * last one, because a global inference gateway must have at least one.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, RemoveInferenceGatewayCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, RemoveInferenceGatewayCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // RemoveInferenceGatewayRequest
 *   Identifier: "STRING_VALUE", // required
 *   ClusterArn: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new RemoveInferenceGatewayCommand(input);
 * const response = await client.send(command);
 * // { // RemoveInferenceGatewayResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Gateway: { // GlobalInferenceGatewayMember
 * //     Name: "STRING_VALUE", // required
 * //     Namespace: "STRING_VALUE", // required
 * //     ClusterArn: "STRING_VALUE", // required
 * //   },
 * //   Status: "ADDING" || "ACTIVE" || "REMOVING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param RemoveInferenceGatewayCommandInput - {@link RemoveInferenceGatewayCommandInput}
 * @returns {@link RemoveInferenceGatewayCommandOutput}
 * @see {@link RemoveInferenceGatewayCommandInput} for command's `input` shape.
 * @see {@link RemoveInferenceGatewayCommandOutput} for command's `response` shape.
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
export class RemoveInferenceGatewayCommand extends command<RemoveInferenceGatewayCommandInput, RemoveInferenceGatewayCommandOutput>(
  _ep0,
  _mw0,
  "RemoveInferenceGateway",
  RemoveInferenceGateway$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveInferenceGatewayRequest;
      output: RemoveInferenceGatewayResponse;
    };
    sdk: {
      input: RemoveInferenceGatewayCommandInput;
      output: RemoveInferenceGatewayCommandOutput;
    };
  };
}
