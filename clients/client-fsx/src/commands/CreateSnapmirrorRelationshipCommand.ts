// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSnapmirrorRelationshipRequest, CreateSnapmirrorRelationshipResponse } from "../models/models_0";
import { CreateSnapmirrorRelationship$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSnapmirrorRelationshipCommand}.
 */
export interface CreateSnapmirrorRelationshipCommandInput extends CreateSnapmirrorRelationshipRequest {}
/**
 * @public
 *
 * The output of {@link CreateSnapmirrorRelationshipCommand}.
 */
export interface CreateSnapmirrorRelationshipCommandOutput extends CreateSnapmirrorRelationshipResponse, __MetadataBearer {}

/**
 * <p>Creates a SnapMirror relationship that replicates data from a source volume to a
 *             destination volume on an Amazon FSx for NetApp ONTAP file system.</p>
 *          <p>The <code>CreateSnapmirrorRelationship</code> operation returns while the SnapMirror
 *             relationship's lifecycle state is still <code>CREATING</code>. You can check the SnapMirror
 *             relationship creation status by calling the DescribeSnapmirrorRelationships
 *             operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateSnapmirrorRelationshipCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateSnapmirrorRelationshipCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // CreateSnapmirrorRelationshipRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   Source: { // CreateSnapmirrorSource
 *     Path: "STRING_VALUE", // required
 *   },
 *   Destination: { // CreateSnapmirrorDestination
 *     VolumeId: "STRING_VALUE", // required
 *   },
 *   PolicyId: "STRING_VALUE",
 *   TransferSchedule: "STRING_VALUE",
 *   ThrottleInKbps: Number("long"),
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSnapmirrorRelationshipCommand(input);
 * const response = await client.send(command);
 * // { // CreateSnapmirrorRelationshipResponse
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
 * @param CreateSnapmirrorRelationshipCommandInput - {@link CreateSnapmirrorRelationshipCommandInput}
 * @returns {@link CreateSnapmirrorRelationshipCommandOutput}
 * @see {@link CreateSnapmirrorRelationshipCommandInput} for command's `input` shape.
 * @see {@link CreateSnapmirrorRelationshipCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>The requested operation is not supported for this resource or API.</p>
 *
 * @throws {@link VolumeNotFound} (client fault)
 *  <p>No Amazon FSx volumes were found based upon the supplied parameters.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class CreateSnapmirrorRelationshipCommand extends command<CreateSnapmirrorRelationshipCommandInput, CreateSnapmirrorRelationshipCommandOutput>(
  _ep0,
  _mw0,
  "CreateSnapmirrorRelationship",
  CreateSnapmirrorRelationship$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSnapmirrorRelationshipRequest;
      output: CreateSnapmirrorRelationshipResponse;
    };
    sdk: {
      input: CreateSnapmirrorRelationshipCommandInput;
      output: CreateSnapmirrorRelationshipCommandOutput;
    };
  };
}
