// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResiliencyGroupsRequest, ListResiliencyGroupsResult } from "../models/models_0";
import { ListResiliencyGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResiliencyGroupsCommand}.
 */
export interface ListResiliencyGroupsCommandInput extends ListResiliencyGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListResiliencyGroupsCommand}.
 */
export interface ListResiliencyGroupsCommandOutput extends ListResiliencyGroupsResult, __MetadataBearer {}

/**
 * <p>Lists the resiliency groups owned by your Amazon Web Services account in the current
 *       Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ListResiliencyGroupsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ListResiliencyGroupsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // ListResiliencyGroupsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListResiliencyGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListResiliencyGroupsResult
 * //   items: [ // ResiliencyGroupSummaryList
 * //     { // ResiliencyGroupSummary
 * //       resiliencyGroupId: "STRING_VALUE",
 * //       resiliencyGroupArn: "STRING_VALUE",
 * //       resiliencyGroupName: "STRING_VALUE",
 * //       resiliencyGroupType: "Managed",
 * //       ownerAccount: "STRING_VALUE",
 * //       state: "pending" || "available" || "deleting" || "deleted",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResiliencyGroupsCommandInput - {@link ListResiliencyGroupsCommandInput}
 * @returns {@link ListResiliencyGroupsCommandOutput}
 * @see {@link ListResiliencyGroupsCommandInput} for command's `input` shape.
 * @see {@link ListResiliencyGroupsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class ListResiliencyGroupsCommand extends command<ListResiliencyGroupsCommandInput, ListResiliencyGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListResiliencyGroups",
  ListResiliencyGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResiliencyGroupsRequest;
      output: ListResiliencyGroupsResult;
    };
    sdk: {
      input: ListResiliencyGroupsCommandInput;
      output: ListResiliencyGroupsCommandOutput;
    };
  };
}
