// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { AddPermissionRequest, AddPermissionResponse } from "../models/models_0";
import { de_AddPermissionCommand, se_AddPermissionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddPermissionCommand}.
 */
export interface AddPermissionCommandInput extends AddPermissionRequest {}
/**
 * @public
 *
 * The output of {@link AddPermissionCommand}.
 */
export interface AddPermissionCommandOutput extends AddPermissionResponse, __MetadataBearer {}

/**
 * <p>Grants an Amazon Web Service, Amazon Web Services account, or Amazon Web Services organization
 *       permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict
 *       access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name
 *       (ARN) of that version or alias to invoke the function. Note: Lambda does not support adding policies
 *       to version $LATEST.</p>
 *          <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. To grant
 *       permission to an organization defined in Organizations, specify the organization ID as the
 *         <code>PrincipalOrgID</code>. For Amazon Web Services, the principal is a domain-style identifier that
 *       the service defines, such as <code>s3.amazonaws.com</code> or <code>sns.amazonaws.com</code>. For Amazon Web Services, you can also specify the ARN of the associated resource as the <code>SourceArn</code>. If
 *       you grant permission to a service principal without specifying the source, other accounts could potentially
 *       configure resources in their account to invoke your Lambda function.</p>
 *          <p>This operation adds a statement to a resource-based permissions policy for the function. For more information
 *       about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Using resource-based policies for Lambda</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, AddPermissionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, AddPermissionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // AddPermissionRequest
 *   FunctionName: "STRING_VALUE", // required
 *   StatementId: "STRING_VALUE", // required
 *   Action: "STRING_VALUE", // required
 *   Principal: "STRING_VALUE", // required
 *   SourceArn: "STRING_VALUE",
 *   SourceAccount: "STRING_VALUE",
 *   EventSourceToken: "STRING_VALUE",
 *   Qualifier: "STRING_VALUE",
 *   RevisionId: "STRING_VALUE",
 *   PrincipalOrgID: "STRING_VALUE",
 *   FunctionUrlAuthType: "NONE" || "AWS_IAM",
 * };
 * const command = new AddPermissionCommand(input);
 * const response = await client.send(command);
 * // { // AddPermissionResponse
 * //   Statement: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddPermissionCommandInput - {@link AddPermissionCommandInput}
 * @returns {@link AddPermissionCommandOutput}
 * @see {@link AddPermissionCommandInput} for command's `input` shape.
 * @see {@link AddPermissionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link PolicyLengthExceededException} (client fault)
 *  <p>The permissions policy for the resource is too large. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda quotas</a>.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the <code>GetFunction</code> or the <code>GetAlias</code>
 *       API operation to retrieve the latest RevisionId for your resource.</p>
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
export class AddPermissionCommand extends $Command
  .classBuilder<
    AddPermissionCommandInput,
    AddPermissionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "AddPermission", {})
  .n("LambdaClient", "AddPermissionCommand")
  .f(void 0, void 0)
  .ser(se_AddPermissionCommand)
  .de(de_AddPermissionCommand)
  .build() {}
