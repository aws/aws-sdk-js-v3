// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDataTablesRequest, ListDataTablesResponse } from "../models/models_2";
import { ListDataTables } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataTablesCommand}.
 */
export interface ListDataTablesCommandInput extends ListDataTablesRequest {}
/**
 * @public
 *
 * The output of {@link ListDataTablesCommand}.
 */
export interface ListDataTablesCommandOutput extends ListDataTablesResponse, __MetadataBearer {}

/**
 * <p>Lists all data tables for the specified Amazon Connect instance. Returns summary information for each table including basic metadata and modification details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListDataTablesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListDataTablesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListDataTablesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDataTablesCommand(input);
 * const response = await client.send(command);
 * // { // ListDataTablesResponse
 * //   NextToken: "STRING_VALUE",
 * //   DataTableSummaryList: [ // DataTableSummaryList // required
 * //     { // DataTableSummary
 * //       Name: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDataTablesCommandInput - {@link ListDataTablesCommandInput}
 * @returns {@link ListDataTablesCommandOutput}
 * @see {@link ListDataTablesCommandInput} for command's `input` shape.
 * @see {@link ListDataTablesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListDataTablesCommand extends $Command
  .classBuilder<
    ListDataTablesCommandInput,
    ListDataTablesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListDataTables", {})
  .n("ConnectClient", "ListDataTablesCommand")
  .sc(ListDataTables)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataTablesRequest;
      output: ListDataTablesResponse;
    };
    sdk: {
      input: ListDataTablesCommandInput;
      output: ListDataTablesCommandOutput;
    };
  };
}
