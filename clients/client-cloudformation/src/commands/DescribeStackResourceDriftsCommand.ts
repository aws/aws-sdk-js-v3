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
import { DescribeStackResourceDriftsInput, DescribeStackResourceDriftsOutput } from "../models/models_0";
import { de_DescribeStackResourceDriftsCommand, se_DescribeStackResourceDriftsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackResourceDriftsCommand}.
 */
export interface DescribeStackResourceDriftsCommandInput extends DescribeStackResourceDriftsInput {}
/**
 * @public
 *
 * The output of {@link DescribeStackResourceDriftsCommand}.
 */
export interface DescribeStackResourceDriftsCommandOutput extends DescribeStackResourceDriftsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns drift information for the resources that have been checked for drift in the specified stack. This
 *    includes actual and expected configuration values for resources where CloudFormation detects configuration drift.</p>
 *          <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack resource that has been
 *    checked for drift. Resources that haven't yet been checked for drift aren't included. Resources that don't currently
 *    support drift detection aren't checked, and so not included. For a list of resources that support drift detection,
 *    see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
 *          <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all supported resources for a given stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackResourceDriftsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackResourceDriftsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStackResourceDriftsInput
 *   StackName: "STRING_VALUE", // required
 *   StackResourceDriftStatusFilters: [ // StackResourceDriftStatusFilters
 *     "IN_SYNC" || "MODIFIED" || "DELETED" || "NOT_CHECKED",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeStackResourceDriftsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackResourceDriftsOutput
 * //   StackResourceDrifts: [ // StackResourceDrifts // required
 * //     { // StackResourceDrift
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
 * //       ExpectedProperties: "STRING_VALUE",
 * //       ActualProperties: "STRING_VALUE",
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
 * //       ModuleInfo: { // ModuleInfo
 * //         TypeHierarchy: "STRING_VALUE",
 * //         LogicalIdHierarchy: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStackResourceDriftsCommandInput - {@link DescribeStackResourceDriftsCommandInput}
 * @returns {@link DescribeStackResourceDriftsCommandOutput}
 * @see {@link DescribeStackResourceDriftsCommandInput} for command's `input` shape.
 * @see {@link DescribeStackResourceDriftsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class DescribeStackResourceDriftsCommand extends $Command<
  DescribeStackResourceDriftsCommandInput,
  DescribeStackResourceDriftsCommandOutput,
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
  constructor(readonly input: DescribeStackResourceDriftsCommandInput) {
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
  ): Handler<DescribeStackResourceDriftsCommandInput, DescribeStackResourceDriftsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStackResourceDriftsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeStackResourceDriftsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFormation",
        operation: "DescribeStackResourceDrifts",
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
  private serialize(input: DescribeStackResourceDriftsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStackResourceDriftsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStackResourceDriftsCommandOutput> {
    return de_DescribeStackResourceDriftsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
