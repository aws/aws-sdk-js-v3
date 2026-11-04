// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLFTagExpressionRequest, DeleteLFTagExpressionResponse } from "../models/models_0";
import { DeleteLFTagExpression$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLFTagExpressionCommand}.
 */
export interface DeleteLFTagExpressionCommandInput extends DeleteLFTagExpressionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLFTagExpressionCommand}.
 */
export interface DeleteLFTagExpressionCommandOutput extends DeleteLFTagExpressionResponse, __MetadataBearer {}

/**
 * Deletes the LF-Tag expression. The caller must be a data lake admin or have `DROP` permissions on the LF-Tag expression. Deleting a LF-Tag expression will also delete all `LFTagPolicy` permissions referencing the LF-Tag expression.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DeleteLFTagExpressionCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DeleteLFTagExpressionCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // DeleteLFTagExpressionRequest
 *   Name: "STRING_VALUE", // required
 *   CatalogId: "STRING_VALUE",
 * };
 * const command = new DeleteLFTagExpressionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLFTagExpressionCommandInput - {@link DeleteLFTagExpressionCommandInput}
 * @returns {@link DeleteLFTagExpressionCommandOutput}
 * @see {@link DeleteLFTagExpressionCommandInput} for command's `input` shape.
 * @see {@link DeleteLFTagExpressionCommandOutput} for command's `response` shape.
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
export class DeleteLFTagExpressionCommand extends command<DeleteLFTagExpressionCommandInput, DeleteLFTagExpressionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLFTagExpression",
  DeleteLFTagExpression$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLFTagExpressionRequest;
      output: {};
    };
    sdk: {
      input: DeleteLFTagExpressionCommandInput;
      output: DeleteLFTagExpressionCommandOutput;
    };
  };
}
