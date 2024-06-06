// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyHostsRequest, ModifyHostsResult } from "../models/models_6";
import { de_ModifyHostsCommand, se_ModifyHostsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyHostsCommand}.
 */
export interface ModifyHostsCommandInput extends ModifyHostsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyHostsCommand}.
 */
export interface ModifyHostsCommandOutput extends ModifyHostsResult, __MetadataBearer {}

/**
 * <p>Modify the auto-placement setting of a Dedicated Host. When auto-placement is enabled,
 *             any instances that you launch with a tenancy of <code>host</code> but without a specific
 *             host ID are placed onto any available Dedicated Host in your account that has
 *             auto-placement enabled. When auto-placement is disabled, you need to provide a host ID
 *             to have the instance launch onto a specific host. If no host ID is provided, the
 *             instance is launched onto a suitable host with auto-placement enabled.</p>
 *          <p>You can also use this API action to modify a Dedicated Host to support either multiple
 *             instance types in an instance family, or to support a specific instance type
 *             only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyHostsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyHostsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyHostsRequest
 *   AutoPlacement: "on" || "off",
 *   HostIds: [ // RequestHostIdList // required
 *     "STRING_VALUE",
 *   ],
 *   HostRecovery: "on" || "off",
 *   InstanceType: "STRING_VALUE",
 *   InstanceFamily: "STRING_VALUE",
 *   HostMaintenance: "on" || "off",
 * };
 * const command = new ModifyHostsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyHostsResult
 * //   Successful: [ // ResponseHostIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   Unsuccessful: [ // UnsuccessfulItemList
 * //     { // UnsuccessfulItem
 * //       Error: { // UnsuccessfulItemError
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       ResourceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ModifyHostsCommandInput - {@link ModifyHostsCommandInput}
 * @returns {@link ModifyHostsCommandOutput}
 * @see {@link ModifyHostsCommandInput} for command's `input` shape.
 * @see {@link ModifyHostsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ModifyHostsCommand extends $Command
  .classBuilder<
    ModifyHostsCommandInput,
    ModifyHostsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "ModifyHosts", {})
  .n("EC2Client", "ModifyHostsCommand")
  .f(void 0, void 0)
  .ser(se_ModifyHostsCommand)
  .de(de_ModifyHostsCommand)
  .build() {}
