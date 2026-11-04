// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AuthorizeEndpointAccessMessage, EndpointAuthorization } from "../models/models_0";
import { AuthorizeEndpointAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Grants access to a cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AuthorizeEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AuthorizeEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
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
 *
 * The `ClusterIdentifier` parameter does not refer to an existing cluster.
 *
 * @throws {@link EndpointAuthorizationAlreadyExistsFault} (client fault)
 *
 * The authorization already exists for this endpoint.
 *
 * @throws {@link EndpointAuthorizationsPerClusterLimitExceededFault} (client fault)
 *
 * The number of endpoint authorizations per cluster has exceeded its limit.
 *
 * @throws {@link InvalidAuthorizationStateFault} (client fault)
 *
 * The status of the authorization is not valid.
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *
 * The specified cluster is not in the `available` state.
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *
 * The requested operation isn't supported.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class AuthorizeEndpointAccessCommand extends command<AuthorizeEndpointAccessCommandInput, AuthorizeEndpointAccessCommandOutput>(
  _ep0,
  _mw0,
  "AuthorizeEndpointAccess",
  AuthorizeEndpointAccess$
) {
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
