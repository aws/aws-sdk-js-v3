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
} from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListStackInstancesInput, ListStackInstancesOutput } from "../models/models_0";
import { de_ListStackInstancesCommand, se_ListStackInstancesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListStackInstancesCommand}.
 */
export interface ListStackInstancesCommandInput extends ListStackInstancesInput {}
/**
 * @public
 *
 * The output of {@link ListStackInstancesCommand}.
 */
export interface ListStackInstancesCommandOutput extends ListStackInstancesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns summary information about stack instances that are associated with the specified stack set. You can
 *    filter for stack instances that are associated with a specific Amazon Web Services account name or Region, or that
 *    have a specific status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackInstancesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackInstancesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ListStackInstancesInput
 *   StackSetName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // StackInstanceFilters
 *     { // StackInstanceFilter
 *       Name: "DETAILED_STATUS" || "LAST_OPERATION_ID" || "DRIFT_STATUS",
 *       Values: "STRING_VALUE",
 *     },
 *   ],
 *   StackInstanceAccount: "STRING_VALUE",
 *   StackInstanceRegion: "STRING_VALUE",
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new ListStackInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListStackInstancesOutput
 * //   Summaries: [ // StackInstanceSummaries
 * //     { // StackInstanceSummary
 * //       StackSetId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       Account: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       Status: "CURRENT" || "OUTDATED" || "INOPERABLE",
 * //       StatusReason: "STRING_VALUE",
 * //       StackInstanceStatus: { // StackInstanceComprehensiveStatus
 * //         DetailedStatus: "PENDING" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED" || "INOPERABLE" || "SKIPPED_SUSPENDED_ACCOUNT",
 * //       },
 * //       OrganizationalUnitId: "STRING_VALUE",
 * //       DriftStatus: "DRIFTED" || "IN_SYNC" || "UNKNOWN" || "NOT_CHECKED",
 * //       LastDriftCheckTimestamp: new Date("TIMESTAMP"),
 * //       LastOperationId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStackInstancesCommandInput - {@link ListStackInstancesCommandInput}
 * @returns {@link ListStackInstancesCommandOutput}
 * @see {@link ListStackInstancesCommandInput} for command's `input` shape.
 * @see {@link ListStackInstancesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified stack set doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class ListStackInstancesCommand extends $Command<
  ListStackInstancesCommandInput,
  ListStackInstancesCommandOutput,
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
  constructor(readonly input: ListStackInstancesCommandInput) {
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
  ): Handler<ListStackInstancesCommandInput, ListStackInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStackInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListStackInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ListStackInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListStackInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStackInstancesCommandOutput> {
    return de_ListStackInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
