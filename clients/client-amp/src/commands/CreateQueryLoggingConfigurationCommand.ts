// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateQueryLoggingConfigurationRequest, CreateQueryLoggingConfigurationResponse } from "../models/models_0";
import { CreateQueryLoggingConfiguration } from "../schemas/schemas_2_Logging";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateQueryLoggingConfigurationCommand}.
 */
export interface CreateQueryLoggingConfigurationCommandInput extends CreateQueryLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateQueryLoggingConfigurationCommand}.
 */
export interface CreateQueryLoggingConfigurationCommandOutput
  extends CreateQueryLoggingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a query logging configuration for the specified workspace. This operation enables logging of queries that exceed the specified QSP threshold.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, CreateQueryLoggingConfigurationCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, CreateQueryLoggingConfigurationCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // CreateQueryLoggingConfigurationRequest
 *   workspaceId: "STRING_VALUE", // required
 *   destinations: [ // LoggingDestinations // required
 *     { // LoggingDestination
 *       cloudWatchLogs: { // CloudWatchLogDestination
 *         logGroupArn: "STRING_VALUE", // required
 *       },
 *       filters: { // LoggingFilter
 *         qspThreshold: Number("long"), // required
 *       },
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateQueryLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateQueryLoggingConfigurationResponse
 * //   status: { // QueryLoggingConfigurationStatus
 * //     statusCode: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateQueryLoggingConfigurationCommandInput - {@link CreateQueryLoggingConfigurationCommandInput}
 * @returns {@link CreateQueryLoggingConfigurationCommandOutput}
 * @see {@link CreateQueryLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateQueryLoggingConfigurationCommandOutput} for command's `response` shape.
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
export class CreateQueryLoggingConfigurationCommand extends $Command
  .classBuilder<
    CreateQueryLoggingConfigurationCommandInput,
    CreateQueryLoggingConfigurationCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPrometheusService", "CreateQueryLoggingConfiguration", {})
  .n("AmpClient", "CreateQueryLoggingConfigurationCommand")
  .sc(CreateQueryLoggingConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQueryLoggingConfigurationRequest;
      output: CreateQueryLoggingConfigurationResponse;
    };
    sdk: {
      input: CreateQueryLoggingConfigurationCommandInput;
      output: CreateQueryLoggingConfigurationCommandOutput;
    };
  };
}
