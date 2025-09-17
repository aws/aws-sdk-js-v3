// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CustomDomainAssociationsMessage } from "../models/models_0";
import { DescribeCustomDomainAssociationsMessage } from "../models/models_1";
import {
  de_DescribeCustomDomainAssociationsCommand,
  se_DescribeCustomDomainAssociationsCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

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
export interface DescribeCustomDomainAssociationsCommandOutput
  extends CustomDomainAssociationsMessage,
    __MetadataBearer {}

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "DescribeCustomDomainAssociations", {})
  .n("RedshiftClient", "DescribeCustomDomainAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCustomDomainAssociationsCommand)
  .de(de_DescribeCustomDomainAssociationsCommand)
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
