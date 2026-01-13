// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import type { ListRouterNetworkInterfacesRequest, ListRouterNetworkInterfacesResponse } from "../models/models_0";
import { ListRouterNetworkInterfaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves a list of router network interfaces in AWS Elemental MediaConnect.</p>
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
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 *
 * @public
 */
export class ListRouterNetworkInterfacesCommand extends $Command
  .classBuilder<
    ListRouterNetworkInterfacesCommandInput,
    ListRouterNetworkInterfacesCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "ListRouterNetworkInterfaces", {})
  .n("MediaConnectClient", "ListRouterNetworkInterfacesCommand")
  .sc(ListRouterNetworkInterfaces$)
  .build() {
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
