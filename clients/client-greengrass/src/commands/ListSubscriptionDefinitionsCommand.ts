// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListSubscriptionDefinitionsRequest, ListSubscriptionDefinitionsResponse } from "../models/models_0";
import {
  de_ListSubscriptionDefinitionsCommand,
  se_ListSubscriptionDefinitionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSubscriptionDefinitionsCommand}.
 */
export interface ListSubscriptionDefinitionsCommandInput extends ListSubscriptionDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSubscriptionDefinitionsCommand}.
 */
export interface ListSubscriptionDefinitionsCommandOutput
  extends ListSubscriptionDefinitionsResponse,
    __MetadataBearer {}

/**
 * Retrieves a list of subscription definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListSubscriptionDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListSubscriptionDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // ListSubscriptionDefinitionsRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSubscriptionDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscriptionDefinitionsResponse
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
 * @param ListSubscriptionDefinitionsCommandInput - {@link ListSubscriptionDefinitionsCommandInput}
 * @returns {@link ListSubscriptionDefinitionsCommandOutput}
 * @see {@link ListSubscriptionDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class ListSubscriptionDefinitionsCommand extends $Command
  .classBuilder<
    ListSubscriptionDefinitionsCommandInput,
    ListSubscriptionDefinitionsCommandOutput,
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
  .s("Greengrass", "ListSubscriptionDefinitions", {})
  .n("GreengrassClient", "ListSubscriptionDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_ListSubscriptionDefinitionsCommand)
  .de(de_ListSubscriptionDefinitionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSubscriptionDefinitionsRequest;
      output: ListSubscriptionDefinitionsResponse;
    };
    sdk: {
      input: ListSubscriptionDefinitionsCommandInput;
      output: ListSubscriptionDefinitionsCommandOutput;
    };
  };
}
