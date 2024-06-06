// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchDeleteTableVersionRequest, BatchDeleteTableVersionResponse } from "../models/models_0";
import { de_BatchDeleteTableVersionCommand, se_BatchDeleteTableVersionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteTableVersionCommand}.
 */
export interface BatchDeleteTableVersionCommandInput extends BatchDeleteTableVersionRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteTableVersionCommand}.
 */
export interface BatchDeleteTableVersionCommandOutput extends BatchDeleteTableVersionResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified batch of versions of a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchDeleteTableVersionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchDeleteTableVersionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // BatchDeleteTableVersionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   VersionIds: [ // BatchDeleteTableVersionList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteTableVersionCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteTableVersionResponse
 * //   Errors: [ // TableVersionErrors
 * //     { // TableVersionError
 * //       TableName: "STRING_VALUE",
 * //       VersionId: "STRING_VALUE",
 * //       ErrorDetail: { // ErrorDetail
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteTableVersionCommandInput - {@link BatchDeleteTableVersionCommandInput}
 * @returns {@link BatchDeleteTableVersionCommandOutput}
 * @see {@link BatchDeleteTableVersionCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteTableVersionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class BatchDeleteTableVersionCommand extends $Command
  .classBuilder<
    BatchDeleteTableVersionCommandInput,
    BatchDeleteTableVersionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "BatchDeleteTableVersion", {})
  .n("GlueClient", "BatchDeleteTableVersionCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteTableVersionCommand)
  .de(de_BatchDeleteTableVersionCommand)
  .build() {}
