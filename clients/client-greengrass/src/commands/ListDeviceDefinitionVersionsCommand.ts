// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListDeviceDefinitionVersionsRequest, ListDeviceDefinitionVersionsResponse } from "../models/models_0";
import {
  de_ListDeviceDefinitionVersionsCommand,
  se_ListDeviceDefinitionVersionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeviceDefinitionVersionsCommand}.
 */
export interface ListDeviceDefinitionVersionsCommandInput extends ListDeviceDefinitionVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDeviceDefinitionVersionsCommand}.
 */
export interface ListDeviceDefinitionVersionsCommandOutput
  extends ListDeviceDefinitionVersionsResponse,
    __MetadataBearer {}

/**
 * Lists the versions of a device definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListDeviceDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListDeviceDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // ListDeviceDefinitionVersionsRequest
 *   DeviceDefinitionId: "STRING_VALUE", // required
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDeviceDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeviceDefinitionVersionsResponse
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
 * @param ListDeviceDefinitionVersionsCommandInput - {@link ListDeviceDefinitionVersionsCommandInput}
 * @returns {@link ListDeviceDefinitionVersionsCommandOutput}
 * @see {@link ListDeviceDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDeviceDefinitionVersionsCommandOutput} for command's `response` shape.
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
export class ListDeviceDefinitionVersionsCommand extends $Command
  .classBuilder<
    ListDeviceDefinitionVersionsCommandInput,
    ListDeviceDefinitionVersionsCommandOutput,
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
  .s("Greengrass", "ListDeviceDefinitionVersions", {})
  .n("GreengrassClient", "ListDeviceDefinitionVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListDeviceDefinitionVersionsCommand)
  .de(de_ListDeviceDefinitionVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeviceDefinitionVersionsRequest;
      output: ListDeviceDefinitionVersionsResponse;
    };
    sdk: {
      input: ListDeviceDefinitionVersionsCommandInput;
      output: ListDeviceDefinitionVersionsCommandOutput;
    };
  };
}
