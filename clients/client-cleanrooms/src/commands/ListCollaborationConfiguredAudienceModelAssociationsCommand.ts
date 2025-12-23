// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListCollaborationConfiguredAudienceModelAssociationsInput,
  ListCollaborationConfiguredAudienceModelAssociationsOutput,
} from "../models/models_0";
import { ListCollaborationConfiguredAudienceModelAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCollaborationConfiguredAudienceModelAssociationsCommand}.
 */
export interface ListCollaborationConfiguredAudienceModelAssociationsCommandInput extends ListCollaborationConfiguredAudienceModelAssociationsInput {}
/**
 * @public
 *
 * The output of {@link ListCollaborationConfiguredAudienceModelAssociationsCommand}.
 */
export interface ListCollaborationConfiguredAudienceModelAssociationsCommandOutput extends ListCollaborationConfiguredAudienceModelAssociationsOutput, __MetadataBearer {}

/**
 * <p>Lists configured audience model associations within a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListCollaborationConfiguredAudienceModelAssociationsCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListCollaborationConfiguredAudienceModelAssociationsCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListCollaborationConfiguredAudienceModelAssociationsInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCollaborationConfiguredAudienceModelAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCollaborationConfiguredAudienceModelAssociationsOutput
 * //   collaborationConfiguredAudienceModelAssociationSummaries: [ // CollaborationConfiguredAudienceModelAssociationSummaryList // required
 * //     { // CollaborationConfiguredAudienceModelAssociationSummary
 * //       arn: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       creatorAccountId: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCollaborationConfiguredAudienceModelAssociationsCommandInput - {@link ListCollaborationConfiguredAudienceModelAssociationsCommandInput}
 * @returns {@link ListCollaborationConfiguredAudienceModelAssociationsCommandOutput}
 * @see {@link ListCollaborationConfiguredAudienceModelAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListCollaborationConfiguredAudienceModelAssociationsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class ListCollaborationConfiguredAudienceModelAssociationsCommand extends $Command
  .classBuilder<
    ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
    ListCollaborationConfiguredAudienceModelAssociationsCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "ListCollaborationConfiguredAudienceModelAssociations", {})
  .n("CleanRoomsClient", "ListCollaborationConfiguredAudienceModelAssociationsCommand")
  .sc(ListCollaborationConfiguredAudienceModelAssociations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCollaborationConfiguredAudienceModelAssociationsInput;
      output: ListCollaborationConfiguredAudienceModelAssociationsOutput;
    };
    sdk: {
      input: ListCollaborationConfiguredAudienceModelAssociationsCommandInput;
      output: ListCollaborationConfiguredAudienceModelAssociationsCommandOutput;
    };
  };
}
