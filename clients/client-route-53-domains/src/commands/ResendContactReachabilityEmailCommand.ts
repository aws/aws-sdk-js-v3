// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ResendContactReachabilityEmailRequest,
  ResendContactReachabilityEmailResponse,
  ResendContactReachabilityEmailResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ResendContactReachabilityEmailCommand,
  se_ResendContactReachabilityEmailCommand,
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
 * The input for {@link ResendContactReachabilityEmailCommand}.
 */
export interface ResendContactReachabilityEmailCommandInput extends ResendContactReachabilityEmailRequest {}
/**
 * @public
 *
 * The output of {@link ResendContactReachabilityEmailCommand}.
 */
export interface ResendContactReachabilityEmailCommandOutput
  extends ResendContactReachabilityEmailResponse,
    __MetadataBearer {}

/**
 * <p>For operations that require confirmation that the email address for the registrant
 * 			contact is valid, such as registering a new domain, this operation resends the
 * 			confirmation email to the current email address for the registrant contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, ResendContactReachabilityEmailCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, ResendContactReachabilityEmailCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
 * const client = new Route53DomainsClient(config);
 * const input = { // ResendContactReachabilityEmailRequest
 *   domainName: "STRING_VALUE",
 * };
 * const command = new ResendContactReachabilityEmailCommand(input);
 * const response = await client.send(command);
 * // { // ResendContactReachabilityEmailResponse
 * //   domainName: "STRING_VALUE",
 * //   emailAddress: "STRING_VALUE",
 * //   isAlreadyVerified: true || false,
 * // };
 *
 * ```
 *
 * @param ResendContactReachabilityEmailCommandInput - {@link ResendContactReachabilityEmailCommandInput}
 * @returns {@link ResendContactReachabilityEmailCommandOutput}
 * @see {@link ResendContactReachabilityEmailCommandInput} for command's `input` shape.
 * @see {@link ResendContactReachabilityEmailCommandOutput} for command's `response` shape.
 * @see {@link Route53DomainsClientResolvedConfig | config} for Route53DomainsClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The requested item is not acceptable. For example, for APIs that accept a domain name,
 * 			the request might specify a domain name that doesn't belong to the account that
 * 			submitted the request. For <code>AcceptDomainTransferFromAnotherAwsAccount</code>, the
 * 			password might be invalid.</p>
 *
 * @throws {@link OperationLimitExceeded} (client fault)
 *  <p>The number of operations or jobs running exceeded the allowed threshold for the
 * 			account.</p>
 *
 * @throws {@link UnsupportedTLD} (client fault)
 *  <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
 *
 * @throws {@link Route53DomainsServiceException}
 * <p>Base exception class for all service exceptions from Route53Domains service.</p>
 *
 *
 * @public
 */
export class ResendContactReachabilityEmailCommand extends $Command
  .classBuilder<
    ResendContactReachabilityEmailCommandInput,
    ResendContactReachabilityEmailCommandOutput,
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
  .s("Route53Domains_v20140515", "ResendContactReachabilityEmail", {})
  .n("Route53DomainsClient", "ResendContactReachabilityEmailCommand")
  .f(void 0, ResendContactReachabilityEmailResponseFilterSensitiveLog)
  .ser(se_ResendContactReachabilityEmailCommand)
  .de(de_ResendContactReachabilityEmailCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResendContactReachabilityEmailRequest;
      output: ResendContactReachabilityEmailResponse;
    };
    sdk: {
      input: ResendContactReachabilityEmailCommandInput;
      output: ResendContactReachabilityEmailCommandOutput;
    };
  };
}
