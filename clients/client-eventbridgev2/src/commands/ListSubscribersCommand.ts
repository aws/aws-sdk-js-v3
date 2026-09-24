// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { ListSubscribersRequest, ListSubscribersResponse } from "../models/models_0";
import { ListSubscribers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSubscribersCommand}.
 */
export interface ListSubscribersCommandInput extends ListSubscribersRequest {}
/**
 * @public
 *
 * The output of {@link ListSubscribersCommand}.
 */
export interface ListSubscribersCommandOutput extends ListSubscribersResponse, __MetadataBearer {}

/**
 * Lists subscribers as summaries. By default the list spans the subscribers the
 * caller account owns across all buses; set EventBusArn to scope it to one bus.
 * Use DescribeSubscriber to retrieve full configuration.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, ListSubscribersCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, ListSubscribersCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // ListSubscribersRequest
 *   EventBusArn: "STRING_VALUE",
 *   NamePrefix: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSubscribersCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscribersResponse
 * //   Subscribers: [ // SubscriberSummaryList
 * //     { // SubscriberSummary
 * //       SubscriberArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       EventBusArn: "STRING_VALUE",
 * //       TargetArn: "STRING_VALUE",
 * //       Type: "FIFO" || "UNORDERED",
 * //       Revoked: true || false,
 * //       State: "RUNNING" || "STOPPED",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       SubscriberAccountId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubscribersCommandInput - {@link ListSubscribersCommandInput}
 * @returns {@link ListSubscribersCommandOutput}
 * @see {@link ListSubscribersCommandInput} for command's `input` shape.
 * @see {@link ListSubscribersCommandOutput} for command's `response` shape.
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
export class ListSubscribersCommand extends command<ListSubscribersCommandInput, ListSubscribersCommandOutput>(
  _ep1,
  _mw0,
  "ListSubscribers",
  ListSubscribers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSubscribersRequest;
      output: ListSubscribersResponse;
    };
    sdk: {
      input: ListSubscribersCommandInput;
      output: ListSubscribersCommandOutput;
    };
  };
}
