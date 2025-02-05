// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteContinuousDeploymentPolicyRequest } from "../models/models_1";
import {
  de_DeleteContinuousDeploymentPolicyCommand,
  se_DeleteContinuousDeploymentPolicyCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a continuous deployment policy.</p>
 *          <p>You cannot delete a continuous deployment policy that's attached to a primary
 * 			distribution. First update your distribution to remove the continuous deployment policy,
 * 			then you can delete the policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteContinuousDeploymentPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteContinuousDeploymentPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>Access denied.</p>
 *
 * @throws {@link ContinuousDeploymentPolicyInUse} (client fault)
 *  <p>You cannot delete a continuous deployment policy that is associated with a primary
 * 			distribution.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchContinuousDeploymentPolicy} (client fault)
 *  <p>The continuous deployment policy doesn't exist.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 */
export class DeleteContinuousDeploymentPolicyCommand extends $Command
  .classBuilder<
    DeleteContinuousDeploymentPolicyCommandInput,
    DeleteContinuousDeploymentPolicyCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "DeleteContinuousDeploymentPolicy", {})
  .n("CloudFrontClient", "DeleteContinuousDeploymentPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteContinuousDeploymentPolicyCommand)
  .de(de_DeleteContinuousDeploymentPolicyCommand)
  .build() {
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
