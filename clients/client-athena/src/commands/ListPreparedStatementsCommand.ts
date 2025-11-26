// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPreparedStatementsInput, ListPreparedStatementsOutput } from "../models/models_0";
import { ListPreparedStatements } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPreparedStatementsCommand}.
 */
export interface ListPreparedStatementsCommandInput extends ListPreparedStatementsInput {}
/**
 * @public
 *
 * The output of {@link ListPreparedStatementsCommand}.
 */
export interface ListPreparedStatementsCommandOutput extends ListPreparedStatementsOutput, __MetadataBearer {}

/**
 * <p>Lists the prepared statements in the specified workgroup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListPreparedStatementsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListPreparedStatementsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // ListPreparedStatementsInput
 *   WorkGroup: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPreparedStatementsCommand(input);
 * const response = await client.send(command);
 * // { // ListPreparedStatementsOutput
 * //   PreparedStatements: [ // PreparedStatementsList
 * //     { // PreparedStatementSummary
 * //       StatementName: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPreparedStatementsCommandInput - {@link ListPreparedStatementsCommandInput}
 * @returns {@link ListPreparedStatementsCommandOutput}
 * @see {@link ListPreparedStatementsCommandInput} for command's `input` shape.
 * @see {@link ListPreparedStatementsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class ListPreparedStatementsCommand extends $Command
  .classBuilder<
    ListPreparedStatementsCommandInput,
    ListPreparedStatementsCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "ListPreparedStatements", {})
  .n("AthenaClient", "ListPreparedStatementsCommand")
  .sc(ListPreparedStatements)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPreparedStatementsInput;
      output: ListPreparedStatementsOutput;
    };
    sdk: {
      input: ListPreparedStatementsCommandInput;
      output: ListPreparedStatementsCommandOutput;
    };
  };
}
