// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRoutingRuleRequest, GetRoutingRuleResponse } from "../models/models_0";
import { de_GetRoutingRuleCommand, se_GetRoutingRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRoutingRuleCommand}.
 */
export interface GetRoutingRuleCommandInput extends GetRoutingRuleRequest {}
/**
 * @public
 *
 * The output of {@link GetRoutingRuleCommand}.
 */
export interface GetRoutingRuleCommandOutput extends GetRoutingRuleResponse, __MetadataBearer {}

/**
 * <p>Gets a routing rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetRoutingRuleCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetRoutingRuleCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetRoutingRuleRequest
 *   DomainName: "STRING_VALUE", // required
 *   DomainNameId: "STRING_VALUE",
 *   RoutingRuleId: "STRING_VALUE", // required
 * };
 * const command = new GetRoutingRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetRoutingRuleResponse
 * //   Actions: [ // __listOfRoutingRuleAction
 * //     { // RoutingRuleAction
 * //       InvokeApi: { // RoutingRuleActionInvokeApi
 * //         ApiId: "STRING_VALUE", // required
 * //         Stage: "STRING_VALUE", // required
 * //         StripBasePath: true || false,
 * //       },
 * //     },
 * //   ],
 * //   Conditions: [ // __listOfRoutingRuleCondition
 * //     { // RoutingRuleCondition
 * //       MatchBasePaths: { // RoutingRuleMatchBasePaths
 * //         AnyOf: [ // __listOfSelectionKey // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       MatchHeaders: { // RoutingRuleMatchHeaders
 * //         AnyOf: [ // __listOfRoutingRuleMatchHeaderValue // required
 * //           { // RoutingRuleMatchHeaderValue
 * //             Header: "STRING_VALUE", // required
 * //             ValueGlob: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   Priority: Number("int"),
 * //   RoutingRuleArn: "STRING_VALUE",
 * //   RoutingRuleId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRoutingRuleCommandInput - {@link GetRoutingRuleCommandInput}
 * @returns {@link GetRoutingRuleCommandOutput}
 * @see {@link GetRoutingRuleCommandInput} for command's `input` shape.
 * @see {@link GetRoutingRuleCommandOutput} for command's `response` shape.
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
export class GetRoutingRuleCommand extends $Command
  .classBuilder<
    GetRoutingRuleCommandInput,
    GetRoutingRuleCommandOutput,
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
  .s("ApiGatewayV2", "GetRoutingRule", {})
  .n("ApiGatewayV2Client", "GetRoutingRuleCommand")
  .f(void 0, void 0)
  .ser(se_GetRoutingRuleCommand)
  .de(de_GetRoutingRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRoutingRuleRequest;
      output: GetRoutingRuleResponse;
    };
    sdk: {
      input: GetRoutingRuleCommandInput;
      output: GetRoutingRuleCommandOutput;
    };
  };
}
