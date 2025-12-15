// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdateQueryLoggingConfigurationRequest,
  UpdateQueryLoggingConfigurationResponse,
} from "../models/models_0";
import { UpdateQueryLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQueryLoggingConfigurationCommand}.
 */
export interface UpdateQueryLoggingConfigurationCommandInput extends UpdateQueryLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQueryLoggingConfigurationCommand}.
 */
export interface UpdateQueryLoggingConfigurationCommandOutput
  extends UpdateQueryLoggingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the query logging configuration for the specified workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, UpdateQueryLoggingConfigurationCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, UpdateQueryLoggingConfigurationCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // UpdateQueryLoggingConfigurationRequest
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
 * const command = new UpdateQueryLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateQueryLoggingConfigurationResponse
 * //   status: { // QueryLoggingConfigurationStatus
 * //     statusCode: "STRING_VALUE", // required
 * //     statusReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateQueryLoggingConfigurationCommandInput - {@link UpdateQueryLoggingConfigurationCommandInput}
 * @returns {@link UpdateQueryLoggingConfigurationCommandOutput}
 * @see {@link UpdateQueryLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateQueryLoggingConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateQueryLoggingConfigurationCommand extends $Command
  .classBuilder<
    UpdateQueryLoggingConfigurationCommandInput,
    UpdateQueryLoggingConfigurationCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPrometheusService", "UpdateQueryLoggingConfiguration", {})
  .n("AmpClient", "UpdateQueryLoggingConfigurationCommand")
  .sc(UpdateQueryLoggingConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQueryLoggingConfigurationRequest;
      output: UpdateQueryLoggingConfigurationResponse;
    };
    sdk: {
      input: UpdateQueryLoggingConfigurationCommandInput;
      output: UpdateQueryLoggingConfigurationCommandOutput;
    };
  };
}
