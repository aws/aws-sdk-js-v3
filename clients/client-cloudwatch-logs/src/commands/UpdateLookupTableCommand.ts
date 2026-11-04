// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateLookupTableRequest, UpdateLookupTableResponse } from "../models/models_1";
import { UpdateLookupTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLookupTableCommand}.
 */
export interface UpdateLookupTableCommandInput extends UpdateLookupTableRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLookupTableCommand}.
 */
export interface UpdateLookupTableCommandOutput extends UpdateLookupTableResponse, __MetadataBearer {}

/**
 * Updates an existing lookup table by replacing all of its content with new CSV data or CloudWatch Logs query results. After the update completes, queries that use this table use the new data.
 *
 * This is a full replacement operation. All existing content is replaced. You must specify either `tableBody` or `queryId`, but not both.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, UpdateLookupTableCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, UpdateLookupTableCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // UpdateLookupTableRequest
 *   lookupTableArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tableBody: "STRING_VALUE",
 *   queryId: "STRING_VALUE",
 *   kmsKeyId: "STRING_VALUE",
 * };
 * const command = new UpdateLookupTableCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLookupTableResponse
 * //   lookupTableArn: "STRING_VALUE",
 * //   lastUpdatedTime: Number("long"),
 * // };
 *
 * ```
 *
 * @param UpdateLookupTableCommandInput - {@link UpdateLookupTableCommandInput}
 * @returns {@link UpdateLookupTableCommandOutput}
 * @see {@link UpdateLookupTableCommandInput} for command's `input` shape.
 * @see {@link UpdateLookupTableCommandOutput} for command's `response` shape.
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
export class UpdateLookupTableCommand extends command<UpdateLookupTableCommandInput, UpdateLookupTableCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLookupTable",
  UpdateLookupTable$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLookupTableRequest;
      output: UpdateLookupTableResponse;
    };
    sdk: {
      input: UpdateLookupTableCommandInput;
      output: UpdateLookupTableCommandOutput;
    };
  };
}
