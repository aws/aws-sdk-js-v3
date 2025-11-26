// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type { ListGroupVersionsRequest, ListGroupVersionsResponse } from "../models/models_0";
import { ListGroupVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGroupVersionsCommand}.
 */
export interface ListGroupVersionsCommandInput extends ListGroupVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListGroupVersionsCommand}.
 */
export interface ListGroupVersionsCommandOutput extends ListGroupVersionsResponse, __MetadataBearer {}

/**
 * Lists the versions of a group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListGroupVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListGroupVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // ListGroupVersionsRequest
 *   GroupId: "STRING_VALUE", // required
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListGroupVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListGroupVersionsResponse
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
 * @param ListGroupVersionsCommandInput - {@link ListGroupVersionsCommandInput}
 * @returns {@link ListGroupVersionsCommandOutput}
 * @see {@link ListGroupVersionsCommandInput} for command's `input` shape.
 * @see {@link ListGroupVersionsCommandOutput} for command's `response` shape.
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
export class ListGroupVersionsCommand extends $Command
  .classBuilder<
    ListGroupVersionsCommandInput,
    ListGroupVersionsCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "ListGroupVersions", {})
  .n("GreengrassClient", "ListGroupVersionsCommand")
  .sc(ListGroupVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGroupVersionsRequest;
      output: ListGroupVersionsResponse;
    };
    sdk: {
      input: ListGroupVersionsCommandInput;
      output: ListGroupVersionsCommandOutput;
    };
  };
}
