// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteGlossaryTermInput, DeleteGlossaryTermOutput } from "../models/models_1";
import { DeleteGlossaryTerm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteGlossaryTermCommand}.
 */
export interface DeleteGlossaryTermCommandInput extends DeleteGlossaryTermInput {}
/**
 * @public
 *
 * The output of {@link DeleteGlossaryTermCommand}.
 */
export interface DeleteGlossaryTermCommandOutput extends DeleteGlossaryTermOutput, __MetadataBearer {}

/**
 * Deletes a business glossary term in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - Glossary term must exist and be active.
 * - The term must not be linked to other assets or child terms.
 * - Caller must have delete permissions in the domain/glossary.
 * - Ensure all associations (such as to assets or parent terms) are removed before deletion.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteGlossaryTermCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteGlossaryTermCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteGlossaryTermInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteGlossaryTermCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteGlossaryTermCommandInput - {@link DeleteGlossaryTermCommandInput}
 * @returns {@link DeleteGlossaryTermCommandOutput}
 * @see {@link DeleteGlossaryTermCommandInput} for command's `input` shape.
 * @see {@link DeleteGlossaryTermCommandOutput} for command's `response` shape.
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
export class DeleteGlossaryTermCommand extends command<DeleteGlossaryTermCommandInput, DeleteGlossaryTermCommandOutput>(
  _ep0,
  _mw0,
  "DeleteGlossaryTerm",
  DeleteGlossaryTerm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGlossaryTermInput;
      output: {};
    };
    sdk: {
      input: DeleteGlossaryTermCommandInput;
      output: DeleteGlossaryTermCommandOutput;
    };
  };
}
