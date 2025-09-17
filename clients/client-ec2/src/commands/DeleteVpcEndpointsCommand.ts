// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVpcEndpointsRequest, DeleteVpcEndpointsResult } from "../models/models_3";
import { de_DeleteVpcEndpointsCommand, se_DeleteVpcEndpointsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpcEndpointsCommand}.
 */
export interface DeleteVpcEndpointsCommandInput extends DeleteVpcEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcEndpointsCommand}.
 */
export interface DeleteVpcEndpointsCommandOutput extends DeleteVpcEndpointsResult, __MetadataBearer {}

/**
 * <p>Deletes the specified VPC endpoints.</p>
 *          <p>When you delete a gateway endpoint, we delete the endpoint routes in the route tables for the endpoint.</p>
 *          <p>When you delete a Gateway Load Balancer endpoint, we delete its endpoint network interfaces.
 *           You can only delete Gateway Load Balancer endpoints when the routes that are associated with the endpoint are deleted.</p>
 *          <p>When you delete an interface endpoint, we delete its endpoint network interfaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteVpcEndpointsRequest
 *   DryRun: true || false,
 *   VpcEndpointIds: [ // VpcEndpointIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteVpcEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpcEndpointsResult
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
 * @param DeleteVpcEndpointsCommandInput - {@link DeleteVpcEndpointsCommandInput}
 * @returns {@link DeleteVpcEndpointsCommandOutput}
 * @see {@link DeleteVpcEndpointsCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteVpcEndpointsCommand extends $Command
  .classBuilder<
    DeleteVpcEndpointsCommandInput,
    DeleteVpcEndpointsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DeleteVpcEndpoints", {})
  .n("EC2Client", "DeleteVpcEndpointsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVpcEndpointsCommand)
  .de(de_DeleteVpcEndpointsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpcEndpointsRequest;
      output: DeleteVpcEndpointsResult;
    };
    sdk: {
      input: DeleteVpcEndpointsCommandInput;
      output: DeleteVpcEndpointsCommandOutput;
    };
  };
}
