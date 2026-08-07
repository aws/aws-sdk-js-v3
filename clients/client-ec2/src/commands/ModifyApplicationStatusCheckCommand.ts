// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyApplicationStatusCheckRequest, ModifyApplicationStatusCheckResult } from "../models/models_7";
import { ModifyApplicationStatusCheck$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyApplicationStatusCheckCommand}.
 */
export interface ModifyApplicationStatusCheckCommandInput extends ModifyApplicationStatusCheckRequest {}
/**
 * @public
 *
 * The output of {@link ModifyApplicationStatusCheckCommand}.
 */
export interface ModifyApplicationStatusCheckCommandOutput extends ModifyApplicationStatusCheckResult, __MetadataBearer {}

/**
 * <p>Modifies an existing application status check. You can update the protocol, port, path, thresholds, and other configuration settings. The following rules apply:</p>
 *          <ul>
 *             <li>
 *                <p>The application status check must exist and belong to your account.</p>
 *             </li>
 *             <li>
 *                <p>Changes take effect on the next health check interval.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyApplicationStatusCheckCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyApplicationStatusCheckCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyApplicationStatusCheckRequest
 *   ApplicationStatusCheckId: "STRING_VALUE", // required
 *   Aggregation: "included" || "excluded",
 *   HealthCheckPaths: [ // HealthCheckPathRequestList
 *     { // HealthCheckPathRequestObject
 *       Source: { // HealthCheckPathSourceRequestObject
 *         SubnetId: "STRING_VALUE",
 *         SecurityGroupId: "STRING_VALUE",
 *       },
 *       Destinations: [ // HealthCheckPathDestinationRequestSet
 *         { // HealthCheckPathDestinationRequestObject
 *           SubnetId: "STRING_VALUE",
 *           SecurityGroupId: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   Protocol: "http" || "https",
 *   Port: Number("int"),
 *   Path: "STRING_VALUE",
 *   DeviceIndex: Number("int"),
 *   IpVersion: "ipv4" || "ipv6",
 *   IpScope: "private",
 *   Interval: Number("int"),
 *   Timeout: Number("int"),
 *   FailureThreshold: Number("int"),
 *   SuccessThreshold: Number("int"),
 *   StatusCodeMatcher: "STRING_VALUE",
 *   InitializationGracePeriodSeconds: Number("int"),
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new ModifyApplicationStatusCheckCommand(input);
 * const response = await client.send(command);
 * // { // ModifyApplicationStatusCheckResult
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
 * @param ModifyApplicationStatusCheckCommandInput - {@link ModifyApplicationStatusCheckCommandInput}
 * @returns {@link ModifyApplicationStatusCheckCommandOutput}
 * @see {@link ModifyApplicationStatusCheckCommandInput} for command's `input` shape.
 * @see {@link ModifyApplicationStatusCheckCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To modify an application status check
 * ```javascript
 * // This example modifies the port and path of an existing application status check.
 * const input = {
 *   ApplicationStatusCheckId: "asc-0123456789abcdef0",
 *   Path: "/healthv2",
 *   Port: 8080
 * };
 * const command = new ModifyApplicationStatusCheckCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationStatusCheck: {
 *     Aggregation: "included",
 *     ApplicationStatusCheckId: "asc-0123456789abcdef0",
 *     FailureThreshold: 2,
 *     Interval: 60,
 *     Path: "/healthv2",
 *     Port: 8080,
 *     Protocol: "http",
 *     SuccessThreshold: 2,
 *     Timeout: 6
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyApplicationStatusCheckCommand extends command<ModifyApplicationStatusCheckCommandInput, ModifyApplicationStatusCheckCommandOutput>(
  _ep0,
  _mw0,
  "ModifyApplicationStatusCheck",
  ModifyApplicationStatusCheck$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyApplicationStatusCheckRequest;
      output: ModifyApplicationStatusCheckResult;
    };
    sdk: {
      input: ModifyApplicationStatusCheckCommandInput;
      output: ModifyApplicationStatusCheckCommandOutput;
    };
  };
}
