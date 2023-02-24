// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ApplicationAutoScalingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationAutoScalingClient";
import {
  DeregisterScalableTargetRequest,
  DeregisterScalableTargetRequestFilterSensitiveLog,
  DeregisterScalableTargetResponse,
  DeregisterScalableTargetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterScalableTargetCommand,
  serializeAws_json1_1DeregisterScalableTargetCommand,
} from "../protocols/Aws_json1_1";

export interface DeregisterScalableTargetCommandInput extends DeregisterScalableTargetRequest {}
export interface DeregisterScalableTargetCommandOutput extends DeregisterScalableTargetResponse, __MetadataBearer {}

/**
 * <p>Deregisters an Application Auto Scaling scalable target when you have finished using it. To see which
 *          resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. </p>
 *          <note>
 *             <p>Deregistering a scalable target deletes the scaling policies and the scheduled
 *             actions that are associated with it.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, DeregisterScalableTargetCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, DeregisterScalableTargetCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const command = new DeregisterScalableTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterScalableTargetCommandInput} for command's `input` shape.
 * @see {@link DeregisterScalableTargetCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for ApplicationAutoScalingClient's `config` shape.
 *
 */
export class DeregisterScalableTargetCommand extends $Command<
  DeregisterScalableTargetCommandInput,
  DeregisterScalableTargetCommandOutput,
  ApplicationAutoScalingClientResolvedConfig
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

  constructor(readonly input: DeregisterScalableTargetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationAutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterScalableTargetCommandInput, DeregisterScalableTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterScalableTargetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationAutoScalingClient";
    const commandName = "DeregisterScalableTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterScalableTargetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeregisterScalableTargetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterScalableTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterScalableTargetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterScalableTargetCommandOutput> {
    return deserializeAws_json1_1DeregisterScalableTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
