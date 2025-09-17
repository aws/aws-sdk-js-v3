// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteColumnStatisticsForTableRequest, DeleteColumnStatisticsForTableResponse } from "../models/models_1";
import {
  de_DeleteColumnStatisticsForTableCommand,
  se_DeleteColumnStatisticsForTableCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteColumnStatisticsForTableCommand}.
 */
export interface DeleteColumnStatisticsForTableCommandInput extends DeleteColumnStatisticsForTableRequest {}
/**
 * @public
 *
 * The output of {@link DeleteColumnStatisticsForTableCommand}.
 */
export interface DeleteColumnStatisticsForTableCommandOutput
  extends DeleteColumnStatisticsForTableResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves table statistics of columns.</p>
 *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeleteTable</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteColumnStatisticsForTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteColumnStatisticsForTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteColumnStatisticsForTableRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   ColumnName: "STRING_VALUE", // required
 * };
 * const command = new DeleteColumnStatisticsForTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteColumnStatisticsForTableCommandInput - {@link DeleteColumnStatisticsForTableCommandInput}
 * @returns {@link DeleteColumnStatisticsForTableCommandOutput}
 * @see {@link DeleteColumnStatisticsForTableCommandInput} for command's `input` shape.
 * @see {@link DeleteColumnStatisticsForTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
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
export class DeleteColumnStatisticsForTableCommand extends $Command
  .classBuilder<
    DeleteColumnStatisticsForTableCommandInput,
    DeleteColumnStatisticsForTableCommandOutput,
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
  .s("AWSGlue", "DeleteColumnStatisticsForTable", {})
  .n("GlueClient", "DeleteColumnStatisticsForTableCommand")
  .f(void 0, void 0)
  .ser(se_DeleteColumnStatisticsForTableCommand)
  .de(de_DeleteColumnStatisticsForTableCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteColumnStatisticsForTableRequest;
      output: {};
    };
    sdk: {
      input: DeleteColumnStatisticsForTableCommandInput;
      output: DeleteColumnStatisticsForTableCommandOutput;
    };
  };
}
