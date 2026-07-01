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
 * <p>Updates an existing lookup table by replacing all of its CSV content. After the update
 *       completes, queries that use this table will use the new data.</p>
 *          <p>This is a full replacement operation. All existing content is replaced with the new CSV
 *       data.</p>
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
 *   tableBody: "STRING_VALUE", // required
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
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
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
