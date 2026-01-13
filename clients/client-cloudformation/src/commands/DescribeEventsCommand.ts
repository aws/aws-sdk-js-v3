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
import type { DescribeEventsInput, DescribeEventsOutput } from "../models/models_0";
import { DescribeEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventsCommand}.
 */
export interface DescribeEventsCommandInput extends DescribeEventsInput {}
/**
 * @public
 *
 * The output of {@link DescribeEventsCommand}.
 */
export interface DescribeEventsCommandOutput extends DescribeEventsOutput, __MetadataBearer {}

/**
 * <p>Returns CloudFormation events based on flexible query criteria. Groups events by operation ID,
 *       enabling you to focus on individual stack operations during deployment.</p>
 *          <p>An operation is any action performed on a stack, including stack lifecycle actions
 *       (Create, Update, Delete, Rollback), change set creation, nested stack creation, and automatic
 *       rollbacks triggered by failures. Each operation has a unique identifier (Operation ID) and
 *       represents a discrete change attempt on the stack.</p>
 *          <p>Returns different types of events including:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Progress events</b> - Status updates during stack operation
 *           execution.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Validation errors</b> - Failures from CloudFormation Early
 *           Validations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Provisioning errors</b> - Resource creation and update
 *           failures.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Hook invocation errors</b> - Failures from CloudFormation
 *           Hook during stack operations.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>One of <code>ChangeSetName</code>, <code>OperationId</code> or <code>StackName</code>
 *         must be specified as input.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeEventsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeEventsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeEventsInput
 *   StackName: "STRING_VALUE",
 *   ChangeSetName: "STRING_VALUE",
 *   OperationId: "STRING_VALUE",
 *   Filters: { // EventFilter
 *     FailedEvents: true || false,
 *   },
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeEventsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventsOutput
 * //   OperationEvents: [ // OperationEvents
 * //     { // OperationEvent
 * //       EventId: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       OperationId: "STRING_VALUE",
 * //       OperationType: "CREATE_STACK" || "UPDATE_STACK" || "DELETE_STACK" || "CONTINUE_ROLLBACK" || "ROLLBACK" || "CREATE_CHANGESET",
 * //       OperationStatus: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //       EventType: "STACK_EVENT" || "PROGRESS_EVENT" || "VALIDATION_ERROR" || "PROVISIONING_ERROR" || "HOOK_INVOCATION_ERROR",
 * //       LogicalResourceId: "STRING_VALUE",
 * //       PhysicalResourceId: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       Timestamp: new Date("TIMESTAMP"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       ResourceStatus: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATE_COMPLETE" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "DELETE_COMPLETE" || "DELETE_SKIPPED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "UPDATE_COMPLETE" || "IMPORT_FAILED" || "IMPORT_COMPLETE" || "IMPORT_IN_PROGRESS" || "IMPORT_ROLLBACK_IN_PROGRESS" || "IMPORT_ROLLBACK_FAILED" || "IMPORT_ROLLBACK_COMPLETE" || "EXPORT_FAILED" || "EXPORT_COMPLETE" || "EXPORT_IN_PROGRESS" || "EXPORT_ROLLBACK_IN_PROGRESS" || "EXPORT_ROLLBACK_FAILED" || "EXPORT_ROLLBACK_COMPLETE" || "UPDATE_ROLLBACK_IN_PROGRESS" || "UPDATE_ROLLBACK_COMPLETE" || "UPDATE_ROLLBACK_FAILED" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_COMPLETE" || "ROLLBACK_FAILED",
 * //       ResourceStatusReason: "STRING_VALUE",
 * //       ResourceProperties: "STRING_VALUE",
 * //       ClientRequestToken: "STRING_VALUE",
 * //       HookType: "STRING_VALUE",
 * //       HookStatus: "HOOK_IN_PROGRESS" || "HOOK_COMPLETE_SUCCEEDED" || "HOOK_COMPLETE_FAILED" || "HOOK_FAILED",
 * //       HookStatusReason: "STRING_VALUE",
 * //       HookInvocationPoint: "PRE_PROVISION",
 * //       HookFailureMode: "FAIL" || "WARN",
 * //       DetailedStatus: "CONFIGURATION_COMPLETE" || "VALIDATION_FAILED",
 * //       ValidationFailureMode: "FAIL" || "WARN",
 * //       ValidationName: "STRING_VALUE",
 * //       ValidationStatus: "FAILED" || "SKIPPED",
 * //       ValidationStatusReason: "STRING_VALUE",
 * //       ValidationPath: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEventsCommandInput - {@link DescribeEventsCommandInput}
 * @returns {@link DescribeEventsCommandOutput}
 * @see {@link DescribeEventsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DescribeEventsCommand extends $Command
  .classBuilder<
    DescribeEventsCommandInput,
    DescribeEventsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "DescribeEvents", {})
  .n("CloudFormationClient", "DescribeEventsCommand")
  .sc(DescribeEvents$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventsInput;
      output: DescribeEventsOutput;
    };
    sdk: {
      input: DescribeEventsCommandInput;
      output: DescribeEventsCommandOutput;
    };
  };
}
