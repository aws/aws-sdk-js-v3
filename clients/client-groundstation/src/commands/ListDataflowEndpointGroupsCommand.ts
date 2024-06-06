// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListDataflowEndpointGroupsRequest, ListDataflowEndpointGroupsResponse } from "../models/models_0";
import { de_ListDataflowEndpointGroupsCommand, se_ListDataflowEndpointGroupsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataflowEndpointGroupsCommand}.
 */
export interface ListDataflowEndpointGroupsCommandInput extends ListDataflowEndpointGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataflowEndpointGroupsCommand}.
 */
export interface ListDataflowEndpointGroupsCommandOutput extends ListDataflowEndpointGroupsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of <code>DataflowEndpoint</code> groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListDataflowEndpointGroupsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListDataflowEndpointGroupsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // ListDataflowEndpointGroupsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDataflowEndpointGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataflowEndpointGroupsResponse
 * //   nextToken: "STRING_VALUE",
 * //   dataflowEndpointGroupList: [ // DataflowEndpointGroupList
 * //     { // DataflowEndpointListItem
 * //       dataflowEndpointGroupId: "STRING_VALUE",
 * //       dataflowEndpointGroupArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDataflowEndpointGroupsCommandInput - {@link ListDataflowEndpointGroupsCommandInput}
 * @returns {@link ListDataflowEndpointGroupsCommandOutput}
 * @see {@link ListDataflowEndpointGroupsCommandInput} for command's `input` shape.
 * @see {@link ListDataflowEndpointGroupsCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 * @public
 */
export class ListDataflowEndpointGroupsCommand extends $Command
  .classBuilder<
    ListDataflowEndpointGroupsCommandInput,
    ListDataflowEndpointGroupsCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GroundStation", "ListDataflowEndpointGroups", {})
  .n("GroundStationClient", "ListDataflowEndpointGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataflowEndpointGroupsCommand)
  .de(de_ListDataflowEndpointGroupsCommand)
  .build() {}
