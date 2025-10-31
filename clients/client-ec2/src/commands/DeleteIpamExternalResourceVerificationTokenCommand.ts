// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteIpamExternalResourceVerificationTokenRequest,
  DeleteIpamExternalResourceVerificationTokenResult,
} from "../models/models_3";
import {
  de_DeleteIpamExternalResourceVerificationTokenCommand,
  se_DeleteIpamExternalResourceVerificationTokenCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIpamExternalResourceVerificationTokenCommand}.
 */
export interface DeleteIpamExternalResourceVerificationTokenCommandInput
  extends DeleteIpamExternalResourceVerificationTokenRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIpamExternalResourceVerificationTokenCommand}.
 */
export interface DeleteIpamExternalResourceVerificationTokenCommandOutput
  extends DeleteIpamExternalResourceVerificationTokenResult,
    __MetadataBearer {}

/**
 * <p>Delete a verification token.</p>
 *          <p>A verification token is an Amazon Web Services-generated random value that you can use to prove ownership of an external resource. For example, you can use a verification token to validate that you control a public IP address range when you bring an IP address range to Amazon Web Services (BYOIP).
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteIpamExternalResourceVerificationTokenCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteIpamExternalResourceVerificationTokenCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteIpamExternalResourceVerificationTokenRequest
 *   DryRun: true || false,
 *   IpamExternalResourceVerificationTokenId: "STRING_VALUE", // required
 * };
 * const command = new DeleteIpamExternalResourceVerificationTokenCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIpamExternalResourceVerificationTokenResult
 * //   IpamExternalResourceVerificationToken: { // IpamExternalResourceVerificationToken
 * //     IpamExternalResourceVerificationTokenId: "STRING_VALUE",
 * //     IpamExternalResourceVerificationTokenArn: "STRING_VALUE",
 * //     IpamId: "STRING_VALUE",
 * //     IpamArn: "STRING_VALUE",
 * //     IpamRegion: "STRING_VALUE",
 * //     TokenValue: "STRING_VALUE",
 * //     TokenName: "STRING_VALUE",
 * //     NotAfter: new Date("TIMESTAMP"),
 * //     Status: "valid" || "expired",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "delete-in-progress" || "delete-complete" || "delete-failed",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteIpamExternalResourceVerificationTokenCommandInput - {@link DeleteIpamExternalResourceVerificationTokenCommandInput}
 * @returns {@link DeleteIpamExternalResourceVerificationTokenCommandOutput}
 * @see {@link DeleteIpamExternalResourceVerificationTokenCommandInput} for command's `input` shape.
 * @see {@link DeleteIpamExternalResourceVerificationTokenCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteIpamExternalResourceVerificationTokenCommand extends $Command
  .classBuilder<
    DeleteIpamExternalResourceVerificationTokenCommandInput,
    DeleteIpamExternalResourceVerificationTokenCommandOutput,
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
  .s("AmazonEC2", "DeleteIpamExternalResourceVerificationToken", {})
  .n("EC2Client", "DeleteIpamExternalResourceVerificationTokenCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIpamExternalResourceVerificationTokenCommand)
  .de(de_DeleteIpamExternalResourceVerificationTokenCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIpamExternalResourceVerificationTokenRequest;
      output: DeleteIpamExternalResourceVerificationTokenResult;
    };
    sdk: {
      input: DeleteIpamExternalResourceVerificationTokenCommandInput;
      output: DeleteIpamExternalResourceVerificationTokenCommandOutput;
    };
  };
}
