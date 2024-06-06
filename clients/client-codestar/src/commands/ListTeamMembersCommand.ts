// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTeamMembersRequest, ListTeamMembersResult } from "../models/models_0";
import { de_ListTeamMembersCommand, se_ListTeamMembersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTeamMembersCommand}.
 */
export interface ListTeamMembersCommandInput extends ListTeamMembersRequest {}
/**
 * @public
 *
 * The output of {@link ListTeamMembersCommand}.
 */
export interface ListTeamMembersCommandOutput extends ListTeamMembersResult, __MetadataBearer {}

/**
 * <p>Lists all team members associated with a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, ListTeamMembersCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, ListTeamMembersCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = { // ListTeamMembersRequest
 *   projectId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTeamMembersCommand(input);
 * const response = await client.send(command);
 * // { // ListTeamMembersResult
 * //   teamMembers: [ // TeamMemberResult // required
 * //     { // TeamMember
 * //       userArn: "STRING_VALUE", // required
 * //       projectRole: "STRING_VALUE", // required
 * //       remoteAccessAllowed: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTeamMembersCommandInput - {@link ListTeamMembersCommandInput}
 * @returns {@link ListTeamMembersCommandOutput}
 * @see {@link ListTeamMembersCommandInput} for command's `input` shape.
 * @see {@link ListTeamMembersCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token is not valid.</p>
 *
 * @throws {@link ProjectNotFoundException} (client fault)
 *  <p>The specified AWS CodeStar project was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is either not valid, or it could not be validated.</p>
 *
 * @throws {@link CodeStarServiceException}
 * <p>Base exception class for all service exceptions from CodeStar service.</p>
 *
 * @public
 */
export class ListTeamMembersCommand extends $Command
  .classBuilder<
    ListTeamMembersCommandInput,
    ListTeamMembersCommandOutput,
    CodeStarClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeStarClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeStar_20170419", "ListTeamMembers", {})
  .n("CodeStarClient", "ListTeamMembersCommand")
  .f(void 0, void 0)
  .ser(se_ListTeamMembersCommand)
  .de(de_ListTeamMembersCommand)
  .build() {}
