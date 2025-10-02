// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListChangeSetsInput, ListChangeSetsOutput } from "../models/models_0";
import { de_ListChangeSetsCommand, se_ListChangeSetsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChangeSetsCommand}.
 */
export interface ListChangeSetsCommandInput extends ListChangeSetsInput {}
/**
 * @public
 *
 * The output of {@link ListChangeSetsCommand}.
 */
export interface ListChangeSetsCommandOutput extends ListChangeSetsOutput, __MetadataBearer {}

/**
 * <p>Returns the ID and status of each active change set for a stack. For example, CloudFormation
 *       lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or
 *         <code>CREATE_PENDING</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListChangeSetsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListChangeSetsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ListChangeSetsInput
 *   StackName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListChangeSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListChangeSetsOutput
 * //   Summaries: [ // ChangeSetSummaries
 * //     { // ChangeSetSummary
 * //       StackId: "STRING_VALUE",
 * //       StackName: "STRING_VALUE",
 * //       ChangeSetId: "STRING_VALUE",
 * //       ChangeSetName: "STRING_VALUE",
 * //       ExecutionStatus: "UNAVAILABLE" || "AVAILABLE" || "EXECUTE_IN_PROGRESS" || "EXECUTE_COMPLETE" || "EXECUTE_FAILED" || "OBSOLETE",
 * //       Status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED" || "FAILED",
 * //       StatusReason: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       IncludeNestedStacks: true || false,
 * //       ParentChangeSetId: "STRING_VALUE",
 * //       RootChangeSetId: "STRING_VALUE",
 * //       ImportExistingResources: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChangeSetsCommandInput - {@link ListChangeSetsCommandInput}
 * @returns {@link ListChangeSetsCommandOutput}
 * @see {@link ListChangeSetsCommandInput} for command's `input` shape.
 * @see {@link ListChangeSetsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class ListChangeSetsCommand extends $Command
  .classBuilder<
    ListChangeSetsCommandInput,
    ListChangeSetsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "ListChangeSets", {})
  .n("CloudFormationClient", "ListChangeSetsCommand")
  .f(void 0, void 0)
  .ser(se_ListChangeSetsCommand)
  .de(de_ListChangeSetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChangeSetsInput;
      output: ListChangeSetsOutput;
    };
    sdk: {
      input: ListChangeSetsCommandInput;
      output: ListChangeSetsCommandOutput;
    };
  };
}
