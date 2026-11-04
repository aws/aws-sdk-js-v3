// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListVirtualGatewaysInput, ListVirtualGatewaysOutput } from "../models/models_0";
import { ListVirtualGateways$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListVirtualGatewaysCommand}.
 */
export interface ListVirtualGatewaysCommandInput extends ListVirtualGatewaysInput {}
/**
 * @public
 *
 * The output of {@link ListVirtualGatewaysCommand}.
 */
export interface ListVirtualGatewaysCommandOutput extends ListVirtualGatewaysOutput, __MetadataBearer {}

/**
 * Returns a list of existing virtual gateways in a service mesh.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListVirtualGatewaysCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListVirtualGatewaysCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * // import type { AppMeshClientConfig } from "@aws-sdk/client-app-mesh";
 * const config = {}; // type is AppMeshClientConfig
 * const client = new AppMeshClient(config);
 * const input = { // ListVirtualGatewaysInput
 *   meshName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new ListVirtualGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // ListVirtualGatewaysOutput
 * //   virtualGateways: [ // VirtualGatewayList // required
 * //     { // VirtualGatewayRef
 * //       meshName: "STRING_VALUE", // required
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
 * @param ListVirtualGatewaysCommandInput - {@link ListVirtualGatewaysCommandInput}
 * @returns {@link ListVirtualGatewaysCommandOutput}
 * @see {@link ListVirtualGatewaysCommandInput} for command's `input` shape.
 * @see {@link ListVirtualGatewaysCommandOutput} for command's `response` shape.
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
export class ListVirtualGatewaysCommand extends command<ListVirtualGatewaysCommandInput, ListVirtualGatewaysCommandOutput>(
  _ep0,
  _mw0,
  "ListVirtualGateways",
  ListVirtualGateways$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVirtualGatewaysInput;
      output: ListVirtualGatewaysOutput;
    };
    sdk: {
      input: ListVirtualGatewaysCommandInput;
      output: ListVirtualGatewaysCommandOutput;
    };
  };
}
