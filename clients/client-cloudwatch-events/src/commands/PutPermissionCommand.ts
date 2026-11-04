// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutPermissionRequest } from "../models/models_0";
import { PutPermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutPermissionCommand}.
 */
export interface PutPermissionCommandInput extends PutPermissionRequest {}
/**
 * @public
 *
 * The output of {@link PutPermissionCommand}.
 */
export interface PutPermissionCommandOutput extends __MetadataBearer {}

/**
 * Running `PutPermission` permits the specified Amazon Web Services account or Amazon Web Services organization to put events to the specified *event bus*. Amazon EventBridge (CloudWatch Events) rules in your account are triggered by these events arriving to an event bus in your account.
 *
 * For another account to send events to your account, that external account must have an EventBridge rule with your account's event bus as a target.
 *
 * To enable multiple Amazon Web Services accounts to put events to your event bus, run `PutPermission` once for each of these accounts. Or, if all the accounts are members of the same Amazon Web Services organization, you can run `PutPermission` once specifying `Principal` as "*" and specifying the Amazon Web Services organization ID in `Condition`, to grant permissions to all accounts in that organization.
 *
 * If you grant permissions using an organization, then accounts in that organization must specify a `RoleArn` with proper permissions when they use `PutTarget` to add your account's event bus as a target. For more information, see [Sending and Receiving Events Between Amazon Web Services Accounts](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html) in the *Amazon EventBridge User Guide*.
 *
 * The permission policy on the event bus cannot exceed 10 KB in size.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, PutPermissionCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, PutPermissionCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // PutPermissionRequest
 *   EventBusName: "STRING_VALUE",
 *   Action: "STRING_VALUE",
 *   Principal: "STRING_VALUE",
 *   StatementId: "STRING_VALUE",
 *   Condition: { // Condition
 *     Type: "STRING_VALUE", // required
 *     Key: "STRING_VALUE", // required
 *     Value: "STRING_VALUE", // required
 *   },
 *   Policy: "STRING_VALUE",
 * };
 * const command = new PutPermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutPermissionCommandInput - {@link PutPermissionCommandInput}
 * @returns {@link PutPermissionCommandOutput}
 * @see {@link PutPermissionCommandInput} for command's `input` shape.
 * @see {@link PutPermissionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * There is concurrent modification on a rule, target, archive, or replay.
 *
 * @throws {@link InternalException} (server fault)
 *
 * This exception occurs due to unexpected causes.
 *
 * @throws {@link OperationDisabledException} (client fault)
 *
 * The operation you are attempting is not available in this region.
 *
 * @throws {@link PolicyLengthExceededException} (client fault)
 *
 * The event bus policy is too long. For more information, see the limits.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An entity that you specified does not exist.
 *
 * @throws {@link CloudWatchEventsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchEvents service.
 *
 * @public
 */
export class PutPermissionCommand extends command<PutPermissionCommandInput, PutPermissionCommandOutput>(
  _ep0,
  _mw0,
  "PutPermission",
  PutPermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPermissionRequest;
      output: {};
    };
    sdk: {
      input: PutPermissionCommandInput;
      output: PutPermissionCommandOutput;
    };
  };
}
