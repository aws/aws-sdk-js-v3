// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVpcLinkRequest, CreateVpcLinkResponse } from "../models/models_0";
import { de_CreateVpcLinkCommand, se_CreateVpcLinkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcLinkCommand}.
 */
export interface CreateVpcLinkCommandInput extends CreateVpcLinkRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcLinkCommand}.
 */
export interface CreateVpcLinkCommandOutput extends CreateVpcLinkResponse, __MetadataBearer {}

/**
 * <p>Creates a VPC link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateVpcLinkCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateVpcLinkCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ApiGatewayV2Client(config);
 * const input = { // CreateVpcLinkRequest
 *   Name: "STRING_VALUE", // required
 *   SecurityGroupIds: [ // SecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   SubnetIds: [ // SubnetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateVpcLinkCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcLinkResponse
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
 * @param CreateVpcLinkCommandInput - {@link CreateVpcLinkCommandInput}
 * @returns {@link CreateVpcLinkCommandOutput}
 * @see {@link CreateVpcLinkCommandInput} for command's `input` shape.
 * @see {@link CreateVpcLinkCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>A limit has been exceeded. See the accompanying error message for details.</p>
 *
 * @throws {@link ApiGatewayV2ServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayV2 service.</p>
 *
 * @public
 */
export class CreateVpcLinkCommand extends $Command
  .classBuilder<
    CreateVpcLinkCommandInput,
    CreateVpcLinkCommandOutput,
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
  .s("ApiGatewayV2", "CreateVpcLink", {})
  .n("ApiGatewayV2Client", "CreateVpcLinkCommand")
  .f(void 0, void 0)
  .ser(se_CreateVpcLinkCommand)
  .de(de_CreateVpcLinkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpcLinkRequest;
      output: CreateVpcLinkResponse;
    };
    sdk: {
      input: CreateVpcLinkCommandInput;
      output: CreateVpcLinkCommandOutput;
    };
  };
}
