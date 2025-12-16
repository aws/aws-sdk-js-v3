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
import type { GetLogFieldsRequest, GetLogFieldsResponse } from "../models/models_0";
import { GetLogFields$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLogFieldsCommand}.
 */
export interface GetLogFieldsCommandInput extends GetLogFieldsRequest {}
/**
 * @public
 *
 * The output of {@link GetLogFieldsCommand}.
 */
export interface GetLogFieldsCommandOutput extends GetLogFieldsResponse, __MetadataBearer {}

/**
 * <p>Discovers available fields for a specific data source and type. The response includes any
 *       field modifications introduced through pipelines, such as new fields or changed field types.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetLogFieldsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetLogFieldsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetLogFieldsRequest
 *   dataSourceName: "STRING_VALUE", // required
 *   dataSourceType: "STRING_VALUE", // required
 * };
 * const command = new GetLogFieldsCommand(input);
 * const response = await client.send(command);
 * // { // GetLogFieldsResponse
 * //   logFields: [ // LogFieldsList
 * //     { // LogFieldsListItem
 * //       logFieldName: "STRING_VALUE",
 * //       logFieldType: { // LogFieldType
 * //         type: "STRING_VALUE",
 * //         element: {
 * //           type: "STRING_VALUE",
 * //           element: "<LogFieldType>",
 * //           fields: [
 * //             {
 * //               logFieldName: "STRING_VALUE",
 * //               logFieldType: "<LogFieldType>",
 * //             },
 * //           ],
 * //         },
 * //         fields: "<LogFieldsList>",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLogFieldsCommandInput - {@link GetLogFieldsCommandInput}
 * @returns {@link GetLogFieldsCommandOutput}
 * @see {@link GetLogFieldsCommandInput} for command's `input` shape.
 * @see {@link GetLogFieldsCommandOutput} for command's `response` shape.
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
export class GetLogFieldsCommand extends $Command
  .classBuilder<
    GetLogFieldsCommandInput,
    GetLogFieldsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "GetLogFields", {})
  .n("CloudWatchLogsClient", "GetLogFieldsCommand")
  .sc(GetLogFields$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLogFieldsRequest;
      output: GetLogFieldsResponse;
    };
    sdk: {
      input: GetLogFieldsCommandInput;
      output: GetLogFieldsCommandOutput;
    };
  };
}
