// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartGraphInput, StartGraphOutput } from "../models/models_0";
import type { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { StartGraph } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartGraphCommand}.
 */
export interface StartGraphCommandInput extends StartGraphInput {}
/**
 * @public
 *
 * The output of {@link StartGraphCommand}.
 */
export interface StartGraphCommandOutput extends StartGraphOutput, __MetadataBearer {}

/**
 * <p>Starts the specific graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, StartGraphCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, StartGraphCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // StartGraphInput
 *   graphIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StartGraphCommand(input);
 * const response = await client.send(command);
 * // { // StartGraphOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: "CREATING" || "AVAILABLE" || "DELETING" || "RESETTING" || "UPDATING" || "SNAPSHOTTING" || "FAILED" || "IMPORTING" || "STARTING" || "STOPPING" || "STOPPED",
 * //   statusReason: "STRING_VALUE",
 * //   createTime: new Date("TIMESTAMP"),
 * //   provisionedMemory: Number("int"),
 * //   endpoint: "STRING_VALUE",
 * //   publicConnectivity: true || false,
 * //   vectorSearchConfiguration: { // VectorSearchConfiguration
 * //     dimension: Number("int"), // required
 * //   },
 * //   replicaCount: Number("int"),
 * //   kmsKeyIdentifier: "STRING_VALUE",
 * //   sourceSnapshotId: "STRING_VALUE",
 * //   deletionProtection: true || false,
 * //   buildNumber: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartGraphCommandInput - {@link StartGraphCommandInput}
 * @returns {@link StartGraphCommandOutput}
 * @see {@link StartGraphCommandInput} for command's `input` shape.
 * @see {@link StartGraphCommandOutput} for command's `response` shape.
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
export class StartGraphCommand extends $Command
  .classBuilder<
    StartGraphCommandInput,
    StartGraphCommandOutput,
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
  .s("AmazonNeptuneGraph", "StartGraph", {})
  .n("NeptuneGraphClient", "StartGraphCommand")
  .sc(StartGraph)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartGraphInput;
      output: StartGraphOutput;
    };
    sdk: {
      input: StartGraphCommandInput;
      output: StartGraphCommandOutput;
    };
  };
}
