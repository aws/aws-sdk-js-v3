// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { CreateEventSourceRequest, CreateEventSourceResponse } from "../models/models_0";
import { CreateEventSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEventSourceCommand}.
 */
export interface CreateEventSourceCommandInput extends CreateEventSourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventSourceCommand}.
 */
export interface CreateEventSourceCommandOutput extends CreateEventSourceResponse, __MetadataBearer {}

/**
 * Creates an EventSource, which forwards events from an origin (an AWS service
 * or another account) onto an event bus. The bus must be ACTIVE. Retries
 * carrying the same ClientToken are idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, CreateEventSourceCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, CreateEventSourceCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // CreateEventSourceRequest
 *   Name: "STRING_VALUE", // required
 *   EventBusArn: "STRING_VALUE", // required
 *   Configuration: { // EventSourceConfiguration Union: only one key present
 *     AwsServiceEventsConfiguration: { // AwsServiceEventsSourceConfiguration
 *       AwsService: "STRING_VALUE", // required
 *       Pattern: "STRING_VALUE",
 *       OnFailureConfiguration: { // OnFailureConfiguration
 *         Arn: "STRING_VALUE",
 *       },
 *     },
 *     PartnerEventsConfiguration: { // PartnerEventsSourceConfiguration
 *       PartnerEventSourceArn: "STRING_VALUE", // required
 *       Pattern: "STRING_VALUE",
 *       PartnerBusKmsKeyIdentifier: "STRING_VALUE",
 *       OnFailureConfiguration: {
 *         Arn: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateEventSourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventSourceResponse
 * //   EventSourceArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   EventBusArn: "STRING_VALUE",
 * //   State: "CREATING" || "ACTIVE" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateEventSourceCommandInput - {@link CreateEventSourceCommandInput}
 * @returns {@link CreateEventSourceCommandOutput}
 * @see {@link CreateEventSourceCommandInput} for command's `input` shape.
 * @see {@link CreateEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeV2ClientResolvedConfig | config} for EventBridgeV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  Another change to the resource is already in progress. Retry the request.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  The request reuses the client token of an earlier request with different
 * parameters. Use a new client token, or resend the earlier request unchanged.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  The resource is not in a state that allows the operation. For example, an
 * event bus that is still being created cannot accept events.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  The request would exceed a service quota for the account.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  A resource with the same name already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The resource does not exist.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller does not have the permissions required to perform the operation.
 * This error is also returned when the operation cannot use the AWS KMS key for
 * the event bus.
 *
 * @throws {@link InternalException} (server fault)
 *  The request failed because of an internal service error. Retry the request.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  A request parameter is missing or not valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled because it exceeds a request rate limit. Retry the
 * request with backoff.
 *
 * @throws {@link EventBridgeV2ServiceException}
 * <p>Base exception class for all service exceptions from EventBridgeV2 service.</p>
 *
 *
 * @public
 */
export class CreateEventSourceCommand extends command<CreateEventSourceCommandInput, CreateEventSourceCommandOutput>(
  _ep1,
  _mw0,
  "CreateEventSource",
  CreateEventSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventSourceRequest;
      output: CreateEventSourceResponse;
    };
    sdk: {
      input: CreateEventSourceCommandInput;
      output: CreateEventSourceCommandOutput;
    };
  };
}
