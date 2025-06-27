// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCollaborationMLInputChannelsRequest, ListCollaborationMLInputChannelsResponse } from "../models/models_0";
import {
  de_ListCollaborationMLInputChannelsCommand,
  se_ListCollaborationMLInputChannelsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCollaborationMLInputChannelsCommand}.
 */
export interface ListCollaborationMLInputChannelsCommandInput extends ListCollaborationMLInputChannelsRequest {}
/**
 * @public
 *
 * The output of {@link ListCollaborationMLInputChannelsCommand}.
 */
export interface ListCollaborationMLInputChannelsCommandOutput
  extends ListCollaborationMLInputChannelsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of the ML input channels in a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, ListCollaborationMLInputChannelsCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, ListCollaborationMLInputChannelsCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // ListCollaborationMLInputChannelsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   collaborationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ListCollaborationMLInputChannelsCommand(input);
 * const response = await client.send(command);
 * // { // ListCollaborationMLInputChannelsResponse
 * //   nextToken: "STRING_VALUE",
 * //   collaborationMLInputChannelsList: [ // CollaborationMLInputChannelsList // required
 * //     { // CollaborationMLInputChannelSummary
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       membershipIdentifier: "STRING_VALUE", // required
 * //       collaborationIdentifier: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       configuredModelAlgorithmAssociations: [ // ConfiguredModelAlgorithmAssociationArnList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       mlInputChannelArn: "STRING_VALUE", // required
 * //       status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "INACTIVE", // required
 * //       creatorAccountId: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCollaborationMLInputChannelsCommandInput - {@link ListCollaborationMLInputChannelsCommandInput}
 * @returns {@link ListCollaborationMLInputChannelsCommandOutput}
 * @see {@link ListCollaborationMLInputChannelsCommandInput} for command's `input` shape.
 * @see {@link ListCollaborationMLInputChannelsCommandOutput} for command's `response` shape.
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
export class ListCollaborationMLInputChannelsCommand extends $Command
  .classBuilder<
    ListCollaborationMLInputChannelsCommandInput,
    ListCollaborationMLInputChannelsCommandOutput,
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
  .s("AWSStarkControlService", "ListCollaborationMLInputChannels", {})
  .n("CleanRoomsMLClient", "ListCollaborationMLInputChannelsCommand")
  .f(void 0, void 0)
  .ser(se_ListCollaborationMLInputChannelsCommand)
  .de(de_ListCollaborationMLInputChannelsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCollaborationMLInputChannelsRequest;
      output: ListCollaborationMLInputChannelsResponse;
    };
    sdk: {
      input: ListCollaborationMLInputChannelsCommandInput;
      output: ListCollaborationMLInputChannelsCommandOutput;
    };
  };
}
