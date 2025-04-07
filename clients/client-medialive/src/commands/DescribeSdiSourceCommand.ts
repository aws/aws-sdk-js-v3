// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeSdiSourceRequest, DescribeSdiSourceResponse } from "../models/models_2";
import { de_DescribeSdiSourceCommand, se_DescribeSdiSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSdiSourceCommand}.
 */
export interface DescribeSdiSourceCommandInput extends DescribeSdiSourceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSdiSourceCommand}.
 */
export interface DescribeSdiSourceCommandOutput extends DescribeSdiSourceResponse, __MetadataBearer {}

/**
 * Gets details about a SdiSource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeSdiSourceCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeSdiSourceCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeSdiSourceRequest
 *   SdiSourceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeSdiSourceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSdiSourceResponse
 * //   SdiSource: { // SdiSource
 * //     Arn: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Inputs: [ // __listOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //     Mode: "QUADRANT" || "INTERLEAVE",
 * //     Name: "STRING_VALUE",
 * //     State: "IDLE" || "IN_USE" || "DELETED",
 * //     Type: "SINGLE" || "QUAD",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSdiSourceCommandInput - {@link DescribeSdiSourceCommandInput}
 * @returns {@link DescribeSdiSourceCommandOutput}
 * @see {@link DescribeSdiSourceCommandInput} for command's `input` shape.
 * @see {@link DescribeSdiSourceCommandOutput} for command's `response` shape.
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
export class DescribeSdiSourceCommand extends $Command
  .classBuilder<
    DescribeSdiSourceCommandInput,
    DescribeSdiSourceCommandOutput,
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
  .s("MediaLive", "DescribeSdiSource", {})
  .n("MediaLiveClient", "DescribeSdiSourceCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSdiSourceCommand)
  .de(de_DescribeSdiSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSdiSourceRequest;
      output: DescribeSdiSourceResponse;
    };
    sdk: {
      input: DescribeSdiSourceCommandInput;
      output: DescribeSdiSourceCommandOutput;
    };
  };
}
