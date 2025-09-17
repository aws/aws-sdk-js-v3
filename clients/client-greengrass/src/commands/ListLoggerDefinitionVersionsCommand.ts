// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListLoggerDefinitionVersionsRequest, ListLoggerDefinitionVersionsResponse } from "../models/models_0";
import {
  de_ListLoggerDefinitionVersionsCommand,
  se_ListLoggerDefinitionVersionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLoggerDefinitionVersionsCommand}.
 */
export interface ListLoggerDefinitionVersionsCommandInput extends ListLoggerDefinitionVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListLoggerDefinitionVersionsCommand}.
 */
export interface ListLoggerDefinitionVersionsCommandOutput
  extends ListLoggerDefinitionVersionsResponse,
    __MetadataBearer {}

/**
 * Lists the versions of a logger definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListLoggerDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListLoggerDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // ListLoggerDefinitionVersionsRequest
 *   LoggerDefinitionId: "STRING_VALUE", // required
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLoggerDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListLoggerDefinitionVersionsResponse
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
 * @param ListLoggerDefinitionVersionsCommandInput - {@link ListLoggerDefinitionVersionsCommandInput}
 * @returns {@link ListLoggerDefinitionVersionsCommandOutput}
 * @see {@link ListLoggerDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListLoggerDefinitionVersionsCommandOutput} for command's `response` shape.
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
export class ListLoggerDefinitionVersionsCommand extends $Command
  .classBuilder<
    ListLoggerDefinitionVersionsCommandInput,
    ListLoggerDefinitionVersionsCommandOutput,
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
  .s("Greengrass", "ListLoggerDefinitionVersions", {})
  .n("GreengrassClient", "ListLoggerDefinitionVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListLoggerDefinitionVersionsCommand)
  .de(de_ListLoggerDefinitionVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLoggerDefinitionVersionsRequest;
      output: ListLoggerDefinitionVersionsResponse;
    };
    sdk: {
      input: ListLoggerDefinitionVersionsCommandInput;
      output: ListLoggerDefinitionVersionsCommandOutput;
    };
  };
}
