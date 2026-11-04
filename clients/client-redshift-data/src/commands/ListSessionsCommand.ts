// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSessionsRequest, ListSessionsResponse } from "../models/models_0";
import { ListSessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSessionsCommand}.
 */
export interface ListSessionsCommandInput extends ListSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSessionsCommand}.
 */
export interface ListSessionsCommandOutput extends ListSessionsResponse, __MetadataBearer {}

/**
 * Lists the sessions that the caller created in the last 24 hours. By default, only sessions with a status of `AVAILABLE` or `BUSY` are returned. You can filter the results by session status, compute target (cluster or serverless workgroup), or database. To retrieve the metadata for a single session, provide the `SessionId` parameter. Use `NextToken` to page through the session list.
 *
 * Returns only the sessions that the caller created. When identity-enhanced role sessions are used, you must provide either the `ClusterIdentifier` or `WorkgroupName` parameter to ensure that the IAM Identity Center user can only access the Amazon Redshift IAM Identity Center applications they are assigned. For more information, see [Trusted identity propagation overview](https://docs.aws.amazon.com/singlesignon/latest/userguide/trustedidentitypropagation-overview.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, ListSessionsCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, ListSessionsCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * // import type { RedshiftDataClientConfig } from "@aws-sdk/client-redshift-data";
 * const config = {}; // type is RedshiftDataClientConfig
 * const client = new RedshiftDataClient(config);
 * const input = { // ListSessionsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SessionId: "STRING_VALUE",
 *   Status: "STRING_VALUE",
 *   RoleLevel: true || false,
 *   ClusterIdentifier: "STRING_VALUE",
 *   WorkgroupName: "STRING_VALUE",
 *   Database: "STRING_VALUE",
 * };
 * const command = new ListSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSessionsResponse
 * //   Sessions: [ // SessionList // required
 * //     { // SessionData
 * //       SessionId: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       Database: "STRING_VALUE",
 * //       DbUser: "STRING_VALUE",
 * //       ClusterIdentifier: "STRING_VALUE",
 * //       WorkgroupName: "STRING_VALUE",
 * //       SessionAliveSeconds: Number("int"),
 * //       SessionTtl: new Date("TIMESTAMP"),
 * //       CurrentStatementId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSessionsCommandInput - {@link ListSessionsCommandInput}
 * @returns {@link ListSessionsCommandOutput}
 * @see {@link ListSessionsCommandInput} for command's `input` shape.
 * @see {@link ListSessionsCommandOutput} for command's `response` shape.
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
export class ListSessionsCommand extends command<ListSessionsCommandInput, ListSessionsCommandOutput>(
  _ep0,
  _mw0,
  "ListSessions",
  ListSessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSessionsRequest;
      output: ListSessionsResponse;
    };
    sdk: {
      input: ListSessionsCommandInput;
      output: ListSessionsCommandOutput;
    };
  };
}
