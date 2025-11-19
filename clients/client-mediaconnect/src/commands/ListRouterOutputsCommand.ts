// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { ListRouterOutputsRequest, ListRouterOutputsResponse } from "../models/models_0";
import { ListRouterOutputs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRouterOutputsCommand}.
 */
export interface ListRouterOutputsCommandInput extends ListRouterOutputsRequest {}
/**
 * @public
 *
 * The output of {@link ListRouterOutputsCommand}.
 */
export interface ListRouterOutputsCommandOutput extends ListRouterOutputsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of router outputs in AWS Elemental MediaConnect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, ListRouterOutputsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, ListRouterOutputsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // ListRouterOutputsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // RouterOutputFilterList
 *     { // RouterOutputFilter Union: only one key present
 *       RegionNames: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *       OutputTypes: [ // RouterOutputTypeList
 *         "STANDARD" || "MEDIACONNECT_FLOW" || "MEDIALIVE_INPUT",
 *       ],
 *       NameContains: [
 *         "STRING_VALUE",
 *       ],
 *       NetworkInterfaceArns: [ // RouterNetworkInterfaceArnList
 *         "STRING_VALUE",
 *       ],
 *       RoutedInputArns: [ // RouterInputArnList
 *         "STRING_VALUE",
 *       ],
 *       RoutingScopes: [ // RoutingScopeList
 *         "REGIONAL" || "GLOBAL",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListRouterOutputsCommand(input);
 * const response = await client.send(command);
 * // { // ListRouterOutputsResponse
 * //   RouterOutputs: [ // ListedRouterOutputList // required
 * //     { // ListedRouterOutput
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       OutputType: "STANDARD" || "MEDIACONNECT_FLOW" || "MEDIALIVE_INPUT", // required
 * //       State: "CREATING" || "STANDBY" || "STARTING" || "ACTIVE" || "STOPPING" || "DELETING" || "UPDATING" || "ERROR" || "RECOVERING" || "MIGRATING", // required
 * //       RoutedState: "ROUTED" || "ROUTING" || "UNROUTED", // required
 * //       RegionName: "STRING_VALUE", // required
 * //       AvailabilityZone: "STRING_VALUE", // required
 * //       MaximumBitrate: Number("long"), // required
 * //       RoutingScope: "REGIONAL" || "GLOBAL", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //       MessageCount: Number("int"), // required
 * //       RoutedInputArn: "STRING_VALUE",
 * //       NetworkInterfaceArn: "STRING_VALUE",
 * //       MaintenanceScheduleType: "WINDOW",
 * //       MaintenanceSchedule: { // MaintenanceSchedule Union: only one key present
 * //         Window: { // WindowMaintenanceSchedule
 * //           Start: new Date("TIMESTAMP"), // required
 * //           End: new Date("TIMESTAMP"), // required
 * //           ScheduledTime: new Date("TIMESTAMP"), // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRouterOutputsCommandInput - {@link ListRouterOutputsCommandInput}
 * @returns {@link ListRouterOutputsCommandOutput}
 * @see {@link ListRouterOutputsCommandInput} for command's `input` shape.
 * @see {@link ListRouterOutputsCommandOutput} for command's `response` shape.
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
export class ListRouterOutputsCommand extends $Command
  .classBuilder<
    ListRouterOutputsCommandInput,
    ListRouterOutputsCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "ListRouterOutputs", {})
  .n("MediaConnectClient", "ListRouterOutputsCommand")
  .sc(ListRouterOutputs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRouterOutputsRequest;
      output: ListRouterOutputsResponse;
    };
    sdk: {
      input: ListRouterOutputsCommandInput;
      output: ListRouterOutputsCommandOutput;
    };
  };
}
