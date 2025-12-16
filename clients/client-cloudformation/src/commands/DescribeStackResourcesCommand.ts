// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeStackResourcesInput, DescribeStackResourcesOutput } from "../models/models_0";
import { DescribeStackResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackResourcesCommand}.
 */
export interface DescribeStackResourcesCommandInput extends DescribeStackResourcesInput {}
/**
 * @public
 *
 * The output of {@link DescribeStackResourcesCommand}.
 */
export interface DescribeStackResourcesCommandOutput extends DescribeStackResourcesOutput, __MetadataBearer {}

/**
 * <p>Returns Amazon Web Services resource descriptions for running and deleted stacks. If
 *         <code>StackName</code> is specified, all the associated resources that are part of the stack
 *       are returned. If <code>PhysicalResourceId</code> is specified, the associated resources of the
 *       stack that the resource belongs to are returned.</p>
 *          <note>
 *             <p>Only the first 100 resources will be returned. If your stack has more resources than
 *         this, you should use <code>ListStackResources</code> instead.</p>
 *          </note>
 *          <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information for
 *       up to 90 days after the stack has been deleted.</p>
 *          <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>, but not
 *       both. In addition, you can specify <code>LogicalResourceId</code> to filter the returned
 *       result. For more information about resources, the <code>LogicalResourceId</code> and
 *         <code>PhysicalResourceId</code>, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">CloudFormation User Guide</a>.</p>
 *          <note>
 *             <p>A <code>ValidationError</code> is returned if you specify both <code>StackName</code>
 *         and <code>PhysicalResourceId</code> in the same request.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackResourcesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackResourcesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStackResourcesInput
 *   StackName: "STRING_VALUE",
 *   LogicalResourceId: "STRING_VALUE",
 *   PhysicalResourceId: "STRING_VALUE",
 * };
 * const command = new DescribeStackResourcesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackResourcesOutput
 * //   StackResources: [ // StackResources
 * //     { // StackResource
 * //       StackName: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       LogicalResourceId: "STRING_VALUE", // required
 * //       PhysicalResourceId: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE", // required
 * //       Timestamp: new Date("TIMESTAMP"), // required
 * //       ResourceStatus: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATE_COMPLETE" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "DELETE_COMPLETE" || "DELETE_SKIPPED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "UPDATE_COMPLETE" || "IMPORT_FAILED" || "IMPORT_COMPLETE" || "IMPORT_IN_PROGRESS" || "IMPORT_ROLLBACK_IN_PROGRESS" || "IMPORT_ROLLBACK_FAILED" || "IMPORT_ROLLBACK_COMPLETE" || "EXPORT_FAILED" || "EXPORT_COMPLETE" || "EXPORT_IN_PROGRESS" || "EXPORT_ROLLBACK_IN_PROGRESS" || "EXPORT_ROLLBACK_FAILED" || "EXPORT_ROLLBACK_COMPLETE" || "UPDATE_ROLLBACK_IN_PROGRESS" || "UPDATE_ROLLBACK_COMPLETE" || "UPDATE_ROLLBACK_FAILED" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_COMPLETE" || "ROLLBACK_FAILED", // required
 * //       ResourceStatusReason: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DriftInformation: { // StackResourceDriftInformation
 * //         StackResourceDriftStatus: "IN_SYNC" || "MODIFIED" || "DELETED" || "NOT_CHECKED" || "UNKNOWN" || "UNSUPPORTED", // required
 * //         LastCheckTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //       ModuleInfo: { // ModuleInfo
 * //         TypeHierarchy: "STRING_VALUE",
 * //         LogicalIdHierarchy: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeStackResourcesCommandInput - {@link DescribeStackResourcesCommandInput}
 * @returns {@link DescribeStackResourcesCommandOutput}
 * @see {@link DescribeStackResourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeStackResourcesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DescribeStackResourcesCommand extends $Command
  .classBuilder<
    DescribeStackResourcesCommandInput,
    DescribeStackResourcesCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "DescribeStackResources", {})
  .n("CloudFormationClient", "DescribeStackResourcesCommand")
  .sc(DescribeStackResources$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStackResourcesInput;
      output: DescribeStackResourcesOutput;
    };
    sdk: {
      input: DescribeStackResourcesCommandInput;
      output: DescribeStackResourcesCommandOutput;
    };
  };
}
