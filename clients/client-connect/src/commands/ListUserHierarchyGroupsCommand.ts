// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListUserHierarchyGroupsRequest, ListUserHierarchyGroupsResponse } from "../models/models_2";
import { de_ListUserHierarchyGroupsCommand, se_ListUserHierarchyGroupsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUserHierarchyGroupsCommand}.
 */
export interface ListUserHierarchyGroupsCommandInput extends ListUserHierarchyGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListUserHierarchyGroupsCommand}.
 */
export interface ListUserHierarchyGroupsCommandOutput extends ListUserHierarchyGroupsResponse, __MetadataBearer {}

/**
 * <p>Provides summary information about the hierarchy groups for the specified Amazon Connect
 *    instance.</p>
 *          <p>For more information about agent hierarchies, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/agent-hierarchy.html">Set Up Agent Hierarchies</a> in the
 *      <i>Amazon Connect Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListUserHierarchyGroupsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListUserHierarchyGroupsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListUserHierarchyGroupsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListUserHierarchyGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListUserHierarchyGroupsResponse
 * //   UserHierarchyGroupSummaryList: [ // HierarchyGroupSummaryList
 * //     { // HierarchyGroupSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserHierarchyGroupsCommandInput - {@link ListUserHierarchyGroupsCommandInput}
 * @returns {@link ListUserHierarchyGroupsCommandOutput}
 * @see {@link ListUserHierarchyGroupsCommandInput} for command's `input` shape.
 * @see {@link ListUserHierarchyGroupsCommandOutput} for command's `response` shape.
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
export class ListUserHierarchyGroupsCommand extends $Command
  .classBuilder<
    ListUserHierarchyGroupsCommandInput,
    ListUserHierarchyGroupsCommandOutput,
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
  .s("AmazonConnectService", "ListUserHierarchyGroups", {})
  .n("ConnectClient", "ListUserHierarchyGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListUserHierarchyGroupsCommand)
  .de(de_ListUserHierarchyGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUserHierarchyGroupsRequest;
      output: ListUserHierarchyGroupsResponse;
    };
    sdk: {
      input: ListUserHierarchyGroupsCommandInput;
      output: ListUserHierarchyGroupsCommandOutput;
    };
  };
}
