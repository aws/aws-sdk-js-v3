// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListResolverDnssecConfigsRequest, ListResolverDnssecConfigsResponse } from "../models/models_0";
import { de_ListResolverDnssecConfigsCommand, se_ListResolverDnssecConfigsCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResolverDnssecConfigsCommand}.
 */
export interface ListResolverDnssecConfigsCommandInput extends ListResolverDnssecConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListResolverDnssecConfigsCommand}.
 */
export interface ListResolverDnssecConfigsCommandOutput extends ListResolverDnssecConfigsResponse, __MetadataBearer {}

/**
 * <p>Lists the configurations for DNSSEC validation that are associated with the current Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverDnssecConfigsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverDnssecConfigsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // ListResolverDnssecConfigsRequest
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
 * const command = new ListResolverDnssecConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListResolverDnssecConfigsResponse
 * //   NextToken: "STRING_VALUE",
 * //   ResolverDnssecConfigs: [ // ResolverDnssecConfigList
 * //     { // ResolverDnssecConfig
 * //       Id: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ValidationStatus: "ENABLING" || "ENABLED" || "DISABLING" || "DISABLED" || "UPDATING_TO_USE_LOCAL_RESOURCE_SETTING" || "USE_LOCAL_RESOURCE_SETTING",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListResolverDnssecConfigsCommandInput - {@link ListResolverDnssecConfigsCommandInput}
 * @returns {@link ListResolverDnssecConfigsCommandOutput}
 * @see {@link ListResolverDnssecConfigsCommandInput} for command's `input` shape.
 * @see {@link ListResolverDnssecConfigsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListResolverDnssecConfigsCommand extends $Command
  .classBuilder<
    ListResolverDnssecConfigsCommandInput,
    ListResolverDnssecConfigsCommandOutput,
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
  .s("Route53Resolver", "ListResolverDnssecConfigs", {})
  .n("Route53ResolverClient", "ListResolverDnssecConfigsCommand")
  .f(void 0, void 0)
  .ser(se_ListResolverDnssecConfigsCommand)
  .de(de_ListResolverDnssecConfigsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResolverDnssecConfigsRequest;
      output: ListResolverDnssecConfigsResponse;
    };
    sdk: {
      input: ListResolverDnssecConfigsCommandInput;
      output: ListResolverDnssecConfigsCommandOutput;
    };
  };
}
