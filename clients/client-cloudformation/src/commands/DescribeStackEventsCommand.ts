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
import type { DescribeStackEventsInput, DescribeStackEventsOutput } from "../models/models_0";
import { DescribeStackEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackEventsCommand}.
 */
export interface DescribeStackEventsCommandInput extends DescribeStackEventsInput {}
/**
 * @public
 *
 * The output of {@link DescribeStackEventsCommand}.
 */
export interface DescribeStackEventsCommandOutput extends DescribeStackEventsOutput, __MetadataBearer {}

/**
 * <p>Returns all stack related events for a specified stack in reverse chronological order. For
 *       more information about a stack's event history, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stack-resource-configuration-complete.html">Understand CloudFormation stack creation events</a> in the
 *         <i>CloudFormation User Guide</i>.</p>
 *          <note>
 *             <p>You can list events for stacks that have failed to create or have been deleted by
 *         specifying the unique stack identifier (stack ID).</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackEventsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackEventsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStackEventsInput
 *   StackName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeStackEventsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackEventsOutput
 * //   StackEvents: [ // StackEvents
 * //     { // StackEvent
 * //       StackId: "STRING_VALUE", // required
 * //       EventId: "STRING_VALUE", // required
 * //       StackName: "STRING_VALUE", // required
 * //       OperationId: "STRING_VALUE",
 * //       LogicalResourceId: "STRING_VALUE",
 * //       PhysicalResourceId: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       Timestamp: new Date("TIMESTAMP"), // required
 * //       ResourceStatus: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATE_COMPLETE" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "DELETE_COMPLETE" || "DELETE_SKIPPED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "UPDATE_COMPLETE" || "IMPORT_FAILED" || "IMPORT_COMPLETE" || "IMPORT_IN_PROGRESS" || "IMPORT_ROLLBACK_IN_PROGRESS" || "IMPORT_ROLLBACK_FAILED" || "IMPORT_ROLLBACK_COMPLETE" || "EXPORT_FAILED" || "EXPORT_COMPLETE" || "EXPORT_IN_PROGRESS" || "EXPORT_ROLLBACK_IN_PROGRESS" || "EXPORT_ROLLBACK_FAILED" || "EXPORT_ROLLBACK_COMPLETE" || "UPDATE_ROLLBACK_IN_PROGRESS" || "UPDATE_ROLLBACK_COMPLETE" || "UPDATE_ROLLBACK_FAILED" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_COMPLETE" || "ROLLBACK_FAILED",
 * //       ResourceStatusReason: "STRING_VALUE",
 * //       ResourceProperties: "STRING_VALUE",
 * //       ClientRequestToken: "STRING_VALUE",
 * //       HookType: "STRING_VALUE",
 * //       HookStatus: "HOOK_IN_PROGRESS" || "HOOK_COMPLETE_SUCCEEDED" || "HOOK_COMPLETE_FAILED" || "HOOK_FAILED",
 * //       HookStatusReason: "STRING_VALUE",
 * //       HookInvocationPoint: "PRE_PROVISION",
 * //       HookInvocationId: "STRING_VALUE",
 * //       HookFailureMode: "FAIL" || "WARN",
 * //       DetailedStatus: "CONFIGURATION_COMPLETE" || "VALIDATION_FAILED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStackEventsCommandInput - {@link DescribeStackEventsCommandInput}
 * @returns {@link DescribeStackEventsCommandOutput}
 * @see {@link DescribeStackEventsCommandInput} for command's `input` shape.
 * @see {@link DescribeStackEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DescribeStackEventsCommand extends $Command
  .classBuilder<
    DescribeStackEventsCommandInput,
    DescribeStackEventsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "DescribeStackEvents", {})
  .n("CloudFormationClient", "DescribeStackEventsCommand")
  .sc(DescribeStackEvents$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStackEventsInput;
      output: DescribeStackEventsOutput;
    };
    sdk: {
      input: DescribeStackEventsCommandInput;
      output: DescribeStackEventsCommandOutput;
    };
  };
}
