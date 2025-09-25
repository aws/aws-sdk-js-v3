// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateConnectorDefinitionRequest, CreateConnectorDefinitionResponse } from "../models/models_0";
import { CreateConnectorDefinition } from "../schemas/schemas_15_Definition";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectorDefinitionCommand}.
 */
export interface CreateConnectorDefinitionCommandInput extends CreateConnectorDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectorDefinitionCommand}.
 */
export interface CreateConnectorDefinitionCommandOutput extends CreateConnectorDefinitionResponse, __MetadataBearer {}

/**
 * Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateConnectorDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateConnectorDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // CreateConnectorDefinitionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   InitialVersion: { // ConnectorDefinitionVersion
 *     Connectors: [ // __listOfConnector
 *       { // Connector
 *         ConnectorArn: "STRING_VALUE", // required
 *         Id: "STRING_VALUE", // required
 *         Parameters: { // __mapOf__string
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 *   Name: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConnectorDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectorDefinitionResponse
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
 * @param CreateConnectorDefinitionCommandInput - {@link CreateConnectorDefinitionCommandInput}
 * @returns {@link CreateConnectorDefinitionCommandOutput}
 * @see {@link CreateConnectorDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorDefinitionCommandOutput} for command's `response` shape.
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
export class CreateConnectorDefinitionCommand extends $Command
  .classBuilder<
    CreateConnectorDefinitionCommandInput,
    CreateConnectorDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "CreateConnectorDefinition", {})
  .n("GreengrassClient", "CreateConnectorDefinitionCommand")
  .sc(CreateConnectorDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectorDefinitionRequest;
      output: CreateConnectorDefinitionResponse;
    };
    sdk: {
      input: CreateConnectorDefinitionCommandInput;
      output: CreateConnectorDefinitionCommandOutput;
    };
  };
}
