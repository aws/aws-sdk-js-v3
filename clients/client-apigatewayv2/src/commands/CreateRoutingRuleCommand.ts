// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRoutingRuleRequest, CreateRoutingRuleResponse } from "../models/models_0";
import { de_CreateRoutingRuleCommand, se_CreateRoutingRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRoutingRuleCommand}.
 */
export interface CreateRoutingRuleCommandInput extends CreateRoutingRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateRoutingRuleCommand}.
 */
export interface CreateRoutingRuleCommandOutput extends CreateRoutingRuleResponse, __MetadataBearer {}

/**
 * <p>Creates a RoutingRule</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateRoutingRuleCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateRoutingRuleCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // CreateRoutingRuleRequest
 *   Actions: [ // __listOfRoutingRuleAction // required
 *     { // RoutingRuleAction
 *       InvokeApi: { // RoutingRuleActionInvokeApi
 *         ApiId: "STRING_VALUE", // required
 *         Stage: "STRING_VALUE", // required
 *         StripBasePath: true || false,
 *       },
 *     },
 *   ],
 *   Conditions: [ // __listOfRoutingRuleCondition // required
 *     { // RoutingRuleCondition
 *       MatchBasePaths: { // RoutingRuleMatchBasePaths
 *         AnyOf: [ // __listOfSelectionKey // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       MatchHeaders: { // RoutingRuleMatchHeaders
 *         AnyOf: [ // __listOfRoutingRuleMatchHeaderValue // required
 *           { // RoutingRuleMatchHeaderValue
 *             Header: "STRING_VALUE", // required
 *             ValueGlob: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   ],
 *   DomainName: "STRING_VALUE", // required
 *   DomainNameId: "STRING_VALUE",
 *   Priority: Number("int"), // required
 * };
 * const command = new CreateRoutingRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateRoutingRuleResponse
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
 * @param CreateRoutingRuleCommandInput - {@link CreateRoutingRuleCommandInput}
 * @returns {@link CreateRoutingRuleCommandOutput}
 * @see {@link CreateRoutingRuleCommandInput} for command's `input` shape.
 * @see {@link CreateRoutingRuleCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
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
export class CreateRoutingRuleCommand extends $Command
  .classBuilder<
    CreateRoutingRuleCommandInput,
    CreateRoutingRuleCommandOutput,
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
  .s("ApiGatewayV2", "CreateRoutingRule", {})
  .n("ApiGatewayV2Client", "CreateRoutingRuleCommand")
  .f(void 0, void 0)
  .ser(se_CreateRoutingRuleCommand)
  .de(de_CreateRoutingRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRoutingRuleRequest;
      output: CreateRoutingRuleResponse;
    };
    sdk: {
      input: CreateRoutingRuleCommandInput;
      output: CreateRoutingRuleCommandOutput;
    };
  };
}
