// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetChannelsRequest, GetChannelsResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetChannelsCommand, se_GetChannelsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetChannelsCommand}.
 */
export interface GetChannelsCommandInput extends GetChannelsRequest {}
/**
 * @public
 *
 * The output of {@link GetChannelsCommand}.
 */
export interface GetChannelsCommandOutput extends GetChannelsResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the history and status of each channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetChannelsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetChannelsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetChannelsRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new GetChannelsCommand(input);
 * const response = await client.send(command);
 * // { // GetChannelsResponse
 * //   ChannelsResponse: { // ChannelsResponse
 * //     Channels: { // MapOfChannelResponse // required
 * //       "<keys>": { // ChannelResponse
 * //         ApplicationId: "STRING_VALUE",
 * //         CreationDate: "STRING_VALUE",
 * //         Enabled: true || false,
 * //         HasCredential: true || false,
 * //         Id: "STRING_VALUE",
 * //         IsArchived: true || false,
 * //         LastModifiedBy: "STRING_VALUE",
 * //         LastModifiedDate: "STRING_VALUE",
 * //         Version: Number("int"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetChannelsCommandInput - {@link GetChannelsCommandInput}
 * @returns {@link GetChannelsCommandOutput}
 * @see {@link GetChannelsCommandInput} for command's `input` shape.
 * @see {@link GetChannelsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 *
 * @public
 */
export class GetChannelsCommand extends $Command
  .classBuilder<
    GetChannelsCommandInput,
    GetChannelsCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "GetChannels", {})
  .n("PinpointClient", "GetChannelsCommand")
  .f(void 0, void 0)
  .ser(se_GetChannelsCommand)
  .de(de_GetChannelsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChannelsRequest;
      output: GetChannelsResponse;
    };
    sdk: {
      input: GetChannelsCommandInput;
      output: GetChannelsCommandOutput;
    };
  };
}
