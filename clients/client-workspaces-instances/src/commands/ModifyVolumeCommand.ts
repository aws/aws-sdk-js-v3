// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyVolumeRequest, ModifyVolumeResponse } from "../models/models_0";
import { ModifyVolume$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyVolumeCommand}.
 */
export interface ModifyVolumeCommandInput extends ModifyVolumeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVolumeCommand}.
 */
export interface ModifyVolumeCommandOutput extends ModifyVolumeResponse, __MetadataBearer {}

/**
 * <p>Modifies the size, volume type, IOPS (input/output operations per second), or throughput of a volume. When you modify a volume, you must specify at least one of these parameters. You can modify a volume only after any previous modification for that volume has finished.</p> <p>To track the progress of a modification, use the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumesModifications.html">DescribeVolumesModifications</a> operation. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/monitoring-volume-modifications.html">Monitor the progress of Amazon EBS volume modifications</a> in the <i>Amazon EBS User Guide</i>.</p> <p>After you increase the size of a volume, you must extend the partition and file system to use the new storage capacity. For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/recognize-expanded-volume-linux.html">Extend the file system after resizing an Amazon EBS volume</a> in the <i>Amazon EBS User Guide</i>, which covers both <a href="https://docs.aws.amazon.com/ebs/latest/userguide/recognize-expanded-volume-linux.html#extend-linux">Linux</a> and <a href="https://docs.aws.amazon.com/ebs/latest/userguide/recognize-expanded-volume-linux.html#extend-windows">Windows</a> instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkspacesInstancesClient, ModifyVolumeCommand } from "@aws-sdk/client-workspaces-instances"; // ES Modules import
 * // const { WorkspacesInstancesClient, ModifyVolumeCommand } = require("@aws-sdk/client-workspaces-instances"); // CommonJS import
 * // import type { WorkspacesInstancesClientConfig } from "@aws-sdk/client-workspaces-instances";
 * const config = {}; // type is WorkspacesInstancesClientConfig
 * const client = new WorkspacesInstancesClient(config);
 * const input = { // ModifyVolumeRequest
 *   VolumeId: "STRING_VALUE", // required
 *   SizeInGB: Number("int"),
 *   VolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 *   Iops: Number("int"),
 *   Throughput: Number("int"),
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new ModifyVolumeCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVolumeResponse
 * //   VolumeId: "STRING_VALUE",
 * //   TargetSize: Number("int"),
 * //   TargetVolumeType: "standard" || "io1" || "io2" || "gp2" || "sc1" || "st1" || "gp3",
 * //   TargetIops: Number("int"),
 * //   TargetThroughput: Number("int"),
 * // };
 *
 * ```
 *
 * @param ModifyVolumeCommandInput - {@link ModifyVolumeCommandInput}
 * @returns {@link ModifyVolumeCommandOutput}
 * @see {@link ModifyVolumeCommandInput} for command's `input` shape.
 * @see {@link ModifyVolumeCommandOutput} for command's `response` shape.
 * @see {@link WorkspacesInstancesClientResolvedConfig | config} for WorkspacesInstancesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Indicates insufficient permissions to perform the requested action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Signals a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates an unexpected server-side error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates the requested resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Indicates that a service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates the request rate has exceeded limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates invalid input parameters in the request.</p>
 *
 * @throws {@link VolumeModificationRateExceededException} (client fault)
 *  <p>The volume has a previous modification that is still in progress, or has reached the limit of four modifications in a rolling 24-hour period. Wait for the current modification to finish, or wait until the time indicated in the error message, and then retry the request.</p>
 *
 * @throws {@link WorkspacesInstancesServiceException}
 * <p>Base exception class for all service exceptions from WorkspacesInstances service.</p>
 *
 *
 * @public
 */
export class ModifyVolumeCommand extends command<ModifyVolumeCommandInput, ModifyVolumeCommandOutput>(
  _ep0,
  _mw0,
  "ModifyVolume",
  ModifyVolume$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVolumeRequest;
      output: ModifyVolumeResponse;
    };
    sdk: {
      input: ModifyVolumeCommandInput;
      output: ModifyVolumeCommandOutput;
    };
  };
}
