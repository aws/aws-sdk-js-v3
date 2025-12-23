// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CustomDomainAssociationsMessage, DescribeCustomDomainAssociationsMessage } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeCustomDomainAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCustomDomainAssociationsCommand}.
 */
export interface DescribeCustomDomainAssociationsCommandInput extends DescribeCustomDomainAssociationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeCustomDomainAssociationsCommand}.
 */
export interface DescribeCustomDomainAssociationsCommandOutput extends CustomDomainAssociationsMessage, __MetadataBearer {}

/**
 * <p>Contains information about custom domain associations for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeCustomDomainAssociationsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeCustomDomainAssociationsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeCustomDomainAssociationsMessage
 *   CustomDomainName: "STRING_VALUE",
 *   CustomDomainCertificateArn: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeCustomDomainAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // CustomDomainAssociationsMessage
 * //   Marker: "STRING_VALUE",
 * //   Associations: [ // AssociationList
 * //     { // Association
 * //       CustomDomainCertificateArn: "STRING_VALUE",
 * //       CustomDomainCertificateExpiryDate: new Date("TIMESTAMP"),
 * //       CertificateAssociations: [ // CertificateAssociationList
 * //         { // CertificateAssociation
 * //           CustomDomainName: "STRING_VALUE",
 * //           ClusterIdentifier: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCustomDomainAssociationsCommandInput - {@link DescribeCustomDomainAssociationsCommandInput}
 * @returns {@link DescribeCustomDomainAssociationsCommandOutput}
 * @see {@link DescribeCustomDomainAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomDomainAssociationsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link CustomDomainAssociationNotFoundFault} (client fault)
 *  <p>An error occurred. The custom domain name couldn't be found.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DescribeCustomDomainAssociationsCommand extends $Command
  .classBuilder<
    DescribeCustomDomainAssociationsCommandInput,
    DescribeCustomDomainAssociationsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeCustomDomainAssociations", {})
  .n("RedshiftClient", "DescribeCustomDomainAssociationsCommand")
  .sc(DescribeCustomDomainAssociations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCustomDomainAssociationsMessage;
      output: CustomDomainAssociationsMessage;
    };
    sdk: {
      input: DescribeCustomDomainAssociationsCommandInput;
      output: DescribeCustomDomainAssociationsCommandOutput;
    };
  };
}
