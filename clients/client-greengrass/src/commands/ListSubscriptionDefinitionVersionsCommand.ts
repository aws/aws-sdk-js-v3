// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type {
  ListSubscriptionDefinitionVersionsRequest,
  ListSubscriptionDefinitionVersionsResponse,
} from "../models/models_0";
import { ListSubscriptionDefinitionVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSubscriptionDefinitionVersionsCommand}.
 */
export interface ListSubscriptionDefinitionVersionsCommandInput extends ListSubscriptionDefinitionVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSubscriptionDefinitionVersionsCommand}.
 */
export interface ListSubscriptionDefinitionVersionsCommandOutput extends ListSubscriptionDefinitionVersionsResponse, __MetadataBearer {}

/**
 * Lists the versions of a subscription definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListSubscriptionDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListSubscriptionDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // ListSubscriptionDefinitionVersionsRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   SubscriptionDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new ListSubscriptionDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscriptionDefinitionVersionsResponse
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
 * @param ListSubscriptionDefinitionVersionsCommandInput - {@link ListSubscriptionDefinitionVersionsCommandInput}
 * @returns {@link ListSubscriptionDefinitionVersionsCommandOutput}
 * @see {@link ListSubscriptionDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionDefinitionVersionsCommandOutput} for command's `response` shape.
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
export class ListSubscriptionDefinitionVersionsCommand extends $Command
  .classBuilder<
    ListSubscriptionDefinitionVersionsCommandInput,
    ListSubscriptionDefinitionVersionsCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "ListSubscriptionDefinitionVersions", {})
  .n("GreengrassClient", "ListSubscriptionDefinitionVersionsCommand")
  .sc(ListSubscriptionDefinitionVersions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSubscriptionDefinitionVersionsRequest;
      output: ListSubscriptionDefinitionVersionsResponse;
    };
    sdk: {
      input: ListSubscriptionDefinitionVersionsCommandInput;
      output: ListSubscriptionDefinitionVersionsCommandOutput;
    };
  };
}
