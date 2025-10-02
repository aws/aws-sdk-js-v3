// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateScraperLoggingConfigurationRequest,
  UpdateScraperLoggingConfigurationResponse,
} from "../models/models_0";
import {
  de_UpdateScraperLoggingConfigurationCommand,
  se_UpdateScraperLoggingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateScraperLoggingConfigurationCommand}.
 */
export interface UpdateScraperLoggingConfigurationCommandInput extends UpdateScraperLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateScraperLoggingConfigurationCommand}.
 */
export interface UpdateScraperLoggingConfigurationCommandOutput
  extends UpdateScraperLoggingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the logging configuration for a Amazon Managed Service for Prometheus scraper.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, UpdateScraperLoggingConfigurationCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, UpdateScraperLoggingConfigurationCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // UpdateScraperLoggingConfigurationRequest
 *   scraperId: "STRING_VALUE", // required
 *   loggingDestination: { // ScraperLoggingDestination Union: only one key present
 *     cloudWatchLogs: { // CloudWatchLogDestination
 *       logGroupArn: "STRING_VALUE", // required
 *     },
 *   },
 *   scraperComponents: [ // ScraperComponents
 *     { // ScraperComponent
 *       type: "STRING_VALUE", // required
 *       config: { // ComponentConfig
 *         options: { // StringMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateScraperLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateScraperLoggingConfigurationResponse
 * //   status: { // ScraperLoggingConfigurationStatus
 * //     statusCode: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateScraperLoggingConfigurationCommandInput - {@link UpdateScraperLoggingConfigurationCommandInput}
 * @returns {@link UpdateScraperLoggingConfigurationCommandOutput}
 * @see {@link UpdateScraperLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateScraperLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request would cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resources that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 *
 * @public
 */
export class UpdateScraperLoggingConfigurationCommand extends $Command
  .classBuilder<
    UpdateScraperLoggingConfigurationCommandInput,
    UpdateScraperLoggingConfigurationCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPrometheusService", "UpdateScraperLoggingConfiguration", {})
  .n("AmpClient", "UpdateScraperLoggingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateScraperLoggingConfigurationCommand)
  .de(de_UpdateScraperLoggingConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateScraperLoggingConfigurationRequest;
      output: UpdateScraperLoggingConfigurationResponse;
    };
    sdk: {
      input: UpdateScraperLoggingConfigurationCommandInput;
      output: UpdateScraperLoggingConfigurationCommandOutput;
    };
  };
}
