// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetLFTagExpressionRequest, GetLFTagExpressionResponse } from "../models/models_0";
import { de_GetLFTagExpressionCommand, se_GetLFTagExpressionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLFTagExpressionCommand}.
 */
export interface GetLFTagExpressionCommandInput extends GetLFTagExpressionRequest {}
/**
 * @public
 *
 * The output of {@link GetLFTagExpressionCommand}.
 */
export interface GetLFTagExpressionCommandOutput extends GetLFTagExpressionResponse, __MetadataBearer {}

/**
 * <p>Returns the details about the LF-Tag expression. The caller must be a data lake admin or must have <code>DESCRIBE</code> permission on the LF-Tag expression resource.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetLFTagExpressionCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetLFTagExpressionCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // GetLFTagExpressionRequest
 *   Name: "STRING_VALUE", // required
 *   CatalogId: "STRING_VALUE",
 * };
 * const command = new GetLFTagExpressionCommand(input);
 * const response = await client.send(command);
 * // { // GetLFTagExpressionResponse
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CatalogId: "STRING_VALUE",
 * //   Expression: [ // Expression
 * //     { // LFTag
 * //       TagKey: "STRING_VALUE", // required
 * //       TagValues: [ // TagValueList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLFTagExpressionCommandInput - {@link GetLFTagExpressionCommandInput}
 * @returns {@link GetLFTagExpressionCommandOutput}
 * @see {@link GetLFTagExpressionCommandInput} for command's `input` shape.
 * @see {@link GetLFTagExpressionCommandOutput} for command's `response` shape.
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
export class GetLFTagExpressionCommand extends $Command
  .classBuilder<
    GetLFTagExpressionCommandInput,
    GetLFTagExpressionCommandOutput,
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
  .s("AWSLakeFormation", "GetLFTagExpression", {})
  .n("LakeFormationClient", "GetLFTagExpressionCommand")
  .f(void 0, void 0)
  .ser(se_GetLFTagExpressionCommand)
  .de(de_GetLFTagExpressionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLFTagExpressionRequest;
      output: GetLFTagExpressionResponse;
    };
    sdk: {
      input: GetLFTagExpressionCommandInput;
      output: GetLFTagExpressionCommandOutput;
    };
  };
}
