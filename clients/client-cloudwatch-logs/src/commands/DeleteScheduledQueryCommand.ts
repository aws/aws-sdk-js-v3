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
import type { DeleteScheduledQueryRequest, DeleteScheduledQueryResponse } from "../models/models_0";
import { DeleteScheduledQuery } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteScheduledQueryCommand}.
 */
export interface DeleteScheduledQueryCommandInput extends DeleteScheduledQueryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteScheduledQueryCommand}.
 */
export interface DeleteScheduledQueryCommandOutput extends DeleteScheduledQueryResponse, __MetadataBearer {}

/**
 * <p>Deletes a scheduled query and stops all future executions. This operation also removes any
 *       configured actions and associated resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteScheduledQueryCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteScheduledQueryCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteScheduledQueryRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteScheduledQueryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteScheduledQueryCommandInput - {@link DeleteScheduledQueryCommandInput}
 * @returns {@link DeleteScheduledQueryCommandOutput}
 * @see {@link DeleteScheduledQueryCommandInput} for command's `input` shape.
 * @see {@link DeleteScheduledQueryCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This exception is returned
 *       when the service encounters an unexpected condition that prevents it from fulfilling the
 *       request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters for the request is not valid.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class DeleteScheduledQueryCommand extends $Command
  .classBuilder<
    DeleteScheduledQueryCommandInput,
    DeleteScheduledQueryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DeleteScheduledQuery", {})
  .n("CloudWatchLogsClient", "DeleteScheduledQueryCommand")
  .sc(DeleteScheduledQuery)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteScheduledQueryRequest;
      output: {};
    };
    sdk: {
      input: DeleteScheduledQueryCommandInput;
      output: DeleteScheduledQueryCommandOutput;
    };
  };
}
