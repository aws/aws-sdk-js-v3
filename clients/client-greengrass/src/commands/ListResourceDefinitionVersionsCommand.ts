// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type { ListResourceDefinitionVersionsRequest, ListResourceDefinitionVersionsResponse } from "../models/models_0";
import { ListResourceDefinitionVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceDefinitionVersionsCommand}.
 */
export interface ListResourceDefinitionVersionsCommandInput extends ListResourceDefinitionVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceDefinitionVersionsCommand}.
 */
export interface ListResourceDefinitionVersionsCommandOutput
  extends ListResourceDefinitionVersionsResponse,
    __MetadataBearer {}

/**
 * Lists the versions of a resource definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListResourceDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListResourceDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // ListResourceDefinitionVersionsRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   ResourceDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new ListResourceDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceDefinitionVersionsResponse
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
 * @param ListResourceDefinitionVersionsCommandInput - {@link ListResourceDefinitionVersionsCommandInput}
 * @returns {@link ListResourceDefinitionVersionsCommandOutput}
 * @see {@link ListResourceDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListResourceDefinitionVersionsCommandOutput} for command's `response` shape.
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
export class ListResourceDefinitionVersionsCommand extends $Command
  .classBuilder<
    ListResourceDefinitionVersionsCommandInput,
    ListResourceDefinitionVersionsCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "ListResourceDefinitionVersions", {})
  .n("GreengrassClient", "ListResourceDefinitionVersionsCommand")
  .sc(ListResourceDefinitionVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceDefinitionVersionsRequest;
      output: ListResourceDefinitionVersionsResponse;
    };
    sdk: {
      input: ListResourceDefinitionVersionsCommandInput;
      output: ListResourceDefinitionVersionsCommandOutput;
    };
  };
}
