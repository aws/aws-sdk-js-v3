// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ClusterCredentials, GetClusterCredentialsMessage } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { GetClusterCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetClusterCredentialsCommand}.
 */
export interface GetClusterCredentialsCommandInput extends GetClusterCredentialsMessage {}
/**
 * @public
 *
 * The output of {@link GetClusterCredentialsCommand}.
 */
export interface GetClusterCredentialsCommandOutput extends ClusterCredentials, __MetadataBearer {}

/**
 * <p>Returns a database user name and temporary password with temporary authorization to
 *             log on to an Amazon Redshift database. The action returns the database user name
 *             prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or
 *                 <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can
 *             optionally specify one or more database user groups that the user will join at log on.
 *             By default, the temporary credentials expire in 900 seconds. You can optionally specify
 *             a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more
 *             information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication
 *                 to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p>
 *          <p>The Identity and Access Management (IAM) user or role that runs
 *             GetClusterCredentials must have an IAM policy attached that allows access to all
 *             necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the
 *             Amazon Redshift Cluster Management Guide.</p>
 *          <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the
 *                 <code>redshift:JoinGroup</code> action with access to the listed
 *                 <code>dbgroups</code>. </p>
 *          <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>,
 *             then the policy must include the <code>redshift:CreateClusterUser</code>
 *             permission.</p>
 *          <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access
 *             to the resource <code>dbname</code> for the specified database name. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, GetClusterCredentialsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, GetClusterCredentialsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // GetClusterCredentialsMessage
 *   DbUser: "STRING_VALUE", // required
 *   DbName: "STRING_VALUE",
 *   ClusterIdentifier: "STRING_VALUE",
 *   DurationSeconds: Number("int"),
 *   AutoCreate: true || false,
 *   DbGroups: [ // DbGroupList
 *     "STRING_VALUE",
 *   ],
 *   CustomDomainName: "STRING_VALUE",
 * };
 * const command = new GetClusterCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // ClusterCredentials
 * //   DbUser: "STRING_VALUE",
 * //   DbPassword: "STRING_VALUE",
 * //   Expiration: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetClusterCredentialsCommandInput - {@link GetClusterCredentialsCommandInput}
 * @returns {@link GetClusterCredentialsCommandOutput}
 * @see {@link GetClusterCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetClusterCredentialsCommandOutput} for command's `response` shape.
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
export class GetClusterCredentialsCommand extends $Command
  .classBuilder<
    GetClusterCredentialsCommandInput,
    GetClusterCredentialsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "GetClusterCredentials", {})
  .n("RedshiftClient", "GetClusterCredentialsCommand")
  .sc(GetClusterCredentials$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClusterCredentialsMessage;
      output: ClusterCredentials;
    };
    sdk: {
      input: GetClusterCredentialsCommandInput;
      output: GetClusterCredentialsCommandOutput;
    };
  };
}
