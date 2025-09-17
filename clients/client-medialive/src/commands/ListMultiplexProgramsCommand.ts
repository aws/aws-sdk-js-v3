// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListMultiplexProgramsRequest, ListMultiplexProgramsResponse } from "../models/models_2";
import { de_ListMultiplexProgramsCommand, se_ListMultiplexProgramsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMultiplexProgramsCommand}.
 */
export interface ListMultiplexProgramsCommandInput extends ListMultiplexProgramsRequest {}
/**
 * @public
 *
 * The output of {@link ListMultiplexProgramsCommand}.
 */
export interface ListMultiplexProgramsCommandOutput extends ListMultiplexProgramsResponse, __MetadataBearer {}

/**
 * List the programs that currently exist for a specific multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListMultiplexProgramsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListMultiplexProgramsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // ListMultiplexProgramsRequest
 *   MaxResults: Number("int"),
 *   MultiplexId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListMultiplexProgramsCommand(input);
 * const response = await client.send(command);
 * // { // ListMultiplexProgramsResponse
 * //   MultiplexPrograms: [ // __listOfMultiplexProgramSummary
 * //     { // MultiplexProgramSummary
 * //       ChannelId: "STRING_VALUE",
 * //       ProgramName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMultiplexProgramsCommandInput - {@link ListMultiplexProgramsCommandInput}
 * @returns {@link ListMultiplexProgramsCommandOutput}
 * @see {@link ListMultiplexProgramsCommandInput} for command's `input` shape.
 * @see {@link ListMultiplexProgramsCommandOutput} for command's `response` shape.
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
export class ListMultiplexProgramsCommand extends $Command
  .classBuilder<
    ListMultiplexProgramsCommandInput,
    ListMultiplexProgramsCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "ListMultiplexPrograms", {})
  .n("MediaLiveClient", "ListMultiplexProgramsCommand")
  .f(void 0, void 0)
  .ser(se_ListMultiplexProgramsCommand)
  .de(de_ListMultiplexProgramsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMultiplexProgramsRequest;
      output: ListMultiplexProgramsResponse;
    };
    sdk: {
      input: ListMultiplexProgramsCommandInput;
      output: ListMultiplexProgramsCommandOutput;
    };
  };
}
