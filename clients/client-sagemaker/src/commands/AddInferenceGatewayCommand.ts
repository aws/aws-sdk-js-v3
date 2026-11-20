// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddInferenceGatewayRequest, AddInferenceGatewayResponse } from "../models/models_0";
import { AddInferenceGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddInferenceGatewayCommand}.
 */
export interface AddInferenceGatewayCommandInput extends AddInferenceGatewayRequest {}
/**
 * @public
 *
 * The output of {@link AddInferenceGatewayCommand}.
 */
export interface AddInferenceGatewayCommandOutput extends AddInferenceGatewayResponse, __MetadataBearer {}

/**
 * Adds an in-cluster inference gateway to a global inference gateway. This operation is
 * asynchronous: the in-cluster inference gateway starts in the `ADDING` status. To check its status,
 * call `ListInferenceGateways`. If the in-cluster inference gateway is already in the global
 * inference gateway, the operation succeeds and returns its current status.
 *
 * An in-cluster inference gateway can belong to only one global inference gateway. If it already
 * belongs to another global inference gateway, the operation fails with `ResourceInUse`. The
 * operation fails with `ConflictException` while another operation is in progress on the global
 * inference gateway, or if the global inference gateway failed to create.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, AddInferenceGatewayCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, AddInferenceGatewayCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // AddInferenceGatewayRequest
 *   Identifier: "STRING_VALUE", // required
 *   ClusterArn: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new AddInferenceGatewayCommand(input);
 * const response = await client.send(command);
 * // { // AddInferenceGatewayResponse
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
 * @param AddInferenceGatewayCommandInput - {@link AddInferenceGatewayCommandInput}
 * @returns {@link AddInferenceGatewayCommandOutput}
 * @see {@link AddInferenceGatewayCommandInput} for command's `input` shape.
 * @see {@link AddInferenceGatewayCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
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
export class AddInferenceGatewayCommand extends command<AddInferenceGatewayCommandInput, AddInferenceGatewayCommandOutput>(
  _ep0,
  _mw0,
  "AddInferenceGateway",
  AddInferenceGateway$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddInferenceGatewayRequest;
      output: AddInferenceGatewayResponse;
    };
    sdk: {
      input: AddInferenceGatewayCommandInput;
      output: AddInferenceGatewayCommandOutput;
    };
  };
}
