// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteInventoryRequest, DeleteInventoryResult } from "../models/models_0";
import { DeleteInventory } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Delete a custom inventory type or the data associated with a custom Inventory type. Deleting
 *    a custom inventory type is also referred to as deleting a custom inventory schema.</p>
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
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDeleteInventoryParametersException} (client fault)
 *  <p>One or more of the parameters specified for the delete operation isn't valid. Verify all
 *    parameters and try again.</p>
 *
 * @throws {@link InvalidInventoryRequestException} (client fault)
 *  <p>The request isn't valid.</p>
 *
 * @throws {@link InvalidOptionException} (client fault)
 *  <p>The delete inventory option specified isn't valid. Verify the option and try again.</p>
 *
 * @throws {@link InvalidTypeNameException} (client fault)
 *  <p>The parameter type name isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DeleteInventoryCommand extends $Command
  .classBuilder<
    DeleteInventoryCommandInput,
    DeleteInventoryCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DeleteInventory", {})
  .n("SSMClient", "DeleteInventoryCommand")
  .sc(DeleteInventory)
  .build() {
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
