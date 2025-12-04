// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteMetricFilterRequest } from "../models/models_0";
import { DeleteMetricFilter } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMetricFilterCommand}.
 */
export interface DeleteMetricFilterCommandInput extends DeleteMetricFilterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMetricFilterCommand}.
 */
export interface DeleteMetricFilterCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified metric filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteMetricFilterCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteMetricFilterCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteMetricFilterRequest
 *   logGroupName: "STRING_VALUE", // required
 *   filterName: "STRING_VALUE", // required
 * };
 * const command = new DeleteMetricFilterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMetricFilterCommandInput - {@link DeleteMetricFilterCommandInput}
 * @returns {@link DeleteMetricFilterCommandOutput}
 * @see {@link DeleteMetricFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteMetricFilterCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
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
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class DeleteMetricFilterCommand extends $Command
  .classBuilder<
    DeleteMetricFilterCommandInput,
    DeleteMetricFilterCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DeleteMetricFilter", {})
  .n("CloudWatchLogsClient", "DeleteMetricFilterCommand")
  .sc(DeleteMetricFilter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMetricFilterRequest;
      output: {};
    };
    sdk: {
      input: DeleteMetricFilterCommandInput;
      output: DeleteMetricFilterCommandOutput;
    };
  };
}
