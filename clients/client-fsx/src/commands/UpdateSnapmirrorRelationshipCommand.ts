// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSnapmirrorRelationshipRequest, UpdateSnapmirrorRelationshipResponse } from "../models/models_0";
import { UpdateSnapmirrorRelationship$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSnapmirrorRelationshipCommand}.
 */
export interface UpdateSnapmirrorRelationshipCommandInput extends UpdateSnapmirrorRelationshipRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSnapmirrorRelationshipCommand}.
 */
export interface UpdateSnapmirrorRelationshipCommandOutput extends UpdateSnapmirrorRelationshipResponse, __MetadataBearer {}

/**
 * <p>Updates an Amazon FSx for NetApp ONTAP SnapMirror relationship.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, UpdateSnapmirrorRelationshipCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, UpdateSnapmirrorRelationshipCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // UpdateSnapmirrorRelationshipRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   SnapmirrorRelationshipId: "STRING_VALUE", // required
 *   PolicyId: "STRING_VALUE",
 *   TransferSchedule: "STRING_VALUE",
 *   ThrottleInKbps: Number("long"),
 *   State: "SNAPMIRRORED" || "PAUSED" || "BROKEN_OFF",
 * };
 * const command = new UpdateSnapmirrorRelationshipCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSnapmirrorRelationshipResponse
 * //   SnapmirrorRelationship: { // SnapmirrorRelationship
 * //     ResourceARN: "STRING_VALUE",
 * //     SnapmirrorRelationshipId: "STRING_VALUE",
 * //     FileSystemId: "STRING_VALUE",
 * //     Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED",
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
 * //     Source: { // SnapmirrorSource
 * //       Path: "STRING_VALUE",
 * //     },
 * //     Destination: { // SnapmirrorDestination
 * //       Path: "STRING_VALUE",
 * //       VolumeId: "STRING_VALUE",
 * //     },
 * //     SnapmirrorPolicy: { // SnapmirrorRelationshipPolicy
 * //       PolicyId: "STRING_VALUE",
 * //       PolicyName: "STRING_VALUE",
 * //     },
 * //     TransferSchedule: "STRING_VALUE",
 * //     ThrottleInKbps: Number("long"),
 * //     State: "UNINITIALIZED" || "TRANSFERRING" || "SNAPMIRRORED" || "PAUSED" || "BROKEN_OFF",
 * //     Healthy: true || false,
 * //     UnhealthyReason: "STRING_VALUE",
 * //     LagTimeInMinutes: Number("long"),
 * //     ExportedSnapshot: { // SnapmirrorExportedSnapshot
 * //       SnapshotId: "STRING_VALUE",
 * //       SnapshotName: "STRING_VALUE",
 * //     },
 * //     TransferState: { // SnapmirrorTransferState
 * //       State: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       BytesTransferred: Number("long"),
 * //       Duration: "STRING_VALUE",
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //     UUID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSnapmirrorRelationshipCommandInput - {@link UpdateSnapmirrorRelationshipCommandInput}
 * @returns {@link UpdateSnapmirrorRelationshipCommandOutput}
 * @see {@link UpdateSnapmirrorRelationshipCommandInput} for command's `input` shape.
 * @see {@link UpdateSnapmirrorRelationshipCommandOutput} for command's `response` shape.
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
 * @throws {@link SnapmirrorRelationshipNotFound} (client fault)
 *  <p>No Amazon FSx SnapMirror relationships were found based on the supplied
 *             parameters.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class UpdateSnapmirrorRelationshipCommand extends command<UpdateSnapmirrorRelationshipCommandInput, UpdateSnapmirrorRelationshipCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSnapmirrorRelationship",
  UpdateSnapmirrorRelationship$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSnapmirrorRelationshipRequest;
      output: UpdateSnapmirrorRelationshipResponse;
    };
    sdk: {
      input: UpdateSnapmirrorRelationshipCommandInput;
      output: UpdateSnapmirrorRelationshipCommandOutput;
    };
  };
}
