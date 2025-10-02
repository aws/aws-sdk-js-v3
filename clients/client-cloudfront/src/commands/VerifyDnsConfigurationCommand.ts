// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { VerifyDnsConfigurationRequest, VerifyDnsConfigurationResult } from "../models/models_2";
import { de_VerifyDnsConfigurationCommand, se_VerifyDnsConfigurationCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link VerifyDnsConfigurationCommand}.
 */
export interface VerifyDnsConfigurationCommandInput extends VerifyDnsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link VerifyDnsConfigurationCommand}.
 */
export interface VerifyDnsConfigurationCommandOutput extends VerifyDnsConfigurationResult, __MetadataBearer {}

/**
 * <p>Verify the DNS configuration for your domain names. This API operation checks whether your domain name points to the correct routing endpoint of the connection group, such as d111111abcdef8.cloudfront.net. You can use this API operation to troubleshoot and resolve DNS configuration issues.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, VerifyDnsConfigurationCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, VerifyDnsConfigurationCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // VerifyDnsConfigurationRequest
 *   Domain: "STRING_VALUE",
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new VerifyDnsConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // VerifyDnsConfigurationResult
 * //   DnsConfigurationList: [ // DnsConfigurationList
 * //     { // DnsConfiguration
 * //       Domain: "STRING_VALUE", // required
 * //       Status: "valid-configuration" || "invalid-configuration" || "unknown-configuration", // required
 * //       Reason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param VerifyDnsConfigurationCommandInput - {@link VerifyDnsConfigurationCommandInput}
 * @returns {@link VerifyDnsConfigurationCommandOutput}
 * @see {@link VerifyDnsConfigurationCommandInput} for command's `input` shape.
 * @see {@link VerifyDnsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class VerifyDnsConfigurationCommand extends $Command
  .classBuilder<
    VerifyDnsConfigurationCommandInput,
    VerifyDnsConfigurationCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "VerifyDnsConfiguration", {})
  .n("CloudFrontClient", "VerifyDnsConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_VerifyDnsConfigurationCommand)
  .de(de_VerifyDnsConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: VerifyDnsConfigurationRequest;
      output: VerifyDnsConfigurationResult;
    };
    sdk: {
      input: VerifyDnsConfigurationCommandInput;
      output: VerifyDnsConfigurationCommandOutput;
    };
  };
}
