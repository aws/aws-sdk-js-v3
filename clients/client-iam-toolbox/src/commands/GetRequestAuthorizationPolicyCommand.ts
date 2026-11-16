// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRequestAuthorizationPolicyInput, GetRequestAuthorizationPolicyOutput } from "../models/models_0";
import { GetRequestAuthorizationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRequestAuthorizationPolicyCommand}.
 */
export interface GetRequestAuthorizationPolicyCommandInput extends GetRequestAuthorizationPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetRequestAuthorizationPolicyCommand}.
 */
export interface GetRequestAuthorizationPolicyCommandOutput extends GetRequestAuthorizationPolicyOutput, __MetadataBearer {}

/**
 * <p>Retrieves a policy that was evaluated for a specific access denied request. The operation returns the structured JSON document of the policy that was captured with the original authorization request. It doesn't retrieve the current version of the policy.</p> <p>For some AWS services and policy types, the returned policy document includes all actions relevant to the service that processed the denied request, but might omit actions for other services.</p> <p>Specify the authorization ID from the access denied error message and the policy URI returned by <code>GetRequestAuthorizationDetails</code> for the same authorization ID.</p> <p>Access depends on the account and organization recorded for the principal that made the denied request. If an organization was recorded, the calling principal must belong to that organization. Otherwise, the calling principal must belong to the recorded account.</p> <p>To use this operation, you must have the <code>iam:GetRequestAuthorizationPolicy</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMToolboxClient, GetRequestAuthorizationPolicyCommand } from "@aws-sdk/client-iam-toolbox"; // ES Modules import
 * // const { IAMToolboxClient, GetRequestAuthorizationPolicyCommand } = require("@aws-sdk/client-iam-toolbox"); // CommonJS import
 * // import type { IAMToolboxClientConfig } from "@aws-sdk/client-iam-toolbox";
 * const config = {}; // type is IAMToolboxClientConfig
 * const client = new IAMToolboxClient(config);
 * const input = { // GetRequestAuthorizationPolicyInput
 *   authorizationId: "STRING_VALUE", // required
 *   policyUri: "STRING_VALUE", // required
 * };
 * const command = new GetRequestAuthorizationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetRequestAuthorizationPolicyOutput
 * //   policyDocument: "DOCUMENT_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetRequestAuthorizationPolicyCommandInput - {@link GetRequestAuthorizationPolicyCommandInput}
 * @returns {@link GetRequestAuthorizationPolicyCommandOutput}
 * @see {@link GetRequestAuthorizationPolicyCommandInput} for command's `input` shape.
 * @see {@link GetRequestAuthorizationPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMToolboxClientResolvedConfig | config} for IAMToolboxClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request. Try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested policy or authorization details do not exist in this region or have expired. Verify that the authorization ID from the access denied error message is correct and the call is made in the region where the denial occurred. Ensure that the calling principal belongs to the same account or organization as the original denied request. If you specified a policy URI, verify that it is from the <code>policies</code> list that <code>GetRequestAuthorizationDetails</code> returns for the same authorization ID.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request is malformed or is missing one or more required parameters. Check the request parameters and try again.</p>
 *
 * @throws {@link IAMToolboxServiceException}
 * <p>Base exception class for all service exceptions from IAMToolbox service.</p>
 *
 *
 * @example Retrieve the policy for an explicitly denied request
 * ```javascript
 * //
 * const input = {
 *   authorizationId: "1a2b3c4d5e6f7g8h9i0j1k2l3",
 *   policyUri: "arn:aws:iam::aws:policy/AWSDenyAll"
 * };
 * const command = new GetRequestAuthorizationPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   policyDocument: {
 *     Statement: [
 *       {
 *         Action: "*",
 *         Effect: "Deny",
 *         Resource: "*",
 *         Sid: "DenyAll"
 *       }
 *     ],
 *     Version: "2012-10-17"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetRequestAuthorizationPolicyCommand extends command<GetRequestAuthorizationPolicyCommandInput, GetRequestAuthorizationPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetRequestAuthorizationPolicy",
  GetRequestAuthorizationPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRequestAuthorizationPolicyInput;
      output: GetRequestAuthorizationPolicyOutput;
    };
    sdk: {
      input: GetRequestAuthorizationPolicyCommandInput;
      output: GetRequestAuthorizationPolicyCommandOutput;
    };
  };
}
