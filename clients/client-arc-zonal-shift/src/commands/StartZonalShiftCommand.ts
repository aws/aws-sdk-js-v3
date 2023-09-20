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

import { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import { StartZonalShiftRequest, ZonalShift } from "../models/models_0";
import { de_StartZonalShiftCommand, se_StartZonalShiftCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartZonalShiftCommand}.
 */
export interface StartZonalShiftCommandInput extends StartZonalShiftRequest {}
/**
 * @public
 *
 * The output of {@link StartZonalShiftCommand}.
 */
export interface StartZonalShiftCommandOutput extends ZonalShift, __MetadataBearer {}

/**
 * @public
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
 * const input = { // StartZonalShiftRequest
 *   resourceIdentifier: "STRING_VALUE", // required
 *   awayFrom: "STRING_VALUE", // required
 *   expiresIn: "STRING_VALUE", // required
 *   comment: "STRING_VALUE", // required
 * };
 * const command = new StartZonalShiftCommand(input);
 * const response = await client.send(command);
 * // { // ZonalShift
 * //   zonalShiftId: "STRING_VALUE", // required
 * //   resourceIdentifier: "STRING_VALUE", // required
 * //   awayFrom: "STRING_VALUE", // required
 * //   expiryTime: new Date("TIMESTAMP"), // required
 * //   startTime: new Date("TIMESTAMP"), // required
 * //   status: "ACTIVE" || "EXPIRED" || "CANCELED", // required
 * //   comment: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartZonalShiftCommandInput - {@link StartZonalShiftCommandInput}
 * @returns {@link StartZonalShiftCommandOutput}
 * @see {@link StartZonalShiftCommandInput} for command's `input` shape.
 * @see {@link StartZonalShiftCommandOutput} for command's `response` shape.
 * @see {@link ARCZonalShiftClientResolvedConfig | config} for ARCZonalShiftClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The input requested a resource that was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ARCZonalShiftServiceException}
 * <p>Base exception class for all service exceptions from ARCZonalShift service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PercDataPlane",
        operation: "StartZonalShift",
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
  private serialize(input: StartZonalShiftCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartZonalShiftCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartZonalShiftCommandOutput> {
    return de_StartZonalShiftCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
