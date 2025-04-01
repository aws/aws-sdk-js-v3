// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetVpcLinkRequest, GetVpcLinkResponse } from "../models/models_0";
import { de_GetVpcLinkCommand, se_GetVpcLinkCommand } from "../protocols/Aws_restJson1";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApiGatewayV2", "GetVpcLink", {})
  .n("ApiGatewayV2Client", "GetVpcLinkCommand")
  .f(void 0, void 0)
  .ser(se_GetVpcLinkCommand)
  .de(de_GetVpcLinkCommand)
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
