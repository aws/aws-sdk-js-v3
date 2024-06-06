// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LicenseManagerLinuxSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerLinuxSubscriptionsClient";
import { ListLinuxSubscriptionsRequest, ListLinuxSubscriptionsResponse } from "../models/models_0";
import { de_ListLinuxSubscriptionsCommand, se_ListLinuxSubscriptionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLinuxSubscriptionsCommand}.
 */
export interface ListLinuxSubscriptionsCommandInput extends ListLinuxSubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link ListLinuxSubscriptionsCommand}.
 */
export interface ListLinuxSubscriptionsCommandOutput extends ListLinuxSubscriptionsResponse, __MetadataBearer {}

/**
 * <p>Lists the Linux subscriptions that have been discovered. If you have linked your
 *       organization, the returned results will include data aggregated across your accounts in
 *       Organizations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerLinuxSubscriptionsClient, ListLinuxSubscriptionsCommand } from "@aws-sdk/client-license-manager-linux-subscriptions"; // ES Modules import
 * // const { LicenseManagerLinuxSubscriptionsClient, ListLinuxSubscriptionsCommand } = require("@aws-sdk/client-license-manager-linux-subscriptions"); // CommonJS import
 * const client = new LicenseManagerLinuxSubscriptionsClient(config);
 * const input = { // ListLinuxSubscriptionsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *       Operator: "STRING_VALUE",
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLinuxSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListLinuxSubscriptionsResponse
 * //   Subscriptions: [ // SubscriptionList
 * //     { // Subscription
 * //       Name: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       InstanceCount: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLinuxSubscriptionsCommandInput - {@link ListLinuxSubscriptionsCommandInput}
 * @returns {@link ListLinuxSubscriptionsCommandOutput}
 * @see {@link ListLinuxSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListLinuxSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerLinuxSubscriptionsClientResolvedConfig | config} for LicenseManagerLinuxSubscriptionsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerLinuxSubscriptionsServiceException}
 * <p>Base exception class for all service exceptions from LicenseManagerLinuxSubscriptions service.</p>
 *
 * @public
 */
export class ListLinuxSubscriptionsCommand extends $Command
  .classBuilder<
    ListLinuxSubscriptionsCommandInput,
    ListLinuxSubscriptionsCommandOutput,
    LicenseManagerLinuxSubscriptionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerLinuxSubscriptionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LicenseManagerLinuxSubscriptions", "ListLinuxSubscriptions", {})
  .n("LicenseManagerLinuxSubscriptionsClient", "ListLinuxSubscriptionsCommand")
  .f(void 0, void 0)
  .ser(se_ListLinuxSubscriptionsCommand)
  .de(de_ListLinuxSubscriptionsCommand)
  .build() {}
