// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EndpointAuthorization } from "../models/models_0";
import type { RevokeEndpointAccessMessage } from "../models/models_1";
import { RevokeEndpointAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RevokeEndpointAccessCommand}.
 */
export interface RevokeEndpointAccessCommandInput extends RevokeEndpointAccessMessage {}
/**
 * @public
 *
 * The output of {@link RevokeEndpointAccessCommand}.
 */
export interface RevokeEndpointAccessCommandOutput extends EndpointAuthorization, __MetadataBearer {}

/**
 * Revokes access to a cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RevokeEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RevokeEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // RevokeEndpointAccessMessage
 *   ClusterIdentifier: "STRING_VALUE",
 *   Account: "STRING_VALUE",
 *   VpcIds: [ // VpcIdentifierList
 *     "STRING_VALUE",
 *   ],
 *   Force: true || false,
 * };
 * const command = new RevokeEndpointAccessCommand(input);
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
 * @param RevokeEndpointAccessCommandInput - {@link RevokeEndpointAccessCommandInput}
 * @returns {@link RevokeEndpointAccessCommandOutput}
 * @see {@link RevokeEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link RevokeEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *
 * The `ClusterIdentifier` parameter does not refer to an existing cluster.
 *
 * @throws {@link EndpointAuthorizationNotFoundFault} (client fault)
 *
 * The authorization for this endpoint can't be found.
 *
 * @throws {@link EndpointNotFoundFault} (client fault)
 *
 * The endpoint name doesn't refer to an existing endpoint.
 *
 * @throws {@link InvalidAuthorizationStateFault} (client fault)
 *
 * The status of the authorization is not valid.
 *
 * @throws {@link InvalidClusterSecurityGroupStateFault} (client fault)
 *
 * The state of the cluster security group is not `available`.
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *
 * The specified cluster is not in the `available` state.
 *
 * @throws {@link InvalidEndpointStateFault} (client fault)
 *
 * The status of the endpoint is not valid.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class RevokeEndpointAccessCommand extends command<RevokeEndpointAccessCommandInput, RevokeEndpointAccessCommandOutput>(
  _ep0,
  _mw0,
  "RevokeEndpointAccess",
  RevokeEndpointAccess$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeEndpointAccessMessage;
      output: EndpointAuthorization;
    };
    sdk: {
      input: RevokeEndpointAccessCommandInput;
      output: RevokeEndpointAccessCommandOutput;
    };
  };
}
