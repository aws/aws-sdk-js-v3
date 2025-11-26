// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeNotificationSubscriptionsRequest,
  DescribeNotificationSubscriptionsResponse,
} from "../models/models_0";
import { DescribeNotificationSubscriptions } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNotificationSubscriptionsCommand}.
 */
export interface DescribeNotificationSubscriptionsCommandInput extends DescribeNotificationSubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNotificationSubscriptionsCommand}.
 */
export interface DescribeNotificationSubscriptionsCommandOutput
  extends DescribeNotificationSubscriptionsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the specified notification subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeNotificationSubscriptionsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeNotificationSubscriptionsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // DescribeNotificationSubscriptionsRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeNotificationSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNotificationSubscriptionsResponse
 * //   Subscriptions: [ // SubscriptionList
 * //     { // Subscription
 * //       SubscriptionId: "STRING_VALUE",
 * //       EndPoint: "STRING_VALUE",
 * //       Protocol: "HTTPS" || "SQS",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNotificationSubscriptionsCommandInput - {@link DescribeNotificationSubscriptionsCommandInput}
 * @returns {@link DescribeNotificationSubscriptionsCommandOutput}
 * @see {@link DescribeNotificationSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeNotificationSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *  <p>The caller does not have access to perform the action on the resource.</p>
 *
 * @throws {@link WorkDocsServiceException}
 * <p>Base exception class for all service exceptions from WorkDocs service.</p>
 *
 *
 * @public
 */
export class DescribeNotificationSubscriptionsCommand extends $Command
  .classBuilder<
    DescribeNotificationSubscriptionsCommandInput,
    DescribeNotificationSubscriptionsCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGorillaBoyService", "DescribeNotificationSubscriptions", {})
  .n("WorkDocsClient", "DescribeNotificationSubscriptionsCommand")
  .sc(DescribeNotificationSubscriptions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNotificationSubscriptionsRequest;
      output: DescribeNotificationSubscriptionsResponse;
    };
    sdk: {
      input: DescribeNotificationSubscriptionsCommandInput;
      output: DescribeNotificationSubscriptionsCommandOutput;
    };
  };
}
