// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ModifyVpcEndpointPayerResponsibilityRequest,
  ModifyVpcEndpointPayerResponsibilityResult,
} from "../models/models_7";
import { ModifyVpcEndpointPayerResponsibility$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyVpcEndpointPayerResponsibilityCommand}.
 */
export interface ModifyVpcEndpointPayerResponsibilityCommandInput extends ModifyVpcEndpointPayerResponsibilityRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcEndpointPayerResponsibilityCommand}.
 */
export interface ModifyVpcEndpointPayerResponsibilityCommandOutput extends ModifyVpcEndpointPayerResponsibilityResult, __MetadataBearer {}

/**
 * <p>Modifies the billing account for VPC endpoint usage/charges.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointPayerResponsibilityCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointPayerResponsibilityCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcEndpointPayerResponsibilityRequest
 *   DryRun: true || false,
 *   ServiceId: "STRING_VALUE",
 *   VpcEndpointId: "STRING_VALUE", // required
 *   PayerResponsibility: "vpc-endpoint-account" || "vpc-endpoint-service-account", // required
 *   Scope: "vpc-endpoint-charges", // required
 * };
 * const command = new ModifyVpcEndpointPayerResponsibilityCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVpcEndpointPayerResponsibilityResult
 * //   VpcEndpointId: "STRING_VALUE",
 * //   PayerResponsibilities: [ // PayerResponsibilitySet
 * //     { // PayerResponsibilityEntry
 * //       Scope: "vpc-endpoint-charges",
 * //       PayerResponsibilityType: "vpc-endpoint-account" || "vpc-endpoint-service-account",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ModifyVpcEndpointPayerResponsibilityCommandInput - {@link ModifyVpcEndpointPayerResponsibilityCommandInput}
 * @returns {@link ModifyVpcEndpointPayerResponsibilityCommandOutput}
 * @see {@link ModifyVpcEndpointPayerResponsibilityCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointPayerResponsibilityCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyVpcEndpointPayerResponsibilityCommand extends command<ModifyVpcEndpointPayerResponsibilityCommandInput, ModifyVpcEndpointPayerResponsibilityCommandOutput>(
  _ep0,
  _mw0,
  "ModifyVpcEndpointPayerResponsibility",
  ModifyVpcEndpointPayerResponsibility$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVpcEndpointPayerResponsibilityRequest;
      output: ModifyVpcEndpointPayerResponsibilityResult;
    };
    sdk: {
      input: ModifyVpcEndpointPayerResponsibilityCommandInput;
      output: ModifyVpcEndpointPayerResponsibilityCommandOutput;
    };
  };
}
