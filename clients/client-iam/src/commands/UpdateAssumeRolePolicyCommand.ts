// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAssumeRolePolicyRequest } from "../models/models_1";
import { UpdateAssumeRolePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAssumeRolePolicyCommand}.
 */
export interface UpdateAssumeRolePolicyCommandInput extends UpdateAssumeRolePolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssumeRolePolicyCommand}.
 */
export interface UpdateAssumeRolePolicyCommandOutput extends __MetadataBearer {}

/**
 * Updates the policy that grants an IAM entity permission to assume a role. This is typically referred to as the "role trust policy". For more information about roles, see [Using roles to delegate permissions and federate identities](https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateAssumeRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateAssumeRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UpdateAssumeRolePolicyRequest
 *   RoleName: "STRING_VALUE", // required
 *   PolicyDocument: "STRING_VALUE", // required
 * };
 * const command = new UpdateAssumeRolePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAssumeRolePolicyCommandInput - {@link UpdateAssumeRolePolicyCommandInput}
 * @returns {@link UpdateAssumeRolePolicyCommandOutput}
 * @see {@link UpdateAssumeRolePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAssumeRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *
 * The request was rejected because the policy document was malformed. The error message describes the specific error.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link UnmodifiableEntityException} (client fault)
 *
 * The request was rejected because service-linked roles are protected Amazon Web Services resources. Only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @example To update the trust policy for an IAM role
 * ```javascript
 * // The following command updates the role trust policy for the role named Test-Role:
 * const input = {
 *   PolicyDocument: `{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"Service":["ec2.amazonaws.com"]},"Action":["sts:AssumeRole"]}]}`,
 *   RoleName: "S3AccessForEC2Instances"
 * };
 * const command = new UpdateAssumeRolePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateAssumeRolePolicyCommand extends command<UpdateAssumeRolePolicyCommandInput, UpdateAssumeRolePolicyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAssumeRolePolicy",
  UpdateAssumeRolePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAssumeRolePolicyRequest;
      output: {};
    };
    sdk: {
      input: UpdateAssumeRolePolicyCommandInput;
      output: UpdateAssumeRolePolicyCommandOutput;
    };
  };
}
