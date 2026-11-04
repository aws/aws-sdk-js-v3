// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { VerifyDnsConfigurationRequest, VerifyDnsConfigurationResult } from "../models/models_1";
import { VerifyDnsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Verify the DNS configuration for your domain names. This API operation checks whether your domain name points to the correct routing endpoint of the connection group, such as d111111abcdef8.cloudfront.net. You can use this API operation to troubleshoot and resolve DNS configuration issues.
 *
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
 *
 * Access denied.
 *
 * @throws {@link EntityNotFound} (client fault)
 *
 * The entity was not found.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class VerifyDnsConfigurationCommand extends command<VerifyDnsConfigurationCommandInput, VerifyDnsConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "VerifyDnsConfiguration",
  VerifyDnsConfiguration$
) {
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
