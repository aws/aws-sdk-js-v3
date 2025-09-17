// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListOutpostResolversRequest, ListOutpostResolversResponse } from "../models/models_0";
import { de_ListOutpostResolversCommand, se_ListOutpostResolversCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOutpostResolversCommand}.
 */
export interface ListOutpostResolversCommandInput extends ListOutpostResolversRequest {}
/**
 * @public
 *
 * The output of {@link ListOutpostResolversCommand}.
 */
export interface ListOutpostResolversCommandOutput extends ListOutpostResolversResponse, __MetadataBearer {}

/**
 * <p>Lists all the Resolvers on Outposts that were created using the current Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListOutpostResolversCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListOutpostResolversCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // ListOutpostResolversRequest
 *   OutpostArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListOutpostResolversCommand(input);
 * const response = await client.send(command);
 * // { // ListOutpostResolversResponse
 * //   OutpostResolvers: [ // OutpostResolverList
 * //     { // OutpostResolver
 * //       Arn: "STRING_VALUE",
 * //       CreationTime: "STRING_VALUE",
 * //       ModificationTime: "STRING_VALUE",
 * //       CreatorRequestId: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       InstanceCount: Number("int"),
 * //       PreferredInstanceType: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING" || "ACTION_NEEDED" || "FAILED_CREATION" || "FAILED_DELETION",
 * //       StatusMessage: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOutpostResolversCommandInput - {@link ListOutpostResolversCommandInput}
 * @returns {@link ListOutpostResolversCommandOutput}
 * @see {@link ListOutpostResolversCommandInput} for command's `input` shape.
 * @see {@link ListOutpostResolversCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
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
 *
 * @public
 */
export class ListOutpostResolversCommand extends $Command
  .classBuilder<
    ListOutpostResolversCommandInput,
    ListOutpostResolversCommandOutput,
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
  .s("Route53Resolver", "ListOutpostResolvers", {})
  .n("Route53ResolverClient", "ListOutpostResolversCommand")
  .f(void 0, void 0)
  .ser(se_ListOutpostResolversCommand)
  .de(de_ListOutpostResolversCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOutpostResolversRequest;
      output: ListOutpostResolversResponse;
    };
    sdk: {
      input: ListOutpostResolversCommandInput;
      output: ListOutpostResolversCommandOutput;
    };
  };
}
