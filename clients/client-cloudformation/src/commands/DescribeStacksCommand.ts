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
import { DescribeStacksInput, DescribeStacksOutput } from "../models/models_0";
import { de_DescribeStacksCommand, se_DescribeStacksCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStacksCommand}.
 */
export interface DescribeStacksCommandInput extends DescribeStacksInput {}
/**
 * @public
 *
 * The output of {@link DescribeStacksCommand}.
 */
export interface DescribeStacksCommandOutput extends DescribeStacksOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the description for the specified stack; if no stack name was specified, then it returns the description
 *    for all the stacks created.</p>
 *          <note>
 *             <p>If the stack doesn't exist, an <code>ValidationError</code> is returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStacksCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStacksCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStacksInput
 *   StackName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeStacksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStacksOutput
 * //   Stacks: [ // Stacks
 * //     { // Stack
 * //       StackId: "STRING_VALUE",
 * //       StackName: "STRING_VALUE", // required
 * //       ChangeSetId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Parameters: [ // Parameters
 * //         { // Parameter
 * //           ParameterKey: "STRING_VALUE",
 * //           ParameterValue: "STRING_VALUE",
 * //           UsePreviousValue: true || false,
 * //           ResolvedValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       DeletionTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       RollbackConfiguration: { // RollbackConfiguration
 * //         RollbackTriggers: [ // RollbackTriggers
 * //           { // RollbackTrigger
 * //             Arn: "STRING_VALUE", // required
 * //             Type: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         MonitoringTimeInMinutes: Number("int"),
 * //       },
 * //       StackStatus: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATE_COMPLETE" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_FAILED" || "ROLLBACK_COMPLETE" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "DELETE_COMPLETE" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED" || "UPDATE_ROLLBACK_IN_PROGRESS" || "UPDATE_ROLLBACK_FAILED" || "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS" || "UPDATE_ROLLBACK_COMPLETE" || "REVIEW_IN_PROGRESS" || "IMPORT_IN_PROGRESS" || "IMPORT_COMPLETE" || "IMPORT_ROLLBACK_IN_PROGRESS" || "IMPORT_ROLLBACK_FAILED" || "IMPORT_ROLLBACK_COMPLETE", // required
 * //       StackStatusReason: "STRING_VALUE",
 * //       DisableRollback: true || false,
 * //       NotificationARNs: [ // NotificationARNs
 * //         "STRING_VALUE",
 * //       ],
 * //       TimeoutInMinutes: Number("int"),
 * //       Capabilities: [ // Capabilities
 * //         "CAPABILITY_IAM" || "CAPABILITY_NAMED_IAM" || "CAPABILITY_AUTO_EXPAND",
 * //       ],
 * //       Outputs: [ // Outputs
 * //         { // Output
 * //           OutputKey: "STRING_VALUE",
 * //           OutputValue: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           ExportName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       RoleARN: "STRING_VALUE",
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       EnableTerminationProtection: true || false,
 * //       ParentId: "STRING_VALUE",
 * //       RootId: "STRING_VALUE",
 * //       DriftInformation: { // StackDriftInformation
 * //         StackDriftStatus: "DRIFTED" || "IN_SYNC" || "UNKNOWN" || "NOT_CHECKED", // required
 * //         LastCheckTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //       RetainExceptOnCreate: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStacksCommandInput - {@link DescribeStacksCommandInput}
 * @returns {@link DescribeStacksCommandOutput}
 * @see {@link DescribeStacksCommandInput} for command's `input` shape.
 * @see {@link DescribeStacksCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class DescribeStacksCommand extends $Command<
  DescribeStacksCommandInput,
  DescribeStacksCommandOutput,
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
  constructor(readonly input: DescribeStacksCommandInput) {
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
  ): Handler<DescribeStacksCommandInput, DescribeStacksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStacksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeStacksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFormation",
        operation: "DescribeStacks",
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
  private serialize(input: DescribeStacksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStacksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStacksCommandOutput> {
    return de_DescribeStacksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
