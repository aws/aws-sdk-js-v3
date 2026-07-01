// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResolverRulesRequest, ListResolverRulesResponse } from "../models/models_0";
import { ListResolverRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
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
export class ListResolverRulesCommand extends command<ListResolverRulesCommandInput, ListResolverRulesCommandOutput>(
  _ep0,
  _mw0,
  "ListResolverRules",
  ListResolverRules$
) {
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
