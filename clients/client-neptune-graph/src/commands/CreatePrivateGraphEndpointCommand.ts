// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePrivateGraphEndpointInput, CreatePrivateGraphEndpointOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_CreatePrivateGraphEndpointCommand, se_CreatePrivateGraphEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePrivateGraphEndpointCommand}.
 */
export interface CreatePrivateGraphEndpointCommandInput extends CreatePrivateGraphEndpointInput {}
/**
 * @public
 *
 * The output of {@link CreatePrivateGraphEndpointCommand}.
 */
export interface CreatePrivateGraphEndpointCommandOutput extends CreatePrivateGraphEndpointOutput, __MetadataBearer {}

/**
 * <p>Create a private graph endpoint to allow private access from to the graph from within a VPC. You can attach security groups to the private graph endpoint.</p> <note> <p>VPC endpoint charges apply.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, CreatePrivateGraphEndpointCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, CreatePrivateGraphEndpointCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // CreatePrivateGraphEndpointInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   vpcId: "STRING_VALUE",
 *   subnetIds: [ // SubnetIds
 *     "STRING_VALUE",
 *   ],
 *   vpcSecurityGroupIds: [ // SecurityGroupIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreatePrivateGraphEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreatePrivateGraphEndpointOutput
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
 * @param CreatePrivateGraphEndpointCommandInput - {@link CreatePrivateGraphEndpointCommandInput}
 * @returns {@link CreatePrivateGraphEndpointCommandOutput}
 * @see {@link CreatePrivateGraphEndpointCommandInput} for command's `input` shape.
 * @see {@link CreatePrivateGraphEndpointCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota was exceeded.</p>
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
export class CreatePrivateGraphEndpointCommand extends $Command
  .classBuilder<
    CreatePrivateGraphEndpointCommandInput,
    CreatePrivateGraphEndpointCommandOutput,
    NeptuneGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ApiType: { type: "staticContextParams", value: `ControlPlane` },
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonNeptuneGraph", "CreatePrivateGraphEndpoint", {})
  .n("NeptuneGraphClient", "CreatePrivateGraphEndpointCommand")
  .f(void 0, void 0)
  .ser(se_CreatePrivateGraphEndpointCommand)
  .de(de_CreatePrivateGraphEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePrivateGraphEndpointInput;
      output: CreatePrivateGraphEndpointOutput;
    };
    sdk: {
      input: CreatePrivateGraphEndpointCommandInput;
      output: CreatePrivateGraphEndpointCommandOutput;
    };
  };
}
