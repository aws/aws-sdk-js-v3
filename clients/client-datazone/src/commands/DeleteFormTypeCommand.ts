// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFormTypeInput, DeleteFormTypeOutput } from "../models/models_1";
import { DeleteFormType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFormTypeCommand}.
 */
export interface DeleteFormTypeCommandInput extends DeleteFormTypeInput {}
/**
 * @public
 *
 * The output of {@link DeleteFormTypeCommand}.
 */
export interface DeleteFormTypeCommandOutput extends DeleteFormTypeOutput, __MetadataBearer {}

/**
 * Deletes and metadata form type in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - The form type must exist in the domain.
 * - The form type must not be in use by any asset types or assets.
 * - The domain must be valid and accessible.
 * - User must have delete permissions on the form type.
 * - Any dependencies (such as linked asset types) must be removed first.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteFormTypeCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteFormTypeCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteFormTypeInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   formTypeIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteFormTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFormTypeCommandInput - {@link DeleteFormTypeCommandInput}
 * @returns {@link DeleteFormTypeCommandOutput}
 * @see {@link DeleteFormTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteFormTypeCommandOutput} for command's `response` shape.
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
export class DeleteFormTypeCommand extends command<DeleteFormTypeCommandInput, DeleteFormTypeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFormType",
  DeleteFormType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFormTypeInput;
      output: {};
    };
    sdk: {
      input: DeleteFormTypeCommandInput;
      output: DeleteFormTypeCommandOutput;
    };
  };
}
