// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResolverRuleAssociationsRequest, ListResolverRuleAssociationsResponse } from "../models/models_0";
import { ListResolverRuleAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResolverRuleAssociationsCommand}.
 */
export interface ListResolverRuleAssociationsCommandInput extends ListResolverRuleAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListResolverRuleAssociationsCommand}.
 */
export interface ListResolverRuleAssociationsCommandOutput extends ListResolverRuleAssociationsResponse, __MetadataBearer {}

/**
 * <p>Lists the associations that were created between Resolver rules and VPCs using the current Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverRuleAssociationsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverRuleAssociationsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // ListResolverRuleAssociationsRequest
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
 * const command = new ListResolverRuleAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListResolverRuleAssociationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   MaxResults: Number("int"),
 * //   ResolverRuleAssociations: [ // ResolverRuleAssociations
 * //     { // ResolverRuleAssociation
 * //       Id: "STRING_VALUE",
 * //       ResolverRuleId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       VPCId: "STRING_VALUE",
 * //       Status: "CREATING" || "COMPLETE" || "DELETING" || "FAILED" || "OVERRIDDEN",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResolverRuleAssociationsCommandInput - {@link ListResolverRuleAssociationsCommandInput}
 * @returns {@link ListResolverRuleAssociationsCommandOutput}
 * @see {@link ListResolverRuleAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListResolverRuleAssociationsCommandOutput} for command's `response` shape.
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
export class ListResolverRuleAssociationsCommand extends command<ListResolverRuleAssociationsCommandInput, ListResolverRuleAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListResolverRuleAssociations",
  ListResolverRuleAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResolverRuleAssociationsRequest;
      output: ListResolverRuleAssociationsResponse;
    };
    sdk: {
      input: ListResolverRuleAssociationsCommandInput;
      output: ListResolverRuleAssociationsCommandOutput;
    };
  };
}
