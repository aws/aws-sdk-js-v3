// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLFTagRequest, DeleteLFTagResponse } from "../models/models_0";
import { DeleteLFTag$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLFTagCommand}.
 */
export interface DeleteLFTagCommandInput extends DeleteLFTagRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLFTagCommand}.
 */
export interface DeleteLFTagCommandOutput extends DeleteLFTagResponse, __MetadataBearer {}

/**
 * Deletes an LF-tag by its key name. The operation fails if the specified tag key doesn't exist. When you delete an LF-Tag:
 *
 * - The associated LF-Tag policy becomes invalid.
 * - Resources that had this tag assigned will no longer have the tag policy applied to them.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DeleteLFTagCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DeleteLFTagCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // DeleteLFTagRequest
 *   CatalogId: "STRING_VALUE",
 *   TagKey: "STRING_VALUE", // required
 * };
 * const command = new DeleteLFTagCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLFTagCommandInput - {@link DeleteLFTagCommandInput}
 * @returns {@link DeleteLFTagCommandOutput}
 * @see {@link DeleteLFTagCommandInput} for command's `input` shape.
 * @see {@link DeleteLFTagCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link LakeFormationServiceException}
 *
 * Base exception class for all service exceptions from LakeFormation service.
 *
 * @public
 */
export class DeleteLFTagCommand extends command<DeleteLFTagCommandInput, DeleteLFTagCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLFTag",
  DeleteLFTag$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLFTagRequest;
      output: {};
    };
    sdk: {
      input: DeleteLFTagCommandInput;
      output: DeleteLFTagCommandOutput;
    };
  };
}
