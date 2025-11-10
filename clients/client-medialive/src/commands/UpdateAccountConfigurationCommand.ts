// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateAccountConfigurationRequest, UpdateAccountConfigurationResponse } from "../models/models_2";
import { UpdateAccountConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccountConfigurationCommand}.
 */
export interface UpdateAccountConfigurationCommandInput extends UpdateAccountConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccountConfigurationCommand}.
 */
export interface UpdateAccountConfigurationCommandOutput extends UpdateAccountConfigurationResponse, __MetadataBearer {}

/**
 * Update account configuration
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateAccountConfigurationCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateAccountConfigurationCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateAccountConfigurationRequest
 *   AccountConfiguration: { // AccountConfiguration
 *     KmsKeyId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccountConfigurationResponse
 * //   AccountConfiguration: { // AccountConfiguration
 * //     KmsKeyId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAccountConfigurationCommandInput - {@link UpdateAccountConfigurationCommandInput}
 * @returns {@link UpdateAccountConfigurationCommandOutput}
 * @see {@link UpdateAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link UnprocessableEntityException} (client fault)
 *  Placeholder documentation for UnprocessableEntityException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class UpdateAccountConfigurationCommand extends $Command
  .classBuilder<
    UpdateAccountConfigurationCommandInput,
    UpdateAccountConfigurationCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "UpdateAccountConfiguration", {})
  .n("MediaLiveClient", "UpdateAccountConfigurationCommand")
  .sc(UpdateAccountConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccountConfigurationRequest;
      output: UpdateAccountConfigurationResponse;
    };
    sdk: {
      input: UpdateAccountConfigurationCommandInput;
      output: UpdateAccountConfigurationCommandOutput;
    };
  };
}
