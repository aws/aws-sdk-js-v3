// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeSnapshotPoliciesRequest, DescribeSnapshotPoliciesResponse } from "../models/models_0";
import { DescribeSnapshotPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeSnapshotPoliciesCommand}.
 */
export interface DescribeSnapshotPoliciesCommandInput extends DescribeSnapshotPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotPoliciesCommand}.
 */
export interface DescribeSnapshotPoliciesCommandOutput extends DescribeSnapshotPoliciesResponse, __MetadataBearer {}

/**
 * <p>Returns the description of specific Amazon FSx for NetApp ONTAP snapshot policies, if
 *             a <code>SnapshotPolicyIds</code> value is provided. Otherwise, this operation returns
 *             all snapshot policies owned by your Amazon Web Services account in the
 *             Amazon Web Services Region of the endpoint that you're calling.</p>
 *          <p>When retrieving all snapshot policies, you can optionally specify the
 *             <code>MaxResults</code> parameter to limit the number of snapshot policies in a
 *             response. If more snapshot policies remain, Amazon FSx returns a
 *             <code>NextToken</code> value in the response. In this case, send a later request with
 *             the <code>NextToken</code> request parameter set to the value of <code>NextToken</code>
 *             from the last response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeSnapshotPoliciesCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeSnapshotPoliciesCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DescribeSnapshotPoliciesRequest
 *   SnapshotPolicyIds: [ // SnapshotPolicyIds
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // SnapshotPolicyFilters
 *     { // SnapshotPolicyFilter
 *       Name: "file-system-id" || "storage-virtual-machine-id",
 *       Values: [ // SnapshotPolicyFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeSnapshotPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapshotPoliciesResponse
 * //   SnapshotPolicies: [ // SnapshotPolicies
 * //     { // SnapshotPolicy
 * //       ResourceARN: "STRING_VALUE",
 * //       SnapshotPolicyId: "STRING_VALUE",
 * //       FileSystemId: "STRING_VALUE",
 * //       StorageVirtualMachineId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Enabled: true || false,
 * //       Schedules: [ // SnapshotPolicyScheduleList
 * //         { // SnapshotPolicySchedule
 * //           Name: "STRING_VALUE", // required
 * //           Count: Number("int"), // required
 * //           Prefix: "STRING_VALUE",
 * //           SnapmirrorLabel: "STRING_VALUE",
 * //           RetentionPeriod: { // SnapshotPolicyRetentionPeriod
 * //             Type: "SECONDS" || "MINUTES" || "HOURS" || "DAYS" || "MONTHS" || "YEARS" || "INFINITE", // required
 * //             Value: Number("int"),
 * //           },
 * //         },
 * //       ],
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
 * @param DescribeSnapshotPoliciesCommandInput - {@link DescribeSnapshotPoliciesCommandInput}
 * @returns {@link DescribeSnapshotPoliciesCommandOutput}
 * @see {@link DescribeSnapshotPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotPoliciesCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
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
export class DescribeSnapshotPoliciesCommand extends command<DescribeSnapshotPoliciesCommandInput, DescribeSnapshotPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSnapshotPolicies",
  DescribeSnapshotPolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSnapshotPoliciesRequest;
      output: DescribeSnapshotPoliciesResponse;
    };
    sdk: {
      input: DescribeSnapshotPoliciesCommandInput;
      output: DescribeSnapshotPoliciesCommandOutput;
    };
  };
}
