// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ModifyInstanceMetadataOptionsRequest, ModifyInstanceMetadataOptionsResult } from "../models/models_6";
import { ModifyInstanceMetadataOptions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceMetadataOptionsCommand}.
 */
export interface ModifyInstanceMetadataOptionsCommandInput extends ModifyInstanceMetadataOptionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceMetadataOptionsCommand}.
 */
export interface ModifyInstanceMetadataOptionsCommandOutput
  extends ModifyInstanceMetadataOptionsResult,
    __MetadataBearer {}

/**
 * <p>Modify the instance metadata parameters on a running or stopped instance. When you
 *             modify the parameters on a stopped instance, they are applied when the instance is
 *             started. When you modify the parameters on a running instance, the API responds with a
 *             state of “pending”. After the parameter modifications are successfully applied to the
 *             instance, the state of the modifications changes from “pending” to “applied” in
 *             subsequent describe-instances API calls. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceMetadataOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceMetadataOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyInstanceMetadataOptionsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   HttpTokens: "optional" || "required",
 *   HttpPutResponseHopLimit: Number("int"),
 *   HttpEndpoint: "disabled" || "enabled",
 *   DryRun: true || false,
 *   HttpProtocolIpv6: "disabled" || "enabled",
 *   InstanceMetadataTags: "disabled" || "enabled",
 * };
 * const command = new ModifyInstanceMetadataOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstanceMetadataOptionsResult
 * //   InstanceId: "STRING_VALUE",
 * //   InstanceMetadataOptions: { // InstanceMetadataOptionsResponse
 * //     State: "pending" || "applied",
 * //     HttpTokens: "optional" || "required",
 * //     HttpPutResponseHopLimit: Number("int"),
 * //     HttpEndpoint: "disabled" || "enabled",
 * //     HttpProtocolIpv6: "disabled" || "enabled",
 * //     InstanceMetadataTags: "disabled" || "enabled",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyInstanceMetadataOptionsCommandInput - {@link ModifyInstanceMetadataOptionsCommandInput}
 * @returns {@link ModifyInstanceMetadataOptionsCommandOutput}
 * @see {@link ModifyInstanceMetadataOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceMetadataOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyInstanceMetadataOptionsCommand extends $Command
  .classBuilder<
    ModifyInstanceMetadataOptionsCommandInput,
    ModifyInstanceMetadataOptionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyInstanceMetadataOptions", {})
  .n("EC2Client", "ModifyInstanceMetadataOptionsCommand")
  .sc(ModifyInstanceMetadataOptions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyInstanceMetadataOptionsRequest;
      output: ModifyInstanceMetadataOptionsResult;
    };
    sdk: {
      input: ModifyInstanceMetadataOptionsCommandInput;
      output: ModifyInstanceMetadataOptionsCommandOutput;
    };
  };
}
