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
import type { GetLookupTableRequest, GetLookupTableResponse } from "../models/models_0";
import { GetLookupTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLookupTableCommand}.
 */
export interface GetLookupTableCommandInput extends GetLookupTableRequest {}
/**
 * @public
 *
 * The output of {@link GetLookupTableCommand}.
 */
export interface GetLookupTableCommandOutput extends GetLookupTableResponse, __MetadataBearer {}

/**
 * <p>Retrieves the full content of a lookup table, including the CSV data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetLookupTableCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetLookupTableCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetLookupTableRequest
 *   lookupTableArn: "STRING_VALUE", // required
 * };
 * const command = new GetLookupTableCommand(input);
 * const response = await client.send(command);
 * // { // GetLookupTableResponse
 * //   lookupTableArn: "STRING_VALUE",
 * //   lookupTableName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   tableBody: "STRING_VALUE",
 * //   sizeBytes: Number("long"),
 * //   lastUpdatedTime: Number("long"),
 * //   kmsKeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLookupTableCommandInput - {@link GetLookupTableCommandInput}
 * @returns {@link GetLookupTableCommandOutput}
 * @see {@link GetLookupTableCommandInput} for command's `input` shape.
 * @see {@link GetLookupTableCommandOutput} for command's `response` shape.
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
export class GetLookupTableCommand extends $Command
  .classBuilder<
    GetLookupTableCommandInput,
    GetLookupTableCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "GetLookupTable", {})
  .n("CloudWatchLogsClient", "GetLookupTableCommand")
  .sc(GetLookupTable$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLookupTableRequest;
      output: GetLookupTableResponse;
    };
    sdk: {
      input: GetLookupTableCommandInput;
      output: GetLookupTableCommandOutput;
    };
  };
}
