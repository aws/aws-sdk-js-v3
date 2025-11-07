// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListBonusPaymentsRequest, ListBonusPaymentsResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListBonusPayments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBonusPaymentsCommand}.
 */
export interface ListBonusPaymentsCommandInput extends ListBonusPaymentsRequest {}
/**
 * @public
 *
 * The output of {@link ListBonusPaymentsCommand}.
 */
export interface ListBonusPaymentsCommandOutput extends ListBonusPaymentsResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>ListBonusPayments</code>
 *             operation retrieves the amounts of bonuses you have paid to Workers
 *             for a given HIT or assignment.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListBonusPaymentsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListBonusPaymentsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // ListBonusPaymentsRequest
 *   HITId: "STRING_VALUE",
 *   AssignmentId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListBonusPaymentsCommand(input);
 * const response = await client.send(command);
 * // { // ListBonusPaymentsResponse
 * //   NumResults: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * //   BonusPayments: [ // BonusPaymentList
 * //     { // BonusPayment
 * //       WorkerId: "STRING_VALUE",
 * //       BonusAmount: "STRING_VALUE",
 * //       AssignmentId: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
 * //       GrantTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBonusPaymentsCommandInput - {@link ListBonusPaymentsCommandInput}
 * @returns {@link ListBonusPaymentsCommandOutput}
 * @see {@link ListBonusPaymentsCommandInput} for command's `input` shape.
 * @see {@link ListBonusPaymentsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 *
 * @public
 */
export class ListBonusPaymentsCommand extends $Command
  .classBuilder<
    ListBonusPaymentsCommandInput,
    ListBonusPaymentsCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MTurkRequesterServiceV20170117", "ListBonusPayments", {})
  .n("MTurkClient", "ListBonusPaymentsCommand")
  .sc(ListBonusPayments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBonusPaymentsRequest;
      output: ListBonusPaymentsResponse;
    };
    sdk: {
      input: ListBonusPaymentsCommandInput;
      output: ListBonusPaymentsCommandOutput;
    };
  };
}
