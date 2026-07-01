// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLoggerDefinitionVersionRequest, CreateLoggerDefinitionVersionResponse } from "../models/models_0";
import { CreateLoggerDefinitionVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateLoggerDefinitionVersionCommandOutput extends CreateLoggerDefinitionVersionResponse, __MetadataBearer {}

/**
 * Creates a version of a logger definition that has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateLoggerDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateLoggerDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
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
 *
 * @public
 */
export class CreateLoggerDefinitionVersionCommand extends command<CreateLoggerDefinitionVersionCommandInput, CreateLoggerDefinitionVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreateLoggerDefinitionVersion",
  CreateLoggerDefinitionVersion$
) {
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
