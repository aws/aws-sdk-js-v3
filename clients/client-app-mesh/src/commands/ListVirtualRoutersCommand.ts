// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListVirtualRoutersInput, ListVirtualRoutersOutput } from "../models/models_0";
import { ListVirtualRouters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVirtualRoutersCommand}.
 */
export interface ListVirtualRoutersCommandInput extends ListVirtualRoutersInput {}
/**
 * @public
 *
 * The output of {@link ListVirtualRoutersCommand}.
 */
export interface ListVirtualRoutersCommandOutput extends ListVirtualRoutersOutput, __MetadataBearer {}

/**
 * <p>Returns a list of existing virtual routers in a service mesh.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListVirtualRoutersCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListVirtualRoutersCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * // import type { AppMeshClientConfig } from "@aws-sdk/client-app-mesh";
 * const config = {}; // type is AppMeshClientConfig
 * const client = new AppMeshClient(config);
 * const input = { // ListVirtualRoutersInput
 *   meshName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new ListVirtualRoutersCommand(input);
 * const response = await client.send(command);
 * // { // ListVirtualRoutersOutput
 * //   virtualRouters: [ // VirtualRouterList // required
 * //     { // VirtualRouterRef
 * //       meshName: "STRING_VALUE", // required
 * //       virtualRouterName: "STRING_VALUE", // required
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
 * @param ListVirtualRoutersCommandInput - {@link ListVirtualRoutersCommandInput}
 * @returns {@link ListVirtualRoutersCommandOutput}
 * @see {@link ListVirtualRoutersCommandInput} for command's `input` shape.
 * @see {@link ListVirtualRoutersCommandOutput} for command's `response` shape.
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
export class ListVirtualRoutersCommand extends $Command
  .classBuilder<
    ListVirtualRoutersCommandInput,
    ListVirtualRoutersCommandOutput,
    AppMeshClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppMeshClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppMesh", "ListVirtualRouters", {})
  .n("AppMeshClient", "ListVirtualRoutersCommand")
  .sc(ListVirtualRouters$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVirtualRoutersInput;
      output: ListVirtualRoutersOutput;
    };
    sdk: {
      input: ListVirtualRoutersCommandInput;
      output: ListVirtualRoutersCommandOutput;
    };
  };
}
