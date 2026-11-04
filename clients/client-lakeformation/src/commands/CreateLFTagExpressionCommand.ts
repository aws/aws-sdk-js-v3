// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLFTagExpressionRequest, CreateLFTagExpressionResponse } from "../models/models_0";
import { CreateLFTagExpression$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateLFTagExpressionCommand}.
 */
export interface CreateLFTagExpressionCommandInput extends CreateLFTagExpressionRequest {}
/**
 * @public
 *
 * The output of {@link CreateLFTagExpressionCommand}.
 */
export interface CreateLFTagExpressionCommandOutput extends CreateLFTagExpressionResponse, __MetadataBearer {}

/**
 * Creates a new LF-Tag expression with the provided name, description, catalog ID, and expression body. This call fails if a LF-Tag expression with the same name already exists in the caller’s account or if the underlying LF-Tags don't exist. To call this API operation, caller needs the following Lake Formation permissions:
 *
 * `CREATE_LF_TAG_EXPRESSION` on the root catalog resource.
 *
 * `GRANT_WITH_LF_TAG_EXPRESSION` on all underlying LF-Tag key:value pairs included in the expression.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, CreateLFTagExpressionCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, CreateLFTagExpressionCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // CreateLFTagExpressionRequest
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
 * const command = new CreateLFTagExpressionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateLFTagExpressionCommandInput - {@link CreateLFTagExpressionCommandInput}
 * @returns {@link CreateLFTagExpressionCommandOutput}
 * @see {@link CreateLFTagExpressionCommandInput} for command's `input` shape.
 * @see {@link CreateLFTagExpressionCommandOutput} for command's `response` shape.
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
export class CreateLFTagExpressionCommand extends command<CreateLFTagExpressionCommandInput, CreateLFTagExpressionCommandOutput>(
  _ep0,
  _mw0,
  "CreateLFTagExpression",
  CreateLFTagExpression$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLFTagExpressionRequest;
      output: {};
    };
    sdk: {
      input: CreateLFTagExpressionCommandInput;
      output: CreateLFTagExpressionCommandOutput;
    };
  };
}
