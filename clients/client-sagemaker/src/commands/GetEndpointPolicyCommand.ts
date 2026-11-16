// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEndpointPolicyRequest, GetEndpointPolicyResponse } from "../models/models_3";
import { GetEndpointPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEndpointPolicyCommand}.
 */
export interface GetEndpointPolicyCommandInput extends GetEndpointPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetEndpointPolicyCommand}.
 */
export interface GetEndpointPolicyCommandOutput extends GetEndpointPolicyResponse, __MetadataBearer {}

/**
 * <p>Returns the resource-based policy that is attached to an endpoint. If the endpoint doesn't have a policy, you get a <code>ValidationException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, GetEndpointPolicyCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, GetEndpointPolicyCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // GetEndpointPolicyRequest
 *   EndpointName: "STRING_VALUE", // required
 * };
 * const command = new GetEndpointPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetEndpointPolicyResponse
 * //   EndpointName: "STRING_VALUE",
 * //   EndpointArn: "STRING_VALUE",
 * //   ResourcePolicy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEndpointPolicyCommandInput - {@link GetEndpointPolicyCommandInput}
 * @returns {@link GetEndpointPolicyCommandOutput}
 * @see {@link GetEndpointPolicyCommandInput} for command's `input` shape.
 * @see {@link GetEndpointPolicyCommandOutput} for command's `response` shape.
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
export class GetEndpointPolicyCommand extends command<GetEndpointPolicyCommandInput, GetEndpointPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetEndpointPolicy",
  GetEndpointPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEndpointPolicyRequest;
      output: GetEndpointPolicyResponse;
    };
    sdk: {
      input: GetEndpointPolicyCommandInput;
      output: GetEndpointPolicyCommandOutput;
    };
  };
}
