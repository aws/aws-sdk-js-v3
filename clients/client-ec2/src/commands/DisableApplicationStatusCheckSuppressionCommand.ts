// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisableApplicationStatusCheckSuppressionRequest,
  DisableApplicationStatusCheckSuppressionResult,
} from "../models/models_5";
import { DisableApplicationStatusCheckSuppression$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableApplicationStatusCheckSuppressionCommand}.
 */
export interface DisableApplicationStatusCheckSuppressionCommandInput extends DisableApplicationStatusCheckSuppressionRequest {}
/**
 * @public
 *
 * The output of {@link DisableApplicationStatusCheckSuppressionCommand}.
 */
export interface DisableApplicationStatusCheckSuppressionCommandOutput extends DisableApplicationStatusCheckSuppressionResult, __MetadataBearer {}

/**
 * <p>Disables suppression of application status checks for the specified instances. After suppression is disabled, health check results resume affecting the instance-level application status. You can specify a maximum of 100 instance IDs for each request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableApplicationStatusCheckSuppressionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableApplicationStatusCheckSuppressionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisableApplicationStatusCheckSuppressionRequest
 *   InstanceIds: [ // InstanceIdList
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DisableApplicationStatusCheckSuppressionCommand(input);
 * const response = await client.send(command);
 * // { // DisableApplicationStatusCheckSuppressionResult
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
 * @param DisableApplicationStatusCheckSuppressionCommandInput - {@link DisableApplicationStatusCheckSuppressionCommandInput}
 * @returns {@link DisableApplicationStatusCheckSuppressionCommandOutput}
 * @see {@link DisableApplicationStatusCheckSuppressionCommandInput} for command's `input` shape.
 * @see {@link DisableApplicationStatusCheckSuppressionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To disable application status check suppression
 * ```javascript
 * // This example disables application status check suppression for the specified instance, resuming normal status reporting.
 * const input = {
 *   InstanceIds: [
 *     "i-0123456789abcdef0"
 *   ]
 * };
 * const command = new DisableApplicationStatusCheckSuppressionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SuccessfulResults: [
 *     {
 *       InstanceId: "i-0123456789abcdef0"
 *     }
 *   ],
 *   UnsuccessfulResults:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DisableApplicationStatusCheckSuppressionCommand extends command<DisableApplicationStatusCheckSuppressionCommandInput, DisableApplicationStatusCheckSuppressionCommandOutput>(
  _ep0,
  _mw0,
  "DisableApplicationStatusCheckSuppression",
  DisableApplicationStatusCheckSuppression$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableApplicationStatusCheckSuppressionRequest;
      output: DisableApplicationStatusCheckSuppressionResult;
    };
    sdk: {
      input: DisableApplicationStatusCheckSuppressionCommandInput;
      output: DisableApplicationStatusCheckSuppressionCommandOutput;
    };
  };
}
