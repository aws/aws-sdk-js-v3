// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetGraphSnapshotInput, GetGraphSnapshotOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { GetGraphSnapshot } from "../schemas/schemas_8_Graph";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGraphSnapshotCommand}.
 */
export interface GetGraphSnapshotCommandInput extends GetGraphSnapshotInput {}
/**
 * @public
 *
 * The output of {@link GetGraphSnapshotCommand}.
 */
export interface GetGraphSnapshotCommandOutput extends GetGraphSnapshotOutput, __MetadataBearer {}

/**
 * <p>Retrieves a specified graph snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, GetGraphSnapshotCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, GetGraphSnapshotCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // GetGraphSnapshotInput
 *   snapshotIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetGraphSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // GetGraphSnapshotOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   sourceGraphId: "STRING_VALUE",
 * //   snapshotCreateTime: new Date("TIMESTAMP"),
 * //   status: "CREATING" || "AVAILABLE" || "DELETING" || "FAILED",
 * //   kmsKeyIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGraphSnapshotCommandInput - {@link GetGraphSnapshotCommandInput}
 * @returns {@link GetGraphSnapshotCommandOutput}
 * @see {@link GetGraphSnapshotCommandInput} for command's `input` shape.
 * @see {@link GetGraphSnapshotCommandOutput} for command's `response` shape.
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
export class GetGraphSnapshotCommand extends $Command
  .classBuilder<
    GetGraphSnapshotCommandInput,
    GetGraphSnapshotCommandOutput,
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
  .s("AmazonNeptuneGraph", "GetGraphSnapshot", {})
  .n("NeptuneGraphClient", "GetGraphSnapshotCommand")
  .sc(GetGraphSnapshot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGraphSnapshotInput;
      output: GetGraphSnapshotOutput;
    };
    sdk: {
      input: GetGraphSnapshotCommandInput;
      output: GetGraphSnapshotCommandOutput;
    };
  };
}
