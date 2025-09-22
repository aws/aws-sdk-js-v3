// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteScraperLoggingConfigurationRequest } from "../models/models_0";
import { DeleteScraperLoggingConfiguration } from "../schemas/schemas_1_Scraper";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the logging configuration for a Amazon Managed Service for Prometheus scraper.</p>
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
export class DeleteScraperLoggingConfigurationCommand extends $Command
  .classBuilder<
    DeleteScraperLoggingConfigurationCommandInput,
    DeleteScraperLoggingConfigurationCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPrometheusService", "DeleteScraperLoggingConfiguration", {})
  .n("AmpClient", "DeleteScraperLoggingConfigurationCommand")
  .sc(DeleteScraperLoggingConfiguration)
  .build() {
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
