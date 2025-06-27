// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { UpdateLFTagExpressionRequest, UpdateLFTagExpressionResponse } from "../models/models_0";
import { de_UpdateLFTagExpressionCommand, se_UpdateLFTagExpressionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLFTagExpressionCommand}.
 */
export interface UpdateLFTagExpressionCommandInput extends UpdateLFTagExpressionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLFTagExpressionCommand}.
 */
export interface UpdateLFTagExpressionCommandOutput extends UpdateLFTagExpressionResponse, __MetadataBearer {}

/**
 * <p>Updates the name of the LF-Tag expression to the new description and expression body provided.
 *       Updating a LF-Tag expression immediately changes the permission boundaries of all existing <code>LFTagPolicy</code> permission grants that reference the given LF-Tag expression.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, UpdateLFTagExpressionCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, UpdateLFTagExpressionCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // UpdateLFTagExpressionRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   CatalogId: "STRING_VALUE",
 *   Expression: [ // Expression // required
 *     { // LFTag
 *       TagKey: "STRING_VALUE", // required
 *       TagValues: [ // TagValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateLFTagExpressionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLFTagExpressionCommandInput - {@link UpdateLFTagExpressionCommandInput}
 * @returns {@link UpdateLFTagExpressionCommandOutput}
 * @see {@link UpdateLFTagExpressionCommandInput} for command's `input` shape.
 * @see {@link UpdateLFTagExpressionCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class UpdateLFTagExpressionCommand extends $Command
  .classBuilder<
    UpdateLFTagExpressionCommandInput,
    UpdateLFTagExpressionCommandOutput,
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
  .s("AWSLakeFormation", "UpdateLFTagExpression", {})
  .n("LakeFormationClient", "UpdateLFTagExpressionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateLFTagExpressionCommand)
  .de(de_UpdateLFTagExpressionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLFTagExpressionRequest;
      output: {};
    };
    sdk: {
      input: UpdateLFTagExpressionCommandInput;
      output: UpdateLFTagExpressionCommandOutput;
    };
  };
}
