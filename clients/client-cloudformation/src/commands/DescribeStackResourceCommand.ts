// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStackResourceInput, DescribeStackResourceOutput } from "../models/models_0";
import { de_DescribeStackResourceCommand, se_DescribeStackResourceCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackResourceCommand}.
 */
export interface DescribeStackResourceCommandInput extends DescribeStackResourceInput {}
/**
 * @public
 *
 * The output of {@link DescribeStackResourceCommand}.
 */
export interface DescribeStackResourceCommandOutput extends DescribeStackResourceOutput, __MetadataBearer {}

/**
 * <p>Returns a description of the specified resource in the specified stack.</p>
 *          <p>For deleted stacks, DescribeStackResource returns resource information for up to 90 days
 *       after the stack has been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackResourceCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackResourceCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStackResourceInput
 *   StackName: "STRING_VALUE", // required
 *   LogicalResourceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeStackResourceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackResourceOutput
 * //   StackResourceDetail: { // StackResourceDetail
 * //     StackName: "STRING_VALUE",
 * //     StackId: "STRING_VALUE",
 * //     LogicalResourceId: "STRING_VALUE", // required
 * //     PhysicalResourceId: "STRING_VALUE",
 * //     ResourceType: "STRING_VALUE", // required
 * //     LastUpdatedTimestamp: new Date("TIMESTAMP"), // required
 * //     ResourceStatus: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATE_COMPLETE" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "DELETE_COMPLETE" || "DELETE_SKIPPED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "UPDATE_COMPLETE" || "IMPORT_FAILED" || "IMPORT_COMPLETE" || "IMPORT_IN_PROGRESS" || "IMPORT_ROLLBACK_IN_PROGRESS" || "IMPORT_ROLLBACK_FAILED" || "IMPORT_ROLLBACK_COMPLETE" || "EXPORT_FAILED" || "EXPORT_COMPLETE" || "EXPORT_IN_PROGRESS" || "EXPORT_ROLLBACK_IN_PROGRESS" || "EXPORT_ROLLBACK_FAILED" || "EXPORT_ROLLBACK_COMPLETE" || "UPDATE_ROLLBACK_IN_PROGRESS" || "UPDATE_ROLLBACK_COMPLETE" || "UPDATE_ROLLBACK_FAILED" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_COMPLETE" || "ROLLBACK_FAILED", // required
 * //     ResourceStatusReason: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Metadata: "STRING_VALUE",
 * //     DriftInformation: { // StackResourceDriftInformation
 * //       StackResourceDriftStatus: "IN_SYNC" || "MODIFIED" || "DELETED" || "NOT_CHECKED", // required
 * //       LastCheckTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //     ModuleInfo: { // ModuleInfo
 * //       TypeHierarchy: "STRING_VALUE",
 * //       LogicalIdHierarchy: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStackResourceCommandInput - {@link DescribeStackResourceCommandInput}
 * @returns {@link DescribeStackResourceCommandOutput}
 * @see {@link DescribeStackResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeStackResourceCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DescribeStackResourceCommand extends $Command
  .classBuilder<
    DescribeStackResourceCommandInput,
    DescribeStackResourceCommandOutput,
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
  .s("CloudFormation", "DescribeStackResource", {})
  .n("CloudFormationClient", "DescribeStackResourceCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStackResourceCommand)
  .de(de_DescribeStackResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStackResourceInput;
      output: DescribeStackResourceOutput;
    };
    sdk: {
      input: DescribeStackResourceCommandInput;
      output: DescribeStackResourceCommandOutput;
    };
  };
}
