// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchDeleteConnectionRequest, BatchDeleteConnectionResponse } from "../models/models_0";
import { de_BatchDeleteConnectionCommand, se_BatchDeleteConnectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteConnectionCommand}.
 */
export interface BatchDeleteConnectionCommandInput extends BatchDeleteConnectionRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteConnectionCommand}.
 */
export interface BatchDeleteConnectionCommandOutput extends BatchDeleteConnectionResponse, __MetadataBearer {}

/**
 * <p>Deletes a list of connection definitions from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchDeleteConnectionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchDeleteConnectionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // BatchDeleteConnectionRequest
 *   CatalogId: "STRING_VALUE",
 *   ConnectionNameList: [ // DeleteConnectionNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteConnectionCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteConnectionResponse
 * //   Succeeded: [ // NameStringList
 * //     "STRING_VALUE",
 * //   ],
 * //   Errors: { // ErrorByName
 * //     "<keys>": { // ErrorDetail
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param BatchDeleteConnectionCommandInput - {@link BatchDeleteConnectionCommandInput}
 * @returns {@link BatchDeleteConnectionCommandOutput}
 * @see {@link BatchDeleteConnectionCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteConnectionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
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
export class BatchDeleteConnectionCommand extends $Command
  .classBuilder<
    BatchDeleteConnectionCommandInput,
    BatchDeleteConnectionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "BatchDeleteConnection", {})
  .n("GlueClient", "BatchDeleteConnectionCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteConnectionCommand)
  .de(de_BatchDeleteConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteConnectionRequest;
      output: BatchDeleteConnectionResponse;
    };
    sdk: {
      input: BatchDeleteConnectionCommandInput;
      output: BatchDeleteConnectionCommandOutput;
    };
  };
}
