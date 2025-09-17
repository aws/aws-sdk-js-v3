// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetContactReachabilityStatusRequest, GetContactReachabilityStatusResponse } from "../models/models_0";
import {
  de_GetContactReachabilityStatusCommand,
  se_GetContactReachabilityStatusCommand,
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
 * The input for {@link GetContactReachabilityStatusCommand}.
 */
export interface GetContactReachabilityStatusCommandInput extends GetContactReachabilityStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetContactReachabilityStatusCommand}.
 */
export interface GetContactReachabilityStatusCommandOutput
  extends GetContactReachabilityStatusResponse,
    __MetadataBearer {}

/**
 * <p>For operations that require confirmation that the email address for the registrant
 * 			contact is valid, such as registering a new domain, this operation returns information
 * 			about whether the registrant contact has responded.</p>
 *          <p>If you want us to resend the email, use the
 * 				<code>ResendContactReachabilityEmail</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53DomainsClient, GetContactReachabilityStatusCommand } from "@aws-sdk/client-route-53-domains"; // ES Modules import
 * // const { Route53DomainsClient, GetContactReachabilityStatusCommand } = require("@aws-sdk/client-route-53-domains"); // CommonJS import
 * // import type { Route53DomainsClientConfig } from "@aws-sdk/client-route-53-domains";
 * const config = {}; // type is Route53DomainsClientConfig
 * const client = new Route53DomainsClient(config);
 * const input = { // GetContactReachabilityStatusRequest
 *   domainName: "STRING_VALUE",
 * };
 * const command = new GetContactReachabilityStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetContactReachabilityStatusResponse
 * //   domainName: "STRING_VALUE",
 * //   status: "PENDING" || "DONE" || "EXPIRED",
 * // };
 *
 * ```
 *
 * @param GetContactReachabilityStatusCommandInput - {@link GetContactReachabilityStatusCommandInput}
 * @returns {@link GetContactReachabilityStatusCommandOutput}
 * @see {@link GetContactReachabilityStatusCommandInput} for command's `input` shape.
 * @see {@link GetContactReachabilityStatusCommandOutput} for command's `response` shape.
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
export class GetContactReachabilityStatusCommand extends $Command
  .classBuilder<
    GetContactReachabilityStatusCommandInput,
    GetContactReachabilityStatusCommandOutput,
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
  .s("Route53Domains_v20140515", "GetContactReachabilityStatus", {})
  .n("Route53DomainsClient", "GetContactReachabilityStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetContactReachabilityStatusCommand)
  .de(de_GetContactReachabilityStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContactReachabilityStatusRequest;
      output: GetContactReachabilityStatusResponse;
    };
    sdk: {
      input: GetContactReachabilityStatusCommandInput;
      output: GetContactReachabilityStatusCommandOutput;
    };
  };
}
