// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSubscriptionRequest, CreateSubscriptionResponse } from "../models/models_0";
import { de_CreateSubscriptionCommand, se_CreateSubscriptionCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSubscriptionCommand}.
 */
export interface CreateSubscriptionCommandInput extends CreateSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link CreateSubscriptionCommand}.
 */
export interface CreateSubscriptionCommandOutput extends CreateSubscriptionResponse, __MetadataBearer {}

/**
 * <p>Subscribes an IAM Identity Center user or a group to a pricing tier for an
 *             Amazon Q Business application.</p>
 *          <p>Amazon Q Business offers two subscription tiers: <code>Q_LITE</code> and
 *                 <code>Q_BUSINESS</code>. Subscription tier determines feature access for the user.
 *             For more information on subscriptions and pricing tiers, see <a href="https://aws.amazon.com/q/business/pricing/">Amazon Q Business
 *             pricing</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, CreateSubscriptionCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, CreateSubscriptionCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // CreateSubscriptionRequest
 *   applicationId: "STRING_VALUE", // required
 *   principal: { // SubscriptionPrincipal Union: only one key present
 *     user: "STRING_VALUE",
 *     group: "STRING_VALUE",
 *   },
 *   type: "Q_LITE" || "Q_BUSINESS", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // CreateSubscriptionResponse
 * //   subscriptionId: "STRING_VALUE",
 * //   subscriptionArn: "STRING_VALUE",
 * //   currentSubscription: { // SubscriptionDetails
 * //     type: "Q_LITE" || "Q_BUSINESS",
 * //   },
 * //   nextSubscription: {
 * //     type: "Q_LITE" || "Q_BUSINESS",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSubscriptionCommandInput - {@link CreateSubscriptionCommandInput}
 * @returns {@link CreateSubscriptionCommandOutput}
 * @see {@link CreateSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You are trying to perform an action that conflicts with the current status of your
 *             resource. Fix any inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have
 *             provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 * @public
 */
export class CreateSubscriptionCommand extends $Command
  .classBuilder<
    CreateSubscriptionCommandInput,
    CreateSubscriptionCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "CreateSubscription", {})
  .n("QBusinessClient", "CreateSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_CreateSubscriptionCommand)
  .de(de_CreateSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSubscriptionRequest;
      output: CreateSubscriptionResponse;
    };
    sdk: {
      input: CreateSubscriptionCommandInput;
      output: CreateSubscriptionCommandOutput;
    };
  };
}
