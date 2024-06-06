// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListGatewayRoutesInput, ListGatewayRoutesOutput } from "../models/models_0";
import { de_ListGatewayRoutesCommand, se_ListGatewayRoutesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGatewayRoutesCommand}.
 */
export interface ListGatewayRoutesCommandInput extends ListGatewayRoutesInput {}
/**
 * @public
 *
 * The output of {@link ListGatewayRoutesCommand}.
 */
export interface ListGatewayRoutesCommandOutput extends ListGatewayRoutesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of existing gateway routes that are associated to a virtual
 *          gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListGatewayRoutesCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListGatewayRoutesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const input = { // ListGatewayRoutesInput
 *   meshName: "STRING_VALUE", // required
 *   virtualGatewayName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new ListGatewayRoutesCommand(input);
 * const response = await client.send(command);
 * // { // ListGatewayRoutesOutput
 * //   gatewayRoutes: [ // GatewayRouteList // required
 * //     { // GatewayRouteRef
 * //       meshName: "STRING_VALUE", // required
 * //       gatewayRouteName: "STRING_VALUE", // required
 * //       virtualGatewayName: "STRING_VALUE", // required
 * //       meshOwner: "STRING_VALUE", // required
 * //       resourceOwner: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       version: Number("long"), // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGatewayRoutesCommandInput - {@link ListGatewayRoutesCommandInput}
 * @returns {@link ListGatewayRoutesCommandOutput}
 * @see {@link ListGatewayRoutesCommandInput} for command's `input` shape.
 * @see {@link ListGatewayRoutesCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request syntax was malformed. Check your request syntax and try again.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You don't have permissions to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the service.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for
 *          your account. For best results, use an increasing or variable sleep interval between
 *          requests.</p>
 *
 * @throws {@link AppMeshServiceException}
 * <p>Base exception class for all service exceptions from AppMesh service.</p>
 *
 * @public
 */
export class ListGatewayRoutesCommand extends $Command
  .classBuilder<
    ListGatewayRoutesCommandInput,
    ListGatewayRoutesCommandOutput,
    AppMeshClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppMeshClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AppMesh", "ListGatewayRoutes", {})
  .n("AppMeshClient", "ListGatewayRoutesCommand")
  .f(void 0, void 0)
  .ser(se_ListGatewayRoutesCommand)
  .de(de_ListGatewayRoutesCommand)
  .build() {}
