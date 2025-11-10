// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateGovernedTermsInput, AssociateGovernedTermsOutput } from "../models/models_0";
import { AssociateGovernedTerms } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateGovernedTermsCommand}.
 */
export interface AssociateGovernedTermsCommandInput extends AssociateGovernedTermsInput {}
/**
 * @public
 *
 * The output of {@link AssociateGovernedTermsCommand}.
 */
export interface AssociateGovernedTermsCommandOutput extends AssociateGovernedTermsOutput, __MetadataBearer {}

/**
 * <p>Associates governed terms with an asset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, AssociateGovernedTermsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, AssociateGovernedTermsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // AssociateGovernedTermsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   entityType: "ASSET", // required
 *   governedGlossaryTerms: [ // GovernedGlossaryTerms // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateGovernedTermsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateGovernedTermsCommandInput - {@link AssociateGovernedTermsCommandInput}
 * @returns {@link AssociateGovernedTermsCommandOutput}
 * @see {@link AssociateGovernedTermsCommandInput} for command's `input` shape.
 * @see {@link AssociateGovernedTermsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class AssociateGovernedTermsCommand extends $Command
  .classBuilder<
    AssociateGovernedTermsCommandInput,
    AssociateGovernedTermsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "AssociateGovernedTerms", {})
  .n("DataZoneClient", "AssociateGovernedTermsCommand")
  .sc(AssociateGovernedTerms)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateGovernedTermsInput;
      output: {};
    };
    sdk: {
      input: AssociateGovernedTermsCommandInput;
      output: AssociateGovernedTermsCommandOutput;
    };
  };
}
