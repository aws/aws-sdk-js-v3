// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAppInput, DeleteAppOutput } from "../models/models_0";
import { DeleteApp$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  SimSpaceWeaverClientResolvedConfig,
} from "../SimSpaceWeaverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppCommand}.
 */
export interface DeleteAppCommandInput extends DeleteAppInput {}
/**
 * @public
 *
 * The output of {@link DeleteAppCommand}.
 */
export interface DeleteAppCommandOutput extends DeleteAppOutput, __MetadataBearer {}

/**
 * <p>Deletes the instance of the given custom app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimSpaceWeaverClient, DeleteAppCommand } from "@aws-sdk/client-simspaceweaver"; // ES Modules import
 * // const { SimSpaceWeaverClient, DeleteAppCommand } = require("@aws-sdk/client-simspaceweaver"); // CommonJS import
 * // import type { SimSpaceWeaverClientConfig } from "@aws-sdk/client-simspaceweaver";
 * const config = {}; // type is SimSpaceWeaverClientConfig
 * const client = new SimSpaceWeaverClient(config);
 * const input = { // DeleteAppInput
 *   Simulation: "STRING_VALUE", // required
 *   Domain: "STRING_VALUE", // required
 *   App: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppCommandInput - {@link DeleteAppCommandInput}
 * @returns {@link DeleteAppCommandOutput}
 * @see {@link DeleteAppCommandInput} for command's `input` shape.
 * @see {@link DeleteAppCommandOutput} for command's `response` shape.
 * @see {@link SimSpaceWeaverClientResolvedConfig | config} for SimSpaceWeaverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link SimSpaceWeaverServiceException}
 * <p>Base exception class for all service exceptions from SimSpaceWeaver service.</p>
 *
 *
 * @public
 */
export class DeleteAppCommand extends $Command
  .classBuilder<
    DeleteAppCommandInput,
    DeleteAppCommandOutput,
    SimSpaceWeaverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SimSpaceWeaverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimSpaceWeaver", "DeleteApp", {})
  .n("SimSpaceWeaverClient", "DeleteAppCommand")
  .sc(DeleteApp$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppInput;
      output: {};
    };
    sdk: {
      input: DeleteAppCommandInput;
      output: DeleteAppCommandOutput;
    };
  };
}
