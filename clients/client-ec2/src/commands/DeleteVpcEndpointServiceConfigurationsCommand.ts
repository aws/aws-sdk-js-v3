// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteVpcEndpointServiceConfigurationsRequest,
  DeleteVpcEndpointServiceConfigurationsResult,
} from "../models/models_3";
import {
  de_DeleteVpcEndpointServiceConfigurationsCommand,
  se_DeleteVpcEndpointServiceConfigurationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpcEndpointServiceConfigurationsCommand}.
 */
export interface DeleteVpcEndpointServiceConfigurationsCommandInput
  extends DeleteVpcEndpointServiceConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcEndpointServiceConfigurationsCommand}.
 */
export interface DeleteVpcEndpointServiceConfigurationsCommandOutput
  extends DeleteVpcEndpointServiceConfigurationsResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified VPC endpoint service configurations. Before you can delete
 *             an endpoint service configuration, you must reject any <code>Available</code> or
 *             <code>PendingAcceptance</code> interface endpoint connections that are attached to
 *             the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcEndpointServiceConfigurationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcEndpointServiceConfigurationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteVpcEndpointServiceConfigurationsRequest
 *   DryRun: true || false,
 *   ServiceIds: [ // VpcEndpointServiceIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteVpcEndpointServiceConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpcEndpointServiceConfigurationsResult
 * //   Unsuccessful: [ // UnsuccessfulItemSet
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
 * @param DeleteVpcEndpointServiceConfigurationsCommandInput - {@link DeleteVpcEndpointServiceConfigurationsCommandInput}
 * @returns {@link DeleteVpcEndpointServiceConfigurationsCommandOutput}
 * @see {@link DeleteVpcEndpointServiceConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointServiceConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DeleteVpcEndpointServiceConfigurationsCommand extends $Command
  .classBuilder<
    DeleteVpcEndpointServiceConfigurationsCommandInput,
    DeleteVpcEndpointServiceConfigurationsCommandOutput,
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
  .s("AmazonEC2", "DeleteVpcEndpointServiceConfigurations", {})
  .n("EC2Client", "DeleteVpcEndpointServiceConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVpcEndpointServiceConfigurationsCommand)
  .de(de_DeleteVpcEndpointServiceConfigurationsCommand)
  .build() {}
