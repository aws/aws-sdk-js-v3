// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListConfigsRequest, ListConfigsResponse } from "../models/models_0";
import { de_ListConfigsCommand, se_ListConfigsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfigsCommand}.
 */
export interface ListConfigsCommandInput extends ListConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigsCommand}.
 */
export interface ListConfigsCommandOutput extends ListConfigsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of <code>Config</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListConfigsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListConfigsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GroundStationClient(config);
 * const input = { // ListConfigsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigsResponse
 * //   nextToken: "STRING_VALUE",
 * //   configList: [ // ConfigList
 * //     { // ConfigListItem
 * //       configId: "STRING_VALUE",
 * //       configType: "STRING_VALUE",
 * //       configArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListConfigsCommandInput - {@link ListConfigsCommandInput}
 * @returns {@link ListConfigsCommandOutput}
 * @see {@link ListConfigsCommandInput} for command's `input` shape.
 * @see {@link ListConfigsCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 * @public
 */
export class ListConfigsCommand extends $Command
  .classBuilder<
    ListConfigsCommandInput,
    ListConfigsCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GroundStation", "ListConfigs", {})
  .n("GroundStationClient", "ListConfigsCommand")
  .f(void 0, void 0)
  .ser(se_ListConfigsCommand)
  .de(de_ListConfigsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfigsRequest;
      output: ListConfigsResponse;
    };
    sdk: {
      input: ListConfigsCommandInput;
      output: ListConfigsCommandOutput;
    };
  };
}
