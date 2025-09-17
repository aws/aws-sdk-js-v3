// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVpcLinkRequest, VpcLink } from "../models/models_0";
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
export interface CreateVpcLinkCommandOutput extends VpcLink, __MetadataBearer {}

/**
 * <p>Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateVpcLinkCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateVpcLinkCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // CreateVpcLinkRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   targetArns: [ // ListOfString // required
 *     "STRING_VALUE",
 *   ],
 *   tags: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateVpcLinkCommand(input);
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
 * @param CreateVpcLinkCommandInput - {@link CreateVpcLinkCommandInput}
 * @returns {@link CreateVpcLinkCommandOutput}
 * @see {@link CreateVpcLinkCommandInput} for command's `input` shape.
 * @see {@link CreateVpcLinkCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded the rate limit. Retry after the specified time period.</p>
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
export class CreateVpcLinkCommand extends $Command
  .classBuilder<
    CreateVpcLinkCommandInput,
    CreateVpcLinkCommandOutput,
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
  .s("BackplaneControlService", "CreateVpcLink", {})
  .n("APIGatewayClient", "CreateVpcLinkCommand")
  .f(void 0, void 0)
  .ser(se_CreateVpcLinkCommand)
  .de(de_CreateVpcLinkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpcLinkRequest;
      output: VpcLink;
    };
    sdk: {
      input: CreateVpcLinkCommandInput;
      output: CreateVpcLinkCommandOutput;
    };
  };
}
