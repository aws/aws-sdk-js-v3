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
import { ListStackSetOperationResultsInput, ListStackSetOperationResultsOutput } from "../models/models_0";
import { de_ListStackSetOperationResultsCommand, se_ListStackSetOperationResultsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListStackSetOperationResultsCommand}.
 */
export interface ListStackSetOperationResultsCommandInput extends ListStackSetOperationResultsInput {}
/**
 * @public
 *
 * The output of {@link ListStackSetOperationResultsCommand}.
 */
export interface ListStackSetOperationResultsCommandOutput
  extends ListStackSetOperationResultsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns summary information about the results of a stack set operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackSetOperationResultsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackSetOperationResultsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ListStackSetOperationResultsInput
 *   StackSetName: "STRING_VALUE", // required
 *   OperationId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 *   Filters: [ // OperationResultFilters
 *     { // OperationResultFilter
 *       Name: "OPERATION_RESULT_STATUS",
 *       Values: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ListStackSetOperationResultsCommand(input);
 * const response = await client.send(command);
 * // { // ListStackSetOperationResultsOutput
 * //   Summaries: [ // StackSetOperationResultSummaries
 * //     { // StackSetOperationResultSummary
 * //       Account: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       Status: "PENDING" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED",
 * //       StatusReason: "STRING_VALUE",
 * //       AccountGateResult: { // AccountGateResult
 * //         Status: "SUCCEEDED" || "FAILED" || "SKIPPED",
 * //         StatusReason: "STRING_VALUE",
 * //       },
 * //       OrganizationalUnitId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStackSetOperationResultsCommandInput - {@link ListStackSetOperationResultsCommandInput}
 * @returns {@link ListStackSetOperationResultsCommandOutput}
 * @see {@link ListStackSetOperationResultsCommandInput} for command's `input` shape.
 * @see {@link ListStackSetOperationResultsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link OperationNotFoundException} (client fault)
 *  <p>The specified ID refers to an operation that doesn't exist.</p>
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified stack set doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class ListStackSetOperationResultsCommand extends $Command<
  ListStackSetOperationResultsCommandInput,
  ListStackSetOperationResultsCommandOutput,
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
  constructor(readonly input: ListStackSetOperationResultsCommandInput) {
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
  ): Handler<ListStackSetOperationResultsCommandInput, ListStackSetOperationResultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStackSetOperationResultsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListStackSetOperationResultsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFormation",
        operation: "ListStackSetOperationResults",
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
  private serialize(input: ListStackSetOperationResultsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListStackSetOperationResultsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListStackSetOperationResultsCommandOutput> {
    return de_ListStackSetOperationResultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
