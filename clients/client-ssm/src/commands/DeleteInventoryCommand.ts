// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteInventoryRequest, DeleteInventoryResult } from "../models/models_0";
import { DeleteInventory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteInventoryCommand}.
 */
export interface DeleteInventoryCommandInput extends DeleteInventoryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInventoryCommand}.
 */
export interface DeleteInventoryCommandOutput extends DeleteInventoryResult, __MetadataBearer {}

/**
 * Delete a custom inventory type or the data associated with a custom Inventory type. Deleting a custom inventory type is also referred to as deleting a custom inventory schema.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteInventoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteInventoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DeleteInventoryRequest
 *   TypeName: "STRING_VALUE", // required
 *   SchemaDeleteOption: "DisableSchema" || "DeleteSchema",
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DeleteInventoryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInventoryResult
 * //   DeletionId: "STRING_VALUE",
 * //   TypeName: "STRING_VALUE",
 * //   DeletionSummary: { // InventoryDeletionSummary
 * //     TotalCount: Number("int"),
 * //     RemainingCount: Number("int"),
 * //     SummaryItems: [ // InventoryDeletionSummaryItems
 * //       { // InventoryDeletionSummaryItem
 * //         Version: "STRING_VALUE",
 * //         Count: Number("int"),
 * //         RemainingCount: Number("int"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteInventoryCommandInput - {@link DeleteInventoryCommandInput}
 * @returns {@link DeleteInventoryCommandOutput}
 * @see {@link DeleteInventoryCommandInput} for command's `input` shape.
 * @see {@link DeleteInventoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidDeleteInventoryParametersException} (client fault)
 *
 * One or more of the parameters specified for the delete operation isn't valid. Verify all parameters and try again.
 *
 * @throws {@link InvalidInventoryRequestException} (client fault)
 *
 * The request isn't valid.
 *
 * @throws {@link InvalidOptionException} (client fault)
 *
 * The delete inventory option specified isn't valid. Verify the option and try again.
 *
 * @throws {@link InvalidTypeNameException} (client fault)
 *
 * The parameter type name isn't valid.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class DeleteInventoryCommand extends command<DeleteInventoryCommandInput, DeleteInventoryCommandOutput>(
  _ep0,
  _mw0,
  "DeleteInventory",
  DeleteInventory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInventoryRequest;
      output: DeleteInventoryResult;
    };
    sdk: {
      input: DeleteInventoryCommandInput;
      output: DeleteInventoryCommandOutput;
    };
  };
}
