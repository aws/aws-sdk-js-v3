// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListVirtualInterfaceRoutesRequest, ListVirtualInterfaceRoutesResponse } from "../models/models_0";
import { ListVirtualInterfaceRoutes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListVirtualInterfaceRoutesCommand}.
 */
export interface ListVirtualInterfaceRoutesCommandInput extends ListVirtualInterfaceRoutesRequest {}
/**
 * @public
 *
 * The output of {@link ListVirtualInterfaceRoutesCommand}.
 */
export interface ListVirtualInterfaceRoutesCommandOutput extends ListVirtualInterfaceRoutesResponse, __MetadataBearer {}

/**
 * <p>Lists the routes for the specified virtual interface.</p>
 *          <p>Use the <code>routeDirection</code> filter to control which routes are returned:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>accepted</code>: routes received from the customer network over the virtual interface.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>advertised</code>: routes advertised to the customer network over the virtual interface.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ListVirtualInterfaceRoutesCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ListVirtualInterfaceRoutesCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // ListVirtualInterfaceRoutesRequest
 *   virtualInterfaceId: "STRING_VALUE",
 *   filters: { // RouteFilters
 *     routeDirection: "accepted" || "advertised",
 *     addressFamily: "ipv4" || "ipv6",
 *     cidrs: [ // RouteFilterCidrStringList
 *       "STRING_VALUE",
 *     ],
 *     asPath: [ // AsPathList
 *       Number("long"),
 *     ],
 *     communities: [ // CommunityList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListVirtualInterfaceRoutesCommand(input);
 * const response = await client.send(command);
 * // { // ListVirtualInterfaceRoutesResponse
 * //   virtualInterfaceId: "STRING_VALUE",
 * //   routes: [ // RouteList
 * //     { // Route
 * //       cidr: "STRING_VALUE",
 * //       routeDirection: "accepted" || "advertised",
 * //       addressFamily: "ipv4" || "ipv6",
 * //       asPath: [ // AsPathSegmentList
 * //         { // AsPathSegment
 * //           pathType: "seq" || "set",
 * //           path: [ // AsPathList
 * //             Number("long"),
 * //           ],
 * //         },
 * //       ],
 * //       communities: [ // CommunityList
 * //         "STRING_VALUE",
 * //       ],
 * //       awsLogicalDeviceId: "STRING_VALUE",
 * //       routeInstalledAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVirtualInterfaceRoutesCommandInput - {@link ListVirtualInterfaceRoutesCommandInput}
 * @returns {@link ListVirtualInterfaceRoutesCommandOutput}
 * @see {@link ListVirtualInterfaceRoutesCommandInput} for command's `input` shape.
 * @see {@link ListVirtualInterfaceRoutesCommandOutput} for command's `response` shape.
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
export class ListVirtualInterfaceRoutesCommand extends command<ListVirtualInterfaceRoutesCommandInput, ListVirtualInterfaceRoutesCommandOutput>(
  _ep0,
  _mw0,
  "ListVirtualInterfaceRoutes",
  ListVirtualInterfaceRoutes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVirtualInterfaceRoutesRequest;
      output: ListVirtualInterfaceRoutesResponse;
    };
    sdk: {
      input: ListVirtualInterfaceRoutesCommandInput;
      output: ListVirtualInterfaceRoutesCommandOutput;
    };
  };
}
