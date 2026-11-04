// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelSubscriptionRequest, CancelSubscriptionResponse } from "../models/models_0";
import { CancelSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Unsubscribes a user or a group from their pricing tier in an Amazon Q Business application. An unsubscribed user or group loses all Amazon Q Business feature access at the start of next month.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, CancelSubscriptionCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, CancelSubscriptionCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
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
 *
 * You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact [Support](http://aws.amazon.com/contact-us/) for help.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling. Reduce the number of requests and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.
 *
 * @throws {@link QBusinessServiceException}
 *
 * Base exception class for all service exceptions from QBusiness service.
 *
 * @public
 */
export class CancelSubscriptionCommand extends command<CancelSubscriptionCommandInput, CancelSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "CancelSubscription",
  CancelSubscription$
) {
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
