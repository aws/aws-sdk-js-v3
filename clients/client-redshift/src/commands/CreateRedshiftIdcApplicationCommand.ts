// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateRedshiftIdcApplicationMessage, CreateRedshiftIdcApplicationResult } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateRedshiftIdcApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRedshiftIdcApplicationCommand}.
 */
export interface CreateRedshiftIdcApplicationCommandInput extends CreateRedshiftIdcApplicationMessage {}
/**
 * @public
 *
 * The output of {@link CreateRedshiftIdcApplicationCommand}.
 */
export interface CreateRedshiftIdcApplicationCommandOutput extends CreateRedshiftIdcApplicationResult, __MetadataBearer {}

/**
 * <p>Creates an Amazon Redshift application for use with IAM Identity Center.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateRedshiftIdcApplicationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateRedshiftIdcApplicationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // CreateRedshiftIdcApplicationMessage
 *   IdcInstanceArn: "STRING_VALUE", // required
 *   RedshiftIdcApplicationName: "STRING_VALUE", // required
 *   IdentityNamespace: "STRING_VALUE",
 *   IdcDisplayName: "STRING_VALUE", // required
 *   IamRoleArn: "STRING_VALUE", // required
 *   AuthorizedTokenIssuerList: [ // AuthorizedTokenIssuerList
 *     { // AuthorizedTokenIssuer
 *       TrustedTokenIssuerArn: "STRING_VALUE",
 *       AuthorizedAudiencesList: [ // AuthorizedAudienceList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ServiceIntegrations: [ // ServiceIntegrationList
 *     { // ServiceIntegrationsUnion Union: only one key present
 *       LakeFormation: [ // LakeFormationServiceIntegrations
 *         { // LakeFormationScopeUnion Union: only one key present
 *           LakeFormationQuery: { // LakeFormationQuery
 *             Authorization: "Enabled" || "Disabled", // required
 *           },
 *         },
 *       ],
 *       S3AccessGrants: [ // S3AccessGrantsServiceIntegrations
 *         { // S3AccessGrantsScopeUnion Union: only one key present
 *           ReadWriteAccess: { // ReadWriteAccess
 *             Authorization: "Enabled" || "Disabled", // required
 *           },
 *         },
 *       ],
 *       Redshift: [ // RedshiftServiceIntegrations
 *         { // RedshiftScopeUnion Union: only one key present
 *           Connect: { // Connect
 *             Authorization: "Enabled" || "Disabled", // required
 *           },
 *         },
 *       ],
 *     },
 *   ],
 *   ApplicationType: "None" || "Lakehouse",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   SsoTagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateRedshiftIdcApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateRedshiftIdcApplicationResult
 * //   RedshiftIdcApplication: { // RedshiftIdcApplication
 * //     IdcInstanceArn: "STRING_VALUE",
 * //     RedshiftIdcApplicationName: "STRING_VALUE",
 * //     RedshiftIdcApplicationArn: "STRING_VALUE",
 * //     IdentityNamespace: "STRING_VALUE",
 * //     IdcDisplayName: "STRING_VALUE",
 * //     IamRoleArn: "STRING_VALUE",
 * //     IdcManagedApplicationArn: "STRING_VALUE",
 * //     IdcOnboardStatus: "STRING_VALUE",
 * //     AuthorizedTokenIssuerList: [ // AuthorizedTokenIssuerList
 * //       { // AuthorizedTokenIssuer
 * //         TrustedTokenIssuerArn: "STRING_VALUE",
 * //         AuthorizedAudiencesList: [ // AuthorizedAudienceList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     ServiceIntegrations: [ // ServiceIntegrationList
 * //       { // ServiceIntegrationsUnion Union: only one key present
 * //         LakeFormation: [ // LakeFormationServiceIntegrations
 * //           { // LakeFormationScopeUnion Union: only one key present
 * //             LakeFormationQuery: { // LakeFormationQuery
 * //               Authorization: "Enabled" || "Disabled", // required
 * //             },
 * //           },
 * //         ],
 * //         S3AccessGrants: [ // S3AccessGrantsServiceIntegrations
 * //           { // S3AccessGrantsScopeUnion Union: only one key present
 * //             ReadWriteAccess: { // ReadWriteAccess
 * //               Authorization: "Enabled" || "Disabled", // required
 * //             },
 * //           },
 * //         ],
 * //         Redshift: [ // RedshiftServiceIntegrations
 * //           { // RedshiftScopeUnion Union: only one key present
 * //             Connect: { // Connect
 * //               Authorization: "Enabled" || "Disabled", // required
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     ApplicationType: "None" || "Lakehouse",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SsoTagKeys: [ // TagKeyList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRedshiftIdcApplicationCommandInput - {@link CreateRedshiftIdcApplicationCommandInput}
 * @returns {@link CreateRedshiftIdcApplicationCommandOutput}
 * @see {@link CreateRedshiftIdcApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateRedshiftIdcApplicationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link DependentServiceAccessDeniedFault} (client fault)
 *  <p>A dependent service denied access for the integration.</p>
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *  <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link RedshiftIdcApplicationAlreadyExistsFault} (client fault)
 *  <p>The application you attempted to add already exists.</p>
 *
 * @throws {@link RedshiftIdcApplicationQuotaExceededFault} (client fault)
 *  <p>The maximum number of Redshift IAM Identity Center applications was exceeded.</p>
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *  <p>You have exceeded the number of tags allowed.</p>
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
export class CreateRedshiftIdcApplicationCommand extends $Command
  .classBuilder<
    CreateRedshiftIdcApplicationCommandInput,
    CreateRedshiftIdcApplicationCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "CreateRedshiftIdcApplication", {})
  .n("RedshiftClient", "CreateRedshiftIdcApplicationCommand")
  .sc(CreateRedshiftIdcApplication$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRedshiftIdcApplicationMessage;
      output: CreateRedshiftIdcApplicationResult;
    };
    sdk: {
      input: CreateRedshiftIdcApplicationCommandInput;
      output: CreateRedshiftIdcApplicationCommandOutput;
    };
  };
}
