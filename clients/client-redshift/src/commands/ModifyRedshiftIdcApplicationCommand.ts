// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyRedshiftIdcApplicationMessage, ModifyRedshiftIdcApplicationResult } from "../models/models_1";
import { de_ModifyRedshiftIdcApplicationCommand, se_ModifyRedshiftIdcApplicationCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyRedshiftIdcApplicationCommand}.
 */
export interface ModifyRedshiftIdcApplicationCommandInput extends ModifyRedshiftIdcApplicationMessage {}
/**
 * @public
 *
 * The output of {@link ModifyRedshiftIdcApplicationCommand}.
 */
export interface ModifyRedshiftIdcApplicationCommandOutput
  extends ModifyRedshiftIdcApplicationResult,
    __MetadataBearer {}

/**
 * <p>Changes an existing Amazon Redshift IAM Identity Center application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyRedshiftIdcApplicationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyRedshiftIdcApplicationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // ModifyRedshiftIdcApplicationMessage
 *   RedshiftIdcApplicationArn: "STRING_VALUE", // required
 *   IdentityNamespace: "STRING_VALUE",
 *   IamRoleArn: "STRING_VALUE",
 *   IdcDisplayName: "STRING_VALUE",
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
 *     },
 *   ],
 * };
 * const command = new ModifyRedshiftIdcApplicationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyRedshiftIdcApplicationResult
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
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyRedshiftIdcApplicationCommandInput - {@link ModifyRedshiftIdcApplicationCommandInput}
 * @returns {@link ModifyRedshiftIdcApplicationCommandOutput}
 * @see {@link ModifyRedshiftIdcApplicationCommandInput} for command's `input` shape.
 * @see {@link ModifyRedshiftIdcApplicationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ModifyRedshiftIdcApplicationCommand extends $Command
  .classBuilder<
    ModifyRedshiftIdcApplicationCommandInput,
    ModifyRedshiftIdcApplicationCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "ModifyRedshiftIdcApplication", {})
  .n("RedshiftClient", "ModifyRedshiftIdcApplicationCommand")
  .f(void 0, void 0)
  .ser(se_ModifyRedshiftIdcApplicationCommand)
  .de(de_ModifyRedshiftIdcApplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyRedshiftIdcApplicationMessage;
      output: ModifyRedshiftIdcApplicationResult;
    };
    sdk: {
      input: ModifyRedshiftIdcApplicationCommandInput;
      output: ModifyRedshiftIdcApplicationCommandOutput;
    };
  };
}
