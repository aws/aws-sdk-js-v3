// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateBaiduChannelRequest, UpdateBaiduChannelResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateBaiduChannel } from "../schemas/schemas_6_BaiduChannel";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBaiduChannelCommand}.
 */
export interface UpdateBaiduChannelCommandInput extends UpdateBaiduChannelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBaiduChannelCommand}.
 */
export interface UpdateBaiduChannelCommandOutput extends UpdateBaiduChannelResponse, __MetadataBearer {}

/**
 * <p>Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateBaiduChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateBaiduChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // UpdateBaiduChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   BaiduChannelRequest: { // BaiduChannelRequest
 *     ApiKey: "STRING_VALUE", // required
 *     Enabled: true || false,
 *     SecretKey: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateBaiduChannelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBaiduChannelResponse
 * //   BaiduChannelResponse: { // BaiduChannelResponse
 * //     ApplicationId: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE",
 * //     Credential: "STRING_VALUE", // required
 * //     Enabled: true || false,
 * //     HasCredential: true || false,
 * //     Id: "STRING_VALUE",
 * //     IsArchived: true || false,
 * //     LastModifiedBy: "STRING_VALUE",
 * //     LastModifiedDate: "STRING_VALUE",
 * //     Platform: "STRING_VALUE", // required
 * //     Version: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateBaiduChannelCommandInput - {@link UpdateBaiduChannelCommandInput}
 * @returns {@link UpdateBaiduChannelCommandOutput}
 * @see {@link UpdateBaiduChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateBaiduChannelCommandOutput} for command's `response` shape.
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
export class UpdateBaiduChannelCommand extends $Command
  .classBuilder<
    UpdateBaiduChannelCommandInput,
    UpdateBaiduChannelCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "UpdateBaiduChannel", {})
  .n("PinpointClient", "UpdateBaiduChannelCommand")
  .sc(UpdateBaiduChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBaiduChannelRequest;
      output: UpdateBaiduChannelResponse;
    };
    sdk: {
      input: UpdateBaiduChannelCommandInput;
      output: UpdateBaiduChannelCommandOutput;
    };
  };
}
