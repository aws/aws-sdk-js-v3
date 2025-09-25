// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStatementRequest, DescribeStatementResponse } from "../models/models_0";
import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";
import { DescribeStatement } from "../schemas/schemas_1_Statement";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStatementCommand}.
 */
export interface DescribeStatementCommandInput extends DescribeStatementRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStatementCommand}.
 */
export interface DescribeStatementCommandOutput extends DescribeStatementResponse, __MetadataBearer {}

/**
 * <p>Describes the details about a specific instance when a query was run by the Amazon Redshift Data API. The information
 *       includes when the query started, when it finished, the query status, the number of rows returned, and the SQL
 *       statement. </p>
 *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
 *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
 *        <i>Amazon Redshift Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, DescribeStatementCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, DescribeStatementCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * // import type { RedshiftDataClientConfig } from "@aws-sdk/client-redshift-data";
 * const config = {}; // type is RedshiftDataClientConfig
 * const client = new RedshiftDataClient(config);
 * const input = { // DescribeStatementRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DescribeStatementCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStatementResponse
 * //   Id: "STRING_VALUE", // required
 * //   SecretArn: "STRING_VALUE",
 * //   DbUser: "STRING_VALUE",
 * //   Database: "STRING_VALUE",
 * //   ClusterIdentifier: "STRING_VALUE",
 * //   Duration: Number("long"),
 * //   Error: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   RedshiftPid: Number("long"),
 * //   HasResultSet: true || false,
 * //   QueryString: "STRING_VALUE",
 * //   ResultRows: Number("long"),
 * //   ResultSize: Number("long"),
 * //   RedshiftQueryId: Number("long"),
 * //   QueryParameters: [ // SqlParametersList
 * //     { // SqlParameter
 * //       name: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   SubStatements: [ // SubStatementList
 * //     { // SubStatementData
 * //       Id: "STRING_VALUE", // required
 * //       Duration: Number("long"),
 * //       Error: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       QueryString: "STRING_VALUE",
 * //       ResultRows: Number("long"),
 * //       ResultSize: Number("long"),
 * //       RedshiftQueryId: Number("long"),
 * //       HasResultSet: true || false,
 * //     },
 * //   ],
 * //   WorkgroupName: "STRING_VALUE",
 * //   SessionId: "STRING_VALUE",
 * //   ResultFormat: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStatementCommandInput - {@link DescribeStatementCommandInput}
 * @returns {@link DescribeStatementCommandOutput}
 * @see {@link DescribeStatementCommandInput} for command's `input` shape.
 * @see {@link DescribeStatementCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for RedshiftDataClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The Amazon Redshift Data API operation failed due to a missing resource. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 *
 * @throws {@link RedshiftDataServiceException}
 * <p>Base exception class for all service exceptions from RedshiftData service.</p>
 *
 *
 * @public
 */
export class DescribeStatementCommand extends $Command
  .classBuilder<
    DescribeStatementCommandInput,
    DescribeStatementCommandOutput,
    RedshiftDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftData", "DescribeStatement", {})
  .n("RedshiftDataClient", "DescribeStatementCommand")
  .sc(DescribeStatement)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStatementRequest;
      output: DescribeStatementResponse;
    };
    sdk: {
      input: DescribeStatementCommandInput;
      output: DescribeStatementCommandOutput;
    };
  };
}
