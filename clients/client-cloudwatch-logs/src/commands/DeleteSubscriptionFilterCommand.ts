// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSubscriptionFilterRequest } from "../models/models_0";
import { DeleteSubscriptionFilter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSubscriptionFilterCommand}.
 */
export interface DeleteSubscriptionFilterCommandInput extends DeleteSubscriptionFilterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSubscriptionFilterCommand}.
 */
export interface DeleteSubscriptionFilterCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified subscription filter.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteSubscriptionFilterCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteSubscriptionFilterCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteSubscriptionFilterRequest
 *   logGroupName: "STRING_VALUE", // required
 *   filterName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSubscriptionFilterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSubscriptionFilterCommandInput - {@link DeleteSubscriptionFilterCommandInput}
 * @returns {@link DeleteSubscriptionFilterCommandOutput}
 * @see {@link DeleteSubscriptionFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteSubscriptionFilterCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
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
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class DeleteSubscriptionFilterCommand extends command<DeleteSubscriptionFilterCommandInput, DeleteSubscriptionFilterCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSubscriptionFilter",
  DeleteSubscriptionFilter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSubscriptionFilterRequest;
      output: {};
    };
    sdk: {
      input: DeleteSubscriptionFilterCommandInput;
      output: DeleteSubscriptionFilterCommandOutput;
    };
  };
}
