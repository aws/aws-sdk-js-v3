// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyInstanceCpuOptionsRequest, ModifyInstanceCpuOptionsResult } from "../models/models_7";
import { ModifyInstanceCpuOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyInstanceCpuOptionsCommand}.
 */
export interface ModifyInstanceCpuOptionsCommandInput extends ModifyInstanceCpuOptionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceCpuOptionsCommand}.
 */
export interface ModifyInstanceCpuOptionsCommandOutput extends ModifyInstanceCpuOptionsResult, __MetadataBearer {}

/**
 * By default, all vCPUs for the instance type are active when you launch an instance. When you configure the number of active vCPUs for the instance, it can help you save on licensing costs and optimize performance. The base cost of the instance remains unchanged.
 *
 * The number of active vCPUs equals the number of threads per CPU core multiplied by the number of cores. The instance must be in a `Stopped` state before you make changes.
 *
 * > **Note:** Some instance type options do not support this capability. For more information, see [Supported CPU options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cpu-options-supported-instances-values.html) in the *Amazon EC2 User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceCpuOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceCpuOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyInstanceCpuOptionsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   CoreCount: Number("int"),
 *   ThreadsPerCore: Number("int"),
 *   NestedVirtualization: "enabled" || "disabled",
 *   DryRun: true || false,
 * };
 * const command = new ModifyInstanceCpuOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstanceCpuOptionsResult
 * //   InstanceId: "STRING_VALUE",
 * //   CoreCount: Number("int"),
 * //   ThreadsPerCore: Number("int"),
 * //   NestedVirtualization: "enabled" || "disabled",
 * // };
 *
 * ```
 *
 * @param ModifyInstanceCpuOptionsCommandInput - {@link ModifyInstanceCpuOptionsCommandInput}
 * @returns {@link ModifyInstanceCpuOptionsCommandOutput}
 * @see {@link ModifyInstanceCpuOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceCpuOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class ModifyInstanceCpuOptionsCommand extends command<ModifyInstanceCpuOptionsCommandInput, ModifyInstanceCpuOptionsCommandOutput>(
  _ep0,
  _mw0,
  "ModifyInstanceCpuOptions",
  ModifyInstanceCpuOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyInstanceCpuOptionsRequest;
      output: ModifyInstanceCpuOptionsResult;
    };
    sdk: {
      input: ModifyInstanceCpuOptionsCommandInput;
      output: ModifyInstanceCpuOptionsCommandOutput;
    };
  };
}
