// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchExecuteStatementInput, BatchExecuteStatementOutput } from "../models/models_0";
import { de_BatchExecuteStatementCommand, se_BatchExecuteStatementCommand } from "../protocols/Aws_json1_1";
import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchExecuteStatementCommand}.
 */
export interface BatchExecuteStatementCommandInput extends BatchExecuteStatementInput {}
/**
 * @public
 *
 * The output of {@link BatchExecuteStatementCommand}.
 */
export interface BatchExecuteStatementCommandOutput extends BatchExecuteStatementOutput, __MetadataBearer {}

/**
 * <p>Runs one or more SQL statements, which can be data manipulation language (DML) or data definition
 *       language (DDL).
 *       Depending on the authorization
 *       method, use one of the following combinations of request parameters: </p>
 *          <ul>
 *             <li>
 *                <p>Secrets Manager - when connecting to a cluster, provide the <code>secret-arn</code> of a secret
 *                                     stored in Secrets Manager which has <code>username</code> and <code>password</code>.
 *                                     The specified secret contains credentials
 *                                     to connect to the <code>database</code> you specify.
 *                                     When you are connecting to a cluster, you also supply the database name,
 *                                     If you provide a cluster identifier (<code>dbClusterIdentifier</code>), it must match the cluster identifier stored in the secret.
 *                                     When you are connecting to a serverless workgroup, you also supply the database name.</p>
 *             </li>
 *             <li>
 *                <p>Temporary credentials - when connecting to your data warehouse, choose one of the following options:</p>
 *                <ul>
 *                   <li>
 *                      <p>When connecting to a serverless workgroup, specify the workgroup name and database name.
 *                                         The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>.
 *                                         Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required.</p>
 *                   </li>
 *                   <li>
 *                      <p>When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name.
 *                                         The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>.
 *                                         Also, permission to call the <code>redshift:GetClusterCredentialsWithIAM</code> operation is required.</p>
 *                   </li>
 *                   <li>
 *                      <p>When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name.
 *                                         Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
 *       <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
 *       <i>Amazon Redshift Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, BatchExecuteStatementCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, BatchExecuteStatementCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RedshiftDataClient(config);
 * const input = { // BatchExecuteStatementInput
 *   Sqls: [ // SqlList // required
 *     "STRING_VALUE",
 *   ],
 *   ClusterIdentifier: "STRING_VALUE",
 *   SecretArn: "STRING_VALUE",
 *   DbUser: "STRING_VALUE",
 *   Database: "STRING_VALUE",
 *   WithEvent: true || false,
 *   StatementName: "STRING_VALUE",
 *   WorkgroupName: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   SessionKeepAliveSeconds: Number("int"),
 *   SessionId: "STRING_VALUE",
 *   ResultFormat: "STRING_VALUE",
 * };
 * const command = new BatchExecuteStatementCommand(input);
 * const response = await client.send(command);
 * // { // BatchExecuteStatementOutput
 * //   Id: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   ClusterIdentifier: "STRING_VALUE",
 * //   DbUser: "STRING_VALUE",
 * //   DbGroups: [ // DbGroupList
 * //     "STRING_VALUE",
 * //   ],
 * //   Database: "STRING_VALUE",
 * //   SecretArn: "STRING_VALUE",
 * //   WorkgroupName: "STRING_VALUE",
 * //   SessionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param BatchExecuteStatementCommandInput - {@link BatchExecuteStatementCommandInput}
 * @returns {@link BatchExecuteStatementCommandOutput}
 * @see {@link BatchExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link BatchExecuteStatementCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for RedshiftDataClient's `config` shape.
 *
 * @throws {@link ActiveSessionsExceededException} (client fault)
 *  <p>The Amazon Redshift Data API operation failed because the maximum number of active sessions exceeded.</p>
 *
 * @throws {@link ActiveStatementsExceededException} (client fault)
 *  <p>The number of active statements exceeds the limit.</p>
 *
 * @throws {@link BatchExecuteStatementException} (server fault)
 *  <p>An SQL statement encountered an environmental error while running.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 *
 * @throws {@link RedshiftDataServiceException}
 * <p>Base exception class for all service exceptions from RedshiftData service.</p>
 *
 * @public
 */
export class BatchExecuteStatementCommand extends $Command
  .classBuilder<
    BatchExecuteStatementCommandInput,
    BatchExecuteStatementCommandOutput,
    RedshiftDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftData", "BatchExecuteStatement", {})
  .n("RedshiftDataClient", "BatchExecuteStatementCommand")
  .f(void 0, void 0)
  .ser(se_BatchExecuteStatementCommand)
  .de(de_BatchExecuteStatementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchExecuteStatementInput;
      output: BatchExecuteStatementOutput;
    };
    sdk: {
      input: BatchExecuteStatementCommandInput;
      output: BatchExecuteStatementCommandOutput;
    };
  };
}
