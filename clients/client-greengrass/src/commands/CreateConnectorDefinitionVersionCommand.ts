// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type {
  CreateConnectorDefinitionVersionRequest,
  CreateConnectorDefinitionVersionResponse,
} from "../models/models_0";
import { CreateConnectorDefinitionVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectorDefinitionVersionCommand}.
 */
export interface CreateConnectorDefinitionVersionCommandInput extends CreateConnectorDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectorDefinitionVersionCommand}.
 */
export interface CreateConnectorDefinitionVersionCommandOutput extends CreateConnectorDefinitionVersionResponse, __MetadataBearer {}

/**
 * Creates a version of a connector definition which has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateConnectorDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateConnectorDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // CreateConnectorDefinitionVersionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   ConnectorDefinitionId: "STRING_VALUE", // required
 *   Connectors: [ // __listOfConnector
 *     { // Connector
 *       ConnectorArn: "STRING_VALUE", // required
 *       Id: "STRING_VALUE", // required
 *       Parameters: { // __mapOf__string
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateConnectorDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectorDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateConnectorDefinitionVersionCommandInput - {@link CreateConnectorDefinitionVersionCommandInput}
 * @returns {@link CreateConnectorDefinitionVersionCommandOutput}
 * @see {@link CreateConnectorDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorDefinitionVersionCommandOutput} for command's `response` shape.
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
export class CreateConnectorDefinitionVersionCommand extends $Command
  .classBuilder<
    CreateConnectorDefinitionVersionCommandInput,
    CreateConnectorDefinitionVersionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "CreateConnectorDefinitionVersion", {})
  .n("GreengrassClient", "CreateConnectorDefinitionVersionCommand")
  .sc(CreateConnectorDefinitionVersion$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectorDefinitionVersionRequest;
      output: CreateConnectorDefinitionVersionResponse;
    };
    sdk: {
      input: CreateConnectorDefinitionVersionCommandInput;
      output: CreateConnectorDefinitionVersionCommandOutput;
    };
  };
}
