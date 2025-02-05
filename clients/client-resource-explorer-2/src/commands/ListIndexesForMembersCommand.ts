// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListIndexesForMembersInput, ListIndexesForMembersOutput } from "../models/models_0";
import { de_ListIndexesForMembersCommand, se_ListIndexesForMembersCommand } from "../protocols/Aws_restJson1";
import {
  ResourceExplorer2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceExplorer2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIndexesForMembersCommand}.
 */
export interface ListIndexesForMembersCommandInput extends ListIndexesForMembersInput {}
/**
 * @public
 *
 * The output of {@link ListIndexesForMembersCommand}.
 */
export interface ListIndexesForMembersCommandOutput extends ListIndexesForMembersOutput, __MetadataBearer {}

/**
 * <p>Retrieves a list of a member's indexes in all Amazon Web Services Regions that are currently
 *             collecting resource information for Amazon Web Services Resource Explorer. Only the management account or a
 *             delegated administrator with service access enabled can invoke this API call.
 *             </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, ListIndexesForMembersCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, ListIndexesForMembersCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ResourceExplorer2Client(config);
 * const input = { // ListIndexesForMembersInput
 *   AccountIdList: [ // AccountIdList // required
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListIndexesForMembersCommand(input);
 * const response = await client.send(command);
 * // { // ListIndexesForMembersOutput
 * //   Indexes: [ // MemberIndexList
 * //     { // MemberIndex
 * //       AccountId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIndexesForMembersCommandInput - {@link ListIndexesForMembersCommandInput}
 * @returns {@link ListIndexesForMembersCommandOutput}
 * @see {@link ListIndexesForMembersCommandInput} for command's `input` shape.
 * @see {@link ListIndexesForMembersCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The credentials that you used to call this operation don't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of internal service error. Try your request again
 *             later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because you exceeded a rate limit for this operation. For more
 *             information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/quotas.html">Quotas for
 *             Resource Explorer</a>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You provided an invalid value for one of the operation's parameters. Check the syntax
 *             for the operation, and try again.</p>
 *
 * @throws {@link ResourceExplorer2ServiceException}
 * <p>Base exception class for all service exceptions from ResourceExplorer2 service.</p>
 *
 * @public
 */
export class ListIndexesForMembersCommand extends $Command
  .classBuilder<
    ListIndexesForMembersCommandInput,
    ListIndexesForMembersCommandOutput,
    ResourceExplorer2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceExplorer2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ResourceExplorer", "ListIndexesForMembers", {})
  .n("ResourceExplorer2Client", "ListIndexesForMembersCommand")
  .f(void 0, void 0)
  .ser(se_ListIndexesForMembersCommand)
  .de(de_ListIndexesForMembersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIndexesForMembersInput;
      output: ListIndexesForMembersOutput;
    };
    sdk: {
      input: ListIndexesForMembersCommandInput;
      output: ListIndexesForMembersCommandOutput;
    };
  };
}
