// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { CreateLFTagExpressionRequest, CreateLFTagExpressionResponse } from "../models/models_0";
import { de_CreateLFTagExpressionCommand, se_CreateLFTagExpressionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a new LF-Tag expression with the provided name, description, catalog ID, and
 *       expression body. This call fails if a LF-Tag expression with the same name already exists in
 *       the caller’s account or if the underlying LF-Tags don't exist. To call this API operation,
 *       caller needs the following Lake Formation permissions:</p>
 *          <p>
 *             <code>CREATE_LF_TAG_EXPRESSION</code> on the root catalog resource.</p>
 *          <p>
 *             <code>GRANT_WITH_LF_TAG_EXPRESSION</code> on all underlying LF-Tag key:value pairs
 *       included in the expression. </p>
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
export class CreateLFTagExpressionCommand extends $Command
  .classBuilder<
    CreateLFTagExpressionCommandInput,
    CreateLFTagExpressionCommandOutput,
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
  .s("AWSLakeFormation", "CreateLFTagExpression", {})
  .n("LakeFormationClient", "CreateLFTagExpressionCommand")
  .f(void 0, void 0)
  .ser(se_CreateLFTagExpressionCommand)
  .de(de_CreateLFTagExpressionCommand)
  .build() {
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
