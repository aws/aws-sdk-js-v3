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
import { DescribeStackDriftDetectionStatusInput, DescribeStackDriftDetectionStatusOutput } from "../models/models_0";
import {
  de_DescribeStackDriftDetectionStatusCommand,
  se_DescribeStackDriftDetectionStatusCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackDriftDetectionStatusCommand}.
 */
export interface DescribeStackDriftDetectionStatusCommandInput extends DescribeStackDriftDetectionStatusInput {}
/**
 * @public
 *
 * The output of {@link DescribeStackDriftDetectionStatusCommand}.
 */
export interface DescribeStackDriftDetectionStatusCommandOutput
  extends DescribeStackDriftDetectionStatusOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a stack drift detection operation. A stack drift detection operation detects whether a
 *    stack's actual configuration differs, or has <i>drifted</i>, from its expected configuration, as
 *    defined in the stack template and any values specified as template parameters. A stack is considered to have drifted
 *    if one or more of its resources have drifted. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated
 *     Configuration Changes to Stacks and Resources</a>.</p>
 *          <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation.
 *     <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use to monitor the progress of
 *    the operation using <code>DescribeStackDriftDetectionStatus</code>. Once the drift detection operation has completed,
 *    use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its
 *    resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackDriftDetectionStatusCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackDriftDetectionStatusCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStackDriftDetectionStatusInput
 *   StackDriftDetectionId: "STRING_VALUE", // required
 * };
 * const command = new DescribeStackDriftDetectionStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackDriftDetectionStatusOutput
 * //   StackId: "STRING_VALUE", // required
 * //   StackDriftDetectionId: "STRING_VALUE", // required
 * //   StackDriftStatus: "DRIFTED" || "IN_SYNC" || "UNKNOWN" || "NOT_CHECKED",
 * //   DetectionStatus: "DETECTION_IN_PROGRESS" || "DETECTION_FAILED" || "DETECTION_COMPLETE", // required
 * //   DetectionStatusReason: "STRING_VALUE",
 * //   DriftedStackResourceCount: Number("int"),
 * //   Timestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeStackDriftDetectionStatusCommandInput - {@link DescribeStackDriftDetectionStatusCommandInput}
 * @returns {@link DescribeStackDriftDetectionStatusCommandOutput}
 * @see {@link DescribeStackDriftDetectionStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeStackDriftDetectionStatusCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 */
export class DescribeStackDriftDetectionStatusCommand extends $Command<
  DescribeStackDriftDetectionStatusCommandInput,
  DescribeStackDriftDetectionStatusCommandOutput,
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
  constructor(readonly input: DescribeStackDriftDetectionStatusCommandInput) {
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
  ): Handler<DescribeStackDriftDetectionStatusCommandInput, DescribeStackDriftDetectionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStackDriftDetectionStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeStackDriftDetectionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudFormation",
        operation: "DescribeStackDriftDetectionStatus",
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
    input: DescribeStackDriftDetectionStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeStackDriftDetectionStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStackDriftDetectionStatusCommandOutput> {
    return de_DescribeStackDriftDetectionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
