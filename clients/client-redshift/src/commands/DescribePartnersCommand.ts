// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePartnersInputMessage, DescribePartnersOutputMessage } from "../models/models_0";
import { DescribePartners$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribePartnersCommand}.
 */
export interface DescribePartnersCommandInput extends DescribePartnersInputMessage {}
/**
 * @public
 *
 * The output of {@link DescribePartnersCommand}.
 */
export interface DescribePartnersCommandOutput extends DescribePartnersOutputMessage, __MetadataBearer {}

/**
 * <p>Returns information about the partner integrations defined for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribePartnersCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribePartnersCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribePartnersInputMessage
 *   AccountId: "STRING_VALUE", // required
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE",
 *   PartnerName: "STRING_VALUE",
 * };
 * const command = new DescribePartnersCommand(input);
 * const response = await client.send(command);
 * // { // DescribePartnersOutputMessage
 * //   PartnerIntegrationInfoList: [ // PartnerIntegrationInfoList
 * //     { // PartnerIntegrationInfo
 * //       DatabaseName: "STRING_VALUE",
 * //       PartnerName: "STRING_VALUE",
 * //       Status: "Active" || "Inactive" || "RuntimeFailure" || "ConnectionFailure",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribePartnersCommandInput - {@link DescribePartnersCommandInput}
 * @returns {@link DescribePartnersCommandOutput}
 * @see {@link DescribePartnersCommandInput} for command's `input` shape.
 * @see {@link DescribePartnersCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link UnauthorizedPartnerIntegrationFault} (client fault)
 *  <p>The partner integration is not authorized.</p>
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
export class DescribePartnersCommand extends command<DescribePartnersCommandInput, DescribePartnersCommandOutput>(
  _ep0,
  _mw0,
  "DescribePartners",
  DescribePartners$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePartnersInputMessage;
      output: DescribePartnersOutputMessage;
    };
    sdk: {
      input: DescribePartnersCommandInput;
      output: DescribePartnersCommandOutput;
    };
  };
}
