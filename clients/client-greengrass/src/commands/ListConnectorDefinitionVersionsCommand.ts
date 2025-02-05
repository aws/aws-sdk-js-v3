// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListConnectorDefinitionVersionsRequest, ListConnectorDefinitionVersionsResponse } from "../models/models_0";
import {
  de_ListConnectorDefinitionVersionsCommand,
  se_ListConnectorDefinitionVersionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConnectorDefinitionVersionsCommand}.
 */
export interface ListConnectorDefinitionVersionsCommandInput extends ListConnectorDefinitionVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListConnectorDefinitionVersionsCommand}.
 */
export interface ListConnectorDefinitionVersionsCommandOutput
  extends ListConnectorDefinitionVersionsResponse,
    __MetadataBearer {}

/**
 * Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListConnectorDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListConnectorDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GreengrassClient(config);
 * const input = { // ListConnectorDefinitionVersionsRequest
 *   ConnectorDefinitionId: "STRING_VALUE", // required
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListConnectorDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectorDefinitionVersionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Versions: [ // __listOfVersionInformation
 * //     { // VersionInformation
 * //       Arn: "STRING_VALUE",
 * //       CreationTimestamp: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListConnectorDefinitionVersionsCommandInput - {@link ListConnectorDefinitionVersionsCommandInput}
 * @returns {@link ListConnectorDefinitionVersionsCommandOutput}
 * @see {@link ListConnectorDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListConnectorDefinitionVersionsCommandOutput} for command's `response` shape.
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
export class ListConnectorDefinitionVersionsCommand extends $Command
  .classBuilder<
    ListConnectorDefinitionVersionsCommandInput,
    ListConnectorDefinitionVersionsCommandOutput,
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
  .s("Greengrass", "ListConnectorDefinitionVersions", {})
  .n("GreengrassClient", "ListConnectorDefinitionVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListConnectorDefinitionVersionsCommand)
  .de(de_ListConnectorDefinitionVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectorDefinitionVersionsRequest;
      output: ListConnectorDefinitionVersionsResponse;
    };
    sdk: {
      input: ListConnectorDefinitionVersionsCommandInput;
      output: ListConnectorDefinitionVersionsCommandOutput;
    };
  };
}
