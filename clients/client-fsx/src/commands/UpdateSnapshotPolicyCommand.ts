// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSnapshotPolicyRequest, UpdateSnapshotPolicyResponse } from "../models/models_0";
import { UpdateSnapshotPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSnapshotPolicyCommand}.
 */
export interface UpdateSnapshotPolicyCommandInput extends UpdateSnapshotPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSnapshotPolicyCommand}.
 */
export interface UpdateSnapshotPolicyCommandOutput extends UpdateSnapshotPolicyResponse, __MetadataBearer {}

/**
 * <p>Updates an Amazon FSx for NetApp ONTAP snapshot policy. You can enable or disable
 *             the snapshot policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, UpdateSnapshotPolicyCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, UpdateSnapshotPolicyCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // UpdateSnapshotPolicyRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   SnapshotPolicyId: "STRING_VALUE", // required
 *   Enabled: true || false,
 * };
 * const command = new UpdateSnapshotPolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSnapshotPolicyResponse
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
 * @param UpdateSnapshotPolicyCommandInput - {@link UpdateSnapshotPolicyCommandInput}
 * @returns {@link UpdateSnapshotPolicyCommandOutput}
 * @see {@link UpdateSnapshotPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateSnapshotPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link SnapshotPolicyNotFound} (client fault)
 *  <p>No Amazon FSx snapshot policies were found based on the supplied
 *             parameters.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class UpdateSnapshotPolicyCommand extends command<UpdateSnapshotPolicyCommandInput, UpdateSnapshotPolicyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSnapshotPolicy",
  UpdateSnapshotPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSnapshotPolicyRequest;
      output: UpdateSnapshotPolicyResponse;
    };
    sdk: {
      input: UpdateSnapshotPolicyCommandInput;
      output: UpdateSnapshotPolicyCommandOutput;
    };
  };
}
