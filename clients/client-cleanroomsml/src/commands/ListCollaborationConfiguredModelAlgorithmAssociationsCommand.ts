// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListCollaborationConfiguredModelAlgorithmAssociationsRequest,
  ListCollaborationConfiguredModelAlgorithmAssociationsResponse,
} from "../models/models_0";
import {
  de_ListCollaborationConfiguredModelAlgorithmAssociationsCommand,
  se_ListCollaborationConfiguredModelAlgorithmAssociationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCollaborationConfiguredModelAlgorithmAssociationsCommand}.
 */
export interface ListCollaborationConfiguredModelAlgorithmAssociationsCommandInput
  extends ListCollaborationConfiguredModelAlgorithmAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListCollaborationConfiguredModelAlgorithmAssociationsCommand}.
 */
export interface ListCollaborationConfiguredModelAlgorithmAssociationsCommandOutput
  extends ListCollaborationConfiguredModelAlgorithmAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of the configured model algorithm associations in a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, ListCollaborationConfiguredModelAlgorithmAssociationsCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, ListCollaborationConfiguredModelAlgorithmAssociationsCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // ListCollaborationConfiguredModelAlgorithmAssociationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   collaborationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ListCollaborationConfiguredModelAlgorithmAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCollaborationConfiguredModelAlgorithmAssociationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   collaborationConfiguredModelAlgorithmAssociations: [ // CollaborationConfiguredModelAlgorithmAssociationList // required
 * //     { // CollaborationConfiguredModelAlgorithmAssociationSummary
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       configuredModelAlgorithmAssociationArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       membershipIdentifier: "STRING_VALUE", // required
 * //       collaborationIdentifier: "STRING_VALUE", // required
 * //       configuredModelAlgorithmArn: "STRING_VALUE", // required
 * //       creatorAccountId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCollaborationConfiguredModelAlgorithmAssociationsCommandInput - {@link ListCollaborationConfiguredModelAlgorithmAssociationsCommandInput}
 * @returns {@link ListCollaborationConfiguredModelAlgorithmAssociationsCommandOutput}
 * @see {@link ListCollaborationConfiguredModelAlgorithmAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListCollaborationConfiguredModelAlgorithmAssociationsCommandOutput} for command's `response` shape.
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
export class ListCollaborationConfiguredModelAlgorithmAssociationsCommand extends $Command
  .classBuilder<
    ListCollaborationConfiguredModelAlgorithmAssociationsCommandInput,
    ListCollaborationConfiguredModelAlgorithmAssociationsCommandOutput,
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
  .s("AWSStarkControlService", "ListCollaborationConfiguredModelAlgorithmAssociations", {})
  .n("CleanRoomsMLClient", "ListCollaborationConfiguredModelAlgorithmAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_ListCollaborationConfiguredModelAlgorithmAssociationsCommand)
  .de(de_ListCollaborationConfiguredModelAlgorithmAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCollaborationConfiguredModelAlgorithmAssociationsRequest;
      output: ListCollaborationConfiguredModelAlgorithmAssociationsResponse;
    };
    sdk: {
      input: ListCollaborationConfiguredModelAlgorithmAssociationsCommandInput;
      output: ListCollaborationConfiguredModelAlgorithmAssociationsCommandOutput;
    };
  };
}
