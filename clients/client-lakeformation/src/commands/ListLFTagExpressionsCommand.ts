// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import type { ListLFTagExpressionsRequest, ListLFTagExpressionsResponse } from "../models/models_0";
import { ListLFTagExpressions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLFTagExpressionsCommand}.
 */
export interface ListLFTagExpressionsCommandInput extends ListLFTagExpressionsRequest {}
/**
 * @public
 *
 * The output of {@link ListLFTagExpressionsCommand}.
 */
export interface ListLFTagExpressionsCommandOutput extends ListLFTagExpressionsResponse, __MetadataBearer {}

/**
 * <p>Returns the LF-Tag expressions in caller’s account filtered based on caller's permissions. Data Lake and read only admins implicitly can see all tag expressions in their account, else caller needs DESCRIBE permissions on tag expression.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListLFTagExpressionsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListLFTagExpressionsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // ListLFTagExpressionsRequest
 *   CatalogId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLFTagExpressionsCommand(input);
 * const response = await client.send(command);
 * // { // ListLFTagExpressionsResponse
 * //   LFTagExpressions: [ // LFTagExpressionsList
 * //     { // LFTagExpression
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CatalogId: "STRING_VALUE",
 * //       Expression: [ // Expression
 * //         { // LFTag
 * //           TagKey: "STRING_VALUE", // required
 * //           TagValues: [ // TagValueList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLFTagExpressionsCommandInput - {@link ListLFTagExpressionsCommandInput}
 * @returns {@link ListLFTagExpressionsCommandOutput}
 * @see {@link ListLFTagExpressionsCommandInput} for command's `input` shape.
 * @see {@link ListLFTagExpressionsCommandOutput} for command's `response` shape.
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
export class ListLFTagExpressionsCommand extends $Command
  .classBuilder<
    ListLFTagExpressionsCommandInput,
    ListLFTagExpressionsCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "ListLFTagExpressions", {})
  .n("LakeFormationClient", "ListLFTagExpressionsCommand")
  .sc(ListLFTagExpressions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLFTagExpressionsRequest;
      output: ListLFTagExpressionsResponse;
    };
    sdk: {
      input: ListLFTagExpressionsCommandInput;
      output: ListLFTagExpressionsCommandOutput;
    };
  };
}
