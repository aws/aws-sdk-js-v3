// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetImageBlockPublicAccessStateRequest, GetImageBlockPublicAccessStateResult } from "../models/models_6";
import {
  de_GetImageBlockPublicAccessStateCommand,
  se_GetImageBlockPublicAccessStateCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetImageBlockPublicAccessStateCommand}.
 */
export interface GetImageBlockPublicAccessStateCommandInput extends GetImageBlockPublicAccessStateRequest {}
/**
 * @public
 *
 * The output of {@link GetImageBlockPublicAccessStateCommand}.
 */
export interface GetImageBlockPublicAccessStateCommandOutput
  extends GetImageBlockPublicAccessStateResult,
    __MetadataBearer {}

/**
 * <p>Gets the current state of <i>block public access for AMIs</i> at the account
 *       level in the specified Amazon Web Services Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sharingamis-intro.html#block-public-access-to-amis">Block
 *         public access to your AMIs</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetImageBlockPublicAccessStateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetImageBlockPublicAccessStateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // GetImageBlockPublicAccessStateRequest
 *   DryRun: true || false,
 * };
 * const command = new GetImageBlockPublicAccessStateCommand(input);
 * const response = await client.send(command);
 * // { // GetImageBlockPublicAccessStateResult
 * //   ImageBlockPublicAccessState: "STRING_VALUE",
 * //   ManagedBy: "account" || "declarative-policy",
 * // };
 *
 * ```
 *
 * @param GetImageBlockPublicAccessStateCommandInput - {@link GetImageBlockPublicAccessStateCommandInput}
 * @returns {@link GetImageBlockPublicAccessStateCommandOutput}
 * @see {@link GetImageBlockPublicAccessStateCommandInput} for command's `input` shape.
 * @see {@link GetImageBlockPublicAccessStateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class GetImageBlockPublicAccessStateCommand extends $Command
  .classBuilder<
    GetImageBlockPublicAccessStateCommandInput,
    GetImageBlockPublicAccessStateCommandOutput,
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
  .s("AmazonEC2", "GetImageBlockPublicAccessState", {})
  .n("EC2Client", "GetImageBlockPublicAccessStateCommand")
  .f(void 0, void 0)
  .ser(se_GetImageBlockPublicAccessStateCommand)
  .de(de_GetImageBlockPublicAccessStateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImageBlockPublicAccessStateRequest;
      output: GetImageBlockPublicAccessStateResult;
    };
    sdk: {
      input: GetImageBlockPublicAccessStateCommandInput;
      output: GetImageBlockPublicAccessStateCommandOutput;
    };
  };
}
