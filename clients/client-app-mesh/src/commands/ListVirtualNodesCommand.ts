// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListVirtualNodesInput, ListVirtualNodesOutput } from "../models/models_0";
import { ListVirtualNodes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListVirtualNodesCommand}.
 */
export interface ListVirtualNodesCommandInput extends ListVirtualNodesInput {}
/**
 * @public
 *
 * The output of {@link ListVirtualNodesCommand}.
 */
export interface ListVirtualNodesCommandOutput extends ListVirtualNodesOutput, __MetadataBearer {}

/**
 * Returns a list of existing virtual nodes.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListVirtualNodesCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListVirtualNodesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * // import type { AppMeshClientConfig } from "@aws-sdk/client-app-mesh";
 * const config = {}; // type is AppMeshClientConfig
 * const client = new AppMeshClient(config);
 * const input = { // ListVirtualNodesInput
 *   meshName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new ListVirtualNodesCommand(input);
 * const response = await client.send(command);
 * // { // ListVirtualNodesOutput
 * //   virtualNodes: [ // VirtualNodeList // required
 * //     { // VirtualNodeRef
 * //       meshName: "STRING_VALUE", // required
 * //       virtualNodeName: "STRING_VALUE", // required
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
 * @param ListVirtualNodesCommandInput - {@link ListVirtualNodesCommandInput}
 * @returns {@link ListVirtualNodesCommandOutput}
 * @see {@link ListVirtualNodesCommandInput} for command's `input` shape.
 * @see {@link ListVirtualNodesCommandOutput} for command's `response` shape.
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
export class ListVirtualNodesCommand extends command<ListVirtualNodesCommandInput, ListVirtualNodesCommandOutput>(
  _ep0,
  _mw0,
  "ListVirtualNodes",
  ListVirtualNodes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVirtualNodesInput;
      output: ListVirtualNodesOutput;
    };
    sdk: {
      input: ListVirtualNodesCommandInput;
      output: ListVirtualNodesCommandOutput;
    };
  };
}
