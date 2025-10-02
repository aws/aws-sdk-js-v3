// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePlacementGroupRequest } from "../models/models_3";
import { de_DeletePlacementGroupCommand, se_DeletePlacementGroupCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePlacementGroupCommand}.
 */
export interface DeletePlacementGroupCommandInput extends DeletePlacementGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeletePlacementGroupCommand}.
 */
export interface DeletePlacementGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified placement group. You must terminate all instances in the
 *             placement group before you can delete the placement group. For more information, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeletePlacementGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeletePlacementGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeletePlacementGroupRequest
 *   DryRun: true || false,
 *   GroupName: "STRING_VALUE", // required
 * };
 * const command = new DeletePlacementGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePlacementGroupCommandInput - {@link DeletePlacementGroupCommandInput}
 * @returns {@link DeletePlacementGroupCommandOutput}
 * @see {@link DeletePlacementGroupCommandInput} for command's `input` shape.
 * @see {@link DeletePlacementGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To delete a placement group
 * ```javascript
 * // This example deletes the specified placement group.
 *
 * const input = {
 *   GroupName: "my-cluster"
 * };
 * const command = new DeletePlacementGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeletePlacementGroupCommand extends $Command
  .classBuilder<
    DeletePlacementGroupCommandInput,
    DeletePlacementGroupCommandOutput,
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
  .s("AmazonEC2", "DeletePlacementGroup", {})
  .n("EC2Client", "DeletePlacementGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeletePlacementGroupCommand)
  .de(de_DeletePlacementGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePlacementGroupRequest;
      output: {};
    };
    sdk: {
      input: DeletePlacementGroupCommandInput;
      output: DeletePlacementGroupCommandOutput;
    };
  };
}
