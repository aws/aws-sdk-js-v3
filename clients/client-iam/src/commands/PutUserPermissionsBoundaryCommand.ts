// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { PutUserPermissionsBoundaryRequest } from "../models/models_0";
import { PutUserPermissionsBoundary } from "../schemas/schemas_45_Policy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutUserPermissionsBoundaryCommand}.
 */
export interface PutUserPermissionsBoundaryCommandInput extends PutUserPermissionsBoundaryRequest {}
/**
 * @public
 *
 * The output of {@link PutUserPermissionsBoundaryCommand}.
 */
export interface PutUserPermissionsBoundaryCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds or updates the policy that is specified as the IAM user's permissions
 *             boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the
 *             boundary for a user. Use the boundary to control the maximum permissions that the user
 *             can have. Setting a permissions boundary is an advanced feature that can affect the
 *             permissions for the user.</p>
 *          <important>
 *             <p>Policies that are used as permissions boundaries do not provide permissions. You
 *                 must also attach a permissions policy to the user. To learn how the effective
 *                 permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy
 *                     evaluation logic</a> in the IAM User Guide. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutUserPermissionsBoundaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutUserPermissionsBoundaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // PutUserPermissionsBoundaryRequest
 *   UserName: "STRING_VALUE", // required
 *   PermissionsBoundary: "STRING_VALUE", // required
 * };
 * const command = new PutUserPermissionsBoundaryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutUserPermissionsBoundaryCommandInput - {@link PutUserPermissionsBoundaryCommandInput}
 * @returns {@link PutUserPermissionsBoundaryCommandOutput}
 * @see {@link PutUserPermissionsBoundaryCommandInput} for command's `input` shape.
 * @see {@link PutUserPermissionsBoundaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link PolicyNotAttachableException} (client fault)
 *  <p>The request failed because Amazon Web Services service role policies can only be attached to the
 *       service-linked role for that service.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class PutUserPermissionsBoundaryCommand extends $Command
  .classBuilder<
    PutUserPermissionsBoundaryCommandInput,
    PutUserPermissionsBoundaryCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "PutUserPermissionsBoundary", {})
  .n("IAMClient", "PutUserPermissionsBoundaryCommand")
  .sc(PutUserPermissionsBoundary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutUserPermissionsBoundaryRequest;
      output: {};
    };
    sdk: {
      input: PutUserPermissionsBoundaryCommandInput;
      output: PutUserPermissionsBoundaryCommandOutput;
    };
  };
}
