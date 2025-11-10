// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateNotificationSubscriptionRequest, CreateNotificationSubscriptionResponse } from "../models/models_0";
import { CreateNotificationSubscription } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNotificationSubscriptionCommand}.
 */
export interface CreateNotificationSubscriptionCommandInput extends CreateNotificationSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link CreateNotificationSubscriptionCommand}.
 */
export interface CreateNotificationSubscriptionCommandOutput
  extends CreateNotificationSubscriptionResponse,
    __MetadataBearer {}

/**
 * <p>Configure Amazon WorkDocs to use Amazon SNS notifications. The endpoint receives a
 *             confirmation message, and must confirm the subscription.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/manage-notifications.html">Setting up notifications for an IAM user or role</a> in the <i>Amazon WorkDocs Developer
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateNotificationSubscriptionCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateNotificationSubscriptionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // CreateNotificationSubscriptionRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   Endpoint: "STRING_VALUE", // required
 *   Protocol: "HTTPS" || "SQS", // required
 *   SubscriptionType: "ALL", // required
 * };
 * const command = new CreateNotificationSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // CreateNotificationSubscriptionResponse
 * //   Subscription: { // Subscription
 * //     SubscriptionId: "STRING_VALUE",
 * //     EndPoint: "STRING_VALUE",
 * //     Protocol: "HTTPS" || "SQS",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateNotificationSubscriptionCommandInput - {@link CreateNotificationSubscriptionCommandInput}
 * @returns {@link CreateNotificationSubscriptionCommandOutput}
 * @see {@link CreateNotificationSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateNotificationSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The pagination marker or limit fields are not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link TooManySubscriptionsException} (client fault)
 *  <p>You've reached the limit on the number of subscriptions for the WorkDocs
 *             instance.</p>
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
export class CreateNotificationSubscriptionCommand extends $Command
  .classBuilder<
    CreateNotificationSubscriptionCommandInput,
    CreateNotificationSubscriptionCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGorillaBoyService", "CreateNotificationSubscription", {})
  .n("WorkDocsClient", "CreateNotificationSubscriptionCommand")
  .sc(CreateNotificationSubscription)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNotificationSubscriptionRequest;
      output: CreateNotificationSubscriptionResponse;
    };
    sdk: {
      input: CreateNotificationSubscriptionCommandInput;
      output: CreateNotificationSubscriptionCommandOutput;
    };
  };
}
