// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSnapmirrorPolicyRequest, UpdateSnapmirrorPolicyResponse } from "../models/models_0";
import { UpdateSnapmirrorPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSnapmirrorPolicyCommand}.
 */
export interface UpdateSnapmirrorPolicyCommandInput extends UpdateSnapmirrorPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSnapmirrorPolicyCommand}.
 */
export interface UpdateSnapmirrorPolicyCommandOutput extends UpdateSnapmirrorPolicyResponse, __MetadataBearer {}

/**
 * <p>Updates an Amazon FSx for NetApp ONTAP SnapMirror policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, UpdateSnapmirrorPolicyCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, UpdateSnapmirrorPolicyCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // UpdateSnapmirrorPolicyRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   SnapmirrorPolicyId: "STRING_VALUE", // required
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
 * };
 * const command = new UpdateSnapmirrorPolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSnapmirrorPolicyResponse
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
 * @param UpdateSnapmirrorPolicyCommandInput - {@link UpdateSnapmirrorPolicyCommandInput}
 * @returns {@link UpdateSnapmirrorPolicyCommandOutput}
 * @see {@link UpdateSnapmirrorPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateSnapmirrorPolicyCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link SnapmirrorPolicyNotFound} (client fault)
 *  <p>No Amazon FSx SnapMirror policies were found based on the supplied
 *             parameters.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class UpdateSnapmirrorPolicyCommand extends command<UpdateSnapmirrorPolicyCommandInput, UpdateSnapmirrorPolicyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSnapmirrorPolicy",
  UpdateSnapmirrorPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSnapmirrorPolicyRequest;
      output: UpdateSnapmirrorPolicyResponse;
    };
    sdk: {
      input: UpdateSnapmirrorPolicyCommandInput;
      output: UpdateSnapmirrorPolicyCommandOutput;
    };
  };
}
