// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeScraperLoggingConfigurationRequest,
  DescribeScraperLoggingConfigurationResponse,
} from "../models/models_0";
import { DescribeScraperLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScraperLoggingConfigurationCommand}.
 */
export interface DescribeScraperLoggingConfigurationCommandInput extends DescribeScraperLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScraperLoggingConfigurationCommand}.
 */
export interface DescribeScraperLoggingConfigurationCommandOutput extends DescribeScraperLoggingConfigurationResponse, __MetadataBearer {}

/**
 * <p>Describes the logging configuration for a Amazon Managed Service for Prometheus scraper.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DescribeScraperLoggingConfigurationCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DescribeScraperLoggingConfigurationCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DescribeScraperLoggingConfigurationRequest
 *   scraperId: "STRING_VALUE", // required
 * };
 * const command = new DescribeScraperLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScraperLoggingConfigurationResponse
 * //   status: { // ScraperLoggingConfigurationStatus
 * //     statusCode: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //   },
 * //   scraperId: "STRING_VALUE", // required
 * //   loggingDestination: { // ScraperLoggingDestination Union: only one key present
 * //     cloudWatchLogs: { // CloudWatchLogDestination
 * //       logGroupArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   scraperComponents: [ // ScraperComponents // required
 * //     { // ScraperComponent
 * //       type: "STRING_VALUE", // required
 * //       config: { // ComponentConfig
 * //         options: { // StringMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   modifiedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeScraperLoggingConfigurationCommandInput - {@link DescribeScraperLoggingConfigurationCommandInput}
 * @returns {@link DescribeScraperLoggingConfigurationCommandOutput}
 * @see {@link DescribeScraperLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeScraperLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class DescribeScraperLoggingConfigurationCommand extends $Command
  .classBuilder<
    DescribeScraperLoggingConfigurationCommandInput,
    DescribeScraperLoggingConfigurationCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPrometheusService", "DescribeScraperLoggingConfiguration", {})
  .n("AmpClient", "DescribeScraperLoggingConfigurationCommand")
  .sc(DescribeScraperLoggingConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScraperLoggingConfigurationRequest;
      output: DescribeScraperLoggingConfigurationResponse;
    };
    sdk: {
      input: DescribeScraperLoggingConfigurationCommandInput;
      output: DescribeScraperLoggingConfigurationCommandOutput;
    };
  };
}
