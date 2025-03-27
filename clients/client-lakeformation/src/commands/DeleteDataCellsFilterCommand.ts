// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { DeleteDataCellsFilterRequest, DeleteDataCellsFilterResponse } from "../models/models_0";
import { de_DeleteDataCellsFilterCommand, se_DeleteDataCellsFilterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataCellsFilterCommand}.
 */
export interface DeleteDataCellsFilterCommandInput extends DeleteDataCellsFilterRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataCellsFilterCommand}.
 */
export interface DeleteDataCellsFilterCommandOutput extends DeleteDataCellsFilterResponse, __MetadataBearer {}

/**
 * <p>Deletes a data cell filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DeleteDataCellsFilterCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DeleteDataCellsFilterCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // DeleteDataCellsFilterRequest
 *   TableCatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE",
 *   TableName: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 * };
 * const command = new DeleteDataCellsFilterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataCellsFilterCommandInput - {@link DeleteDataCellsFilterCommandInput}
 * @returns {@link DeleteDataCellsFilterCommandOutput}
 * @see {@link DeleteDataCellsFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteDataCellsFilterCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class DeleteDataCellsFilterCommand extends $Command
  .classBuilder<
    DeleteDataCellsFilterCommandInput,
    DeleteDataCellsFilterCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "DeleteDataCellsFilter", {})
  .n("LakeFormationClient", "DeleteDataCellsFilterCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDataCellsFilterCommand)
  .de(de_DeleteDataCellsFilterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataCellsFilterRequest;
      output: {};
    };
    sdk: {
      input: DeleteDataCellsFilterCommandInput;
      output: DeleteDataCellsFilterCommandOutput;
    };
  };
}
