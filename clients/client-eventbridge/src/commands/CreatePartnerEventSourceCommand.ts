// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePartnerEventSourceRequest, CreatePartnerEventSourceResponse } from "../models/models_0";
import { CreatePartnerEventSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePartnerEventSourceCommand}.
 */
export interface CreatePartnerEventSourceCommandInput extends CreatePartnerEventSourceRequest {}
/**
 * @public
 *
 * The output of {@link CreatePartnerEventSourceCommand}.
 */
export interface CreatePartnerEventSourceCommandOutput extends CreatePartnerEventSourceResponse, __MetadataBearer {}

/**
 * Called by an SaaS partner to create a partner event source. This operation is not used by Amazon Web Services customers.
 *
 * Each partner event source can be used by one Amazon Web Services account to create a matching partner event bus in that Amazon Web Services account. A SaaS partner must create one partner event source for each Amazon Web Services account that wants to receive those event types.
 *
 * A partner event source creates events based on resources within the SaaS partner's service or application.
 *
 * An Amazon Web Services account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using Amazon Web Services Events rules and targets.
 *
 * Partner event source names follow this format:
 *
 * `partner_name/event_namespace/event_name`
 *
 * - *partner_name* is determined during partner registration, and identifies the partner to Amazon Web Services customers.
 * - *event_namespace* is determined by the partner, and is a way for the partner to categorize their events.
 * - *event_name* is determined by the partner, and should uniquely identify an event-generating resource within the partner system.
 *
 *   The *event_name* must be unique across all Amazon Web Services customers. This is because the event source is a shared resource between the partner and customer accounts, and each partner event source unique in the partner account.
 *
 * The combination of *event_namespace* and *event_name* should help Amazon Web Services customers decide whether to create an event bus to receive these events.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, CreatePartnerEventSourceCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, CreatePartnerEventSourceCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * // import type { EventBridgeClientConfig } from "@aws-sdk/client-eventbridge";
 * const config = {}; // type is EventBridgeClientConfig
 * const client = new EventBridgeClient(config);
 * const input = { // CreatePartnerEventSourceRequest
 *   Name: "STRING_VALUE", // required
 *   Account: "STRING_VALUE", // required
 * };
 * const command = new CreatePartnerEventSourceCommand(input);
 * const response = await client.send(command);
 * // { // CreatePartnerEventSourceResponse
 * //   EventSourceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePartnerEventSourceCommandInput - {@link CreatePartnerEventSourceCommandInput}
 * @returns {@link CreatePartnerEventSourceCommandOutput}
 * @see {@link CreatePartnerEventSourceCommandInput} for command's `input` shape.
 * @see {@link CreatePartnerEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * There is concurrent modification on a rule, target, archive, or replay.
 *
 * @throws {@link InternalException} (server fault)
 *
 * This exception occurs due to unexpected causes.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request failed because it attempted to create resource beyond the allowed service quota.
 *
 * @throws {@link OperationDisabledException} (client fault)
 *
 * The operation you are attempting is not available in this region.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The resource you are trying to create already exists.
 *
 * @throws {@link EventBridgeServiceException}
 *
 * Base exception class for all service exceptions from EventBridge service.
 *
 * @public
 */
export class CreatePartnerEventSourceCommand extends command<CreatePartnerEventSourceCommandInput, CreatePartnerEventSourceCommandOutput>(
  _ep0,
  _mw0,
  "CreatePartnerEventSource",
  CreatePartnerEventSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePartnerEventSourceRequest;
      output: CreatePartnerEventSourceResponse;
    };
    sdk: {
      input: CreatePartnerEventSourceCommandInput;
      output: CreatePartnerEventSourceCommandOutput;
    };
  };
}
