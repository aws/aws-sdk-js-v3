// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateProjectRequest, CreateProjectResponse } from "../models/models_0";
import { CreateProject } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProjectCommand}.
 */
export interface CreateProjectCommandInput extends CreateProjectRequest {}
/**
 * @public
 *
 * The output of {@link CreateProjectCommand}.
 */
export interface CreateProjectCommandOutput extends CreateProjectResponse, __MetadataBearer {}

/**
 * <p>Creates a new DataBrew project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateProjectCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateProjectCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // CreateProjectRequest
 *   DatasetName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   RecipeName: "STRING_VALUE", // required
 *   Sample: { // Sample
 *     Size: Number("int"),
 *     Type: "FIRST_N" || "LAST_N" || "RANDOM", // required
 *   },
 *   RoleArn: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateProjectCommand(input);
 * const response = await client.send(command);
 * // { // CreateProjectResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateProjectCommandInput - {@link CreateProjectCommandInput}
 * @returns {@link CreateProjectCommandOutput}
 * @see {@link CreateProjectCommandInput} for command's `input` shape.
 * @see {@link CreateProjectCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service failure occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota is exceeded.</p>
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
export class CreateProjectCommand extends $Command
  .classBuilder<
    CreateProjectCommandInput,
    CreateProjectCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "CreateProject", {})
  .n("DataBrewClient", "CreateProjectCommand")
  .sc(CreateProject)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProjectRequest;
      output: CreateProjectResponse;
    };
    sdk: {
      input: CreateProjectCommandInput;
      output: CreateProjectCommandOutput;
    };
  };
}
