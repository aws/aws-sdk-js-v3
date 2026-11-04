// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateGovernedTermsInput, AssociateGovernedTermsOutput } from "../models/models_0";
import { AssociateGovernedTerms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Associates governed terms with an asset.
 *
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
export class AssociateGovernedTermsCommand extends command<AssociateGovernedTermsCommandInput, AssociateGovernedTermsCommandOutput>(
  _ep0,
  _mw0,
  "AssociateGovernedTerms",
  AssociateGovernedTerms$
) {
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
