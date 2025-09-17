// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ClusterExtendedCredentials, ClusterExtendedCredentialsFilterSensitiveLog } from "../models/models_0";
import { GetClusterCredentialsWithIAMMessage } from "../models/models_1";
import { de_GetClusterCredentialsWithIAMCommand, se_GetClusterCredentialsWithIAMCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetClusterCredentialsWithIAMCommand}.
 */
export interface GetClusterCredentialsWithIAMCommandInput extends GetClusterCredentialsWithIAMMessage {}
/**
 * @public
 *
 * The output of {@link GetClusterCredentialsWithIAMCommand}.
 */
export interface GetClusterCredentialsWithIAMCommandOutput extends ClusterExtendedCredentials, __MetadataBearer {}

/**
 * <p>Returns a database user name and temporary password with temporary authorization to
 *             log in to an Amazon Redshift database.
 *             The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity.
 *             For more information about IAM identities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html">IAM Identities (users, user groups, and roles)</a> in the
 *             Amazon Web Services Identity and Access Management User Guide.</p>
 *          <p>The Identity and Access Management (IAM) identity that runs
 *             this operation must have an IAM policy attached that allows access to all
 *             necessary actions and resources.
 *                 For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using identity-based policies (IAM policies)</a> in the
 *             Amazon Redshift Cluster Management Guide. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, GetClusterCredentialsWithIAMCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, GetClusterCredentialsWithIAMCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // GetClusterCredentialsWithIAMMessage
 *   DbName: "STRING_VALUE",
 *   ClusterIdentifier: "STRING_VALUE",
 *   DurationSeconds: Number("int"),
 *   CustomDomainName: "STRING_VALUE",
 * };
 * const command = new GetClusterCredentialsWithIAMCommand(input);
 * const response = await client.send(command);
 * // { // ClusterExtendedCredentials
 * //   DbUser: "STRING_VALUE",
 * //   DbPassword: "STRING_VALUE",
 * //   Expiration: new Date("TIMESTAMP"),
 * //   NextRefreshTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetClusterCredentialsWithIAMCommandInput - {@link GetClusterCredentialsWithIAMCommandInput}
 * @returns {@link GetClusterCredentialsWithIAMCommandOutput}
 * @see {@link GetClusterCredentialsWithIAMCommandInput} for command's `input` shape.
 * @see {@link GetClusterCredentialsWithIAMCommandOutput} for command's `response` shape.
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
export class GetClusterCredentialsWithIAMCommand extends $Command
  .classBuilder<
    GetClusterCredentialsWithIAMCommandInput,
    GetClusterCredentialsWithIAMCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "GetClusterCredentialsWithIAM", {})
  .n("RedshiftClient", "GetClusterCredentialsWithIAMCommand")
  .f(void 0, ClusterExtendedCredentialsFilterSensitiveLog)
  .ser(se_GetClusterCredentialsWithIAMCommand)
  .de(de_GetClusterCredentialsWithIAMCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClusterCredentialsWithIAMMessage;
      output: ClusterExtendedCredentials;
    };
    sdk: {
      input: GetClusterCredentialsWithIAMCommandInput;
      output: GetClusterCredentialsWithIAMCommandOutput;
    };
  };
}
