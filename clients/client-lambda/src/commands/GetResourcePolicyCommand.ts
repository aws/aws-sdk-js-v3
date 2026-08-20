// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResourcePolicyRequest, GetResourcePolicyResponse } from "../models/models_0";
import { GetResourcePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResourcePolicyCommand}.
 */
export interface GetResourcePolicyCommandInput extends GetResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetResourcePolicyCommand}.
 */
export interface GetResourcePolicyCommandOutput extends GetResourcePolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based policy</a> attached to a Lambda resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetResourcePolicyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetResourcePolicyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // GetResourcePolicyRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetResourcePolicyResponse
 * //   Policy: "STRING_VALUE",
 * //   RevisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourcePolicyCommandInput - {@link GetResourcePolicyCommandInput}
 * @returns {@link GetResourcePolicyCommandOutput}
 * @see {@link GetResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link GetResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 *
 * @public
 */
export class GetResourcePolicyCommand extends command<GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetResourcePolicy",
  GetResourcePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourcePolicyRequest;
      output: GetResourcePolicyResponse;
    };
    sdk: {
      input: GetResourcePolicyCommandInput;
      output: GetResourcePolicyCommandOutput;
    };
  };
}
