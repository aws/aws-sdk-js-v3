// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CertificateMessage, DescribeCertificatesMessage } from "../models/models_1";
import { de_DescribeCertificatesCommand, se_DescribeCertificatesCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCertificatesCommand}.
 */
export interface DescribeCertificatesCommandInput extends DescribeCertificatesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeCertificatesCommand}.
 */
export interface DescribeCertificatesCommandOutput extends CertificateMessage, __MetadataBearer {}

/**
 * <p>Lists the set of certificate authority (CA) certificates provided by Amazon RDS for this Amazon Web Services account.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html">Using SSL/TLS to encrypt a connection to a DB
 *             instance</a> in the <i>Amazon RDS User Guide</i> and
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html">
 *             Using SSL/TLS to encrypt a connection to a DB cluster</a> in the <i>Amazon Aurora
 *             User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeCertificatesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeCertificatesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RDSClient(config);
 * const input = { // DescribeCertificatesMessage
 *   CertificateIdentifier: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // CertificateMessage
 * //   DefaultCertificateForNewLaunches: "STRING_VALUE",
 * //   Certificates: [ // CertificateList
 * //     { // Certificate
 * //       CertificateIdentifier: "STRING_VALUE",
 * //       CertificateType: "STRING_VALUE",
 * //       Thumbprint: "STRING_VALUE",
 * //       ValidFrom: new Date("TIMESTAMP"),
 * //       ValidTill: new Date("TIMESTAMP"),
 * //       CertificateArn: "STRING_VALUE",
 * //       CustomerOverride: true || false,
 * //       CustomerOverrideValidTill: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCertificatesCommandInput - {@link DescribeCertificatesCommandInput}
 * @returns {@link DescribeCertificatesCommandOutput}
 * @see {@link DescribeCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificatesCommandOutput} for command's `response` shape.
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
 * @public
 * @example To describe certificates
 * ```javascript
 * // The following example retrieves the details of the certificate associated with the user's default region.
 * const input = {};
 * const command = new DescribeCertificatesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Certificates": [
 *     {
 *       "CertificateArn": "arn:aws:rds:us-east-1::cert:rds-ca-ecc384-g1",
 *       "CertificateIdentifier": "rds-ca-ecc384-g1",
 *       "CertificateType": "CA",
 *       "CustomerOverride": false,
 *       "Thumbprint": "24a97b91cbe86911190576c35c36aab4fEXAMPLE",
 *       "ValidFrom": "2021-05-25T22:41:55+00:00",
 *       "ValidTill": "2121-05-25T23:41:55+00:00"
 *     },
 *     {
 *       "CertificateArn": "arn:aws:rds:us-east-1::cert:rds-ca-rsa4096-g1",
 *       "CertificateIdentifier": "rds-ca-rsa4096-g1",
 *       "CertificateType": "CA",
 *       "CustomerOverride": false,
 *       "Thumbprint": "9da6fa7fd2ec09c569a400d876b01b0c1EXAMPLE",
 *       "ValidFrom": "2021-05-25T22:38:35+00:00",
 *       "ValidTill": "2121-05-25T23:38:35+00:00"
 *     },
 *     {
 *       "CertificateArn": "arn:aws:rds:us-east-1::cert:rds-ca-rsa2048-g1",
 *       "CertificateIdentifier": "rds-ca-rsa2048-g1",
 *       "CertificateType": "CA",
 *       "CustomerOverride": true,
 *       "CustomerOverrideValidTill": "2061-05-25T23:34:57+00:00",
 *       "Thumbprint": "2fa77ef894d983ba9d37ad699c84ab0f6EXAMPLE",
 *       "ValidFrom": "2021-05-25T22:34:57+00:00",
 *       "ValidTill": "2061-05-25T23:34:57+00:00"
 *     },
 *     {
 *       "CertificateArn": "arn:aws:rds:us-east-1::cert:rds-ca-2019",
 *       "CertificateIdentifier": "rds-ca-2019",
 *       "CertificateType": "CA",
 *       "CustomerOverride": false,
 *       "Thumbprint": "f0ed823ed14447bab557fdf3e49274669EXAMPLE",
 *       "ValidFrom": "2019-09-19T18:16:53+00:00",
 *       "ValidTill": "2024-08-22T17:08:50+00:00"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-certificates-1680211777663
 * ```
 *
 */
export class DescribeCertificatesCommand extends $Command
  .classBuilder<
    DescribeCertificatesCommandInput,
    DescribeCertificatesCommandOutput,
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
  .s("AmazonRDSv19", "DescribeCertificates", {})
  .n("RDSClient", "DescribeCertificatesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCertificatesCommand)
  .de(de_DescribeCertificatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCertificatesMessage;
      output: CertificateMessage;
    };
    sdk: {
      input: DescribeCertificatesCommandInput;
      output: DescribeCertificatesCommandOutput;
    };
  };
}
