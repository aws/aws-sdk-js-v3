// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTrafficMirrorTargetRequest, DeleteTrafficMirrorTargetResult } from "../models/models_3";
import { de_DeleteTrafficMirrorTargetCommand, se_DeleteTrafficMirrorTargetCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTrafficMirrorTargetCommand}.
 */
export interface DeleteTrafficMirrorTargetCommandInput extends DeleteTrafficMirrorTargetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrafficMirrorTargetCommand}.
 */
export interface DeleteTrafficMirrorTargetCommandOutput extends DeleteTrafficMirrorTargetResult, __MetadataBearer {}

/**
 * <p>Deletes the specified Traffic Mirror target.</p>
 *          <p>You cannot delete a Traffic Mirror target that is in use by a Traffic Mirror session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTrafficMirrorTargetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTrafficMirrorTargetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteTrafficMirrorTargetRequest
 *   TrafficMirrorTargetId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTrafficMirrorTargetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTrafficMirrorTargetResult
 * //   TrafficMirrorTargetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteTrafficMirrorTargetCommandInput - {@link DeleteTrafficMirrorTargetCommandInput}
 * @returns {@link DeleteTrafficMirrorTargetCommandOutput}
 * @see {@link DeleteTrafficMirrorTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficMirrorTargetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteTrafficMirrorTargetCommand extends $Command
  .classBuilder<
    DeleteTrafficMirrorTargetCommandInput,
    DeleteTrafficMirrorTargetCommandOutput,
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
  .s("AmazonEC2", "DeleteTrafficMirrorTarget", {})
  .n("EC2Client", "DeleteTrafficMirrorTargetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTrafficMirrorTargetCommand)
  .de(de_DeleteTrafficMirrorTargetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrafficMirrorTargetRequest;
      output: DeleteTrafficMirrorTargetResult;
    };
    sdk: {
      input: DeleteTrafficMirrorTargetCommandInput;
      output: DeleteTrafficMirrorTargetCommandOutput;
    };
  };
}
