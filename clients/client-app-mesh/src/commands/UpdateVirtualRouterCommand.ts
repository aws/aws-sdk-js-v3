// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateVirtualRouterInput, UpdateVirtualRouterOutput } from "../models/models_0";
import { UpdateVirtualRouter } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateVirtualRouterCommand}.
 */
export interface UpdateVirtualRouterCommandInput extends UpdateVirtualRouterInput {}
/**
 * @public
 *
 * The output of {@link UpdateVirtualRouterCommand}.
 */
export interface UpdateVirtualRouterCommandOutput extends UpdateVirtualRouterOutput, __MetadataBearer {}

/**
 * <p>Updates an existing virtual router in a specified service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, UpdateVirtualRouterCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, UpdateVirtualRouterCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * // import type { AppMeshClientConfig } from "@aws-sdk/client-app-mesh";
 * const config = {}; // type is AppMeshClientConfig
 * const client = new AppMeshClient(config);
 * const input = { // UpdateVirtualRouterInput
 *   virtualRouterName: "STRING_VALUE", // required
 *   meshName: "STRING_VALUE", // required
 *   spec: { // VirtualRouterSpec
 *     listeners: [ // VirtualRouterListeners
 *       { // VirtualRouterListener
 *         portMapping: { // PortMapping
 *           port: Number("int"), // required
 *           protocol: "STRING_VALUE", // required
 *         },
 *       },
 *     ],
 *   },
 *   clientToken: "STRING_VALUE",
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new UpdateVirtualRouterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVirtualRouterOutput
 * //   virtualRouter: { // VirtualRouterData
 * //     meshName: "STRING_VALUE", // required
 * //     virtualRouterName: "STRING_VALUE", // required
 * //     spec: { // VirtualRouterSpec
 * //       listeners: [ // VirtualRouterListeners
 * //         { // VirtualRouterListener
 * //           portMapping: { // PortMapping
 * //             port: Number("int"), // required
 * //             protocol: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
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
 * //     status: { // VirtualRouterStatus
 * //       status: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateVirtualRouterCommandInput - {@link UpdateVirtualRouterCommandInput}
 * @returns {@link UpdateVirtualRouterCommandOutput}
 * @see {@link UpdateVirtualRouterCommandInput} for command's `input` shape.
 * @see {@link UpdateVirtualRouterCommandOutput} for command's `response` shape.
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
export class UpdateVirtualRouterCommand extends $Command
  .classBuilder<
    UpdateVirtualRouterCommandInput,
    UpdateVirtualRouterCommandOutput,
    AppMeshClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppMeshClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppMesh", "UpdateVirtualRouter", {})
  .n("AppMeshClient", "UpdateVirtualRouterCommand")
  .sc(UpdateVirtualRouter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVirtualRouterInput;
      output: UpdateVirtualRouterOutput;
    };
    sdk: {
      input: UpdateVirtualRouterCommandInput;
      output: UpdateVirtualRouterCommandOutput;
    };
  };
}
