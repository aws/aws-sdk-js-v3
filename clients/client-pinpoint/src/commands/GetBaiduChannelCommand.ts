// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetBaiduChannelRequest, GetBaiduChannelResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetBaiduChannel } from "../schemas/schemas_6_BaiduChannel";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBaiduChannelCommand}.
 */
export interface GetBaiduChannelCommandInput extends GetBaiduChannelRequest {}
/**
 * @public
 *
 * The output of {@link GetBaiduChannelCommand}.
 */
export interface GetBaiduChannelCommandOutput extends GetBaiduChannelResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the status and settings of the Baidu channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetBaiduChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetBaiduChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetBaiduChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new GetBaiduChannelCommand(input);
 * const response = await client.send(command);
 * // { // GetBaiduChannelResponse
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
 * @param GetBaiduChannelCommandInput - {@link GetBaiduChannelCommandInput}
 * @returns {@link GetBaiduChannelCommandOutput}
 * @see {@link GetBaiduChannelCommandInput} for command's `input` shape.
 * @see {@link GetBaiduChannelCommandOutput} for command's `response` shape.
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
export class GetBaiduChannelCommand extends $Command
  .classBuilder<
    GetBaiduChannelCommandInput,
    GetBaiduChannelCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "GetBaiduChannel", {})
  .n("PinpointClient", "GetBaiduChannelCommand")
  .sc(GetBaiduChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBaiduChannelRequest;
      output: GetBaiduChannelResponse;
    };
    sdk: {
      input: GetBaiduChannelCommandInput;
      output: GetBaiduChannelCommandOutput;
    };
  };
}
