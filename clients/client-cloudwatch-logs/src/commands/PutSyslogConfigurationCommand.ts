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
 * <p>Creates or updates a syslog configuration for a log group. This enables ingestion of
 *       syslog data through the specified VPC endpoint into the log group.</p>
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
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation is not valid on the specified resource.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
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
