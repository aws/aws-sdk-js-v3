// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeAccountConfigurationRequest, DescribeAccountConfigurationResponse } from "../models/models_2";
import {
  de_DescribeAccountConfigurationCommand,
  se_DescribeAccountConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountConfigurationCommand}.
 */
export interface DescribeAccountConfigurationCommandInput extends DescribeAccountConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountConfigurationCommand}.
 */
export interface DescribeAccountConfigurationCommandOutput
  extends DescribeAccountConfigurationResponse,
    __MetadataBearer {}

/**
 * Describe account configuration
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeAccountConfigurationCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeAccountConfigurationCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = {};
 * const command = new DescribeAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountConfigurationResponse
 * //   AccountConfiguration: { // AccountConfiguration
 * //     KmsKeyId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAccountConfigurationCommandInput - {@link DescribeAccountConfigurationCommandInput}
 * @returns {@link DescribeAccountConfigurationCommandOutput}
 * @see {@link DescribeAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountConfigurationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeAccountConfigurationCommand extends $Command
  .classBuilder<
    DescribeAccountConfigurationCommandInput,
    DescribeAccountConfigurationCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "DescribeAccountConfiguration", {})
  .n("MediaLiveClient", "DescribeAccountConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAccountConfigurationCommand)
  .de(de_DescribeAccountConfigurationCommand)
  .build() {}
