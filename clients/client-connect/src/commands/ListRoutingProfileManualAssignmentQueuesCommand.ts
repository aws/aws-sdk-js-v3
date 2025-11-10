// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListRoutingProfileManualAssignmentQueuesRequest,
  ListRoutingProfileManualAssignmentQueuesResponse,
} from "../models/models_2";
import { ListRoutingProfileManualAssignmentQueues } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRoutingProfileManualAssignmentQueuesCommand}.
 */
export interface ListRoutingProfileManualAssignmentQueuesCommandInput
  extends ListRoutingProfileManualAssignmentQueuesRequest {}
/**
 * @public
 *
 * The output of {@link ListRoutingProfileManualAssignmentQueuesCommand}.
 */
export interface ListRoutingProfileManualAssignmentQueuesCommandOutput
  extends ListRoutingProfileManualAssignmentQueuesResponse,
    __MetadataBearer {}

/**
 * <p>Lists the manual assignment queues associated with a routing profile.</p>
 *          <p>
 *             <b>Use cases</b>
 *          </p>
 *          <p>Following are common uses cases for this API:</p>
 *          <ul>
 *             <li>
 *                <p>This API returns list of queues where contacts can be manually assigned or picked by an
 *      agent who has access to the Worklist app. The user can additionally filter on queues, if they
 *      have access to those queues (otherwise a invalid request exception will be thrown).</p>
 *                <p>For information about how manual contact assignment works in the agent workspace, see the
 *       <a href="https://docs.aws.amazon.com/connect/latest/adminguide/worklist-app.html">Access the
 *       Worklist app in the Amazon Connect agent workspace</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Important things to know</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>This API only returns the manual assignment queues associated with a routing profile. Use
 *      the ListRoutingProfileQueues API to list the auto assignment queues for the routing
 *      profile.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Endpoints</b>: See <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect endpoints and
 *    quotas</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListRoutingProfileManualAssignmentQueuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListRoutingProfileManualAssignmentQueuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListRoutingProfileManualAssignmentQueuesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   RoutingProfileId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRoutingProfileManualAssignmentQueuesCommand(input);
 * const response = await client.send(command);
 * // { // ListRoutingProfileManualAssignmentQueuesResponse
 * //   NextToken: "STRING_VALUE",
 * //   RoutingProfileManualAssignmentQueueConfigSummaryList: [ // RoutingProfileManualAssignmentQueueConfigSummaryList
 * //     { // RoutingProfileManualAssignmentQueueConfigSummary
 * //       QueueId: "STRING_VALUE", // required
 * //       QueueArn: "STRING_VALUE", // required
 * //       QueueName: "STRING_VALUE", // required
 * //       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 * //     },
 * //   ],
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedRegion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRoutingProfileManualAssignmentQueuesCommandInput - {@link ListRoutingProfileManualAssignmentQueuesCommandInput}
 * @returns {@link ListRoutingProfileManualAssignmentQueuesCommandOutput}
 * @see {@link ListRoutingProfileManualAssignmentQueuesCommandInput} for command's `input` shape.
 * @see {@link ListRoutingProfileManualAssignmentQueuesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListRoutingProfileManualAssignmentQueuesCommand extends $Command
  .classBuilder<
    ListRoutingProfileManualAssignmentQueuesCommandInput,
    ListRoutingProfileManualAssignmentQueuesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListRoutingProfileManualAssignmentQueues", {})
  .n("ConnectClient", "ListRoutingProfileManualAssignmentQueuesCommand")
  .sc(ListRoutingProfileManualAssignmentQueues)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRoutingProfileManualAssignmentQueuesRequest;
      output: ListRoutingProfileManualAssignmentQueuesResponse;
    };
    sdk: {
      input: ListRoutingProfileManualAssignmentQueuesCommandInput;
      output: ListRoutingProfileManualAssignmentQueuesCommandOutput;
    };
  };
}
