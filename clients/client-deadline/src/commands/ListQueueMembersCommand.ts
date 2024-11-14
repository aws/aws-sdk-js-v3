// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListQueueMembersRequest } from "../models/models_0";
import { ListQueueMembersResponse } from "../models/models_1";
import { de_ListQueueMembersCommand, se_ListQueueMembersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQueueMembersCommand}.
 */
export interface ListQueueMembersCommandInput extends ListQueueMembersRequest {}
/**
 * @public
 *
 * The output of {@link ListQueueMembersCommand}.
 */
export interface ListQueueMembersCommandOutput extends ListQueueMembersResponse, __MetadataBearer {}

/**
 * <p>Lists the members in a queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListQueueMembersCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListQueueMembersCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // ListQueueMembersRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListQueueMembersCommand(input);
 * const response = await client.send(command);
 * // { // ListQueueMembersResponse
 * //   members: [ // QueueMemberList // required
 * //     { // QueueMember
 * //       farmId: "STRING_VALUE", // required
 * //       queueId: "STRING_VALUE", // required
 * //       principalId: "STRING_VALUE", // required
 * //       principalType: "USER" || "GROUP", // required
 * //       identityStoreId: "STRING_VALUE", // required
 * //       membershipLevel: "VIEWER" || "CONTRIBUTOR" || "OWNER" || "MANAGER", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQueueMembersCommandInput - {@link ListQueueMembersCommandInput}
 * @returns {@link ListQueueMembersCommandOutput}
 * @see {@link ListQueueMembersCommandInput} for command's `input` shape.
 * @see {@link ListQueueMembersCommandOutput} for command's `response` shape.
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
export class ListQueueMembersCommand extends $Command
  .classBuilder<
    ListQueueMembersCommandInput,
    ListQueueMembersCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "ListQueueMembers", {})
  .n("DeadlineClient", "ListQueueMembersCommand")
  .f(void 0, void 0)
  .ser(se_ListQueueMembersCommand)
  .de(de_ListQueueMembersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQueueMembersRequest;
      output: ListQueueMembersResponse;
    };
    sdk: {
      input: ListQueueMembersCommandInput;
      output: ListQueueMembersCommandOutput;
    };
  };
}
