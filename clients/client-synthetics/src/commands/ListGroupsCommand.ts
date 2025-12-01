// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListGroupsRequest, ListGroupsResponse } from "../models/models_0";
import { ListGroups } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGroupsCommand}.
 */
export interface ListGroupsCommandInput extends ListGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListGroupsCommand}.
 */
export interface ListGroupsCommandOutput extends ListGroupsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all groups in the account, displaying their names, unique IDs, and ARNs. The groups
 *       from all Regions are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, ListGroupsCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, ListGroupsCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * // import type { SyntheticsClientConfig } from "@aws-sdk/client-synthetics";
 * const config = {}; // type is SyntheticsClientConfig
 * const client = new SyntheticsClient(config);
 * const input = { // ListGroupsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListGroupsResponse
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
 * @param ListGroupsCommandInput - {@link ListGroupsCommandInput}
 * @returns {@link ListGroupsCommandOutput}
 * @see {@link ListGroupsCommandInput} for command's `input` shape.
 * @see {@link ListGroupsCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 *
 * @public
 */
export class ListGroupsCommand extends $Command
  .classBuilder<
    ListGroupsCommandInput,
    ListGroupsCommandOutput,
    SyntheticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SyntheticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Synthetics", "ListGroups", {})
  .n("SyntheticsClient", "ListGroupsCommand")
  .sc(ListGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGroupsRequest;
      output: ListGroupsResponse;
    };
    sdk: {
      input: ListGroupsCommandInput;
      output: ListGroupsCommandOutput;
    };
  };
}
