// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateGlossaryInput, UpdateGlossaryOutput } from "../models/models_1";
import { UpdateGlossary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateGlossaryCommand}.
 */
export interface UpdateGlossaryCommandInput extends UpdateGlossaryInput {}
/**
 * @public
 *
 * The output of {@link UpdateGlossaryCommand}.
 */
export interface UpdateGlossaryCommandOutput extends UpdateGlossaryOutput, __MetadataBearer {}

/**
 * Updates the business glossary in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - The glossary must exist in the given domain.
 * - The caller must have the `datazone:UpdateGlossary` permission to update it.
 * - When updating the name, the new name must be unique within the domain.
 * - The glossary must not be deleted or in a terminal state.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateGlossaryCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateGlossaryCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // UpdateGlossaryInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   status: "DISABLED" || "ENABLED",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateGlossaryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGlossaryOutput
 * //   domainId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   owningProjectId: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   status: "DISABLED" || "ENABLED",
 * //   usageRestrictions: [ // GlossaryUsageRestrictions
 * //     "ASSET_GOVERNED_TERMS",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateGlossaryCommandInput - {@link UpdateGlossaryCommandInput}
 * @returns {@link UpdateGlossaryCommandOutput}
 * @see {@link UpdateGlossaryCommandInput} for command's `input` shape.
 * @see {@link UpdateGlossaryCommandOutput} for command's `response` shape.
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
export class UpdateGlossaryCommand extends command<UpdateGlossaryCommandInput, UpdateGlossaryCommandOutput>(
  _ep0,
  _mw0,
  "UpdateGlossary",
  UpdateGlossary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGlossaryInput;
      output: UpdateGlossaryOutput;
    };
    sdk: {
      input: UpdateGlossaryCommandInput;
      output: UpdateGlossaryCommandOutput;
    };
  };
}
