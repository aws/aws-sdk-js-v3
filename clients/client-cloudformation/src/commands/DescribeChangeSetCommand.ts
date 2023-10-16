// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeChangeSetInput, DescribeChangeSetOutput } from "../models/models_0";
import { de_DescribeChangeSetCommand, se_DescribeChangeSetCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeChangeSetCommand}.
 */
export interface DescribeChangeSetCommandInput extends DescribeChangeSetInput {}
/**
 * @public
 *
 * The output of {@link DescribeChangeSetCommand}.
 */
export interface DescribeChangeSetCommandOutput extends DescribeChangeSetOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the inputs for the change set and a list of changes that CloudFormation will make if you execute the
 *    change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Updating Stacks Using Change
 *     Sets</a> in the CloudFormation User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeChangeSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeChangeSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeChangeSetInput
 *   ChangeSetName: "STRING_VALUE", // required
 *   StackName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeChangeSetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChangeSetOutput
 * //   ChangeSetName: "STRING_VALUE",
 * //   ChangeSetId: "STRING_VALUE",
 * //   StackId: "STRING_VALUE",
 * //   StackName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Parameters: [ // Parameters
 * //     { // Parameter
 * //       ParameterKey: "STRING_VALUE",
 * //       ParameterValue: "STRING_VALUE",
 * //       UsePreviousValue: true || false,
 * //       ResolvedValue: "STRING_VALUE",
 * //     },
 * //   ],
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   ExecutionStatus: "UNAVAILABLE" || "AVAILABLE" || "EXECUTE_IN_PROGRESS" || "EXECUTE_COMPLETE" || "EXECUTE_FAILED" || "OBSOLETE",
 * //   Status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED" || "FAILED",
 * //   StatusReason: "STRING_VALUE",
 * //   NotificationARNs: [ // NotificationARNs
 * //     "STRING_VALUE",
 * //   ],
 * //   RollbackConfiguration: { // RollbackConfiguration
 * //     RollbackTriggers: [ // RollbackTriggers
 * //       { // RollbackTrigger
 * //         Arn: "STRING_VALUE", // required
 * //         Type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     MonitoringTimeInMinutes: Number("int"),
 * //   },
 * //   Capabilities: [ // Capabilities
 * //     "CAPABILITY_IAM" || "CAPABILITY_NAMED_IAM" || "CAPABILITY_AUTO_EXPAND",
 * //   ],
 * //   Tags: [ // Tags
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Changes: [ // Changes
 * //     { // Change
 * //       Type: "Resource",
 * //       HookInvocationCount: Number("int"),
 * //       ResourceChange: { // ResourceChange
 * //         Action: "Add" || "Modify" || "Remove" || "Import" || "Dynamic",
 * //         LogicalResourceId: "STRING_VALUE",
 * //         PhysicalResourceId: "STRING_VALUE",
 * //         ResourceType: "STRING_VALUE",
 * //         Replacement: "True" || "False" || "Conditional",
 * //         Scope: [ // Scope
 * //           "Properties" || "Metadata" || "CreationPolicy" || "UpdatePolicy" || "DeletionPolicy" || "UpdateReplacePolicy" || "Tags",
 * //         ],
 * //         Details: [ // ResourceChangeDetails
 * //           { // ResourceChangeDetail
 * //             Target: { // ResourceTargetDefinition
 * //               Attribute: "Properties" || "Metadata" || "CreationPolicy" || "UpdatePolicy" || "DeletionPolicy" || "UpdateReplacePolicy" || "Tags",
 * //               Name: "STRING_VALUE",
 * //               RequiresRecreation: "Never" || "Conditionally" || "Always",
 * //             },
 * //             Evaluation: "Static" || "Dynamic",
 * //             ChangeSource: "ResourceReference" || "ParameterReference" || "ResourceAttribute" || "DirectModification" || "Automatic",
 * //             CausingEntity: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ChangeSetId: "STRING_VALUE",
 * //         ModuleInfo: { // ModuleInfo
 * //           TypeHierarchy: "STRING_VALUE",
 * //           LogicalIdHierarchy: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   IncludeNestedStacks: true || false,
 * //   ParentChangeSetId: "STRING_VALUE",
 * //   RootChangeSetId: "STRING_VALUE",
 * //   OnStackFailure: "DO_NOTHING" || "ROLLBACK" || "DELETE",
 * // };
 *
 * ```
 *
 * @param DescribeChangeSetCommandInput - {@link DescribeChangeSetCommandInput}
 * @returns {@link DescribeChangeSetCommandOutput}
 * @see {@link DescribeChangeSetCommandInput} for command's `input` shape.
 * @see {@link DescribeChangeSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link ChangeSetNotFoundException} (client fault)
 *  <p>The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the
 *     <code>ListChangeSets</code> operation.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class DescribeChangeSetCommand extends $Command<
  DescribeChangeSetCommandInput,
  DescribeChangeSetCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeChangeSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeChangeSetCommandInput, DescribeChangeSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeChangeSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeChangeSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFormation",
        operation: "DescribeChangeSet",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeChangeSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeChangeSetCommandOutput> {
    return de_DescribeChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
