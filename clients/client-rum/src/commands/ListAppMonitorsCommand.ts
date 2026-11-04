// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAppMonitorsRequest, ListAppMonitorsResponse } from "../models/models_0";
import { ListAppMonitors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAppMonitorsCommand}.
 */
export interface ListAppMonitorsCommandInput extends ListAppMonitorsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppMonitorsCommand}.
 */
export interface ListAppMonitorsCommandOutput extends ListAppMonitorsResponse, __MetadataBearer {}

/**
 * Returns a list of the Amazon CloudWatch RUM app monitors in the account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, ListAppMonitorsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, ListAppMonitorsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * // import type { RUMClientConfig } from "@aws-sdk/client-rum";
 * const config = {}; // type is RUMClientConfig
 * const client = new RUMClient(config);
 * const input = { // ListAppMonitorsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAppMonitorsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppMonitorsResponse
 * //   NextToken: "STRING_VALUE",
 * //   AppMonitorSummaries: [ // AppMonitorSummaryList
 * //     { // AppMonitorSummary
 * //       Name: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Created: "STRING_VALUE",
 * //       LastModified: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       Platform: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAppMonitorsCommandInput - {@link ListAppMonitorsCommandInput}
 * @returns {@link ListAppMonitorsCommandOutput}
 * @see {@link ListAppMonitorsCommandInput} for command's `input` shape.
 * @see {@link ListAppMonitorsCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service exception.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the arguments for the request is not valid.
 *
 * @throws {@link RUMServiceException}
 *
 * Base exception class for all service exceptions from RUM service.
 *
 * @public
 */
export class ListAppMonitorsCommand extends command<ListAppMonitorsCommandInput, ListAppMonitorsCommandOutput>(
  _ep0,
  _mw0,
  "ListAppMonitors",
  ListAppMonitors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppMonitorsRequest;
      output: ListAppMonitorsResponse;
    };
    sdk: {
      input: ListAppMonitorsCommandInput;
      output: ListAppMonitorsCommandOutput;
    };
  };
}
