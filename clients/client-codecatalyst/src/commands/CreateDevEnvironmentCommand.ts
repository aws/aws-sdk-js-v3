// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDevEnvironmentRequest, CreateDevEnvironmentResponse } from "../models/models_0";
import { de_CreateDevEnvironmentCommand, se_CreateDevEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDevEnvironmentCommand}.
 */
export interface CreateDevEnvironmentCommandInput extends CreateDevEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateDevEnvironmentCommand}.
 */
export interface CreateDevEnvironmentCommandOutput extends CreateDevEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Creates a Dev Environment in Amazon CodeCatalyst, a cloud-based development environment that you can use to quickly work on the code stored
 *       in the source repositories of your project.       </p>
 *          <note>
 *             <p>When created in the Amazon CodeCatalyst console, by default a Dev Environment is configured to have a 2 core processor, 4GB of RAM, and 16GB of persistent storage. None of these
 *       defaults apply to a Dev Environment created programmatically.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, CreateDevEnvironmentCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, CreateDevEnvironmentCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeCatalystClient(config);
 * const input = { // CreateDevEnvironmentRequest
 *   spaceName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 *   repositories: [ // RepositoriesInput
 *     { // RepositoryInput
 *       repositoryName: "STRING_VALUE", // required
 *       branchName: "STRING_VALUE",
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   alias: "STRING_VALUE",
 *   ides: [ // IdeConfigurationList
 *     { // IdeConfiguration
 *       runtime: "STRING_VALUE",
 *       name: "STRING_VALUE",
 *     },
 *   ],
 *   instanceType: "STRING_VALUE", // required
 *   inactivityTimeoutMinutes: Number("int"),
 *   persistentStorage: { // PersistentStorageConfiguration
 *     sizeInGiB: Number("int"), // required
 *   },
 *   vpcConnectionName: "STRING_VALUE",
 * };
 * const command = new CreateDevEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateDevEnvironmentResponse
 * //   spaceName: "STRING_VALUE", // required
 * //   projectName: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   vpcConnectionName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDevEnvironmentCommandInput - {@link CreateDevEnvironmentCommandInput}
 * @returns {@link CreateDevEnvironmentCommandOutput}
 * @see {@link CreateDevEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateDevEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request.
 *        Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce
 *       the number of resources, or change the tier if applicable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.</p>
 *
 * @throws {@link CodeCatalystServiceException}
 * <p>Base exception class for all service exceptions from CodeCatalyst service.</p>
 *
 * @public
 */
export class CreateDevEnvironmentCommand extends $Command
  .classBuilder<
    CreateDevEnvironmentCommandInput,
    CreateDevEnvironmentCommandOutput,
    CodeCatalystClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCatalystClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeCatalyst", "CreateDevEnvironment", {})
  .n("CodeCatalystClient", "CreateDevEnvironmentCommand")
  .f(void 0, void 0)
  .ser(se_CreateDevEnvironmentCommand)
  .de(de_CreateDevEnvironmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDevEnvironmentRequest;
      output: CreateDevEnvironmentResponse;
    };
    sdk: {
      input: CreateDevEnvironmentCommandInput;
      output: CreateDevEnvironmentCommandOutput;
    };
  };
}
