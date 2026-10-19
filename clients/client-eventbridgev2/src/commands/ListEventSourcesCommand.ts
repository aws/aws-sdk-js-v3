// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { ListEventSourcesRequest, ListEventSourcesResponse } from "../models/models_0";
import { ListEventSources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEventSourcesCommand}.
 */
export interface ListEventSourcesCommandInput extends ListEventSourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListEventSourcesCommand}.
 */
export interface ListEventSourcesCommandOutput extends ListEventSourcesResponse, __MetadataBearer {}

/**
 * Lists EventSources as summaries. By default the list spans the EventSources
 * the caller account owns; set EventBusArn to scope it to one bus. Use
 * DescribeEventSource to retrieve full configuration.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, ListEventSourcesCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, ListEventSourcesCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // ListEventSourcesRequest
 *   EventBusArn: "STRING_VALUE",
 *   NamePrefix: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEventSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListEventSourcesResponse
 * //   EventSources: [ // EventSourceSummaryList
 * //     { // EventSourceSummary
 * //       EventSourceArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       EventBusArn: "STRING_VALUE",
 * //       Type: "AWS_SERVICE_EVENTS" || "PARTNER_EVENTS",
 * //       State: "CREATING" || "ACTIVE" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED",
 * //       Revoked: true || false,
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       EventSourceAccountId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventSourcesCommandInput - {@link ListEventSourcesCommandInput}
 * @returns {@link ListEventSourcesCommandOutput}
 * @see {@link ListEventSourcesCommandInput} for command's `input` shape.
 * @see {@link ListEventSourcesCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeV2ClientResolvedConfig | config} for EventBridgeV2Client's `config` shape.
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
export class ListEventSourcesCommand extends command<ListEventSourcesCommandInput, ListEventSourcesCommandOutput>(
  _ep1,
  _mw0,
  "ListEventSources",
  ListEventSources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventSourcesRequest;
      output: ListEventSourcesResponse;
    };
    sdk: {
      input: ListEventSourcesCommandInput;
      output: ListEventSourcesCommandOutput;
    };
  };
}
