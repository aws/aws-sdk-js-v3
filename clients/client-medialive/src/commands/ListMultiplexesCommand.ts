// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMultiplexesRequest, ListMultiplexesResponse } from "../models/models_1";
import { ListMultiplexes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMultiplexesCommand}.
 */
export interface ListMultiplexesCommandInput extends ListMultiplexesRequest {}
/**
 * @public
 *
 * The output of {@link ListMultiplexesCommand}.
 */
export interface ListMultiplexesCommandOutput extends ListMultiplexesResponse, __MetadataBearer {}

/**
 * Retrieve a list of the existing multiplexes.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListMultiplexesCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListMultiplexesCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // ListMultiplexesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListMultiplexesCommand(input);
 * const response = await client.send(command);
 * // { // ListMultiplexesResponse
 * //   Multiplexes: [ // __listOfMultiplexSummary
 * //     { // MultiplexSummary
 * //       Arn: "STRING_VALUE",
 * //       AvailabilityZones: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       Id: "STRING_VALUE",
 * //       MultiplexSettings: { // MultiplexSettingsSummary
 * //         TransportStreamBitrate: Number("int"),
 * //       },
 * //       Name: "STRING_VALUE",
 * //       PipelinesRunningCount: Number("int"),
 * //       ProgramCount: Number("int"),
 * //       State: "CREATING" || "CREATE_FAILED" || "IDLE" || "STARTING" || "RUNNING" || "RECOVERING" || "STOPPING" || "DELETING" || "DELETED",
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMultiplexesCommandInput - {@link ListMultiplexesCommandInput}
 * @returns {@link ListMultiplexesCommandOutput}
 * @see {@link ListMultiplexesCommandInput} for command's `input` shape.
 * @see {@link ListMultiplexesCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class ListMultiplexesCommand extends command<ListMultiplexesCommandInput, ListMultiplexesCommandOutput>(
  _ep0,
  _mw0,
  "ListMultiplexes",
  ListMultiplexes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMultiplexesRequest;
      output: ListMultiplexesResponse;
    };
    sdk: {
      input: ListMultiplexesCommandInput;
      output: ListMultiplexesCommandOutput;
    };
  };
}
