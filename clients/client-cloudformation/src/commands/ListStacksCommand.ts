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
import { ListStacksInput, ListStacksOutput } from "../models/models_0";
import { de_ListStacksCommand, se_ListStacksCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListStacksCommand}.
 */
export interface ListStacksCommandInput extends ListStacksInput {}
/**
 * @public
 *
 * The output of {@link ListStacksCommand}.
 */
export interface ListStacksCommandOutput extends ListStacksOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary
 *    information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter
 *    is specified, summary information for all stacks is returned (including existing stacks and stacks that have been
 *    deleted).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStacksCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStacksCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ListStacksInput
 *   NextToken: "STRING_VALUE",
 *   StackStatusFilter: [ // StackStatusFilter
 *     "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATE_COMPLETE" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_FAILED" || "ROLLBACK_COMPLETE" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "DELETE_COMPLETE" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED" || "UPDATE_ROLLBACK_IN_PROGRESS" || "UPDATE_ROLLBACK_FAILED" || "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS" || "UPDATE_ROLLBACK_COMPLETE" || "REVIEW_IN_PROGRESS" || "IMPORT_IN_PROGRESS" || "IMPORT_COMPLETE" || "IMPORT_ROLLBACK_IN_PROGRESS" || "IMPORT_ROLLBACK_FAILED" || "IMPORT_ROLLBACK_COMPLETE",
 *   ],
 * };
 * const command = new ListStacksCommand(input);
 * const response = await client.send(command);
 * // { // ListStacksOutput
 * //   StackSummaries: [ // StackSummaries
 * //     { // StackSummary
 * //       StackId: "STRING_VALUE",
 * //       StackName: "STRING_VALUE", // required
 * //       TemplateDescription: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       DeletionTime: new Date("TIMESTAMP"),
 * //       StackStatus: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATE_COMPLETE" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_FAILED" || "ROLLBACK_COMPLETE" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "DELETE_COMPLETE" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED" || "UPDATE_ROLLBACK_IN_PROGRESS" || "UPDATE_ROLLBACK_FAILED" || "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS" || "UPDATE_ROLLBACK_COMPLETE" || "REVIEW_IN_PROGRESS" || "IMPORT_IN_PROGRESS" || "IMPORT_COMPLETE" || "IMPORT_ROLLBACK_IN_PROGRESS" || "IMPORT_ROLLBACK_FAILED" || "IMPORT_ROLLBACK_COMPLETE", // required
 * //       StackStatusReason: "STRING_VALUE",
 * //       ParentId: "STRING_VALUE",
 * //       RootId: "STRING_VALUE",
 * //       DriftInformation: { // StackDriftInformationSummary
 * //         StackDriftStatus: "DRIFTED" || "IN_SYNC" || "UNKNOWN" || "NOT_CHECKED", // required
 * //         LastCheckTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStacksCommandInput - {@link ListStacksCommandInput}
 * @returns {@link ListStacksCommandOutput}
 * @see {@link ListStacksCommandInput} for command's `input` shape.
 * @see {@link ListStacksCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class ListStacksCommand extends $Command<
  ListStacksCommandInput,
  ListStacksCommandOutput,
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
  constructor(readonly input: ListStacksCommandInput) {
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
  ): Handler<ListStacksCommandInput, ListStacksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListStacksCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListStacksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFormation",
        operation: "ListStacks",
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
  private serialize(input: ListStacksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListStacksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStacksCommandOutput> {
    return de_ListStacksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
