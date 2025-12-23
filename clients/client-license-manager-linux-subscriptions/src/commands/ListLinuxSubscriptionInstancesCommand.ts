// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LicenseManagerLinuxSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerLinuxSubscriptionsClient";
import type { ListLinuxSubscriptionInstancesRequest, ListLinuxSubscriptionInstancesResponse } from "../models/models_0";
import { ListLinuxSubscriptionInstances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLinuxSubscriptionInstancesCommand}.
 */
export interface ListLinuxSubscriptionInstancesCommandInput extends ListLinuxSubscriptionInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListLinuxSubscriptionInstancesCommand}.
 */
export interface ListLinuxSubscriptionInstancesCommandOutput extends ListLinuxSubscriptionInstancesResponse, __MetadataBearer {}

/**
 * <p>Lists the running Amazon EC2 instances that were discovered with commercial Linux
 *       subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerLinuxSubscriptionsClient, ListLinuxSubscriptionInstancesCommand } from "@aws-sdk/client-license-manager-linux-subscriptions"; // ES Modules import
 * // const { LicenseManagerLinuxSubscriptionsClient, ListLinuxSubscriptionInstancesCommand } = require("@aws-sdk/client-license-manager-linux-subscriptions"); // CommonJS import
 * // import type { LicenseManagerLinuxSubscriptionsClientConfig } from "@aws-sdk/client-license-manager-linux-subscriptions";
 * const config = {}; // type is LicenseManagerLinuxSubscriptionsClientConfig
 * const client = new LicenseManagerLinuxSubscriptionsClient(config);
 * const input = { // ListLinuxSubscriptionInstancesRequest
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
 * const command = new ListLinuxSubscriptionInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListLinuxSubscriptionInstancesResponse
 * //   Instances: [ // InstanceList
 * //     { // Instance
 * //       AmiId: "STRING_VALUE",
 * //       InstanceID: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       AccountID: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       UsageOperation: "STRING_VALUE",
 * //       ProductCode: [ // ProductCodeList
 * //         "STRING_VALUE",
 * //       ],
 * //       LastUpdatedTime: "STRING_VALUE",
 * //       SubscriptionName: "STRING_VALUE",
 * //       OsVersion: "STRING_VALUE",
 * //       SubscriptionProviderCreateTime: "STRING_VALUE",
 * //       SubscriptionProviderUpdateTime: "STRING_VALUE",
 * //       DualSubscription: "STRING_VALUE",
 * //       RegisteredWithSubscriptionProvider: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLinuxSubscriptionInstancesCommandInput - {@link ListLinuxSubscriptionInstancesCommandInput}
 * @returns {@link ListLinuxSubscriptionInstancesCommandOutput}
 * @see {@link ListLinuxSubscriptionInstancesCommandInput} for command's `input` shape.
 * @see {@link ListLinuxSubscriptionInstancesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListLinuxSubscriptionInstancesCommand extends $Command
  .classBuilder<
    ListLinuxSubscriptionInstancesCommandInput,
    ListLinuxSubscriptionInstancesCommandOutput,
    LicenseManagerLinuxSubscriptionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerLinuxSubscriptionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LicenseManagerLinuxSubscriptions", "ListLinuxSubscriptionInstances", {})
  .n("LicenseManagerLinuxSubscriptionsClient", "ListLinuxSubscriptionInstancesCommand")
  .sc(ListLinuxSubscriptionInstances$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLinuxSubscriptionInstancesRequest;
      output: ListLinuxSubscriptionInstancesResponse;
    };
    sdk: {
      input: ListLinuxSubscriptionInstancesCommandInput;
      output: ListLinuxSubscriptionInstancesCommandOutput;
    };
  };
}
