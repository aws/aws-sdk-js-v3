// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListMultiplexAlertsRequest, ListMultiplexAlertsResponse } from "../models/models_1";
import { ListMultiplexAlerts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMultiplexAlertsCommand}.
 */
export interface ListMultiplexAlertsCommandInput extends ListMultiplexAlertsRequest {}
/**
 * @public
 *
 * The output of {@link ListMultiplexAlertsCommand}.
 */
export interface ListMultiplexAlertsCommandOutput extends ListMultiplexAlertsResponse, __MetadataBearer {}

/**
 * List the alerts for a multiplex with optional filtering based on alert state.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListMultiplexAlertsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListMultiplexAlertsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // ListMultiplexAlertsRequest
 *   MaxResults: Number("int"),
 *   MultiplexId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   StateFilter: "STRING_VALUE",
 * };
 * const command = new ListMultiplexAlertsCommand(input);
 * const response = await client.send(command);
 * // { // ListMultiplexAlertsResponse
 * //   Alerts: [ // __listOfMultiplexAlert
 * //     { // MultiplexAlert
 * //       AlertType: "STRING_VALUE",
 * //       ClearedTimestamp: new Date("TIMESTAMP"),
 * //       Id: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       PipelineId: "STRING_VALUE",
 * //       SetTimestamp: new Date("TIMESTAMP"),
 * //       State: "SET" || "CLEARED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMultiplexAlertsCommandInput - {@link ListMultiplexAlertsCommandInput}
 * @returns {@link ListMultiplexAlertsCommandOutput}
 * @see {@link ListMultiplexAlertsCommandInput} for command's `input` shape.
 * @see {@link ListMultiplexAlertsCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class ListMultiplexAlertsCommand extends $Command
  .classBuilder<
    ListMultiplexAlertsCommandInput,
    ListMultiplexAlertsCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "ListMultiplexAlerts", {})
  .n("MediaLiveClient", "ListMultiplexAlertsCommand")
  .sc(ListMultiplexAlerts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMultiplexAlertsRequest;
      output: ListMultiplexAlertsResponse;
    };
    sdk: {
      input: ListMultiplexAlertsCommandInput;
      output: ListMultiplexAlertsCommandOutput;
    };
  };
}
