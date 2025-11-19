// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { ListRouterInputsRequest, ListRouterInputsResponse } from "../models/models_0";
import { ListRouterInputs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRouterInputsCommand}.
 */
export interface ListRouterInputsCommandInput extends ListRouterInputsRequest {}
/**
 * @public
 *
 * The output of {@link ListRouterInputsCommand}.
 */
export interface ListRouterInputsCommandOutput extends ListRouterInputsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of router inputs in AWS Elemental MediaConnect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, ListRouterInputsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, ListRouterInputsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // ListRouterInputsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // RouterInputFilterList
 *     { // RouterInputFilter Union: only one key present
 *       RegionNames: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *       InputTypes: [ // RouterInputTypeList
 *         "STANDARD" || "FAILOVER" || "MERGE" || "MEDIACONNECT_FLOW",
 *       ],
 *       NameContains: [
 *         "STRING_VALUE",
 *       ],
 *       NetworkInterfaceArns: [ // RouterNetworkInterfaceArnList
 *         "STRING_VALUE",
 *       ],
 *       RoutingScopes: [ // RoutingScopeList
 *         "REGIONAL" || "GLOBAL",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListRouterInputsCommand(input);
 * const response = await client.send(command);
 * // { // ListRouterInputsResponse
 * //   RouterInputs: [ // ListedRouterInputList // required
 * //     { // ListedRouterInput
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       InputType: "STANDARD" || "FAILOVER" || "MERGE" || "MEDIACONNECT_FLOW", // required
 * //       State: "CREATING" || "STANDBY" || "STARTING" || "ACTIVE" || "STOPPING" || "DELETING" || "UPDATING" || "ERROR" || "RECOVERING" || "MIGRATING", // required
 * //       RoutedOutputs: Number("int"), // required
 * //       RegionName: "STRING_VALUE", // required
 * //       AvailabilityZone: "STRING_VALUE", // required
 * //       MaximumBitrate: Number("long"), // required
 * //       RoutingScope: "REGIONAL" || "GLOBAL", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //       MessageCount: Number("int"), // required
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
 * @param ListRouterInputsCommandInput - {@link ListRouterInputsCommandInput}
 * @returns {@link ListRouterInputsCommandOutput}
 * @see {@link ListRouterInputsCommandInput} for command's `input` shape.
 * @see {@link ListRouterInputsCommandOutput} for command's `response` shape.
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
export class ListRouterInputsCommand extends $Command
  .classBuilder<
    ListRouterInputsCommandInput,
    ListRouterInputsCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "ListRouterInputs", {})
  .n("MediaConnectClient", "ListRouterInputsCommand")
  .sc(ListRouterInputs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRouterInputsRequest;
      output: ListRouterInputsResponse;
    };
    sdk: {
      input: ListRouterInputsCommandInput;
      output: ListRouterInputsCommandOutput;
    };
  };
}
