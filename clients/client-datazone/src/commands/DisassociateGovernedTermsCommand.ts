// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateGovernedTermsInput, DisassociateGovernedTermsOutput } from "../models/models_1";
import { de_DisassociateGovernedTermsCommand, se_DisassociateGovernedTermsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateGovernedTermsCommand}.
 */
export interface DisassociateGovernedTermsCommandInput extends DisassociateGovernedTermsInput {}
/**
 * @public
 *
 * The output of {@link DisassociateGovernedTermsCommand}.
 */
export interface DisassociateGovernedTermsCommandOutput extends DisassociateGovernedTermsOutput, __MetadataBearer {}

/**
 * <p>Disassociates restricted terms from an asset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DisassociateGovernedTermsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DisassociateGovernedTermsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DisassociateGovernedTermsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   entityType: "ASSET", // required
 *   governedGlossaryTerms: [ // GovernedGlossaryTerms // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateGovernedTermsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateGovernedTermsCommandInput - {@link DisassociateGovernedTermsCommandInput}
 * @returns {@link DisassociateGovernedTermsCommandOutput}
 * @see {@link DisassociateGovernedTermsCommandInput} for command's `input` shape.
 * @see {@link DisassociateGovernedTermsCommandOutput} for command's `response` shape.
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
export class DisassociateGovernedTermsCommand extends $Command
  .classBuilder<
    DisassociateGovernedTermsCommandInput,
    DisassociateGovernedTermsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "DisassociateGovernedTerms", {})
  .n("DataZoneClient", "DisassociateGovernedTermsCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateGovernedTermsCommand)
  .de(de_DisassociateGovernedTermsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateGovernedTermsInput;
      output: {};
    };
    sdk: {
      input: DisassociateGovernedTermsCommandInput;
      output: DisassociateGovernedTermsCommandOutput;
    };
  };
}
