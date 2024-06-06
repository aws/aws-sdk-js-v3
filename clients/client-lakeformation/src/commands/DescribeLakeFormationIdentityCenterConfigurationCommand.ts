// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  DescribeLakeFormationIdentityCenterConfigurationRequest,
  DescribeLakeFormationIdentityCenterConfigurationResponse,
} from "../models/models_0";
import {
  de_DescribeLakeFormationIdentityCenterConfigurationCommand,
  se_DescribeLakeFormationIdentityCenterConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLakeFormationIdentityCenterConfigurationCommand}.
 */
export interface DescribeLakeFormationIdentityCenterConfigurationCommandInput
  extends DescribeLakeFormationIdentityCenterConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLakeFormationIdentityCenterConfigurationCommand}.
 */
export interface DescribeLakeFormationIdentityCenterConfigurationCommandOutput
  extends DescribeLakeFormationIdentityCenterConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the instance ARN and application ARN for the connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DescribeLakeFormationIdentityCenterConfigurationCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DescribeLakeFormationIdentityCenterConfigurationCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // DescribeLakeFormationIdentityCenterConfigurationRequest
 *   CatalogId: "STRING_VALUE",
 * };
 * const command = new DescribeLakeFormationIdentityCenterConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLakeFormationIdentityCenterConfigurationResponse
 * //   CatalogId: "STRING_VALUE",
 * //   InstanceArn: "STRING_VALUE",
 * //   ApplicationArn: "STRING_VALUE",
 * //   ExternalFiltering: { // ExternalFilteringConfiguration
 * //     Status: "ENABLED" || "DISABLED", // required
 * //     AuthorizedTargets: [ // ScopeTargets // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   ShareRecipients: [ // DataLakePrincipalList
 * //     { // DataLakePrincipal
 * //       DataLakePrincipalIdentifier: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ResourceShare: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLakeFormationIdentityCenterConfigurationCommandInput - {@link DescribeLakeFormationIdentityCenterConfigurationCommandInput}
 * @returns {@link DescribeLakeFormationIdentityCenterConfigurationCommandOutput}
 * @see {@link DescribeLakeFormationIdentityCenterConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeLakeFormationIdentityCenterConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
 * @public
 */
export class DescribeLakeFormationIdentityCenterConfigurationCommand extends $Command
  .classBuilder<
    DescribeLakeFormationIdentityCenterConfigurationCommandInput,
    DescribeLakeFormationIdentityCenterConfigurationCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "DescribeLakeFormationIdentityCenterConfiguration", {})
  .n("LakeFormationClient", "DescribeLakeFormationIdentityCenterConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLakeFormationIdentityCenterConfigurationCommand)
  .de(de_DescribeLakeFormationIdentityCenterConfigurationCommand)
  .build() {}
