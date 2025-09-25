// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListLogSubscriptionsRequest, ListLogSubscriptionsResult } from "../models/models_0";
import { ListLogSubscriptions } from "../schemas/schemas_7_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLogSubscriptionsCommand}.
 */
export interface ListLogSubscriptionsCommandInput extends ListLogSubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link ListLogSubscriptionsCommand}.
 */
export interface ListLogSubscriptionsCommandOutput extends ListLogSubscriptionsResult, __MetadataBearer {}

/**
 * <p>Lists the active log subscriptions for the Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ListLogSubscriptionsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ListLogSubscriptionsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // ListLogSubscriptionsRequest
 *   DirectoryId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListLogSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListLogSubscriptionsResult
 * //   LogSubscriptions: [ // LogSubscriptions
 * //     { // LogSubscription
 * //       DirectoryId: "STRING_VALUE",
 * //       LogGroupName: "STRING_VALUE",
 * //       SubscriptionCreatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLogSubscriptionsCommandInput - {@link ListLogSubscriptionsCommandInput}
 * @returns {@link ListLogSubscriptionsCommandOutput}
 * @see {@link ListLogSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListLogSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class ListLogSubscriptionsCommand extends $Command
  .classBuilder<
    ListLogSubscriptionsCommandInput,
    ListLogSubscriptionsCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "ListLogSubscriptions", {})
  .n("DirectoryServiceClient", "ListLogSubscriptionsCommand")
  .sc(ListLogSubscriptions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLogSubscriptionsRequest;
      output: ListLogSubscriptionsResult;
    };
    sdk: {
      input: ListLogSubscriptionsCommandInput;
      output: ListLogSubscriptionsCommandOutput;
    };
  };
}
