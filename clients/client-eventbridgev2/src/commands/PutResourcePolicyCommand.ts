// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type { PutResourcePolicyRequest, PutResourcePolicyResponse } from "../models/models_0";
import { PutResourcePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandInput extends PutResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutResourcePolicyCommand}.
 */
export interface PutResourcePolicyCommandOutput extends PutResourcePolicyResponse, __MetadataBearer {}

/**
 * <p>Attaches a named resource policy to an event bus — the only resource type that supports policies; other resource ARNs are rejected. Each bus holds two named policies: "default" (customer-managed, full IAM policy language including Deny) and "AWS_RAM" (written exclusively by AWS Resource Access Manager to reflect resource shares). Both policies are evaluated on cross-account authorization; an explicit Deny in either overrides an Allow in the other. Operations that omit PolicyName target "default". A "default" policy that would grant public access is rejected with PublicPolicyException and is not attached; this check is always on and cannot be disabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, PutResourcePolicyCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, PutResourcePolicyCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // PutResourcePolicyRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   PolicyDocument: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE",
 *   ExpectedRevisionId: "STRING_VALUE",
 * };
 * const command = new PutResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutResourcePolicyResponse
 * //   ResourceArn: "STRING_VALUE", // required
 * //   PolicyName: "STRING_VALUE", // required
 * //   RevisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutResourcePolicyCommandInput - {@link PutResourcePolicyCommandInput}
 * @returns {@link PutResourcePolicyCommandOutput}
 * @see {@link PutResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link PutResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeV2ClientResolvedConfig | config} for EventBridgeV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another change to the resource is already in progress. Retry the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A client-supplied precondition (e.g. ExpectedRevisionId on a resource-policy write) did not match the current state of the resource. Retrying the same request will fail again; re-read the resource and re-evaluate before retrying.</p> <p>A conditional request is not retry-safe on its own. If an earlier attempt committed but its response never reached the caller, retrying fails with this error, which is indistinguishable from another writer having won. Compare the resource's current contents with what the request intended: a successful attempt stores a revision ID the caller never saw, so the revision alone cannot tell the two apart, but matching contents mean the change took effect.</p>
 *
 * @throws {@link PolicyLengthExceededException} (client fault)
 *  <p>The policy document exceeds the maximum allowed size.</p>
 *
 * @throws {@link PublicPolicyException} (client fault)
 *  <p>The policy was rejected because it would grant public access to the event bus. A statement grants public access when its principal is a wildcard and no condition limits the callers to specific AWS accounts or principals. To fix it, replace the wildcard principal with specific principals, or add a condition that limits the callers to specific AWS accounts. Conditions on event content (events:source, events:detail-type, events:Metadata/*) do not identify the caller and do not make a wildcard principal non-public. Returned only for the "default" policy; the "AWS_RAM" policy is composed by AWS Resource Access Manager and never grants public access.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The caller does not have the permissions required to perform the operation. This error is also returned when the operation cannot use the AWS KMS key for the event bus.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request failed because of an internal service error. Retry the request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>A request parameter is missing or not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because it exceeds a request rate limit. Retry the request with backoff.</p>
 *
 * @throws {@link EventBridgeV2ServiceException}
 * <p>Base exception class for all service exceptions from EventBridgeV2 service.</p>
 *
 *
 * @public
 */
export class PutResourcePolicyCommand extends command<PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput>(
  _ep2,
  _mw0,
  "PutResourcePolicy",
  PutResourcePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutResourcePolicyRequest;
      output: PutResourcePolicyResponse;
    };
    sdk: {
      input: PutResourcePolicyCommandInput;
      output: PutResourcePolicyCommandOutput;
    };
  };
}
