// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListQueuesRequest, ListQueuesResponse } from "../models/models_2";
import { ListQueues } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQueuesCommand}.
 */
export interface ListQueuesCommandInput extends ListQueuesRequest {}
/**
 * @public
 *
 * The output of {@link ListQueuesCommand}.
 */
export interface ListQueuesCommandOutput extends ListQueuesResponse, __MetadataBearer {}

/**
 * <p>Provides information about the queues for the specified Amazon Connect instance.</p>
 *          <p>If you do not specify a <code>QueueTypes</code> parameter, both standard and
 *    agent queues are returned. This might cause an unexpected truncation of results if you have more than 1000 agents and
 *    you limit the number of results of the API call in code.</p>
 *          <p>For more information about queues, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-queues-standard-and-agent.html">Queues: Standard and Agent</a> in the
 *      <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListQueuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListQueuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListQueuesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   QueueTypes: [ // QueueTypes
 *     "STANDARD" || "AGENT",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListQueuesCommand(input);
 * const response = await client.send(command);
 * // { // ListQueuesResponse
 * //   QueueSummaryList: [ // QueueSummaryList
 * //     { // QueueSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       QueueType: "STANDARD" || "AGENT",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQueuesCommandInput - {@link ListQueuesCommandInput}
 * @returns {@link ListQueuesCommandOutput}
 * @see {@link ListQueuesCommandInput} for command's `input` shape.
 * @see {@link ListQueuesCommandOutput} for command's `response` shape.
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
export class ListQueuesCommand extends $Command
  .classBuilder<
    ListQueuesCommandInput,
    ListQueuesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListQueues", {})
  .n("ConnectClient", "ListQueuesCommand")
  .sc(ListQueues)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQueuesRequest;
      output: ListQueuesResponse;
    };
    sdk: {
      input: ListQueuesCommandInput;
      output: ListQueuesCommandOutput;
    };
  };
}
