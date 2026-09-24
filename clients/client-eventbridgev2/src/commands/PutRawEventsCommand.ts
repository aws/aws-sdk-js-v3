// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { PutRawEventsRequest, PutRawEventsResponse } from "../models/models_0";
import { PutRawEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutRawEventsCommand}.
 */
export interface PutRawEventsCommandInput extends PutRawEventsRequest {}
/**
 * @public
 *
 * The output of {@link PutRawEventsCommand}.
 */
export interface PutRawEventsCommandOutput extends PutRawEventsResponse, __MetadataBearer {}

/**
 * Publishes pre-shaped events to an event bus.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, PutRawEventsCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, PutRawEventsCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // PutRawEventsRequest
 *   EventBusArn: "STRING_VALUE", // required
 *   Entries: [ // PutRawEventsRequestEntryList // required
 *     { // PutRawEventsRequestEntry
 *       Data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *       Metadata: { // EventMetadataMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *       SystemMetadata: { // PutRawEventsSystemMetadata
 *         ContentType: "STRING_VALUE", // required
 *         DeduplicationId: "STRING_VALUE",
 *         EventGroupId: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   SchemaRegistryConfiguration: { // SchemaRegistryConfiguration
 *     RegistryUri: "STRING_VALUE", // required
 *     ConfluentPublicRegistryConfiguration: { // ConfluentPublicRegistryConfiguration
 *       ConnectionArn: "STRING_VALUE", // required
 *     },
 *   },
 *   DeduplicationConfiguration: { // DeduplicationConfiguration
 *     DeduplicationType: "CONTENT_BASED", // required
 *   },
 * };
 * const command = new PutRawEventsCommand(input);
 * const response = await client.send(command);
 * // { // PutRawEventsResponse
 * //   FailedEntryCount: Number("int"),
 * //   Entries: [ // PutRawEventsResultEntryList
 * //     { // PutRawEventsResultEntry
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
 * @param PutRawEventsCommandInput - {@link PutRawEventsCommandInput}
 * @returns {@link PutRawEventsCommandOutput}
 * @see {@link PutRawEventsCommandInput} for command's `input` shape.
 * @see {@link PutRawEventsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeV2ClientResolvedConfig | config} for EventBridgeV2Client's `config` shape.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  The resource is not in a state that allows the operation. For example, an
 * event bus that is still being created cannot accept events.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The resource does not exist.
 *
 * @throws {@link SchemaRegistryUnavailableException} (client fault)
 *  The configured schema registry could not be reached. Retry the request.
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
export class PutRawEventsCommand extends command<PutRawEventsCommandInput, PutRawEventsCommandOutput>(
  _ep1,
  _mw0,
  "PutRawEvents",
  PutRawEvents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRawEventsRequest;
      output: PutRawEventsResponse;
    };
    sdk: {
      input: PutRawEventsCommandInput;
      output: PutRawEventsCommandOutput;
    };
  };
}
