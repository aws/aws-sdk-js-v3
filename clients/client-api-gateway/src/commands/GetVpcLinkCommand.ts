// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetVpcLinkRequest, VpcLink } from "../models/models_0";
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
export interface GetVpcLinkCommandOutput extends VpcLink, __MetadataBearer {}

/**
 * <p>Gets a specified VPC link under the caller's account in a region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetVpcLinkCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetVpcLinkCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetVpcLinkRequest
 *   vpcLinkId: "STRING_VALUE", // required
 * };
 * const command = new GetVpcLinkCommand(input);
 * const response = await client.send(command);
 * // { // VpcLink
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   targetArns: [ // ListOfString
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "AVAILABLE" || "PENDING" || "DELETING" || "FAILED",
 * //   statusMessage: "STRING_VALUE",
 * //   tags: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVpcLinkCommandInput - {@link GetVpcLinkCommandInput}
 * @returns {@link GetVpcLinkCommandOutput}
 * @see {@link GetVpcLinkCommandInput} for command's `input` shape.
 * @see {@link GetVpcLinkCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 *
 * @public
 */
export class GetVpcLinkCommand extends $Command
  .classBuilder<
    GetVpcLinkCommandInput,
    GetVpcLinkCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "GetVpcLink", {})
  .n("APIGatewayClient", "GetVpcLinkCommand")
  .f(void 0, void 0)
  .ser(se_GetVpcLinkCommand)
  .de(de_GetVpcLinkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVpcLinkRequest;
      output: VpcLink;
    };
    sdk: {
      input: GetVpcLinkCommandInput;
      output: GetVpcLinkCommandOutput;
    };
  };
}
