// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateVirtualServiceInput, UpdateVirtualServiceOutput } from "../models/models_0";
import { UpdateVirtualService } from "../schemas/schemas_4_Service";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateVirtualServiceCommand}.
 */
export interface UpdateVirtualServiceCommandInput extends UpdateVirtualServiceInput {}
/**
 * @public
 *
 * The output of {@link UpdateVirtualServiceCommand}.
 */
export interface UpdateVirtualServiceCommandOutput extends UpdateVirtualServiceOutput, __MetadataBearer {}

/**
 * <p>Updates an existing virtual service in a specified service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, UpdateVirtualServiceCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, UpdateVirtualServiceCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * // import type { AppMeshClientConfig } from "@aws-sdk/client-app-mesh";
 * const config = {}; // type is AppMeshClientConfig
 * const client = new AppMeshClient(config);
 * const input = { // UpdateVirtualServiceInput
 *   virtualServiceName: "STRING_VALUE", // required
 *   meshName: "STRING_VALUE", // required
 *   spec: { // VirtualServiceSpec
 *     provider: { // VirtualServiceProvider Union: only one key present
 *       virtualNode: { // VirtualNodeServiceProvider
 *         virtualNodeName: "STRING_VALUE", // required
 *       },
 *       virtualRouter: { // VirtualRouterServiceProvider
 *         virtualRouterName: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new UpdateVirtualServiceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVirtualServiceOutput
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
 * @param UpdateVirtualServiceCommandInput - {@link UpdateVirtualServiceCommandInput}
 * @returns {@link UpdateVirtualServiceCommandOutput}
 * @see {@link UpdateVirtualServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateVirtualServiceCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request syntax was malformed. Check your request syntax and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request contains a client token that was used for a previous update resource call
 *          with different specifications. Try the request again with a new client token.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You don't have permissions to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service-quotas.html">Service
 *             Limits</a> in the <i>App Mesh User Guide</i>.</p>
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
 *
 * @public
 */
export class UpdateVirtualServiceCommand extends $Command
  .classBuilder<
    UpdateVirtualServiceCommandInput,
    UpdateVirtualServiceCommandOutput,
    AppMeshClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppMeshClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppMesh", "UpdateVirtualService", {})
  .n("AppMeshClient", "UpdateVirtualServiceCommand")
  .sc(UpdateVirtualService)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVirtualServiceInput;
      output: UpdateVirtualServiceOutput;
    };
    sdk: {
      input: UpdateVirtualServiceCommandInput;
      output: UpdateVirtualServiceCommandOutput;
    };
  };
}
