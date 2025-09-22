// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateFunctionDefinitionVersionRequest, CreateFunctionDefinitionVersionResponse } from "../models/models_0";
import { CreateFunctionDefinitionVersion } from "../schemas/schemas_4_Definition";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFunctionDefinitionVersionCommand}.
 */
export interface CreateFunctionDefinitionVersionCommandInput extends CreateFunctionDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateFunctionDefinitionVersionCommand}.
 */
export interface CreateFunctionDefinitionVersionCommandOutput
  extends CreateFunctionDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * Creates a version of a Lambda function definition that has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateFunctionDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateFunctionDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // CreateFunctionDefinitionVersionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   DefaultConfig: { // FunctionDefaultConfig
 *     Execution: { // FunctionDefaultExecutionConfig
 *       IsolationMode: "GreengrassContainer" || "NoContainer",
 *       RunAs: { // FunctionRunAsConfig
 *         Gid: Number("int"),
 *         Uid: Number("int"),
 *       },
 *     },
 *   },
 *   FunctionDefinitionId: "STRING_VALUE", // required
 *   Functions: [ // __listOfFunction
 *     { // Function
 *       FunctionArn: "STRING_VALUE",
 *       FunctionConfiguration: { // FunctionConfiguration
 *         EncodingType: "binary" || "json",
 *         Environment: { // FunctionConfigurationEnvironment
 *           AccessSysfs: true || false,
 *           Execution: { // FunctionExecutionConfig
 *             IsolationMode: "GreengrassContainer" || "NoContainer",
 *             RunAs: {
 *               Gid: Number("int"),
 *               Uid: Number("int"),
 *             },
 *           },
 *           ResourceAccessPolicies: [ // __listOfResourceAccessPolicy
 *             { // ResourceAccessPolicy
 *               Permission: "ro" || "rw",
 *               ResourceId: "STRING_VALUE", // required
 *             },
 *           ],
 *           Variables: { // __mapOf__string
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *         ExecArgs: "STRING_VALUE",
 *         Executable: "STRING_VALUE",
 *         MemorySize: Number("int"),
 *         Pinned: true || false,
 *         Timeout: Number("int"),
 *         FunctionRuntimeOverride: "STRING_VALUE",
 *       },
 *       Id: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateFunctionDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateFunctionDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFunctionDefinitionVersionCommandInput - {@link CreateFunctionDefinitionVersionCommandInput}
 * @returns {@link CreateFunctionDefinitionVersionCommandOutput}
 * @see {@link CreateFunctionDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionDefinitionVersionCommandOutput} for command's `response` shape.
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
export class CreateFunctionDefinitionVersionCommand extends $Command
  .classBuilder<
    CreateFunctionDefinitionVersionCommandInput,
    CreateFunctionDefinitionVersionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "CreateFunctionDefinitionVersion", {})
  .n("GreengrassClient", "CreateFunctionDefinitionVersionCommand")
  .sc(CreateFunctionDefinitionVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFunctionDefinitionVersionRequest;
      output: CreateFunctionDefinitionVersionResponse;
    };
    sdk: {
      input: CreateFunctionDefinitionVersionCommandInput;
      output: CreateFunctionDefinitionVersionCommandOutput;
    };
  };
}
