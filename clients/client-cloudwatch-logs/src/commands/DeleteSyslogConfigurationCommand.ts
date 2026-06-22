// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteSyslogConfigurationRequest } from "../models/models_0";
import { DeleteSyslogConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a syslog configuration for a log group. After deletion, syslog data is no
 *       longer ingested through the specified VPC endpoint.</p>
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
export class DeleteSyslogConfigurationCommand extends $Command
  .classBuilder<
    DeleteSyslogConfigurationCommandInput,
    DeleteSyslogConfigurationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DeleteSyslogConfiguration", {})
  .n("CloudWatchLogsClient", "DeleteSyslogConfigurationCommand")
  .sc(DeleteSyslogConfiguration$)
  .build() {
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
