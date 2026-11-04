// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSubscriptionRequest, CreateSubscriptionResponse } from "../models/models_0";
import { CreateSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Subscribes an IAM Identity Center user or a group to a pricing tier for an Amazon Q Business application.
 *
 * Amazon Q Business offers two subscription tiers: `Q_LITE` and `Q_BUSINESS`. Subscription tier determines feature access for the user. For more information on subscriptions and pricing tiers, see [Amazon Q Business pricing](https://aws.amazon.com/q/business/pricing/).
 *
 * > **Note:** For an example IAM role policy for assigning subscriptions, see [Set up required permissions](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/setting-up.html#permissions) in the Amazon Q Business User Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, CreateSubscriptionCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, CreateSubscriptionCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
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
 *
 * You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You are trying to perform an action that conflicts with the current status of your resource. Fix any inconsistencies with your resources and try again.
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
export class CreateSubscriptionCommand extends command<CreateSubscriptionCommandInput, CreateSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "CreateSubscription",
  CreateSubscription$
) {
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
