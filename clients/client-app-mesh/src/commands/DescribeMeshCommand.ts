// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeMeshInput, DescribeMeshOutput } from "../models/models_0";
import { DescribeMesh$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeMeshCommand}.
 */
export interface DescribeMeshCommandInput extends DescribeMeshInput {}
/**
 * @public
 *
 * The output of {@link DescribeMeshCommand}.
 */
export interface DescribeMeshCommandOutput extends DescribeMeshOutput, __MetadataBearer {}

/**
 * Describes an existing service mesh.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeMeshCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeMeshCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * // import type { AppMeshClientConfig } from "@aws-sdk/client-app-mesh";
 * const config = {}; // type is AppMeshClientConfig
 * const client = new AppMeshClient(config);
 * const input = { // DescribeMeshInput
 *   meshName: "STRING_VALUE", // required
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new DescribeMeshCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMeshOutput
 * //   mesh: { // MeshData
 * //     meshName: "STRING_VALUE", // required
 * //     spec: { // MeshSpec
 * //       egressFilter: { // EgressFilter
 * //         type: "STRING_VALUE", // required
 * //       },
 * //       serviceDiscovery: { // MeshServiceDiscovery
 * //         ipPreference: "STRING_VALUE",
 * //       },
 * //     },
 * //     metadata: { // ResourceMetadata
 * //       arn: "STRING_VALUE", // required
 * //       version: Number("long"), // required
 * //       uid: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       meshOwner: "STRING_VALUE", // required
 * //       resourceOwner: "STRING_VALUE", // required
 * //     },
 * //     status: { // MeshStatus
 * //       status: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeMeshCommandInput - {@link DescribeMeshCommandInput}
 * @returns {@link DescribeMeshCommandOutput}
 * @see {@link DescribeMeshCommandInput} for command's `input` shape.
 * @see {@link DescribeMeshCommandOutput} for command's `response` shape.
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
export class DescribeMeshCommand extends command<DescribeMeshCommandInput, DescribeMeshCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMesh",
  DescribeMesh$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMeshInput;
      output: DescribeMeshOutput;
    };
    sdk: {
      input: DescribeMeshCommandInput;
      output: DescribeMeshCommandOutput;
    };
  };
}
