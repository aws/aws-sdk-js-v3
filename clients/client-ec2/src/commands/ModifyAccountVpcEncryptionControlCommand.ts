// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ModifyAccountVpcEncryptionControlRequest,
  ModifyAccountVpcEncryptionControlResult,
} from "../models/models_6";
import { ModifyAccountVpcEncryptionControl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyAccountVpcEncryptionControlCommand}.
 */
export interface ModifyAccountVpcEncryptionControlCommandInput extends ModifyAccountVpcEncryptionControlRequest {}
/**
 * @public
 *
 * The output of {@link ModifyAccountVpcEncryptionControlCommand}.
 */
export interface ModifyAccountVpcEncryptionControlCommandOutput extends ModifyAccountVpcEncryptionControlResult, __MetadataBearer {}

/**
 * <p>Modifies the account-level VPC Encryption Control configuration. This sets the encryption control mode and resource exclusions that apply to the VPCs in your account. VPC Encryption Control enables you to enforce encryption for all data in transit within and between VPCs to meet compliance requirements.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html">Enforce VPC encryption in transit</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyAccountVpcEncryptionControlCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyAccountVpcEncryptionControlCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyAccountVpcEncryptionControlRequest
 *   DryRun: true || false,
 *   Mode: "unmanaged" || "attempt-monitor" || "attempt-enforce",
 *   InternetGateway: "enable" || "disable",
 *   EgressOnlyInternetGateway: "enable" || "disable",
 *   NatGateway: "enable" || "disable",
 *   VirtualPrivateGateway: "enable" || "disable",
 *   VpcPeering: "enable" || "disable",
 *   Lambda: "enable" || "disable",
 *   VpcLattice: "enable" || "disable",
 *   ElasticFileSystem: "enable" || "disable",
 * };
 * const command = new ModifyAccountVpcEncryptionControlCommand(input);
 * const response = await client.send(command);
 * // { // ModifyAccountVpcEncryptionControlResult
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
 * @param ModifyAccountVpcEncryptionControlCommandInput - {@link ModifyAccountVpcEncryptionControlCommandInput}
 * @returns {@link ModifyAccountVpcEncryptionControlCommandOutput}
 * @see {@link ModifyAccountVpcEncryptionControlCommandInput} for command's `input` shape.
 * @see {@link ModifyAccountVpcEncryptionControlCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyAccountVpcEncryptionControlCommand extends command<ModifyAccountVpcEncryptionControlCommandInput, ModifyAccountVpcEncryptionControlCommandOutput>(
  _ep0,
  _mw0,
  "ModifyAccountVpcEncryptionControl",
  ModifyAccountVpcEncryptionControl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyAccountVpcEncryptionControlRequest;
      output: ModifyAccountVpcEncryptionControlResult;
    };
    sdk: {
      input: ModifyAccountVpcEncryptionControlCommandInput;
      output: ModifyAccountVpcEncryptionControlCommandOutput;
    };
  };
}
