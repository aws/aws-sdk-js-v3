// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { BatchStartRequest, BatchStartResponse } from "../models/models_2";
import { de_BatchStartCommand, se_BatchStartCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchStartCommand}.
 */
export interface BatchStartCommandInput extends BatchStartRequest {}
/**
 * @public
 *
 * The output of {@link BatchStartCommand}.
 */
export interface BatchStartCommandOutput extends BatchStartResponse, __MetadataBearer {}

/**
 * Starts existing resources
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, BatchStartCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, BatchStartCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // BatchStartRequest
 *   ChannelIds: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   MultiplexIds: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchStartCommand(input);
 * const response = await client.send(command);
 * // { // BatchStartResponse
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
 * @param BatchStartCommandInput - {@link BatchStartCommandInput}
 * @returns {@link BatchStartCommandOutput}
 * @see {@link BatchStartCommandInput} for command's `input` shape.
 * @see {@link BatchStartCommandOutput} for command's `response` shape.
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
export class BatchStartCommand extends $Command
  .classBuilder<
    BatchStartCommandInput,
    BatchStartCommandOutput,
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
  .s("MediaLive", "BatchStart", {})
  .n("MediaLiveClient", "BatchStartCommand")
  .f(void 0, void 0)
  .ser(se_BatchStartCommand)
  .de(de_BatchStartCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchStartRequest;
      output: BatchStartResponse;
    };
    sdk: {
      input: BatchStartCommandInput;
      output: BatchStartCommandOutput;
    };
  };
}
