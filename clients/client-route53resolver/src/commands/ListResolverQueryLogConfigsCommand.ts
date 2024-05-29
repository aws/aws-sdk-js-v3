// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResolverQueryLogConfigsRequest, ListResolverQueryLogConfigsResponse } from "../models/models_0";
import { de_ListResolverQueryLogConfigsCommand, se_ListResolverQueryLogConfigsCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListResolverQueryLogConfigsCommand}.
 */
export interface ListResolverQueryLogConfigsCommandInput extends ListResolverQueryLogConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListResolverQueryLogConfigsCommand}.
 */
export interface ListResolverQueryLogConfigsCommandOutput
  extends ListResolverQueryLogConfigsResponse,
    __MetadataBearer {}

/**
 * <p>Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save
 * 			DNS query logs and specifies the VPCs that you want to log queries for.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverQueryLogConfigsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverQueryLogConfigsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // ListResolverQueryLogConfigsRequest
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
 * const command = new ListResolverQueryLogConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListResolverQueryLogConfigsResponse
 * //   NextToken: "STRING_VALUE",
 * //   TotalCount: Number("int"),
 * //   TotalFilteredCount: Number("int"),
 * //   ResolverQueryLogConfigs: [ // ResolverQueryLogConfigList
 * //     { // ResolverQueryLogConfig
 * //       Id: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Status: "CREATING" || "CREATED" || "DELETING" || "FAILED",
 * //       ShareStatus: "NOT_SHARED" || "SHARED_WITH_ME" || "SHARED_BY_ME",
 * //       AssociationCount: Number("int"),
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       DestinationArn: "STRING_VALUE",
 * //       CreatorRequestId: "STRING_VALUE",
 * //       CreationTime: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResolverQueryLogConfigsCommandInput - {@link ListResolverQueryLogConfigsCommandInput}
 * @returns {@link ListResolverQueryLogConfigsCommandOutput}
 * @see {@link ListResolverQueryLogConfigsCommandInput} for command's `input` shape.
 * @see {@link ListResolverQueryLogConfigsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListResolverQueryLogConfigsCommand extends $Command
  .classBuilder<
    ListResolverQueryLogConfigsCommandInput,
    ListResolverQueryLogConfigsCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Resolver", "ListResolverQueryLogConfigs", {})
  .n("Route53ResolverClient", "ListResolverQueryLogConfigsCommand")
  .f(void 0, void 0)
  .ser(se_ListResolverQueryLogConfigsCommand)
  .de(de_ListResolverQueryLogConfigsCommand)
  .build() {}
