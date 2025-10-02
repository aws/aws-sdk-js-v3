// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteInventoryRequest, DeleteInventoryResult } from "../models/models_0";
import { de_DeleteInventoryCommand, se_DeleteInventoryCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "DeleteInventory", {})
  .n("SSMClient", "DeleteInventoryCommand")
  .f(void 0, void 0)
  .ser(se_DeleteInventoryCommand)
  .de(de_DeleteInventoryCommand)
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
