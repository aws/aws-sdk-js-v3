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
 * Modifies the size, volume type, IOPS (input/output operations per second), or throughput of a volume. When you modify a volume, you must specify at least one of these parameters. You can modify a volume only after any previous modification for that volume has finished.
 *
 * To track the progress of a modification, use the Amazon EC2 [DescribeVolumesModifications](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVolumesModifications.html) operation. For more information, see [Monitor the progress of Amazon EBS volume modifications](https://docs.aws.amazon.com/ebs/latest/userguide/monitoring-volume-modifications.html) in the *Amazon EBS User Guide*.
 *
 * After you increase the size of a volume, you must extend the partition and file system to use the new storage capacity. For more information, see [Extend the file system after resizing an Amazon EBS volume](https://docs.aws.amazon.com/ebs/latest/userguide/recognize-expanded-volume-linux.html) in the *Amazon EBS User Guide*, which covers both [Linux](https://docs.aws.amazon.com/ebs/latest/userguide/recognize-expanded-volume-linux.html#extend-linux) and [Windows](https://docs.aws.amazon.com/ebs/latest/userguide/recognize-expanded-volume-linux.html#extend-windows) instances.
 *
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
 *
 * Indicates insufficient permissions to perform the requested action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Signals a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates an unexpected server-side error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates the requested resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Indicates that a service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates the request rate has exceeded limits.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates invalid input parameters in the request.
 *
 * @throws {@link VolumeModificationRateExceededException} (client fault)
 *
 * The volume has a previous modification that is still in progress, or has reached the limit of four modifications in a rolling 24-hour period. Wait for the current modification to finish, or wait until the time indicated in the error message, and then retry the request.
 *
 * @throws {@link WorkspacesInstancesServiceException}
 *
 * Base exception class for all service exceptions from WorkspacesInstances service.
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
