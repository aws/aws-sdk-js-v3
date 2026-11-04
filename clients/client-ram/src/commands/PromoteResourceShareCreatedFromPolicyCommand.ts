// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PromoteResourceShareCreatedFromPolicyRequest,
  PromoteResourceShareCreatedFromPolicyResponse,
} from "../models/models_0";
import { PromoteResourceShareCreatedFromPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PromoteResourceShareCreatedFromPolicyCommand}.
 */
export interface PromoteResourceShareCreatedFromPolicyCommandInput extends PromoteResourceShareCreatedFromPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PromoteResourceShareCreatedFromPolicyCommand}.
 */
export interface PromoteResourceShareCreatedFromPolicyCommandOutput extends PromoteResourceShareCreatedFromPolicyResponse, __MetadataBearer {}

/**
 * When you attach a resource-based policy to a resource, RAM automatically creates a resource share of `featureSet`=`CREATED_FROM_POLICY` with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM.
 *
 * This operation promotes the resource share to a `STANDARD` resource share that is fully manageable in RAM. When you promote a resource share, you can then manage the resource share in RAM and it becomes visible to all of the principals you shared it with.
 *
 * > **Important:** Before you perform this operation, you should first run PromotePermissionCreatedFromPolicyto ensure that you have an appropriate customer managed permission that can be associated with this resource share after its is promoted. If this operation can't find a managed permission that exactly matches the existing `CREATED_FROM_POLICY` permission, then this operation fails.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, PromoteResourceShareCreatedFromPolicyCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, PromoteResourceShareCreatedFromPolicyCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
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
 *
 * The operation failed because a parameter you specified isn't valid.
 *
 * @throws {@link InvalidStateTransitionException} (client fault)
 *
 * The operation failed because the requested operation isn't valid for the resource share in its current state.
 *
 * @throws {@link MalformedArnException} (client fault)
 *
 * The operation failed because the specified [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) has a format that isn't valid.
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *
 * The operation failed because a required input parameter is missing.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The operation failed because the requested operation isn't permitted.
 *
 * @throws {@link ResourceShareLimitExceededException} (client fault)
 *
 * The operation failed because it would exceed the limit for resource shares for your account. You can associate up to 100 resources per call. To view the limits for your Amazon Web Services account, see the [RAM page in the Service Quotas console](https://console.aws.amazon.com/servicequotas/home/services/ram/quotas).
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The operation failed because the service could not respond to the request due to an internal problem. Try again later.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The operation failed because the service isn't available. Try again later.
 *
 * @throws {@link UnknownResourceException} (client fault)
 *
 * The operation failed because a specified resource couldn't be found.
 *
 * @throws {@link UnmatchedPolicyPermissionException} (client fault)
 *
 * There isn't an existing managed permission defined in RAM that has the same IAM permissions as the resource-based policy attached to the resource. You should first run PromotePermissionCreatedFromPolicy to create that managed permission.
 *
 * @throws {@link RAMServiceException}
 *
 * Base exception class for all service exceptions from RAM service.
 *
 * @public
 */
export class PromoteResourceShareCreatedFromPolicyCommand extends command<PromoteResourceShareCreatedFromPolicyCommandInput, PromoteResourceShareCreatedFromPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PromoteResourceShareCreatedFromPolicy",
  PromoteResourceShareCreatedFromPolicy$
) {
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
