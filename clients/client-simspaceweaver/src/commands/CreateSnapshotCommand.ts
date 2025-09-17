// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSnapshotInput, CreateSnapshotOutput } from "../models/models_0";
import { de_CreateSnapshotCommand, se_CreateSnapshotCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SimSpaceWeaverClientResolvedConfig } from "../SimSpaceWeaverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandInput extends CreateSnapshotInput {}
/**
 * @public
 *
 * The output of {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandOutput extends CreateSnapshotOutput, __MetadataBearer {}

/**
 * <p>Creates a snapshot of the specified simulation.
 *          A snapshot is a file that contains simulation state data at a specific time.
 *          The state data saved in a snapshot includes entity data from the State Fabric,
 *          the simulation configuration specified in the schema, and the clock tick number.
 *          You can use the snapshot to initialize a new simulation.
 *          For more information about snapshots, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/working-with_snapshots.html">Snapshots</a>
 *    in the <i>SimSpace Weaver User Guide</i>.
 *          </p>
 *          <p>You specify a <code>Destination</code> when you create a snapshot.
 *          The <code>Destination</code> is the name of an Amazon S3 bucket and an optional
 *          <code>ObjectKeyPrefix</code>. The <code>ObjectKeyPrefix</code> is
 *          usually the name of a folder in the bucket. SimSpace Weaver creates a
 *          <code>snapshot</code> folder inside the <code>Destination</code> and
 *          places the snapshot file there.</p>
 *          <p>The snapshot file is an Amazon S3 object. It has an object key with the
 *          form: <code>
 *                <i>object-key-prefix</i>/snapshot/<i>simulation-name</i>-<i>YYMMdd</i>-<i>HHmm</i>-<i>ss</i>.zip</code>, where:
 *       </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>
 *                      <i>YY</i>
 *                   </code> is the 2-digit year</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <i>MM</i>
 *                   </code> is the 2-digit month</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <i>dd</i>
 *                   </code> is the 2-digit day of the month</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <i>HH</i>
 *                   </code> is the 2-digit hour (24-hour clock)</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <i>mm</i>
 *                   </code> is the 2-digit minutes</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <i>ss</i>
 *                   </code> is the 2-digit seconds</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimSpaceWeaverClient, CreateSnapshotCommand } from "@aws-sdk/client-simspaceweaver"; // ES Modules import
 * // const { SimSpaceWeaverClient, CreateSnapshotCommand } = require("@aws-sdk/client-simspaceweaver"); // CommonJS import
 * // import type { SimSpaceWeaverClientConfig } from "@aws-sdk/client-simspaceweaver";
 * const config = {}; // type is SimSpaceWeaverClientConfig
 * const client = new SimSpaceWeaverClient(config);
 * const input = { // CreateSnapshotInput
 *   Simulation: "STRING_VALUE", // required
 *   Destination: { // S3Destination
 *     BucketName: "STRING_VALUE", // required
 *     ObjectKeyPrefix: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateSnapshotCommandInput - {@link CreateSnapshotCommandInput}
 * @returns {@link CreateSnapshotCommandOutput}
 * @see {@link CreateSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCommandOutput} for command's `response` shape.
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
export class CreateSnapshotCommand extends $Command
  .classBuilder<
    CreateSnapshotCommandInput,
    CreateSnapshotCommandOutput,
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
  .s("SimSpaceWeaver", "CreateSnapshot", {})
  .n("SimSpaceWeaverClient", "CreateSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_CreateSnapshotCommand)
  .de(de_CreateSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSnapshotInput;
      output: {};
    };
    sdk: {
      input: CreateSnapshotCommandInput;
      output: CreateSnapshotCommandOutput;
    };
  };
}
