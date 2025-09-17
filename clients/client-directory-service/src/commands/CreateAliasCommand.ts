// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAliasRequest, CreateAliasResult } from "../models/models_0";
import { de_CreateAliasCommand, se_CreateAliasCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAliasCommand}.
 */
export interface CreateAliasCommandInput extends CreateAliasRequest {}
/**
 * @public
 *
 * The output of {@link CreateAliasCommand}.
 */
export interface CreateAliasCommandOutput extends CreateAliasResult, __MetadataBearer {}

/**
 * <p>Creates an alias for a directory and assigns the alias to the directory. The alias is used
 *          to construct the access URL for the directory, such as
 *             <code>http://<alias>.awsapps.com</code>.</p>
 *          <important>
 *             <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateAliasCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateAliasCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // CreateAliasRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Alias: "STRING_VALUE", // required
 * };
 * const command = new CreateAliasCommand(input);
 * const response = await client.send(command);
 * // { // CreateAliasResult
 * //   DirectoryId: "STRING_VALUE",
 * //   Alias: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAliasCommandInput - {@link CreateAliasCommandInput}
 * @returns {@link CreateAliasCommandOutput}
 * @see {@link CreateAliasCommandInput} for command's `input` shape.
 * @see {@link CreateAliasCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The specified entity already exists.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To create an alias for a directory
 * ```javascript
 * // The following example creates an alias for a directory.
 * const input = {
 *   Alias: "salesorg",
 *   DirectoryId: "d-92654abfed"
 * };
 * const command = new CreateAliasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Alias: "salesorg",
 *   DirectoryId: "d-92654abfed"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateAliasCommand extends $Command
  .classBuilder<
    CreateAliasCommandInput,
    CreateAliasCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "CreateAlias", {})
  .n("DirectoryServiceClient", "CreateAliasCommand")
  .f(void 0, void 0)
  .ser(se_CreateAliasCommand)
  .de(de_CreateAliasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAliasRequest;
      output: CreateAliasResult;
    };
    sdk: {
      input: CreateAliasCommandInput;
      output: CreateAliasCommandOutput;
    };
  };
}
