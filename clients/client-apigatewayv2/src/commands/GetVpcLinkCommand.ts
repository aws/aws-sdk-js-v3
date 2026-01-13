// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetVpcLinkRequest, GetVpcLinkResponse } from "../models/models_0";
import { GetVpcLink$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVpcLinkCommand}.
 */
export interface GetVpcLinkCommandInput extends GetVpcLinkRequest {}
/**
 * @public
 *
 * The output of {@link GetVpcLinkCommand}.
 */
export interface GetVpcLinkCommandOutput extends GetVpcLinkResponse, __MetadataBearer {}

/**
 * <p>Gets a VPC link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetVpcLinkCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetVpcLinkCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetVpcLinkRequest
 *   VpcLinkId: "STRING_VALUE", // required
 * };
 * const command = new GetVpcLinkCommand(input);
 * const response = await client.send(command);
 * // { // GetVpcLinkResponse
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   Name: "STRING_VALUE",
 * //   SecurityGroupIds: [ // SecurityGroupIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   SubnetIds: [ // SubnetIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   VpcLinkId: "STRING_VALUE",
 * //   VpcLinkStatus: "PENDING" || "AVAILABLE" || "DELETING" || "FAILED" || "INACTIVE",
 * //   VpcLinkStatusMessage: "STRING_VALUE",
 * //   VpcLinkVersion: "V2",
 * // };
 *
 * ```
 *
 * @param GetVpcLinkCommandInput - {@link GetVpcLinkCommandInput}
 * @returns {@link GetVpcLinkCommandOutput}
 * @see {@link GetVpcLinkCommandInput} for command's `input` shape.
 * @see {@link GetVpcLinkCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
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
export class GetVpcLinkCommand extends $Command
  .classBuilder<
    GetVpcLinkCommandInput,
    GetVpcLinkCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "GetVpcLink", {})
  .n("ApiGatewayV2Client", "GetVpcLinkCommand")
  .sc(GetVpcLink$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVpcLinkRequest;
      output: GetVpcLinkResponse;
    };
    sdk: {
      input: GetVpcLinkCommandInput;
      output: GetVpcLinkCommandOutput;
    };
  };
}
