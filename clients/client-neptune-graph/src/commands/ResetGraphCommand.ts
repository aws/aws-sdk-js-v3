// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ResetGraphInput, ResetGraphOutput } from "../models/models_0";
import type { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { ResetGraph } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetGraphCommand}.
 */
export interface ResetGraphCommandInput extends ResetGraphInput {}
/**
 * @public
 *
 * The output of {@link ResetGraphCommand}.
 */
export interface ResetGraphCommandOutput extends ResetGraphOutput, __MetadataBearer {}

/**
 * <p>Empties the data from a specified Neptune Analytics graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, ResetGraphCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, ResetGraphCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // ResetGraphInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   skipSnapshot: true || false, // required
 * };
 * const command = new ResetGraphCommand(input);
 * const response = await client.send(command);
 * // { // ResetGraphOutput
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
 * @param ResetGraphCommandInput - {@link ResetGraphCommandInput}
 * @returns {@link ResetGraphCommandOutput}
 * @see {@link ResetGraphCommandInput} for command's `input` shape.
 * @see {@link ResetGraphCommandOutput} for command's `response` shape.
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
export class ResetGraphCommand extends $Command
  .classBuilder<
    ResetGraphCommandInput,
    ResetGraphCommandOutput,
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
  .s("AmazonNeptuneGraph", "ResetGraph", {})
  .n("NeptuneGraphClient", "ResetGraphCommand")
  .sc(ResetGraph)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetGraphInput;
      output: ResetGraphOutput;
    };
    sdk: {
      input: ResetGraphCommandInput;
      output: ResetGraphCommandOutput;
    };
  };
}
