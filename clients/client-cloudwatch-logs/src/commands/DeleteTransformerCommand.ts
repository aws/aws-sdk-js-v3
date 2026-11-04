// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTransformerRequest } from "../models/models_0";
import { DeleteTransformer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTransformerCommand}.
 */
export interface DeleteTransformerCommandInput extends DeleteTransformerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransformerCommand}.
 */
export interface DeleteTransformerCommandOutput extends __MetadataBearer {}

/**
 * Deletes the log transformer for the specified log group. As soon as you do this, the transformation of incoming log events according to that transformer stops. If this account has an account-level transformer that applies to this log group, the log group begins using that account-level transformer when this log-group level transformer is deleted.
 *
 * After you delete a transformer, be sure to edit any metric filters or subscription filters that relied on the transformed versions of the log events.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteTransformerCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteTransformerCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteTransformerRequest
 *   logGroupIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteTransformerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTransformerCommandInput - {@link DeleteTransformerCommandInput}
 * @returns {@link DeleteTransformerCommandOutput}
 * @see {@link DeleteTransformerCommandInput} for command's `input` shape.
 * @see {@link DeleteTransformerCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
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
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class DeleteTransformerCommand extends command<DeleteTransformerCommandInput, DeleteTransformerCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTransformer",
  DeleteTransformer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTransformerRequest;
      output: {};
    };
    sdk: {
      input: DeleteTransformerCommandInput;
      output: DeleteTransformerCommandOutput;
    };
  };
}
