// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListStatementsRequest, ListStatementsResponse } from "../models/models_0";
import { ListStatements$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListStatementsCommand}.
 */
export interface ListStatementsCommandInput extends ListStatementsRequest {}
/**
 * @public
 *
 * The output of {@link ListStatementsCommand}.
 */
export interface ListStatementsCommandOutput extends ListStatementsResponse, __MetadataBearer {}

/**
 * List of SQL statements. By default, only finished statements are shown. A token is returned to page through the statement list.
 *
 * When you use identity-enhanced role sessions to list statements, you must provide either the `cluster-identifier` or `workgroup-name` parameter. This ensures that the IdC user can only access the Amazon Redshift IdC applications they are assigned. For more information, see [Trusted identity propagation overview](https://docs.aws.amazon.com/singlesignon/latest/userguide/trustedidentitypropagation-overview.html).
 *
 * For more information about the Amazon Redshift Data API and CLI usage examples, see [Using the Amazon Redshift Data API](https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html) in the *Amazon Redshift Management Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, ListStatementsCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, ListStatementsCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * // import type { RedshiftDataClientConfig } from "@aws-sdk/client-redshift-data";
 * const config = {}; // type is RedshiftDataClientConfig
 * const client = new RedshiftDataClient(config);
 * const input = { // ListStatementsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   StatementName: "STRING_VALUE",
 *   Status: "STRING_VALUE",
 *   RoleLevel: true || false,
 *   Database: "STRING_VALUE",
 *   ClusterIdentifier: "STRING_VALUE",
 *   WorkgroupName: "STRING_VALUE",
 * };
 * const command = new ListStatementsCommand(input);
 * const response = await client.send(command);
 * // { // ListStatementsResponse
 * //   Statements: [ // StatementList // required
 * //     { // StatementData
 * //       Id: "STRING_VALUE", // required
 * //       QueryString: "STRING_VALUE",
 * //       QueryStrings: [ // StatementStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       SecretArn: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       StatementName: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       QueryParameters: [ // SqlParametersList
 * //         { // SqlParameter
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       IsBatchStatement: true || false,
 * //       ResultFormat: "STRING_VALUE",
 * //       SessionId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStatementsCommandInput - {@link ListStatementsCommandInput}
 * @returns {@link ListStatementsCommandOutput}
 * @see {@link ListStatementsCommandInput} for command's `input` shape.
 * @see {@link ListStatementsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for RedshiftDataClient's `config` shape.
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
export class ListStatementsCommand extends command<ListStatementsCommandInput, ListStatementsCommandOutput>(
  _ep0,
  _mw0,
  "ListStatements",
  ListStatements$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStatementsRequest;
      output: ListStatementsResponse;
    };
    sdk: {
      input: ListStatementsCommandInput;
      output: ListStatementsCommandOutput;
    };
  };
}
