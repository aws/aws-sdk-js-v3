// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AuthorizeEndpointAccessMessage, EndpointAuthorization } from "../models/models_0";
import { de_AuthorizeEndpointAccessCommand, se_AuthorizeEndpointAccessCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AuthorizeEndpointAccessCommand}.
 */
export interface AuthorizeEndpointAccessCommandInput extends AuthorizeEndpointAccessMessage {}
/**
 * @public
 *
 * The output of {@link AuthorizeEndpointAccessCommand}.
 */
export interface AuthorizeEndpointAccessCommandOutput extends EndpointAuthorization, __MetadataBearer {}

/**
 * <p>Grants access to a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AuthorizeEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AuthorizeEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RedshiftClient(config);
 * const input = { // AuthorizeEndpointAccessMessage
 *   ClusterIdentifier: "STRING_VALUE",
 *   Account: "STRING_VALUE", // required
 *   VpcIds: [ // VpcIdentifierList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AuthorizeEndpointAccessCommand(input);
 * const response = await client.send(command);
 * // { // EndpointAuthorization
 * //   Grantor: "STRING_VALUE",
 * //   Grantee: "STRING_VALUE",
 * //   ClusterIdentifier: "STRING_VALUE",
 * //   AuthorizeTime: new Date("TIMESTAMP"),
 * //   ClusterStatus: "STRING_VALUE",
 * //   Status: "Authorized" || "Revoking",
 * //   AllowedAllVPCs: true || false,
 * //   AllowedVPCs: [ // VpcIdentifierList
 * //     "STRING_VALUE",
 * //   ],
 * //   EndpointCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param AuthorizeEndpointAccessCommandInput - {@link AuthorizeEndpointAccessCommandInput}
 * @returns {@link AuthorizeEndpointAccessCommandOutput}
 * @see {@link AuthorizeEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link AuthorizeEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link EndpointAuthorizationAlreadyExistsFault} (client fault)
 *  <p>The authorization already exists for this endpoint.</p>
 *
 * @throws {@link EndpointAuthorizationsPerClusterLimitExceededFault} (client fault)
 *  <p>The number of endpoint authorizations per cluster has exceeded its limit.</p>
 *
 * @throws {@link InvalidAuthorizationStateFault} (client fault)
 *  <p>The status of the authorization is not valid.</p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class AuthorizeEndpointAccessCommand extends $Command
  .classBuilder<
    AuthorizeEndpointAccessCommandInput,
    AuthorizeEndpointAccessCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "AuthorizeEndpointAccess", {})
  .n("RedshiftClient", "AuthorizeEndpointAccessCommand")
  .f(void 0, void 0)
  .ser(se_AuthorizeEndpointAccessCommand)
  .de(de_AuthorizeEndpointAccessCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AuthorizeEndpointAccessMessage;
      output: EndpointAuthorization;
    };
    sdk: {
      input: AuthorizeEndpointAccessCommandInput;
      output: AuthorizeEndpointAccessCommandOutput;
    };
  };
}
