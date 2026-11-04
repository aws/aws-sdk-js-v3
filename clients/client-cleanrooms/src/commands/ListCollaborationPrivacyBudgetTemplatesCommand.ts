// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListCollaborationPrivacyBudgetTemplatesInput,
  ListCollaborationPrivacyBudgetTemplatesOutput,
} from "../models/models_0";
import { ListCollaborationPrivacyBudgetTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCollaborationPrivacyBudgetTemplatesCommand}.
 */
export interface ListCollaborationPrivacyBudgetTemplatesCommandInput extends ListCollaborationPrivacyBudgetTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListCollaborationPrivacyBudgetTemplatesCommand}.
 */
export interface ListCollaborationPrivacyBudgetTemplatesCommandOutput extends ListCollaborationPrivacyBudgetTemplatesOutput, __MetadataBearer {}

/**
 * Returns an array that summarizes each privacy budget template in a specified collaboration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListCollaborationPrivacyBudgetTemplatesCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListCollaborationPrivacyBudgetTemplatesCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListCollaborationPrivacyBudgetTemplatesInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCollaborationPrivacyBudgetTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListCollaborationPrivacyBudgetTemplatesOutput
 * //   nextToken: "STRING_VALUE",
 * //   collaborationPrivacyBudgetTemplateSummaries: [ // CollaborationPrivacyBudgetTemplateSummaryList // required
 * //     { // CollaborationPrivacyBudgetTemplateSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       creatorAccountId: "STRING_VALUE", // required
 * //       privacyBudgetType: "DIFFERENTIAL_PRIVACY" || "ACCESS_BUDGET", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCollaborationPrivacyBudgetTemplatesCommandInput - {@link ListCollaborationPrivacyBudgetTemplatesCommandInput}
 * @returns {@link ListCollaborationPrivacyBudgetTemplatesCommandOutput}
 * @see {@link ListCollaborationPrivacyBudgetTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListCollaborationPrivacyBudgetTemplatesCommandOutput} for command's `response` shape.
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
export class ListCollaborationPrivacyBudgetTemplatesCommand extends command<ListCollaborationPrivacyBudgetTemplatesCommandInput, ListCollaborationPrivacyBudgetTemplatesCommandOutput>(
  _ep0,
  _mw0,
  "ListCollaborationPrivacyBudgetTemplates",
  ListCollaborationPrivacyBudgetTemplates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCollaborationPrivacyBudgetTemplatesInput;
      output: ListCollaborationPrivacyBudgetTemplatesOutput;
    };
    sdk: {
      input: ListCollaborationPrivacyBudgetTemplatesCommandInput;
      output: ListCollaborationPrivacyBudgetTemplatesCommandOutput;
    };
  };
}
