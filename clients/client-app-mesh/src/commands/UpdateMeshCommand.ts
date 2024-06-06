// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateMeshInput, UpdateMeshOutput } from "../models/models_0";
import { de_UpdateMeshCommand, se_UpdateMeshCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMeshCommand}.
 */
export interface UpdateMeshCommandInput extends UpdateMeshInput {}
/**
 * @public
 *
 * The output of {@link UpdateMeshCommand}.
 */
export interface UpdateMeshCommandOutput extends UpdateMeshOutput, __MetadataBearer {}

/**
 * <p>Updates an existing service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, UpdateMeshCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, UpdateMeshCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const input = { // UpdateMeshInput
 *   meshName: "STRING_VALUE", // required
 *   spec: { // MeshSpec
 *     egressFilter: { // EgressFilter
 *       type: "STRING_VALUE", // required
 *     },
 *     serviceDiscovery: { // MeshServiceDiscovery
 *       ipPreference: "STRING_VALUE",
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateMeshCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMeshOutput
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
 * @param UpdateMeshCommandInput - {@link UpdateMeshCommandInput}
 * @returns {@link UpdateMeshCommandOutput}
 * @see {@link UpdateMeshCommandInput} for command's `input` shape.
 * @see {@link UpdateMeshCommandOutput} for command's `response` shape.
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
export class UpdateMeshCommand extends $Command
  .classBuilder<
    UpdateMeshCommandInput,
    UpdateMeshCommandOutput,
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
  .s("AppMesh", "UpdateMesh", {})
  .n("AppMeshClient", "UpdateMeshCommand")
  .f(void 0, void 0)
  .ser(se_UpdateMeshCommand)
  .de(de_UpdateMeshCommand)
  .build() {}
