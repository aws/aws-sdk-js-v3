// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetConnectorDefinitionVersionRequest, GetConnectorDefinitionVersionResponse } from "../models/models_0";
import {
  de_GetConnectorDefinitionVersionCommand,
  se_GetConnectorDefinitionVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConnectorDefinitionVersionCommand}.
 */
export interface GetConnectorDefinitionVersionCommandInput extends GetConnectorDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectorDefinitionVersionCommand}.
 */
export interface GetConnectorDefinitionVersionCommandOutput
  extends GetConnectorDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetConnectorDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetConnectorDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // GetConnectorDefinitionVersionRequest
 *   ConnectorDefinitionId: "STRING_VALUE", // required
 *   ConnectorDefinitionVersionId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetConnectorDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectorDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Definition: { // ConnectorDefinitionVersion
 * //     Connectors: [ // __listOfConnector
 * //       { // Connector
 * //         ConnectorArn: "STRING_VALUE", // required
 * //         Id: "STRING_VALUE", // required
 * //         Parameters: { // __mapOf__string
 * //           "<keys>": "STRING_VALUE",
 * //         },
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
 * @param GetConnectorDefinitionVersionCommandInput - {@link GetConnectorDefinitionVersionCommandInput}
 * @returns {@link GetConnectorDefinitionVersionCommandOutput}
 * @see {@link GetConnectorDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetConnectorDefinitionVersionCommandOutput} for command's `response` shape.
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
export class GetConnectorDefinitionVersionCommand extends $Command
  .classBuilder<
    GetConnectorDefinitionVersionCommandInput,
    GetConnectorDefinitionVersionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "GetConnectorDefinitionVersion", {})
  .n("GreengrassClient", "GetConnectorDefinitionVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetConnectorDefinitionVersionCommand)
  .de(de_GetConnectorDefinitionVersionCommand)
  .build() {}
