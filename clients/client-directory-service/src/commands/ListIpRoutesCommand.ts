// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIpRoutesRequest, ListIpRoutesResult } from "../models/models_0";
import { ListIpRoutes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIpRoutesCommand}.
 */
export interface ListIpRoutesCommandInput extends ListIpRoutesRequest {}
/**
 * @public
 *
 * The output of {@link ListIpRoutesCommand}.
 */
export interface ListIpRoutesCommandOutput extends ListIpRoutesResult, __MetadataBearer {}

/**
 * Lists the address blocks that you have added to a directory.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ListIpRoutesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ListIpRoutesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // ListIpRoutesRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListIpRoutesCommand(input);
 * const response = await client.send(command);
 * // { // ListIpRoutesResult
 * //   IpRoutesInfo: [ // IpRoutesInfo
 * //     { // IpRouteInfo
 * //       DirectoryId: "STRING_VALUE",
 * //       CidrIp: "STRING_VALUE",
 * //       CidrIpv6: "STRING_VALUE",
 * //       IpRouteStatusMsg: "Adding" || "Added" || "Removing" || "Removed" || "AddFailed" || "RemoveFailed",
 * //       AddedDateTime: new Date("TIMESTAMP"),
 * //       IpRouteStatusReason: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIpRoutesCommandInput - {@link ListIpRoutesCommandInput}
 * @returns {@link ListIpRoutesCommandOutput}
 * @see {@link ListIpRoutesCommandInput} for command's `input` shape.
 * @see {@link ListIpRoutesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` value is not valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @example To list IP routes
 * ```javascript
 * // The following example lists the address blocks that have been added to a specified directory.
 * const input = {
 *   DirectoryId: "d-92654abfed",
 *   Limit: 0
 * };
 * const command = new ListIpRoutesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   IpRoutesInfo: [
 *     {
 *       AddedDateTime: 1.48157763163E9,
 *       CidrIp: "12.12.12.12/32",
 *       Description: "example",
 *       DirectoryId: "d-92654abfed",
 *       IpRouteStatusMsg: "Added"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListIpRoutesCommand extends command<ListIpRoutesCommandInput, ListIpRoutesCommandOutput>(
  _ep0,
  _mw0,
  "ListIpRoutes",
  ListIpRoutes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIpRoutesRequest;
      output: ListIpRoutesResult;
    };
    sdk: {
      input: ListIpRoutesCommandInput;
      output: ListIpRoutesCommandOutput;
    };
  };
}
