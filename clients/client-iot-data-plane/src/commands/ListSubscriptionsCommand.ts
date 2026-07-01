// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSubscriptionsRequest, ListSubscriptionsResponse } from "../models/models_0";
import { ListSubscriptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSubscriptionsCommand}.
 */
export interface ListSubscriptionsCommandInput extends ListSubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSubscriptionsCommand}.
 */
export interface ListSubscriptionsCommandOutput extends ListSubscriptionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all subscriptions for MQTT clients with active sessions, including offline clients with persistent sessions.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSubscriptions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, ListSubscriptionsCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, ListSubscriptionsCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * // import type { IoTDataPlaneClientConfig } from "@aws-sdk/client-iot-data-plane";
 * const config = {}; // type is IoTDataPlaneClientConfig
 * const client = new IoTDataPlaneClient(config);
 * const input = { // ListSubscriptionsRequest
 *   clientId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscriptionsResponse
 * //   subscriptions: [ // SubscriptionList
 * //     { // SubscriptionSummary
 * //       topicFilter: "STRING_VALUE", // required
 * //       qos: Number("int"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubscriptionsCommandInput - {@link ListSubscriptionsCommandInput}
 * @returns {@link ListSubscriptionsCommandOutput}
 * @see {@link ListSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for IoTDataPlaneClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTDataPlaneServiceException}
 * <p>Base exception class for all service exceptions from IoTDataPlane service.</p>
 *
 *
 * @public
 */
export class ListSubscriptionsCommand extends command<ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput>(
  _ep0,
  _mw0,
  "ListSubscriptions",
  ListSubscriptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSubscriptionsRequest;
      output: ListSubscriptionsResponse;
    };
    sdk: {
      input: ListSubscriptionsCommandInput;
      output: ListSubscriptionsCommandOutput;
    };
  };
}
