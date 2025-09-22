// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePrivateGraphEndpointInput, DeletePrivateGraphEndpointOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { DeletePrivateGraphEndpoint } from "../schemas/schemas_6_Graph";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePrivateGraphEndpointCommand}.
 */
export interface DeletePrivateGraphEndpointCommandInput extends DeletePrivateGraphEndpointInput {}
/**
 * @public
 *
 * The output of {@link DeletePrivateGraphEndpointCommand}.
 */
export interface DeletePrivateGraphEndpointCommandOutput extends DeletePrivateGraphEndpointOutput, __MetadataBearer {}

/**
 * <p>Deletes a private graph endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, DeletePrivateGraphEndpointCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, DeletePrivateGraphEndpointCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // DeletePrivateGraphEndpointInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   vpcId: "STRING_VALUE", // required
 * };
 * const command = new DeletePrivateGraphEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeletePrivateGraphEndpointOutput
 * //   vpcId: "STRING_VALUE", // required
 * //   subnetIds: [ // SubnetIds // required
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "CREATING" || "AVAILABLE" || "DELETING" || "FAILED", // required
 * //   vpcEndpointId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeletePrivateGraphEndpointCommandInput - {@link DeletePrivateGraphEndpointCommandInput}
 * @returns {@link DeletePrivateGraphEndpointCommandOutput}
 * @see {@link DeletePrivateGraphEndpointCommandInput} for command's `input` shape.
 * @see {@link DeletePrivateGraphEndpointCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Raised when a conflict is encountered.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be located.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception was interrupted by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A resource could not be validated.</p>
 *
 * @throws {@link NeptuneGraphServiceException}
 * <p>Base exception class for all service exceptions from NeptuneGraph service.</p>
 *
 *
 * @public
 */
export class DeletePrivateGraphEndpointCommand extends $Command
  .classBuilder<
    DeletePrivateGraphEndpointCommandInput,
    DeletePrivateGraphEndpointCommandOutput,
    NeptuneGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ApiType: { type: "staticContextParams", value: `ControlPlane` },
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneGraphClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNeptuneGraph", "DeletePrivateGraphEndpoint", {})
  .n("NeptuneGraphClient", "DeletePrivateGraphEndpointCommand")
  .sc(DeletePrivateGraphEndpoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePrivateGraphEndpointInput;
      output: DeletePrivateGraphEndpointOutput;
    };
    sdk: {
      input: DeletePrivateGraphEndpointCommandInput;
      output: DeletePrivateGraphEndpointCommandOutput;
    };
  };
}
