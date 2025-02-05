// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetLoggerDefinitionVersionRequest, GetLoggerDefinitionVersionResponse } from "../models/models_0";
import { de_GetLoggerDefinitionVersionCommand, se_GetLoggerDefinitionVersionCommand } from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "GetLoggerDefinitionVersion", {})
  .n("GreengrassClient", "GetLoggerDefinitionVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetLoggerDefinitionVersionCommand)
  .de(de_GetLoggerDefinitionVersionCommand)
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
