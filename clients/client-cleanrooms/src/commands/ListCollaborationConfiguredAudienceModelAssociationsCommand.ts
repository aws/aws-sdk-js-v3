// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListCollaborationConfiguredAudienceModelAssociationsInput,
  ListCollaborationConfiguredAudienceModelAssociationsOutput,
} from "../models/models_0";
import { ListCollaborationConfiguredAudienceModelAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists configured audience model associations within a collaboration.
 *
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
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CleanRoomsServiceException}
 *
 * Base exception class for all service exceptions from CleanRooms service.
 *
 * @public
 */
export class ListCollaborationConfiguredAudienceModelAssociationsCommand extends command<ListCollaborationConfiguredAudienceModelAssociationsCommandInput, ListCollaborationConfiguredAudienceModelAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListCollaborationConfiguredAudienceModelAssociations",
  ListCollaborationConfiguredAudienceModelAssociations$
) {
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
