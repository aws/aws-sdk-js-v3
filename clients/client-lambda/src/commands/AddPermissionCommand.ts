// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import type { AddPermissionRequest, AddPermissionResponse } from "../models/models_0";
import { AddPermission$ } from "../schemas/schemas_0";

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
 * <p>Grants a <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html#Principal_specifying">principal</a> permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function. Note: Lambda does not support adding policies to version $LATEST.</p> <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. To grant permission to an organization defined in Organizations, specify the organization ID as the <code>PrincipalOrgID</code>. For Amazon Web Services services, the principal is a domain-style identifier that the service defines, such as <code>s3.amazonaws.com</code> or <code>sns.amazonaws.com</code>. For Amazon Web Services services, you can also specify the ARN of the associated resource as the <code>SourceArn</code>. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.</p> <p>This operation adds a statement to a resource-based permissions policy for the function. For more information about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Using resource-based policies for Lambda</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, AddPermissionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, AddPermissionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
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
 *   InvokedViaFunctionUrl: true || false,
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
 *  <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias.</p> <ul> <li> <p> <b>For AddPermission and RemovePermission API operations:</b> Call <code>GetPolicy</code> to retrieve the latest RevisionId for your resource.</p> </li> <li> <p> <b>For all other API operations:</b> Call <code>GetFunction</code> or <code>GetAlias</code> to retrieve the latest RevisionId for your resource.</p> </li> </ul>
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
 *
 * @example To grant Amazon S3 permission to invoke a function
 * ```javascript
 * // The following example adds permission for Amazon S3 to invoke a Lambda function named my-function for notifications from a bucket named my-bucket-1xpuxmplzrlbh in account 123456789012.
 * const input = {
 *   Action: "lambda:InvokeFunction",
 *   FunctionName: "my-function",
 *   Principal: "s3.amazonaws.com",
 *   SourceAccount: "123456789012",
 *   SourceArn: "arn:aws:s3:::my-bucket-1xpuxmplzrlbh/*",
 *   StatementId: "s3"
 * };
 * const command = new AddPermissionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Statement: `{"Sid":"s3","Effect":"Allow","Principal":{"Service":"s3.amazonaws.com"},"Action":"lambda:InvokeFunction","Resource":"arn:aws:lambda:us-east-2:123456789012:function:my-function","Condition":{"StringEquals":{"AWS:SourceAccount":"123456789012"},"ArnLike":{"AWS:SourceArn":"arn:aws:s3:::my-bucket-1xpuxmplzrlbh"}}}`
 * }
 * *\/
 * ```
 *
 * @example To grant another account permission to invoke a function
 * ```javascript
 * // The following example adds permission for account 223456789012 invoke a Lambda function named my-function.
 * const input = {
 *   Action: "lambda:InvokeFunction",
 *   FunctionName: "my-function",
 *   Principal: "223456789012",
 *   StatementId: "xaccount"
 * };
 * const command = new AddPermissionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Statement: `{"Sid":"xaccount","Effect":"Allow","Principal":{"AWS":"arn:aws:iam::223456789012:root"},"Action":"lambda:InvokeFunction","Resource":"arn:aws:lambda:us-east-2:123456789012:function:my-function"}`
 * }
 * *\/
 * ```
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "AddPermission", {})
  .n("LambdaClient", "AddPermissionCommand")
  .sc(AddPermission$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddPermissionRequest;
      output: AddPermissionResponse;
    };
    sdk: {
      input: AddPermissionCommandInput;
      output: AddPermissionCommandOutput;
    };
  };
}
