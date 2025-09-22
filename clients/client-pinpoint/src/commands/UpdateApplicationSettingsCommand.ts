// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateApplicationSettingsRequest, UpdateApplicationSettingsResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateApplicationSettings } from "../schemas/schemas_9_Campaign";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationSettingsCommand}.
 */
export interface UpdateApplicationSettingsCommandInput extends UpdateApplicationSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationSettingsCommand}.
 */
export interface UpdateApplicationSettingsCommandOutput extends UpdateApplicationSettingsResponse, __MetadataBearer {}

/**
 * <p>Updates the settings for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateApplicationSettingsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateApplicationSettingsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // UpdateApplicationSettingsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   WriteApplicationSettingsRequest: { // WriteApplicationSettingsRequest
 *     CampaignHook: { // CampaignHook
 *       LambdaFunctionName: "STRING_VALUE",
 *       Mode: "DELIVERY" || "FILTER",
 *       WebUrl: "STRING_VALUE",
 *     },
 *     CloudWatchMetricsEnabled: true || false,
 *     EventTaggingEnabled: true || false,
 *     Limits: { // CampaignLimits
 *       Daily: Number("int"),
 *       MaximumDuration: Number("int"),
 *       MessagesPerSecond: Number("int"),
 *       Total: Number("int"),
 *       Session: Number("int"),
 *     },
 *     QuietTime: { // QuietTime
 *       End: "STRING_VALUE",
 *       Start: "STRING_VALUE",
 *     },
 *     JourneyLimits: { // ApplicationSettingsJourneyLimits
 *       DailyCap: Number("int"),
 *       TimeframeCap: { // JourneyTimeframeCap
 *         Cap: Number("int"),
 *         Days: Number("int"),
 *       },
 *       TotalCap: Number("int"),
 *     },
 *   },
 * };
 * const command = new UpdateApplicationSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApplicationSettingsResponse
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
 * @param UpdateApplicationSettingsCommandInput - {@link UpdateApplicationSettingsCommandInput}
 * @returns {@link UpdateApplicationSettingsCommandOutput}
 * @see {@link UpdateApplicationSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationSettingsCommandOutput} for command's `response` shape.
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
export class UpdateApplicationSettingsCommand extends $Command
  .classBuilder<
    UpdateApplicationSettingsCommandInput,
    UpdateApplicationSettingsCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "UpdateApplicationSettings", {})
  .n("PinpointClient", "UpdateApplicationSettingsCommand")
  .sc(UpdateApplicationSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationSettingsRequest;
      output: UpdateApplicationSettingsResponse;
    };
    sdk: {
      input: UpdateApplicationSettingsCommandInput;
      output: UpdateApplicationSettingsCommandOutput;
    };
  };
}
