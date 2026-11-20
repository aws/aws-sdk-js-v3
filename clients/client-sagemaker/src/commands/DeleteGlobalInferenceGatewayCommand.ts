// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteGlobalInferenceGatewayRequest, DeleteGlobalInferenceGatewayResponse } from "../models/models_2";
import { DeleteGlobalInferenceGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteGlobalInferenceGatewayCommand}.
 */
export interface DeleteGlobalInferenceGatewayCommandInput extends DeleteGlobalInferenceGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteGlobalInferenceGatewayCommand}.
 */
export interface DeleteGlobalInferenceGatewayCommandOutput extends DeleteGlobalInferenceGatewayResponse, __MetadataBearer {}

/**
 * Delete a global inference gateway and its member inference gateways, which are then free to join
 * another global inference gateway. Asynchronous: the global inference gateway is DELETING while its
 * managed endpoint resources are torn down; poll DescribeGlobalInferenceGateway until it returns
 * ResourceNotFound. Does not touch the customer's clusters. Idempotent: a Delete whose Identifier
 * matches no global inference gateway succeeds and echoes what the Identifier says (Arn and Id for an
 * ARN or Id, Name for a name).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteGlobalInferenceGatewayCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteGlobalInferenceGatewayCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteGlobalInferenceGatewayRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteGlobalInferenceGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGlobalInferenceGatewayResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteGlobalInferenceGatewayCommandInput - {@link DeleteGlobalInferenceGatewayCommandInput}
 * @returns {@link DeleteGlobalInferenceGatewayCommandOutput}
 * @see {@link DeleteGlobalInferenceGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteGlobalInferenceGatewayCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DeleteGlobalInferenceGatewayCommand extends command<DeleteGlobalInferenceGatewayCommandInput, DeleteGlobalInferenceGatewayCommandOutput>(
  _ep0,
  _mw0,
  "DeleteGlobalInferenceGateway",
  DeleteGlobalInferenceGateway$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGlobalInferenceGatewayRequest;
      output: DeleteGlobalInferenceGatewayResponse;
    };
    sdk: {
      input: DeleteGlobalInferenceGatewayCommandInput;
      output: DeleteGlobalInferenceGatewayCommandOutput;
    };
  };
}
