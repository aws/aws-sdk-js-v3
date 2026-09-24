// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEventBusRequest, CreateEventBusResponse } from "../models/models_0";
import { CreateEventBus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEventBusCommand}.
 */
export interface CreateEventBusCommandInput extends CreateEventBusRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventBusCommand}.
 */
export interface CreateEventBusCommandOutput extends CreateEventBusResponse, __MetadataBearer {}

/**
 * Creates an event bus. Provisioning is asynchronous: the bus is returned in the
 * CREATING state and transitions to ACTIVE when ready (see the EventBusActive
 * waiter). Retries carrying the same ClientToken are idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, CreateEventBusCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, CreateEventBusCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // CreateEventBusRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KmsKeyIdentifier: "STRING_VALUE",
 *   },
 *   StorageConfiguration: { // StorageConfiguration
 *     RetentionPeriodInDays: Number("int"),
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateEventBusCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventBusResponse
 * //   EventBusArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   EncryptionConfiguration: { // EncryptionConfiguration
 * //     KmsKeyIdentifier: "STRING_VALUE",
 * //   },
 * //   StorageConfiguration: { // StorageConfigurationOutput
 * //     RetentionPeriodInDays: Number("int"),
 * //     RetentionWindowStartTime: new Date("TIMESTAMP"),
 * //   },
 * //   State: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "ACTIVE" || "DELETE_FAILED",
 * //   StateReason: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateEventBusCommandInput - {@link CreateEventBusCommandInput}
 * @returns {@link CreateEventBusCommandOutput}
 * @see {@link CreateEventBusCommandInput} for command's `input` shape.
 * @see {@link CreateEventBusCommandOutput} for command's `response` shape.
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
export class CreateEventBusCommand extends command<CreateEventBusCommandInput, CreateEventBusCommandOutput>(
  _ep0,
  _mw0,
  "CreateEventBus",
  CreateEventBus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventBusRequest;
      output: CreateEventBusResponse;
    };
    sdk: {
      input: CreateEventBusCommandInput;
      output: CreateEventBusCommandOutput;
    };
  };
}
