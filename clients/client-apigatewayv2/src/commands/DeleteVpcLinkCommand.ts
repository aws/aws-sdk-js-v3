// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteVpcLinkRequest, DeleteVpcLinkResponse } from "../models/models_0";
import { DeleteVpcLink } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpcLinkCommand}.
 */
export interface DeleteVpcLinkCommandInput extends DeleteVpcLinkRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcLinkCommand}.
 */
export interface DeleteVpcLinkCommandOutput extends DeleteVpcLinkResponse, __MetadataBearer {}

/**
 * <p>Deletes a VPC link.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, DeleteVpcLinkCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, DeleteVpcLinkCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // DeleteVpcLinkRequest
 *   VpcLinkId: "STRING_VALUE", // required
 * };
 * const command = new DeleteVpcLinkCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVpcLinkCommandInput - {@link DeleteVpcLinkCommandInput}
 * @returns {@link DeleteVpcLinkCommandOutput}
 * @see {@link DeleteVpcLinkCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcLinkCommandOutput} for command's `response` shape.
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
export class DeleteVpcLinkCommand extends $Command
  .classBuilder<
    DeleteVpcLinkCommandInput,
    DeleteVpcLinkCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApiGatewayV2", "DeleteVpcLink", {})
  .n("ApiGatewayV2Client", "DeleteVpcLinkCommand")
  .sc(DeleteVpcLink)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpcLinkRequest;
      output: {};
    };
    sdk: {
      input: DeleteVpcLinkCommandInput;
      output: DeleteVpcLinkCommandOutput;
    };
  };
}
