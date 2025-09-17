// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListConnectorDefinitionsRequest, ListConnectorDefinitionsResponse } from "../models/models_0";
import { de_ListConnectorDefinitionsCommand, se_ListConnectorDefinitionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConnectorDefinitionsCommand}.
 */
export interface ListConnectorDefinitionsCommandInput extends ListConnectorDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListConnectorDefinitionsCommand}.
 */
export interface ListConnectorDefinitionsCommandOutput extends ListConnectorDefinitionsResponse, __MetadataBearer {}

/**
 * Retrieves a list of connector definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListConnectorDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListConnectorDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // ListConnectorDefinitionsRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListConnectorDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectorDefinitionsResponse
 * //   Definitions: [ // __listOfDefinitionInformation
 * //     { // DefinitionInformation
 * //       Arn: "STRING_VALUE",
 * //       CreationTimestamp: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       LastUpdatedTimestamp: "STRING_VALUE",
 * //       LatestVersion: "STRING_VALUE",
 * //       LatestVersionArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConnectorDefinitionsCommandInput - {@link ListConnectorDefinitionsCommandInput}
 * @returns {@link ListConnectorDefinitionsCommandOutput}
 * @see {@link ListConnectorDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListConnectorDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class ListConnectorDefinitionsCommand extends $Command
  .classBuilder<
    ListConnectorDefinitionsCommandInput,
    ListConnectorDefinitionsCommandOutput,
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
  .s("Greengrass", "ListConnectorDefinitions", {})
  .n("GreengrassClient", "ListConnectorDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_ListConnectorDefinitionsCommand)
  .de(de_ListConnectorDefinitionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectorDefinitionsRequest;
      output: ListConnectorDefinitionsResponse;
    };
    sdk: {
      input: ListConnectorDefinitionsCommandInput;
      output: ListConnectorDefinitionsCommandOutput;
    };
  };
}
