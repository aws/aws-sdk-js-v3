// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListUsageTotalsRequest, ListUsageTotalsResponse } from "../models/models_1";
import { ListUsageTotals$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListUsageTotalsCommand}.
 */
export interface ListUsageTotalsCommandInput extends ListUsageTotalsRequest {}
/**
 * @public
 *
 * The output of {@link ListUsageTotalsCommand}.
 */
export interface ListUsageTotalsCommandOutput extends ListUsageTotalsResponse, __MetadataBearer {}

/**
 * Lists the Amazon Inspector usage totals over the last 30 days.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListUsageTotalsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListUsageTotalsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // ListUsageTotalsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   accountIds: [ // UsageAccountIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListUsageTotalsCommand(input);
 * const response = await client.send(command);
 * // { // ListUsageTotalsResponse
 * //   nextToken: "STRING_VALUE",
 * //   totals: [ // UsageTotalList
 * //     { // UsageTotal
 * //       accountId: "STRING_VALUE",
 * //       usage: [ // UsageList
 * //         { // Usage
 * //           type: "STRING_VALUE",
 * //           total: Number("double"),
 * //           estimatedMonthlyCost: Number("double"),
 * //           currency: "STRING_VALUE",
 * //           cloudProvider: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListUsageTotalsCommandInput - {@link ListUsageTotalsCommandInput}
 * @returns {@link ListUsageTotalsCommandOutput}
 * @see {@link ListUsageTotalsCommandInput} for command's `input` shape.
 * @see {@link ListUsageTotalsCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * For `Enable`, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the Amazon Inspector service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation due to missing required fields or having invalid inputs.
 *
 * @throws {@link Inspector2ServiceException}
 *
 * Base exception class for all service exceptions from Inspector2 service.
 *
 * @public
 */
export class ListUsageTotalsCommand extends command<ListUsageTotalsCommandInput, ListUsageTotalsCommandOutput>(
  _ep0,
  _mw0,
  "ListUsageTotals",
  ListUsageTotals$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUsageTotalsRequest;
      output: ListUsageTotalsResponse;
    };
    sdk: {
      input: ListUsageTotalsCommandInput;
      output: ListUsageTotalsCommandOutput;
    };
  };
}
