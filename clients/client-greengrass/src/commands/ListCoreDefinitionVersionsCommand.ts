// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListCoreDefinitionVersionsRequest, ListCoreDefinitionVersionsResponse } from "../models/models_0";
import { de_ListCoreDefinitionVersionsCommand, se_ListCoreDefinitionVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCoreDefinitionVersionsCommand}.
 */
export interface ListCoreDefinitionVersionsCommandInput extends ListCoreDefinitionVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListCoreDefinitionVersionsCommand}.
 */
export interface ListCoreDefinitionVersionsCommandOutput extends ListCoreDefinitionVersionsResponse, __MetadataBearer {}

/**
 * Lists the versions of a core definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListCoreDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListCoreDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // ListCoreDefinitionVersionsRequest
 *   CoreDefinitionId: "STRING_VALUE", // required
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCoreDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListCoreDefinitionVersionsResponse
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
 * @param ListCoreDefinitionVersionsCommandInput - {@link ListCoreDefinitionVersionsCommandInput}
 * @returns {@link ListCoreDefinitionVersionsCommandOutput}
 * @see {@link ListCoreDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListCoreDefinitionVersionsCommandOutput} for command's `response` shape.
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
export class ListCoreDefinitionVersionsCommand extends $Command
  .classBuilder<
    ListCoreDefinitionVersionsCommandInput,
    ListCoreDefinitionVersionsCommandOutput,
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
  .s("Greengrass", "ListCoreDefinitionVersions", {})
  .n("GreengrassClient", "ListCoreDefinitionVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListCoreDefinitionVersionsCommand)
  .de(de_ListCoreDefinitionVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCoreDefinitionVersionsRequest;
      output: ListCoreDefinitionVersionsResponse;
    };
    sdk: {
      input: ListCoreDefinitionVersionsCommandInput;
      output: ListCoreDefinitionVersionsCommandOutput;
    };
  };
}
