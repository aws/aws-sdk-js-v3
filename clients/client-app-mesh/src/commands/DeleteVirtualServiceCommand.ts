// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteVirtualServiceInput, DeleteVirtualServiceOutput } from "../models/models_0";
import { DeleteVirtualService } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVirtualServiceCommand}.
 */
export interface DeleteVirtualServiceCommandInput extends DeleteVirtualServiceInput {}
/**
 * @public
 *
 * The output of {@link DeleteVirtualServiceCommand}.
 */
export interface DeleteVirtualServiceCommandOutput extends DeleteVirtualServiceOutput, __MetadataBearer {}

/**
 * <p>Deletes an existing virtual service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DeleteVirtualServiceCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DeleteVirtualServiceCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * // import type { AppMeshClientConfig } from "@aws-sdk/client-app-mesh";
 * const config = {}; // type is AppMeshClientConfig
 * const client = new AppMeshClient(config);
 * const input = { // DeleteVirtualServiceInput
 *   virtualServiceName: "STRING_VALUE", // required
 *   meshName: "STRING_VALUE", // required
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new DeleteVirtualServiceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVirtualServiceOutput
 * //   virtualService: { // VirtualServiceData
 * //     meshName: "STRING_VALUE", // required
 * //     virtualServiceName: "STRING_VALUE", // required
 * //     spec: { // VirtualServiceSpec
 * //       provider: { // VirtualServiceProvider Union: only one key present
 * //         virtualNode: { // VirtualNodeServiceProvider
 * //           virtualNodeName: "STRING_VALUE", // required
 * //         },
 * //         virtualRouter: { // VirtualRouterServiceProvider
 * //           virtualRouterName: "STRING_VALUE", // required
 * //         },
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
 * //     status: { // VirtualServiceStatus
 * //       status: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteVirtualServiceCommandInput - {@link DeleteVirtualServiceCommandInput}
 * @returns {@link DeleteVirtualServiceCommandOutput}
 * @see {@link DeleteVirtualServiceCommandInput} for command's `input` shape.
 * @see {@link DeleteVirtualServiceCommandOutput} for command's `response` shape.
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
export class DeleteVirtualServiceCommand extends $Command
  .classBuilder<
    DeleteVirtualServiceCommandInput,
    DeleteVirtualServiceCommandOutput,
    AppMeshClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppMeshClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppMesh", "DeleteVirtualService", {})
  .n("AppMeshClient", "DeleteVirtualServiceCommand")
  .sc(DeleteVirtualService)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVirtualServiceInput;
      output: DeleteVirtualServiceOutput;
    };
    sdk: {
      input: DeleteVirtualServiceCommandInput;
      output: DeleteVirtualServiceCommandOutput;
    };
  };
}
