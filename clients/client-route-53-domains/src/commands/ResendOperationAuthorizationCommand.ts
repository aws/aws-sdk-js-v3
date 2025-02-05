// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ResendOperationAuthorizationRequest } from "../models/models_0";
import {
  de_ResendOperationAuthorizationCommand,
  se_ResendOperationAuthorizationCommand,
} from "../protocols/Aws_json1_1";
import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResendOperationAuthorizationCommand}.
 */
export interface ResendOperationAuthorizationCommandInput extends ResendOperationAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link ResendOperationAuthorizationCommand}.
 */
export interface ResendOperationAuthorizationCommandOutput extends __MetadataBearer {}

/**
 * <p> Resend the form of authorization email for this operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, ResendOperationAuthorizationCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, ResendOperationAuthorizationCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Route53DomainsClient(config);
 * const input = { // ResendOperationAuthorizationRequest
 *   OperationId: "STRING_VALUE", // required
 * };
 * const command = new ResendOperationAuthorizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResendOperationAuthorizationCommandInput - {@link ResendOperationAuthorizationCommandInput}
 * @returns {@link ResendOperationAuthorizationCommandOutput}
 * @see {@link ResendOperationAuthorizationCommandInput} for command's `input` shape.
 * @see {@link ResendOperationAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The requested item is not acceptable. For example, for APIs that accept a domain name,
 * 			the request might specify a domain name that doesn't belong to the account that
 * 			submitted the request. For <code>AcceptDomainTransferFromAnotherAwsAccount</code>, the
 * 			password might be invalid.</p>
 *
 * @throws {@link Route53DomainsServiceException}
 * <p>Base exception class for all service exceptions from Route53Domains service.</p>
 *
 * @public
 */
export class ResendOperationAuthorizationCommand extends $Command
  .classBuilder<
    ResendOperationAuthorizationCommandInput,
    ResendOperationAuthorizationCommandOutput,
    Route53DomainsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53DomainsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Domains_v20140515", "ResendOperationAuthorization", {})
  .n("Route53DomainsClient", "ResendOperationAuthorizationCommand")
  .f(void 0, void 0)
  .ser(se_ResendOperationAuthorizationCommand)
  .de(de_ResendOperationAuthorizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResendOperationAuthorizationRequest;
      output: {};
    };
    sdk: {
      input: ResendOperationAuthorizationCommandInput;
      output: ResendOperationAuthorizationCommandOutput;
    };
  };
}
