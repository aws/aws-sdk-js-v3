// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { DeleteLFTagExpressionRequest, DeleteLFTagExpressionResponse } from "../models/models_0";
import { de_DeleteLFTagExpressionCommand, se_DeleteLFTagExpressionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the LF-Tag expression. The caller must be a data lake admin or have <code>DROP</code> permissions on the LF-Tag expression.
 *       Deleting a LF-Tag expression will also delete all <code>LFTagPolicy</code> permissions referencing the LF-Tag expression.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DeleteLFTagExpressionCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DeleteLFTagExpressionCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
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
 * @public
 */
export class DeleteLFTagExpressionCommand extends $Command
  .classBuilder<
    DeleteLFTagExpressionCommandInput,
    DeleteLFTagExpressionCommandOutput,
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
  .s("AWSLakeFormation", "DeleteLFTagExpression", {})
  .n("LakeFormationClient", "DeleteLFTagExpressionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLFTagExpressionCommand)
  .de(de_DeleteLFTagExpressionCommand)
  .build() {
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
