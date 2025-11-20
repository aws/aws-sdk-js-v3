// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  UpdateLakeFormationIdentityCenterConfigurationRequest,
  UpdateLakeFormationIdentityCenterConfigurationResponse,
} from "../models/models_0";
import { UpdateLakeFormationIdentityCenterConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLakeFormationIdentityCenterConfigurationCommand}.
 */
export interface UpdateLakeFormationIdentityCenterConfigurationCommandInput
  extends UpdateLakeFormationIdentityCenterConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLakeFormationIdentityCenterConfigurationCommand}.
 */
export interface UpdateLakeFormationIdentityCenterConfigurationCommandOutput
  extends UpdateLakeFormationIdentityCenterConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the IAM Identity Center connection parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, UpdateLakeFormationIdentityCenterConfigurationCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, UpdateLakeFormationIdentityCenterConfigurationCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // UpdateLakeFormationIdentityCenterConfigurationRequest
 *   CatalogId: "STRING_VALUE",
 *   ShareRecipients: [ // DataLakePrincipalList
 *     { // DataLakePrincipal
 *       DataLakePrincipalIdentifier: "STRING_VALUE",
 *     },
 *   ],
 *   ServiceIntegrations: [ // ServiceIntegrationList
 *     { // ServiceIntegrationUnion Union: only one key present
 *       Redshift: [ // RedshiftServiceIntegrations
 *         { // RedshiftScopeUnion Union: only one key present
 *           RedshiftConnect: { // RedshiftConnect
 *             Authorization: "ENABLED" || "DISABLED", // required
 *           },
 *         },
 *       ],
 *     },
 *   ],
 *   ApplicationStatus: "ENABLED" || "DISABLED",
 *   ExternalFiltering: { // ExternalFilteringConfiguration
 *     Status: "ENABLED" || "DISABLED", // required
 *     AuthorizedTargets: [ // ScopeTargets // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateLakeFormationIdentityCenterConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLakeFormationIdentityCenterConfigurationCommandInput - {@link UpdateLakeFormationIdentityCenterConfigurationCommandInput}
 * @returns {@link UpdateLakeFormationIdentityCenterConfigurationCommandOutput}
 * @see {@link UpdateLakeFormationIdentityCenterConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateLakeFormationIdentityCenterConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class UpdateLakeFormationIdentityCenterConfigurationCommand extends $Command
  .classBuilder<
    UpdateLakeFormationIdentityCenterConfigurationCommandInput,
    UpdateLakeFormationIdentityCenterConfigurationCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "UpdateLakeFormationIdentityCenterConfiguration", {})
  .n("LakeFormationClient", "UpdateLakeFormationIdentityCenterConfigurationCommand")
  .sc(UpdateLakeFormationIdentityCenterConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLakeFormationIdentityCenterConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateLakeFormationIdentityCenterConfigurationCommandInput;
      output: UpdateLakeFormationIdentityCenterConfigurationCommandOutput;
    };
  };
}
