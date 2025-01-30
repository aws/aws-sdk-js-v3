// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelSubscriptionRequest, CancelSubscriptionResponse } from "../models/models_0";
import { de_CancelSubscriptionCommand, se_CancelSubscriptionCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelSubscriptionCommand}.
 */
export interface CancelSubscriptionCommandInput extends CancelSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link CancelSubscriptionCommand}.
 */
export interface CancelSubscriptionCommandOutput extends CancelSubscriptionResponse, __MetadataBearer {}

/**
 * <p>Unsubscribes a user or a group from their pricing tier in an Amazon Q Business
 *             application. An unsubscribed user or group loses all Amazon Q Business feature access at the
 *             start of next month. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, CancelSubscriptionCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, CancelSubscriptionCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // CancelSubscriptionRequest
 *   applicationId: "STRING_VALUE", // required
 *   subscriptionId: "STRING_VALUE", // required
 * };
 * const command = new CancelSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // CancelSubscriptionResponse
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
 * @param CancelSubscriptionCommandInput - {@link CancelSubscriptionCommandInput}
 * @returns {@link CancelSubscriptionCommandOutput}
 * @see {@link CancelSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CancelSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
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
export class CancelSubscriptionCommand extends $Command
  .classBuilder<
    CancelSubscriptionCommandInput,
    CancelSubscriptionCommandOutput,
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
  .s("ExpertQ", "CancelSubscription", {})
  .n("QBusinessClient", "CancelSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_CancelSubscriptionCommand)
  .de(de_CancelSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelSubscriptionRequest;
      output: CancelSubscriptionResponse;
    };
    sdk: {
      input: CancelSubscriptionCommandInput;
      output: CancelSubscriptionCommandOutput;
    };
  };
}
