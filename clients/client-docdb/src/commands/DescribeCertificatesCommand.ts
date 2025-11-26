// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CertificateMessage, DescribeCertificatesMessage } from "../models/models_0";
import { DescribeCertificates } from "../schemas/schemas_0";

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
 * <p>Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeCertificatesCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeCertificatesCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
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
 * //   Certificates: [ // CertificateList
 * //     { // Certificate
 * //       CertificateIdentifier: "STRING_VALUE",
 * //       CertificateType: "STRING_VALUE",
 * //       Thumbprint: "STRING_VALUE",
 * //       ValidFrom: new Date("TIMESTAMP"),
 * //       ValidTill: new Date("TIMESTAMP"),
 * //       CertificateArn: "STRING_VALUE",
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
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link CertificateNotFoundFault} (client fault)
 *  <p>
 *             <code>CertificateIdentifier</code> doesn't refer to an existing certificate. </p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 *
 * @public
 */
export class DescribeCertificatesCommand extends $Command
  .classBuilder<
    DescribeCertificatesCommandInput,
    DescribeCertificatesCommandOutput,
    DocDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeCertificates", {})
  .n("DocDBClient", "DescribeCertificatesCommand")
  .sc(DescribeCertificates)
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
