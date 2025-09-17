// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListMLInputChannelsRequest, ListMLInputChannelsResponse } from "../models/models_0";
import { de_ListMLInputChannelsCommand, se_ListMLInputChannelsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMLInputChannelsCommand}.
 */
export interface ListMLInputChannelsCommandInput extends ListMLInputChannelsRequest {}
/**
 * @public
 *
 * The output of {@link ListMLInputChannelsCommand}.
 */
export interface ListMLInputChannelsCommandOutput extends ListMLInputChannelsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of ML input channels.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, ListMLInputChannelsCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, ListMLInputChannelsCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // ListMLInputChannelsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ListMLInputChannelsCommand(input);
 * const response = await client.send(command);
 * // { // ListMLInputChannelsResponse
 * //   nextToken: "STRING_VALUE",
 * //   mlInputChannelsList: [ // MLInputChannelsList // required
 * //     { // MLInputChannelSummary
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       membershipIdentifier: "STRING_VALUE", // required
 * //       collaborationIdentifier: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       configuredModelAlgorithmAssociations: [ // ConfiguredModelAlgorithmAssociationArnList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       protectedQueryIdentifier: "STRING_VALUE",
 * //       mlInputChannelArn: "STRING_VALUE", // required
 * //       status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "INACTIVE", // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMLInputChannelsCommandInput - {@link ListMLInputChannelsCommandInput}
 * @returns {@link ListMLInputChannelsCommandOutput}
 * @see {@link ListMLInputChannelsCommandInput} for command's `input` shape.
 * @see {@link ListMLInputChannelsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
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
export class ListMLInputChannelsCommand extends $Command
  .classBuilder<
    ListMLInputChannelsCommandInput,
    ListMLInputChannelsCommandOutput,
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
  .s("AWSStarkControlService", "ListMLInputChannels", {})
  .n("CleanRoomsMLClient", "ListMLInputChannelsCommand")
  .f(void 0, void 0)
  .ser(se_ListMLInputChannelsCommand)
  .de(de_ListMLInputChannelsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMLInputChannelsRequest;
      output: ListMLInputChannelsResponse;
    };
    sdk: {
      input: ListMLInputChannelsCommandInput;
      output: ListMLInputChannelsCommandOutput;
    };
  };
}
