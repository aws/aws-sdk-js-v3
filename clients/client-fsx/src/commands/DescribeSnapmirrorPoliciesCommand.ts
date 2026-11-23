// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeSnapmirrorPoliciesRequest, DescribeSnapmirrorPoliciesResponse } from "../models/models_0";
import { DescribeSnapmirrorPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeSnapmirrorPoliciesCommand}.
 */
export interface DescribeSnapmirrorPoliciesCommandInput extends DescribeSnapmirrorPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSnapmirrorPoliciesCommand}.
 */
export interface DescribeSnapmirrorPoliciesCommandOutput extends DescribeSnapmirrorPoliciesResponse, __MetadataBearer {}

/**
 * <p>Returns the description of specific Amazon FSx for NetApp ONTAP SnapMirror policies,
 *             if a <code>SnapmirrorPolicyIds</code> value is provided. Otherwise, this operation
 *             returns all SnapMirror policies owned by your Amazon Web Services account in the
 *             Amazon Web Services Region of the endpoint that you're calling.</p>
 *          <p>When retrieving all SnapMirror policies, you can optionally specify the
 *             <code>MaxResults</code> parameter to limit the number of SnapMirror policies in a
 *             response. If more SnapMirror policies remain, Amazon FSx returns a
 *             <code>NextToken</code> value in the response. In this case, send a later request with
 *             the <code>NextToken</code> request parameter set to the value of <code>NextToken</code>
 *             from the last response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeSnapmirrorPoliciesCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeSnapmirrorPoliciesCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DescribeSnapmirrorPoliciesRequest
 *   SnapmirrorPolicyIds: [ // SnapmirrorPolicyIds
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // SnapmirrorPolicyFilters
 *     { // SnapmirrorPolicyFilter
 *       Name: "file-system-id" || "storage-virtual-machine-id",
 *       Values: [ // SnapmirrorPolicyFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeSnapmirrorPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapmirrorPoliciesResponse
 * //   SnapmirrorPolicies: [ // SnapmirrorPolicies
 * //     { // SnapmirrorPolicy
 * //       ResourceARN: "STRING_VALUE",
 * //       SnapmirrorPolicyId: "STRING_VALUE",
 * //       FileSystemId: "STRING_VALUE",
 * //       StorageVirtualMachineId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       SnapshotCopyMode: "COPY_ALL_SOURCE_SNAPSHOTS" || "COPY_LATEST_SOURCE_SNAPSHOT" || "NO_CREATE_SNAPSHOT_ON_SOURCE",
 * //       RetentionRules: [ // SnapmirrorPolicyRetentionRules
 * //         { // SnapmirrorPolicyRetentionRule
 * //           Label: "STRING_VALUE", // required
 * //           Count: Number("int"), // required
 * //           CreationSchedule: "STRING_VALUE",
 * //         },
 * //       ],
 * //       TransferSchedule: "STRING_VALUE",
 * //       NetworkCompressionEnabled: true || false,
 * //       ThrottleInKbps: Number("long"),
 * //       Scope: "FILESYSTEM" || "SVM",
 * //       Lifecycle: "CREATING" || "CREATED" || "DELETING" || "FAILED",
 * //       UUID: "STRING_VALUE",
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
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSnapmirrorPoliciesCommandInput - {@link DescribeSnapmirrorPoliciesCommandInput}
 * @returns {@link DescribeSnapmirrorPoliciesCommandOutput}
 * @see {@link DescribeSnapmirrorPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapmirrorPoliciesCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
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
export class DescribeSnapmirrorPoliciesCommand extends command<DescribeSnapmirrorPoliciesCommandInput, DescribeSnapmirrorPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSnapmirrorPolicies",
  DescribeSnapmirrorPolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSnapmirrorPoliciesRequest;
      output: DescribeSnapmirrorPoliciesResponse;
    };
    sdk: {
      input: DescribeSnapmirrorPoliciesCommandInput;
      output: DescribeSnapmirrorPoliciesCommandOutput;
    };
  };
}
