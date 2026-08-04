// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  EnableApplicationStatusCheckSuppressionRequest,
  EnableApplicationStatusCheckSuppressionResult,
} from "../models/models_5";
import { EnableApplicationStatusCheckSuppression$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableApplicationStatusCheckSuppressionCommand}.
 */
export interface EnableApplicationStatusCheckSuppressionCommandInput extends EnableApplicationStatusCheckSuppressionRequest {}
/**
 * @public
 *
 * The output of {@link EnableApplicationStatusCheckSuppressionCommand}.
 */
export interface EnableApplicationStatusCheckSuppressionCommandOutput extends EnableApplicationStatusCheckSuppressionResult, __MetadataBearer {}

/**
 * <p>Suppresses application status checks for the specified instances. While suppressed, health checks continue to run but do not affect the instance-level application status. The following rules apply:</p>
 *          <ul>
 *             <li>
 *                <p>Maximum 100 instance IDs per request.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>DisableApplicationStatusCheckSuppression</code> to resume normal health check reporting.</p>
 *             </li>
 *             <li>
 *                <p>If you do not specify <code>DurationSeconds</code>, suppression continues indefinitely until you call <code>DisableApplicationStatusCheckSuppression</code>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableApplicationStatusCheckSuppressionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableApplicationStatusCheckSuppressionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // EnableApplicationStatusCheckSuppressionRequest
 *   InstanceIds: [ // InstanceIdList
 *     "STRING_VALUE",
 *   ],
 *   DurationSeconds: Number("int"),
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new EnableApplicationStatusCheckSuppressionCommand(input);
 * const response = await client.send(command);
 * // { // EnableApplicationStatusCheckSuppressionResult
 * //   SuccessfulResults: [ // SuccessfulSuppressionResponseSet
 * //     { // SuccessfulSuppressionResponseObject
 * //       InstanceId: "STRING_VALUE",
 * //       SuppressAt: new Date("TIMESTAMP"),
 * //       ResumeAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   UnsuccessfulResults: [ // UnsuccessfulSuppressionResponseSet
 * //     { // UnsuccessfulSuppressionResponseObject
 * //       InstanceId: "STRING_VALUE",
 * //       SuppressAt: new Date("TIMESTAMP"),
 * //       ResumeAt: new Date("TIMESTAMP"),
 * //       Reason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param EnableApplicationStatusCheckSuppressionCommandInput - {@link EnableApplicationStatusCheckSuppressionCommandInput}
 * @returns {@link EnableApplicationStatusCheckSuppressionCommandOutput}
 * @see {@link EnableApplicationStatusCheckSuppressionCommandInput} for command's `input` shape.
 * @see {@link EnableApplicationStatusCheckSuppressionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To enable application status check suppression
 * ```javascript
 * // This example suppresses application status check reporting for the specified instance for one hour.
 * const input = {
 *   DurationSeconds: 3600,
 *   InstanceIds: [
 *     "i-0123456789abcdef0"
 *   ]
 * };
 * const command = new EnableApplicationStatusCheckSuppressionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SuccessfulResults: [
 *     {
 *       InstanceId: "i-0123456789abcdef0",
 *       ResumeAt: "2026-05-14T19:30:00.000Z"
 *     }
 *   ],
 *   UnsuccessfulResults:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class EnableApplicationStatusCheckSuppressionCommand extends command<EnableApplicationStatusCheckSuppressionCommandInput, EnableApplicationStatusCheckSuppressionCommandOutput>(
  _ep0,
  _mw0,
  "EnableApplicationStatusCheckSuppression",
  EnableApplicationStatusCheckSuppression$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableApplicationStatusCheckSuppressionRequest;
      output: EnableApplicationStatusCheckSuppressionResult;
    };
    sdk: {
      input: EnableApplicationStatusCheckSuppressionCommandInput;
      output: EnableApplicationStatusCheckSuppressionCommandOutput;
    };
  };
}
