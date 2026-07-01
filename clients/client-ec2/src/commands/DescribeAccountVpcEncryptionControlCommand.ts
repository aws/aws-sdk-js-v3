// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeAccountVpcEncryptionControlRequest,
  DescribeAccountVpcEncryptionControlResult,
} from "../models/models_3";
import { DescribeAccountVpcEncryptionControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAccountVpcEncryptionControlCommand}.
 */
export interface DescribeAccountVpcEncryptionControlCommandInput extends DescribeAccountVpcEncryptionControlRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountVpcEncryptionControlCommand}.
 */
export interface DescribeAccountVpcEncryptionControlCommandOutput extends DescribeAccountVpcEncryptionControlResult, __MetadataBearer {}

/**
 * <p>Describes the account-level VPC Encryption Control configuration for your account. VPC Encryption Control enables you to enforce encryption for all data in transit within and between VPCs to meet compliance requirements.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html">Enforce VPC encryption in transit</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAccountVpcEncryptionControlCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAccountVpcEncryptionControlCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeAccountVpcEncryptionControlRequest
 *   DryRun: true || false,
 * };
 * const command = new DescribeAccountVpcEncryptionControlCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountVpcEncryptionControlResult
 * //   AccountVpcEncryptionControl: { // AccountVpcEncryptionControl
 * //     State: "default-state" || "transitions-in-progress" || "transitions-partially-successful" || "transitions-successful" || "transitions-failed",
 * //     Mode: "unmanaged" || "attempt-monitor" || "attempt-enforce",
 * //     Exclusions: { // AccountVpcEncryptionControlExclusions
 * //       InternetGateway: "enabling" || "enabled" || "disabling" || "disabled",
 * //       EgressOnlyInternetGateway: "enabling" || "enabled" || "disabling" || "disabled",
 * //       NatGateway: "enabling" || "enabled" || "disabling" || "disabled",
 * //       VirtualPrivateGateway: "enabling" || "enabled" || "disabling" || "disabled",
 * //       VpcPeering: "enabling" || "enabled" || "disabling" || "disabled",
 * //       Lambda: "enabling" || "enabled" || "disabling" || "disabled",
 * //       VpcLattice: "enabling" || "enabled" || "disabling" || "disabled",
 * //       ElasticFileSystem: "enabling" || "enabled" || "disabling" || "disabled",
 * //     },
 * //     ManagedBy: "account" || "declarative-policy",
 * //     LastUpdateTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAccountVpcEncryptionControlCommandInput - {@link DescribeAccountVpcEncryptionControlCommandInput}
 * @returns {@link DescribeAccountVpcEncryptionControlCommandOutput}
 * @see {@link DescribeAccountVpcEncryptionControlCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountVpcEncryptionControlCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeAccountVpcEncryptionControlCommand extends command<DescribeAccountVpcEncryptionControlCommandInput, DescribeAccountVpcEncryptionControlCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAccountVpcEncryptionControl",
  DescribeAccountVpcEncryptionControl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccountVpcEncryptionControlRequest;
      output: DescribeAccountVpcEncryptionControlResult;
    };
    sdk: {
      input: DescribeAccountVpcEncryptionControlCommandInput;
      output: DescribeAccountVpcEncryptionControlCommandOutput;
    };
  };
}
