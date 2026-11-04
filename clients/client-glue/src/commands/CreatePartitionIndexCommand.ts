// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePartitionIndexRequest, CreatePartitionIndexResponse } from "../models/models_1";
import { CreatePartitionIndex$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a specified partition index in an existing table.
 *
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
 *
 * A resource to be created or added already exists.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *
 * An encryption operation failed.
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
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class CreatePartitionIndexCommand extends command<CreatePartitionIndexCommandInput, CreatePartitionIndexCommandOutput>(
  _ep0,
  _mw0,
  "CreatePartitionIndex",
  CreatePartitionIndex$
) {
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
