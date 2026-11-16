// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutEndpointPolicyRequest, PutEndpointPolicyResponse } from "../models/models_4";
import { PutEndpointPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutEndpointPolicyCommand}.
 */
export interface PutEndpointPolicyCommandInput extends PutEndpointPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutEndpointPolicyCommand}.
 */
export interface PutEndpointPolicyCommandOutput extends PutEndpointPolicyResponse, __MetadataBearer {}

/**
 * <p>Attaches a resource-based policy to an endpoint. With an endpoint policy, you can allow other Amazon Web Services accounts to send requests to your endpoint, or to inference components on it, through an inference router. The policy that you specify replaces the endpoint's existing policy, if it has one.</p> <p>You can't attach a policy to an endpoint whose status is <code>Deleting</code> or <code>Failed</code>. SageMaker AI rejects a policy that doesn't follow the endpoint policy rules. For information about the policy rules, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/inference-router-cross-account.html">Use destinations in other accounts</a>.</p> <p>Policy changes typically take effect within 30 seconds, and can take up to 5 minutes. If you delete the endpoint, its policy is also deleted, and a new endpoint with the same name has no policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, PutEndpointPolicyCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, PutEndpointPolicyCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // PutEndpointPolicyRequest
 *   EndpointName: "STRING_VALUE", // required
 *   ResourcePolicy: "STRING_VALUE", // required
 * };
 * const command = new PutEndpointPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutEndpointPolicyResponse
 * //   EndpointArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutEndpointPolicyCommandInput - {@link PutEndpointPolicyCommandInput}
 * @returns {@link PutEndpointPolicyCommandOutput}
 * @see {@link PutEndpointPolicyCommandInput} for command's `input` shape.
 * @see {@link PutEndpointPolicyCommandOutput} for command's `response` shape.
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
export class PutEndpointPolicyCommand extends command<PutEndpointPolicyCommandInput, PutEndpointPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutEndpointPolicy",
  PutEndpointPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEndpointPolicyRequest;
      output: PutEndpointPolicyResponse;
    };
    sdk: {
      input: PutEndpointPolicyCommandInput;
      output: PutEndpointPolicyCommandOutput;
    };
  };
}
