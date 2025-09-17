// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateSdiSourceRequest, UpdateSdiSourceResponse } from "../models/models_2";
import { de_UpdateSdiSourceCommand, se_UpdateSdiSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSdiSourceCommand}.
 */
export interface UpdateSdiSourceCommandInput extends UpdateSdiSourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSdiSourceCommand}.
 */
export interface UpdateSdiSourceCommandOutput extends UpdateSdiSourceResponse, __MetadataBearer {}

/**
 * Change some of the settings in an SdiSource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateSdiSourceCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateSdiSourceCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateSdiSourceRequest
 *   Mode: "QUADRANT" || "INTERLEAVE",
 *   Name: "STRING_VALUE",
 *   SdiSourceId: "STRING_VALUE", // required
 *   Type: "SINGLE" || "QUAD",
 * };
 * const command = new UpdateSdiSourceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSdiSourceResponse
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
 * @param UpdateSdiSourceCommandInput - {@link UpdateSdiSourceCommandInput}
 * @returns {@link UpdateSdiSourceCommandOutput}
 * @see {@link UpdateSdiSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateSdiSourceCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class UpdateSdiSourceCommand extends $Command
  .classBuilder<
    UpdateSdiSourceCommandInput,
    UpdateSdiSourceCommandOutput,
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
  .s("MediaLive", "UpdateSdiSource", {})
  .n("MediaLiveClient", "UpdateSdiSourceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSdiSourceCommand)
  .de(de_UpdateSdiSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSdiSourceRequest;
      output: UpdateSdiSourceResponse;
    };
    sdk: {
      input: UpdateSdiSourceCommandInput;
      output: UpdateSdiSourceCommandOutput;
    };
  };
}
