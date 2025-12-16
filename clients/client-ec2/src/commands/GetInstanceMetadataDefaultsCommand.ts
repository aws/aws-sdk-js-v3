// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetInstanceMetadataDefaultsRequest, GetInstanceMetadataDefaultsResult } from "../models/models_5";
import { GetInstanceMetadataDefaults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInstanceMetadataDefaultsCommand}.
 */
export interface GetInstanceMetadataDefaultsCommandInput extends GetInstanceMetadataDefaultsRequest {}
/**
 * @public
 *
 * The output of {@link GetInstanceMetadataDefaultsCommand}.
 */
export interface GetInstanceMetadataDefaultsCommandOutput extends GetInstanceMetadataDefaultsResult, __MetadataBearer {}

/**
 * <p>Gets the default instance metadata service (IMDS) settings that are set at the account
 *             level in the specified Amazon Web Services  Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html#instance-metadata-options-order-of-precedence">Order of precedence for instance metadata options</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetInstanceMetadataDefaultsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetInstanceMetadataDefaultsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetInstanceMetadataDefaultsRequest
 *   DryRun: true || false,
 * };
 * const command = new GetInstanceMetadataDefaultsCommand(input);
 * const response = await client.send(command);
 * // { // GetInstanceMetadataDefaultsResult
 * //   AccountLevel: { // InstanceMetadataDefaultsResponse
 * //     HttpTokens: "optional" || "required",
 * //     HttpPutResponseHopLimit: Number("int"),
 * //     HttpEndpoint: "disabled" || "enabled",
 * //     InstanceMetadataTags: "disabled" || "enabled",
 * //     ManagedBy: "account" || "declarative-policy",
 * //     ManagedExceptionMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInstanceMetadataDefaultsCommandInput - {@link GetInstanceMetadataDefaultsCommandInput}
 * @returns {@link GetInstanceMetadataDefaultsCommandOutput}
 * @see {@link GetInstanceMetadataDefaultsCommandInput} for command's `input` shape.
 * @see {@link GetInstanceMetadataDefaultsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetInstanceMetadataDefaultsCommand extends $Command
  .classBuilder<
    GetInstanceMetadataDefaultsCommandInput,
    GetInstanceMetadataDefaultsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetInstanceMetadataDefaults", {})
  .n("EC2Client", "GetInstanceMetadataDefaultsCommand")
  .sc(GetInstanceMetadataDefaults$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInstanceMetadataDefaultsRequest;
      output: GetInstanceMetadataDefaultsResult;
    };
    sdk: {
      input: GetInstanceMetadataDefaultsCommandInput;
      output: GetInstanceMetadataDefaultsCommandOutput;
    };
  };
}
