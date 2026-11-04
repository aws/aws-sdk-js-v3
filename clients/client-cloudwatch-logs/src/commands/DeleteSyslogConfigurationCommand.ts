// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSyslogConfigurationRequest } from "../models/models_0";
import { DeleteSyslogConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSyslogConfigurationCommand}.
 */
export interface DeleteSyslogConfigurationCommandInput extends DeleteSyslogConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSyslogConfigurationCommand}.
 */
export interface DeleteSyslogConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Deletes a syslog configuration for a log group. After deletion, syslog data is no longer ingested through the specified VPC endpoint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteSyslogConfigurationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteSyslogConfigurationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteSyslogConfigurationRequest
 *   logGroupIdentifier: "STRING_VALUE", // required
 *   vpcEndpointId: "STRING_VALUE",
 * };
 * const command = new DeleteSyslogConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSyslogConfigurationCommandInput - {@link DeleteSyslogConfigurationCommandInput}
 * @returns {@link DeleteSyslogConfigurationCommandOutput}
 * @see {@link DeleteSyslogConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSyslogConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteSyslogConfigurationCommand extends command<DeleteSyslogConfigurationCommandInput, DeleteSyslogConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSyslogConfiguration",
  DeleteSyslogConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSyslogConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteSyslogConfigurationCommandInput;
      output: DeleteSyslogConfigurationCommandOutput;
    };
  };
}
