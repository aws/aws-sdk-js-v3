// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import type {
  CreateLakeFormationIdentityCenterConfigurationRequest,
  CreateLakeFormationIdentityCenterConfigurationResponse,
} from "../models/models_0";
import { CreateLakeFormationIdentityCenterConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLakeFormationIdentityCenterConfigurationCommand}.
 */
export interface CreateLakeFormationIdentityCenterConfigurationCommandInput
  extends CreateLakeFormationIdentityCenterConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateLakeFormationIdentityCenterConfigurationCommand}.
 */
export interface CreateLakeFormationIdentityCenterConfigurationCommandOutput
  extends CreateLakeFormationIdentityCenterConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates an IAM Identity Center connection with Lake Formation to allow IAM Identity Center users and groups to access Data Catalog resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, CreateLakeFormationIdentityCenterConfigurationCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, CreateLakeFormationIdentityCenterConfigurationCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // CreateLakeFormationIdentityCenterConfigurationRequest
 *   CatalogId: "STRING_VALUE",
 *   InstanceArn: "STRING_VALUE",
 *   ExternalFiltering: { // ExternalFilteringConfiguration
 *     Status: "ENABLED" || "DISABLED", // required
 *     AuthorizedTargets: [ // ScopeTargets // required
 *       "STRING_VALUE",
 *     ],
 *   },
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
 * };
 * const command = new CreateLakeFormationIdentityCenterConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateLakeFormationIdentityCenterConfigurationResponse
 * //   ApplicationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLakeFormationIdentityCenterConfigurationCommandInput - {@link CreateLakeFormationIdentityCenterConfigurationCommandInput}
 * @returns {@link CreateLakeFormationIdentityCenterConfigurationCommandOutput}
 * @see {@link CreateLakeFormationIdentityCenterConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateLakeFormationIdentityCenterConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
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
export class CreateLakeFormationIdentityCenterConfigurationCommand extends $Command
  .classBuilder<
    CreateLakeFormationIdentityCenterConfigurationCommandInput,
    CreateLakeFormationIdentityCenterConfigurationCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "CreateLakeFormationIdentityCenterConfiguration", {})
  .n("LakeFormationClient", "CreateLakeFormationIdentityCenterConfigurationCommand")
  .sc(CreateLakeFormationIdentityCenterConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLakeFormationIdentityCenterConfigurationRequest;
      output: CreateLakeFormationIdentityCenterConfigurationResponse;
    };
    sdk: {
      input: CreateLakeFormationIdentityCenterConfigurationCommandInput;
      output: CreateLakeFormationIdentityCenterConfigurationCommandOutput;
    };
  };
}
