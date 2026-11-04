// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteGlossaryInput, DeleteGlossaryOutput } from "../models/models_1";
import { DeleteGlossary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteGlossaryCommand}.
 */
export interface DeleteGlossaryCommandInput extends DeleteGlossaryInput {}
/**
 * @public
 *
 * The output of {@link DeleteGlossaryCommand}.
 */
export interface DeleteGlossaryCommandOutput extends DeleteGlossaryOutput, __MetadataBearer {}

/**
 * Deletes a business glossary in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - The glossary must be in DISABLED state.
 * - The glossary must not have any glossary terms associated with it.
 * - The glossary must exist in the specified domain.
 * - The caller must have the `datazone:DeleteGlossary` permission in the domain and glossary.
 * - Glossary should not be linked to any active metadata forms.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteGlossaryCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteGlossaryCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteGlossaryInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteGlossaryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteGlossaryCommandInput - {@link DeleteGlossaryCommandInput}
 * @returns {@link DeleteGlossaryCommandOutput}
 * @see {@link DeleteGlossaryCommandInput} for command's `input` shape.
 * @see {@link DeleteGlossaryCommandOutput} for command's `response` shape.
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
export class DeleteGlossaryCommand extends command<DeleteGlossaryCommandInput, DeleteGlossaryCommandOutput>(
  _ep0,
  _mw0,
  "DeleteGlossary",
  DeleteGlossary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGlossaryInput;
      output: {};
    };
    sdk: {
      input: DeleteGlossaryCommandInput;
      output: DeleteGlossaryCommandOutput;
    };
  };
}
