// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MarketplaceMeteringClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceMeteringClient";
import { ResolveCustomerRequest, ResolveCustomerResult } from "../models/models_0";
import { de_ResolveCustomerCommand, se_ResolveCustomerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>
 *             <code>ResolveCustomer</code> is called by a SaaS application during the registration
 *             process. When a buyer visits your website during the registration process, the buyer
 *             submits a registration token through their browser. The registration token is resolved
 *             through this API to obtain a <code>CustomerIdentifier</code>
 *              along with the
 *                 <code>CustomerAWSAccountId</code> and
 *             <code>ProductCode</code>.</p>
 *          <note>
 *             <p>The API needs to called from the seller account id used to publish the SaaS
 *                 application to successfully resolve the token.</p>
 *             <p>For an example of using <code>ResolveCustomer</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-resolvecustomer-example"> ResolveCustomer code example</a> in the <i>AWS Marketplace Seller
 *                     Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, ResolveCustomerCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, ResolveCustomerCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>The API is disabled in the Region.</p>
 *
 * @throws {@link ExpiredTokenException} (client fault)
 *  <p>The submitted registration token has expired. This can happen if the buyer's browser
 *             takes too long to redirect to your page, the buyer has resubmitted the registration
 *             token, or your application has held on to the registration token for too long. Your SaaS
 *             registration website should redeem this token as soon as it is submitted by the buyer's
 *             browser.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error has occurred. Retry your request. If the problem persists, post a
 *             message with details on the AWS forums.</p>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p>Registration token is invalid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The calls to the API are throttled.</p>
 *
 * @throws {@link MarketplaceMeteringServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceMetering service.</p>
 *
 * @public
 */
export class ResolveCustomerCommand extends $Command
  .classBuilder<
    ResolveCustomerCommandInput,
    ResolveCustomerCommandOutput,
    MarketplaceMeteringClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceMeteringClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMPMeteringService", "ResolveCustomer", {})
  .n("MarketplaceMeteringClient", "ResolveCustomerCommand")
  .f(void 0, void 0)
  .ser(se_ResolveCustomerCommand)
  .de(de_ResolveCustomerCommand)
  .build() {
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
