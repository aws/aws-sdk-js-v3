// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetApplicationSettingsRequest, GetApplicationSettingsResponse } from "../models/models_0";
import type { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetApplicationSettings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationSettingsCommand}.
 */
export interface GetApplicationSettingsCommandInput extends GetApplicationSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationSettingsCommand}.
 */
export interface GetApplicationSettingsCommandOutput extends GetApplicationSettingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the settings for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetApplicationSettingsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetApplicationSettingsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetApplicationSettingsRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationSettingsResponse
 * //   ApplicationSettingsResource: { // ApplicationSettingsResource
 * //     ApplicationId: "STRING_VALUE", // required
 * //     CampaignHook: { // CampaignHook
 * //       LambdaFunctionName: "STRING_VALUE",
 * //       Mode: "DELIVERY" || "FILTER",
 * //       WebUrl: "STRING_VALUE",
 * //     },
 * //     LastModifiedDate: "STRING_VALUE",
 * //     Limits: { // CampaignLimits
 * //       Daily: Number("int"),
 * //       MaximumDuration: Number("int"),
 * //       MessagesPerSecond: Number("int"),
 * //       Total: Number("int"),
 * //       Session: Number("int"),
 * //     },
 * //     QuietTime: { // QuietTime
 * //       End: "STRING_VALUE",
 * //       Start: "STRING_VALUE",
 * //     },
 * //     JourneyLimits: { // ApplicationSettingsJourneyLimits
 * //       DailyCap: Number("int"),
 * //       TimeframeCap: { // JourneyTimeframeCap
 * //         Cap: Number("int"),
 * //         Days: Number("int"),
 * //       },
 * //       TotalCap: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApplicationSettingsCommandInput - {@link GetApplicationSettingsCommandInput}
 * @returns {@link GetApplicationSettingsCommandOutput}
 * @see {@link GetApplicationSettingsCommandInput} for command's `input` shape.
 * @see {@link GetApplicationSettingsCommandOutput} for command's `response` shape.
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
export class GetApplicationSettingsCommand extends $Command
  .classBuilder<
    GetApplicationSettingsCommandInput,
    GetApplicationSettingsCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "GetApplicationSettings", {})
  .n("PinpointClient", "GetApplicationSettingsCommand")
  .sc(GetApplicationSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationSettingsRequest;
      output: GetApplicationSettingsResponse;
    };
    sdk: {
      input: GetApplicationSettingsCommandInput;
      output: GetApplicationSettingsCommandOutput;
    };
  };
}
