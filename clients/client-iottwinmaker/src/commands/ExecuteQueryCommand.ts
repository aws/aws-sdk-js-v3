// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import type { ExecuteQueryRequest, ExecuteQueryResponse } from "../models/models_0";
import { ExecuteQuery } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExecuteQueryCommand}.
 */
export interface ExecuteQueryCommandInput extends ExecuteQueryRequest {}
/**
 * @public
 *
 * The output of {@link ExecuteQueryCommand}.
 */
export interface ExecuteQueryCommandOutput extends ExecuteQueryResponse, __MetadataBearer {}

/**
 * <p>Run queries to access information from your knowledge graph of entities within
 *          individual workspaces.</p>
 *          <note>
 *             <p>The ExecuteQuery action only works with <a href="https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/home.html">Amazon Web Services Java SDK2</a>.
 *          ExecuteQuery will not work with any Amazon Web Services Java SDK version &lt; 2.x.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, ExecuteQueryCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, ExecuteQueryCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
 * const client = new IoTTwinMakerClient(config);
 * const input = { // ExecuteQueryRequest
 *   workspaceId: "STRING_VALUE", // required
 *   queryStatement: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ExecuteQueryCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteQueryResponse
 * //   columnDescriptions: [ // ColumnDescriptions
 * //     { // ColumnDescription
 * //       name: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //     },
 * //   ],
 * //   rows: [ // Rows
 * //     { // Row
 * //       rowData: [ // RowData
 * //         "DOCUMENT_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExecuteQueryCommandInput - {@link ExecuteQueryCommandInput}
 * @returns {@link ExecuteQueryCommandOutput}
 * @see {@link ExecuteQueryCommandInput} for command's `input` shape.
 * @see {@link ExecuteQueryCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link QueryTimeoutException} (client fault)
 *  <p>The query timeout exception.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 *
 * @public
 */
export class ExecuteQueryCommand extends $Command
  .classBuilder<
    ExecuteQueryCommandInput,
    ExecuteQueryCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "ExecuteQuery", {})
  .n("IoTTwinMakerClient", "ExecuteQueryCommand")
  .sc(ExecuteQuery)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteQueryRequest;
      output: ExecuteQueryResponse;
    };
    sdk: {
      input: ExecuteQueryCommandInput;
      output: ExecuteQueryCommandOutput;
    };
  };
}
