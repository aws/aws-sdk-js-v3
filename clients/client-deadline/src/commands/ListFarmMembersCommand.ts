// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListFarmMembersRequest, ListFarmMembersResponse } from "../models/models_0";
import { ListFarmMembers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFarmMembersCommand}.
 */
export interface ListFarmMembersCommandInput extends ListFarmMembersRequest {}
/**
 * @public
 *
 * The output of {@link ListFarmMembersCommand}.
 */
export interface ListFarmMembersCommandOutput extends ListFarmMembersResponse, __MetadataBearer {}

/**
 * <p>Lists the members of a farm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListFarmMembersCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListFarmMembersCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListFarmMembersRequest
 *   farmId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListFarmMembersCommand(input);
 * const response = await client.send(command);
 * // { // ListFarmMembersResponse
 * //   members: [ // FarmMembers // required
 * //     { // FarmMember
 * //       farmId: "STRING_VALUE", // required
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
 * @param ListFarmMembersCommandInput - {@link ListFarmMembersCommandInput}
 * @returns {@link ListFarmMembersCommandOutput}
 * @see {@link ListFarmMembersCommandInput} for command's `input` shape.
 * @see {@link ListFarmMembersCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListFarmMembersCommand extends $Command
  .classBuilder<
    ListFarmMembersCommandInput,
    ListFarmMembersCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "ListFarmMembers", {})
  .n("DeadlineClient", "ListFarmMembersCommand")
  .sc(ListFarmMembers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFarmMembersRequest;
      output: ListFarmMembersResponse;
    };
    sdk: {
      input: ListFarmMembersCommandInput;
      output: ListFarmMembersCommandOutput;
    };
  };
}
