// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeQueryLoggingConfigurationRequest,
  DescribeQueryLoggingConfigurationResponse,
} from "../models/models_0";
import { DescribeQueryLoggingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeQueryLoggingConfigurationCommand}.
 */
export interface DescribeQueryLoggingConfigurationCommandInput extends DescribeQueryLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeQueryLoggingConfigurationCommand}.
 */
export interface DescribeQueryLoggingConfigurationCommandOutput extends DescribeQueryLoggingConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of the query logging configuration for the specified workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DescribeQueryLoggingConfigurationCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DescribeQueryLoggingConfigurationCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DescribeQueryLoggingConfigurationRequest
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeQueryLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeQueryLoggingConfigurationResponse
 * //   queryLoggingConfiguration: { // QueryLoggingConfigurationMetadata
 * //     status: { // QueryLoggingConfigurationStatus
 * //       statusCode: "STRING_VALUE", // required
 * //       statusReason: "STRING_VALUE",
 * //     },
 * //     workspace: "STRING_VALUE", // required
 * //     destinations: [ // LoggingDestinations // required
 * //       { // LoggingDestination
 * //         cloudWatchLogs: { // CloudWatchLogDestination
 * //           logGroupArn: "STRING_VALUE", // required
 * //         },
 * //         filters: { // LoggingFilter
 * //           qspThreshold: Number("long"), // required
 * //         },
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     modifiedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeQueryLoggingConfigurationCommandInput - {@link DescribeQueryLoggingConfigurationCommandInput}
 * @returns {@link DescribeQueryLoggingConfigurationCommandOutput}
 * @see {@link DescribeQueryLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeQueryLoggingConfigurationCommandOutput} for command's `response` shape.
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
export class DescribeQueryLoggingConfigurationCommand extends command<DescribeQueryLoggingConfigurationCommandInput, DescribeQueryLoggingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeQueryLoggingConfiguration",
  DescribeQueryLoggingConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeQueryLoggingConfigurationRequest;
      output: DescribeQueryLoggingConfigurationResponse;
    };
    sdk: {
      input: DescribeQueryLoggingConfigurationCommandInput;
      output: DescribeQueryLoggingConfigurationCommandOutput;
    };
  };
}
