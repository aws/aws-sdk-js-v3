// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchExecuteStatementInput, BatchExecuteStatementOutput } from "../models/models_0";
import { BatchExecuteStatement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Runs one or more SQL statements, which can be data manipulation language (DML) or data definition language (DDL). Depending on the authorization method, use one of the following combinations of request parameters:
 *
 * - Secrets Manager - when connecting to a cluster, provide the `secret-arn` of a secret stored in Secrets Manager which has `username` and `password`. The specified secret contains credentials to connect to the `database` you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (`dbClusterIdentifier`), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name.
 * - Temporary credentials - when connecting to your data warehouse, choose one of the following options:
 *
 *   - When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, `arn:iam::123456789012:user:foo` has the database user name `IAM:foo`. Also, permission to call the `redshift-serverless:GetCredentials` operation is required.
 *   - When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, `arn:iam::123456789012:user:foo` has the database user name `IAM:foo`. Also, permission to call the `redshift:GetClusterCredentialsWithIAM` operation is required.
 *   - When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the `redshift:GetClusterCredentials` operation is required.
 *
 * For more information about the Amazon Redshift Data API and CLI usage examples, see [Using the Amazon Redshift Data API](https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html) in the *Amazon Redshift Management Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, BatchExecuteStatementCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, BatchExecuteStatementCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * // import type { RedshiftDataClientConfig } from "@aws-sdk/client-redshift-data";
 * const config = {}; // type is RedshiftDataClientConfig
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
 *   Parameters: [ // SqlParametersList
 *     { // SqlParameter
 *       name: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   WorkgroupName: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   ResultFormat: "STRING_VALUE",
 *   SessionKeepAliveSeconds: Number("int"),
 *   SessionId: "STRING_VALUE",
 *   ExecutionMode: "STRING_VALUE",
 *   WaitTimeSeconds: Number("int"),
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
 * //   Status: "STRING_VALUE",
 * //   RedshiftPid: Number("long"),
 * //   HasResultSet: true || false,
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
 *
 * The Amazon Redshift Data API operation failed because the maximum number of active sessions exceeded.
 *
 * @throws {@link ActiveStatementsExceededException} (client fault)
 *
 * The number of active statements exceeds the limit.
 *
 * @throws {@link BatchExecuteStatementException} (server fault)
 *
 * An SQL statement encountered an environmental error while running.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The Amazon Redshift Data API operation failed due to invalid input.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The Amazon Redshift Data API operation failed due to a missing resource.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The Amazon Redshift Data API operation failed due to invalid input.
 *
 * @throws {@link RedshiftDataServiceException}
 *
 * Base exception class for all service exceptions from RedshiftData service.
 *
 * @public
 */
export class BatchExecuteStatementCommand extends command<BatchExecuteStatementCommandInput, BatchExecuteStatementCommandOutput>(
  _ep0,
  _mw0,
  "BatchExecuteStatement",
  BatchExecuteStatement$
) {
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
