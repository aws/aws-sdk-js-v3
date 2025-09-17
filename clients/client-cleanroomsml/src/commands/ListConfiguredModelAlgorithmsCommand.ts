// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListConfiguredModelAlgorithmsRequest, ListConfiguredModelAlgorithmsResponse } from "../models/models_0";
import {
  de_ListConfiguredModelAlgorithmsCommand,
  se_ListConfiguredModelAlgorithmsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfiguredModelAlgorithmsCommand}.
 */
export interface ListConfiguredModelAlgorithmsCommandInput extends ListConfiguredModelAlgorithmsRequest {}
/**
 * @public
 *
 * The output of {@link ListConfiguredModelAlgorithmsCommand}.
 */
export interface ListConfiguredModelAlgorithmsCommandOutput
  extends ListConfiguredModelAlgorithmsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of configured model algorithms.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, ListConfiguredModelAlgorithmsCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, ListConfiguredModelAlgorithmsCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // ListConfiguredModelAlgorithmsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListConfiguredModelAlgorithmsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfiguredModelAlgorithmsResponse
 * //   nextToken: "STRING_VALUE",
 * //   configuredModelAlgorithms: [ // ConfiguredModelAlgorithmList // required
 * //     { // ConfiguredModelAlgorithmSummary
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       configuredModelAlgorithmArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListConfiguredModelAlgorithmsCommandInput - {@link ListConfiguredModelAlgorithmsCommandInput}
 * @returns {@link ListConfiguredModelAlgorithmsCommandOutput}
 * @see {@link ListConfiguredModelAlgorithmsCommandInput} for command's `input` shape.
 * @see {@link ListConfiguredModelAlgorithmsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class ListConfiguredModelAlgorithmsCommand extends $Command
  .classBuilder<
    ListConfiguredModelAlgorithmsCommandInput,
    ListConfiguredModelAlgorithmsCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStarkControlService", "ListConfiguredModelAlgorithms", {})
  .n("CleanRoomsMLClient", "ListConfiguredModelAlgorithmsCommand")
  .f(void 0, void 0)
  .ser(se_ListConfiguredModelAlgorithmsCommand)
  .de(de_ListConfiguredModelAlgorithmsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfiguredModelAlgorithmsRequest;
      output: ListConfiguredModelAlgorithmsResponse;
    };
    sdk: {
      input: ListConfiguredModelAlgorithmsCommandInput;
      output: ListConfiguredModelAlgorithmsCommandOutput;
    };
  };
}
