// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeSnapmirrorRelationshipsRequest,
  DescribeSnapmirrorRelationshipsResponse,
} from "../models/models_0";
import { DescribeSnapmirrorRelationships$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeSnapmirrorRelationshipsCommand}.
 */
export interface DescribeSnapmirrorRelationshipsCommandInput extends DescribeSnapmirrorRelationshipsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSnapmirrorRelationshipsCommand}.
 */
export interface DescribeSnapmirrorRelationshipsCommandOutput extends DescribeSnapmirrorRelationshipsResponse, __MetadataBearer {}

/**
 * <p>Returns the description of specific Amazon FSx for NetApp ONTAP SnapMirror
 *             relationships, if a <code>SnapmirrorRelationshipIds</code> value is provided. Otherwise,
 *             this operation returns all SnapMirror relationships owned by your
 *             Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're
 *             calling.</p>
 *          <p>When retrieving all SnapMirror relationships, you can optionally specify the
 *             <code>MaxResults</code> parameter to limit the number of SnapMirror relationships in a
 *             response. If more SnapMirror relationships remain, Amazon FSx returns a
 *             <code>NextToken</code> value in the response. In this case, send a later request with the
 *             <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from
 *             the last response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeSnapmirrorRelationshipsCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeSnapmirrorRelationshipsCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DescribeSnapmirrorRelationshipsRequest
 *   SnapmirrorRelationshipIds: [ // SnapmirrorRelationshipIds
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // SnapmirrorRelationshipFilters
 *     { // SnapmirrorRelationshipFilter
 *       Name: "file-system-id" || "destination-volume-id",
 *       Values: [ // SnapmirrorRelationshipFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeSnapmirrorRelationshipsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapmirrorRelationshipsResponse
 * //   SnapmirrorRelationships: [ // SnapmirrorRelationships
 * //     { // SnapmirrorRelationship
 * //       ResourceARN: "STRING_VALUE",
 * //       SnapmirrorRelationshipId: "STRING_VALUE",
 * //       FileSystemId: "STRING_VALUE",
 * //       Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED",
 * //       LifecycleTransitionReason: { // LifecycleTransitionReason
 * //         Message: "STRING_VALUE",
 * //         OntapError: { // OntapError
 * //           Message: "STRING_VALUE",
 * //           Code: "STRING_VALUE",
 * //         },
 * //       },
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Source: { // SnapmirrorSource
 * //         Path: "STRING_VALUE",
 * //       },
 * //       Destination: { // SnapmirrorDestination
 * //         Path: "STRING_VALUE",
 * //         VolumeId: "STRING_VALUE",
 * //       },
 * //       SnapmirrorPolicy: { // SnapmirrorRelationshipPolicy
 * //         PolicyId: "STRING_VALUE",
 * //         PolicyName: "STRING_VALUE",
 * //       },
 * //       TransferSchedule: "STRING_VALUE",
 * //       ThrottleInKbps: Number("long"),
 * //       State: "UNINITIALIZED" || "TRANSFERRING" || "SNAPMIRRORED" || "PAUSED" || "BROKEN_OFF",
 * //       Healthy: true || false,
 * //       UnhealthyReason: "STRING_VALUE",
 * //       LagTimeInMinutes: Number("long"),
 * //       ExportedSnapshot: { // SnapmirrorExportedSnapshot
 * //         SnapshotId: "STRING_VALUE",
 * //         SnapshotName: "STRING_VALUE",
 * //       },
 * //       TransferState: { // SnapmirrorTransferState
 * //         State: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //         BytesTransferred: Number("long"),
 * //         Duration: "STRING_VALUE",
 * //         EndTime: new Date("TIMESTAMP"),
 * //       },
 * //       UUID: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSnapmirrorRelationshipsCommandInput - {@link DescribeSnapmirrorRelationshipsCommandInput}
 * @returns {@link DescribeSnapmirrorRelationshipsCommandOutput}
 * @see {@link DescribeSnapmirrorRelationshipsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapmirrorRelationshipsCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link SnapmirrorRelationshipNotFound} (client fault)
 *  <p>No Amazon FSx SnapMirror relationships were found based on the supplied
 *             parameters.</p>
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
export class DescribeSnapmirrorRelationshipsCommand extends command<DescribeSnapmirrorRelationshipsCommandInput, DescribeSnapmirrorRelationshipsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSnapmirrorRelationships",
  DescribeSnapmirrorRelationships$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSnapmirrorRelationshipsRequest;
      output: DescribeSnapmirrorRelationshipsResponse;
    };
    sdk: {
      input: DescribeSnapmirrorRelationshipsCommandInput;
      output: DescribeSnapmirrorRelationshipsCommandOutput;
    };
  };
}
