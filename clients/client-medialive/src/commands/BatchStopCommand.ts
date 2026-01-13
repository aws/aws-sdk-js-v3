// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { BatchStopRequest, BatchStopResponse } from "../models/models_0";
import { BatchStop$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchStopCommand}.
 */
export interface BatchStopCommandInput extends BatchStopRequest {}
/**
 * @public
 *
 * The output of {@link BatchStopCommand}.
 */
export interface BatchStopCommandOutput extends BatchStopResponse, __MetadataBearer {}

/**
 * Stops running resources
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, BatchStopCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, BatchStopCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // BatchStopRequest
 *   ChannelIds: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   MultiplexIds: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchStopCommand(input);
 * const response = await client.send(command);
 * // { // BatchStopResponse
 * //   Failed: [ // __listOfBatchFailedResultModel
 * //     { // BatchFailedResultModel
 * //       Arn: "STRING_VALUE",
 * //       Code: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Successful: [ // __listOfBatchSuccessfulResultModel
 * //     { // BatchSuccessfulResultModel
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchStopCommandInput - {@link BatchStopCommandInput}
 * @returns {@link BatchStopCommandOutput}
 * @see {@link BatchStopCommandInput} for command's `input` shape.
 * @see {@link BatchStopCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
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
export class BatchStopCommand extends $Command
  .classBuilder<
    BatchStopCommandInput,
    BatchStopCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "BatchStop", {})
  .n("MediaLiveClient", "BatchStopCommand")
  .sc(BatchStop$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchStopRequest;
      output: BatchStopResponse;
    };
    sdk: {
      input: BatchStopCommandInput;
      output: BatchStopCommandOutput;
    };
  };
}
