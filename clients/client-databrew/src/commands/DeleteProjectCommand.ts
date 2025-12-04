// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteProjectRequest, DeleteProjectResponse } from "../models/models_0";
import { DeleteProject } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProjectCommand}.
 */
export interface DeleteProjectCommandInput extends DeleteProjectRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProjectCommand}.
 */
export interface DeleteProjectCommandOutput extends DeleteProjectResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing DataBrew project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DeleteProjectCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DeleteProjectCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // DeleteProjectRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteProjectCommand(input);
 * const response = await client.send(command);
 * // { // DeleteProjectResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteProjectCommandInput - {@link DeleteProjectCommandInput}
 * @returns {@link DeleteProjectCommandOutput}
 * @see {@link DeleteProjectCommandInput} for command's `input` shape.
 * @see {@link DeleteProjectCommandOutput} for command's `response` shape.
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
export class DeleteProjectCommand extends $Command
  .classBuilder<
    DeleteProjectCommandInput,
    DeleteProjectCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "DeleteProject", {})
  .n("DataBrewClient", "DeleteProjectCommand")
  .sc(DeleteProject)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProjectRequest;
      output: DeleteProjectResponse;
    };
    sdk: {
      input: DeleteProjectCommandInput;
      output: DeleteProjectCommandOutput;
    };
  };
}
