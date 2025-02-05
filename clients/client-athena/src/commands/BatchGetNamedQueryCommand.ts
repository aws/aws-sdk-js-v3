// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetNamedQueryInput, BatchGetNamedQueryOutput } from "../models/models_0";
import { de_BatchGetNamedQueryCommand, se_BatchGetNamedQueryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetNamedQueryCommand}.
 */
export interface BatchGetNamedQueryCommandInput extends BatchGetNamedQueryInput {}
/**
 * @public
 *
 * The output of {@link BatchGetNamedQueryCommand}.
 */
export interface BatchGetNamedQueryCommandOutput extends BatchGetNamedQueryOutput, __MetadataBearer {}

/**
 * <p>Returns the details of a single named query or a list of up to 50 queries, which you
 *             provide as an array of query ID strings. Requires you to have access to the workgroup in
 *             which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the
 *             list of named query IDs in the specified workgroup. If information could not be
 *             retrieved for a submitted query ID, information about the query ID submitted is listed
 *             under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed
 *             queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each
 *             unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of
 *             query execution IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, BatchGetNamedQueryCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, BatchGetNamedQueryCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AthenaClient(config);
 * const input = { // BatchGetNamedQueryInput
 *   NamedQueryIds: [ // NamedQueryIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetNamedQueryCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetNamedQueryOutput
 * //   NamedQueries: [ // NamedQueryList
 * //     { // NamedQuery
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       Database: "STRING_VALUE", // required
 * //       QueryString: "STRING_VALUE", // required
 * //       NamedQueryId: "STRING_VALUE",
 * //       WorkGroup: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UnprocessedNamedQueryIds: [ // UnprocessedNamedQueryIdList
 * //     { // UnprocessedNamedQueryId
 * //       NamedQueryId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetNamedQueryCommandInput - {@link BatchGetNamedQueryCommandInput}
 * @returns {@link BatchGetNamedQueryCommandOutput}
 * @see {@link BatchGetNamedQueryCommandInput} for command's `input` shape.
 * @see {@link BatchGetNamedQueryCommandOutput} for command's `response` shape.
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
 * @public
 */
export class BatchGetNamedQueryCommand extends $Command
  .classBuilder<
    BatchGetNamedQueryCommandInput,
    BatchGetNamedQueryCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "BatchGetNamedQuery", {})
  .n("AthenaClient", "BatchGetNamedQueryCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetNamedQueryCommand)
  .de(de_BatchGetNamedQueryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetNamedQueryInput;
      output: BatchGetNamedQueryOutput;
    };
    sdk: {
      input: BatchGetNamedQueryCommandInput;
      output: BatchGetNamedQueryCommandOutput;
    };
  };
}
