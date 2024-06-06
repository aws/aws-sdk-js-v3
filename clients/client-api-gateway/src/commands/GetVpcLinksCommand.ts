// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetVpcLinksRequest, VpcLinks } from "../models/models_0";
import { de_GetVpcLinksCommand, se_GetVpcLinksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVpcLinksCommand}.
 */
export interface GetVpcLinksCommandInput extends GetVpcLinksRequest {}
/**
 * @public
 *
 * The output of {@link GetVpcLinksCommand}.
 */
export interface GetVpcLinksCommandOutput extends VpcLinks, __MetadataBearer {}

/**
 * <p>Gets the VpcLinks collection under the caller's account in a selected region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetVpcLinksCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetVpcLinksCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetVpcLinksRequest
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new GetVpcLinksCommand(input);
 * const response = await client.send(command);
 * // { // VpcLinks
 * //   items: [ // ListOfVpcLink
 * //     { // VpcLink
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       targetArns: [ // ListOfString
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "AVAILABLE" || "PENDING" || "DELETING" || "FAILED",
 * //       statusMessage: "STRING_VALUE",
 * //       tags: { // MapOfStringToString
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetVpcLinksCommandInput - {@link GetVpcLinksCommandInput}
 * @returns {@link GetVpcLinksCommandOutput}
 * @see {@link GetVpcLinksCommandInput} for command's `input` shape.
 * @see {@link GetVpcLinksCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetVpcLinksCommand extends $Command
  .classBuilder<
    GetVpcLinksCommandInput,
    GetVpcLinksCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "GetVpcLinks", {})
  .n("APIGatewayClient", "GetVpcLinksCommand")
  .f(void 0, void 0)
  .ser(se_GetVpcLinksCommand)
  .de(de_GetVpcLinksCommand)
  .build() {}
