// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListClusterAlertsRequest, ListClusterAlertsResponse } from "../models/models_1";
import { ListClusterAlerts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListClusterAlertsCommand}.
 */
export interface ListClusterAlertsCommandInput extends ListClusterAlertsRequest {}
/**
 * @public
 *
 * The output of {@link ListClusterAlertsCommand}.
 */
export interface ListClusterAlertsCommandOutput extends ListClusterAlertsResponse, __MetadataBearer {}

/**
 * List the alerts for a cluster with optional filtering based on alert state.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListClusterAlertsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListClusterAlertsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // ListClusterAlertsRequest
 *   ClusterId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   StateFilter: "STRING_VALUE",
 * };
 * const command = new ListClusterAlertsCommand(input);
 * const response = await client.send(command);
 * // { // ListClusterAlertsResponse
 * //   Alerts: [ // __listOfClusterAlert
 * //     { // ClusterAlert
 * //       AlertType: "STRING_VALUE",
 * //       ChannelId: "STRING_VALUE",
 * //       ClearedTimestamp: new Date("TIMESTAMP"),
 * //       Id: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       NodeId: "STRING_VALUE",
 * //       SetTimestamp: new Date("TIMESTAMP"),
 * //       State: "SET" || "CLEARED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClusterAlertsCommandInput - {@link ListClusterAlertsCommandInput}
 * @returns {@link ListClusterAlertsCommandOutput}
 * @see {@link ListClusterAlertsCommandInput} for command's `input` shape.
 * @see {@link ListClusterAlertsCommandOutput} for command's `response` shape.
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
export class ListClusterAlertsCommand extends command<ListClusterAlertsCommandInput, ListClusterAlertsCommandOutput>(
  _ep0,
  _mw0,
  "ListClusterAlerts",
  ListClusterAlerts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClusterAlertsRequest;
      output: ListClusterAlertsResponse;
    };
    sdk: {
      input: ListClusterAlertsCommandInput;
      output: ListClusterAlertsCommandOutput;
    };
  };
}
