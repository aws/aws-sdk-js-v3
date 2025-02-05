// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PromoteResourceShareCreatedFromPolicyRequest,
  PromoteResourceShareCreatedFromPolicyResponse,
} from "../models/models_0";
import {
  de_PromoteResourceShareCreatedFromPolicyCommand,
  se_PromoteResourceShareCreatedFromPolicyCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PromoteResourceShareCreatedFromPolicyCommand}.
 */
export interface PromoteResourceShareCreatedFromPolicyCommandInput
  extends PromoteResourceShareCreatedFromPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PromoteResourceShareCreatedFromPolicyCommand}.
 */
export interface PromoteResourceShareCreatedFromPolicyCommandOutput
  extends PromoteResourceShareCreatedFromPolicyResponse,
    __MetadataBearer {}

/**
 * <p>When you attach a resource-based policy to a resource, RAM automatically creates
 *             a resource share of <code>featureSet</code>=<code>CREATED_FROM_POLICY</code> with a managed permission that
 *             has the same IAM permissions as the original resource-based policy. However, this type
 *             of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by
 *             using RAM.</p>
 *          <p>This operation promotes the resource share to a <code>STANDARD</code> resource share that is fully
 *             manageable in RAM. When you promote a resource share, you can then manage the resource share in RAM and
 *             it becomes visible to all of the principals you shared it with.</p>
 *          <important>
 *             <p>Before you perform this operation, you should first run <a>PromotePermissionCreatedFromPolicy</a>to ensure that you have an
 *                 appropriate customer managed permission that can be associated with this resource share after its is promoted. If
 *                 this operation can't find a managed permission that exactly matches the existing
 *                     <code>CREATED_FROM_POLICY</code> permission, then this operation fails.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, PromoteResourceShareCreatedFromPolicyCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, PromoteResourceShareCreatedFromPolicyCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RAMClient(config);
 * const input = { // PromoteResourceShareCreatedFromPolicyRequest
 *   resourceShareArn: "STRING_VALUE", // required
 * };
 * const command = new PromoteResourceShareCreatedFromPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PromoteResourceShareCreatedFromPolicyResponse
 * //   returnValue: true || false,
 * // };
 *
 * ```
 *
 * @param PromoteResourceShareCreatedFromPolicyCommandInput - {@link PromoteResourceShareCreatedFromPolicyCommandInput}
 * @returns {@link PromoteResourceShareCreatedFromPolicyCommandOutput}
 * @see {@link PromoteResourceShareCreatedFromPolicyCommandInput} for command's `input` shape.
 * @see {@link PromoteResourceShareCreatedFromPolicyCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link InvalidStateTransitionException} (client fault)
 *  <p>The operation failed because the requested operation isn't valid for the resource
 *             share in its current state.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>The operation failed because a required input parameter is missing.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
 *
 * @throws {@link ResourceShareLimitExceededException} (client fault)
 *  <p>The operation failed because it would exceed the limit for resource shares for your account. To
 *             view the limits for your Amazon Web Services account, see the <a href="https://console.aws.amazon.com/servicequotas/home/services/ram/quotas">RAM page in the Service Quotas
 *                 console</a>.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link UnmatchedPolicyPermissionException} (client fault)
 *  <p>There isn't an existing managed permission defined in RAM that has the same IAM permissions as
 *             the resource-based policy attached to the resource. You should first run <a>PromotePermissionCreatedFromPolicy</a> to create that managed permission.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 * @public
 */
export class PromoteResourceShareCreatedFromPolicyCommand extends $Command
  .classBuilder<
    PromoteResourceShareCreatedFromPolicyCommandInput,
    PromoteResourceShareCreatedFromPolicyCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonResourceSharing", "PromoteResourceShareCreatedFromPolicy", {})
  .n("RAMClient", "PromoteResourceShareCreatedFromPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PromoteResourceShareCreatedFromPolicyCommand)
  .de(de_PromoteResourceShareCreatedFromPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PromoteResourceShareCreatedFromPolicyRequest;
      output: PromoteResourceShareCreatedFromPolicyResponse;
    };
    sdk: {
      input: PromoteResourceShareCreatedFromPolicyCommandInput;
      output: PromoteResourceShareCreatedFromPolicyCommandOutput;
    };
  };
}
