// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDataSourceInput, DeleteDataSourceOutput } from "../models/models_0";
import { DeleteDataSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDataSourceCommand}.
 */
export interface DeleteDataSourceCommandInput extends DeleteDataSourceInput {}
/**
 * @public
 *
 * The output of {@link DeleteDataSourceCommand}.
 */
export interface DeleteDataSourceCommandOutput extends DeleteDataSourceOutput, __MetadataBearer {}

/**
 * Assigns the DELETED status to a `DataSource`, rendering it unusable.
 *
 * After using the `DeleteDataSource` operation, you can use the GetDataSource operation to verify that the status of the `DataSource` changed to DELETED.
 *
 * **Caution:** The results of the `DeleteDataSource` operation are irreversible.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DeleteDataSourceCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DeleteDataSourceCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // DeleteDataSourceInput
 *   DataSourceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDataSourceOutput
 * //   DataSourceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDataSourceCommandInput - {@link DeleteDataSourceCommandInput}
 * @returns {@link DeleteDataSourceCommandOutput}
 * @see {@link DeleteDataSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteDataSourceCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An error on the server occurred when trying to process a request.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * An error on the client occurred. Typically, the cause is an invalid input value.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A specified resource cannot be located.
 *
 * @throws {@link MachineLearningServiceException}
 *
 * Base exception class for all service exceptions from MachineLearning service.
 *
 * @public
 */
export class DeleteDataSourceCommand extends command<DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDataSource",
  DeleteDataSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataSourceInput;
      output: DeleteDataSourceOutput;
    };
    sdk: {
      input: DeleteDataSourceCommandInput;
      output: DeleteDataSourceCommandOutput;
    };
  };
}
