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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReportInstanceStatusRequest } from "../models/models_6";
import { de_ReportInstanceStatusCommand, se_ReportInstanceStatusCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReportInstanceStatusCommand}.
 */
export interface ReportInstanceStatusCommandInput extends ReportInstanceStatusRequest {}
/**
 * @public
 *
 * The output of {@link ReportInstanceStatusCommand}.
 */
export interface ReportInstanceStatusCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Submits feedback about the status of an instance. The instance must be in the
 *                 <code>running</code> state. If your experience with the instance differs from the
 *             instance status returned by <a>DescribeInstanceStatus</a>, use <a>ReportInstanceStatus</a> to report your experience with the instance. Amazon
 *             EC2 collects this information to improve the accuracy of status checks.</p>
 *          <p>Use of this action does not change the value returned by <a>DescribeInstanceStatus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReportInstanceStatusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReportInstanceStatusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ReportInstanceStatusRequest
 *   Description: "STRING_VALUE",
 *   DryRun: true || false,
 *   EndTime: new Date("TIMESTAMP"),
 *   Instances: [ // InstanceIdStringList // required
 *     "STRING_VALUE",
 *   ],
 *   ReasonCodes: [ // ReasonCodesList // required
 *     "instance-stuck-in-state" || "unresponsive" || "not-accepting-credentials" || "password-not-available" || "performance-network" || "performance-instance-store" || "performance-ebs-volume" || "performance-other" || "other",
 *   ],
 *   StartTime: new Date("TIMESTAMP"),
 *   Status: "ok" || "impaired", // required
 * };
 * const command = new ReportInstanceStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ReportInstanceStatusCommandInput - {@link ReportInstanceStatusCommandInput}
 * @returns {@link ReportInstanceStatusCommandOutput}
 * @see {@link ReportInstanceStatusCommandInput} for command's `input` shape.
 * @see {@link ReportInstanceStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ReportInstanceStatusCommand extends $Command<
  ReportInstanceStatusCommandInput,
  ReportInstanceStatusCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: ReportInstanceStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReportInstanceStatusCommandInput, ReportInstanceStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReportInstanceStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReportInstanceStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ReportInstanceStatus",
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
  private serialize(input: ReportInstanceStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReportInstanceStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReportInstanceStatusCommandOutput> {
    return de_ReportInstanceStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
