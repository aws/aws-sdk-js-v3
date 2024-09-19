// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { PutResourcePolicyRequest, PutResourcePolicyResponse } from "../models/models_0";
import { de_PutResourcePolicyCommand, se_PutResourcePolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandInput extends PutResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandOutput extends PutResourcePolicyResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>The option to create and modify full JSON resource-based policies, and to use the PutResourcePolicy, GetResourcePolicy, and DeleteResourcePolicy APIs, won't be
 *       available in all Amazon Web Services Regions until September 30, 2024.</p>
 *          </note>
 *          <p>Adds a <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">resource-based policy</a>
 *       to a function. You can use resource-based policies to grant access to other
 *       <a href="https://docs.aws.amazon.com/lambda/latest/dg/permissions-function-cross-account.html">Amazon Web Services accounts</a>,
 *       <a href="https://docs.aws.amazon.com/lambda/latest/dg/permissions-function-organization.html">organizations</a>, or
 *       <a href="https://docs.aws.amazon.com/lambda/latest/dg/permissions-function-services.html">services</a>. Resource-based policies
 *     apply to a single function, version, or alias.</p>
 *          <important>
 *             <p>Adding a resource-based policy using this API action replaces any existing policy you've previously created. This means that if
 *         you've previously added resource-based permissions to a function using the <a>AddPermission</a> action, those
 *       permissions will be overwritten by your new policy.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutResourcePolicyCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutResourcePolicyCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // PutResourcePolicyRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 *   RevisionId: "STRING_VALUE",
 * };
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutResourcePolicyResponse
 * //   Policy: "STRING_VALUE",
 * //   RevisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutResourcePolicyCommandInput - {@link PutResourcePolicyCommandInput}
 * @returns {@link PutResourcePolicyCommandOutput}
 * @see {@link PutResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link PolicyLengthExceededException} (client fault)
 *  <p>The permissions policy for the resource is too large. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda quotas</a>.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>For AddPermission and RemovePermission API operations:</b> Call <code>GetPolicy</code> to retrieve the latest RevisionId for your resource.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>For all other API operations:</b> Call <code>GetFunction</code> or <code>GetAlias</code> to retrieve the latest RevisionId for your resource.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link PublicPolicyException} (client fault)
 *  <p>Lambda prevented your policy from being created because it would grant public access to your function. If you intended to
 *       create a public policy, use the <a>PutPublicAccessBlockConfig</a> API action to configure your function's public-access settings
 *       to allow public policies.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
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
 * @public
 */
export class PutResourcePolicyCommand extends $Command
  .classBuilder<
    PutResourcePolicyCommandInput,
    PutResourcePolicyCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "PutResourcePolicy", {})
  .n("LambdaClient", "PutResourcePolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutResourcePolicyCommand)
  .de(de_PutResourcePolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutResourcePolicyRequest;
      output: PutResourcePolicyResponse;
    };
    sdk: {
      input: PutResourcePolicyCommandInput;
      output: PutResourcePolicyCommandOutput;
    };
  };
}
