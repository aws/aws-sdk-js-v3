// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetFunctionDefinitionVersionRequest, GetFunctionDefinitionVersionResponse } from "../models/models_0";
import {
  de_GetFunctionDefinitionVersionCommand,
  se_GetFunctionDefinitionVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFunctionDefinitionVersionCommand}.
 */
export interface GetFunctionDefinitionVersionCommandInput extends GetFunctionDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetFunctionDefinitionVersionCommand}.
 */
export interface GetFunctionDefinitionVersionCommandOutput
  extends GetFunctionDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetFunctionDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetFunctionDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // GetFunctionDefinitionVersionRequest
 *   FunctionDefinitionId: "STRING_VALUE", // required
 *   FunctionDefinitionVersionId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetFunctionDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetFunctionDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Definition: { // FunctionDefinitionVersion
 * //     DefaultConfig: { // FunctionDefaultConfig
 * //       Execution: { // FunctionDefaultExecutionConfig
 * //         IsolationMode: "GreengrassContainer" || "NoContainer",
 * //         RunAs: { // FunctionRunAsConfig
 * //           Gid: Number("int"),
 * //           Uid: Number("int"),
 * //         },
 * //       },
 * //     },
 * //     Functions: [ // __listOfFunction
 * //       { // Function
 * //         FunctionArn: "STRING_VALUE",
 * //         FunctionConfiguration: { // FunctionConfiguration
 * //           EncodingType: "binary" || "json",
 * //           Environment: { // FunctionConfigurationEnvironment
 * //             AccessSysfs: true || false,
 * //             Execution: { // FunctionExecutionConfig
 * //               IsolationMode: "GreengrassContainer" || "NoContainer",
 * //               RunAs: {
 * //                 Gid: Number("int"),
 * //                 Uid: Number("int"),
 * //               },
 * //             },
 * //             ResourceAccessPolicies: [ // __listOfResourceAccessPolicy
 * //               { // ResourceAccessPolicy
 * //                 Permission: "ro" || "rw",
 * //                 ResourceId: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             Variables: { // __mapOf__string
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //           ExecArgs: "STRING_VALUE",
 * //           Executable: "STRING_VALUE",
 * //           MemorySize: Number("int"),
 * //           Pinned: true || false,
 * //           Timeout: Number("int"),
 * //           FunctionRuntimeOverride: "STRING_VALUE",
 * //         },
 * //         Id: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   Id: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFunctionDefinitionVersionCommandInput - {@link GetFunctionDefinitionVersionCommandInput}
 * @returns {@link GetFunctionDefinitionVersionCommandOutput}
 * @see {@link GetFunctionDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetFunctionDefinitionVersionCommandOutput} for command's `response` shape.
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
export class GetFunctionDefinitionVersionCommand extends $Command
  .classBuilder<
    GetFunctionDefinitionVersionCommandInput,
    GetFunctionDefinitionVersionCommandOutput,
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
  .s("Greengrass", "GetFunctionDefinitionVersion", {})
  .n("GreengrassClient", "GetFunctionDefinitionVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetFunctionDefinitionVersionCommand)
  .de(de_GetFunctionDefinitionVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFunctionDefinitionVersionRequest;
      output: GetFunctionDefinitionVersionResponse;
    };
    sdk: {
      input: GetFunctionDefinitionVersionCommandInput;
      output: GetFunctionDefinitionVersionCommandOutput;
    };
  };
}
