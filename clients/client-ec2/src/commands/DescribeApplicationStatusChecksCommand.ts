// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeApplicationStatusChecksRequest, DescribeApplicationStatusChecksResult } from "../models/models_3";
import { DescribeApplicationStatusChecks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeApplicationStatusChecksCommand}.
 */
export interface DescribeApplicationStatusChecksCommandInput extends DescribeApplicationStatusChecksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationStatusChecksCommand}.
 */
export interface DescribeApplicationStatusChecksCommandOutput extends DescribeApplicationStatusChecksResult, __MetadataBearer {}

/**
 * <p>Describes one or more application status checks. Returns configuration details for your application status checks, including protocol, port, path, thresholds, and associations. The following rules apply:</p>
 *          <ul>
 *             <li>
 *                <p>If you do not specify any application status check IDs, all checks in your account are returned.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>DescribeApplicationStatus</code> to see the actual health status of instances.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeApplicationStatusChecksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeApplicationStatusChecksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeApplicationStatusChecksRequest
 *   ApplicationStatusCheckIds: [ // ApplicationStatusCheckIdList
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
 *   IncludeAll: true || false,
 *   DryRun: true || false,
 * };
 * const command = new DescribeApplicationStatusChecksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationStatusChecksResult
 * //   ApplicationStatusChecks: [ // ApplicationStatusCheckResponseSet
 * //     { // ApplicationStatusCheckResponseObject
 * //       ApplicationStatusCheckId: "STRING_VALUE",
 * //       Aggregation: "included" || "excluded",
 * //       HealthCheckPaths: [ // HealthCheckPathResponseList
 * //         { // HealthCheckPathResponseObject
 * //           Source: { // HealthCheckPathSourceResponseObject
 * //             SubnetId: "STRING_VALUE",
 * //             SecurityGroupId: "STRING_VALUE",
 * //           },
 * //           Destinations: [ // HealthCheckPathDestinationResponseList
 * //             { // HealthCheckPathDestinationResponseObject
 * //               SubnetId: "STRING_VALUE",
 * //               SecurityGroupId: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       Protocol: "http" || "https",
 * //       Port: Number("int"),
 * //       Path: "STRING_VALUE",
 * //       DeviceIndex: Number("int"),
 * //       IpVersion: "ipv4" || "ipv6",
 * //       IpScope: "private",
 * //       Interval: Number("int"),
 * //       Timeout: Number("int"),
 * //       FailureThreshold: Number("int"),
 * //       SuccessThreshold: Number("int"),
 * //       StatusCodeMatcher: "STRING_VALUE",
 * //       InitializationGracePeriodSeconds: Number("int"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       TargetTagAssociations: [ // CustomKeyValuePairResponseSet
 * //         { // CustomTagKeyValueResponsePair
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       ModifyTime: new Date("TIMESTAMP"),
 * //       DeletionTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeApplicationStatusChecksCommandInput - {@link DescribeApplicationStatusChecksCommandInput}
 * @returns {@link DescribeApplicationStatusChecksCommandOutput}
 * @see {@link DescribeApplicationStatusChecksCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationStatusChecksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe application status checks
 * ```javascript
 * // This example describes the specified application status checks.
 * const input = {
 *   ApplicationStatusCheckIds: [
 *     "asc-0123456789abcdef0"
 *   ]
 * };
 * const command = new DescribeApplicationStatusChecksCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationStatusChecks: [
 *     {
 *       Aggregation: "included",
 *       ApplicationStatusCheckId: "asc-0123456789abcdef0",
 *       FailureThreshold: 3,
 *       Interval: 10,
 *       Path: "/health",
 *       Port: 80,
 *       Protocol: "http",
 *       SuccessThreshold: 2,
 *       Timeout: 5
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To describe application status checks using filters
 * ```javascript
 * // This example uses filters to describe application status checks with a specific tag.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "tag:Environment",
 *       Values: [
 *         "Production"
 *       ]
 *     }
 *   ],
 *   MaxResults: 10
 * };
 * const command = new DescribeApplicationStatusChecksCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationStatusChecks: [
 *     {
 *       Aggregation: "included",
 *       ApplicationStatusCheckId: "asc-0123456789abcdef0",
 *       FailureThreshold: 3,
 *       Interval: 10,
 *       Path: "/health",
 *       Port: 80,
 *       Protocol: "http",
 *       SuccessThreshold: 2,
 *       Timeout: 5
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeApplicationStatusChecksCommand extends command<DescribeApplicationStatusChecksCommandInput, DescribeApplicationStatusChecksCommandOutput>(
  _ep0,
  _mw0,
  "DescribeApplicationStatusChecks",
  DescribeApplicationStatusChecks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationStatusChecksRequest;
      output: DescribeApplicationStatusChecksResult;
    };
    sdk: {
      input: DescribeApplicationStatusChecksCommandInput;
      output: DescribeApplicationStatusChecksCommandOutput;
    };
  };
}
