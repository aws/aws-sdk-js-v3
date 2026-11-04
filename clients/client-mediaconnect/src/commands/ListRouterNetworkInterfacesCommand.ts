// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRouterNetworkInterfacesRequest, ListRouterNetworkInterfacesResponse } from "../models/models_1";
import { ListRouterNetworkInterfaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRouterNetworkInterfacesCommand}.
 */
export interface ListRouterNetworkInterfacesCommandInput extends ListRouterNetworkInterfacesRequest {}
/**
 * @public
 *
 * The output of {@link ListRouterNetworkInterfacesCommand}.
 */
export interface ListRouterNetworkInterfacesCommandOutput extends ListRouterNetworkInterfacesResponse, __MetadataBearer {}

/**
 * Retrieves a list of router network interfaces in AWS Elemental MediaConnect.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, ListRouterNetworkInterfacesCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, ListRouterNetworkInterfacesCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // ListRouterNetworkInterfacesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // RouterNetworkInterfaceFilterList
 *     { // RouterNetworkInterfaceFilter Union: only one key present
 *       RegionNames: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *       NetworkInterfaceTypes: [ // RouterNetworkInterfaceTypeList
 *         "PUBLIC" || "VPC",
 *       ],
 *       NameContains: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListRouterNetworkInterfacesCommand(input);
 * const response = await client.send(command);
 * // { // ListRouterNetworkInterfacesResponse
 * //   RouterNetworkInterfaces: [ // ListedRouterNetworkInterfaceList // required
 * //     { // ListedRouterNetworkInterface
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       NetworkInterfaceType: "PUBLIC" || "VPC", // required
 * //       AssociatedOutputCount: Number("int"), // required
 * //       AssociatedInputCount: Number("int"), // required
 * //       State: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "ERROR" || "RECOVERING", // required
 * //       RegionName: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRouterNetworkInterfacesCommandInput - {@link ListRouterNetworkInterfacesCommandInput}
 * @returns {@link ListRouterNetworkInterfacesCommandOutput}
 * @see {@link ListRouterNetworkInterfacesCommandInput} for command's `input` shape.
 * @see {@link ListRouterNetworkInterfacesCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable or busy.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link MediaConnectServiceException}
 *
 * Base exception class for all service exceptions from MediaConnect service.
 *
 * @public
 */
export class ListRouterNetworkInterfacesCommand extends command<ListRouterNetworkInterfacesCommandInput, ListRouterNetworkInterfacesCommandOutput>(
  _ep0,
  _mw0,
  "ListRouterNetworkInterfaces",
  ListRouterNetworkInterfaces$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRouterNetworkInterfacesRequest;
      output: ListRouterNetworkInterfacesResponse;
    };
    sdk: {
      input: ListRouterNetworkInterfacesCommandInput;
      output: ListRouterNetworkInterfacesCommandOutput;
    };
  };
}
