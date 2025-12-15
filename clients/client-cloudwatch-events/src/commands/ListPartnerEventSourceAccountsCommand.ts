// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchEventsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPartnerEventSourceAccountsRequest, ListPartnerEventSourceAccountsResponse } from "../models/models_0";
import { ListPartnerEventSourceAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPartnerEventSourceAccountsCommand}.
 */
export interface ListPartnerEventSourceAccountsCommandInput extends ListPartnerEventSourceAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListPartnerEventSourceAccountsCommand}.
 */
export interface ListPartnerEventSourceAccountsCommandOutput
  extends ListPartnerEventSourceAccountsResponse,
    __MetadataBearer {}

/**
 * <p>An SaaS partner can use this operation to display the Amazon Web Services account ID that a particular
 *       partner event source name is associated with. This operation is not used by Amazon Web Services
 *       customers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListPartnerEventSourceAccountsCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListPartnerEventSourceAccountsCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // ListPartnerEventSourceAccountsRequest
 *   EventSourceName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListPartnerEventSourceAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListPartnerEventSourceAccountsResponse
 * //   PartnerEventSourceAccounts: [ // PartnerEventSourceAccountList
 * //     { // PartnerEventSourceAccount
 * //       Account: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       ExpirationTime: new Date("TIMESTAMP"),
 * //       State: "PENDING" || "ACTIVE" || "DELETED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPartnerEventSourceAccountsCommandInput - {@link ListPartnerEventSourceAccountsCommandInput}
 * @returns {@link ListPartnerEventSourceAccountsCommandOutput}
 * @see {@link ListPartnerEventSourceAccountsCommandInput} for command's `input` shape.
 * @see {@link ListPartnerEventSourceAccountsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 *
 * @public
 */
export class ListPartnerEventSourceAccountsCommand extends $Command
  .classBuilder<
    ListPartnerEventSourceAccountsCommandInput,
    ListPartnerEventSourceAccountsCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "ListPartnerEventSourceAccounts", {})
  .n("CloudWatchEventsClient", "ListPartnerEventSourceAccountsCommand")
  .sc(ListPartnerEventSourceAccounts$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPartnerEventSourceAccountsRequest;
      output: ListPartnerEventSourceAccountsResponse;
    };
    sdk: {
      input: ListPartnerEventSourceAccountsCommandInput;
      output: ListPartnerEventSourceAccountsCommandOutput;
    };
  };
}
