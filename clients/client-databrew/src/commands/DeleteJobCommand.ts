// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteJobRequest, DeleteJobResponse } from "../models/models_0";
import { DeleteJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the specified DataBrew job.</p>
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
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 *
 * @public
 */
export class DeleteJobCommand extends $Command
  .classBuilder<
    DeleteJobCommandInput,
    DeleteJobCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "DeleteJob", {})
  .n("DataBrewClient", "DeleteJobCommand")
  .sc(DeleteJob)
  .build() {
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
