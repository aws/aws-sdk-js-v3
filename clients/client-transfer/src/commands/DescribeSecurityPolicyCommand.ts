// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSecurityPolicyRequest, DescribeSecurityPolicyResponse } from "../models/models_0";
import { de_DescribeSecurityPolicyCommand, se_DescribeSecurityPolicyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSecurityPolicyCommand}.
 */
export interface DescribeSecurityPolicyCommandInput extends DescribeSecurityPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSecurityPolicyCommand}.
 */
export interface DescribeSecurityPolicyCommandOutput extends DescribeSecurityPolicyResponse, __MetadataBearer {}

/**
 * <p>Describes the security policy that is attached to your server or SFTP connector. The response contains a description of the security policy's properties. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies for servers</a> or <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies-connectors.html">Working with security policies for SFTP connectors</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeSecurityPolicyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeSecurityPolicyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // DescribeSecurityPolicyRequest
 *   SecurityPolicyName: "STRING_VALUE", // required
 * };
 * const command = new DescribeSecurityPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecurityPolicyResponse
 * //   SecurityPolicy: { // DescribedSecurityPolicy
 * //     Fips: true || false,
 * //     SecurityPolicyName: "STRING_VALUE", // required
 * //     SshCiphers: [ // SecurityPolicyOptions
 * //       "STRING_VALUE",
 * //     ],
 * //     SshKexs: [
 * //       "STRING_VALUE",
 * //     ],
 * //     SshMacs: [
 * //       "STRING_VALUE",
 * //     ],
 * //     TlsCiphers: [
 * //       "STRING_VALUE",
 * //     ],
 * //     SshHostKeyAlgorithms: [
 * //       "STRING_VALUE",
 * //     ],
 * //     Type: "SERVER" || "CONNECTOR",
 * //     Protocols: [ // SecurityPolicyProtocols
 * //       "SFTP" || "FTPS",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSecurityPolicyCommandInput - {@link DescribeSecurityPolicyCommandInput}
 * @returns {@link DescribeSecurityPolicyCommandOutput}
 * @see {@link DescribeSecurityPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityPolicyCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class DescribeSecurityPolicyCommand extends $Command
  .classBuilder<
    DescribeSecurityPolicyCommandInput,
    DescribeSecurityPolicyCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TransferService", "DescribeSecurityPolicy", {})
  .n("TransferClient", "DescribeSecurityPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSecurityPolicyCommand)
  .de(de_DescribeSecurityPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSecurityPolicyRequest;
      output: DescribeSecurityPolicyResponse;
    };
    sdk: {
      input: DescribeSecurityPolicyCommandInput;
      output: DescribeSecurityPolicyCommandOutput;
    };
  };
}
