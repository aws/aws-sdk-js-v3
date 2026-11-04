// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListConfiguredAudienceModelAssociationsInput,
  ListConfiguredAudienceModelAssociationsOutput,
} from "../models/models_0";
import { ListConfiguredAudienceModelAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListConfiguredAudienceModelAssociationsCommand}.
 */
export interface ListConfiguredAudienceModelAssociationsCommandInput extends ListConfiguredAudienceModelAssociationsInput {}
/**
 * @public
 *
 * The output of {@link ListConfiguredAudienceModelAssociationsCommand}.
 */
export interface ListConfiguredAudienceModelAssociationsCommandOutput extends ListConfiguredAudienceModelAssociationsOutput, __MetadataBearer {}

/**
 * Lists information about requested configured audience model associations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListConfiguredAudienceModelAssociationsCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListConfiguredAudienceModelAssociationsCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListConfiguredAudienceModelAssociationsInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListConfiguredAudienceModelAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfiguredAudienceModelAssociationsOutput
 * //   configuredAudienceModelAssociationSummaries: [ // ConfiguredAudienceModelAssociationSummaryList // required
 * //     { // ConfiguredAudienceModelAssociationSummary
 * //       membershipId: "STRING_VALUE", // required
 * //       membershipArn: "STRING_VALUE", // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       configuredAudienceModelArn: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfiguredAudienceModelAssociationsCommandInput - {@link ListConfiguredAudienceModelAssociationsCommandInput}
 * @returns {@link ListConfiguredAudienceModelAssociationsCommandOutput}
 * @see {@link ListConfiguredAudienceModelAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListConfiguredAudienceModelAssociationsCommandOutput} for command's `response` shape.
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
export class ListConfiguredAudienceModelAssociationsCommand extends command<ListConfiguredAudienceModelAssociationsCommandInput, ListConfiguredAudienceModelAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListConfiguredAudienceModelAssociations",
  ListConfiguredAudienceModelAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfiguredAudienceModelAssociationsInput;
      output: ListConfiguredAudienceModelAssociationsOutput;
    };
    sdk: {
      input: ListConfiguredAudienceModelAssociationsCommandInput;
      output: ListConfiguredAudienceModelAssociationsCommandOutput;
    };
  };
}
