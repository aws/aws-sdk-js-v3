// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetPreparedStatementInput, BatchGetPreparedStatementOutput } from "../models/models_0";
import { de_BatchGetPreparedStatementCommand, se_BatchGetPreparedStatementCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetPreparedStatementCommand}.
 */
export interface BatchGetPreparedStatementCommandInput extends BatchGetPreparedStatementInput {}
/**
 * @public
 *
 * The output of {@link BatchGetPreparedStatementCommand}.
 */
export interface BatchGetPreparedStatementCommandOutput extends BatchGetPreparedStatementOutput, __MetadataBearer {}

/**
 * <p>Returns the details of a single prepared statement or a list of up to 256 prepared
 *             statements for the array of prepared statement names that you provide. Requires you to
 *             have access to the workgroup to which the prepared statements belong. If a prepared
 *             statement cannot be retrieved for the name specified, the statement is listed in
 *                 <code>UnprocessedPreparedStatementNames</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, BatchGetPreparedStatementCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, BatchGetPreparedStatementCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // BatchGetPreparedStatementInput
 *   PreparedStatementNames: [ // PreparedStatementNameList // required
 *     "STRING_VALUE",
 *   ],
 *   WorkGroup: "STRING_VALUE", // required
 * };
 * const command = new BatchGetPreparedStatementCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetPreparedStatementOutput
 * //   PreparedStatements: [ // PreparedStatementDetailsList
 * //     { // PreparedStatement
 * //       StatementName: "STRING_VALUE",
 * //       QueryStatement: "STRING_VALUE",
 * //       WorkGroupName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   UnprocessedPreparedStatementNames: [ // UnprocessedPreparedStatementNameList
 * //     { // UnprocessedPreparedStatementName
 * //       StatementName: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetPreparedStatementCommandInput - {@link BatchGetPreparedStatementCommandInput}
 * @returns {@link BatchGetPreparedStatementCommandOutput}
 * @see {@link BatchGetPreparedStatementCommandInput} for command's `input` shape.
 * @see {@link BatchGetPreparedStatementCommandOutput} for command's `response` shape.
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
export class BatchGetPreparedStatementCommand extends $Command
  .classBuilder<
    BatchGetPreparedStatementCommandInput,
    BatchGetPreparedStatementCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "BatchGetPreparedStatement", {})
  .n("AthenaClient", "BatchGetPreparedStatementCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetPreparedStatementCommand)
  .de(de_BatchGetPreparedStatementCommand)
  .build() {}
