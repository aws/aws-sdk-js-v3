// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAgentsRequest, ListAgentsResponse } from "../models/models_0";
import { de_ListAgentsCommand, se_ListAgentsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAgentsCommand}.
 */
export interface ListAgentsCommandInput extends ListAgentsRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentsCommand}.
 */
export interface ListAgentsCommandOutput extends ListAgentsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request.</p>
 *          <p>With pagination, you can reduce the number of agents returned in a response. If you get
 *       a truncated list of agents in a response, the response contains a marker that you can specify
 *       in your next request to fetch the next page of agents.</p>
 *          <p>
 *             <code>ListAgents</code> is eventually consistent. This means the result of running the
 *       operation might not reflect that you just created or deleted an agent. For example, if you
 *       create an agent with <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html">CreateAgent</a> and then
 *       immediately run <code>ListAgents</code>, that agent might not show up in the list right away.
 *       In situations like this, you can always confirm whether an agent has been created (or deleted)
 *       by using <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html">DescribeAgent</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, ListAgentsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, ListAgentsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // ListAgentsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentsResponse
 * //   Agents: [ // AgentList
 * //     { // AgentListEntry
 * //       AgentArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: "ONLINE" || "OFFLINE",
 * //       Platform: { // Platform
 * //         Version: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentsCommandInput - {@link ListAgentsCommandInput}
 * @returns {@link ListAgentsCommandOutput}
 * @see {@link ListAgentsCommandInput} for command's `input` shape.
 * @see {@link ListAgentsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 * @public
 */
export class ListAgentsCommand extends $Command
  .classBuilder<
    ListAgentsCommandInput,
    ListAgentsCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "ListAgents", {})
  .n("DataSyncClient", "ListAgentsCommand")
  .f(void 0, void 0)
  .ser(se_ListAgentsCommand)
  .de(de_ListAgentsCommand)
  .build() {}
