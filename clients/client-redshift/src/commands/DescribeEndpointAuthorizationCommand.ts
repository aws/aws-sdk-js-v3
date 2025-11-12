// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEndpointAuthorizationMessage, EndpointAuthorizationList } from "../models/models_1";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeEndpointAuthorization } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEndpointAuthorizationCommand}.
 */
export interface DescribeEndpointAuthorizationCommandInput extends DescribeEndpointAuthorizationMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEndpointAuthorizationCommand}.
 */
export interface DescribeEndpointAuthorizationCommandOutput extends EndpointAuthorizationList, __MetadataBearer {}

/**
 * <p>Describes an endpoint authorization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeEndpointAuthorizationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeEndpointAuthorizationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeEndpointAuthorizationMessage
 *   ClusterIdentifier: "STRING_VALUE",
 *   Account: "STRING_VALUE",
 *   Grantee: true || false,
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeEndpointAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // EndpointAuthorizationList
 * //   EndpointAuthorizationList: [ // EndpointAuthorizations
 * //     { // EndpointAuthorization
 * //       Grantor: "STRING_VALUE",
 * //       Grantee: "STRING_VALUE",
 * //       ClusterIdentifier: "STRING_VALUE",
 * //       AuthorizeTime: new Date("TIMESTAMP"),
 * //       ClusterStatus: "STRING_VALUE",
 * //       Status: "Authorized" || "Revoking",
 * //       AllowedAllVPCs: true || false,
 * //       AllowedVPCs: [ // VpcIdentifierList
 * //         "STRING_VALUE",
 * //       ],
 * //       EndpointCount: Number("int"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEndpointAuthorizationCommandInput - {@link DescribeEndpointAuthorizationCommandInput}
 * @returns {@link DescribeEndpointAuthorizationCommandOutput}
 * @see {@link DescribeEndpointAuthorizationCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
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
export class DescribeEndpointAuthorizationCommand extends $Command
  .classBuilder<
    DescribeEndpointAuthorizationCommandInput,
    DescribeEndpointAuthorizationCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeEndpointAuthorization", {})
  .n("RedshiftClient", "DescribeEndpointAuthorizationCommand")
  .sc(DescribeEndpointAuthorization)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEndpointAuthorizationMessage;
      output: EndpointAuthorizationList;
    };
    sdk: {
      input: DescribeEndpointAuthorizationCommandInput;
      output: DescribeEndpointAuthorizationCommandOutput;
    };
  };
}
