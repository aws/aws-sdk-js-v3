// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEventSourceRequest, UpdateEventSourceResponse } from "../models/models_0";
import { UpdateEventSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEventSourceCommand}.
 */
export interface UpdateEventSourceCommandInput extends UpdateEventSourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventSourceCommand}.
 */
export interface UpdateEventSourceCommandOutput extends UpdateEventSourceResponse, __MetadataBearer {}

/**
 * Updates an EventSource. Fields omitted from the request are left unchanged.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, UpdateEventSourceCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, UpdateEventSourceCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // UpdateEventSourceRequest
 *   EventSourceArn: "STRING_VALUE", // required
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
 * };
 * const command = new UpdateEventSourceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEventSourceResponse
 * //   EventSourceArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   EventBusArn: "STRING_VALUE",
 * //   State: "CREATING" || "ACTIVE" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateEventSourceCommandInput - {@link UpdateEventSourceCommandInput}
 * @returns {@link UpdateEventSourceCommandOutput}
 * @see {@link UpdateEventSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeV2ClientResolvedConfig | config} for EventBridgeV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  Another change to the resource is already in progress. Retry the request.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  The resource is not in a state that allows the operation. For example, an
 * event bus that is still being created cannot accept events.
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
export class UpdateEventSourceCommand extends command<UpdateEventSourceCommandInput, UpdateEventSourceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEventSource",
  UpdateEventSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEventSourceRequest;
      output: UpdateEventSourceResponse;
    };
    sdk: {
      input: UpdateEventSourceCommandInput;
      output: UpdateEventSourceCommandOutput;
    };
  };
}
