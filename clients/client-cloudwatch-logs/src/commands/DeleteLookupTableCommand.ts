// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLookupTableRequest } from "../models/models_0";
import { DeleteLookupTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLookupTableCommand}.
 */
export interface DeleteLookupTableCommandInput extends DeleteLookupTableRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLookupTableCommand}.
 */
export interface DeleteLookupTableCommandOutput extends __MetadataBearer {}

/**
 * Deletes a lookup table permanently. This operation cannot be undone.
 *
 * Queries that reference a deleted table will return an error. Before deleting a lookup table, review any saved queries or dashboards that may reference it.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteLookupTableCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteLookupTableCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteLookupTableRequest
 *   lookupTableArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteLookupTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLookupTableCommandInput - {@link DeleteLookupTableCommandInput}
 * @returns {@link DeleteLookupTableCommandOutput}
 * @see {@link DeleteLookupTableCommandInput} for command's `input` shape.
 * @see {@link DeleteLookupTableCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
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
export class DeleteLookupTableCommand extends command<DeleteLookupTableCommandInput, DeleteLookupTableCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLookupTable",
  DeleteLookupTable$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLookupTableRequest;
      output: {};
    };
    sdk: {
      input: DeleteLookupTableCommandInput;
      output: DeleteLookupTableCommandOutput;
    };
  };
}
