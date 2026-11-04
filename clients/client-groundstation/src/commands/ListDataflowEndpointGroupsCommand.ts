// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDataflowEndpointGroupsRequest, ListDataflowEndpointGroupsResponse } from "../models/models_0";
import { ListDataflowEndpointGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of `DataflowEndpoint` groups.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListDataflowEndpointGroupsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListDataflowEndpointGroupsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
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
 *
 * Dependency encountered an error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource was not found.
 *
 * @throws {@link GroundStationServiceException}
 *
 * Base exception class for all service exceptions from GroundStation service.
 *
 * @public
 */
export class ListDataflowEndpointGroupsCommand extends command<ListDataflowEndpointGroupsCommandInput, ListDataflowEndpointGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListDataflowEndpointGroups",
  ListDataflowEndpointGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataflowEndpointGroupsRequest;
      output: ListDataflowEndpointGroupsResponse;
    };
    sdk: {
      input: ListDataflowEndpointGroupsCommandInput;
      output: ListDataflowEndpointGroupsCommandOutput;
    };
  };
}
