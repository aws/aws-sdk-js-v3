// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListResourceDefinitionsRequest, ListResourceDefinitionsResponse } from "../models/models_0";
import { de_ListResourceDefinitionsCommand, se_ListResourceDefinitionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourceDefinitionsCommand}.
 */
export interface ListResourceDefinitionsCommandInput extends ListResourceDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceDefinitionsCommand}.
 */
export interface ListResourceDefinitionsCommandOutput extends ListResourceDefinitionsResponse, __MetadataBearer {}

/**
 * Retrieves a list of resource definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListResourceDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListResourceDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // ListResourceDefinitionsRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceDefinitionsResponse
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
 * @param ListResourceDefinitionsCommandInput - {@link ListResourceDefinitionsCommandInput}
 * @returns {@link ListResourceDefinitionsCommandOutput}
 * @see {@link ListResourceDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListResourceDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 * @public
 */
export class ListResourceDefinitionsCommand extends $Command
  .classBuilder<
    ListResourceDefinitionsCommandInput,
    ListResourceDefinitionsCommandOutput,
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
  .s("Greengrass", "ListResourceDefinitions", {})
  .n("GreengrassClient", "ListResourceDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_ListResourceDefinitionsCommand)
  .de(de_ListResourceDefinitionsCommand)
  .build() {}
