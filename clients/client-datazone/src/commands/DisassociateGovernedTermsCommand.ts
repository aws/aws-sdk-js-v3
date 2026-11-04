// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateGovernedTermsInput, DisassociateGovernedTermsOutput } from "../models/models_1";
import { DisassociateGovernedTerms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Disassociates restricted terms from an asset.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class DisassociateGovernedTermsCommand extends command<DisassociateGovernedTermsCommandInput, DisassociateGovernedTermsCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateGovernedTerms",
  DisassociateGovernedTerms$
) {
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
