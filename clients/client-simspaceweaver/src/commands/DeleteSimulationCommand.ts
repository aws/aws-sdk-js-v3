// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSimulationInput, DeleteSimulationOutput } from "../models/models_0";
import { de_DeleteSimulationCommand, se_DeleteSimulationCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SimSpaceWeaverClientResolvedConfig } from "../SimSpaceWeaverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSimulationCommand}.
 */
export interface DeleteSimulationCommandInput extends DeleteSimulationInput {}
/**
 * @public
 *
 * The output of {@link DeleteSimulationCommand}.
 */
export interface DeleteSimulationCommandOutput extends DeleteSimulationOutput, __MetadataBearer {}

/**
 * <p>Deletes all SimSpace Weaver resources assigned to the given simulation.</p>
 *          <note>
 *             <p>Your simulation uses resources in other Amazon Web Services. This API operation doesn't delete
 *             resources in other Amazon Web Services.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimSpaceWeaverClient, DeleteSimulationCommand } from "@aws-sdk/client-simspaceweaver"; // ES Modules import
 * // const { SimSpaceWeaverClient, DeleteSimulationCommand } = require("@aws-sdk/client-simspaceweaver"); // CommonJS import
 * const client = new SimSpaceWeaverClient(config);
 * const input = { // DeleteSimulationInput
 *   Simulation: "STRING_VALUE", // required
 * };
 * const command = new DeleteSimulationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSimulationCommandInput - {@link DeleteSimulationCommandInput}
 * @returns {@link DeleteSimulationCommandOutput}
 * @see {@link DeleteSimulationCommandInput} for command's `input` shape.
 * @see {@link DeleteSimulationCommandOutput} for command's `response` shape.
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
export class DeleteSimulationCommand extends $Command
  .classBuilder<
    DeleteSimulationCommandInput,
    DeleteSimulationCommandOutput,
    SimSpaceWeaverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SimSpaceWeaverClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimSpaceWeaver", "DeleteSimulation", {})
  .n("SimSpaceWeaverClient", "DeleteSimulationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSimulationCommand)
  .de(de_DeleteSimulationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSimulationInput;
      output: {};
    };
    sdk: {
      input: DeleteSimulationCommandInput;
      output: DeleteSimulationCommandOutput;
    };
  };
}
