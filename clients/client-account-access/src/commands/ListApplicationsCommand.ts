// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListApplicationsRequest, ListApplicationsResponse } from "../models/models_0";
import { ListApplications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListApplicationsCommand}.
 */
export interface ListApplicationsCommandInput extends ListApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationsCommand}.
 */
export interface ListApplicationsCommandOutput extends ListApplicationsResponse, __MetadataBearer {}

/**
 * <p>Lists the account access manager applications in your account. Use pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountAccessClient, ListApplicationsCommand } from "@aws-sdk/client-account-access"; // ES Modules import
 * // const { AccountAccessClient, ListApplicationsCommand } = require("@aws-sdk/client-account-access"); // CommonJS import
 * // import type { AccountAccessClientConfig } from "@aws-sdk/client-account-access";
 * const config = {}; // type is AccountAccessClientConfig
 * const client = new AccountAccessClient(config);
 * const input = { // ListApplicationsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationsResponse
 * //   applications: [ // ApplicationList // required
 * //     { // ApplicationSummary
 * //       applicationArn: "STRING_VALUE", // required
 * //       tenantId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationsCommandInput - {@link ListApplicationsCommandInput}
 * @returns {@link ListApplicationsCommandOutput}
 * @see {@link ListApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationsCommandOutput} for command's `response` shape.
 * @see {@link AccountAccessClientResolvedConfig | config} for AccountAccessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred. Try your request again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Try your request again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by the service. Check your request parameters and retry the request.</p>
 *
 * @throws {@link AccountAccessServiceException}
 * <p>Base exception class for all service exceptions from AccountAccess service.</p>
 *
 *
 * @public
 */
export class ListApplicationsCommand extends command<ListApplicationsCommandInput, ListApplicationsCommandOutput>(
  _ep0,
  _mw0,
  "ListApplications",
  ListApplications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationsRequest;
      output: ListApplicationsResponse;
    };
    sdk: {
      input: ListApplicationsCommandInput;
      output: ListApplicationsCommandOutput;
    };
  };
}
