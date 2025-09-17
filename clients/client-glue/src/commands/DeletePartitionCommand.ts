// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeletePartitionRequest, DeletePartitionResponse } from "../models/models_1";
import { de_DeletePartitionCommand, se_DeletePartitionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePartitionCommand}.
 */
export interface DeletePartitionCommandInput extends DeletePartitionRequest {}
/**
 * @public
 *
 * The output of {@link DeletePartitionCommand}.
 */
export interface DeletePartitionCommandOutput extends DeletePartitionResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified partition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeletePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeletePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeletePartitionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   PartitionValues: [ // ValueStringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeletePartitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePartitionCommandInput - {@link DeletePartitionCommandInput}
 * @returns {@link DeletePartitionCommandOutput}
 * @see {@link DeletePartitionCommandInput} for command's `input` shape.
 * @see {@link DeletePartitionCommandOutput} for command's `response` shape.
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
export class DeletePartitionCommand extends $Command
  .classBuilder<
    DeletePartitionCommandInput,
    DeletePartitionCommandOutput,
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
  .s("AWSGlue", "DeletePartition", {})
  .n("GlueClient", "DeletePartitionCommand")
  .f(void 0, void 0)
  .ser(se_DeletePartitionCommand)
  .de(de_DeletePartitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePartitionRequest;
      output: {};
    };
    sdk: {
      input: DeletePartitionCommandInput;
      output: DeletePartitionCommandOutput;
    };
  };
}
