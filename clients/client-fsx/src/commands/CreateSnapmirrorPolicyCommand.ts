// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSnapmirrorPolicyRequest, CreateSnapmirrorPolicyResponse } from "../models/models_0";
import { CreateSnapmirrorPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSnapmirrorPolicyCommand}.
 */
export interface CreateSnapmirrorPolicyCommandInput extends CreateSnapmirrorPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateSnapmirrorPolicyCommand}.
 */
export interface CreateSnapmirrorPolicyCommandOutput extends CreateSnapmirrorPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates a SnapMirror policy for an Amazon FSx for NetApp ONTAP file system or storage
 *             virtual machine (SVM). A SnapMirror policy defines how the SnapMirror relationships that
 *             use the policy replicate data, including which snapshots to transfer, the maximum
 *             number of snapshots to retain on the destination volume, and when to transfer
 *             data.</p>
 *          <p>The <code>CreateSnapmirrorPolicy</code> operation returns while the SnapMirror policy's
 *             lifecycle state is still <code>CREATING</code>. You can check the SnapMirror policy
 *             creation status by calling the DescribeSnapmirrorPolicies operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateSnapmirrorPolicyCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateSnapmirrorPolicyCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // CreateSnapmirrorPolicyRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   FileSystemId: "STRING_VALUE",
 *   StorageVirtualMachineId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   SnapshotCopyMode: "COPY_ALL_SOURCE_SNAPSHOTS" || "COPY_LATEST_SOURCE_SNAPSHOT" || "NO_CREATE_SNAPSHOT_ON_SOURCE",
 *   RetentionRules: [ // SnapmirrorPolicyRetentionRules
 *     { // SnapmirrorPolicyRetentionRule
 *       Label: "STRING_VALUE", // required
 *       Count: Number("int"), // required
 *       CreationSchedule: "STRING_VALUE",
 *     },
 *   ],
 *   TransferSchedule: "STRING_VALUE",
 *   NetworkCompressionEnabled: true || false,
 *   ThrottleInKbps: Number("long"),
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSnapmirrorPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateSnapmirrorPolicyResponse
 * //   SnapmirrorPolicy: { // SnapmirrorPolicy
 * //     ResourceARN: "STRING_VALUE",
 * //     SnapmirrorPolicyId: "STRING_VALUE",
 * //     FileSystemId: "STRING_VALUE",
 * //     StorageVirtualMachineId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     SnapshotCopyMode: "COPY_ALL_SOURCE_SNAPSHOTS" || "COPY_LATEST_SOURCE_SNAPSHOT" || "NO_CREATE_SNAPSHOT_ON_SOURCE",
 * //     RetentionRules: [ // SnapmirrorPolicyRetentionRules
 * //       { // SnapmirrorPolicyRetentionRule
 * //         Label: "STRING_VALUE", // required
 * //         Count: Number("int"), // required
 * //         CreationSchedule: "STRING_VALUE",
 * //       },
 * //     ],
 * //     TransferSchedule: "STRING_VALUE",
 * //     NetworkCompressionEnabled: true || false,
 * //     ThrottleInKbps: Number("long"),
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
 * @param CreateSnapmirrorPolicyCommandInput - {@link CreateSnapmirrorPolicyCommandInput}
 * @returns {@link CreateSnapmirrorPolicyCommandOutput}
 * @see {@link CreateSnapmirrorPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateSnapmirrorPolicyCommandOutput} for command's `response` shape.
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
export class CreateSnapmirrorPolicyCommand extends command<CreateSnapmirrorPolicyCommandInput, CreateSnapmirrorPolicyCommandOutput>(
  _ep0,
  _mw0,
  "CreateSnapmirrorPolicy",
  CreateSnapmirrorPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSnapmirrorPolicyRequest;
      output: CreateSnapmirrorPolicyResponse;
    };
    sdk: {
      input: CreateSnapmirrorPolicyCommandInput;
      output: CreateSnapmirrorPolicyCommandOutput;
    };
  };
}
