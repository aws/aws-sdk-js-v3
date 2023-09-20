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
import { ListStackSetOperationsInput, ListStackSetOperationsOutput } from "../models/models_0";
import { de_ListStackSetOperationsCommand, se_ListStackSetOperationsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListStackSetOperationsCommand}.
 */
export interface ListStackSetOperationsCommandInput extends ListStackSetOperationsInput {}
/**
 * @public
 *
 * The output of {@link ListStackSetOperationsCommand}.
 */
export interface ListStackSetOperationsCommandOutput extends ListStackSetOperationsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns summary information about operations performed on a stack set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackSetOperationsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackSetOperationsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ListStackSetOperationsInput
 *   StackSetName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new ListStackSetOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListStackSetOperationsOutput
 * //   Summaries: [ // StackSetOperationSummaries
 * //     { // StackSetOperationSummary
 * //       OperationId: "STRING_VALUE",
 * //       Action: "CREATE" || "UPDATE" || "DELETE" || "DETECT_DRIFT",
 * //       Status: "RUNNING" || "SUCCEEDED" || "FAILED" || "STOPPING" || "STOPPED" || "QUEUED",
 * //       CreationTimestamp: new Date("TIMESTAMP"),
 * //       EndTimestamp: new Date("TIMESTAMP"),
 * //       StatusReason: "STRING_VALUE",
 * //       StatusDetails: { // StackSetOperationStatusDetails
 * //         FailedStackInstancesCount: Number("int"),
 * //       },
 * //       OperationPreferences: { // StackSetOperationPreferences
 * //         RegionConcurrencyType: "SEQUENTIAL" || "PARALLEL",
 * //         RegionOrder: [ // RegionList
 * //           "STRING_VALUE",
 * //         ],
 * //         FailureToleranceCount: Number("int"),
 * //         FailureTolerancePercentage: Number("int"),
 * //         MaxConcurrentCount: Number("int"),
 * //         MaxConcurrentPercentage: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStackSetOperationsCommandInput - {@link ListStackSetOperationsCommandInput}
 * @returns {@link ListStackSetOperationsCommandOutput}
 * @see {@link ListStackSetOperationsCommandInput} for command's `input` shape.
 * @see {@link ListStackSetOperationsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified stack set doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class ListStackSetOperationsCommand extends $Command<
  ListStackSetOperationsCommandInput,
  ListStackSetOperationsCommandOutput,
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
  constructor(readonly input: ListStackSetOperationsCommandInput) {
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
  ): Handler<ListStackSetOperationsCommandInput, ListStackSetOperationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStackSetOperationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListStackSetOperationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFormation",
        operation: "ListStackSetOperations",
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
  private serialize(input: ListStackSetOperationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListStackSetOperationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStackSetOperationsCommandOutput> {
    return de_ListStackSetOperationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
