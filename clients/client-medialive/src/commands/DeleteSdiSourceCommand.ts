// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteSdiSourceRequest, DeleteSdiSourceResponse } from "../models/models_1";
import { DeleteSdiSource } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSdiSourceCommand}.
 */
export interface DeleteSdiSourceCommandInput extends DeleteSdiSourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSdiSourceCommand}.
 */
export interface DeleteSdiSourceCommandOutput extends DeleteSdiSourceResponse, __MetadataBearer {}

/**
 * Delete an SdiSource. The SdiSource must not be part of any SidSourceMapping and must not be attached to any input.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteSdiSourceCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteSdiSourceCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // DeleteSdiSourceRequest
 *   SdiSourceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSdiSourceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSdiSourceResponse
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
 * @param DeleteSdiSourceCommandInput - {@link DeleteSdiSourceCommandInput}
 * @returns {@link DeleteSdiSourceCommandOutput}
 * @see {@link DeleteSdiSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteSdiSourceCommandOutput} for command's `response` shape.
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
export class DeleteSdiSourceCommand extends $Command
  .classBuilder<
    DeleteSdiSourceCommandInput,
    DeleteSdiSourceCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "DeleteSdiSource", {})
  .n("MediaLiveClient", "DeleteSdiSourceCommand")
  .sc(DeleteSdiSource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSdiSourceRequest;
      output: DeleteSdiSourceResponse;
    };
    sdk: {
      input: DeleteSdiSourceCommandInput;
      output: DeleteSdiSourceCommandOutput;
    };
  };
}
