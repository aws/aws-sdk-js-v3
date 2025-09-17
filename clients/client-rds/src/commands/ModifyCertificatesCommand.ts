// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyCertificatesMessage, ModifyCertificatesResult } from "../models/models_1";
import { de_ModifyCertificatesCommand, se_ModifyCertificatesCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyCertificatesCommand}.
 */
export interface ModifyCertificatesCommandInput extends ModifyCertificatesMessage {}
/**
 * @public
 *
 * The output of {@link ModifyCertificatesCommand}.
 */
export interface ModifyCertificatesCommandOutput extends ModifyCertificatesResult, __MetadataBearer {}

/**
 * <p>Override the system-default Secure Sockets Layer/Transport Layer Security (SSL/TLS)
 *           certificate for Amazon RDS for new DB instances, or remove the override.</p>
 *          <p>By using this operation, you can specify an RDS-approved SSL/TLS certificate for new DB
 *             instances that is different from the default certificate provided by RDS. You can also
 *             use this operation to remove the override, so that new DB instances use the default
 *             certificate provided by RDS.</p>
 *          <p>You might need to override the default certificate in the following situations:</p>
 *          <ul>
 *             <li>
 *                <p>You already migrated your applications to support the latest certificate authority (CA) certificate, but the new CA certificate is not yet
 *                   the RDS default CA certificate for the specified Amazon Web Services Region.</p>
 *             </li>
 *             <li>
 *                <p>RDS has already moved to a new default CA certificate for the specified Amazon Web Services
 *                     Region, but you are still in the process of supporting the new CA certificate.
 *                     In this case, you temporarily need additional time to finish your application
 *                     changes.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html">
 *               Rotating Your SSL/TLS Certificate</a> in the <i>Amazon RDS User Guide</i>.</p>
 *          <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html">
 *               Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyCertificatesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyCertificatesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // ModifyCertificatesMessage
 *   CertificateIdentifier: "STRING_VALUE",
 *   RemoveCustomerOverride: true || false,
 * };
 * const command = new ModifyCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ModifyCertificatesResult
 * //   Certificate: { // Certificate
 * //     CertificateIdentifier: "STRING_VALUE",
 * //     CertificateType: "STRING_VALUE",
 * //     Thumbprint: "STRING_VALUE",
 * //     ValidFrom: new Date("TIMESTAMP"),
 * //     ValidTill: new Date("TIMESTAMP"),
 * //     CertificateArn: "STRING_VALUE",
 * //     CustomerOverride: true || false,
 * //     CustomerOverrideValidTill: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyCertificatesCommandInput - {@link ModifyCertificatesCommandInput}
 * @returns {@link ModifyCertificatesCommandOutput}
 * @see {@link ModifyCertificatesCommandInput} for command's `input` shape.
 * @see {@link ModifyCertificatesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link CertificateNotFoundFault} (client fault)
 *  <p>
 *             <code>CertificateIdentifier</code> doesn't refer to an
 *         existing certificate.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To temporarily override the system-default SSL/TLS certificate for new DB instances
 * ```javascript
 * // The following example temporarily overrides the system-default SSL/TLS certificate for new DB instances.
 * const input = {
 *   CertificateIdentifier: "rds-ca-2019"
 * };
 * const command = new ModifyCertificatesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Certificate: {
 *     CertificateArn: "arn:aws:rds:us-east-1::cert:rds-ca-2019",
 *     CertificateIdentifier: "rds-ca-2019",
 *     CertificateType: "CA",
 *     CustomerOverride: true,
 *     CustomerOverrideValidTill: "2024-08-22T17:08:50Z",
 *     Thumbprint: "EXAMPLE123456789012",
 *     ValidFrom: "2019-09-19T18:16:53Z",
 *     ValidTill: "2024-08-22T17:08:50Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyCertificatesCommand extends $Command
  .classBuilder<
    ModifyCertificatesCommandInput,
    ModifyCertificatesCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "ModifyCertificates", {})
  .n("RDSClient", "ModifyCertificatesCommand")
  .f(void 0, void 0)
  .ser(se_ModifyCertificatesCommand)
  .de(de_ModifyCertificatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyCertificatesMessage;
      output: ModifyCertificatesResult;
    };
    sdk: {
      input: ModifyCertificatesCommandInput;
      output: ModifyCertificatesCommandOutput;
    };
  };
}
