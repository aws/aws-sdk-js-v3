// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteScraperLoggingConfigurationRequest } from "../models/models_0";
import { DeleteScraperLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteScraperLoggingConfigurationCommand}.
 */
export interface DeleteScraperLoggingConfigurationCommandInput extends DeleteScraperLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteScraperLoggingConfigurationCommand}.
 */
export interface DeleteScraperLoggingConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Deletes the logging configuration for a Amazon Managed Service for Prometheus scraper.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DeleteScraperLoggingConfigurationCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DeleteScraperLoggingConfigurationCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DeleteScraperLoggingConfigurationRequest
 *   scraperId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteScraperLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteScraperLoggingConfigurationCommandInput - {@link DeleteScraperLoggingConfigurationCommandInput}
 * @returns {@link DeleteScraperLoggingConfigurationCommandOutput}
 * @see {@link DeleteScraperLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteScraperLoggingConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteScraperLoggingConfigurationCommand extends command<DeleteScraperLoggingConfigurationCommandInput, DeleteScraperLoggingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteScraperLoggingConfiguration",
  DeleteScraperLoggingConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteScraperLoggingConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteScraperLoggingConfigurationCommandInput;
      output: DeleteScraperLoggingConfigurationCommandOutput;
    };
  };
}
