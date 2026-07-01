// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ModifyInstanceCreditSpecificationRequest,
  ModifyInstanceCreditSpecificationResult,
} from "../models/models_6";
import { ModifyInstanceCreditSpecification$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyInstanceCreditSpecificationCommand}.
 */
export interface ModifyInstanceCreditSpecificationCommandInput extends ModifyInstanceCreditSpecificationRequest {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceCreditSpecificationCommand}.
 */
export interface ModifyInstanceCreditSpecificationCommandOutput extends ModifyInstanceCreditSpecificationResult, __MetadataBearer {}

/**
 * <p>Modifies the credit option for CPU usage on a running or stopped burstable performance
 *             instance. The credit options are <code>standard</code> and
 *             <code>unlimited</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *                 performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceCreditSpecificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceCreditSpecificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyInstanceCreditSpecificationRequest
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 *   InstanceCreditSpecifications: [ // InstanceCreditSpecificationListRequest // required
 *     { // InstanceCreditSpecificationRequest
 *       InstanceId: "STRING_VALUE", // required
 *       CpuCredits: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ModifyInstanceCreditSpecificationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstanceCreditSpecificationResult
 * //   SuccessfulInstanceCreditSpecifications: [ // SuccessfulInstanceCreditSpecificationSet
 * //     { // SuccessfulInstanceCreditSpecificationItem
 * //       InstanceId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UnsuccessfulInstanceCreditSpecifications: [ // UnsuccessfulInstanceCreditSpecificationSet
 * //     { // UnsuccessfulInstanceCreditSpecificationItem
 * //       InstanceId: "STRING_VALUE",
 * //       Error: { // UnsuccessfulInstanceCreditSpecificationItemError
 * //         Code: "InvalidInstanceID.Malformed" || "InvalidInstanceID.NotFound" || "IncorrectInstanceState" || "InstanceCreditSpecification.NotSupported",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ModifyInstanceCreditSpecificationCommandInput - {@link ModifyInstanceCreditSpecificationCommandInput}
 * @returns {@link ModifyInstanceCreditSpecificationCommandOutput}
 * @see {@link ModifyInstanceCreditSpecificationCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceCreditSpecificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyInstanceCreditSpecificationCommand extends command<ModifyInstanceCreditSpecificationCommandInput, ModifyInstanceCreditSpecificationCommandOutput>(
  _ep0,
  _mw0,
  "ModifyInstanceCreditSpecification",
  ModifyInstanceCreditSpecification$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyInstanceCreditSpecificationRequest;
      output: ModifyInstanceCreditSpecificationResult;
    };
    sdk: {
      input: ModifyInstanceCreditSpecificationCommandInput;
      output: ModifyInstanceCreditSpecificationCommandOutput;
    };
  };
}
