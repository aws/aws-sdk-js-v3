// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutSyslogConfigurationRequest } from "../models/models_0";
import { PutSyslogConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutSyslogConfigurationCommand}.
 */
export interface PutSyslogConfigurationCommandInput extends PutSyslogConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutSyslogConfigurationCommand}.
 */
export interface PutSyslogConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Creates or updates a syslog configuration for a log group. This enables ingestion of syslog data through the specified VPC endpoint into the log group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutSyslogConfigurationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutSyslogConfigurationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutSyslogConfigurationRequest
 *   logGroupIdentifier: "STRING_VALUE", // required
 *   vpcEndpointId: "STRING_VALUE",
 * };
 * const command = new PutSyslogConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutSyslogConfigurationCommandInput - {@link PutSyslogConfigurationCommandInput}
 * @returns {@link PutSyslogConfigurationCommandOutput}
 * @see {@link PutSyslogConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutSyslogConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation is not valid on the specified resource.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link OperationAbortedException} (client fault)
 *
 * Multiple concurrent requests to update the same resource were in conflict.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class PutSyslogConfigurationCommand extends command<PutSyslogConfigurationCommandInput, PutSyslogConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutSyslogConfiguration",
  PutSyslogConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSyslogConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutSyslogConfigurationCommandInput;
      output: PutSyslogConfigurationCommandOutput;
    };
  };
}
