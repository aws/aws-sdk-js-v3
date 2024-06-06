// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStorageProfilesForQueueRequest } from "../models/models_0";
import { ListStorageProfilesForQueueResponse } from "../models/models_1";
import {
  de_ListStorageProfilesForQueueCommand,
  se_ListStorageProfilesForQueueCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListStorageProfilesForQueueCommandOutput
  extends ListStorageProfilesForQueueResponse,
    __MetadataBearer {}

/**
 * <p>Lists storage profiles for a queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListStorageProfilesForQueueCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListStorageProfilesForQueueCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
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
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 * @public
 */
export class ListStorageProfilesForQueueCommand extends $Command
  .classBuilder<
    ListStorageProfilesForQueueCommandInput,
    ListStorageProfilesForQueueCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "ListStorageProfilesForQueue", {})
  .n("DeadlineClient", "ListStorageProfilesForQueueCommand")
  .f(void 0, void 0)
  .ser(se_ListStorageProfilesForQueueCommand)
  .de(de_ListStorageProfilesForQueueCommand)
  .build() {}
