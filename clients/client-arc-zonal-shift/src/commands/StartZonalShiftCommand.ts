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

import { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import {
  StartZonalShiftRequest,
  StartZonalShiftRequestFilterSensitiveLog,
  ZonalShift,
  ZonalShiftFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartZonalShiftCommand,
  serializeAws_restJson1StartZonalShiftCommand,
} from "../protocols/Aws_restJson1";

export interface StartZonalShiftCommandInput extends StartZonalShiftRequest {}
export interface StartZonalShiftCommandOutput extends ZonalShift, __MetadataBearer {}

/**
 * <p>You start a zonal shift to temporarily move load balancer traffic away from an Availability Zone in a AWS Region,
 *    		to help your application recover immediately, for example, from a developer's bad code deployment or from an AWS
 *    		infrastructure failure in a single Availability Zone. You can start a zonal shift in Route 53 ARC only for managed
 *    		resources in your account in an AWS Region. Resources are automatically registered with Route 53 ARC by AWS services.</p>
 *    	     <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p>
 *    	     <p>When you start a zonal shift, traffic for the resource is no longer routed to the Availability Zone. The
 *    		zonal shift is created immediately in Route 53 ARC. However, it can take a short time, typically up to a few minutes,
 *    		for existing, in-progress connections in the Availability Zone to complete.</p>
 *    	     <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/arc-zonal-shift.html">Zonal shift</a>
 *    		in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, StartZonalShiftCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, StartZonalShiftCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * const client = new ARCZonalShiftClient(config);
 * const command = new StartZonalShiftCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartZonalShiftCommandInput} for command's `input` shape.
 * @see {@link StartZonalShiftCommandOutput} for command's `response` shape.
 * @see {@link ARCZonalShiftClientResolvedConfig | config} for ARCZonalShiftClient's `config` shape.
 *
 */
export class StartZonalShiftCommand extends $Command<
  StartZonalShiftCommandInput,
  StartZonalShiftCommandOutput,
  ARCZonalShiftClientResolvedConfig
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

  constructor(readonly input: StartZonalShiftCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ARCZonalShiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartZonalShiftCommandInput, StartZonalShiftCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartZonalShiftCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ARCZonalShiftClient";
    const commandName = "StartZonalShiftCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartZonalShiftRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ZonalShiftFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartZonalShiftCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartZonalShiftCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartZonalShiftCommandOutput> {
    return deserializeAws_restJson1StartZonalShiftCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
