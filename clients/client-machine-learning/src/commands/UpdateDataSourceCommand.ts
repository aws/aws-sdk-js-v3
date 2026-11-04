// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDataSourceInput, UpdateDataSourceOutput } from "../models/models_0";
import { UpdateDataSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDataSourceCommand}.
 */
export interface UpdateDataSourceCommandInput extends UpdateDataSourceInput {}
/**
 * @public
 *
 * The output of {@link UpdateDataSourceCommand}.
 */
export interface UpdateDataSourceCommandOutput extends UpdateDataSourceOutput, __MetadataBearer {}

/**
 * Updates the `DataSourceName` of a `DataSource`.
 *
 * You can use the `GetDataSource` operation to view the contents of the updated data element.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, UpdateDataSourceCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, UpdateDataSourceCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // UpdateDataSourceInput
 *   DataSourceId: "STRING_VALUE", // required
 *   DataSourceName: "STRING_VALUE", // required
 * };
 * const command = new UpdateDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataSourceOutput
 * //   DataSourceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDataSourceCommandInput - {@link UpdateDataSourceCommandInput}
 * @returns {@link UpdateDataSourceCommandOutput}
 * @see {@link UpdateDataSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSourceCommandOutput} for command's `response` shape.
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
export class UpdateDataSourceCommand extends command<UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDataSource",
  UpdateDataSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataSourceInput;
      output: UpdateDataSourceOutput;
    };
    sdk: {
      input: UpdateDataSourceCommandInput;
      output: UpdateDataSourceCommandOutput;
    };
  };
}
