// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRoutingRulesRequest, ListRoutingRulesResponse } from "../models/models_0";
import { de_ListRoutingRulesCommand, se_ListRoutingRulesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRoutingRulesCommand}.
 */
export interface ListRoutingRulesCommandInput extends ListRoutingRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListRoutingRulesCommand}.
 */
export interface ListRoutingRulesCommandOutput extends ListRoutingRulesResponse, __MetadataBearer {}

/**
 * <p>Lists routing rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, ListRoutingRulesCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, ListRoutingRulesCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // ListRoutingRulesRequest
 *   DomainName: "STRING_VALUE", // required
 *   DomainNameId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRoutingRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListRoutingRulesResponse
 * //   NextToken: "STRING_VALUE",
 * //   RoutingRules: [ // __listOfRoutingRule
 * //     { // RoutingRule
 * //       Actions: [ // __listOfRoutingRuleAction
 * //         { // RoutingRuleAction
 * //           InvokeApi: { // RoutingRuleActionInvokeApi
 * //             ApiId: "STRING_VALUE", // required
 * //             Stage: "STRING_VALUE", // required
 * //             StripBasePath: true || false,
 * //           },
 * //         },
 * //       ],
 * //       Conditions: [ // __listOfRoutingRuleCondition
 * //         { // RoutingRuleCondition
 * //           MatchBasePaths: { // RoutingRuleMatchBasePaths
 * //             AnyOf: [ // __listOfSelectionKey // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           MatchHeaders: { // RoutingRuleMatchHeaders
 * //             AnyOf: [ // __listOfRoutingRuleMatchHeaderValue // required
 * //               { // RoutingRuleMatchHeaderValue
 * //                 Header: "STRING_VALUE", // required
 * //                 ValueGlob: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       Priority: Number("int"),
 * //       RoutingRuleArn: "STRING_VALUE",
 * //       RoutingRuleId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRoutingRulesCommandInput - {@link ListRoutingRulesCommandInput}
 * @returns {@link ListRoutingRulesCommandOutput}
 * @see {@link ListRoutingRulesCommandInput} for command's `input` shape.
 * @see {@link ListRoutingRulesCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. See the message field for more information.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>A limit has been exceeded. See the accompanying error message for details.</p>
 *
 * @throws {@link ApiGatewayV2ServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayV2 service.</p>
 *
 *
 * @public
 */
export class ListRoutingRulesCommand extends $Command
  .classBuilder<
    ListRoutingRulesCommandInput,
    ListRoutingRulesCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApiGatewayV2", "ListRoutingRules", {})
  .n("ApiGatewayV2Client", "ListRoutingRulesCommand")
  .f(void 0, void 0)
  .ser(se_ListRoutingRulesCommand)
  .de(de_ListRoutingRulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRoutingRulesRequest;
      output: ListRoutingRulesResponse;
    };
    sdk: {
      input: ListRoutingRulesCommandInput;
      output: ListRoutingRulesCommandOutput;
    };
  };
}
