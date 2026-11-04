// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGatewayRoutesInput, ListGatewayRoutesOutput } from "../models/models_0";
import { ListGatewayRoutes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of existing gateway routes that are associated to a virtual gateway.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListGatewayRoutesCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListGatewayRoutesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * // import type { AppMeshClientConfig } from "@aws-sdk/client-app-mesh";
 * const config = {}; // type is AppMeshClientConfig
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
 *
 * The request syntax was malformed. Check your request syntax and try again.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You don't have permissions to perform this action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified resource doesn't exist. Check your request syntax and try again.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed due to a temporary failure of the service.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The maximum request rate permitted by the App Mesh APIs has been exceeded for your account. For best results, use an increasing or variable sleep interval between requests.
 *
 * @throws {@link AppMeshServiceException}
 *
 * Base exception class for all service exceptions from AppMesh service.
 *
 * @public
 */
export class ListGatewayRoutesCommand extends command<ListGatewayRoutesCommandInput, ListGatewayRoutesCommandOutput>(
  _ep0,
  _mw0,
  "ListGatewayRoutes",
  ListGatewayRoutes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGatewayRoutesInput;
      output: ListGatewayRoutesOutput;
    };
    sdk: {
      input: ListGatewayRoutesCommandInput;
      output: ListGatewayRoutesCommandOutput;
    };
  };
}
