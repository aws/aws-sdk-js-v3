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
import { ListChangeSetsInput, ListChangeSetsOutput } from "../models/models_0";
import { de_ListChangeSetsCommand, se_ListChangeSetsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Returns the ID and status of each active change set for a stack. For example, CloudFormation lists change
 *    sets that are in the <code>CREATE_IN_PROGRESS</code> or <code>CREATE_PENDING</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListChangeSetsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListChangeSetsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
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
 */
export class ListChangeSetsCommand extends $Command<
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput,
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
  constructor(readonly input: ListChangeSetsCommandInput) {
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
  ): Handler<ListChangeSetsCommandInput, ListChangeSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListChangeSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListChangeSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFormation",
        operation: "ListChangeSets",
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
  private serialize(input: ListChangeSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListChangeSetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListChangeSetsCommandOutput> {
    return de_ListChangeSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
