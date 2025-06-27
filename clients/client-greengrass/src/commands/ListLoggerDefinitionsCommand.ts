// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListLoggerDefinitionsRequest, ListLoggerDefinitionsResponse } from "../models/models_0";
import { de_ListLoggerDefinitionsCommand, se_ListLoggerDefinitionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLoggerDefinitionsCommand}.
 */
export interface ListLoggerDefinitionsCommandInput extends ListLoggerDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListLoggerDefinitionsCommand}.
 */
export interface ListLoggerDefinitionsCommandOutput extends ListLoggerDefinitionsResponse, __MetadataBearer {}

/**
 * Retrieves a list of logger definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListLoggerDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListLoggerDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // ListLoggerDefinitionsRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLoggerDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListLoggerDefinitionsResponse
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
 * @param ListLoggerDefinitionsCommandInput - {@link ListLoggerDefinitionsCommandInput}
 * @returns {@link ListLoggerDefinitionsCommandOutput}
 * @see {@link ListLoggerDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListLoggerDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class ListLoggerDefinitionsCommand extends $Command
  .classBuilder<
    ListLoggerDefinitionsCommandInput,
    ListLoggerDefinitionsCommandOutput,
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
  .s("Greengrass", "ListLoggerDefinitions", {})
  .n("GreengrassClient", "ListLoggerDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_ListLoggerDefinitionsCommand)
  .de(de_ListLoggerDefinitionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLoggerDefinitionsRequest;
      output: ListLoggerDefinitionsResponse;
    };
    sdk: {
      input: ListLoggerDefinitionsCommandInput;
      output: ListLoggerDefinitionsCommandOutput;
    };
  };
}
