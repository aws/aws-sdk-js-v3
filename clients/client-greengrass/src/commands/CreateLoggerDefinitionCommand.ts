// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateLoggerDefinitionRequest, CreateLoggerDefinitionResponse } from "../models/models_0";
import { de_CreateLoggerDefinitionCommand, se_CreateLoggerDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLoggerDefinitionCommand}.
 */
export interface CreateLoggerDefinitionCommandInput extends CreateLoggerDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateLoggerDefinitionCommand}.
 */
export interface CreateLoggerDefinitionCommandOutput extends CreateLoggerDefinitionResponse, __MetadataBearer {}

/**
 * Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateLoggerDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateLoggerDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // CreateLoggerDefinitionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   InitialVersion: { // LoggerDefinitionVersion
 *     Loggers: [ // __listOfLogger
 *       { // Logger
 *         Component: "GreengrassSystem" || "Lambda", // required
 *         Id: "STRING_VALUE", // required
 *         Level: "DEBUG" || "INFO" || "WARN" || "ERROR" || "FATAL", // required
 *         Space: Number("int"),
 *         Type: "FileSystem" || "AWSCloudWatch", // required
 *       },
 *     ],
 *   },
 *   Name: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateLoggerDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateLoggerDefinitionResponse
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
 * @param CreateLoggerDefinitionCommandInput - {@link CreateLoggerDefinitionCommandInput}
 * @returns {@link CreateLoggerDefinitionCommandOutput}
 * @see {@link CreateLoggerDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateLoggerDefinitionCommandOutput} for command's `response` shape.
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
export class CreateLoggerDefinitionCommand extends $Command
  .classBuilder<
    CreateLoggerDefinitionCommandInput,
    CreateLoggerDefinitionCommandOutput,
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
  .s("Greengrass", "CreateLoggerDefinition", {})
  .n("GreengrassClient", "CreateLoggerDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_CreateLoggerDefinitionCommand)
  .de(de_CreateLoggerDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLoggerDefinitionRequest;
      output: CreateLoggerDefinitionResponse;
    };
    sdk: {
      input: CreateLoggerDefinitionCommandInput;
      output: CreateLoggerDefinitionCommandOutput;
    };
  };
}
