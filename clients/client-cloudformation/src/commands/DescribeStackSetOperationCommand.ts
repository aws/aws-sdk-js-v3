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
import { DescribeStackSetOperationInput, DescribeStackSetOperationOutput } from "../models/models_0";
import { de_DescribeStackSetOperationCommand, se_DescribeStackSetOperationCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackSetOperationCommand}.
 */
export interface DescribeStackSetOperationCommandInput extends DescribeStackSetOperationInput {}
/**
 * @public
 *
 * The output of {@link DescribeStackSetOperationCommand}.
 */
export interface DescribeStackSetOperationCommandOutput extends DescribeStackSetOperationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the description of the specified StackSet operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackSetOperationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackSetOperationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStackSetOperationInput
 *   StackSetName: "STRING_VALUE", // required
 *   OperationId: "STRING_VALUE", // required
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new DescribeStackSetOperationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackSetOperationOutput
 * //   StackSetOperation: { // StackSetOperation
 * //     OperationId: "STRING_VALUE",
 * //     StackSetId: "STRING_VALUE",
 * //     Action: "CREATE" || "UPDATE" || "DELETE" || "DETECT_DRIFT",
 * //     Status: "RUNNING" || "SUCCEEDED" || "FAILED" || "STOPPING" || "STOPPED" || "QUEUED",
 * //     OperationPreferences: { // StackSetOperationPreferences
 * //       RegionConcurrencyType: "SEQUENTIAL" || "PARALLEL",
 * //       RegionOrder: [ // RegionList
 * //         "STRING_VALUE",
 * //       ],
 * //       FailureToleranceCount: Number("int"),
 * //       FailureTolerancePercentage: Number("int"),
 * //       MaxConcurrentCount: Number("int"),
 * //       MaxConcurrentPercentage: Number("int"),
 * //     },
 * //     RetainStacks: true || false,
 * //     AdministrationRoleARN: "STRING_VALUE",
 * //     ExecutionRoleName: "STRING_VALUE",
 * //     CreationTimestamp: new Date("TIMESTAMP"),
 * //     EndTimestamp: new Date("TIMESTAMP"),
 * //     DeploymentTargets: { // DeploymentTargets
 * //       Accounts: [ // AccountList
 * //         "STRING_VALUE",
 * //       ],
 * //       AccountsUrl: "STRING_VALUE",
 * //       OrganizationalUnitIds: [ // OrganizationalUnitIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       AccountFilterType: "NONE" || "INTERSECTION" || "DIFFERENCE" || "UNION",
 * //     },
 * //     StackSetDriftDetectionDetails: { // StackSetDriftDetectionDetails
 * //       DriftStatus: "DRIFTED" || "IN_SYNC" || "NOT_CHECKED",
 * //       DriftDetectionStatus: "COMPLETED" || "FAILED" || "PARTIAL_SUCCESS" || "IN_PROGRESS" || "STOPPED",
 * //       LastDriftCheckTimestamp: new Date("TIMESTAMP"),
 * //       TotalStackInstancesCount: Number("int"),
 * //       DriftedStackInstancesCount: Number("int"),
 * //       InSyncStackInstancesCount: Number("int"),
 * //       InProgressStackInstancesCount: Number("int"),
 * //       FailedStackInstancesCount: Number("int"),
 * //     },
 * //     StatusReason: "STRING_VALUE",
 * //     StatusDetails: { // StackSetOperationStatusDetails
 * //       FailedStackInstancesCount: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStackSetOperationCommandInput - {@link DescribeStackSetOperationCommandInput}
 * @returns {@link DescribeStackSetOperationCommandOutput}
 * @see {@link DescribeStackSetOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeStackSetOperationCommandOutput} for command's `response` shape.
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
export class DescribeStackSetOperationCommand extends $Command<
  DescribeStackSetOperationCommandInput,
  DescribeStackSetOperationCommandOutput,
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
  constructor(readonly input: DescribeStackSetOperationCommandInput) {
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
  ): Handler<DescribeStackSetOperationCommandInput, DescribeStackSetOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStackSetOperationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeStackSetOperationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFormation",
        operation: "DescribeStackSetOperation",
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
  private serialize(input: DescribeStackSetOperationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStackSetOperationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStackSetOperationCommandOutput> {
    return de_DescribeStackSetOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
