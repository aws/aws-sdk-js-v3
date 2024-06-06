// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListResourceDefinitionVersionsRequest, ListResourceDefinitionVersionsResponse } from "../models/models_0";
import {
  de_ListResourceDefinitionVersionsCommand,
  se_ListResourceDefinitionVersionsCommand,
} from "../protocols/Aws_restJson1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "ListResourceDefinitionVersions", {})
  .n("GreengrassClient", "ListResourceDefinitionVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListResourceDefinitionVersionsCommand)
  .de(de_ListResourceDefinitionVersionsCommand)
  .build() {}
