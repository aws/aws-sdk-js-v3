// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import type { ListFlowsRequest, ListFlowsResponse } from "../models/models_0";
import { ListFlows } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFlowsCommand}.
 */
export interface ListFlowsCommandInput extends ListFlowsRequest {}
/**
 * @public
 *
 * The output of {@link ListFlowsCommand}.
 */
export interface ListFlowsCommandOutput extends ListFlowsResponse, __MetadataBearer {}

/**
 * <p> Displays a list of flows that are associated with this account. This request returns a paginated result.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, ListFlowsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, ListFlowsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // ListFlowsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFlowsCommand(input);
 * const response = await client.send(command);
 * // { // ListFlowsResponse
 * //   Flows: [ // __listOfListedFlow
 * //     { // ListedFlow
 * //       AvailabilityZone: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       FlowArn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       SourceType: "OWNED" || "ENTITLED", // required
 * //       Status: "STANDBY" || "ACTIVE" || "UPDATING" || "DELETING" || "STARTING" || "STOPPING" || "ERROR", // required
 * //       Maintenance: { // Maintenance
 * //         MaintenanceDay: "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday" || "Saturday" || "Sunday",
 * //         MaintenanceDeadline: "STRING_VALUE",
 * //         MaintenanceScheduledDate: "STRING_VALUE",
 * //         MaintenanceStartHour: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlowsCommandInput - {@link ListFlowsCommandInput}
 * @returns {@link ListFlowsCommandOutput}
 * @see {@link ListFlowsCommandInput} for command's `input` shape.
 * @see {@link ListFlowsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
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
export class ListFlowsCommand extends $Command
  .classBuilder<
    ListFlowsCommandInput,
    ListFlowsCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "ListFlows", {})
  .n("MediaConnectClient", "ListFlowsCommand")
  .sc(ListFlows)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFlowsRequest;
      output: ListFlowsResponse;
    };
    sdk: {
      input: ListFlowsCommandInput;
      output: ListFlowsCommandOutput;
    };
  };
}
