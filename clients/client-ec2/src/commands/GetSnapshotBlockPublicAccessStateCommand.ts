// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSnapshotBlockPublicAccessStateRequest, GetSnapshotBlockPublicAccessStateResult } from "../models/models_6";
import {
  de_GetSnapshotBlockPublicAccessStateCommand,
  se_GetSnapshotBlockPublicAccessStateCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSnapshotBlockPublicAccessStateCommand}.
 */
export interface GetSnapshotBlockPublicAccessStateCommandInput extends GetSnapshotBlockPublicAccessStateRequest {}
/**
 * @public
 *
 * The output of {@link GetSnapshotBlockPublicAccessStateCommand}.
 */
export interface GetSnapshotBlockPublicAccessStateCommandOutput
  extends GetSnapshotBlockPublicAccessStateResult,
    __MetadataBearer {}

/**
 * <p>Gets the current state of <i>block public access for snapshots</i> setting
 *       for the account and Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/block-public-access-snapshots.html">
 *       Block public access for snapshots</a> in the <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetSnapshotBlockPublicAccessStateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetSnapshotBlockPublicAccessStateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // GetSnapshotBlockPublicAccessStateRequest
 *   DryRun: true || false,
 * };
 * const command = new GetSnapshotBlockPublicAccessStateCommand(input);
 * const response = await client.send(command);
 * // { // GetSnapshotBlockPublicAccessStateResult
 * //   State: "block-all-sharing" || "block-new-sharing" || "unblocked",
 * //   ManagedBy: "account" || "declarative-policy",
 * // };
 *
 * ```
 *
 * @param GetSnapshotBlockPublicAccessStateCommandInput - {@link GetSnapshotBlockPublicAccessStateCommandInput}
 * @returns {@link GetSnapshotBlockPublicAccessStateCommandOutput}
 * @see {@link GetSnapshotBlockPublicAccessStateCommandInput} for command's `input` shape.
 * @see {@link GetSnapshotBlockPublicAccessStateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class GetSnapshotBlockPublicAccessStateCommand extends $Command
  .classBuilder<
    GetSnapshotBlockPublicAccessStateCommandInput,
    GetSnapshotBlockPublicAccessStateCommandOutput,
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
  .s("AmazonEC2", "GetSnapshotBlockPublicAccessState", {})
  .n("EC2Client", "GetSnapshotBlockPublicAccessStateCommand")
  .f(void 0, void 0)
  .ser(se_GetSnapshotBlockPublicAccessStateCommand)
  .de(de_GetSnapshotBlockPublicAccessStateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSnapshotBlockPublicAccessStateRequest;
      output: GetSnapshotBlockPublicAccessStateResult;
    };
    sdk: {
      input: GetSnapshotBlockPublicAccessStateCommandInput;
      output: GetSnapshotBlockPublicAccessStateCommandOutput;
    };
  };
}
