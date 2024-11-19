// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVerifiedAccessGroupPolicyRequest, ModifyVerifiedAccessGroupPolicyResult } from "../models/models_7";
import {
  de_ModifyVerifiedAccessGroupPolicyCommand,
  se_ModifyVerifiedAccessGroupPolicyCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyVerifiedAccessGroupPolicyCommand}.
 */
export interface ModifyVerifiedAccessGroupPolicyCommandInput extends ModifyVerifiedAccessGroupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVerifiedAccessGroupPolicyCommand}.
 */
export interface ModifyVerifiedAccessGroupPolicyCommandOutput
  extends ModifyVerifiedAccessGroupPolicyResult,
    __MetadataBearer {}

/**
 * <p>Modifies the specified Amazon Web Services Verified Access group policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVerifiedAccessGroupPolicyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVerifiedAccessGroupPolicyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyVerifiedAccessGroupPolicyRequest
 *   VerifiedAccessGroupId: "STRING_VALUE", // required
 *   PolicyEnabled: true || false,
 *   PolicyDocument: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   SseSpecification: { // VerifiedAccessSseSpecificationRequest
 *     CustomerManagedKeyEnabled: true || false,
 *     KmsKeyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new ModifyVerifiedAccessGroupPolicyCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVerifiedAccessGroupPolicyResult
 * //   PolicyEnabled: true || false,
 * //   PolicyDocument: "STRING_VALUE",
 * //   SseSpecification: { // VerifiedAccessSseSpecificationResponse
 * //     CustomerManagedKeyEnabled: true || false,
 * //     KmsKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyVerifiedAccessGroupPolicyCommandInput - {@link ModifyVerifiedAccessGroupPolicyCommandInput}
 * @returns {@link ModifyVerifiedAccessGroupPolicyCommandOutput}
 * @see {@link ModifyVerifiedAccessGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link ModifyVerifiedAccessGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ModifyVerifiedAccessGroupPolicyCommand extends $Command
  .classBuilder<
    ModifyVerifiedAccessGroupPolicyCommandInput,
    ModifyVerifiedAccessGroupPolicyCommandOutput,
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
  .s("AmazonEC2", "ModifyVerifiedAccessGroupPolicy", {})
  .n("EC2Client", "ModifyVerifiedAccessGroupPolicyCommand")
  .f(void 0, void 0)
  .ser(se_ModifyVerifiedAccessGroupPolicyCommand)
  .de(de_ModifyVerifiedAccessGroupPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVerifiedAccessGroupPolicyRequest;
      output: ModifyVerifiedAccessGroupPolicyResult;
    };
    sdk: {
      input: ModifyVerifiedAccessGroupPolicyCommandInput;
      output: ModifyVerifiedAccessGroupPolicyCommandOutput;
    };
  };
}
