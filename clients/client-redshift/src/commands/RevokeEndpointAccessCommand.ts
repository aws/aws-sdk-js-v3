// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EndpointAuthorization } from "../models/models_0";
import type { RevokeEndpointAccessMessage } from "../models/models_1";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { RevokeEndpointAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Revokes access to a cluster.</p>
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
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link EndpointAuthorizationNotFoundFault} (client fault)
 *  <p>The authorization for this endpoint can't be found.</p>
 *
 * @throws {@link EndpointNotFoundFault} (client fault)
 *  <p>The endpoint name doesn't refer to an existing endpoint.</p>
 *
 * @throws {@link InvalidAuthorizationStateFault} (client fault)
 *  <p>The status of the authorization is not valid.</p>
 *
 * @throws {@link InvalidClusterSecurityGroupStateFault} (client fault)
 *  <p>The state of the cluster security group is not <code>available</code>. </p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link InvalidEndpointStateFault} (client fault)
 *  <p>The status of the endpoint is not valid.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class RevokeEndpointAccessCommand extends $Command
  .classBuilder<
    RevokeEndpointAccessCommandInput,
    RevokeEndpointAccessCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "RevokeEndpointAccess", {})
  .n("RedshiftClient", "RevokeEndpointAccessCommand")
  .sc(RevokeEndpointAccess$)
  .build() {
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
