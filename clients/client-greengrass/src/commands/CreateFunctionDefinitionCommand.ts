// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateFunctionDefinitionRequest, CreateFunctionDefinitionResponse } from "../models/models_0";
import { de_CreateFunctionDefinitionCommand, se_CreateFunctionDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFunctionDefinitionCommand}.
 */
export interface CreateFunctionDefinitionCommandInput extends CreateFunctionDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateFunctionDefinitionCommand}.
 */
export interface CreateFunctionDefinitionCommandOutput extends CreateFunctionDefinitionResponse, __MetadataBearer {}

/**
 * Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateFunctionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateFunctionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // CreateFunctionDefinitionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   InitialVersion: { // FunctionDefinitionVersion
 *     DefaultConfig: { // FunctionDefaultConfig
 *       Execution: { // FunctionDefaultExecutionConfig
 *         IsolationMode: "GreengrassContainer" || "NoContainer",
 *         RunAs: { // FunctionRunAsConfig
 *           Gid: Number("int"),
 *           Uid: Number("int"),
 *         },
 *       },
 *     },
 *     Functions: [ // __listOfFunction
 *       { // Function
 *         FunctionArn: "STRING_VALUE",
 *         FunctionConfiguration: { // FunctionConfiguration
 *           EncodingType: "binary" || "json",
 *           Environment: { // FunctionConfigurationEnvironment
 *             AccessSysfs: true || false,
 *             Execution: { // FunctionExecutionConfig
 *               IsolationMode: "GreengrassContainer" || "NoContainer",
 *               RunAs: {
 *                 Gid: Number("int"),
 *                 Uid: Number("int"),
 *               },
 *             },
 *             ResourceAccessPolicies: [ // __listOfResourceAccessPolicy
 *               { // ResourceAccessPolicy
 *                 Permission: "ro" || "rw",
 *                 ResourceId: "STRING_VALUE", // required
 *               },
 *             ],
 *             Variables: { // __mapOf__string
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *           ExecArgs: "STRING_VALUE",
 *           Executable: "STRING_VALUE",
 *           MemorySize: Number("int"),
 *           Pinned: true || false,
 *           Timeout: Number("int"),
 *           FunctionRuntimeOverride: "STRING_VALUE",
 *         },
 *         Id: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   Name: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateFunctionDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateFunctionDefinitionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   LastUpdatedTimestamp: "STRING_VALUE",
 * //   LatestVersion: "STRING_VALUE",
 * //   LatestVersionArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFunctionDefinitionCommandInput - {@link CreateFunctionDefinitionCommandInput}
 * @returns {@link CreateFunctionDefinitionCommandOutput}
 * @see {@link CreateFunctionDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class CreateFunctionDefinitionCommand extends $Command
  .classBuilder<
    CreateFunctionDefinitionCommandInput,
    CreateFunctionDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "CreateFunctionDefinition", {})
  .n("GreengrassClient", "CreateFunctionDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_CreateFunctionDefinitionCommand)
  .de(de_CreateFunctionDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFunctionDefinitionRequest;
      output: CreateFunctionDefinitionResponse;
    };
    sdk: {
      input: CreateFunctionDefinitionCommandInput;
      output: CreateFunctionDefinitionCommandOutput;
    };
  };
}
