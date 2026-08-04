// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteApplicationStatusCheckRequest, DeleteApplicationStatusCheckResult } from "../models/models_2";
import { DeleteApplicationStatusCheck$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteApplicationStatusCheckCommand}.
 */
export interface DeleteApplicationStatusCheckCommandInput extends DeleteApplicationStatusCheckRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationStatusCheckCommand}.
 */
export interface DeleteApplicationStatusCheckCommandOutput extends DeleteApplicationStatusCheckResult, __MetadataBearer {}

/**
 * <p>Deletes an application status check. The following rules apply:</p>
 *          <ul>
 *             <li>
 *                <p>Deleting a check automatically removes all of its associations.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>DescribeApplicationStatusChecks</code> to view existing checks before deleting.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteApplicationStatusCheckCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteApplicationStatusCheckCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteApplicationStatusCheckRequest
 *   ApplicationStatusCheckId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DeleteApplicationStatusCheckCommand(input);
 * const response = await client.send(command);
 * // { // DeleteApplicationStatusCheckResult
 * //   ApplicationStatusCheck: { // ApplicationStatusCheckResponseObject
 * //     ApplicationStatusCheckId: "STRING_VALUE",
 * //     Aggregation: "included" || "excluded",
 * //     HealthCheckPaths: [ // HealthCheckPathResponseList
 * //       { // HealthCheckPathResponseObject
 * //         Source: { // HealthCheckPathSourceResponseObject
 * //           SubnetId: "STRING_VALUE",
 * //           SecurityGroupId: "STRING_VALUE",
 * //         },
 * //         Destinations: [ // HealthCheckPathDestinationResponseList
 * //           { // HealthCheckPathDestinationResponseObject
 * //             SubnetId: "STRING_VALUE",
 * //             SecurityGroupId: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     Protocol: "http" || "https",
 * //     Port: Number("int"),
 * //     Path: "STRING_VALUE",
 * //     DeviceIndex: Number("int"),
 * //     IpVersion: "ipv4" || "ipv6",
 * //     IpScope: "private",
 * //     Interval: Number("int"),
 * //     Timeout: Number("int"),
 * //     FailureThreshold: Number("int"),
 * //     SuccessThreshold: Number("int"),
 * //     StatusCodeMatcher: "STRING_VALUE",
 * //     InitializationGracePeriodSeconds: Number("int"),
 * //     LastUpdatedAt: new Date("TIMESTAMP"),
 * //     TargetTagAssociations: [ // CustomKeyValuePairResponseSet
 * //       { // CustomTagKeyValueResponsePair
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     ModifyTime: new Date("TIMESTAMP"),
 * //     DeletionTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteApplicationStatusCheckCommandInput - {@link DeleteApplicationStatusCheckCommandInput}
 * @returns {@link DeleteApplicationStatusCheckCommandOutput}
 * @see {@link DeleteApplicationStatusCheckCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationStatusCheckCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To delete an application status check
 * ```javascript
 * // This example deletes the specified application status check.
 * const input = {
 *   ApplicationStatusCheckId: "asc-0123456789abcdef0"
 * };
 * const command = new DeleteApplicationStatusCheckCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationStatusCheck: {
 *     Aggregation: "included",
 *     ApplicationStatusCheckId: "asc-0123456789abcdef0",
 *     Path: "/health",
 *     Port: 80,
 *     Protocol: "http"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteApplicationStatusCheckCommand extends command<DeleteApplicationStatusCheckCommandInput, DeleteApplicationStatusCheckCommandOutput>(
  _ep0,
  _mw0,
  "DeleteApplicationStatusCheck",
  DeleteApplicationStatusCheck$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationStatusCheckRequest;
      output: DeleteApplicationStatusCheckResult;
    };
    sdk: {
      input: DeleteApplicationStatusCheckCommandInput;
      output: DeleteApplicationStatusCheckCommandOutput;
    };
  };
}
