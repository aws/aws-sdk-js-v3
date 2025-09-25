// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteSignalMapRequest } from "../models/models_2";
import { DeleteSignalMap } from "../schemas/schemas_18_DeleteSignalMap";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSignalMapCommand}.
 */
export interface DeleteSignalMapCommandInput extends DeleteSignalMapRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSignalMapCommand}.
 */
export interface DeleteSignalMapCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified signal map.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteSignalMapCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteSignalMapCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // DeleteSignalMapRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteSignalMapCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSignalMapCommandInput - {@link DeleteSignalMapCommandInput}
 * @returns {@link DeleteSignalMapCommandOutput}
 * @see {@link DeleteSignalMapCommandInput} for command's `input` shape.
 * @see {@link DeleteSignalMapCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
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
export class DeleteSignalMapCommand extends $Command
  .classBuilder<
    DeleteSignalMapCommandInput,
    DeleteSignalMapCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "DeleteSignalMap", {})
  .n("MediaLiveClient", "DeleteSignalMapCommand")
  .sc(DeleteSignalMap)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSignalMapRequest;
      output: {};
    };
    sdk: {
      input: DeleteSignalMapCommandInput;
      output: DeleteSignalMapCommandOutput;
    };
  };
}
