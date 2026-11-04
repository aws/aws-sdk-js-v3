// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateLFTagExpressionRequest, UpdateLFTagExpressionResponse } from "../models/models_0";
import { UpdateLFTagExpression$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the name of the LF-Tag expression to the new description and expression body provided. Updating a LF-Tag expression immediately changes the permission boundaries of all existing `LFTagPolicy` permission grants that reference the given LF-Tag expression.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, UpdateLFTagExpressionCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, UpdateLFTagExpressionCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link LakeFormationServiceException}
 *
 * Base exception class for all service exceptions from LakeFormation service.
 *
 * @public
 */
export class UpdateLFTagExpressionCommand extends command<UpdateLFTagExpressionCommandInput, UpdateLFTagExpressionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLFTagExpression",
  UpdateLFTagExpression$
) {
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
