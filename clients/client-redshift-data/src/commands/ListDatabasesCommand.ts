// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDatabasesRequest, ListDatabasesResponse } from "../models/models_0";
import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";
import { ListDatabases } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDatabasesCommand}.
 */
export interface ListDatabasesCommandInput extends ListDatabasesRequest {}
/**
 * @public
 *
 * The output of {@link ListDatabasesCommand}.
 */
export interface ListDatabasesCommandOutput extends ListDatabasesResponse, __MetadataBearer {}

/**
 * <p>List the databases in a cluster. A token is returned to page through the database list. Depending on the authorization method, use one of the following combinations of request parameters: </p> <ul> <li> <p>Secrets Manager - when connecting to a cluster, provide the <code>secret-arn</code> of a secret stored in Secrets Manager which has <code>username</code> and <code>password</code>. The specified secret contains credentials to connect to the <code>database</code> you specify. When you are connecting to a cluster, you also supply the database name, If you provide a cluster identifier (<code>dbClusterIdentifier</code>), it must match the cluster identifier stored in the secret. When you are connecting to a serverless workgroup, you also supply the database name.</p> </li> <li> <p>Temporary credentials - when connecting to your data warehouse, choose one of the following options:</p> <ul> <li> <p>When connecting to a serverless workgroup, specify the workgroup name and database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name. The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>. Also, permission to call the <code>redshift:GetClusterCredentialsWithIAM</code> operation is required.</p> </li> <li> <p>When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name. Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.</p> </li> </ul> </li> </ul> <p>For more information about the Amazon Redshift Data API and CLI usage examples, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the <i>Amazon Redshift Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, ListDatabasesCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, ListDatabasesCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * // import type { RedshiftDataClientConfig } from "@aws-sdk/client-redshift-data";
 * const config = {}; // type is RedshiftDataClientConfig
 * const client = new RedshiftDataClient(config);
 * const input = { // ListDatabasesRequest
 *   ClusterIdentifier: "STRING_VALUE",
 *   Database: "STRING_VALUE", // required
 *   SecretArn: "STRING_VALUE",
 *   DbUser: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   WorkgroupName: "STRING_VALUE",
 * };
 * const command = new ListDatabasesCommand(input);
 * const response = await client.send(command);
 * // { // ListDatabasesResponse
 * //   Databases: [ // DatabaseList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatabasesCommandInput - {@link ListDatabasesCommandInput}
 * @returns {@link ListDatabasesCommandOutput}
 * @see {@link ListDatabasesCommandInput} for command's `input` shape.
 * @see {@link ListDatabasesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for RedshiftDataClient's `config` shape.
 *
 * @throws {@link DatabaseConnectionException} (server fault)
 *  <p>Connection to a database failed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 *
 * @throws {@link QueryTimeoutException} (client fault)
 *  <p>The Amazon Redshift Data API operation failed due to timeout.</p>
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
export class ListDatabasesCommand extends $Command
  .classBuilder<
    ListDatabasesCommandInput,
    ListDatabasesCommandOutput,
    RedshiftDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftData", "ListDatabases", {})
  .n("RedshiftDataClient", "ListDatabasesCommand")
  .sc(ListDatabases)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatabasesRequest;
      output: ListDatabasesResponse;
    };
    sdk: {
      input: ListDatabasesCommandInput;
      output: ListDatabasesCommandOutput;
    };
  };
}
