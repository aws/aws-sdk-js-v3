// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResolveCustomerRequest, ResolveCustomerResult } from "../models/models_0";
import { ResolveCustomer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ResolveCustomerCommand}.
 */
export interface ResolveCustomerCommandInput extends ResolveCustomerRequest {}
/**
 * @public
 *
 * The output of {@link ResolveCustomerCommand}.
 */
export interface ResolveCustomerCommandOutput extends ResolveCustomerResult, __MetadataBearer {}

/**
 * `ResolveCustomer` is called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a registration token through their browser. The registration token is resolved through this API to obtain a `CustomerIdentifier` along with the `CustomerAWSAccountId`, `ProductCode`, and `LicenseArn`.
 *
 * > **Important:** For new SaaS product integrations, the `CustomerIdentifier` field is not populated in the `ResolveCustomer` API response. New integrations must use `CustomerAWSAccountId` and `LicenseArn` to identify customers. Existing integrations continue to work unchanged.
 *
 * > **Note:** To successfully resolve the token, the API must be called from the account that was used to publish the SaaS application. For an example of using `ResolveCustomer`, see [ResolveCustomer code example](https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-resolvecustomer-example) in the *Amazon Web Services Marketplace Seller Guide*.
 *
 * Permission is required for this operation. Your IAM role or user performing this operation requires a policy to allow the `aws-marketplace:ResolveCustomer` action. For more information, see [Actions, resources, and condition keys for Amazon Web Services Marketplace Metering Service](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsmarketplacemeteringservice.html) in the *Service Authorization Reference*.
 *
 * For Amazon Web Services Regions that support `ResolveCustomer`, see [ResolveCustomer Region support](https://docs.aws.amazon.com/marketplace/latest/APIReference/metering-regions.html#resolvecustomer-region-support).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, ResolveCustomerCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, ResolveCustomerCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * // import type { MarketplaceMeteringClientConfig } from "@aws-sdk/client-marketplace-metering";
 * const config = {}; // type is MarketplaceMeteringClientConfig
 * const client = new MarketplaceMeteringClient(config);
 * const input = { // ResolveCustomerRequest
 *   RegistrationToken: "STRING_VALUE", // required
 * };
 * const command = new ResolveCustomerCommand(input);
 * const response = await client.send(command);
 * // { // ResolveCustomerResult
 * //   CustomerIdentifier: "STRING_VALUE",
 * //   ProductCode: "STRING_VALUE",
 * //   CustomerAWSAccountId: "STRING_VALUE",
 * //   LicenseArn: "STRING_VALUE",
 * //   Metadata: { // Metadata
 * //     AgreementId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ResolveCustomerCommandInput - {@link ResolveCustomerCommandInput}
 * @returns {@link ResolveCustomerCommandOutput}
 * @see {@link ResolveCustomerCommandInput} for command's `input` shape.
 * @see {@link ResolveCustomerCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for MarketplaceMeteringClient's `config` shape.
 *
 * @throws {@link DisabledApiException} (client fault)
 *
 * The API is disabled in the Region.
 *
 * @throws {@link ExpiredTokenException} (client fault)
 *
 * The submitted registration token has expired. This can happen if the buyer's browser takes too long to redirect to your page, the buyer has resubmitted the registration token, or your application has held on to the registration token for too long. Your SaaS registration website should redeem this token as soon as it is submitted by the buyer's browser.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * An internal error has occurred. Retry your request. If the problem persists, post a message with details on the Amazon Web Services forums.
 *
 * @throws {@link InvalidTokenException} (client fault)
 *
 * Registration token is invalid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The calls to the API are throttled.
 *
 * @throws {@link MarketplaceMeteringServiceException}
 *
 * Base exception class for all service exceptions from MarketplaceMetering service.
 *
 * @public
 */
export class ResolveCustomerCommand extends command<ResolveCustomerCommandInput, ResolveCustomerCommandOutput>(
  _ep0,
  _mw0,
  "ResolveCustomer",
  ResolveCustomer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResolveCustomerRequest;
      output: ResolveCustomerResult;
    };
    sdk: {
      input: ResolveCustomerCommandInput;
      output: ResolveCustomerCommandOutput;
    };
  };
}
