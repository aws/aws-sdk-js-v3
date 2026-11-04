// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAppsListsRequest, ListAppsListsResponse } from "../models/models_0";
import { ListAppsLists$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAppsListsCommand}.
 */
export interface ListAppsListsCommandInput extends ListAppsListsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppsListsCommand}.
 */
export interface ListAppsListsCommandOutput extends ListAppsListsResponse, __MetadataBearer {}

/**
 * Returns an array of `AppsListDataSummary` objects.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListAppsListsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListAppsListsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // ListAppsListsRequest
 *   DefaultLists: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"), // required
 * };
 * const command = new ListAppsListsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppsListsResponse
 * //   AppsLists: [ // AppsListsData
 * //     { // AppsListDataSummary
 * //       ListArn: "STRING_VALUE",
 * //       ListId: "STRING_VALUE",
 * //       ListName: "STRING_VALUE",
 * //       AppsList: [ // AppsList
 * //         { // App
 * //           AppName: "STRING_VALUE", // required
 * //           Protocol: "STRING_VALUE", // required
 * //           Port: Number("long"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppsListsCommandInput - {@link ListAppsListsCommandInput}
 * @returns {@link ListAppsListsCommandOutput}
 * @see {@link ListAppsListsCommandInput} for command's `input` shape.
 * @see {@link ListAppsListsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have submitted an `AssociateAdminAccount` request for an account ID that was already set as the Firewall Manager administrator. Or you might have tried to access a Region that's disabled by default, and that you need to enable for the Firewall Manager administrator account and for Organizations before you can access it.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The operation exceeds a resource limit, for example, the maximum number of `policy` objects that you can create for an Amazon Web Services account. For more information, see [Firewall Manager Limits](https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html) in the *WAF Developer Guide*.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link FMSServiceException}
 *
 * Base exception class for all service exceptions from FMS service.
 *
 * @public
 */
export class ListAppsListsCommand extends command<ListAppsListsCommandInput, ListAppsListsCommandOutput>(
  _ep0,
  _mw0,
  "ListAppsLists",
  ListAppsLists$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppsListsRequest;
      output: ListAppsListsResponse;
    };
    sdk: {
      input: ListAppsListsCommandInput;
      output: ListAppsListsCommandOutput;
    };
  };
}
