// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type { GetLoggerDefinitionVersionRequest, GetLoggerDefinitionVersionResponse } from "../models/models_0";
import { GetLoggerDefinitionVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLoggerDefinitionVersionCommand}.
 */
export interface GetLoggerDefinitionVersionCommandInput extends GetLoggerDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetLoggerDefinitionVersionCommand}.
 */
export interface GetLoggerDefinitionVersionCommandOutput extends GetLoggerDefinitionVersionResponse, __MetadataBearer {}

/**
 * Retrieves information about a logger definition version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetLoggerDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetLoggerDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // GetLoggerDefinitionVersionRequest
 *   LoggerDefinitionId: "STRING_VALUE", // required
 *   LoggerDefinitionVersionId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetLoggerDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetLoggerDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Definition: { // LoggerDefinitionVersion
 * //     Loggers: [ // __listOfLogger
 * //       { // Logger
 * //         Component: "GreengrassSystem" || "Lambda", // required
 * //         Id: "STRING_VALUE", // required
 * //         Level: "DEBUG" || "INFO" || "WARN" || "ERROR" || "FATAL", // required
 * //         Space: Number("int"),
 * //         Type: "FileSystem" || "AWSCloudWatch", // required
 * //       },
 * //     ],
 * //   },
 * //   Id: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLoggerDefinitionVersionCommandInput - {@link GetLoggerDefinitionVersionCommandInput}
 * @returns {@link GetLoggerDefinitionVersionCommandOutput}
 * @see {@link GetLoggerDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetLoggerDefinitionVersionCommandOutput} for command's `response` shape.
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
export class GetLoggerDefinitionVersionCommand extends $Command
  .classBuilder<
    GetLoggerDefinitionVersionCommandInput,
    GetLoggerDefinitionVersionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "GetLoggerDefinitionVersion", {})
  .n("GreengrassClient", "GetLoggerDefinitionVersionCommand")
  .sc(GetLoggerDefinitionVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLoggerDefinitionVersionRequest;
      output: GetLoggerDefinitionVersionResponse;
    };
    sdk: {
      input: GetLoggerDefinitionVersionCommandInput;
      output: GetLoggerDefinitionVersionCommandOutput;
    };
  };
}
