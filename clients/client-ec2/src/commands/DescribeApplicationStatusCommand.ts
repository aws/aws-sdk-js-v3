// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeApplicationStatusRequest, DescribeApplicationStatusResult } from "../models/models_3";
import { DescribeApplicationStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeApplicationStatusCommand}.
 */
export interface DescribeApplicationStatusCommandInput extends DescribeApplicationStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationStatusCommand}.
 */
export interface DescribeApplicationStatusCommandOutput extends DescribeApplicationStatusResult, __MetadataBearer {}

/**
 * <p>Describes the application status for the specified instances. Returns the aggregated application health status for each instance. The following rules apply:</p>
 *          <ul>
 *             <li>
 *                <p>The instance-level status is derived from all application status checks with the aggregation setting set to <code>included</code>.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>DescribeApplicationStatusChecks</code> to view the configuration of individual checks.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>EnableApplicationStatusCheckSuppression</code> to temporarily suppress health check results from affecting the instance-level status.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeApplicationStatusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeApplicationStatusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeApplicationStatusRequest
 *   InstanceIds: [ // InstanceIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DescribeApplicationStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationStatusResult
 * //   ApplicationStatuses: { // ApplicationStatusesResponseType
 * //     Instances: [ // InstanceApplicationStatusSet
 * //       { // InstanceApplicationStatus
 * //         InstanceId: "STRING_VALUE",
 * //         AvailabilityZone: "STRING_VALUE",
 * //         AvailabilityZoneId: "STRING_VALUE",
 * //         ApplicationStatus: { // ApplicationStatus
 * //           Status: "ok" || "impaired" || "initializing" || "insufficient-data" || "not-applicable" || "suppressed",
 * //           StatusTimeStamp: new Date("TIMESTAMP"),
 * //           StatusSince: new Date("TIMESTAMP"),
 * //           ResumeAt: new Date("TIMESTAMP"),
 * //           Details: [ // ApplicationStatusDetailSet
 * //             { // ApplicationStatusDetail
 * //               ApplicationStatusCheckId: "STRING_VALUE",
 * //               CheckUpdateTime: new Date("TIMESTAMP"),
 * //               Aggregation: "included" || "excluded",
 * //               Status: "passed" || "failed" || "initializing" || "insufficient-data" || "not-applicable",
 * //               StatusTimeStamp: new Date("TIMESTAMP"),
 * //               StatusSince: new Date("TIMESTAMP"),
 * //               Reason: { // ApplicationStatusReason
 * //                 Code: "STRING_VALUE",
 * //                 StatusCode: Number("int"),
 * //                 Protocol: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //         },
 * //         Tags: [ // TagList
 * //           { // Tag
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeApplicationStatusCommandInput - {@link DescribeApplicationStatusCommandInput}
 * @returns {@link DescribeApplicationStatusCommandOutput}
 * @see {@link DescribeApplicationStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe application status for instances
 * ```javascript
 * // This example describes the application status for the specified instance.
 * const input = {
 *   InstanceIds: [
 *     "i-0123456789abcdef0"
 *   ]
 * };
 * const command = new DescribeApplicationStatusCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationStatuses: {
 *     Instances: [
 *       {
 *         ApplicationStatus: {
 *           Details: [
 *             {
 *               Aggregation: "included",
 *               ApplicationStatusCheckId: "asc-0123456789abcdef0",
 *               Reason: {
 *                 Code: "ResponseCodeMatched",
 *                 Protocol: "HTTP",
 *                 StatusCode: 200
 *               },
 *               Status: "passed"
 *             }
 *           ],
 *           Status: "ok"
 *         },
 *         InstanceId: "i-0123456789abcdef0"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @example To describe application status using filters
 * ```javascript
 * // This example uses a filter to describe impaired application status in a specific Availability Zone.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "availability-zone-id",
 *       Values: [
 *         "use1-az1"
 *       ]
 *     },
 *     {
 *       Name: "status",
 *       Values: [
 *         "impaired"
 *       ]
 *     }
 *   ],
 *   MaxResults: 10
 * };
 * const command = new DescribeApplicationStatusCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationStatuses: {
 *     Instances: [
 *       {
 *         ApplicationStatus: {
 *           Details: [
 *             {
 *               Aggregation: "included",
 *               ApplicationStatusCheckId: "asc-0123456789abcdef0",
 *               Reason: {
 *                 Code: "ConnectionTimeout"
 *               },
 *               Status: "failed"
 *             }
 *           ],
 *           Status: "impaired"
 *         },
 *         InstanceId: "i-0123456789abcdef0"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeApplicationStatusCommand extends command<DescribeApplicationStatusCommandInput, DescribeApplicationStatusCommandOutput>(
  _ep0,
  _mw0,
  "DescribeApplicationStatus",
  DescribeApplicationStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationStatusRequest;
      output: DescribeApplicationStatusResult;
    };
    sdk: {
      input: DescribeApplicationStatusCommandInput;
      output: DescribeApplicationStatusCommandOutput;
    };
  };
}
