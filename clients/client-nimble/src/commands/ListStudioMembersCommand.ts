// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListStudioMembersRequest, ListStudioMembersResponse } from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_ListStudioMembersCommand, se_ListStudioMembersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStudioMembersCommand}.
 */
export interface ListStudioMembersCommandInput extends ListStudioMembersRequest {}
/**
 * @public
 *
 * The output of {@link ListStudioMembersCommand}.
 */
export interface ListStudioMembersCommandOutput extends ListStudioMembersResponse, __MetadataBearer {}

/**
 * <p>Get all users in a given studio membership.</p>
 *         <note>
 *             <p>
 *                <code>ListStudioMembers</code> only returns admin members.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListStudioMembersCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListStudioMembersCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // ListStudioMembersRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   studioId: "STRING_VALUE", // required
 * };
 * const command = new ListStudioMembersCommand(input);
 * const response = await client.send(command);
 * // { // ListStudioMembersResponse
 * //   members: [ // StudioMembershipList
 * //     { // StudioMembership
 * //       identityStoreId: "STRING_VALUE",
 * //       persona: "ADMINISTRATOR",
 * //       principalId: "STRING_VALUE",
 * //       sid: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStudioMembersCommandInput - {@link ListStudioMembersCommandInput}
 * @returns {@link ListStudioMembersCommandOutput}
 * @see {@link ListStudioMembersCommandInput} for command's `input` shape.
 * @see {@link ListStudioMembersCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another operation is in progress. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current quota does not allow you to perform the request action. You can request
 *             increases for some quotas, and other quotas cannot be increased.</p>
 *         <p>Please use Amazon Web Services Service Quotas to request an increase. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link NimbleServiceException}
 * <p>Base exception class for all service exceptions from Nimble service.</p>
 *
 * @public
 */
export class ListStudioMembersCommand extends $Command
  .classBuilder<
    ListStudioMembersCommandInput,
    ListStudioMembersCommandOutput,
    NimbleClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NimbleClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("nimble", "ListStudioMembers", {})
  .n("NimbleClient", "ListStudioMembersCommand")
  .f(void 0, void 0)
  .ser(se_ListStudioMembersCommand)
  .de(de_ListStudioMembersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStudioMembersRequest;
      output: ListStudioMembersResponse;
    };
    sdk: {
      input: ListStudioMembersCommandInput;
      output: ListStudioMembersCommandOutput;
    };
  };
}
