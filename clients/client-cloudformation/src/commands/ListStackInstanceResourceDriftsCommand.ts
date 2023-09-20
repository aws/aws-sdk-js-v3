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
import { ListStackInstanceResourceDriftsInput, ListStackInstanceResourceDriftsOutput } from "../models/models_0";
import {
  de_ListStackInstanceResourceDriftsCommand,
  se_ListStackInstanceResourceDriftsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListStackInstanceResourceDriftsCommand}.
 */
export interface ListStackInstanceResourceDriftsCommandInput extends ListStackInstanceResourceDriftsInput {}
/**
 * @public
 *
 * The output of {@link ListStackInstanceResourceDriftsCommand}.
 */
export interface ListStackInstanceResourceDriftsCommandOutput
  extends ListStackInstanceResourceDriftsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns drift information for resources in a stack instance.</p>
 *          <note>
 *             <p>
 *                <code>ListStackInstanceResourceDrifts</code> returns drift information for the most
 *         recent drift detection operation. If an operation is in progress, it may only return
 *         partial results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackInstanceResourceDriftsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackInstanceResourceDriftsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ListStackInstanceResourceDriftsInput
 *   StackSetName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   StackInstanceResourceDriftStatuses: [ // StackResourceDriftStatusFilters
 *     "IN_SYNC" || "MODIFIED" || "DELETED" || "NOT_CHECKED",
 *   ],
 *   StackInstanceAccount: "STRING_VALUE", // required
 *   StackInstanceRegion: "STRING_VALUE", // required
 *   OperationId: "STRING_VALUE", // required
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new ListStackInstanceResourceDriftsCommand(input);
 * const response = await client.send(command);
 * // { // ListStackInstanceResourceDriftsOutput
 * //   Summaries: [ // StackInstanceResourceDriftsSummaries
 * //     { // StackInstanceResourceDriftsSummary
 * //       StackId: "STRING_VALUE", // required
 * //       LogicalResourceId: "STRING_VALUE", // required
 * //       PhysicalResourceId: "STRING_VALUE",
 * //       PhysicalResourceIdContext: [ // PhysicalResourceIdContext
 * //         { // PhysicalResourceIdContextKeyValuePair
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       ResourceType: "STRING_VALUE", // required
 * //       PropertyDifferences: [ // PropertyDifferences
 * //         { // PropertyDifference
 * //           PropertyPath: "STRING_VALUE", // required
 * //           ExpectedValue: "STRING_VALUE", // required
 * //           ActualValue: "STRING_VALUE", // required
 * //           DifferenceType: "ADD" || "REMOVE" || "NOT_EQUAL", // required
 * //         },
 * //       ],
 * //       StackResourceDriftStatus: "IN_SYNC" || "MODIFIED" || "DELETED" || "NOT_CHECKED", // required
 * //       Timestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStackInstanceResourceDriftsCommandInput - {@link ListStackInstanceResourceDriftsCommandInput}
 * @returns {@link ListStackInstanceResourceDriftsCommandOutput}
 * @see {@link ListStackInstanceResourceDriftsCommandInput} for command's `input` shape.
 * @see {@link ListStackInstanceResourceDriftsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link OperationNotFoundException} (client fault)
 *  <p>The specified ID refers to an operation that doesn't exist.</p>
 *
 * @throws {@link StackInstanceNotFoundException} (client fault)
 *  <p>The specified stack instance doesn't exist.</p>
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified stack set doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class ListStackInstanceResourceDriftsCommand extends $Command<
  ListStackInstanceResourceDriftsCommandInput,
  ListStackInstanceResourceDriftsCommandOutput,
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
  constructor(readonly input: ListStackInstanceResourceDriftsCommandInput) {
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
  ): Handler<ListStackInstanceResourceDriftsCommandInput, ListStackInstanceResourceDriftsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStackInstanceResourceDriftsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListStackInstanceResourceDriftsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFormation",
        operation: "ListStackInstanceResourceDrifts",
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
  private serialize(
    input: ListStackInstanceResourceDriftsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListStackInstanceResourceDriftsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListStackInstanceResourceDriftsCommandOutput> {
    return de_ListStackInstanceResourceDriftsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
