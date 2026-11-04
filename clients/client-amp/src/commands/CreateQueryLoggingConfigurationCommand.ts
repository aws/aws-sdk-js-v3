// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateQueryLoggingConfigurationRequest,
  CreateQueryLoggingConfigurationResponse,
} from "../models/models_0";
import { CreateQueryLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateQueryLoggingConfigurationCommandOutput extends CreateQueryLoggingConfigurationResponse, __MetadataBearer {}

/**
 * Creates a query logging configuration for the specified workspace. This operation enables logging of queries that exceed the specified QSP threshold.
 *
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
 *
 * You do not have sufficient access to perform this action.
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
export class CreateQueryLoggingConfigurationCommand extends command<CreateQueryLoggingConfigurationCommandInput, CreateQueryLoggingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateQueryLoggingConfiguration",
  CreateQueryLoggingConfiguration$
) {
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
