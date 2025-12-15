// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeHsmClientCertificatesMessage, HsmClientCertificateMessage } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeHsmClientCertificates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHsmClientCertificatesCommand}.
 */
export interface DescribeHsmClientCertificatesCommandInput extends DescribeHsmClientCertificatesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeHsmClientCertificatesCommand}.
 */
export interface DescribeHsmClientCertificatesCommandOutput extends HsmClientCertificateMessage, __MetadataBearer {}

/**
 * <p>Returns information about the specified HSM client certificate. If no certificate
 *             ID is specified, returns information about all the HSM certificates owned by your Amazon Web Services account.</p>
 *          <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all HSM client certificates that match any combination of the specified keys and values.
 *             For example, if you have <code>owner</code> and <code>environment</code> for tag keys,
 *             and <code>admin</code> and <code>test</code> for tag values, all HSM client certificates
 *             that have any combination of those values are returned.</p>
 *          <p>If both tag keys and values are omitted from the request, HSM client certificates
 *             are returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeHsmClientCertificatesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeHsmClientCertificatesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeHsmClientCertificatesMessage
 *   HsmClientCertificateIdentifier: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   TagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 *   TagValues: [ // TagValueList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeHsmClientCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // HsmClientCertificateMessage
 * //   Marker: "STRING_VALUE",
 * //   HsmClientCertificates: [ // HsmClientCertificateList
 * //     { // HsmClientCertificate
 * //       HsmClientCertificateIdentifier: "STRING_VALUE",
 * //       HsmClientCertificatePublicKey: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeHsmClientCertificatesCommandInput - {@link DescribeHsmClientCertificatesCommandInput}
 * @returns {@link DescribeHsmClientCertificatesCommandOutput}
 * @see {@link DescribeHsmClientCertificatesCommandInput} for command's `input` shape.
 * @see {@link DescribeHsmClientCertificatesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link HsmClientCertificateNotFoundFault} (client fault)
 *  <p>There is no Amazon Redshift HSM client certificate with the specified
 *             identifier.</p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DescribeHsmClientCertificatesCommand extends $Command
  .classBuilder<
    DescribeHsmClientCertificatesCommandInput,
    DescribeHsmClientCertificatesCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeHsmClientCertificates", {})
  .n("RedshiftClient", "DescribeHsmClientCertificatesCommand")
  .sc(DescribeHsmClientCertificates$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeHsmClientCertificatesMessage;
      output: HsmClientCertificateMessage;
    };
    sdk: {
      input: DescribeHsmClientCertificatesCommandInput;
      output: DescribeHsmClientCertificatesCommandOutput;
    };
  };
}
