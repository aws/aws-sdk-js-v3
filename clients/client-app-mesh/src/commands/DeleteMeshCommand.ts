// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteMeshInput, DeleteMeshOutput } from "../models/models_0";
import { DeleteMesh$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMeshCommand}.
 */
export interface DeleteMeshCommandInput extends DeleteMeshInput {}
/**
 * @public
 *
 * The output of {@link DeleteMeshCommand}.
 */
export interface DeleteMeshCommandOutput extends DeleteMeshOutput, __MetadataBearer {}

/**
 * <p>Deletes an existing service mesh.</p>
 *          <p>You must delete all resources (virtual services, routes, virtual routers, and virtual
 *          nodes) in the service mesh before you can delete the mesh itself.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DeleteMeshCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DeleteMeshCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * // import type { AppMeshClientConfig } from "@aws-sdk/client-app-mesh";
 * const config = {}; // type is AppMeshClientConfig
 * const client = new AppMeshClient(config);
 * const input = { // DeleteMeshInput
 *   meshName: "STRING_VALUE", // required
 * };
 * const command = new DeleteMeshCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMeshOutput
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
 * @param DeleteMeshCommandInput - {@link DeleteMeshCommandInput}
 * @returns {@link DeleteMeshCommandOutput}
 * @see {@link DeleteMeshCommandInput} for command's `input` shape.
 * @see {@link DeleteMeshCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>You can't delete the specified resource because it's in use or required by another
 *          resource.</p>
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
 *
 * @public
 */
export class DeleteMeshCommand extends $Command
  .classBuilder<
    DeleteMeshCommandInput,
    DeleteMeshCommandOutput,
    AppMeshClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppMeshClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppMesh", "DeleteMesh", {})
  .n("AppMeshClient", "DeleteMeshCommand")
  .sc(DeleteMesh$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMeshInput;
      output: DeleteMeshOutput;
    };
    sdk: {
      input: DeleteMeshCommandInput;
      output: DeleteMeshCommandOutput;
    };
  };
}
