// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResourcePoliciesRequest, GetResourcePoliciesResponse } from "../models/models_0";
import { GetResourcePolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResourcePoliciesCommand}.
 */
export interface GetResourcePoliciesCommandInput extends GetResourcePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link GetResourcePoliciesCommand}.
 */
export interface GetResourcePoliciesCommandOutput extends GetResourcePoliciesResponse, __MetadataBearer {}

/**
 * Retrieves the resource policies for the specified resources that you own and have shared.
 *
 * > **Note:** Always check the `NextToken` response parameter for a `null` value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The `NextToken` response parameter value is `null` *only* when there are no more results to display.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourcePoliciesCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetResourcePoliciesCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // GetResourcePoliciesRequest
 *   resourceArns: [ // ResourceArnList // required
 *     "STRING_VALUE",
 *   ],
 *   principal: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new GetResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // GetResourcePoliciesResponse
 * //   policies: [ // PolicyList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourcePoliciesCommandInput - {@link GetResourcePoliciesCommandInput}
 * @returns {@link GetResourcePoliciesCommandOutput}
 * @see {@link GetResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The operation failed because the specified value for `NextToken` isn't valid. You must specify a value you received in the `NextToken` response of a previous call to this operation.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The operation failed because a parameter you specified isn't valid.
 *
 * @throws {@link MalformedArnException} (client fault)
 *
 * The operation failed because the specified [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) has a format that isn't valid.
 *
 * @throws {@link ResourceArnNotFoundException} (client fault)
 *
 * The operation failed because the specified [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) was not found.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The operation failed because the service could not respond to the request due to an internal problem. Try again later.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The operation failed because the service isn't available. Try again later.
 *
 * @throws {@link RAMServiceException}
 *
 * Base exception class for all service exceptions from RAM service.
 *
 * @public
 */
export class GetResourcePoliciesCommand extends command<GetResourcePoliciesCommandInput, GetResourcePoliciesCommandOutput>(
  _ep0,
  _mw0,
  "GetResourcePolicies",
  GetResourcePolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourcePoliciesRequest;
      output: GetResourcePoliciesResponse;
    };
    sdk: {
      input: GetResourcePoliciesCommandInput;
      output: GetResourcePoliciesCommandOutput;
    };
  };
}
