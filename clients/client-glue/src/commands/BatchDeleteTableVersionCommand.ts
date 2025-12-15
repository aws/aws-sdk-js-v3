// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { BatchDeleteTableVersionRequest, BatchDeleteTableVersionResponse } from "../models/models_0";
import { BatchDeleteTableVersion$ } from "../schemas/schemas_0";

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
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "BatchDeleteTableVersion", {})
  .n("GlueClient", "BatchDeleteTableVersionCommand")
  .sc(BatchDeleteTableVersion$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteTableVersionRequest;
      output: BatchDeleteTableVersionResponse;
    };
    sdk: {
      input: BatchDeleteTableVersionCommandInput;
      output: BatchDeleteTableVersionCommandOutput;
    };
  };
}
