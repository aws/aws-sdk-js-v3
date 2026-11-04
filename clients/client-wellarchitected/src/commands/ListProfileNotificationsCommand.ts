// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProfileNotificationsInput, ListProfileNotificationsOutput } from "../models/models_0";
import { ListProfileNotifications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProfileNotificationsCommand}.
 */
export interface ListProfileNotificationsCommandInput extends ListProfileNotificationsInput {}
/**
 * @public
 *
 * The output of {@link ListProfileNotificationsCommand}.
 */
export interface ListProfileNotificationsCommandOutput extends ListProfileNotificationsOutput, __MetadataBearer {}

/**
 * List profile notifications.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListProfileNotificationsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListProfileNotificationsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListProfileNotificationsInput
 *   WorkloadId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProfileNotificationsCommand(input);
 * const response = await client.send(command);
 * // { // ListProfileNotificationsOutput
 * //   NotificationSummaries: [ // ProfileNotificationSummaries
 * //     { // ProfileNotificationSummary
 * //       CurrentProfileVersion: "STRING_VALUE",
 * //       LatestProfileVersion: "STRING_VALUE",
 * //       Type: "PROFILE_ANSWERS_UPDATED" || "PROFILE_DELETED",
 * //       ProfileArn: "STRING_VALUE",
 * //       ProfileName: "STRING_VALUE",
 * //       WorkloadId: "STRING_VALUE",
 * //       WorkloadName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProfileNotificationsCommandInput - {@link ListProfileNotificationsCommandInput}
 * @returns {@link ListProfileNotificationsCommandOutput}
 * @see {@link ListProfileNotificationsCommandInput} for command's `input` shape.
 * @see {@link ListProfileNotificationsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class ListProfileNotificationsCommand extends command<ListProfileNotificationsCommandInput, ListProfileNotificationsCommandOutput>(
  _ep0,
  _mw0,
  "ListProfileNotifications",
  ListProfileNotifications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProfileNotificationsInput;
      output: ListProfileNotificationsOutput;
    };
    sdk: {
      input: ListProfileNotificationsCommandInput;
      output: ListProfileNotificationsCommandOutput;
    };
  };
}
