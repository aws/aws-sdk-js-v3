// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartSimulationInput, StartSimulationOutput } from "../models/models_0";
import { StartSimulation } from "../schemas/schemas_0";
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
 * The input for {@link StartSimulationCommand}.
 */
export interface StartSimulationCommandInput extends StartSimulationInput {}
/**
 * @public
 *
 * The output of {@link StartSimulationCommand}.
 */
export interface StartSimulationCommandOutput extends StartSimulationOutput, __MetadataBearer {}

/**
 * <p>Starts a simulation with the given name. You must choose to start your
 *          simulation from a schema or from a snapshot.
 *          For more information about the schema, see the <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/schema-reference.html">schema reference</a>
 *    in the <i>SimSpace Weaver User Guide</i>.
 *          For more information about snapshots, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/working-with_snapshots.html">Snapshots</a>
 *    in the <i>SimSpace Weaver User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimSpaceWeaverClient, StartSimulationCommand } from "@aws-sdk/client-simspaceweaver"; // ES Modules import
 * // const { SimSpaceWeaverClient, StartSimulationCommand } = require("@aws-sdk/client-simspaceweaver"); // CommonJS import
 * // import type { SimSpaceWeaverClientConfig } from "@aws-sdk/client-simspaceweaver";
 * const config = {}; // type is SimSpaceWeaverClientConfig
 * const client = new SimSpaceWeaverClient(config);
 * const input = { // StartSimulationInput
 *   ClientToken: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE", // required
 *   SchemaS3Location: { // S3Location
 *     BucketName: "STRING_VALUE", // required
 *     ObjectKey: "STRING_VALUE", // required
 *   },
 *   MaximumDuration: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   SnapshotS3Location: {
 *     BucketName: "STRING_VALUE", // required
 *     ObjectKey: "STRING_VALUE", // required
 *   },
 * };
 * const command = new StartSimulationCommand(input);
 * const response = await client.send(command);
 * // { // StartSimulationOutput
 * //   Arn: "STRING_VALUE",
 * //   ExecutionId: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartSimulationCommandInput - {@link StartSimulationCommandInput}
 * @returns {@link StartSimulationCommandOutput}
 * @see {@link StartSimulationCommandInput} for command's `input` shape.
 * @see {@link StartSimulationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
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
export class StartSimulationCommand extends $Command
  .classBuilder<
    StartSimulationCommandInput,
    StartSimulationCommandOutput,
    SimSpaceWeaverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SimSpaceWeaverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimSpaceWeaver", "StartSimulation", {})
  .n("SimSpaceWeaverClient", "StartSimulationCommand")
  .sc(StartSimulation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSimulationInput;
      output: StartSimulationOutput;
    };
    sdk: {
      input: StartSimulationCommandInput;
      output: StartSimulationCommandOutput;
    };
  };
}
