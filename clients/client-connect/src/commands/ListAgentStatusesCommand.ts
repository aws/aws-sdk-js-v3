// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAgentStatusRequest, ListAgentStatusResponse } from "../models/models_1";
import { de_ListAgentStatusesCommand, se_ListAgentStatusesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAgentStatusesCommand}.
 */
export interface ListAgentStatusesCommandInput extends ListAgentStatusRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentStatusesCommand}.
 */
export interface ListAgentStatusesCommandOutput extends ListAgentStatusResponse, __MetadataBearer {}

/**
 * <p>Lists agent statuses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListAgentStatusesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListAgentStatusesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListAgentStatusRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   AgentStatusTypes: [ // AgentStatusTypes
 *     "ROUTABLE" || "CUSTOM" || "OFFLINE",
 *   ],
 * };
 * const command = new ListAgentStatusesCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentStatusResponse
 * //   NextToken: "STRING_VALUE",
 * //   AgentStatusSummaryList: [ // AgentStatusSummaryList
 * //     { // AgentStatusSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "ROUTABLE" || "CUSTOM" || "OFFLINE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAgentStatusesCommandInput - {@link ListAgentStatusesCommandInput}
 * @returns {@link ListAgentStatusesCommandOutput}
 * @see {@link ListAgentStatusesCommandInput} for command's `input` shape.
 * @see {@link ListAgentStatusesCommandOutput} for command's `response` shape.
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
export class ListAgentStatusesCommand extends $Command
  .classBuilder<
    ListAgentStatusesCommandInput,
    ListAgentStatusesCommandOutput,
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
  .s("AmazonConnectService", "ListAgentStatuses", {})
  .n("ConnectClient", "ListAgentStatusesCommand")
  .f(void 0, void 0)
  .ser(se_ListAgentStatusesCommand)
  .de(de_ListAgentStatusesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentStatusRequest;
      output: ListAgentStatusResponse;
    };
    sdk: {
      input: ListAgentStatusesCommandInput;
      output: ListAgentStatusesCommandOutput;
    };
  };
}
