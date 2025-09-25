// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListMeshesInput, ListMeshesOutput } from "../models/models_0";
import { ListMeshes } from "../schemas/schemas_9_ListMeshes";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMeshesCommand}.
 */
export interface ListMeshesCommandInput extends ListMeshesInput {}
/**
 * @public
 *
 * The output of {@link ListMeshesCommand}.
 */
export interface ListMeshesCommandOutput extends ListMeshesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of existing service meshes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListMeshesCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListMeshesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * // import type { AppMeshClientConfig } from "@aws-sdk/client-app-mesh";
 * const config = {}; // type is AppMeshClientConfig
 * const client = new AppMeshClient(config);
 * const input = { // ListMeshesInput
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new ListMeshesCommand(input);
 * const response = await client.send(command);
 * // { // ListMeshesOutput
 * //   meshes: [ // MeshList // required
 * //     { // MeshRef
 * //       meshName: "STRING_VALUE", // required
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
 * @param ListMeshesCommandInput - {@link ListMeshesCommandInput}
 * @returns {@link ListMeshesCommandOutput}
 * @see {@link ListMeshesCommandInput} for command's `input` shape.
 * @see {@link ListMeshesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListMeshesCommand extends $Command
  .classBuilder<
    ListMeshesCommandInput,
    ListMeshesCommandOutput,
    AppMeshClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppMeshClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppMesh", "ListMeshes", {})
  .n("AppMeshClient", "ListMeshesCommand")
  .sc(ListMeshes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMeshesInput;
      output: ListMeshesOutput;
    };
    sdk: {
      input: ListMeshesCommandInput;
      output: ListMeshesCommandOutput;
    };
  };
}
