// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResolverRulesRequest, ListResolverRulesResponse } from "../models/models_0";
import { de_ListResolverRulesCommand, se_ListResolverRulesCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResolverRulesCommand}.
 */
export interface ListResolverRulesCommandInput extends ListResolverRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListResolverRulesCommand}.
 */
export interface ListResolverRulesCommandOutput extends ListResolverRulesResponse, __MetadataBearer {}

/**
 * <p>Lists the Resolver rules that were created using the current Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverRulesCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverRulesCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // ListResolverRulesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // Filters
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListResolverRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListResolverRulesResponse
 * //   NextToken: "STRING_VALUE",
 * //   MaxResults: Number("int"),
 * //   ResolverRules: [ // ResolverRules
 * //     { // ResolverRule
 * //       Id: "STRING_VALUE",
 * //       CreatorRequestId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE",
 * //       Status: "COMPLETE" || "DELETING" || "UPDATING" || "FAILED",
 * //       StatusMessage: "STRING_VALUE",
 * //       RuleType: "FORWARD" || "SYSTEM" || "RECURSIVE" || "DELEGATE",
 * //       Name: "STRING_VALUE",
 * //       TargetIps: [ // TargetList
 * //         { // TargetAddress
 * //           Ip: "STRING_VALUE",
 * //           Port: Number("int"),
 * //           Ipv6: "STRING_VALUE",
 * //           Protocol: "DoH" || "Do53" || "DoH-FIPS",
 * //           ServerNameIndication: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ResolverEndpointId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       ShareStatus: "NOT_SHARED" || "SHARED_WITH_ME" || "SHARED_BY_ME",
 * //       CreationTime: "STRING_VALUE",
 * //       ModificationTime: "STRING_VALUE",
 * //       DelegationRecord: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResolverRulesCommandInput - {@link ListResolverRulesCommandInput}
 * @returns {@link ListResolverRulesCommandOutput}
 * @see {@link ListResolverRulesCommandInput} for command's `input` shape.
 * @see {@link ListResolverRulesCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The value that you specified for <code>NextToken</code> in a <code>List</code> request isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 *
 * @public
 */
export class ListResolverRulesCommand extends $Command
  .classBuilder<
    ListResolverRulesCommandInput,
    ListResolverRulesCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Resolver", "ListResolverRules", {})
  .n("Route53ResolverClient", "ListResolverRulesCommand")
  .f(void 0, void 0)
  .ser(se_ListResolverRulesCommand)
  .de(de_ListResolverRulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResolverRulesRequest;
      output: ListResolverRulesResponse;
    };
    sdk: {
      input: ListResolverRulesCommandInput;
      output: ListResolverRulesCommandOutput;
    };
  };
}
