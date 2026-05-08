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
import type { DescribeLookupTablesRequest, DescribeLookupTablesResponse } from "../models/models_0";
import { DescribeLookupTables$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLookupTablesCommand}.
 */
export interface DescribeLookupTablesCommandInput extends DescribeLookupTablesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLookupTablesCommand}.
 */
export interface DescribeLookupTablesCommandOutput extends DescribeLookupTablesResponse, __MetadataBearer {}

/**
 * <p>Retrieves metadata about lookup tables in your account. You can optionally filter the
 *       results by table name prefix. Results are sorted by table name in ascending order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeLookupTablesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeLookupTablesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeLookupTablesRequest
 *   lookupTableNamePrefix: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeLookupTablesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLookupTablesResponse
 * //   lookupTables: [ // LookupTables
 * //     { // LookupTable
 * //       lookupTableArn: "STRING_VALUE",
 * //       lookupTableName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       tableFields: [ // TableFields
 * //         "STRING_VALUE",
 * //       ],
 * //       recordsCount: Number("long"),
 * //       sizeBytes: Number("long"),
 * //       lastUpdatedTime: Number("long"),
 * //       kmsKeyId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLookupTablesCommandInput - {@link DescribeLookupTablesCommandInput}
 * @returns {@link DescribeLookupTablesCommandOutput}
 * @see {@link DescribeLookupTablesCommandInput} for command's `input` shape.
 * @see {@link DescribeLookupTablesCommandOutput} for command's `response` shape.
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
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class DescribeLookupTablesCommand extends $Command
  .classBuilder<
    DescribeLookupTablesCommandInput,
    DescribeLookupTablesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DescribeLookupTables", {})
  .n("CloudWatchLogsClient", "DescribeLookupTablesCommand")
  .sc(DescribeLookupTables$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLookupTablesRequest;
      output: DescribeLookupTablesResponse;
    };
    sdk: {
      input: DescribeLookupTablesCommandInput;
      output: DescribeLookupTablesCommandOutput;
    };
  };
}
