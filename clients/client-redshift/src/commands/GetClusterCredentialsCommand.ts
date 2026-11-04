// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ClusterCredentials, GetClusterCredentialsMessage } from "../models/models_0";
import { GetClusterCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a database user name and temporary password with temporary authorization to log on to an Amazon Redshift database. The action returns the database user name prefixed with `IAM:` if `AutoCreate` is `False` or `IAMA:` if `AutoCreate` is `True`. You can optionally specify one or more database user groups that the user will join at log on. By default, the temporary credentials expire in 900 seconds. You can optionally specify a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more information, see [Using IAM Authentication to Generate Database User Credentials](https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html) in the Amazon Redshift Cluster Management Guide.
 *
 * The Identity and Access Management (IAM) user or role that runs GetClusterCredentials must have an IAM policy attached that allows access to all necessary actions and resources. For more information about permissions, see [Resource Policies for GetClusterCredentials](https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources) in the Amazon Redshift Cluster Management Guide.
 *
 * If the `DbGroups` parameter is specified, the IAM policy must allow the `redshift:JoinGroup` action with access to the listed `dbgroups`.
 *
 * In addition, if the `AutoCreate` parameter is set to `True`, then the policy must include the `redshift:CreateClusterUser` permission.
 *
 * If the `DbName` parameter is specified, the IAM policy must allow access to the resource `dbname` for the specified database name.
 *
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
 *
 * The `ClusterIdentifier` parameter does not refer to an existing cluster.
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
export class GetClusterCredentialsCommand extends command<GetClusterCredentialsCommandInput, GetClusterCredentialsCommandOutput>(
  _ep0,
  _mw0,
  "GetClusterCredentials",
  GetClusterCredentials$
) {
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
