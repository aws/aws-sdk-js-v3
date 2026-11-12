// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResourcePoliciesRequest, ListResourcePoliciesResponse } from "../models/models_0";
import { ListResourcePolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourcePoliciesCommand}.
 */
export interface ListResourcePoliciesCommandInput extends ListResourcePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListResourcePoliciesCommand}.
 */
export interface ListResourcePoliciesCommandOutput extends ListResourcePoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists the resource-based policies attached to a secret. The response contains only the
 *             names of the policies, not their contents. Secrets Manager lists <code>default</code> first,
 *             followed by any other policies in alphabetical order. To get the contents of a policy,
 *             use <a>GetResourcePolicy</a>. You can modify only the <code>default</code>
 *             policy.</p>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
 *          <p>
 *             <b>Required permissions:
 *                 </b>
 *             <code>secretsmanager:ListResourcePolicies</code>. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, ListResourcePoliciesCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, ListResourcePoliciesCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * // import type { SecretsManagerClientConfig } from "@aws-sdk/client-secrets-manager";
 * const config = {}; // type is SecretsManagerClientConfig
 * const client = new SecretsManagerClient(config);
 * const input = { // ListResourcePoliciesRequest
 *   SecretId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcePoliciesResponse
 * //   ResourcePolicies: [ // ResourcePolicySummaryListType // required
 * //     { // ResourcePolicySummary
 * //       PolicyName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcePoliciesCommandInput - {@link ListResourcePoliciesCommandInput}
 * @returns {@link ListResourcePoliciesCommandOutput}
 * @see {@link ListResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link ListResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value is invalid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The parameter name or value is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>A parameter value is not valid for the current state of the
 *       resource.</p>
 *          <p>Possible causes:</p>
 *          <ul>
 *             <li>
 *                <p>The secret is scheduled for deletion.</p>
 *             </li>
 *             <li>
 *                <p>You tried to enable rotation on a secret that doesn't already have a Lambda function
 *           ARN configured and you didn't include such an ARN as a parameter in this call. </p>
 *             </li>
 *             <li>
 *                <p>The secret is managed by another service, and you must use that service to update it.
 *           For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets managed by other Amazon Web Services services</a>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Secrets Manager can't find the resource that you asked for.</p>
 *
 * @throws {@link SecretsManagerServiceException}
 * <p>Base exception class for all service exceptions from SecretsManager service.</p>
 *
 *
 * @example To list the resource-based policies attached to a secret
 * ```javascript
 * // The following example shows how to list the resource-based policies attached to a secret.
 * const input = {
 *   SecretId: "MyTestDatabaseSecret"
 * };
 * const command = new ListResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ResourcePolicies: [
 *     {
 *       PolicyName: "default"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListResourcePoliciesCommand extends command<ListResourcePoliciesCommandInput, ListResourcePoliciesCommandOutput>(
  _ep0,
  _mw0,
  "ListResourcePolicies",
  ListResourcePolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcePoliciesRequest;
      output: ListResourcePoliciesResponse;
    };
    sdk: {
      input: ListResourcePoliciesCommandInput;
      output: ListResourcePoliciesCommandOutput;
    };
  };
}
