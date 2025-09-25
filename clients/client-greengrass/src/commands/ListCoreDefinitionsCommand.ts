// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListCoreDefinitionsRequest, ListCoreDefinitionsResponse } from "../models/models_0";
import { ListCoreDefinitions } from "../schemas/schemas_5_Definitions";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCoreDefinitionsCommand}.
 */
export interface ListCoreDefinitionsCommandInput extends ListCoreDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListCoreDefinitionsCommand}.
 */
export interface ListCoreDefinitionsCommandOutput extends ListCoreDefinitionsResponse, __MetadataBearer {}

/**
 * Retrieves a list of core definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListCoreDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListCoreDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // ListCoreDefinitionsRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCoreDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListCoreDefinitionsResponse
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
 * @param ListCoreDefinitionsCommandInput - {@link ListCoreDefinitionsCommandInput}
 * @returns {@link ListCoreDefinitionsCommandOutput}
 * @see {@link ListCoreDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListCoreDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class ListCoreDefinitionsCommand extends $Command
  .classBuilder<
    ListCoreDefinitionsCommandInput,
    ListCoreDefinitionsCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "ListCoreDefinitions", {})
  .n("GreengrassClient", "ListCoreDefinitionsCommand")
  .sc(ListCoreDefinitions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCoreDefinitionsRequest;
      output: ListCoreDefinitionsResponse;
    };
    sdk: {
      input: ListCoreDefinitionsCommandInput;
      output: ListCoreDefinitionsCommandOutput;
    };
  };
}
