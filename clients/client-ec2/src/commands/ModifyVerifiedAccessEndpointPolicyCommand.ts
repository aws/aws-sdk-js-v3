// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ModifyVerifiedAccessEndpointPolicyRequest,
  ModifyVerifiedAccessEndpointPolicyResult,
} from "../models/models_8";
import { ModifyVerifiedAccessEndpointPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyVerifiedAccessEndpointPolicyCommand}.
 */
export interface ModifyVerifiedAccessEndpointPolicyCommandInput extends ModifyVerifiedAccessEndpointPolicyRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVerifiedAccessEndpointPolicyCommand}.
 */
export interface ModifyVerifiedAccessEndpointPolicyCommandOutput
  extends ModifyVerifiedAccessEndpointPolicyResult,
    __MetadataBearer {}

/**
 * <p>Modifies the specified Amazon Web Services Verified Access endpoint policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVerifiedAccessEndpointPolicyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVerifiedAccessEndpointPolicyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyVerifiedAccessEndpointPolicyRequest
 *   VerifiedAccessEndpointId: "STRING_VALUE", // required
 *   PolicyEnabled: true || false,
 *   PolicyDocument: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   SseSpecification: { // VerifiedAccessSseSpecificationRequest
 *     CustomerManagedKeyEnabled: true || false,
 *     KmsKeyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new ModifyVerifiedAccessEndpointPolicyCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVerifiedAccessEndpointPolicyResult
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
 * @param ModifyVerifiedAccessEndpointPolicyCommandInput - {@link ModifyVerifiedAccessEndpointPolicyCommandInput}
 * @returns {@link ModifyVerifiedAccessEndpointPolicyCommandOutput}
 * @see {@link ModifyVerifiedAccessEndpointPolicyCommandInput} for command's `input` shape.
 * @see {@link ModifyVerifiedAccessEndpointPolicyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyVerifiedAccessEndpointPolicyCommand extends $Command
  .classBuilder<
    ModifyVerifiedAccessEndpointPolicyCommandInput,
    ModifyVerifiedAccessEndpointPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyVerifiedAccessEndpointPolicy", {})
  .n("EC2Client", "ModifyVerifiedAccessEndpointPolicyCommand")
  .sc(ModifyVerifiedAccessEndpointPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVerifiedAccessEndpointPolicyRequest;
      output: ModifyVerifiedAccessEndpointPolicyResult;
    };
    sdk: {
      input: ModifyVerifiedAccessEndpointPolicyCommandInput;
      output: ModifyVerifiedAccessEndpointPolicyCommandOutput;
    };
  };
}
