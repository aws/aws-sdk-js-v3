// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetPrivateGraphEndpointInput, GetPrivateGraphEndpointOutput } from "../models/models_0";
import type { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { GetPrivateGraphEndpoint } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPrivateGraphEndpointCommand}.
 */
export interface GetPrivateGraphEndpointCommandInput extends GetPrivateGraphEndpointInput {}
/**
 * @public
 *
 * The output of {@link GetPrivateGraphEndpointCommand}.
 */
export interface GetPrivateGraphEndpointCommandOutput extends GetPrivateGraphEndpointOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a specified private endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, GetPrivateGraphEndpointCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, GetPrivateGraphEndpointCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // GetPrivateGraphEndpointInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   vpcId: "STRING_VALUE", // required
 * };
 * const command = new GetPrivateGraphEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetPrivateGraphEndpointOutput
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
 * @param GetPrivateGraphEndpointCommandInput - {@link GetPrivateGraphEndpointCommandInput}
 * @returns {@link GetPrivateGraphEndpointCommandOutput}
 * @see {@link GetPrivateGraphEndpointCommandInput} for command's `input` shape.
 * @see {@link GetPrivateGraphEndpointCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
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
export class GetPrivateGraphEndpointCommand extends $Command
  .classBuilder<
    GetPrivateGraphEndpointCommandInput,
    GetPrivateGraphEndpointCommandOutput,
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
  .s("AmazonNeptuneGraph", "GetPrivateGraphEndpoint", {})
  .n("NeptuneGraphClient", "GetPrivateGraphEndpointCommand")
  .sc(GetPrivateGraphEndpoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPrivateGraphEndpointInput;
      output: GetPrivateGraphEndpointOutput;
    };
    sdk: {
      input: GetPrivateGraphEndpointCommandInput;
      output: GetPrivateGraphEndpointCommandOutput;
    };
  };
}
