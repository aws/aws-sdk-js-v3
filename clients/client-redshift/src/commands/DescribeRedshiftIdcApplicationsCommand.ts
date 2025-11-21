// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRedshiftIdcApplicationsMessage, DescribeRedshiftIdcApplicationsResult } from "../models/models_0";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeRedshiftIdcApplications } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRedshiftIdcApplicationsCommand}.
 */
export interface DescribeRedshiftIdcApplicationsCommandInput extends DescribeRedshiftIdcApplicationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeRedshiftIdcApplicationsCommand}.
 */
export interface DescribeRedshiftIdcApplicationsCommandOutput
  extends DescribeRedshiftIdcApplicationsResult,
    __MetadataBearer {}

/**
 * <p>Lists the Amazon Redshift IAM Identity Center applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeRedshiftIdcApplicationsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeRedshiftIdcApplicationsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeRedshiftIdcApplicationsMessage
 *   RedshiftIdcApplicationArn: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeRedshiftIdcApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRedshiftIdcApplicationsResult
 * //   RedshiftIdcApplications: [ // RedshiftIdcApplicationList
 * //     { // RedshiftIdcApplication
 * //       IdcInstanceArn: "STRING_VALUE",
 * //       RedshiftIdcApplicationName: "STRING_VALUE",
 * //       RedshiftIdcApplicationArn: "STRING_VALUE",
 * //       IdentityNamespace: "STRING_VALUE",
 * //       IdcDisplayName: "STRING_VALUE",
 * //       IamRoleArn: "STRING_VALUE",
 * //       IdcManagedApplicationArn: "STRING_VALUE",
 * //       IdcOnboardStatus: "STRING_VALUE",
 * //       AuthorizedTokenIssuerList: [ // AuthorizedTokenIssuerList
 * //         { // AuthorizedTokenIssuer
 * //           TrustedTokenIssuerArn: "STRING_VALUE",
 * //           AuthorizedAudiencesList: [ // AuthorizedAudienceList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       ServiceIntegrations: [ // ServiceIntegrationList
 * //         { // ServiceIntegrationsUnion Union: only one key present
 * //           LakeFormation: [ // LakeFormationServiceIntegrations
 * //             { // LakeFormationScopeUnion Union: only one key present
 * //               LakeFormationQuery: { // LakeFormationQuery
 * //                 Authorization: "Enabled" || "Disabled", // required
 * //               },
 * //             },
 * //           ],
 * //           S3AccessGrants: [ // S3AccessGrantsServiceIntegrations
 * //             { // S3AccessGrantsScopeUnion Union: only one key present
 * //               ReadWriteAccess: { // ReadWriteAccess
 * //                 Authorization: "Enabled" || "Disabled", // required
 * //               },
 * //             },
 * //           ],
 * //           Redshift: [ // RedshiftServiceIntegrations
 * //             { // RedshiftScopeUnion Union: only one key present
 * //               Connect: { // Connect
 * //                 Authorization: "Enabled" || "Disabled", // required
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       ApplicationType: "None" || "Lakehouse",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SsoTagKeys: [ // TagKeyList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRedshiftIdcApplicationsCommandInput - {@link DescribeRedshiftIdcApplicationsCommandInput}
 * @returns {@link DescribeRedshiftIdcApplicationsCommandOutput}
 * @see {@link DescribeRedshiftIdcApplicationsCommandInput} for command's `input` shape.
 * @see {@link DescribeRedshiftIdcApplicationsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link DependentServiceAccessDeniedFault} (client fault)
 *  <p>A dependent service denied access for the integration.</p>
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *  <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 *
 * @throws {@link RedshiftIdcApplicationNotExistsFault} (client fault)
 *  <p>The application you attempted to find doesn't exist.</p>
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
export class DescribeRedshiftIdcApplicationsCommand extends $Command
  .classBuilder<
    DescribeRedshiftIdcApplicationsCommandInput,
    DescribeRedshiftIdcApplicationsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeRedshiftIdcApplications", {})
  .n("RedshiftClient", "DescribeRedshiftIdcApplicationsCommand")
  .sc(DescribeRedshiftIdcApplications)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRedshiftIdcApplicationsMessage;
      output: DescribeRedshiftIdcApplicationsResult;
    };
    sdk: {
      input: DescribeRedshiftIdcApplicationsCommandInput;
      output: DescribeRedshiftIdcApplicationsCommandOutput;
    };
  };
}
