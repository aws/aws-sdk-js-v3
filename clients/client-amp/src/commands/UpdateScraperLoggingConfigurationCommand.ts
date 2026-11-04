// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateScraperLoggingConfigurationRequest,
  UpdateScraperLoggingConfigurationResponse,
} from "../models/models_0";
import { UpdateScraperLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateScraperLoggingConfigurationCommandOutput extends UpdateScraperLoggingConfigurationResponse, __MetadataBearer {}

/**
 * Updates the logging configuration for a Amazon Managed Service for Prometheus scraper.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request would cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resources that doesn't exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link AmpServiceException}
 *
 * Base exception class for all service exceptions from Amp service.
 *
 * @public
 */
export class UpdateScraperLoggingConfigurationCommand extends command<UpdateScraperLoggingConfigurationCommandInput, UpdateScraperLoggingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateScraperLoggingConfiguration",
  UpdateScraperLoggingConfiguration$
) {
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
