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
import { DescribeStackSetInput, DescribeStackSetOutput } from "../models/models_0";
import { de_DescribeStackSetCommand, se_DescribeStackSetCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackSetCommand}.
 */
export interface DescribeStackSetCommandInput extends DescribeStackSetInput {}
/**
 * @public
 *
 * The output of {@link DescribeStackSetCommand}.
 */
export interface DescribeStackSetCommandOutput extends DescribeStackSetOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the description of the specified StackSet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStackSetInput
 *   StackSetName: "STRING_VALUE", // required
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new DescribeStackSetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackSetOutput
 * //   StackSet: { // StackSet
 * //     StackSetName: "STRING_VALUE",
 * //     StackSetId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Status: "ACTIVE" || "DELETED",
 * //     TemplateBody: "STRING_VALUE",
 * //     Parameters: [ // Parameters
 * //       { // Parameter
 * //         ParameterKey: "STRING_VALUE",
 * //         ParameterValue: "STRING_VALUE",
 * //         UsePreviousValue: true || false,
 * //         ResolvedValue: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Capabilities: [ // Capabilities
 * //       "CAPABILITY_IAM" || "CAPABILITY_NAMED_IAM" || "CAPABILITY_AUTO_EXPAND",
 * //     ],
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     StackSetARN: "STRING_VALUE",
 * //     AdministrationRoleARN: "STRING_VALUE",
 * //     ExecutionRoleName: "STRING_VALUE",
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
 * //     AutoDeployment: { // AutoDeployment
 * //       Enabled: true || false,
 * //       RetainStacksOnAccountRemoval: true || false,
 * //     },
 * //     PermissionModel: "SERVICE_MANAGED" || "SELF_MANAGED",
 * //     OrganizationalUnitIds: [ // OrganizationalUnitIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     ManagedExecution: { // ManagedExecution
 * //       Active: true || false,
 * //     },
 * //     Regions: [ // RegionList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStackSetCommandInput - {@link DescribeStackSetCommandInput}
 * @returns {@link DescribeStackSetCommandOutput}
 * @see {@link DescribeStackSetCommandInput} for command's `input` shape.
 * @see {@link DescribeStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified stack set doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class DescribeStackSetCommand extends $Command<
  DescribeStackSetCommandInput,
  DescribeStackSetCommandOutput,
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
  constructor(readonly input: DescribeStackSetCommandInput) {
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
  ): Handler<DescribeStackSetCommandInput, DescribeStackSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStackSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeStackSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFormation",
        operation: "DescribeStackSet",
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
  private serialize(input: DescribeStackSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStackSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStackSetCommandOutput> {
    return de_DescribeStackSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
