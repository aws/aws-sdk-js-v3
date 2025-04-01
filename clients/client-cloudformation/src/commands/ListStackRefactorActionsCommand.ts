// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStackRefactorActionsInput, ListStackRefactorActionsOutput } from "../models/models_0";
import { de_ListStackRefactorActionsCommand, se_ListStackRefactorActionsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStackRefactorActionsCommand}.
 */
export interface ListStackRefactorActionsCommandInput extends ListStackRefactorActionsInput {}
/**
 * @public
 *
 * The output of {@link ListStackRefactorActionsCommand}.
 */
export interface ListStackRefactorActionsCommandOutput extends ListStackRefactorActionsOutput, __MetadataBearer {}

/**
 * <p>Lists the stack refactor actions that will be taken after calling the <a>ExecuteStackRefactor</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackRefactorActionsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackRefactorActionsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ListStackRefactorActionsInput
 *   StackRefactorId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListStackRefactorActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListStackRefactorActionsOutput
 * //   StackRefactorActions: [ // StackRefactorActions // required
 * //     { // StackRefactorAction
 * //       Action: "MOVE" || "CREATE",
 * //       Entity: "RESOURCE" || "STACK",
 * //       PhysicalResourceId: "STRING_VALUE",
 * //       ResourceIdentifier: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Detection: "AUTO" || "MANUAL",
 * //       DetectionReason: "STRING_VALUE",
 * //       TagResources: [ // StackRefactorTagResources
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       UntagResources: [ // StackRefactorUntagResources
 * //         "STRING_VALUE",
 * //       ],
 * //       ResourceMapping: { // ResourceMapping
 * //         Source: { // ResourceLocation
 * //           StackName: "STRING_VALUE", // required
 * //           LogicalResourceId: "STRING_VALUE", // required
 * //         },
 * //         Destination: {
 * //           StackName: "STRING_VALUE", // required
 * //           LogicalResourceId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStackRefactorActionsCommandInput - {@link ListStackRefactorActionsCommandInput}
 * @returns {@link ListStackRefactorActionsCommandOutput}
 * @see {@link ListStackRefactorActionsCommandInput} for command's `input` shape.
 * @see {@link ListStackRefactorActionsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class ListStackRefactorActionsCommand extends $Command
  .classBuilder<
    ListStackRefactorActionsCommandInput,
    ListStackRefactorActionsCommandOutput,
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
  .s("CloudFormation", "ListStackRefactorActions", {})
  .n("CloudFormationClient", "ListStackRefactorActionsCommand")
  .f(void 0, void 0)
  .ser(se_ListStackRefactorActionsCommand)
  .de(de_ListStackRefactorActionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStackRefactorActionsInput;
      output: ListStackRefactorActionsOutput;
    };
    sdk: {
      input: ListStackRefactorActionsCommandInput;
      output: ListStackRefactorActionsCommandOutput;
    };
  };
}
