// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAssociatedGroupsRequest, ListAssociatedGroupsResponse } from "../models/models_0";
import { de_ListAssociatedGroupsCommand, se_ListAssociatedGroupsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssociatedGroupsCommand}.
 */
export interface ListAssociatedGroupsCommandInput extends ListAssociatedGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociatedGroupsCommand}.
 */
export interface ListAssociatedGroupsCommandOutput extends ListAssociatedGroupsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the groups that the specified canary is associated with. The canary
 *       that you specify must be in the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, ListAssociatedGroupsCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, ListAssociatedGroupsCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SyntheticsClient(config);
 * const input = { // ListAssociatedGroupsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new ListAssociatedGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedGroupsResponse
 * //   Groups: [ // GroupSummaryList
 * //     { // GroupSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociatedGroupsCommandInput - {@link ListAssociatedGroupsCommandInput}
 * @returns {@link ListAssociatedGroupsCommandOutput}
 * @see {@link ListAssociatedGroupsCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedGroupsCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One of the specified resources was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 * @public
 */
export class ListAssociatedGroupsCommand extends $Command
  .classBuilder<
    ListAssociatedGroupsCommandInput,
    ListAssociatedGroupsCommandOutput,
    SyntheticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SyntheticsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Synthetics", "ListAssociatedGroups", {})
  .n("SyntheticsClient", "ListAssociatedGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListAssociatedGroupsCommand)
  .de(de_ListAssociatedGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociatedGroupsRequest;
      output: ListAssociatedGroupsResponse;
    };
    sdk: {
      input: ListAssociatedGroupsCommandInput;
      output: ListAssociatedGroupsCommandOutput;
    };
  };
}
