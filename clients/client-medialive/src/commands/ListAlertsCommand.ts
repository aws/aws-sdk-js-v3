// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListAlertsRequest, ListAlertsResponse } from "../models/models_1";
import { ListAlerts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAlertsCommand}.
 */
export interface ListAlertsCommandInput extends ListAlertsRequest {}
/**
 * @public
 *
 * The output of {@link ListAlertsCommand}.
 */
export interface ListAlertsCommandOutput extends ListAlertsResponse, __MetadataBearer {}

/**
 * List the alerts for a channel with optional filtering based on alert state.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListAlertsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListAlertsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // ListAlertsRequest
 *   ChannelId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   StateFilter: "STRING_VALUE",
 * };
 * const command = new ListAlertsCommand(input);
 * const response = await client.send(command);
 * // { // ListAlertsResponse
 * //   Alerts: [ // __listOfChannelAlert
 * //     { // ChannelAlert
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
 * @param ListAlertsCommandInput - {@link ListAlertsCommandInput}
 * @returns {@link ListAlertsCommandOutput}
 * @see {@link ListAlertsCommandInput} for command's `input` shape.
 * @see {@link ListAlertsCommandOutput} for command's `response` shape.
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
export class ListAlertsCommand extends $Command
  .classBuilder<
    ListAlertsCommandInput,
    ListAlertsCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "ListAlerts", {})
  .n("MediaLiveClient", "ListAlertsCommand")
  .sc(ListAlerts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAlertsRequest;
      output: ListAlertsResponse;
    };
    sdk: {
      input: ListAlertsCommandInput;
      output: ListAlertsCommandOutput;
    };
  };
}
