// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteScheduledQueryRequest, DeleteScheduledQueryResponse } from "../models/models_0";
import { DeleteScheduledQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a scheduled query and stops all future executions. This operation also removes any configured actions and associated resources.
 *
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
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred while processing the request. This exception is returned when the service encounters an unexpected condition that prevents it from fulfilling the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the parameters for the request is not valid.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class DeleteScheduledQueryCommand extends command<DeleteScheduledQueryCommandInput, DeleteScheduledQueryCommandOutput>(
  _ep0,
  _mw0,
  "DeleteScheduledQuery",
  DeleteScheduledQuery$
) {
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
