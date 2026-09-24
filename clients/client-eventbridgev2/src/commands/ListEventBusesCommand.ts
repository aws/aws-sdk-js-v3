// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEventBusesRequest, ListEventBusesResponse } from "../models/models_0";
import { ListEventBuses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEventBusesCommand}.
 */
export interface ListEventBusesCommandInput extends ListEventBusesRequest {}
/**
 * @public
 *
 * The output of {@link ListEventBusesCommand}.
 */
export interface ListEventBusesCommandOutput extends ListEventBusesResponse, __MetadataBearer {}

/**
 * Lists the event buses visible to the caller: buses the account owns and buses
 * shared with it through AWS RAM. Shared entries carry identity fields only
 * (Name, EventBusArn, EventBusAccountId); owned entries carry every summary field.
 * Set EventBusAccountId to scope the list to one owner account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, ListEventBusesCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, ListEventBusesCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // ListEventBusesRequest
 *   NamePrefix: "STRING_VALUE",
 *   EventBusAccountId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEventBusesCommand(input);
 * const response = await client.send(command);
 * // { // ListEventBusesResponse
 * //   EventBuses: [ // EventBusSummaryList
 * //     { // EventBusSummary
 * //       Name: "STRING_VALUE",
 * //       EventBusArn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       State: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "ACTIVE" || "DELETE_FAILED",
 * //       StateReason: "STRING_VALUE",
 * //       EventBusAccountId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventBusesCommandInput - {@link ListEventBusesCommandInput}
 * @returns {@link ListEventBusesCommandOutput}
 * @see {@link ListEventBusesCommandInput} for command's `input` shape.
 * @see {@link ListEventBusesCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeV2ClientResolvedConfig | config} for EventBridgeV2Client's `config` shape.
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
export class ListEventBusesCommand extends command<ListEventBusesCommandInput, ListEventBusesCommandOutput>(
  _ep0,
  _mw0,
  "ListEventBuses",
  ListEventBuses$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventBusesRequest;
      output: ListEventBusesResponse;
    };
    sdk: {
      input: ListEventBusesCommandInput;
      output: ListEventBusesCommandOutput;
    };
  };
}
