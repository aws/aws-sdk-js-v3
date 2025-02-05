// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateLoggerDefinitionVersionRequest, CreateLoggerDefinitionVersionResponse } from "../models/models_0";
import {
  de_CreateLoggerDefinitionVersionCommand,
  se_CreateLoggerDefinitionVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLoggerDefinitionVersionCommand}.
 */
export interface CreateLoggerDefinitionVersionCommandInput extends CreateLoggerDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateLoggerDefinitionVersionCommand}.
 */
export interface CreateLoggerDefinitionVersionCommandOutput
  extends CreateLoggerDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * Creates a version of a logger definition that has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateLoggerDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateLoggerDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GreengrassClient(config);
 * const input = { // CreateLoggerDefinitionVersionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   LoggerDefinitionId: "STRING_VALUE", // required
 *   Loggers: [ // __listOfLogger
 *     { // Logger
 *       Component: "GreengrassSystem" || "Lambda", // required
 *       Id: "STRING_VALUE", // required
 *       Level: "DEBUG" || "INFO" || "WARN" || "ERROR" || "FATAL", // required
 *       Space: Number("int"),
 *       Type: "FileSystem" || "AWSCloudWatch", // required
 *     },
 *   ],
 * };
 * const command = new CreateLoggerDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateLoggerDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLoggerDefinitionVersionCommandInput - {@link CreateLoggerDefinitionVersionCommandInput}
 * @returns {@link CreateLoggerDefinitionVersionCommandOutput}
 * @see {@link CreateLoggerDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateLoggerDefinitionVersionCommandOutput} for command's `response` shape.
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
export class CreateLoggerDefinitionVersionCommand extends $Command
  .classBuilder<
    CreateLoggerDefinitionVersionCommandInput,
    CreateLoggerDefinitionVersionCommandOutput,
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
  .s("Greengrass", "CreateLoggerDefinitionVersion", {})
  .n("GreengrassClient", "CreateLoggerDefinitionVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreateLoggerDefinitionVersionCommand)
  .de(de_CreateLoggerDefinitionVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLoggerDefinitionVersionRequest;
      output: CreateLoggerDefinitionVersionResponse;
    };
    sdk: {
      input: CreateLoggerDefinitionVersionCommandInput;
      output: CreateLoggerDefinitionVersionCommandOutput;
    };
  };
}
