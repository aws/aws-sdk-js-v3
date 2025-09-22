// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListQueryExecutionsInput, ListQueryExecutionsOutput } from "../models/models_0";
import { ListQueryExecutions } from "../schemas/schemas_1_Query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQueryExecutionsCommand}.
 */
export interface ListQueryExecutionsCommandInput extends ListQueryExecutionsInput {}
/**
 * @public
 *
 * The output of {@link ListQueryExecutionsCommand}.
 */
export interface ListQueryExecutionsCommandOutput extends ListQueryExecutionsOutput, __MetadataBearer {}

/**
 * <p>Provides a list of available query execution IDs for the queries in the specified
 *             workgroup. Athena keeps a query history for 45 days. If a workgroup is not
 *             specified, returns a list of query execution IDs for the primary workgroup. Requires you
 *             to have access to the workgroup in which the queries ran.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListQueryExecutionsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListQueryExecutionsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // ListQueryExecutionsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   WorkGroup: "STRING_VALUE",
 * };
 * const command = new ListQueryExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListQueryExecutionsOutput
 * //   QueryExecutionIds: [ // QueryExecutionIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQueryExecutionsCommandInput - {@link ListQueryExecutionsCommandInput}
 * @returns {@link ListQueryExecutionsCommandOutput}
 * @see {@link ListQueryExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListQueryExecutionsCommandOutput} for command's `response` shape.
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
export class ListQueryExecutionsCommand extends $Command
  .classBuilder<
    ListQueryExecutionsCommandInput,
    ListQueryExecutionsCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "ListQueryExecutions", {})
  .n("AthenaClient", "ListQueryExecutionsCommand")
  .sc(ListQueryExecutions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQueryExecutionsInput;
      output: ListQueryExecutionsOutput;
    };
    sdk: {
      input: ListQueryExecutionsCommandInput;
      output: ListQueryExecutionsCommandOutput;
    };
  };
}
