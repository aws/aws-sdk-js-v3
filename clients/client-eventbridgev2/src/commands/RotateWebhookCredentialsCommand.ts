// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RotateWebhookCredentialsRequest, RotateWebhookCredentialsResponse } from "../models/models_0";
import { RotateWebhookCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RotateWebhookCredentialsCommand}.
 */
export interface RotateWebhookCredentialsCommandInput extends RotateWebhookCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link RotateWebhookCredentialsCommand}.
 */
export interface RotateWebhookCredentialsCommandOutput extends RotateWebhookCredentialsResponse, __MetadataBearer {}

/**
 * <p>Sets a new credential on a webhook EventSource. If you supply Credential, EventBridge uses that value. Otherwise, EventBridge generates one. For HTTP Basic authentication, only the password changes. The username does not change. EventBridge never returns the credential. To read a generated value, call secretsmanager:GetSecretValue on the secret that SecretArn identifies.</p> <p>You can rotate the credential of an EventSource in the ACTIVE, UPDATING, or UPDATE_FAILED state. For a revoked EventSource or an EventSource in any other state, EventBridge returns InvalidStateException. EventBridge also returns InvalidStateException if the secret of the EventSource is scheduled for deletion or has been deleted.</p> <p>If you rotate the credential of one EventSource too many times in 24 hours, EventBridge returns LimitExceededException. Retry later. The limit becomes available again automatically.</p> <p>If AWS Secrets Manager throttles the call, EventBridge returns ThrottlingException. Retry later.</p> <p>To use this operation, you must have the following permissions in your IAM policy:</p> <ul> <li> <p>secretsmanager:PutSecretValue on the secret of the EventSource</p> </li> <li> <p>secretsmanager:GetSecretValue on the secret of the EventSource, for HTTP Basic authentication only</p> </li> <li> <p>kms:GenerateDataKey and kms:Decrypt on the AWS KMS key that encrypts the secret</p> </li> </ul> <p>The resource policy of the secret must not deny the secretsmanager actions.</p> <p>EventBridge accepts the new credential when this call returns. In rare cases, the new credential takes up to 2 minutes to reach every EventBridge endpoint.</p> <p>EventBridge also accepts the previous credential for 15 minutes after the rotation. The window ends at the CreatedDate of the AWSCURRENT secret version plus 15 minutes. Only the credential that the most recent rotation replaced stays valid. If you rotate again within 15 minutes, the older credential stops working immediately.</p> <p>A retry with the same ClientToken within 8 hours returns the same result and does not rotate again. A retry of a rotation that supplied a value can arrive after a later rotation completed. In that case, the retried value becomes the current credential, and the credential it replaces does not stay valid.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, RotateWebhookCredentialsCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, RotateWebhookCredentialsCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // RotateWebhookCredentialsRequest
 *   EventSourceArn: "STRING_VALUE", // required
 *   Credential: { // WebhookCredential Union: only one key present
 *     StaticTokenSecretValue: "STRING_VALUE",
 *     BasicHttpPassword: "STRING_VALUE",
 *     HmacSecretValue: "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new RotateWebhookCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // RotateWebhookCredentialsResponse
 * //   SecretArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param RotateWebhookCredentialsCommandInput - {@link RotateWebhookCredentialsCommandInput}
 * @returns {@link RotateWebhookCredentialsCommandOutput}
 * @see {@link RotateWebhookCredentialsCommandInput} for command's `input` shape.
 * @see {@link RotateWebhookCredentialsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeV2ClientResolvedConfig | config} for EventBridgeV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another change to the resource is already in progress. Retry the request.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The request reuses the client token of an earlier request with different parameters. Use a new client token, or resend the earlier request unchanged.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The resource is not in a state that allows the operation. For example, an event bus that is still being created cannot accept events.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request would exceed a service quota for the account.</p>
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
export class RotateWebhookCredentialsCommand extends command<RotateWebhookCredentialsCommandInput, RotateWebhookCredentialsCommandOutput>(
  _ep0,
  _mw0,
  "RotateWebhookCredentials",
  RotateWebhookCredentials$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RotateWebhookCredentialsRequest;
      output: RotateWebhookCredentialsResponse;
    };
    sdk: {
      input: RotateWebhookCredentialsCommandInput;
      output: RotateWebhookCredentialsCommandOutput;
    };
  };
}
