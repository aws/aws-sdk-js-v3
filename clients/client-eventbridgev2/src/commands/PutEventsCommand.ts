// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { PutEventsRequest, PutEventsResponse } from "../models/models_0";
import { PutEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutEventsCommand}.
 */
export interface PutEventsCommandInput extends PutEventsRequest {}
/**
 * @public
 *
 * The output of {@link PutEventsCommand}.
 */
export interface PutEventsCommandOutput extends PutEventsResponse, __MetadataBearer {}

/**
 * Publishes events to an event bus.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, PutEventsCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, PutEventsCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // PutEventsRequest
 *   EventBusArn: "STRING_VALUE", // required
 *   Entries: [ // PutEventsRequestEntryList // required
 *     { // PutEventsRequestEntry
 *       Source: "STRING_VALUE", // required
 *       DetailType: "STRING_VALUE", // required
 *       Detail: "STRING_VALUE",
 *       Resources: [ // PutEventsResourceList
 *         "STRING_VALUE",
 *       ],
 *       Time: new Date("TIMESTAMP"),
 *       SystemMetadata: { // PutEventsSystemMetadata
 *         EventGroupId: "STRING_VALUE",
 *         DeduplicationId: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   DeduplicationConfiguration: { // DeduplicationConfiguration
 *     DeduplicationType: "CONTENT_BASED", // required
 *   },
 * };
 * const command = new PutEventsCommand(input);
 * const response = await client.send(command);
 * // { // PutEventsResponse
 * //   FailedEntryCount: Number("int"),
 * //   Entries: [ // PutEventsResultEntryList
 * //     { // PutEventsResultEntry
 * //       EventId: "STRING_VALUE",
 * //       SequenceNumber: "STRING_VALUE",
 * //       SuccessCode: "PUBLISHED" || "DEDUPLICATED",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutEventsCommandInput - {@link PutEventsCommandInput}
 * @returns {@link PutEventsCommandOutput}
 * @see {@link PutEventsCommandInput} for command's `input` shape.
 * @see {@link PutEventsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeV2ClientResolvedConfig | config} for EventBridgeV2Client's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  The request failed because of an internal service error. Retry the request.
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
export class PutEventsCommand extends command<PutEventsCommandInput, PutEventsCommandOutput>(
  _ep1,
  _mw0,
  "PutEvents",
  PutEvents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEventsRequest;
      output: PutEventsResponse;
    };
    sdk: {
      input: PutEventsCommandInput;
      output: PutEventsCommandOutput;
    };
  };
}
