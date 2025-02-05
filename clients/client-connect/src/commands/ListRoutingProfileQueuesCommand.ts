// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRoutingProfileQueuesRequest, ListRoutingProfileQueuesResponse } from "../models/models_2";
import { de_ListRoutingProfileQueuesCommand, se_ListRoutingProfileQueuesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRoutingProfileQueuesCommand}.
 */
export interface ListRoutingProfileQueuesCommandInput extends ListRoutingProfileQueuesRequest {}
/**
 * @public
 *
 * The output of {@link ListRoutingProfileQueuesCommand}.
 */
export interface ListRoutingProfileQueuesCommandOutput extends ListRoutingProfileQueuesResponse, __MetadataBearer {}

/**
 * <p>Lists the queues associated with a routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListRoutingProfileQueuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListRoutingProfileQueuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // ListRoutingProfileQueuesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   RoutingProfileId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRoutingProfileQueuesCommand(input);
 * const response = await client.send(command);
 * // { // ListRoutingProfileQueuesResponse
 * //   NextToken: "STRING_VALUE",
 * //   RoutingProfileQueueConfigSummaryList: [ // RoutingProfileQueueConfigSummaryList
 * //     { // RoutingProfileQueueConfigSummary
 * //       QueueId: "STRING_VALUE", // required
 * //       QueueArn: "STRING_VALUE", // required
 * //       QueueName: "STRING_VALUE", // required
 * //       Priority: Number("int"), // required
 * //       Delay: Number("int"), // required
 * //       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 * //     },
 * //   ],
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastModifiedRegion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRoutingProfileQueuesCommandInput - {@link ListRoutingProfileQueuesCommandInput}
 * @returns {@link ListRoutingProfileQueuesCommandOutput}
 * @see {@link ListRoutingProfileQueuesCommandInput} for command's `input` shape.
 * @see {@link ListRoutingProfileQueuesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListRoutingProfileQueuesCommand extends $Command
  .classBuilder<
    ListRoutingProfileQueuesCommandInput,
    ListRoutingProfileQueuesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "ListRoutingProfileQueues", {})
  .n("ConnectClient", "ListRoutingProfileQueuesCommand")
  .f(void 0, void 0)
  .ser(se_ListRoutingProfileQueuesCommand)
  .de(de_ListRoutingProfileQueuesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRoutingProfileQueuesRequest;
      output: ListRoutingProfileQueuesResponse;
    };
    sdk: {
      input: ListRoutingProfileQueuesCommandInput;
      output: ListRoutingProfileQueuesCommandOutput;
    };
  };
}
