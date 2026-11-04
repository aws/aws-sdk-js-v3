// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteContinuousDeploymentPolicyRequest } from "../models/models_0";
import { DeleteContinuousDeploymentPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteContinuousDeploymentPolicyCommand}.
 */
export interface DeleteContinuousDeploymentPolicyCommandInput extends DeleteContinuousDeploymentPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteContinuousDeploymentPolicyCommand}.
 */
export interface DeleteContinuousDeploymentPolicyCommandOutput extends __MetadataBearer {}

/**
 * Deletes a continuous deployment policy.
 *
 * You cannot delete a continuous deployment policy that's attached to a primary distribution. First update your distribution to remove the continuous deployment policy, then you can delete the policy.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteContinuousDeploymentPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteContinuousDeploymentPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteContinuousDeploymentPolicyRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeleteContinuousDeploymentPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContinuousDeploymentPolicyCommandInput - {@link DeleteContinuousDeploymentPolicyCommandInput}
 * @returns {@link DeleteContinuousDeploymentPolicyCommandOutput}
 * @see {@link DeleteContinuousDeploymentPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteContinuousDeploymentPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link ContinuousDeploymentPolicyInUse} (client fault)
 *
 * You cannot delete a continuous deployment policy that is associated with a primary distribution.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link NoSuchContinuousDeploymentPolicy} (client fault)
 *
 * The continuous deployment policy doesn't exist.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class DeleteContinuousDeploymentPolicyCommand extends command<DeleteContinuousDeploymentPolicyCommandInput, DeleteContinuousDeploymentPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteContinuousDeploymentPolicy",
  DeleteContinuousDeploymentPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContinuousDeploymentPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteContinuousDeploymentPolicyCommandInput;
      output: DeleteContinuousDeploymentPolicyCommandOutput;
    };
  };
}
