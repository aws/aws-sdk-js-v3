// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteJobRequest, DeleteJobResponse } from "../models/models_0";
import { DeleteJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteJobCommand}.
 */
export interface DeleteJobCommandInput extends DeleteJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteJobCommand}.
 */
export interface DeleteJobCommandOutput extends DeleteJobResponse, __MetadataBearer {}

/**
 * Deletes the specified DataBrew job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DeleteJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DeleteJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // DeleteJobRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteJobCommand(input);
 * const response = await client.send(command);
 * // { // DeleteJobResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteJobCommandInput - {@link DeleteJobCommandInput}
 * @returns {@link DeleteJobCommandOutput}
 * @see {@link DeleteJobCommandInput} for command's `input` shape.
 * @see {@link DeleteJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input parameters for this request failed validation.
 *
 * @throws {@link DataBrewServiceException}
 *
 * Base exception class for all service exceptions from DataBrew service.
 *
 * @public
 */
export class DeleteJobCommand extends command<DeleteJobCommandInput, DeleteJobCommandOutput>(
  _ep0,
  _mw0,
  "DeleteJob",
  DeleteJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteJobRequest;
      output: DeleteJobResponse;
    };
    sdk: {
      input: DeleteJobCommandInput;
      output: DeleteJobCommandOutput;
    };
  };
}
