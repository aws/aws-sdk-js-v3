// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRouteServerEndpointRequest, DeleteRouteServerEndpointResult } from "../models/models_3";
import { de_DeleteRouteServerEndpointCommand, se_DeleteRouteServerEndpointCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRouteServerEndpointCommand}.
 */
export interface DeleteRouteServerEndpointCommandInput extends DeleteRouteServerEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRouteServerEndpointCommand}.
 */
export interface DeleteRouteServerEndpointCommandOutput extends DeleteRouteServerEndpointResult, __MetadataBearer {}

/**
 * <p>Deletes the specified route server endpoint.</p>
 *          <p>A route server endpoint is an Amazon Web Services-managed component inside a subnet that facilitates BGP (Border Gateway Protocol) connections between your route server and your BGP peers. Create two endpoints per subnet for redundancy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteRouteServerEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteRouteServerEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteRouteServerEndpointRequest
 *   RouteServerEndpointId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteRouteServerEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRouteServerEndpointResult
 * //   RouteServerEndpoint: { // RouteServerEndpoint
 * //     RouteServerId: "STRING_VALUE",
 * //     RouteServerEndpointId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     SubnetId: "STRING_VALUE",
 * //     EniId: "STRING_VALUE",
 * //     EniAddress: "STRING_VALUE",
 * //     State: "pending" || "available" || "deleting" || "deleted" || "failing" || "failed" || "delete-failed",
 * //     FailureReason: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteRouteServerEndpointCommandInput - {@link DeleteRouteServerEndpointCommandInput}
 * @returns {@link DeleteRouteServerEndpointCommandOutput}
 * @see {@link DeleteRouteServerEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteServerEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteRouteServerEndpointCommand extends $Command
  .classBuilder<
    DeleteRouteServerEndpointCommandInput,
    DeleteRouteServerEndpointCommandOutput,
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
  .s("AmazonEC2", "DeleteRouteServerEndpoint", {})
  .n("EC2Client", "DeleteRouteServerEndpointCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRouteServerEndpointCommand)
  .de(de_DeleteRouteServerEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRouteServerEndpointRequest;
      output: DeleteRouteServerEndpointResult;
    };
    sdk: {
      input: DeleteRouteServerEndpointCommandInput;
      output: DeleteRouteServerEndpointCommandOutput;
    };
  };
}
