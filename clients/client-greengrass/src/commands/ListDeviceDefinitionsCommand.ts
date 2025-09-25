// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListDeviceDefinitionsRequest, ListDeviceDefinitionsResponse } from "../models/models_0";
import { ListDeviceDefinitions } from "../schemas/schemas_5_Definitions";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeviceDefinitionsCommand}.
 */
export interface ListDeviceDefinitionsCommandInput extends ListDeviceDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDeviceDefinitionsCommand}.
 */
export interface ListDeviceDefinitionsCommandOutput extends ListDeviceDefinitionsResponse, __MetadataBearer {}

/**
 * Retrieves a list of device definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListDeviceDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListDeviceDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // ListDeviceDefinitionsRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDeviceDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeviceDefinitionsResponse
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
 * @param ListDeviceDefinitionsCommandInput - {@link ListDeviceDefinitionsCommandInput}
 * @returns {@link ListDeviceDefinitionsCommandOutput}
 * @see {@link ListDeviceDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListDeviceDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class ListDeviceDefinitionsCommand extends $Command
  .classBuilder<
    ListDeviceDefinitionsCommandInput,
    ListDeviceDefinitionsCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "ListDeviceDefinitions", {})
  .n("GreengrassClient", "ListDeviceDefinitionsCommand")
  .sc(ListDeviceDefinitions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeviceDefinitionsRequest;
      output: ListDeviceDefinitionsResponse;
    };
    sdk: {
      input: ListDeviceDefinitionsCommandInput;
      output: ListDeviceDefinitionsCommandOutput;
    };
  };
}
