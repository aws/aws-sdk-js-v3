// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateVpcLinkRequest, UpdateVpcLinkResponse } from "../models/models_0";
import { UpdateVpcLink } from "../schemas/schemas_5_Vpc";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateVpcLinkCommand}.
 */
export interface UpdateVpcLinkCommandInput extends UpdateVpcLinkRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVpcLinkCommand}.
 */
export interface UpdateVpcLinkCommandOutput extends UpdateVpcLinkResponse, __MetadataBearer {}

/**
 * <p>Updates a VPC link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateVpcLinkCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateVpcLinkCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // UpdateVpcLinkRequest
 *   Name: "STRING_VALUE",
 *   VpcLinkId: "STRING_VALUE", // required
 * };
 * const command = new UpdateVpcLinkCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVpcLinkResponse
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
 * @param UpdateVpcLinkCommandInput - {@link UpdateVpcLinkCommandInput}
 * @returns {@link UpdateVpcLinkCommandOutput}
 * @see {@link UpdateVpcLinkCommandInput} for command's `input` shape.
 * @see {@link UpdateVpcLinkCommandOutput} for command's `response` shape.
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
export class UpdateVpcLinkCommand extends $Command
  .classBuilder<
    UpdateVpcLinkCommandInput,
    UpdateVpcLinkCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "UpdateVpcLink", {})
  .n("ApiGatewayV2Client", "UpdateVpcLinkCommand")
  .sc(UpdateVpcLink)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVpcLinkRequest;
      output: UpdateVpcLinkResponse;
    };
    sdk: {
      input: UpdateVpcLinkCommandInput;
      output: UpdateVpcLinkCommandOutput;
    };
  };
}
