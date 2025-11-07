// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreatePartitionIndexRequest, CreatePartitionIndexResponse } from "../models/models_1";
import { CreatePartitionIndex } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePartitionIndexCommand}.
 */
export interface CreatePartitionIndexCommandInput extends CreatePartitionIndexRequest {}
/**
 * @public
 *
 * The output of {@link CreatePartitionIndexCommand}.
 */
export interface CreatePartitionIndexCommandOutput extends CreatePartitionIndexResponse, __MetadataBearer {}

/**
 * <p>Creates a specified partition index in an existing table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreatePartitionIndexCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreatePartitionIndexCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreatePartitionIndexRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   PartitionIndex: { // PartitionIndex
 *     Keys: [ // KeyList // required
 *       "STRING_VALUE",
 *     ],
 *     IndexName: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreatePartitionIndexCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreatePartitionIndexCommandInput - {@link CreatePartitionIndexCommandInput}
 * @returns {@link CreatePartitionIndexCommandOutput}
 * @see {@link CreatePartitionIndexCommandInput} for command's `input` shape.
 * @see {@link CreatePartitionIndexCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class CreatePartitionIndexCommand extends $Command
  .classBuilder<
    CreatePartitionIndexCommandInput,
    CreatePartitionIndexCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "CreatePartitionIndex", {})
  .n("GlueClient", "CreatePartitionIndexCommand")
  .sc(CreatePartitionIndex)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePartitionIndexRequest;
      output: {};
    };
    sdk: {
      input: CreatePartitionIndexCommandInput;
      output: CreatePartitionIndexCommandOutput;
    };
  };
}
