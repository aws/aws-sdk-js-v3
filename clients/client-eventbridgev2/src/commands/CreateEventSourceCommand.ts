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
 * <p>Creates an EventSource, which forwards events from an origin (an AWS service, a partner, or a third-party webhook provider) to an event bus. The event bus must be in the ACTIVE state. This operation is idempotent: retries that use the same ClientToken return the same result.</p>
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
 *     WebhookEventsConfiguration: { // WebhookEventsSourceConfiguration
 *       AuthConfiguration: { // WebhookAuthConfiguration Union: only one key present
 *         StaticTokenAuthConfiguration: { // WebhookStaticTokenAuthConfiguration
 *           TokenHttpHeader: "STRING_VALUE", // required
 *           SecretValue: "STRING_VALUE",
 *         },
 *         BasicHttpAuthConfiguration: { // WebhookBasicHttpAuthConfiguration
 *           Username: "STRING_VALUE",
 *           Password: "STRING_VALUE",
 *         },
 *         HmacAuthConfiguration: { // WebhookHmacAuthConfiguration
 *           Algorithm: "SHA256" || "SHA1", // required
 *           Encoding: "HEX" || "BASE64", // required
 *           SignatureHttpHeader: "STRING_VALUE", // required
 *           SignaturePrefix: "STRING_VALUE",
 *           Delimiter: "STRING_VALUE",
 *           TimestampHttpHeader: "STRING_VALUE",
 *           TimestampPrefix: "STRING_VALUE",
 *           TimestampToleranceInSeconds: Number("int"),
 *           MessageIdHttpHeader: "STRING_VALUE",
 *           SignedMessageComposition: "BODY" || "TIMESTAMP_DOT_BODY" || "MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY", // required
 *           SecretValue: "STRING_VALUE",
 *           SecretEncoding: "RAW" || "BASE64",
 *         },
 *       },
 *       KmsKeyIdentifier: "STRING_VALUE",
 *       RoleArn: "STRING_VALUE", // required
 *       MetadataHttpHeaders: [ // WebhookMetadataHttpHeaderList
 *         "STRING_VALUE",
 *       ],
 *       DeduplicationConfiguration: { // WebhookDeduplicationConfiguration
 *         DeduplicationType: "CONTENT_BASED", // required
 *       },
 *       LogConfiguration: { // LogConfiguration
 *         Level: "OFF" || "ERROR" || "INFO",
 *         IncludePayload: "FULL" || "ON_ERROR_ONLY",
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
 * //   EventSourceDetails: { // EventSourceDetails
 * //     WebhookDetails: { // WebhookDetails
 * //       WebhookUrl: "STRING_VALUE",
 * //       SecretArn: "STRING_VALUE",
 * //     },
 * //   },
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>A resource with the same name already exists.</p>
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
