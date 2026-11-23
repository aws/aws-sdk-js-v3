// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSnapshotPolicyRequest, CreateSnapshotPolicyResponse } from "../models/models_0";
import { CreateSnapshotPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSnapshotPolicyCommand}.
 */
export interface CreateSnapshotPolicyCommandInput extends CreateSnapshotPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateSnapshotPolicyCommand}.
 */
export interface CreateSnapshotPolicyCommandOutput extends CreateSnapshotPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates a snapshot policy for an Amazon FSx for NetApp ONTAP file system or storage
 *             virtual machine (SVM). A snapshot policy defines the schedules on which ONTAP
 *             automatically creates snapshots of the volumes that use the policy, and the maximum
 *             number of snapshots to retain for each schedule.</p>
 *          <p>The <code>CreateSnapshotPolicy</code> operation returns while the snapshot policy's
 *             lifecycle state is still <code>CREATING</code>. You can check the snapshot policy
 *             creation status by calling the DescribeSnapshotPolicies operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateSnapshotPolicyCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateSnapshotPolicyCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // CreateSnapshotPolicyRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   FileSystemId: "STRING_VALUE",
 *   StorageVirtualMachineId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Enabled: true || false,
 *   Schedules: [ // SnapshotPolicyScheduleList // required
 *     { // SnapshotPolicySchedule
 *       Name: "STRING_VALUE", // required
 *       Count: Number("int"), // required
 *       Prefix: "STRING_VALUE",
 *       SnapmirrorLabel: "STRING_VALUE",
 *       RetentionPeriod: { // SnapshotPolicyRetentionPeriod
 *         Type: "SECONDS" || "MINUTES" || "HOURS" || "DAYS" || "MONTHS" || "YEARS" || "INFINITE", // required
 *         Value: Number("int"),
 *       },
 *     },
 *   ],
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSnapshotPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateSnapshotPolicyResponse
 * //   SnapshotPolicy: { // SnapshotPolicy
 * //     ResourceARN: "STRING_VALUE",
 * //     SnapshotPolicyId: "STRING_VALUE",
 * //     FileSystemId: "STRING_VALUE",
 * //     StorageVirtualMachineId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     Schedules: [ // SnapshotPolicyScheduleList
 * //       { // SnapshotPolicySchedule
 * //         Name: "STRING_VALUE", // required
 * //         Count: Number("int"), // required
 * //         Prefix: "STRING_VALUE",
 * //         SnapmirrorLabel: "STRING_VALUE",
 * //         RetentionPeriod: { // SnapshotPolicyRetentionPeriod
 * //           Type: "SECONDS" || "MINUTES" || "HOURS" || "DAYS" || "MONTHS" || "YEARS" || "INFINITE", // required
 * //           Value: Number("int"),
 * //         },
 * //       },
 * //     ],
 * //     Scope: "FILESYSTEM" || "SVM",
 * //     Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED",
 * //     UUID: "STRING_VALUE",
 * //     LifecycleTransitionReason: { // LifecycleTransitionReason
 * //       Message: "STRING_VALUE",
 * //       OntapError: { // OntapError
 * //         Message: "STRING_VALUE",
 * //         Code: "STRING_VALUE",
 * //       },
 * //     },
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSnapshotPolicyCommandInput - {@link CreateSnapshotPolicyCommandInput}
 * @returns {@link CreateSnapshotPolicyCommandOutput}
 * @see {@link CreateSnapshotPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotPolicyCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 * @throws {@link StorageVirtualMachineNotFound} (client fault)
 *  <p>No FSx for ONTAP SVMs were found based upon the supplied parameters.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class CreateSnapshotPolicyCommand extends command<CreateSnapshotPolicyCommandInput, CreateSnapshotPolicyCommandOutput>(
  _ep0,
  _mw0,
  "CreateSnapshotPolicy",
  CreateSnapshotPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSnapshotPolicyRequest;
      output: CreateSnapshotPolicyResponse;
    };
    sdk: {
      input: CreateSnapshotPolicyCommandInput;
      output: CreateSnapshotPolicyCommandOutput;
    };
  };
}
