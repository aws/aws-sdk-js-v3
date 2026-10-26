// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListStorageProfilesForQueueRequest, ListStorageProfilesForQueueResponse } from "../models/models_1";
import { ListStorageProfilesForQueue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListStorageProfilesForQueueCommand}.
 */
export interface ListStorageProfilesForQueueCommandInput extends ListStorageProfilesForQueueRequest {}
/**
 * @public
 *
 * The output of {@link ListStorageProfilesForQueueCommand}.
 */
export interface ListStorageProfilesForQueueCommandOutput extends ListStorageProfilesForQueueResponse, __MetadataBearer {}

/**
 * Lists storage profiles for a queue.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListStorageProfilesForQueueCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListStorageProfilesForQueueCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListStorageProfilesForQueueRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListStorageProfilesForQueueCommand(input);
 * const response = await client.send(command);
 * // { // ListStorageProfilesForQueueResponse
 * //   storageProfiles: [ // StorageProfileSummaries // required
 * //     { // StorageProfileSummary
 * //       storageProfileId: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE", // required
 * //       osFamily: "WINDOWS" || "LINUX" || "MACOS", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStorageProfilesForQueueCommandInput - {@link ListStorageProfilesForQueueCommandInput}
 * @returns {@link ListStorageProfilesForQueueCommandOutput}
 * @see {@link ListStorageProfilesForQueueCommandInput} for command's `input` shape.
 * @see {@link ListStorageProfilesForQueueCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You don't have permission to perform the action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Deadline Cloud can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Your request exceeded a request rate quota.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class ListStorageProfilesForQueueCommand extends command<ListStorageProfilesForQueueCommandInput, ListStorageProfilesForQueueCommandOutput>(
  _ep0,
  _mw0,
  "ListStorageProfilesForQueue",
  ListStorageProfilesForQueue$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStorageProfilesForQueueRequest;
      output: ListStorageProfilesForQueueResponse;
    };
    sdk: {
      input: ListStorageProfilesForQueueCommandInput;
      output: ListStorageProfilesForQueueCommandOutput;
    };
  };
}
