// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResolverConfigsRequest, ListResolverConfigsResponse } from "../models/models_0";
import { de_ListResolverConfigsCommand, se_ListResolverConfigsCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListResolverConfigsCommand}.
 */
export interface ListResolverConfigsCommandInput extends ListResolverConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListResolverConfigsCommand}.
 */
export interface ListResolverConfigsCommandOutput extends ListResolverConfigsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the Resolver configurations that you have defined.
 * 			Route 53 Resolver uses the configurations to manage DNS resolution behavior for your VPCs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverConfigsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverConfigsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // ListResolverConfigsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResolverConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListResolverConfigsResponse
 * //   NextToken: "STRING_VALUE",
 * //   ResolverConfigs: [ // ResolverConfigList
 * //     { // ResolverConfig
 * //       Id: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       AutodefinedReverse: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED" || "UPDATING_TO_USE_LOCAL_RESOURCE_SETTING" || "USE_LOCAL_RESOURCE_SETTING",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResolverConfigsCommandInput - {@link ListResolverConfigsCommandInput}
 * @returns {@link ListResolverConfigsCommandOutput}
 * @see {@link ListResolverConfigsCommandInput} for command's `input` shape.
 * @see {@link ListResolverConfigsCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>You have provided an invalid command. If you ran the <code>UpdateFirewallDomains</code> request. supported values are <code>ADD</code>,
 * 			<code>REMOVE</code>, or <code>REPLACE</code> a domain.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 * @public
 */
export class ListResolverConfigsCommand extends $Command
  .classBuilder<
    ListResolverConfigsCommandInput,
    ListResolverConfigsCommandOutput,
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
  .s("Route53Resolver", "ListResolverConfigs", {})
  .n("Route53ResolverClient", "ListResolverConfigsCommand")
  .f(void 0, void 0)
  .ser(se_ListResolverConfigsCommand)
  .de(de_ListResolverConfigsCommand)
  .build() {}
