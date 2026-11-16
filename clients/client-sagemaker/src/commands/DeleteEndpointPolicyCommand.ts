// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEndpointPolicyRequest, DeleteEndpointPolicyResponse } from "../models/models_2";
import { DeleteEndpointPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEndpointPolicyCommand}.
 */
export interface DeleteEndpointPolicyCommandInput extends DeleteEndpointPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEndpointPolicyCommand}.
 */
export interface DeleteEndpointPolicyCommandOutput extends DeleteEndpointPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes the resource-based policy that is attached to an endpoint. After you delete the policy, other accounts can no longer send requests to the endpoint through an inference router. The endpoint continues to serve requests from your account. If the endpoint doesn't have a policy, the operation succeeds.</p> <p>The change typically takes effect within 30 seconds, and can take up to 5 minutes. To revoke access for one account only, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_PutEndpointPolicy.html">PutEndpointPolicy</a> to replace the policy with one that doesn't include that account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteEndpointPolicyCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteEndpointPolicyCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteEndpointPolicyRequest
 *   EndpointName: "STRING_VALUE", // required
 * };
 * const command = new DeleteEndpointPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEndpointPolicyCommandInput - {@link DeleteEndpointPolicyCommandInput}
 * @returns {@link DeleteEndpointPolicyCommandOutput}
 * @see {@link DeleteEndpointPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointPolicyCommandOutput} for command's `response` shape.
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
export class DeleteEndpointPolicyCommand extends command<DeleteEndpointPolicyCommandInput, DeleteEndpointPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEndpointPolicy",
  DeleteEndpointPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEndpointPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteEndpointPolicyCommandInput;
      output: DeleteEndpointPolicyCommandOutput;
    };
  };
}
