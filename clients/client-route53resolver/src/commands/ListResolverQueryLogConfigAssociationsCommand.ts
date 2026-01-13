// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListResolverQueryLogConfigAssociationsRequest,
  ListResolverQueryLogConfigAssociationsResponse,
} from "../models/models_0";
import type {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient";
import { ListResolverQueryLogConfigAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResolverQueryLogConfigAssociationsCommand}.
 */
export interface ListResolverQueryLogConfigAssociationsCommandInput extends ListResolverQueryLogConfigAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListResolverQueryLogConfigAssociationsCommand}.
 */
export interface ListResolverQueryLogConfigAssociationsCommandOutput extends ListResolverQueryLogConfigAssociationsResponse, __MetadataBearer {}

/**
 * <p>Lists information about associations between Amazon VPCs and query logging configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverQueryLogConfigAssociationsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverQueryLogConfigAssociationsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // ListResolverQueryLogConfigAssociationsRequest
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
 *   SortBy: "STRING_VALUE",
 *   SortOrder: "ASCENDING" || "DESCENDING",
 * };
 * const command = new ListResolverQueryLogConfigAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListResolverQueryLogConfigAssociationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   TotalCount: Number("int"),
 * //   TotalFilteredCount: Number("int"),
 * //   ResolverQueryLogConfigAssociations: [ // ResolverQueryLogConfigAssociationList
 * //     { // ResolverQueryLogConfigAssociation
 * //       Id: "STRING_VALUE",
 * //       ResolverQueryLogConfigId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       Status: "CREATING" || "ACTIVE" || "ACTION_NEEDED" || "DELETING" || "FAILED",
 * //       Error: "NONE" || "DESTINATION_NOT_FOUND" || "ACCESS_DENIED" || "INTERNAL_SERVICE_ERROR",
 * //       ErrorMessage: "STRING_VALUE",
 * //       CreationTime: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResolverQueryLogConfigAssociationsCommandInput - {@link ListResolverQueryLogConfigAssociationsCommandInput}
 * @returns {@link ListResolverQueryLogConfigAssociationsCommandOutput}
 * @see {@link ListResolverQueryLogConfigAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListResolverQueryLogConfigAssociationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *          <p>This error can also be thrown when a customer has reached the 5120 character limit for a
 * 			resource policy for CloudWatch Logs.</p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters in this request are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request caused one or more limits to be exceeded.</p>
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
export class ListResolverQueryLogConfigAssociationsCommand extends $Command
  .classBuilder<
    ListResolverQueryLogConfigAssociationsCommandInput,
    ListResolverQueryLogConfigAssociationsCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "ListResolverQueryLogConfigAssociations", {})
  .n("Route53ResolverClient", "ListResolverQueryLogConfigAssociationsCommand")
  .sc(ListResolverQueryLogConfigAssociations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResolverQueryLogConfigAssociationsRequest;
      output: ListResolverQueryLogConfigAssociationsResponse;
    };
    sdk: {
      input: ListResolverQueryLogConfigAssociationsCommandInput;
      output: ListResolverQueryLogConfigAssociationsCommandOutput;
    };
  };
}
