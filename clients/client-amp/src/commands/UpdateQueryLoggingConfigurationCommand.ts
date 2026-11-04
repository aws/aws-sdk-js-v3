// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateQueryLoggingConfigurationRequest,
  UpdateQueryLoggingConfigurationResponse,
} from "../models/models_0";
import { UpdateQueryLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateQueryLoggingConfigurationCommandOutput extends UpdateQueryLoggingConfigurationResponse, __MetadataBearer {}

/**
 * Updates the query logging configuration for the specified workspace.
 *
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
export class UpdateQueryLoggingConfigurationCommand extends command<UpdateQueryLoggingConfigurationCommandInput, UpdateQueryLoggingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateQueryLoggingConfiguration",
  UpdateQueryLoggingConfiguration$
) {
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
