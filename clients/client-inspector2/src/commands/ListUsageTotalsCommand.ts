// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { ListUsageTotalsRequest, ListUsageTotalsResponse } from "../models/models_1";
import { de_ListUsageTotalsCommand, se_ListUsageTotalsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the Amazon Inspector usage totals over the last 30 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListUsageTotalsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListUsageTotalsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 * @public
 */
export class ListUsageTotalsCommand extends $Command
  .classBuilder<
    ListUsageTotalsCommandInput,
    ListUsageTotalsCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "ListUsageTotals", {})
  .n("Inspector2Client", "ListUsageTotalsCommand")
  .f(void 0, void 0)
  .ser(se_ListUsageTotalsCommand)
  .de(de_ListUsageTotalsCommand)
  .build() {
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
