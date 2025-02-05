// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateFunctionDefinitionVersionRequest, CreateFunctionDefinitionVersionResponse } from "../models/models_0";
import {
  de_CreateFunctionDefinitionVersionCommand,
  se_CreateFunctionDefinitionVersionCommand,
} from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "CreateFunctionDefinitionVersion", {})
  .n("GreengrassClient", "CreateFunctionDefinitionVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreateFunctionDefinitionVersionCommand)
  .de(de_CreateFunctionDefinitionVersionCommand)
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
